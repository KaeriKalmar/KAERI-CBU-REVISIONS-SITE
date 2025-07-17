// === CONFIGURATION ===
const fullAccessCodes = {

  // === BI110 ===
  "BI110_T1": [
    "BI110T1_MAIN001#A@",   "BI110T1_MAIN002!Z*",
    "BI110T1_MAIN003$K#",   "BI110T1_MAIN004&Y!",
    "BI110T1_MAIN005*X%",   "BI110T1_MAIN006^R&",
    "BI110T1_MAIN007~S+",   "BI110T1_MAIN008?D#",
    "BI110T1_MAIN009|Q$",   "BI110T1_MAIN010<>P",
    "BI110T1_BONUS011 %1",  "BI110T1_BONUS012 @2",
    "BI110T1_BONUS013 #3",  "BI110T1_BONUS014 &4",
    "BI110T1_BONUS015 *5",  "BI110T1_BONUS016 ^6",
    "BI110T1_EXTRA017 ~7",  "BI110T1_EXTRA018 ?8",
    "BI110T1_TEST019 |9",   "BI110T1_TEST020 <0"
  ],

  "BI110_T2": [
    "BI110T2_MAIN001#A@",   "BI110T2_MAIN002!Z*",
    "BI110T2_MAIN003$K#",   "BI110T2_MAIN004&Y!",
    "BI110T2_MAIN005*X%",   "BI110T2_MAIN006^R&",
    "BI110T2_MAIN007~S+",   "BI110T2_MAIN008?D#",
    "BI110T2_MAIN009|Q$",   "BI110T2_MAIN010<>P",
    "BI110T2_BONUS011 %1",  "BI110T2_BONUS012 @2",
    "BI110T2_BONUS013 #3",  "BI110T2_BONUS014 &4",
    "BI110T2_BONUS015 *5",  "BI110T2_BONUS016 ^6",
    "BI110T2_EXTRA017 ~7",  "BI110T2_EXTRA018 ?8",
    "BI110T2_TEST019 |9",   "BI110T2_TEST020 <0"
  ],

  "BI110_T3": [
    "BI110T3_MAIN001#A@",   "BI110T3_MAIN002!Z*",
    "BI110T3_MAIN003$K#",   "BI110T3_MAIN004&Y!",
    "BI110T3_MAIN005*X%",   "BI110T3_MAIN006^R&",
    "BI110T3_MAIN007~S+",   "BI110T3_MAIN008?D#",
    "BI110T3_MAIN009|Q$",   "BI110T3_MAIN010<>P",
    "BI110T3_BONUS011 %1",  "BI110T3_BONUS012 @2",
    "BI110T3_BONUS013 #3",  "BI110T3_BONUS014 &4",
    "BI110T3_BONUS015 *5",  "BI110T3_BONUS016 ^6",
    "BI110T3_EXTRA017 ~7",  "BI110T3_EXTRA018 ?8",
    "BI110T3_TEST019 |9",   "BI110T3_TEST020 <0"
  ],

  // === CS110 ===
  "CS110_T1": [
    "CS110T1_MAIN001#A@",   "CS110T1_MAIN002!Z*",
    "CS110T1_MAIN003$K#",   "CS110T1_MAIN004&Y!",
    "CS110T1_MAIN005*X%",   "CS110T1_MAIN006^R&",
    "CS110T1_MAIN007~S+",   "CS110T1_MAIN008?D#",
    "CS110T1_MAIN009|Q$",   "CS110T1_MAIN010<>P",
    "CS110T1_BONUS011 %1",  "CS110T1_BONUS012 @2",
    "CS110T1_BONUS013 #3",  "CS110T1_BONUS014 &4",
    "CS110T1_BONUS015 *5",  "CS110T1_BONUS016 ^6",
    "CS110T1_EXTRA017 ~7",  "CS110T1_EXTRA018 ?8",
    "CS110T1_TEST019 |9",   "CS110T1_TEST020 <0"
  ],

  "CS110_T2": [
    "CS110T2_MAIN001#A@",   "CS110T2_MAIN002!Z*",
    "CS110T2_MAIN003$K#",   "CS110T2_MAIN004&Y!",
    "CS110T2_MAIN005*X%",   "CS110T2_MAIN006^R&",
    "CS110T2_MAIN007~S+",   "CS110T2_MAIN008?D#",
    "CS110T2_MAIN009|Q$",   "CS110T2_MAIN010<>P",
    "CS110T2_BONUS011 %1",  "CS110T2_BONUS012 @2",
    "CS110T2_BONUS013 #3",  "CS110T2_BONUS014 &4",
    "CS110T2_BONUS015 *5",  "CS110T2_BONUS016 ^6",
    "CS110T2_EXTRA017 ~7",  "CS110T2_EXTRA018 ?8",
    "CS110T2_TEST019 |9",   "CS110T2_TEST020 <0"
  ],

  "CS110_T3": [
    "CS110T3_MAIN001#A@",   "CS110T3_MAIN002!Z*",
    "CS110T3_MAIN003$K#",   "CS110T3_MAIN004&Y!",
    "CS110T3_MAIN005*X%",   "CS110T3_MAIN006^R&",
    "CS110T3_MAIN007~S+",   "CS110T3_MAIN008?D#",
    "CS110T3_MAIN009|Q$",   "CS110T3_MAIN010<>P",
    "CS110T3_BONUS011 %1",  "CS110T3_BONUS012 @2",
    "CS110T3_BONUS013 #3",  "CS110T3_BONUS014 &4",
    "CS110T3_BONUS015 *5",  "CS110T3_BONUS016 ^6",
    "CS110T3_EXTRA017 ~7",  "CS110T3_EXTRA018 ?8",
    "CS110T3_TEST019 |9",   "CS110T3_TEST020 <0"
  ]

};

