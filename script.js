// ============================================================
// === KAERI EDTECH QUIZ ENGINE - HYBRID MASTER ===
// === Base B Stability + Version A Growth Features ===
// ============================================================

// --- CONFIGURATION & STATE ---
let ttsEnabled = false;
let printContentData = null;
let hasFullAccess = false;
let currentPrice = 15;
let isSubmissionLocked = false; // Critical Base B Stability Feature

// --- DATA CONTAINERS ---
let allMcqData = [], allShortData = [], allEssayData = [], allFlashcards = {};
let currentMcqData = [], currentShortData = [], currentEssayData = [], currentFlashcardTopics = {};

// --- SESSION CONTEXT ---
let currentCourse = null, currentTerm = null, currentTermKey = null;
let currentQuizType = null, currentQuestionIndex = 0, currentScore = 0, currentQuizData = [];
let currentEssay = null, currentStepIndex = 0, essayScore = 0;
let currentFlashcardTopic = null, currentFlashcards = [], currentCardIndex = 0, isCardFront = true;

// ============================================================
// === INITIALIZATION & DATA LOADING ===
// ============================================================

function loadGlobalData() {
    // Safely load data from external files (mcqDa.js, etc.)
    if (typeof mcqData !== 'undefined') allMcqData = mcqData; 
    else if (typeof mcqDa !== 'undefined') allMcqData = mcqDa; 
    else allMcqData = [];
    
    allShortData = typeof shortData !== 'undefined' ? shortData : [];
    allEssayData = typeof essayData !== 'undefined' ? essayData : [];
    allFlashcards = typeof flashcards !== 'undefined' ? flashcards : {};
}

function initializeCourseLogic() {
    loadGlobalData();
    
    // Initialize TTS
    ttsEnabled = localStorage.getItem("ttsEnabled") === "true";
    const modeButtonsDiv = document.querySelector('.mode-buttons');
    if (modeButtonsDiv && !document.getElementById('tts-toggle-button')) {
        const ttsButton = document.createElement('button');
        ttsButton.id = 'tts-toggle-button';
        ttsButton.onclick = toggleTTS;
        modeButtonsDiv.appendChild(ttsButton);
        updateTtsButtonText();
    }

    // Context Setup
    const body = document.body;
    currentCourse = body.getAttribute('data-course');
    currentTerm = body.getAttribute('data-term');
    currentTermKey = `${currentCourse}_${currentTerm}`;
    
    // Ensure usedAccessCodes is synced from storage (Data from acc.js + LocalStorage)
    try { 
        const stored = JSON.parse(localStorage.getItem("globalUsedAccessCodes"));
        if (stored && Array.isArray(stored)) {
            // Merge unique entries if acc.js has some default ones
            if (typeof usedAccessCodes !== 'undefined') {
                 usedAccessCodes = stored;
            }
        }
    } catch(e) { 
        console.error("Storage Error:", e);
    }

    // Filter Data
    currentMcqData = filterDataByCourseAndTerm(allMcqData, currentCourse, currentTerm);
    currentShortData = filterDataByCourseAndTerm(allShortData, currentCourse, currentTerm);
    currentEssayData = filterDataByCourseAndTerm(allEssayData, currentCourse, currentTerm);
    currentFlashcardTopics = filterFlashcardsByCourseAndTerm(allFlashcards, currentCourse, currentTerm);

    // Security Check
    authenticateUser();
    checkExpiryWarning();
}

// ============================================================
// === SECURITY & AUTHENTICATION (Smart Features) ===
// ============================================================

function authenticateUser() {
    let valid = false;
    
    const check = (key) => {
        const code = localStorage.getItem("accessCode_" + key);
        const expiry = localStorage.getItem("accessCodeExpires_" + key);
        
        if (!code || !expiry) return false;
        
        // 1. Revocation Check
        if (typeof revokedAccessCodes !== 'undefined' && revokedAccessCodes.includes(code)) {
            localStorage.removeItem("accessCode_" + key);
            localStorage.removeItem("accessCodeExpires_" + key);
            return false;
        }
        
        // 2. Device Binding Check (Smart Security)
        if (typeof usedAccessCodes !== 'undefined') {
            const used = usedAccessCodes.find(e => e.code === code);
            if (used && used.user !== "self" && used.user !== undefined) {
                return false; 
            }
        }
        
        // 3. Expiry Check
        if (Date.now() < parseInt(expiry)) return true;
        else {
            localStorage.removeItem("accessCode_" + key);
            localStorage.removeItem("accessCodeExpires_" + key);
            return false;
        }
    };

    // Hierarchy Check
    if (check(currentTermKey)) valid = true;
    else if (check(currentCourse + "_ALL_TERMS")) valid = true;
    else if (check("GLOBAL_ALL_TERMS")) valid = true;

    if (valid) enableFullAccessUI();
    else enableDemoUI();
}

