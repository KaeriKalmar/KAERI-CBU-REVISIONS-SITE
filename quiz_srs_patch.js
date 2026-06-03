// ============================================================
// === KAERI EDTECH — QUIZ SRS PATCH (Additive, Non-Breaking) ===
// === Applies spaced repetition to MCQ, Short Answer & Essay  ===
// === based on wrong answers. Notifies students of due items. ===
// ============================================================

// ──────────────────────────────────────────────────────────────
// SECTION A: QUIZ SRS STORAGE LAYER
//
// Key format:  kaeri_qsrs_v1_<termKey>
// Value:       { "<type>:<questionId>": { interval, efactor, repetition, dueDate, isNew } }
//
// questionId strategy (stable, no schema change needed):
//   MCQ / SA  → item.id  ?? stringified q text (first 60 chars)
//   Essay     → essay.title + "_step_" + stepIndex
// ──────────────────────────────────────────────────────────────

const QuizSRS = (() => {
    const PREFIX = 'kaeri_qsrs_v1_';

    function _key() {
        return PREFIX + (window.currentTermKey || 'global');
    }

    function _load() {
        try { return JSON.parse(localStorage.getItem(_key()) || '{}'); }
        catch (e) { return {}; }
    }

    function _save(data) {
        try { localStorage.setItem(_key(), JSON.stringify(data)); }
        catch (e) {}
    }

    /** Build a stable ID for a quiz item */
    function itemId(type, item, extraHint) {
        if (item && item.id) return type + ':' + item.id;
        if (type === 'essay' && extraHint !== undefined) {
            return 'essay:' + (window.currentEssay ? window.currentEssay.title : 'unknown') + '_step_' + extraHint;
        }
        const raw = item ? (item.q || item.front || '') : (extraHint || '');
        return type + ':' + raw.slice(0, 60).replace(/\s+/g, '_');
    }

    /** Get SRS record for one question */
    function get(type, item, extraHint) {
        const data = _load();
        const id   = itemId(type, item, extraHint);
        return data[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: 0, isNew: true };
    }

    /** Update SRS record after a wrong answer (quality = 0) or correct (quality = 4) */
    function update(type, item, quality, extraHint) {
        const data  = _load();
        const id    = itemId(type, item, extraHint);
        let card    = data[id] || { interval: 0, repetition: 0, efactor: 2.5, dueDate: 0, isNew: true };

        if (quality < 3) {
            // Wrong: reset, review tomorrow
            card.repetition = 0;
            card.interval   = 1;
        } else {
            // Correct
            if (card.repetition === 0)      card.interval = quality >= 5 ? 7 : quality >= 4 ? 4 : 2;
            else if (card.repetition === 1) card.interval = Math.max(6, Math.round(card.interval * card.efactor));
            else                            card.interval = Math.round(card.interval * card.efactor);
            card.repetition += 1;
        }

        card.efactor = Math.max(1.3, card.efactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

        const now    = new Date();
        card.dueDate = new Date(now.setDate(now.getDate() + card.interval)).getTime();
        card.isNew   = false;

        data[id] = card;
        _save(data);
        return card;
    }

    /** Return all items (from a question array) that are due for review right now */
    function getDueItems(type, items, essayTitle) {
        const data = _load();
        const now  = Date.now();
        return items.filter((item, idx) => {
            let id;
            if (type === 'essay') {
                id = 'essay:' + (essayTitle || 'unknown') + '_step_' + idx;
            } else {
                id = itemId(type, item);
            }
            const rec = data[id];
            // Due if: never seen (isNew) OR overdue
            return !rec || rec.isNew || rec.dueDate <= now;
        });
    }

    /** Count due items across all types for the current term */
    function countAllDue() {
        if (!window.currentTermKey) return { mcq: 0, shortAnswer: 0, essay: 0, total: 0 };
        const mcqDue  = getDueItems('mcq', window.currentMcqData || []).length;
        const saDue   = getDueItems('shortAnswer', window.currentShortData || []).length;

        // Essay: count steps across all essays that are due
        let essayDue = 0;
        (window.currentEssayData || []).forEach(essay => {
            essayDue += getDueItems('essay', essay.steps || [], essay.title).length;
        });

        return {
            mcq:         mcqDue,
            shortAnswer: saDue,
            essay:       essayDue,
            total:       mcqDue + saDue + essayDue
        };
    }

    return { get, update, getDueItems, countAllDue, itemId };
})();


// ──────────────────────────────────────────────────────────────
// SECTION B: DUE REVIEW NOTIFICATION
// Called once after initializeCourseLogic sets up currentMcqData etc.
// ──────────────────────────────────────────────────────────────

function injectDueReviewBanner() {
    // Remove stale banner if re-entering course
    const old = document.getElementById('due-review-banner');
    if (old) old.remove();

    const counts = QuizSRS.countAllDue();
    if (counts.total === 0) return; // Nothing due — stay silent

    const parts = [];
    if (counts.mcq        > 0) parts.push(`${counts.mcq} MCQ`);
    if (counts.shortAnswer > 0) parts.push(`${counts.shortAnswer} Short Answer`);
    if (counts.essay      > 0) parts.push(`${counts.essay} Essay step${counts.essay !== 1 ? 's' : ''}`);

    const banner = document.createElement('div');
    banner.id = 'due-review-banner';
    banner.style.cssText = `
        background: linear-gradient(135deg, #1a2a1a, #0d1b0d);
        border: 1px solid #28a745;
        border-left: 5px solid #28a745;
        border-radius: 10px;
        padding: 14px 18px;
        margin: 0 0 18px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        animation: fadeIn 0.4s ease;
    `;

    banner.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; flex:1; min-width:200px;">
            <span style="font-size:1.6em;">🔔</span>
            <div>
                <div style="color:#28a745; font-weight:700; font-size:0.95em;">
                    ${counts.total} question${counts.total !== 1 ? 's' : ''} due for review today
                </div>
                <div style="color:#a0a8b4; font-size:0.78em; margin-top:2px;">
                    ${parts.join(' · ')} — from previous wrong answers
                </div>
            </div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${counts.mcq > 0
                ? `<button onclick="startDueReview('mcq')"
                    style="background:#28a745; color:white; border:none; padding:8px 14px;
                           border-radius:7px; font-size:0.82em; font-weight:700; cursor:pointer;">
                    📝 Review MCQ (${counts.mcq})
                   </button>`
                : ''}
            ${counts.shortAnswer > 0
                ? `<button onclick="startDueReview('shortAnswer')"
                    style="background:#ffc107; color:#222; border:none; padding:8px 14px;
                           border-radius:7px; font-size:0.82em; font-weight:700; cursor:pointer;">
                    ✍️ Review SA (${counts.shortAnswer})
                   </button>`
                : ''}
            ${counts.essay > 0
                ? `<button onclick="startDueReview('essay')"
                    style="background:#e67e00; color:white; border:none; padding:8px 14px;
                           border-radius:7px; font-size:0.82em; font-weight:700; cursor:pointer;">
                    📄 Review Essay (${counts.essay})
                   </button>`
                : ''}
            <button onclick="document.getElementById('due-review-banner').style.display='none'"
                style="background:transparent; color:#555; border:1px solid #3e506e;
                       padding:8px 10px; border-radius:7px; font-size:0.82em; cursor:pointer;">
                ✕ Dismiss
            </button>
        </div>
    `;

    // Insert above the mode-buttons div, or at top of quiz-form
    const modeButtons = document.querySelector('.mode-buttons');
    if (modeButtons) {
        modeButtons.parentNode.insertBefore(banner, modeButtons);
    } else {
        const quizForm = document.getElementById('quiz-form');
        if (quizForm) quizForm.parentNode.insertBefore(banner, quizForm);
    }
}

/** Start a focused review session using only due items */
function startDueReview(type) {
    if (type === 'mcq') {
        const due = QuizSRS.getDueItems('mcq', currentMcqData);
        if (due.length === 0) {
            showAppNotification('✅ No MCQ items due for review!', 'success', 2500);
            return;
        }
        showAppNotification(`🔁 Starting review of ${due.length} due MCQ item(s)`, 'info', 1800);
        setTimeout(() => {
            const container = document.getElementById('quiz-form');
            container.innerHTML = '';
            document.getElementById('result').innerHTML = '';
            currentQuizData    = shuffle([...due]);
            currentQuizType    = 'mcq';
            currentQuestionIndex = 0;
            currentScore       = 0;
            displayMcqQuestion();
            logAnalyticsEvent('due_review_start', `MCQ (${due.length} due items)`);
        }, 500);

    } else if (type === 'shortAnswer') {
        const due = QuizSRS.getDueItems('shortAnswer', currentShortData);
        if (due.length === 0) {
            showAppNotification('✅ No Short Answer items due for review!', 'success', 2500);
            return;
        }
        showAppNotification(`🔁 Starting review of ${due.length} due SA item(s)`, 'info', 1800);
        setTimeout(() => {
            const container = document.getElementById('quiz-form');
            container.innerHTML = '';
            document.getElementById('result').innerHTML = '';
            currentQuizData    = shuffle([...due]);
            currentQuizType    = 'shortAnswer';
            currentQuestionIndex = 0;
            currentScore       = 0;
            displayShortAnswerQuestion();
            logAnalyticsEvent('due_review_start', `SA (${due.length} due items)`);
        }, 500);

    } else if (type === 'essay') {
        // Collect all due steps across essays, grouped back into synthetic essay objects
        const dueEssays = currentEssayData
            .map(essay => {
                const dueSteps = QuizSRS.getDueItems('essay', essay.steps || [], essay.title);
                if (dueSteps.length === 0) return null;
                return { ...essay, steps: dueSteps, _isDueReview: true };
            })
            .filter(Boolean);

        if (dueEssays.length === 0) {
            showAppNotification('✅ No Essay items due for review!', 'success', 2500);
            return;
        }
        const totalSteps = dueEssays.reduce((sum, e) => sum + e.steps.length, 0);
        showAppNotification(`🔁 Starting review of ${totalSteps} due essay step(s)`, 'info', 1800);

        // Render essay list with only due essays
        setTimeout(() => {
            const container = document.getElementById('quiz-form');
            container.innerHTML = '';
            document.getElementById('result').innerHTML = '';
            currentQuizData  = dueEssays;
            currentQuizType  = 'essay';
            updateProgress(0, 0);

            const header = document.createElement('h2');
            header.textContent = '🔁 Due Essay Review';
            header.style.textAlign = 'center';
            header.style.marginBottom = '20px';
            container.appendChild(header);

            const sub = document.createElement('p');
            sub.textContent = `${dueEssays.length} essay topic(s) with due steps — select one to review`;
            sub.style.cssText = 'text-align:center; color:#a0a8b4; margin-bottom:20px; font-size:0.9em;';
            container.appendChild(sub);

            const listDiv = document.createElement('div');
            listDiv.className = 'flashcard-topic-buttons';
            dueEssays.forEach((essay, index) => {
                const btn = document.createElement('button');
                btn.textContent = `${essay.title} (${essay.steps.length} step${essay.steps.length !== 1 ? 's' : ''} due)`;
                btn.onclick = () => startSpecificEssay(index);
                listDiv.appendChild(btn);
            });
            container.appendChild(listDiv);
            logAnalyticsEvent('due_review_start', `Essay (${totalSteps} due steps)`);
        }, 500);
    }
}


// ──────────────────────────────────────────────────────────────
// SECTION C: MONKEY-PATCH EXISTING ANSWER-CHECK FUNCTIONS
// We wrap the originals so SRS update fires after each answer.
// ──────────────────────────────────────────────────────────────

(function patchAnswerChecks() {

    // ── MCQ ──────────────────────────────────────────────────
    const _origCheckMcq = window.checkMcqAnswer;
    window.checkMcqAnswer = function () {
        // Capture state BEFORE the original function increments currentQuestionIndex
        const qBefore   = currentQuizData[currentQuestionIndex];
        const selected  = document.querySelector('input[name="mcq"]:checked');
        const wasLocked = window.isSubmissionLocked;

        _origCheckMcq.apply(this, arguments);

        // Only record if the original accepted the answer (wasn't already locked)
        if (!wasLocked && selected && qBefore) {
            const userAnswer = parseInt(selected.value);
            const isCorrect  = userAnswer === qBefore.correct;
            const quality    = isCorrect ? 4 : 0; // 4 = "Good", 0 = "Again"
            QuizSRS.update('mcq', qBefore, quality);
        }
    };

    // ── Short Answer ─────────────────────────────────────────
    const _origCheckSA = window.checkShortAnswer;
    window.checkShortAnswer = function () {
        const qBefore   = currentQuizData[currentQuestionIndex];
        const inputEl   = document.getElementById('short-answer-input');
        const ans       = inputEl ? inputEl.value.trim().toLowerCase() : '';
        const wasLocked = window.isSubmissionLocked;

        _origCheckSA.apply(this, arguments);

        if (!wasLocked && qBefore && ans) {
            const matched   = qBefore.keywords.some(k => ans.includes(k.toLowerCase()));
            const quality   = matched ? 4 : 0;
            QuizSRS.update('shortAnswer', qBefore, quality);
        }
    };

    // ── Essay Steps ──────────────────────────────────────────
    const _origCheckEssay = window.checkEssayStep;
    window.checkEssayStep = function () {
        const stepBefore  = (window.currentEssay && window.currentEssay.steps)
                            ? window.currentEssay.steps[window.currentStepIndex]
                            : null;
        const selected    = document.querySelector('input[name="step-option"]:checked');
        const wasLocked   = window.isSubmissionLocked;
        const stepIdx     = window.currentStepIndex; // capture before original increments

        _origCheckEssay.apply(this, arguments);

        if (!wasLocked && selected && stepBefore && window.currentEssay) {
            const userAnswer = parseInt(selected.value);
            const isCorrect  = userAnswer === stepBefore.correct;
            const quality    = isCorrect ? 4 : 0;
            // We pass a synthetic item with .q for ID purposes
            QuizSRS.update('essay', stepBefore, quality, stepIdx);
        }
    };

})();


// ──────────────────────────────────────────────────────────────
// SECTION D: INJECT "REVIEW DUE" BUTTONS INTO SETUP SCREENS
//
// We override renderQuiz and renderShortAnswers to append a
// "Review Due Items" button when due items exist.
// ──────────────────────────────────────────────────────────────

(function patchSetupScreens() {

    const _origRenderQuiz = window.renderQuiz;
    window.renderQuiz = function () {
        _origRenderQuiz.apply(this, arguments);

        if (!hasFullAccess) return; // Only for paid users (demo tracks too but UI is simpler)

        const due = QuizSRS.getDueItems('mcq', currentMcqData);
        if (due.length === 0) return;

        const container = document.getElementById('quiz-form');
        const setupDiv  = container.querySelector('div'); // the setup card
        if (!setupDiv) return;

        const reviewBlock = document.createElement('div');
        reviewBlock.style.cssText = `
            margin-top: 16px;
            padding: 14px 16px;
            background: #0d1b0d;
            border: 1px solid #28a745;
            border-radius: 10px;
            text-align: center;
        `;
        reviewBlock.innerHTML = `
            <p style="color:#28a745; font-weight:700; margin:0 0 8px 0; font-size:0.9em;">
                🔔 ${due.length} MCQ question${due.length !== 1 ? 's' : ''} due for review
            </p>
            <button onclick="startDueReview('mcq')"
                style="background:#28a745; color:white; border:none; padding:10px 22px;
                       border-radius:8px; font-weight:bold; cursor:pointer; font-size:0.9em;">
                🔁 Start Due Review First
            </button>
        `;
        setupDiv.appendChild(reviewBlock);
    };

    const _origRenderSA = window.renderShortAnswers;
    window.renderShortAnswers = function () {
        _origRenderSA.apply(this, arguments);

        if (!hasFullAccess) return;

        const due = QuizSRS.getDueItems('shortAnswer', currentShortData);
        if (due.length === 0) return;

        const container = document.getElementById('quiz-form');
        const setupDiv  = container.querySelector('div');
        if (!setupDiv) return;

        const reviewBlock = document.createElement('div');
        reviewBlock.style.cssText = `
            margin-top: 16px;
            padding: 14px 16px;
            background: #1a1500;
            border: 1px solid #ffc107;
            border-radius: 10px;
            text-align: center;
        `;
        reviewBlock.innerHTML = `
            <p style="color:#ffc107; font-weight:700; margin:0 0 8px 0; font-size:0.9em;">
                🔔 ${due.length} Short Answer question${due.length !== 1 ? 's' : ''} due for review
            </p>
            <button onclick="startDueReview('shortAnswer')"
                style="background:#ffc107; color:#222; border:none; padding:10px 22px;
                       border-radius:8px; font-weight:bold; cursor:pointer; font-size:0.9em;">
                🔁 Start Due Review First
            </button>
        `;
        setupDiv.appendChild(reviewBlock);
    };

    const _origRenderEssay = window.renderEssaySimulation;
    window.renderEssaySimulation = function () {
        _origRenderEssay.apply(this, arguments);

        // After the original renders the topic list, check for due items
        const dueCount = currentEssayData.reduce((sum, essay) => {
            return sum + QuizSRS.getDueItems('essay', essay.steps || [], essay.title).length;
        }, 0);
        if (dueCount === 0) return;

        const container = document.getElementById('quiz-form');
        const reviewBlock = document.createElement('div');
        reviewBlock.style.cssText = `
            margin: 16px auto;
            max-width: 420px;
            padding: 14px 16px;
            background: #1a0d00;
            border: 1px solid #e67e00;
            border-radius: 10px;
            text-align: center;
        `;
        reviewBlock.innerHTML = `
            <p style="color:#e67e00; font-weight:700; margin:0 0 8px 0; font-size:0.9em;">
                🔔 ${dueCount} essay step${dueCount !== 1 ? 's' : ''} due for review
            </p>
            <button onclick="startDueReview('essay')"
                style="background:#e67e00; color:white; border:none; padding:10px 22px;
                       border-radius:8px; font-weight:bold; cursor:pointer; font-size:0.9em;">
                🔁 Review Due Essay Steps
            </button>
        `;
        container.insertBefore(reviewBlock, container.firstChild);
    };

})();


// ──────────────────────────────────────────────────────────────
// SECTION E: HOOK BANNER INTO initializeCourseLogic
// We extend the existing function to call injectDueReviewBanner
// after data is ready.
// ──────────────────────────────────────────────────────────────

(function hookIntoInit() {
    const _origInit = window.initializeCourseLogic;
    window.initializeCourseLogic = async function () {
        await _origInit.apply(this, arguments);
        // Small delay to ensure DOM is settled after checkAccessStatus renders UI
        setTimeout(injectDueReviewBanner, 600);
    };
})();

// ──────────────────────────────────────────────────────────────
// SECTION F: EXPOSE QuizSRS globally for debugging / future use
// ──────────────────────────────────────────────────────────────
window.QuizSRS = QuizSRS;