//code killing section
const revokedAccessCodes = [];


//global used codes management 
let usedAccessCodes = ["CS110T3_MAIN001#A@","CS110T3_MAIN002!Z*","CS110T3_MAIN001#A@","CS110T3_MAIN002!Z*","CS110T2_MAIN002!Z*","BI110T1_MAIN001#A@","CS110T3_MAIN001#A@"];
let hasFullAccess = false;
const EXPIRES_IN_DAYS = 20;
const MILLISECONDS_IN_20_DAYS = EXPIRES_IN_DAYS * 24 * 60 * 60 * 1000;

let allMcqData = [];
let allShortData = [];
let allEssayData = [];
let allFlashcards = {};
let currentMcqData = [];
let currentShortData = [];
let currentEssayData = [];
let currentFlashcardTopics = {};
let currentQuizType = null;
let currentQuestionIndex = 0;
let currentScore = 0;
let currentQuizData = [];

let currentCourse = null;
let currentTerm = null;
let currentTermKey = null;

function denyAccess(message) {
    hasFullAccess = false;
    localStorage.removeItem("accessCode");
    localStorage.removeItem("accessCodeExpires");
    updateModeBanner("🔒 Demo Mode: Limited Access");
    showAppNotification(message, "error");
}

window.onload = () => {
    const body = document.body;
    currentCourse = body.getAttribute('data-course');
    currentTerm = body.getAttribute('data-term');
    currentTermKey = `${currentCourse}_${currentTerm}`;

    if (!currentCourse || !currentTerm) return;

    try {
        const storedUsed = localStorage.getItem("globalUsedAccessCodes");
        usedAccessCodes = storedUsed ? JSON.parse(storedUsed) : [];
    } catch {
        usedAccessCodes = [];
    }

    allMcqData = typeof mcqData !== 'undefined' ? mcqData : [];
    allShortData = typeof shortData !== 'undefined' ? shortData : [];
    allEssayData = typeof essayData !== 'undefined' ? essayData : [];
    allFlashcards = typeof flashcards !== 'undefined' ? flashcards : {};

    currentMcqData = filterDataByCourseAndTerm(allMcqData, currentCourse, currentTerm);
    currentShortData = filterDataByCourseAndTerm(allShortData, currentCourse, currentTerm);
    currentEssayData = filterDataByCourseAndTerm(allEssayData, currentCourse, currentTerm);
    currentFlashcardTopics = filterFlashcardsByCourseAndTerm(allFlashcards, currentCourse, currentTerm);

    const accessCodeFromLS = localStorage.getItem("accessCode");
    let needsPrompt = true;

    if (accessCodeFromLS) {
        if (revokedAccessCodes.includes(accessCodeFromLS)) {
            denyAccess(`❌ Your stored code "${accessCodeFromLS}" was revoked.`);
        } else if (!(fullAccessCodes[currentTermKey] && fullAccessCodes[currentTermKey].includes(accessCodeFromLS))) {
            denyAccess(`⚠️ Code "${accessCodeFromLS}" is not valid for this term.`);
        } else {
            const global = usedAccessCodes.find(e => e.code === accessCodeFromLS);
            if (global && Date.now() < global.globalExpiry) {
                localStorage.setItem("accessCodeExpires", global.globalExpiry);
                hasFullAccess = true;
                showAppNotification("✅ Full Access Mode", "success");
                clearDemoLocks();
                needsPrompt = false;
            } else if (global && Date.now() >= global.globalExpiry) {
                denyAccess(`⏳ Code "${accessCodeFromLS}" expired.`);
            } else {
                const newExpiry = Date.now() + MILLISECONDS_IN_20_DAYS;
                usedAccessCodes.push({ code: accessCodeFromLS, globalExpiry: newExpiry });
                localStorage.setItem("globalUsedAccessCodes", JSON.stringify(usedAccessCodes));
                localStorage.setItem("accessCodeExpires", newExpiry);
                hasFullAccess = true;
                showAppNotification("✅ Full Access Re-activated", "success");
                clearDemoLocks();
                needsPrompt = false;
            }
        }
    }

    if (needsPrompt) {
        const userCode = prompt("Enter Access Code (or blank for Demo):");
        if (!userCode) {
            updateModeBanner("🔒 Demo Mode");
            showAppNotification("🔒 Demo Mode", "info");
        } else if (revokedAccessCodes.includes(userCode)) {
            denyAccess(`❌ "${userCode}" is revoked.`);
        } else if (fullAccessCodes[currentTermKey] && fullAccessCodes[currentTermKey].includes(userCode)) {
            const global = usedAccessCodes.find(e => e.code === userCode);
            if (global && Date.now() < global.globalExpiry) {
                localStorage.setItem("accessCode", userCode);
                localStorage.setItem("accessCodeExpires", global.globalExpiry);
                hasFullAccess = true;
                showAppNotification("✅ Full Access", "success");
                clearDemoLocks();
            } else if (global && Date.now() >= global.globalExpiry) {
                denyAccess(`⏳ "${userCode}" expired.`);
            } else {
                const newExpiry = Date.now() + MILLISECONDS_IN_20_DAYS;
                usedAccessCodes.push({ code: userCode, globalExpiry: newExpiry });
                localStorage.setItem("globalUsedAccessCodes", JSON.stringify(usedAccessCodes));
                localStorage.setItem("accessCode", userCode);
                localStorage.setItem("accessCodeExpires", newExpiry);
                hasFullAccess = true;
                showAppNotification("✅ Full Access", "success");
                clearDemoLocks();
            }
        } else {
            denyAccess("❌ Invalid Code.");
        }
    }
};