function verifyCodeFromModal() {
    const userCode = document.getElementById('access-code-input').value.trim();
    const courseAllTermsKey = `${currentCourse}_ALL_TERMS`;
    
    if (!userCode) return alert("Please enter a code.");
    
    // Revocation Check
    if (typeof revokedAccessCodes !== 'undefined' && revokedAccessCodes.includes(userCode)) {
        return alert("❌ This code has been revoked.");
    }
    
    // Device Binding Check
    if (typeof usedAccessCodes !== 'undefined') {
        const globalUsed = usedAccessCodes.find(e => e.code === userCode);
        if (globalUsed && globalUsed.user !== "self") {
            return alert("❌ This code has already been activated on another device.");
        }
    }
    
    // Determine Access Type
    let type = "", prefix = "";
    if (typeof fullAccessCodes !== 'undefined') {
        if (fullAccessCodes.GLOBAL_ALL_TERMS?.includes(userCode)) {
            type = "Global"; prefix = "GLOBAL_ALL_TERMS";
        } else if (fullAccessCodes[courseAllTermsKey]?.includes(userCode)) {
            type = "Course"; prefix = courseAllTermsKey;
        } else if (fullAccessCodes[currentTermKey]?.includes(userCode)) {
            type = "Term"; prefix = currentTermKey;
        }
    }
    
    if (!type) return alert("❌ Invalid code. Please check and try again.");
    
    // Activate
    const expiry = Date.now() + (typeof MILLISECONDS_IN_20_DAYS !== 'undefined' ? MILLISECONDS_IN_20_DAYS : 1728000000);
    localStorage.setItem("accessCode_" + prefix, userCode);
    localStorage.setItem("accessCodeExpires_" + prefix, expiry);
    
    // Bind to Device
    if (typeof usedAccessCodes !== 'undefined') {
        usedAccessCodes.push({
            code: userCode,
            globalExpiry: expiry,
            user: "self",
            activated: Date.now()
        });
        localStorage.setItem("globalUsedAccessCodes", JSON.stringify(usedAccessCodes));
    }
    
    closePaymentModal();
    enableFullAccessUI();
    showAppNotification(`🎉 ${type} Access Activated!`, "success");
}

function checkExpiryWarning() {
    const keys = [`accessCode_${currentTermKey}`, `accessCode_${currentCourse}_ALL_TERMS`, `accessCode_GLOBAL_ALL_TERMS`];
    keys.forEach(key => {
        const expiry = localStorage.getItem(key.replace("accessCode_", "accessCodeExpires_"));
        if (expiry) {
            const daysLeft = Math.ceil((parseInt(expiry) - Date.now()) / (1000 * 60 * 60 * 24));
            if (daysLeft <= 3 && daysLeft > 0) {
                showAppNotification(`⚠️ Access expires in ${daysLeft} day${daysLeft > 1 ? 's' : ''}!`, "warning", 8000);
            }
        }
    });
}

function blockDemo(type) {
    if (hasFullAccess) return false;
    
    const key = `demo_${type}_used_${currentTermKey}`;
    let attempts = parseInt(localStorage.getItem(key) || "0");
    const maxAttempts = 5;
    const attemptsLeft = maxAttempts - attempts;
    
    // Smart Notification: Urgency
    if (attempts < maxAttempts) {
        showAppNotification(`Demo Mode: ${attemptsLeft} attempts remaining.`, "info", 2000);
    }
    
    // Hard Block + Sales Trigger
    if (attempts >= maxAttempts) {
        showAppNotification(`Demo limit reached. Unlock Full Access!`, "warning");
        openPaymentModal(); 
        return true;
    }
    
    localStorage.setItem(key, attempts + 1);
    return false;
}

// ============================================================
// === UI & NAVIGATION ===
// ============================================================

function enableFullAccessUI() {
    hasFullAccess = true;
    updateModeBanner("✅ FULL ACCESS");
    const banner = document.getElementById('mode-banner');
    if(banner) {
        banner.className = 'full-access-banner';
        banner.classList.remove('demo-mode-banner');
    }
    const unlockBtn = document.getElementById('unlock-btn');
    if(unlockBtn) unlockBtn.style.display = 'none';
    clearDemoLocks();
}

function enableDemoUI() {
    hasFullAccess = false;
    updateModeBanner("🔒 Demo Mode");
    const banner = document.getElementById('mode-banner');
    if(banner) {
        banner.className = 'demo-mode-banner';
        banner.classList.remove('full-access-banner');
    }
    const unlockBtn = document.getElementById('unlock-btn');
    if(unlockBtn) unlockBtn.style.display = 'block';
}

