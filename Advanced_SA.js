// ============================================================
// === KAERI EDTECH — HYBRID SHORT ANSWER PATCH (v1.1) ===
// === FINAL RELEASE — PRODUCTION READY ===
// === Drop-in additive override for the SA marking engine ===
// === Fix: Properly increments global currentQuestionIndex ===
// === Data contract: question must have { q, keywords,   ===
// ===   explanation } — zero schema changes needed.       ===
// ============================================================

(function KaeriHybridSA() {
    'use strict';

    // ──────────────────────────────────────────────────────────
    // 1. SYNONYM DICTIONARY
    //    Maps alternative / abbreviated terms → canonical form.
    //    Add new entries here; zero question-data changes needed.
    // ──────────────────────────────────────────────────────────
    const SYNONYM_MAP = {
        // Biology / Cell
        'murein'            : 'peptidoglycan',
        'pg'                : 'peptidoglycan',
        'bursting'          : 'lysis',
        'rupture'           : 'lysis',
        'burst'             : 'lysis',
        'explode'           : 'lysis',
        'shrinking'         : 'plasmolysis',
        'shrink'            : 'plasmolysis',
        'shrinkage'         : 'plasmolysis',
        'osmoregulation'    : 'osmotic',
        'osmosis'           : 'osmotic',
        'semi-permeable'    : 'selectively permeable',
        'semipermeable'     : 'selectively permeable',
        'semi permeable'    : 'selectively permeable',
        'atp'               : 'adenosine triphosphate',
        'dna'               : 'deoxyribonucleic acid',
        'rna'               : 'ribonucleic acid',
        'mrna'              : 'messenger rna',
        'trna'              : 'transfer rna',
        'rrna'              : 'ribosomal rna',
        'er'                : 'endoplasmic reticulum',
        'rough er'          : 'rough endoplasmic reticulum',
        'smooth er'         : 'smooth endoplasmic reticulum',

        // Chemistry
        'h2o'               : 'water',
        'co2'               : 'carbon dioxide',
        'o2'                : 'oxygen',
        'nacl'              : 'sodium chloride',
        'hcl'               : 'hydrochloric acid',
        'h2so4'             : 'sulfuric acid',
        'naoh'              : 'sodium hydroxide',
        'ph'                : 'potential hydrogen',
        'redox'             : 'oxidation reduction',
        'oxidisation'       : 'oxidation',
        'ionisation'        : 'ionization',

        // Physics
        'ke'                : 'kinetic energy',
        'pe'                : 'potential energy',
        'gpe'               : 'gravitational potential energy',
        'v'                 : 'velocity',
        'a'                 : 'acceleration',
        'f'                 : 'force',
        'resultant'         : 'net force',
        'emf'               : 'electromotive force',
        'pd'                : 'potential difference',
        'ac'                : 'alternating current',
        'dc'                : 'direct current',
        'em'                : 'electromagnetic',
        'ir'                : 'infrared',
        'uv'                : 'ultraviolet',

        // Maths / CS
        'algo'              : 'algorithm',
        'bool'              : 'boolean',
        'int'               : 'integer',
        'str'               : 'string',
        'func'              : 'function',
        'obj'               : 'object',
        'oop'               : 'object oriented programming',
        'cpu'               : 'central processing unit',
        'ram'               : 'random access memory',
        'rom'               : 'read only memory',
        'os'                : 'operating system',
        'io'                : 'input output',
        'gui'               : 'graphical user interface',
        'cli'               : 'command line interface',
        'dbms'              : 'database management system',
        'sql'               : 'structured query language',
        'html'              : 'hypertext markup language',
        'css'               : 'cascading style sheets',
        'ip'                : 'internet protocol',

        // Communication / LA111
        'comm'              : 'communication',
        'nonverbal'         : 'non verbal',
        'non-verbal'        : 'non verbal',
        'feedback'          : 'response',
        'reciever'          : 'receiver',
        'recieving'         : 'receiving',
        'encoding'          : 'encode',
        'decoding'          : 'decode',
    };

    // ──────────────────────────────────────────────────────────
    // 2. CONTRADICTION PATTERNS
    //    Regex pairs: if pattern is found near keyword,
    //    the match is penalised.
    // ──────────────────────────────────────────────────────────
    const CONTRADICTION_PATTERNS = [
        /\b(not|no|never|doesn'?t|don'?t|cannot|can'?t|prevents?|stops?|blocks?|inhibits?)\s+\w{0,10}\s*(allow|caus|enabl|produc|creat|increas)/i,
        /\b(allow|caus|enabl|produc|creat)\s+\w{0,10}\s*(lysis|ruptur|burst|death|destroy)/i,
        /\bprevents?\s+\w{0,10}\s*(resist|maintain|keep|support|protect)/i,
        /\bincorrect|wrong|false|opposite\b/i,
    ];

    // ──────────────────────────────────────────────────────────
    // 3. COMMON STOPWORDS (stripped before stemming)
    // ──────────────────────────────────────────────────────────
    const STOPWORDS = new Set([
        'a','an','the','is','are','was','were','be','been','being',
        'have','has','had','do','does','did','will','would','could',
        'should','may','might','shall','can','need','dare','ought',
        'used','to','of','in','on','at','by','for','with','about',
        'as','into','through','during','before','after','above','below',
        'between','out','off','over','under','again','further','then',
        'once','here','there','when','where','why','how','all','each',
        'every','both','few','more','most','other','some','such','no',
        'nor','not','only','same','so','than','too','very','just',
        'because','if','or','and','but','that','this','these','those',
        'it','its','they','them','their','we','our','you','your',
        'he','she','him','her','his','hers','i','my','me','myself',
    ]);

    // ──────────────────────────────────────────────────────────
    // 4. LIGHTWEIGHT STEMMER
    //    Strips common English suffixes — no external library.
    // ──────────────────────────────────────────────────────────
    function stem(word) {
        if (!word || word.length < 4) return word;
        const rules = [
            [/ational$/,  'ate'],  [/tional$/,   'tion'],
            [/enci$/,     'ence'], [/anci$/,      'ance'],
            [/izer$/,     'ize'],  [/ising$/,     'ise'],
            [/izing$/,    'ize'],  [/ised$/,      'ise'],
            [/ized$/,     'ize'],  [/isation$/,   'ise'],
            [/ization$/,  'ize'],  [/ational$/,   'ate'],
            [/alism$/,    'al'],   [/alness$/,    'al'],
            [/alist$/,    'al'],   [/alize$/,     'al'],
            [/alities$/,  'al'],   [/ality$/,     'al'],
            [/fulness$/,  'ful'],  [/ousness$/,   'ous'],
            [/iveness$/,  'ive'],  [/ication$/,   'ic'],
            [/ements?$/,  'e'],    [/ments?$/,    ''],
            [/nesses?$/,  ''],     [/ations?$/,   'ate'],
            [/ings?$/,    ''],     [/edly$/,      'e'],
            [/edly$/,     ''],     [/edly$/,      'e'],
            [/ingly$/,    ''],     [/ingness$/,   ''],
            [/ational$/,  'ate'],  [/ization$/,   'ize'],
            [/ised$/,     'ise'],  [/ized$/,      'ize'],
            [/istic$/,    'ist'],  [/ists?$/,     ''],
            [/ical$/,     'ic'],   [/ics$/,       'ic'],
            [/ities$/,    'ity'],  [/ity$/,       ''],
            [/ers?$/,     ''],     [/ies$/,       'y'],
            [/ed$/,       ''],     [/es$/,        ''],
            [/s$/,        ''],
        ];
        let w = word.toLowerCase();
        for (const [pattern, replacement] of rules) {
            if (pattern.test(w) && w.length - replacement.length > 2) {
                return w.replace(pattern, replacement);
            }
        }
        return w;
    }

    // ──────────────────────────────────────────────────────────
    // 5. JARO-WINKLER DISTANCE
    //    Returns similarity score 0.0 – 1.0.
    //    Threshold ≥ 0.88 = fuzzy match.
    // ──────────────────────────────────────────────────────────
    function jaroWinkler(s1, s2) {
        if (s1 === s2) return 1.0;
        const len1 = s1.length, len2 = s2.length;
        if (len1 === 0 || len2 === 0) return 0.0;

        const matchDist = Math.floor(Math.max(len1, len2) / 2) - 1;
        const s1Matches = new Array(len1).fill(false);
        const s2Matches = new Array(len2).fill(false);
        let matches = 0, transpositions = 0;

        for (let i = 0; i < len1; i++) {
            const start = Math.max(0, i - matchDist);
            const end   = Math.min(i + matchDist + 1, len2);
            for (let j = start; j < end; j++) {
                if (s2Matches[j] || s1[i] !== s2[j]) continue;
                s1Matches[i] = true;
                s2Matches[j] = true;
                matches++;
                break;
            }
        }
        if (matches === 0) return 0.0;

        let k = 0;
        for (let i = 0; i < len1; i++) {
            if (!s1Matches[i]) continue;
            while (!s2Matches[k]) k++;
            if (s1[i] !== s2[k]) transpositions++;
            k++;
        }

        const jaro = (matches / len1 + matches / len2 + (matches - transpositions / 2) / matches) / 3;
        const prefix = Math.min(4, [...s1].findIndex((c, i) => c !== s2[i]) === -1
            ? Math.min(len1, len2) : [...s1].findIndex((c, i) => c !== s2[i]));
        return jaro + prefix * 0.1 * (1 - jaro);
    }

    // ──────────────────────────────────────────────────────────
    // 6. TEXT NORMALISER
    //    Lowercases, strips punctuation, removes stopwords,
    //    expands synonyms, stems each token.
    // ──────────────────────────────────────────────────────────
    function normalise(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(t => t.length > 1 && !STOPWORDS.has(t))
            .map(t => {
                const syn = SYNONYM_MAP[t];
                return stem(syn !== undefined ? syn : t);
            });
    }

    // ──────────────────────────────────────────────────────────
    // 7. KEYWORD WEIGHT CALCULATOR
    //    Longer / more specific keywords = higher weight.
    //    Short anchor words (≤6 chars) get 0.6 weight.
    //    Medium (7-10) get 0.8. Long (>10) get 1.0.
    // ──────────────────────────────────────────────────────────
    function keywordWeight(keyword) {
        const len = keyword.replace(/\s+/g, '').length;
        if (len <= 6)  return 0.6;
        if (len <= 10) return 0.8;
        return 1.0;
    }

    // ──────────────────────────────────────────────────────────
    // 8. COMPOUND PHRASE DETECTOR
    //    Returns true if keyword is multi-word AND student
    //    answer contains all words in the phrase.
    // ──────────────────────────────────────────────────────────
    function phraseMatches(phrase, studentTokens) {
        const phraseTokens = normalise(phrase);
        if (phraseTokens.length < 2) return null;
        return phraseTokens.every(pt =>
            studentTokens.some(st => st === pt || jaroWinkler(st, pt) >= 0.88)
        );
    }

    // ──────────────────────────────────────────────────────────
    // 9. CONTRADICTION CHECKER
    //    Scans raw student answer for contradiction patterns
    //    near a detected keyword. Returns penalty 0.0–0.5.
    // ──────────────────────────────────────────────────────────
    function contradictionPenalty(rawAnswer, keyword) {
        const lc = rawAnswer.toLowerCase();
        const kwIdx = lc.indexOf(keyword.toLowerCase());
        if (kwIdx === -1) return 0;
        const window = lc.slice(Math.max(0, kwIdx - 60), kwIdx + keyword.length + 60);
        for (const pattern of CONTRADICTION_PATTERNS) {
            if (pattern.test(window)) return 0.4;
        }
        return 0;
    }

    // ──────────────────────────────────────────────────────────
    // 10. CORE HYBRID MARKER
    //     Returns { percent, matchedCount, totalCount,
    //               matchedKeywords, missedKeywords,
    //               isLegacyPass }
    // ──────────────────────────────────────────────────────────
    function hybridMark(rawAnswer, keywords) {
        if (!keywords || keywords.length === 0) {
            return {
                percent: 0, matchedCount: 0, totalCount: 0,
                matchedKeywords: [], missedKeywords: [],
                isLegacyPass: false,
            };
        }

        const studentTokens = normalise(rawAnswer);
        const lc = rawAnswer.toLowerCase();

        const isLegacyPass = keywords.some(k => lc.includes(k.toLowerCase()));

        let weightedScore = 0;
        let totalWeight   = 0;
        const matchedKeywords = [];
        const missedKeywords  = [];

        keywords.forEach(keyword => {
            const kw = keyword.trim();
            const weight = keywordWeight(kw);
            totalWeight += weight;

            // --- Step A: Direct substring ---
            if (lc.includes(kw.toLowerCase())) {
                const penalty = contradictionPenalty(rawAnswer, kw);
                weightedScore += weight * (1 - penalty);
                matchedKeywords.push(kw);
                return;
            }

            // --- Step B: Synonym expansion ---
            const syn = SYNONYM_MAP[kw.toLowerCase()];
            if (syn && lc.includes(syn.toLowerCase())) {
                const penalty = contradictionPenalty(rawAnswer, syn);
                weightedScore += weight * (1 - penalty);
                matchedKeywords.push(kw);
                return;
            }

            // --- Step C: Compound phrase matching ---
            const phraseHit = phraseMatches(kw, studentTokens);
            if (phraseHit === true) {
                const penalty = contradictionPenalty(rawAnswer, kw);
                weightedScore += weight * (1 - penalty);
                matchedKeywords.push(kw);
                return;
            }

            // --- Step D: Stem + fuzzy token matching ---
            const kwTokens = normalise(kw);
            let tokenHits = 0;
            kwTokens.forEach(kwTok => {
                const hit = studentTokens.some(stTok => {
                    if (stTok === kwTok) return true;
                    if (jaroWinkler(stTok, kwTok) >= 0.88) return true;
                    return false;
                });
                if (hit) tokenHits++;
            });

            const tokenRatio = kwTokens.length > 0 ? tokenHits / kwTokens.length : 0;
            if (tokenRatio >= 0.7) {
                const partialWeight = weight * tokenRatio;
                const penalty = contradictionPenalty(rawAnswer, kw);
                weightedScore += partialWeight * (1 - penalty);
                if (tokenRatio === 1.0) {
                    matchedKeywords.push(kw);
                } else {
                    matchedKeywords.push(`~${kw}`);
                }
                return;
            }

            missedKeywords.push(kw);
        });

        const percent = totalWeight > 0
            ? Math.min(100, Math.round((weightedScore / totalWeight) * 100))
            : 0;

        return {
            percent,
            matchedCount : matchedKeywords.filter(k => !k.startsWith('~')).length,
            partialCount : matchedKeywords.filter(k => k.startsWith('~')).length,
            totalCount   : keywords.length,
            matchedKeywords,
            missedKeywords,
            isLegacyPass,
        };
    }

    // ──────────────────────────────────────────────────────────
    // 11. SCORE → GRADE LABEL
    // ──────────────────────────────────────────────────────────
    function gradeLabel(percent) {
        if (percent >= 90) return { icon: '🏆', label: 'Excellent',      color: '#72efdd' };
        if (percent >= 75) return { icon: '✅', label: 'Good',           color: '#28a745' };
        if (percent >= 60) return { icon: '🔶', label: 'Fair',           color: '#ffc107' };
        if (percent >= 40) return { icon: '⚠️', label: 'Partial',        color: '#fd7e14' };
        return                     { icon: '❌', label: 'Needs Practice', color: '#dc3545' };
    }

    // ──────────────────────────────────────────────────────────
    // 12. FEEDBACK HTML BUILDER
    //     Replaces the raw "❌ Keywords: x, y" line with a
    //     rich, diagnostic panel. Appended BEFORE explanation.
    // ──────────────────────────────────────────────────────────
    function buildFeedbackHTML(result, q) {
        const { percent, matchedCount, partialCount, totalCount,
                matchedKeywords, missedKeywords, isLegacyPass } = result;
        const grade = gradeLabel(percent);

        function pill(text, bg, color) {
            const display = text.startsWith('~') ? text.slice(1) + ' ≈' : text;
            return `<span style="
                display:inline-block; padding:3px 10px; border-radius:20px;
                font-size:0.78em; font-weight:600; margin:3px 4px;
                background:${bg}; color:${color}; border:1px solid ${color}40;
            ">${display}</span>`;
        }

        const matchedPills = matchedKeywords.map(k =>
            k.startsWith('~')
                ? pill(k, '#fff3cd', '#856404')
                : pill(k, '#d1f7e0', '#145a32')
        ).join('');

        const missedPills = missedKeywords.map(k =>
            pill(k, '#f8d7da', '#721c24')
        ).join('');

        const barColor = percent >= 75 ? '#28a745' : percent >= 50 ? '#ffc107' : '#dc3545';

        let insightMsg = '';
        if (percent === 100) {
            insightMsg = 'Complete recall — every concept identified correctly.';
        } else if (percent >= 75) {
            insightMsg = `You identified <strong>${matchedCount}</strong> of <strong>${totalCount}</strong> concepts. Review the missed terms below to close the gap.`;
        } else if (percent >= 40) {
            insightMsg = `You correctly identified <strong>${matchedCount}</strong> of <strong>${totalCount}</strong> concept${totalCount !== 1 ? 's' : ''}${partialCount ? ` (${partialCount} partial)` : ''}. The missed terms are the focus areas for your next revision pass.`;
        } else {
            insightMsg = `<strong>${missedKeywords.length}</strong> key concept${missedKeywords.length !== 1 ? 's were' : ' was'} not detected. Study the explanation carefully — understanding the <em>why</em> behind each term is the priority.`;
        }

        return `
        <div class="hybrid-sa-feedback" style="
            background:#0d1b2a; border:1px solid #3e506e; border-radius:10px;
            padding:15px 16px; margin:10px 0; font-family:inherit;
        ">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-size:1.5em;">${grade.icon}</span>
                    <div>
                        <div style="color:${grade.color}; font-weight:700; font-size:1.05em;">${grade.label}</div>
                        <div style="color:#a0a8b4; font-size:0.78em;">${matchedCount} / ${totalCount} concepts matched</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:1.8em; font-weight:800; color:${grade.color}; line-height:1;">${percent}%</div>
                    <div style="font-size:0.72em; color:#a0a8b4;">Hybrid Score</div>
                </div>
            </div>

            <div style="height:6px; background:#1e2a3a; border-radius:3px; overflow:hidden; margin-bottom:14px;">
                <div style="width:${percent}%; height:100%; background:${barColor}; border-radius:3px; transition:width 0.5s;"></div>
            </div>

            <div style="color:#c9d1d9; font-size:0.88em; line-height:1.5; margin-bottom:12px;">${insightMsg}</div>

            ${matchedKeywords.length > 0 ? `
            <div style="margin-bottom:10px;">
                <div style="font-size:0.72em; font-weight:700; color:#72efdd; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:5px;">✓ Identified</div>
                <div>${matchedPills}</div>
            </div>` : ''}

            ${missedKeywords.length > 0 ? `
            <div style="margin-bottom:4px;">
                <div style="font-size:0.72em; font-weight:700; color:#f08080; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:5px;">✗ Missing Concepts</div>
                <div>${missedPills}</div>
            </div>` : ''}
        </div>`;
    }

    // ──────────────────────────────────────────────────────────
    // 13. SCORE ACCUMULATOR
    // ──────────────────────────────────────────────────────────
    let _hybridSessionScores = [];

    function resetHybridSession() {
        _hybridSessionScores = [];
    }

    function recordHybridScore(percent) {
        _hybridSessionScores.push(percent);
    }

    function hybridSessionAverage() {
        if (_hybridSessionScores.length === 0) return 0;
        const sum = _hybridSessionScores.reduce((a, b) => a + b, 0);
        return Math.round(sum / _hybridSessionScores.length);
    }

    // ──────────────────────────────────────────────────────────
    // 14. OVERRIDE: displayShortAnswerQuestion (unchanged)
    // ──────────────────────────────────────────────────────────
    const originalDisplay = window.displayShortAnswerQuestion;
    window.displayShortAnswerQuestion = function () {
        window.isSubmissionLocked = false;

        const container = document.getElementById('quiz-form');
        const q = currentQuizData[currentQuestionIndex];
        updateProgress(currentQuestionIndex + 1, currentQuizData.length);

        if (!q) return showFinalShortAnswerScore();

        container.innerHTML = `
            <h3>Short Answer ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3>
            <div class="question-box">${parseKaeriMarkdown(q.q)}</div>
            <textarea id="short-answer-input" 
                placeholder="Type your answer here…"
                style="min-height:90px;"
            ></textarea>
            <button id="sa-submit-btn" onclick="checkShortAnswer()">✅ Submit</button>
        `;

        renderMath();
        document.getElementById('result').innerHTML = '';
        container.scrollIntoView({ behavior: 'smooth' });
        readCurrentQuestion();
    };

    // ──────────────────────────────────────────────────────────
    // 15. OVERRIDE: checkShortAnswer  (CORE CHANGE)
    //     Preserves original flow + adds hybrid intelligence.
    // ──────────────────────────────────────────────────────────
    const originalCheck = window.checkShortAnswer;
    window.checkShortAnswer = function () {
        if (window.isSubmissionLocked) return;

        const inputEl = document.getElementById('short-answer-input');
        const rawAnswer = (inputEl ? inputEl.value : '').trim();

        if (!rawAnswer) {
            showAppNotification('Please type your answer!', 'warning');
            return;
        }

        window.isSubmissionLocked = true;
        const submitBtn = document.getElementById('sa-submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Checked ✓';
            submitBtn.style.backgroundColor = '#6c757d';
        }
        if (inputEl) inputEl.disabled = true;

        const q = currentQuizData[currentQuestionIndex];
        const result = hybridMark(rawAnswer, q.keywords);

        // Legacy compatibility — original pass/fail still works
        const isPass = result.percent >= 60;
        if (isPass) {
            window.currentScore = (window.currentScore || 0) + 1;
        }
        recordHybridScore(result.percent);

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        resultDiv.innerHTML += buildFeedbackHTML(result, q);

        if (q.explanation) {
            resultDiv.innerHTML += `
                <div class="explanation-box">
                    ${parseKaeriMarkdown(q.explanation)}
                </div>`;
        }

        const ttsText = isPass
            ? `Good. You scored ${result.percent} percent. ${result.missedKeywords.length > 0
                ? 'Missing concepts: ' + result.missedKeywords.join(', ') + '.'
                : 'All concepts identified.'}`
            : `You scored ${result.percent} percent. The missing concepts are: ${result.missedKeywords.join(', ')}. ${
                q.explanation ? 'Explanation: ' + humanizeLaTeX(q.explanation) : ''}`;
        readText(ttsText);

        // ★★★ FIX: increment global currentQuestionIndex (not window) ★★★
        currentQuestionIndex = (currentQuestionIndex || 0) + 1;

        const isLast = currentQuestionIndex >= currentQuizData.length;
        const nextBtn = document.createElement('button');
        nextBtn.innerText = isLast ? 'Finish' : 'Next ➡️';
        nextBtn.onclick = isLast
            ? () => { resultDiv.innerHTML = ''; showFinalShortAnswerScore(); }
            : displayShortAnswerQuestion;
        resultDiv.appendChild(nextBtn);

        renderMath('result');
    };

    // ──────────────────────────────────────────────────────────
    // 16. OVERRIDE: showFinalShortAnswerScore
    //     Adds hybrid average alongside the existing score card.
    // ──────────────────────────────────────────────────────────
    const originalFinal = window.showFinalShortAnswerScore;
    window.showFinalShortAnswerScore = function () {
        const container = document.getElementById('quiz-form');
        container.innerHTML = '';
        updateProgress(currentQuizData.length, currentQuizData.length);

        const legacyScore   = window.currentScore || 0;
        const total         = currentQuizData.length;
        const legacyPercent = Math.round((legacyScore / total) * 100);
        const hybridAvg     = hybridSessionAverage();

        const displayPercent = hybridAvg;
        let comment =
            displayPercent >= 90 ? '🎉 Excellent work!' :
            displayPercent >= 70 ? '✅ Good job!'        :
            displayPercent >= 50 ? '⚠️ Fair attempt.'   : '❌ Keep practicing!';

        const hybridGrade = gradeLabel(hybridAvg);

        container.innerHTML = `
        <div style="text-align:center; padding:10px 0 20px;">
            <h2 style="color:white; margin-bottom:6px;">Session Complete!</h2>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; max-width:380px; margin:18px auto;">
                
                <div style="background:#1e2a3a; border:1px solid #3e506e; border-radius:10px; padding:16px 10px;">
                    <div style="font-size:0.7em; color:#a0a8b4; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:4px;">Pass / Fail</div>
                    <div style="font-size:2em; font-weight:800; color:white;">${legacyScore}/${total}</div>
                    <div style="font-size:0.85em; color:#72efdd;">${legacyPercent}%</div>
                </div>

                <div style="background:#0d1b2a; border:2px solid ${hybridGrade.color}; border-radius:10px; padding:16px 10px;">
                    <div style="font-size:0.7em; color:#a0a8b4; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:4px;">Hybrid Score</div>
                    <div style="font-size:2em; font-weight:800; color:${hybridGrade.color};">${hybridAvg}%</div>
                    <div style="font-size:0.85em; color:${hybridGrade.color};">${hybridGrade.label}</div>
                </div>
            </div>

            <p style="color:#a0a8b4; font-style:italic; margin-bottom:20px;">${comment}</p>

            <details style="background:#1e2a3a; border:1px solid #3e506e; border-radius:8px; padding:10px 14px; max-width:380px; margin:0 auto 20px; text-align:left; cursor:pointer;">
                <summary style="color:#72efdd; font-size:0.85em; font-weight:600; list-style:none;">ℹ️ What is the Hybrid Score?</summary>
                <p style="color:#a0a8b4; font-size:0.82em; line-height:1.6; margin:10px 0 0;">
                    The Hybrid Score weighs <em>how many</em> key concepts you identified and <em>how precisely</em> you expressed them — including synonyms, partial matches, and near-correct spelling. A score of 60%+ counts as a pass. It is a more accurate picture of your actual understanding than a simple pass/fail.
                </p>
            </details>
        </div>`;

        // Restore original buttons
        const restartBtn = document.createElement('button');
        restartBtn.innerText = '🔁 Try Again';
        restartBtn.className = 'restart-button';
        restartBtn.style.marginRight = '10px';
        restartBtn.onclick = renderShortAnswers;
        container.appendChild(restartBtn);

        const challengeBtn = document.createElement('button');
        challengeBtn.innerHTML = '⚔️ Challenge a Friend';
        challengeBtn.className = 'challenge-button';
        challengeBtn.onclick = () => challengeFriend(legacyScore, total, 'Short Answer');
        container.appendChild(challengeBtn);

        const previewBtn = document.createElement('button');
        previewBtn.innerText = '👁️ Preview & Print';
        previewBtn.style.backgroundColor = '#007bff';
        previewBtn.style.color = 'white';
        previewBtn.style.marginLeft = '10px';
        previewBtn.onclick = generatePrintPreview;
        container.appendChild(previewBtn);

        const switchDiv = document.createElement('div');
        switchDiv.style.cssText = 'margin-top:30px; padding:18px; background:#0d1b2a; border-radius:12px; border:1px solid #3e506e; text-align:center;';
        switchDiv.innerHTML = `
            <p style="color:#a0a8b4; margin:0 0 12px 0; font-size:0.9em;">🔄 <strong style="color:#72efdd;">Switch Learning Mode</strong></p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center;">
                <button onclick="renderQuiz()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📝 MCQ</button>
                <button onclick="renderEssaySimulation()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">📄 Essay Sim</button>
                <button onclick="renderFlashcardTopics()" style="background:#2b3a55; color:white; border:1px solid #3e506e; padding:8px 14px; border-radius:8px; cursor:pointer; font-size:0.85em;">🃏 Flashcards</button>
            </div>
        `;
        container.appendChild(switchDiv);

        resetHybridSession();

        recordProgressSession('shortAnswer', legacyScore, total,
            `${currentCourse} ${currentTerm} Short Answer`);
        logAnalyticsEvent('quiz_complete',
            `Short Answer | Legacy: ${legacyScore}/${total} (${legacyPercent}%) | Hybrid: ${hybridAvg}%`);
    };

    // ──────────────────────────────────────────────────────────
    // 17. OVERRIDE: startActualShortAnswer
    //     Resets hybrid session accumulator before each run.
    // ──────────────────────────────────────────────────────────
    const _originalStartActualShortAnswer = window.startActualShortAnswer;
    window.startActualShortAnswer = function (limit) {
        resetHybridSession();
        _originalStartActualShortAnswer(limit);
    };

    // ──────────────────────────────────────────────────────────
    // 18. PATCH CONFIRMATION
    // ──────────────────────────────────────────────────────────
    console.info('[Kaeri] ✅ Hybrid Short Answer Patch v1.1 (fixed index) loaded.');

})();