function showAppNotification(message, type = 'info', duration = 5000) {
    const el = document.getElementById('app-notification');
    if (!el) return alert(message);
    el.querySelector('.notification-message').textContent = message;
    el.className = 'show'; el.classList.add(type);
    if (el.timeoutId) clearTimeout(el.timeoutId);
    el.timeoutId = setTimeout(() => el.classList.remove('show'), duration);
    el.querySelector('.close-btn').onclick = () => {
        el.classList.remove('show');
        clearTimeout(el.timeoutId);
    };
}

function updateModeBanner(message) {
    const banner = document.getElementById("mode-banner");
    if (banner) {
        banner.textContent = message;
    }
}

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

function blockDemo(type) {
    if (hasFullAccess) return false;
    const key = `demo_${type}_used_${currentTermKey}`;
    let attempts = parseInt(localStorage.getItem(key) || "0");
    if (attempts >= 1) {
        showAppNotification(`Demo limit reached for ${type}. Buy access to unlock.`, "warning");
        return true;
    }
    localStorage.setItem(key, attempts + 1);
    return false;
}

function updateProgress(current, total) {
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");
    const percent = total === 0 ? 0 : (current / total) * 100;
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `Progress: ${current} of ${total}`;
}

// === MCQ MODE ===

function renderQuiz() {
  if (blockDemo('mcq')) return;

  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  document.getElementById("result").innerHTML = "";

  let q = hasFullAccess ? shuffle([...currentMcqData]).slice(0, 10) : shuffle([...currentMcqData]).slice(0, 3);
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
  const container = document.getElementById("quiz-form");
  const q = currentQuizData[currentQuestionIndex];
  updateProgress(currentQuestionIndex + 1, currentQuizData.length);

  if (!q) return showFinalMcqScore();

  let html = `
    <div class="question-header">
      <h3>MCQ ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3>
    </div>
    <div class="question-box">
      <p>${q.q}</p>
      <div class="options">
  `;
  q.options.forEach((opt, i) => {
    html += `<label><input type="radio" name="mcq" value="${i}"/> ${String.fromCharCode(65 + i)}. ${opt}</label>`;
  });
  html += `
      </div>
      <button onclick="checkMcqAnswer()">✅ Submit</button>
    </div>
  `;

  container.innerHTML = html;
  document.getElementById("result").innerHTML = "";
  container.scrollIntoView({ behavior: "smooth" });
}