function loadCourse(course, term, price) {
    document.body.setAttribute('data-course', course);
    document.body.setAttribute('data-term', term);
    currentPrice = price;
    
    document.getElementById('course-title').textContent = `${course} Term ${term.replace('T','')} Study Materials`;
    document.getElementById('price-banner').textContent = `Price: K${price}`;
    document.getElementById('price-val').textContent = `K${price}`;
    document.getElementById('price-desc').textContent = `${course} Term ${term.replace('T','')}`;
    
    document.getElementById('landing-view').style.display = 'none';
    document.getElementById('course-view').style.display = 'block';
    document.getElementById('fixed-header').style.display = 'block';
    document.getElementById('price-banner').style.display = 'block';
    document.body.classList.add('view-course');
    window.scrollTo(0,0);
    
    setTimeout(() => {
        initializeCourseLogic();
        renderQuiz(); 
    }, 100);
}

function backToMenu() {
    document.getElementById('landing-view').style.display = 'block';
    document.getElementById('course-view').style.display = 'none';
    document.getElementById('fixed-header').style.display = 'none';
    document.getElementById('price-banner').style.display = 'none';
    document.body.classList.remove('view-course');

    document.getElementById('quiz-form').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.body.removeAttribute('data-course');
    document.body.removeAttribute('data-term');
    stopReading(); 
    window.scrollTo(0,0);
}

function toggleTerms(courseId) {
    const termButtons = document.getElementById(courseId + '-terms');
    const courseButton = termButtons.previousElementSibling;
    if (termButtons.style.display === 'flex') {
        termButtons.style.display = 'none';
        courseButton.classList.remove('active');
    } else {
        document.querySelectorAll('.term-buttons').forEach(section => {
            if (section.id !== courseId + '-terms') {
                section.style.display = 'none';
                section.previousElementSibling.classList.remove('active');
            }
        });
        termButtons.style.display = 'flex';
        courseButton.classList.add('active');
    }
}

function openPaymentModal() {
    document.getElementById('pay-term-name').textContent = `${currentCourse} ${currentTerm}`;
    document.getElementById('pay-amount').textContent = `K${currentPrice}`;
    document.getElementById('payment-modal').classList.add('show');
    setTimeout(() => {
        const input = document.getElementById('access-code-input');
        if(input) input.focus();
    }, 300);
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.remove('show');
}

// ============================================================
// === QUIZ ENGINE (Base B Stability + Version A Features) ===
// ============================================================

// --- MCQ ---
function renderQuiz() {
    if (blockDemo('mcq')) return;
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";
    let q = shuffle([...currentMcqData]).slice(0, 10);
    currentQuizData = q;
    currentQuizType = 'mcq';
    currentQuestionIndex = 0;
    currentScore = 0;
    if (q.length === 0) {
        container.innerHTML = "<p>No questions available.</p>";
        updateProgress(0, 0);
        return;
    }
    displayMcqQuestion();
}

function displayMcqQuestion() {
    isSubmissionLocked = false; 
    const container = document.getElementById("quiz-form");
    const q = currentQuizData[currentQuestionIndex];
    updateProgress(currentQuestionIndex + 1, currentQuizData.length);
    
    if (!q) return showFinalMcqScore();
    
    let html = `
        <div class="question-header"><h3>MCQ ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3></div>
        <div class="question-box"><p>${q.q}</p><div class="options">
    `;
    
    if (q.options) {
        q.options.forEach((opt, i) => {
            html += `<label><input type="radio" name="mcq" value="${i}"/> ${String.fromCharCode(65 + i)}. ${opt}</label>`;
        });
    }
    
    html += `</div><button id="mcq-submit-btn" onclick="checkMcqAnswer()">✅ Submit</button></div>`;
    container.innerHTML = html;
    document.getElementById("result").innerHTML = "";
    container.scrollIntoView({ behavior: "smooth" });
    readCurrentQuestion();
}

function checkMcqAnswer() {
    if (isSubmissionLocked) return;
    
    const selected = document.querySelector('input[name="mcq"]:checked');
    if (!selected) return showAppNotification("Select an option!", "warning");

    isSubmissionLocked = true;
    const submitBtn = document.getElementById("mcq-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d"; 
    }
    document.querySelectorAll('input[name="mcq"]').forEach(input => input.disabled = true);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const q = currentQuizData[currentQuestionIndex];
    const userAnswer = parseInt(selected.value);
    
    if (userAnswer === q.correct) {
        currentScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
    } else {
        resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</p>`;
    }
    
    const explanationBox = `<div class="explanation-box">${q.explanation || ''}</div>`;
    resultDiv.innerHTML += explanationBox;
    
    currentQuestionIndex++;
    
    const nextBtn = document.createElement("button");
    nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish Quiz";
    nextBtn.onclick = displayMcqQuestion;
    resultDiv.appendChild(nextBtn);
}

function showFinalMcqScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentQuizData.length, currentQuizData.length);
    const percent = Math.round((currentScore / currentQuizData.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    
    container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Try Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = renderQuiz;
    container.appendChild(restartBtn);

    // Smart Feature: Viral Loop
    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentScore, currentQuizData.length, "MCQ");
    container.appendChild(challengeBtn);

    // Smart Feature: Preview/Print
    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);
}

// --- SHORT ANSWER ---
function renderShortAnswers() {
    if (blockDemo('shortAnswer')) return;
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";
    let q = shuffle([...currentShortData]).slice(0, 10);
    currentQuizData = q;
    currentQuizType = 'shortAnswer';
    currentQuestionIndex = 0;
    currentScore = 0;
    if (q.length === 0) {
        container.innerHTML = "<p>No short answer questions available.</p>";
        updateProgress(0, 0);
        return;
    }
    displayShortAnswerQuestion();
}

function displayShortAnswerQuestion() {
    isSubmissionLocked = false;
    const container = document.getElementById("quiz-form");
    const q = currentQuizData[currentQuestionIndex];
    updateProgress(currentQuestionIndex + 1, currentQuizData.length);
    if (!q) return showFinalShortAnswerScore();
    
    container.innerHTML = `<h3>Short Answer ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3><div class="question-box"><p>${q.q}</p></div><textarea id="short-answer-input"></textarea><button id="sa-submit-btn" onclick="checkShortAnswer()">✅ Submit</button>`;
    document.getElementById("result").innerHTML = "";
    container.scrollIntoView({ behavior: "smooth" });
    readCurrentQuestion();
}

function checkShortAnswer() {
    if (isSubmissionLocked) return;
    const inputEl = document.getElementById("short-answer-input");
    const ans = inputEl.value.trim().toLowerCase();
    
    if (!ans) return showAppNotification("Please type your answer!", "warning");
    isSubmissionLocked = true;

    const submitBtn = document.getElementById("sa-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Checked ✓";
        submitBtn.style.backgroundColor = "#6c757d";
    }
    inputEl.disabled = true;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const q = currentQuizData[currentQuestionIndex];
    const matched = q.keywords.some(k => ans.includes(k.toLowerCase()));
    
    if (matched) {
        currentScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
    } else {
        resultDiv.innerHTML = `<p>❌ Keywords: ${q.keywords.join(', ')}</p>`;
    }
    
    const explanationBox = `<div class="explanation-box">${q.explanation || ''}</div>`;
    resultDiv.innerHTML += explanationBox;
    
    currentQuestionIndex++;
    
    const nextBtn = document.createElement("button");
    nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish";
    nextBtn.onclick = displayShortAnswerQuestion;
    resultDiv.appendChild(nextBtn);
}

function showFinalShortAnswerScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentQuizData.length, currentQuizData.length);
    const percent = Math.round((currentScore / currentQuizData.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
    
    container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Try Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = renderShortAnswers;
    container.appendChild(restartBtn);

    // Smart Feature: Viral Loop
    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentScore, currentQuizData.length, "Short Answer");
    container.appendChild(challengeBtn);

    // Smart Feature: Preview/Print
    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);
}

// --- ESSAY ---
function renderEssaySimulation() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";

    currentQuizData = currentEssayData; 
    if (currentQuizData.length === 0) {
        container.innerHTML = "<p>No essay simulations available for this term yet.</p>";
        updateProgress(0, 0);
        return;
    }

    currentQuizType = 'essay'; 
    updateProgress(0, 0);

    const header = document.createElement("h2");
    header.innerText = "Select Essay Topic";
    header.style.textAlign = "center"; 
    header.style.marginBottom = "25px";
    container.appendChild(header);

    const listDiv = document.createElement('div');
    listDiv.className = 'flashcard-topic-buttons'; 

    currentQuizData.forEach((essay, index) => {
        const btn = document.createElement("button");
        btn.textContent = essay.title; 
        btn.onclick = () => attemptStartEssay(index); 
        listDiv.appendChild(btn);
    });

    container.appendChild(listDiv);
}

function attemptStartEssay(index) {
    if (blockDemo('essay')) return; 
    startSpecificEssay(index);
}

function startSpecificEssay(index) {
    currentEssay = currentQuizData[index];
    currentStepIndex = 0;
    essayScore = 0;
    document.getElementById("result").innerHTML = "";
    showEssayStep(0);
}

function showEssayStep(index) {
    isSubmissionLocked = false;
    const container = document.getElementById("quiz-form");
    const essay = currentEssay;
    const step = essay.steps[index];
    updateProgress(index + 1, essay.steps.length);
    if (!step) return showFinalEssayScore();
    
    let html = `
        <div class="question-header"><h3>📄 ${essay.title} — Step ${index + 1} of ${essay.steps.length}</h3><p>Topic: ${essay.topic} | ${essay.year}</p></div>
        <div class="question-box"><p><strong>Q:</strong> ${step.q}</p><div class="options">
    `;
    step.options.forEach((opt, i) => {
        html += `<label class="option"><input type="radio" name="step-option" value="${i}" /> <span>${String.fromCharCode(65 + i)}. ${opt}</span></label>`;
    });
    
    html += `</div><button id="essay-submit-btn" onclick="checkEssayStep()">✅ Submit Step</button></div>`;
    container.innerHTML = html;
    document.getElementById("result").innerHTML = "";
    container.scrollIntoView({ behavior: "smooth" });
    readCurrentQuestion();
}

function checkEssayStep() {
    if (isSubmissionLocked) return;
    const selectedOption = document.querySelector('input[name="step-option"]:checked');
    if (!selectedOption) return showAppNotification("Please select an option!", "warning");

    isSubmissionLocked = true;
    const submitBtn = document.getElementById("essay-submit-btn");
    if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d";
    }
    document.querySelectorAll('input[name="step-option"]').forEach(input => input.disabled = true);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    const essay = currentEssay;
    const step = essay.steps[currentStepIndex];
    const userAnswer = parseInt(selectedOption.value);
    const correct = userAnswer === step.correct;
    
    if (correct) {
        essayScore++;
        resultDiv.innerHTML = "<p>✔️ Correct!</p>";
    } else {
        resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + step.correct)}. ${step.options[step.correct]}</p>`;
    }
    
    const explanationBox = `<div class="explanation-box">${step.explanation || ''}</div>`;
    resultDiv.innerHTML += explanationBox;
    
    const nextBtn = document.createElement("button");
    nextBtn.innerText = currentStepIndex < essay.steps.length - 1 ? "Next ➡️" : "Finish";
    nextBtn.onclick = () => {
        if (currentStepIndex < essay.steps.length - 1) {
            currentStepIndex++;
            showEssayStep(currentStepIndex); 
        } else {
            showFinalEssayScore();
        }
    };
    resultDiv.appendChild(nextBtn);
}