function checkMcqAnswer() {
  const selected = document.querySelector('input[name="mcq"]:checked');
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!selected) {
    showAppNotification("Select an option!", "warning");
    return;
  }

  const q = currentQuizData[currentQuestionIndex];
  const userAnswer = parseInt(selected.value);

  if (userAnswer === q.correct) {
    currentScore++;
    resultDiv.innerHTML = "<p>✔️ Correct!</p>";
  } else {
    resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</p>`;
  }

  resultDiv.innerHTML += `<div class="explanation-box">${q.explanation || ''}</div>`;

  currentQuestionIndex++;
  const nextBtn = document.createElement("button");
  nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish Quiz";
  nextBtn.onclick = displayMcqQuestion;
  resultDiv.appendChild(nextBtn);

  document.querySelectorAll('input[name="mcq"]').forEach(input => input.disabled = true);
}

function showFinalMcqScore() {
  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  updateProgress(currentQuizData.length, currentQuizData.length);

  const percent = Math.round((currentScore / currentQuizData.length) * 100);

  let comment = "❌ Keep practicing!";
  if (percent >= 90) comment = "🎉 Excellent work!";
  else if (percent >= 70) comment = "✅ Good job!";
  else if (percent >= 50) comment = "⚠️ Fair attempt.";

  container.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p>
    <p><em>${comment}</em></p>
  `;

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔁 Try Again";
  restartBtn.onclick = renderQuiz;
  container.appendChild(restartBtn);
}

// === SHORT ANSWER MODE ===

function renderShortAnswers() {
  if (blockDemo('shortAnswer')) return;

  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  document.getElementById("result").innerHTML = "";

  let q = hasFullAccess ? shuffle([...currentShortData]).slice(0, 10) : shuffle([...currentShortData]).slice(0, 2);
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
  const container = document.getElementById("quiz-form");
  const q = currentQuizData[currentQuestionIndex];
  updateProgress(currentQuestionIndex + 1, currentQuizData.length);

  if (!q) return showFinalShortAnswerScore();

  container.innerHTML = `
    <h3>Short Answer ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3>
    <p>${q.q}</p>
    <textarea id="short-answer-input"></textarea>
    <button onclick="checkShortAnswer()">✅ Submit</button>
  `;

  document.getElementById("result").innerHTML = "";
  container.scrollIntoView({ behavior: "smooth" });
}

function checkShortAnswer() {
  const ans = document.getElementById("short-answer-input").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!ans) {
    showAppNotification("Please type your answer!", "warning");
    return;
  }

  const q = currentQuizData[currentQuestionIndex];
  const matched = q.keywords.some(k => ans.includes(k.toLowerCase()));

  if (matched) {
    currentScore++;
    resultDiv.innerHTML = "<p>✔️ Correct!</p>";
  } else {
    resultDiv.innerHTML = `<p>❌ Keywords: ${q.keywords.join(', ')}</p>`;
  }

  resultDiv.innerHTML += `<div class="explanation-box">${q.explanation || ''}</div>`;

  currentQuestionIndex++;
  const nextBtn = document.createElement("button");
  nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish";
  nextBtn.onclick = displayShortAnswerQuestion;
  resultDiv.appendChild(nextBtn);

  document.getElementById("short-answer-input").disabled = true;
}