function showFinalEssayScore() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    updateProgress(currentEssay.steps.length, currentEssay.steps.length);
    
    const percent = Math.round((essayScore / currentEssay.steps.length) * 100);
    let comment = percent >= 90 ? "🎉 Excellent process understanding!" : percent >= 70 ? "✅ Good step-by-step grasp!" : percent >= 50 ? "⚠️ Some steps need revision." : "❌ Keep improving!";
    
    container.innerHTML = `<h2>Simulation Complete!</h2><p>Your Score: ${essayScore} / ${currentEssay.steps.length} (${percent}%)</p><p><em>${comment}</em></p>`;
    
    const retryBtn = document.createElement("button");
    retryBtn.innerText = "🔁 Retry This Essay";
    retryBtn.className = "restart-button";
    retryBtn.style.marginRight = "10px";
    retryBtn.onclick = () => attemptStartEssay(currentQuizData.indexOf(currentEssay));
    container.appendChild(retryBtn);

    // Smart Feature: Viral Loop
    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(essayScore, currentEssay.steps.length, "Essay Simulation");
    container.appendChild(challengeBtn);

    // Smart Feature: Preview/Print
    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅️ Back to Topics";
    backBtn.className = "back-button"; 
    backBtn.onclick = renderEssaySimulation;
    container.appendChild(backBtn);
}

// --- FLASHCARDS ---
function renderFlashcardTopics() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = "";
    document.getElementById("result").innerHTML = "";
    currentQuizType = 'flashcard';
    updateProgress(0, 0);
    if (Object.keys(currentFlashcardTopics).length === 0) {
        container.innerHTML = "<p>No flashcards available for this term.</p>";
        return;
    }
    const header = document.createElement("h2");
    header.innerText = "Select Flashcard Topic";
    header.style.textAlign = "center";
    header.style.marginBottom = "25px";
    container.appendChild(header);
    const listDiv = document.createElement('div');
    listDiv.className = 'flashcard-topic-buttons';
    for (const topic in currentFlashcardTopics) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => attemptStartFlashcard(topic);
        listDiv.appendChild(btn);
    }
    container.appendChild(listDiv);
}

function attemptStartFlashcard(topic) {
    if (blockDemo('flashcard')) return;
    startFlashcards(topic);
}

function startFlashcards(topic) {
    currentFlashcardTopic = topic;
    currentFlashcards = currentFlashcardTopics[topic];
    currentCardIndex = 0;
    isCardFront = true;
    displayFlashcard();
}

function displayFlashcard() {
    const container = document.getElementById("quiz-form");
    const card = currentFlashcards[currentCardIndex];
    updateProgress(currentCardIndex + 1, currentFlashcards.length);
    
    if (!card) return showFlashcardCompletion();
    
    // FIX: Check if this is the last card to change button text
    const isLastCard = currentCardIndex === currentFlashcards.length - 1;

    container.innerHTML = `
        <h3>Flashcard: ${currentFlashcardTopic} (${currentCardIndex + 1} / ${currentFlashcards.length})</h3>
        <div class="flashcard-wrapper">
            <div class="flashcard ${isCardFront ? '' : 'back-active'}" onclick="flipCard()">
                <div class="card-face card-front">${card.front}</div>
                <div class="card-face card-back">${card.back}</div>
            </div>
        </div>
        <div class="flashcard-nav-buttons">
            <button onclick="prevFlashcard()" ${currentCardIndex === 0 ? 'disabled' : ''}>⬅️ Prev</button>
            
            <!-- FIX: Button is NOT disabled on last card. It triggers Finish. -->
            <button onclick="nextFlashcard()">${isLastCard ? 'Finish 🏁' : 'Next ➡️'}</button>
        </div>
        <button class="back-to-topics-button" onclick="renderFlashcardTopics()">⬅️ Back to Topics</button>
    `;
    
    container.scrollIntoView({ behavior: "smooth" });
    readFlashcard();
}

function flipCard() { isCardFront = !isCardFront; displayFlashcard(); }

function prevFlashcard() { 
    if (currentCardIndex > 0) { 
        currentCardIndex--; 
        isCardFront = true; 
        displayFlashcard(); 
    } 
}

function nextFlashcard() { 
    // FIX: If at end, show completion. Otherwise, go next.
    if (currentCardIndex < currentFlashcards.length - 1) { 
        currentCardIndex++; 
        isCardFront = true; 
        displayFlashcard(); 
    } else { 
        showFlashcardCompletion(); 
    } 
}

function showFlashcardCompletion() {
    const container = document.getElementById("quiz-form");
    container.innerHTML = `
        <div style="text-align: center;">
            <h2>Topic Complete!</h2>
            <p>You have reviewed all flashcards for "<strong>${currentFlashcardTopic}</strong>".</p>
        </div>
    `;
    updateProgress(currentFlashcards.length, currentFlashcards.length);

    // 1. Restart Button
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Review Again";
    restartBtn.className = "restart-button";
    restartBtn.style.marginRight = "10px";
    restartBtn.onclick = () => attemptStartFlashcard(currentFlashcardTopic);
    container.appendChild(restartBtn);

    // 2. Viral Challenge Button
    const challengeBtn = document.createElement("button");
    challengeBtn.innerHTML = "⚔️ Challenge a Friend";
    challengeBtn.className = "challenge-button";
    challengeBtn.onclick = () => challengeFriend(currentFlashcards.length, 0, "Flashcards");
    container.appendChild(challengeBtn);

    // 3. Preview & Print Button
    const previewBtn = document.createElement("button");
    previewBtn.innerText = "👁️ Preview & Print";
    previewBtn.style.backgroundColor = "#007bff"; 
    previewBtn.style.color = "white";
    previewBtn.style.marginLeft = "10px";
    previewBtn.onclick = generatePrintPreview;
    container.appendChild(previewBtn);

    // 4. Back Button
    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅️ Back to Topics";
    backBtn.className = "back-button";
    backBtn.onclick = renderFlashcardTopics;
    container.appendChild(backBtn);
}

// ============================================================
// === SMART FEATURES (Viral Loop & Printing) ===
// ============================================================

function challengeFriend(score, total, modeName) {
    const link = "https://kaerikalmar.github.io/KAERI-CBU-REVISIONS-SITE/";
    let message = "";
    
    if (modeName === "Flashcards") {
        message = `I mastered the ${score} Flashcard Deck on Kaeri EdTech! Challenge you to beat me! 👇\n${link}`;
    } else {
        const percent = Math.round((score / total) * 100);
        message = `I scored ${percent}% (${score}/${total}) in ${currentCourse} ${currentTerm} (${modeName})! Challenge you to beat my score! 👇\n${link}`;
    }
    
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
}