function showFinalShortAnswerScore() {
  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  updateProgress(currentQuizData.length, currentQuizData.length);

  const percent = Math.round((currentScore / currentQuizData.length) * 100);
  let comment = "❌ Keep practicing!";
  if (percent >= 90) comment = "🎉 Excellent work!";
  else if (percent >= 70) comment = "✅ Good job!";
  else if (percent >= 50) comment = "⚠️ Fair attempt.";

  container.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p>
    <p><em>${comment}</em></p>
  `;

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔁 Try Again";
  restartBtn.onclick = renderShortAnswers;
  container.appendChild(restartBtn);
}


// === ESSAY SIMULATION ===

let currentEssay = null;
let currentStepIndex = 0;
let essayScore = 0;

function renderEssaySimulation() {
  if (blockDemo('essay')) return;

  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  document.getElementById("result").innerHTML = "";

  currentQuizData = hasFullAccess ? currentEssayData : currentEssayData.slice(0, 1);

  if (currentQuizData.length === 0) {
    container.innerHTML = "<p>No essay simulations available for this term yet.</p>";
    updateProgress(0, 0);
    return;
  }

  currentEssay = currentQuizData[0];
  currentStepIndex = 0;
  essayScore = 0;

  showEssayStep(currentStepIndex);
}

function showEssayStep(index) {
  const container = document.getElementById("quiz-form");
  const essay = currentEssay;
  const step = essay.steps[index];

  updateProgress(index + 1, essay.steps.length);

  if (!step) {
    showFinalEssayScore();
    return;
  }

  let html = `
    <div class="question-header">
      <h3>📄 ${essay.title} — Step ${index + 1} of ${essay.steps.length}</h3>
      <p>Topic: ${essay.topic} | ${essay.year} | ${essay.tag || ""}</p>
    </div>
    <div class="question-box">
      <p><strong>Q:</strong> ${step.q}</p>
      <div class="options">
  `;

  step.options.forEach((opt, i) => {
    html += `
      <label class="option">
        <input type="radio" name="step-option" value="${i}" />
        <span>${String.fromCharCode(65 + i)}. ${opt}</span>
      </label>
    `;
  });

  html += `
      </div>
      <button onclick="checkEssayStep()">✅ Submit Step</button>
    </div>
  `;

  container.innerHTML = html;
  document.getElementById("result").innerHTML = "";
  container.scrollIntoView({ behavior: "smooth" });
}

function checkEssayStep() {
  const selectedOption = document.querySelector('input[name="step-option"]:checked');
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!selectedOption) {
    showAppNotification("Please select an option!", "warning");
    return;
  }

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

  resultDiv.innerHTML += `<div class="explanation-box">${step.explanation || ''}</div>`;

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

  document.querySelectorAll('input[name="step-option"]').forEach(input => input.disabled = true);
}

function showFinalEssayScore() {
  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  updateProgress(currentEssay.steps.length, currentEssay.steps.length);

  const percent = Math.round((essayScore / currentEssay.steps.length) * 100);
  let comment = "❌ Keep improving!";
  if (percent >= 90) comment = "🎉 Excellent process understanding!";
  else if (percent >= 70) comment = "✅ Good step-by-step grasp!";
  else if (percent >= 50) comment = "⚠️ Some steps need revision.";

  container.innerHTML = `
    <h2>Simulation Complete!</h2>
    <p>Your Score: ${essayScore} / ${currentEssay.steps.length} (${percent}%)</p>
    <p><em>${comment}</em></p>
  `;

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔁 Try Another Simulation";
  restartBtn.onclick = renderEssaySimulation;
  container.appendChild(restartBtn);
}

// === FLASHCARDS ===

let currentFlashcardTopic = null;
let currentFlashcards = [];
let currentCardIndex = 0;
let isCardFront = true;

function renderFlashcardTopics() {
  if (blockDemo('flashcard')) return;

  const container = document.getElementById("quiz-form");
  container.innerHTML = "";
  document.getElementById("result").innerHTML = "";

  currentQuizType = 'flashcard';
  updateProgress(0, 0);

  if (Object.keys(currentFlashcardTopics).length === 0) {
    container.innerHTML = "<p>No flashcards available for this term.</p>";
    return;
  }

  for (const topic in currentFlashcardTopics) {
    const btn = document.createElement("button");
    btn.textContent = topic;
    btn.onclick = () => startFlashcards(topic);
    container.appendChild(btn);
  }
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
      <button onclick="nextFlashcard()" ${currentCardIndex === currentFlashcards.length - 1 ? 'disabled' : ''}>Next ➡️</button>
    </div>
    <button class="back-to-topics-button" onclick="renderFlashcardTopics()">⬅️ Back to Topics</button>
  `;

  container.scrollIntoView({ behavior: "smooth" });
}

function flipCard() {
  isCardFront = !isCardFront;
  displayFlashcard();
}

function prevFlashcard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    isCardFront = true;
    displayFlashcard();
  }
}

function nextFlashcard() {
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
    <p>✅ Done with flashcards for "${currentFlashcardTopic}".</p>
    <button onclick="startFlashcards(currentFlashcardTopic)">🔁 Review Again</button>
    <button onclick="renderFlashcardTopics()">⬅️ Back to Topics</button>
  `;
  updateProgress(currentFlashcards.length, currentFlashcards.length);
}
  