function generatePrintPreview() {
    const printDiv = document.getElementById("print-preview-content");
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    
    let modeTitle = "";
    if (currentQuizType === 'essay') modeTitle = currentEssay.title;
    else if (currentQuizType === 'flashcard') modeTitle = currentFlashcardTopic + " - Glossary";
    else modeTitle = `${currentCourse} ${currentTerm} - Practice Session`;
    
    let html = `
        <div class="preview-header">
            <h1>${modeTitle}</h1>
            <p><strong>Kaeri EdTech Study Systems</strong></p>
            <p>📞 Call/WhatsApp: <strong>0964312504</strong> for Full Access</p>
            <p style="font-size: 0.9em; border-top: 1px solid #ccc; padding-top: 5px; margin-top: 5px;">
                Generated on: ${date} | Preview - Click Print to save as PDF
            </p>
            <div style="background: #fff3cd; padding: 10px; border-radius: 5px; margin-top: 10px; border: 1px solid #ffeaa7; font-size: 0.9em;">
                <strong>💡 Tip:</strong> Use "Save as PDF" option in print dialog to create digital copy. Watermark will appear on all pages.
            </div>
        </div>
    `;
    
    if (currentQuizType === 'essay') {
        currentEssay.steps.forEach((step, index) => {
            html += `<div class="preview-step"><div class="preview-q">Step ${index + 1}: ${step.q}</div><div class="preview-ans">✅ Correct Action: ${step.options[step.correct]}</div><div class="preview-exp">💡 Note: ${step.explanation || "No additional explanation."}</div></div>`;
        });
    } else if (currentQuizType === 'mcq') {
        currentQuizData.forEach((item, index) => {
            html += `<div class="preview-step"><div class="preview-q">Q${index + 1}: ${item.q}</div><div class="preview-ans">✅ Answer: ${item.options[item.correct]}</div><div class="preview-exp">💡 Explanation: ${item.explanation || "No additional explanation."}</div></div>`;
        });
    } else if (currentQuizType === 'shortAnswer') {
        currentQuizData.forEach((item, index) => {
            html += `<div class="preview-step"><div class="preview-q">Q${index + 1}: ${item.q}</div><div class="preview-ans">🔑 Required Keywords: ${item.keywords.join(", ")}</div><div class="preview-exp">💡 Explanation: ${item.explanation || "No additional explanation."}</div></div>`;
        });
    } else if (currentQuizType === 'flashcard') {
        currentFlashcards.forEach((card, index) => {
            html += `<div class="preview-step" style="border-left-color: #6f42c1;"><div class="preview-q" style="color: #333; font-size: 1.1em;">${index + 1}. ${card.front}</div><div class="preview-ans" style="color: #6f42c1; border-left-color: #6f42c1;">Definition:</div><div style="margin-top:5px; padding: 8px; background: #f8f9fa; border-radius: 4px;">${card.back}</div></div>`;
        });
    }
    
    html += `<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 0.9em; color: #666;"><p>Study smarter with Kaeri EdTech. Contact 0964312504 for full access.</p></div>`;
    
    printContentData = { html: html.replace(/preview-/g, 'pdf-') };
    printDiv.innerHTML = html;
    document.getElementById('print-preview-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function proceedToPrint() {
    closePrintPreview();
    setTimeout(() => {
        const printDiv = document.getElementById("printable-summary");
        printDiv.innerHTML = printContentData.html;
        const style = document.createElement('style');
        style.innerHTML = `@page { margin: 20mm; size: A4; }`;
        printDiv.appendChild(style);
        window.print();
        setTimeout(() => { printDiv.innerHTML = ''; }, 1000);
    }, 300);
}

function closePrintPreview() {
    document.getElementById('print-preview-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ============================================================
// === UTILITIES ===
// ============================================================

function filterDataByCourseAndTerm(data, course, term) {
    if (!Array.isArray(data)) return [];
    return data.filter(item => item.course === course && item.term === term);
}

function filterFlashcardsByCourseAndTerm(all, course, term) {
    const filtered = {};
    for (const topic in all) {
        if (all.hasOwnProperty(topic)) {
            const cards = all[topic].filter(card => card.course === course && card.term === term);
            if (cards.length > 0) filtered[topic] = cards;
        }
    }
    return filtered;
}

function updateModeBanner(message) {
    const banner = document.getElementById("mode-banner");
    if (banner) banner.textContent = message;
}

function showAppNotification(message, type = 'info', duration = 4000) {
    const el = document.getElementById('app-notification');
    if (!el) return alert(message);
    el.querySelector('.notification-message').textContent = message;
    el.className = 'show ' + type;
    if (el.timeoutId) clearTimeout(el.timeoutId);
    el.timeoutId = setTimeout(() => el.classList.remove('show'), duration);
    el.querySelector('.close-btn').onclick = () => {
        el.classList.remove('show');
        clearTimeout(el.timeoutId);
    };
}

function updateProgress(current, total) {
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    const percent = total === 0 ? 0 : (current / total) * 100;
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `Progress: ${current} of ${total}`;
}

function clearDemoLocks() {
    ["mcq", "shortAnswer", "essay", "flashcard"].forEach(
        m => localStorage.removeItem(`demo_${m}_used_${currentTermKey}`)
    );
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// ============================================================
// === TEXT-TO-SPEECH ===
// ============================================================

let utterance = null;
function updateTtsButtonText() {
    const ttsButton = document.getElementById('tts-toggle-button');
    if (ttsButton) ttsButton.textContent = ttsEnabled ? '🔊 Turn Reader Off' : '🔇 Turn Reader On';
}

function toggleTTS() {
    ttsEnabled = !ttsEnabled;
    localStorage.setItem("ttsEnabled", ttsEnabled);
    stopReading();
    updateTtsButtonText();
    showAppNotification(ttsEnabled ? "🔊 Reader is now ON." : "🔇 Reader is now OFF.");
}

function stopReading() {
    if (utterance) { window.speechSynthesis.cancel(); utterance = null; }
}

function readText(text) {
    if (!ttsEnabled) return;
    stopReading();
    utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

function readCurrentQuestion() {
    if (!ttsEnabled) return;
    stopReading();
    let textToRead = "";
    if (currentQuizType === 'mcq' || currentQuizType === 'essay') {
        const questionElement = document.querySelector('.question-box p');
        const optionsElements = document.querySelectorAll('.options label');
        if (questionElement) textToRead += questionElement.textContent.trim();
        if (optionsElements.length > 0) {
            textToRead += ". Options are: ";
            optionsElements.forEach((label, i) => {
                const optionText = label.textContent.replace(String.fromCharCode(65 + i) + ".", "").trim();
                textToRead += `${String.fromCharCode(65 + i)}. ${optionText}. `;
            });
        }
    } else if (currentQuizType === 'shortAnswer') {
        const questionElement = document.querySelector('.question-box p');
        if (questionElement) textToRead = questionElement.textContent.trim();
    }
    readText(textToRead);
}

function readFlashcard() {
    if (!ttsEnabled) return;
    stopReading();
    const card = currentFlashcards[currentCardIndex];
    readText(isCardFront ? `Front of card. ${card.front}` : `Back of card. ${card.back}`);
}

// ============================================================
// === GLOBAL INPUT HANDLING ===
// ============================================================

document.addEventListener("keydown", (e) => {
    // Smart Shortcut: Unlock
    if ((e.key === 'u' || e.key === 'U') && currentCourse && !hasFullAccess) {
        e.preventDefault();
        openPaymentModal();
        return; 
    }
    
    if (!currentQuizType) return;
    
    // Quiz Navigation
    if (currentQuizType === "mcq" || currentQuizType === "essay") {
        const options = document.querySelectorAll('input[type="radio"]');
        const selected = document.querySelector('input[type="radio"]:checked');
        let index = Array.from(options).indexOf(selected);
        switch (e.key) {
            case "ArrowDown": case "ArrowRight":
                if (options.length) { index = (index + 1) % options.length; options[index].checked = true; } break;
            case "ArrowUp": case "ArrowLeft":
                if (options.length) { index = (index - 1 + options.length) % options.length; options[index].checked = true; } break;
            case "1": case "a": case "A": if (options[0]) options[0].checked = true; break;
            case "2": case "b": case "B": if (options[1]) options[1].checked = true; break;
            case "3": case "c": case "C": if (options[2]) options[2].checked = true; break;
            case "4": case "d": case "D": if (options[3]) options[3].checked = true; break;
            case "Enter":
                if (currentQuizType === "mcq") checkMcqAnswer();
                if (currentQuizType === "essay") checkEssayStep();
                break;
            case " ": case "n": case "N":
                const nextBtn = document.querySelector("#result button");
                if (nextBtn) nextBtn.click();
                break;
        }
    }
    
    if (currentQuizType === "shortAnswer" && e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); 
        checkShortAnswer();
    }
    
    if (currentQuizType === "flashcard") {
        switch (e.key) {
            case "ArrowLeft": prevFlashcard(); break;
            case "ArrowRight": nextFlashcard(); break;
            case " ": case "Enter": flipCard(); break;
        }
    }
    
    // Modal Shortcuts
    if (e.key === "Escape") {
        closePaymentModal();
        closePrintPreview();
    }
});

// ============================================================
// === EVENT LISTENERS & SETUP ===
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-print-preview');
    if(closeBtn) closeBtn.addEventListener('click', closePrintPreview);
    
    const modal = document.getElementById('print-preview-modal');
    if(modal) modal.addEventListener('click', function(e) {
        if (e.target === this) closePrintPreview();
    });
    
    const paymentModal = document.getElementById('payment-modal');
    if(paymentModal) paymentModal.addEventListener('click', function(e) {
        if (e.target === this) closePaymentModal();
    });
});

