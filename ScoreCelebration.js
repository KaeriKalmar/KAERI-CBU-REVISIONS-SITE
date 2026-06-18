// ============================================================
// KAERI EDTECH — SCORE CELEBRATION v2.0
// Additive only – no changes to script.js or index.html
// ============================================================
// Upgrades over v1.0:
//   • 5-tier scoring system (S / A / B / C / F) with distinct
//     audio signatures, banner colours, and messages
//   • Adaptive chime engine: richer arpeggios for higher tiers
//   • Personal-best detection (persisted in localStorage)
//   • CSS confetti burst injected only on 80%+ scores
//   • AudioContext pooled and lazily reused (no GC churn)
//   • Respects prefers-reduced-motion for all visual effects
//   • Works with MCQ, Short Answer, Essay, and Flashcard modes
// ============================================================

(function () {
  'use strict';

  if (window.__kaeriScoreCelebrationLoaded) return;
  window.__kaeriScoreCelebrationLoaded = true;

  // ── 1. CONSTANTS ──────────────────────────────────────────
  const STORAGE_KEY = 'kaeri_score_bests';
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Tier definitions — ordered highest to lowest
  const TIERS = [
    {
      min: 95, grade: 'S', label: 'Outstanding!',
      emoji: '🏆', color: '#ffd700', glow: 'rgba(255,215,0,0.45)',
      notes: [523.25, 659.25, 783.99, 1046.50], // C5 E5 G5 C6
      waveform: 'sine', spacing: 0.11
    },
    {
      min: 80, grade: 'A', label: 'Excellent score!',
      emoji: '🎉', color: '#4fc3f7', glow: 'rgba(79,195,247,0.4)',
      notes: [523.25, 659.25, 783.99],           // C5 E5 G5
      waveform: 'sine', spacing: 0.12
    },
    {
      min: 65, grade: 'B', label: 'Good work!',
      emoji: '👍', color: '#81c784', glow: 'rgba(129,199,132,0.35)',
      notes: [440, 523.25, 659.25],              // A4 C5 E5
      waveform: 'triangle', spacing: 0.14
    },
    {
      min: 50, grade: 'C', label: 'Keep going!',
      emoji: '📚', color: '#ffb74d', glow: 'rgba(255,183,77,0.3)',
      notes: [349.23, 440],                      // F4 A4
      waveform: 'triangle', spacing: 0.18
    },
    {
      min: 0,  grade: 'F', label: 'Review & retry',
      emoji: '💪', color: '#ef9a9a', glow: null,
      notes: [261.63],                           // C4 – single soft tone
      waveform: 'triangle', spacing: 0
    }
  ];

  function getTier(percent) {
    return TIERS.find(t => percent >= t.min) || TIERS[TIERS.length - 1];
  }

  // ── 2. AUDIO ENGINE ───────────────────────────────────────
  let _audioCtx = null;

  function getAudioCtx() {
    if (!_audioCtx || _audioCtx.state === 'closed') {
      _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (_audioCtx.state === 'suspended') _audioCtx.resume();
    return _audioCtx;
  }

  function playTier(tier) {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      tier.notes.forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = tier.waveform;
        osc.frequency.value = freq;
        const t0 = now + i * tier.spacing;
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(0.28, t0 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.42);
      });
    } catch (e) { /* audio blocked — silent */ }
  }

  function playCompletionSound() {
    try {
      const ctx = getAudioCtx();
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = 440;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch (e) {}
  }

  // ── 3. PERSONAL BEST TRACKING ────────────────────────────
  function loadBests() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveBests(bests) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(bests)); }
    catch (e) {}
  }

  // Returns true if this is a new personal best for the key
  function checkAndUpdateBest(key, percent) {
    if (!key) return false;
    const bests = loadBests();
    const prev  = bests[key] || 0;
    if (percent > prev) {
      bests[key] = percent;
      saveBests(bests);
      return true;
    }
    return false;
  }

  // ── 4. CONFETTI BURST ─────────────────────────────────────
  const CONFETTI_CSS = `
    @keyframes kaeri-confetti-fall {
      0%   { transform: translateY(-10px) rotate(0deg);   opacity: 1; }
      100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
    .kaeri-confetti-piece {
      position: fixed;
      top: -12px;
      width: 9px;
      height: 9px;
      border-radius: 2px;
      pointer-events: none;
      z-index: 99999;
      animation: kaeri-confetti-fall linear forwards;
    }
  `;

  let _confettiStyleInjected = false;
  function injectConfettiStyle() {
    if (_confettiStyleInjected) return;
    const s = document.createElement('style');
    s.textContent = CONFETTI_CSS;
    document.head.appendChild(s);
    _confettiStyleInjected = true;
  }

  const CONFETTI_COLORS = ['#ffc107','#4fc3f7','#81c784','#f06292','#ce93d8','#fff176'];

  function burstConfetti(count = 60) {
    if (REDUCED_MOTION) return;
    injectConfettiStyle();
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'kaeri-confetti-piece';
      el.style.left            = Math.random() * 100 + 'vw';
      el.style.backgroundColor = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      el.style.animationDuration = (1.4 + Math.random() * 1.2) + 's';
      el.style.animationDelay    = (Math.random() * 0.5) + 's';
      frag.appendChild(el);
    }
    document.body.appendChild(frag);
    // Remove pieces after 4 s so the DOM stays clean
    setTimeout(() => {
      document.querySelectorAll('.kaeri-confetti-piece').forEach(el => el.remove());
    }, 4000);
  }

  // ── 5. SCORE BANNER ──────────────────────────────────────
  // Injects a temporary full-width banner above the score screen
  const BANNER_CSS = `
    @keyframes kaeri-banner-in {
      from { opacity: 0; transform: translateY(-18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    #kaeri-score-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 20px;
      font-family: 'Roboto', sans-serif;
      font-size: 1.05em;
      font-weight: 700;
      border-radius: 0 0 8px 8px;
      animation: kaeri-banner-in 0.35s ease both;
    }
    #kaeri-score-banner .grade-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      border-radius: 50%;
      font-size: 1.1em;
      font-weight: 900;
      border: 2px solid currentColor;
      flex-shrink: 0;
    }
    #kaeri-score-banner .new-best {
      font-size: 0.78em;
      opacity: 0.85;
      margin-left: 4px;
    }
  `;

  let _bannerStyleInjected = false;
  function injectBannerStyle() {
    if (_bannerStyleInjected) return;
    const s = document.createElement('style');
    s.textContent = BANNER_CSS;
    document.head.appendChild(s);
    _bannerStyleInjected = true;
  }

  function showScoreBanner(tier, isNewBest) {
    injectBannerStyle();
    // Remove any previous banner
    const old = document.getElementById('kaeri-score-banner');
    if (old) old.remove();

    const banner = document.createElement('div');
    banner.id = 'kaeri-score-banner';
    banner.style.cssText = `
      background: linear-gradient(135deg, #132238, #1c2d46);
      color: ${tier.color};
      border-top: 2px solid ${tier.color};
      ${tier.glow ? `box-shadow: 0 4px 18px ${tier.glow};` : ''}
    `;
    banner.innerHTML = `
      <span class="grade-badge">${tier.grade}</span>
      <span>${tier.emoji} ${tier.label}</span>
      ${isNewBest ? '<span class="new-best">⭐ New personal best!</span>' : ''}
    `;
    document.body.insertBefore(banner, document.body.firstChild);
    setTimeout(() => { if (banner.parentNode) banner.remove(); }, 5000);
  }

  // ── 6. MASTER CELEBRATE FUNCTION ─────────────────────────
  function celebrate(percent, quizKey) {
    const tier       = getTier(percent);
    const isNewBest  = checkAndUpdateBest(quizKey, percent);

    playTier(tier);

    // Only show visual effects for passing grades (C and above)
    if (percent >= 50) {
      showScoreBanner(tier, isNewBest);
      if (percent >= 80) burstConfetti(tier.grade === 'S' ? 90 : 60);
    }

    // Also fire the existing notification if available
    if (typeof showAppNotification === 'function' && percent >= 80) {
      showAppNotification(`${tier.emoji} ${tier.label}`, 'success', 2500);
    }
  }

  // ── 7. SAFE VARIABLE READ HELPERS ────────────────────────
  // Access global quiz state without throwing if missing
  function safeGet(expr, fallback) {
    try { return Function(`return (${expr})`)() ?? fallback; }
    catch (e) { return fallback; }
  }

  // ── 8. HOOK INTO EXISTING SCORE FUNCTIONS ────────────────

  // MCQ
  const _origMcq = window.showFinalMcqScore;
  if (typeof _origMcq === 'function') {
    window.showFinalMcqScore = function () {
      _origMcq.apply(this, arguments);
      setTimeout(() => {
        try {
          const total   = safeGet('currentQuizData.length', 0);
          const score   = safeGet('currentScore', 0);
          const percent = total ? Math.round((score / total) * 100) : 0;
          const key     = safeGet('currentCourseId', '') + '_mcq';
          celebrate(percent, key);
        } catch (e) {}
      }, 150); // slight delay so the score screen has rendered
    };
  }

  // Short Answer
  const _origSA = window.showFinalShortAnswerScore;
  if (typeof _origSA === 'function') {
    window.showFinalShortAnswerScore = function () {
      _origSA.apply(this, arguments);
      setTimeout(() => {
        try {
          const total   = safeGet('currentQuizData.length', 0);
          const score   = safeGet('currentScore', 0);
          const percent = total ? Math.round((score / total) * 100) : 0;
          const key     = safeGet('currentCourseId', '') + '_sa';
          celebrate(percent, key);
        } catch (e) {}
      }, 150);
    };
  }

  // Essay Simulation
  const _origEssay = window.showFinalEssayScore;
  if (typeof _origEssay === 'function') {
    window.showFinalEssayScore = function () {
      _origEssay.apply(this, arguments);
      setTimeout(() => {
        try {
          const steps   = safeGet('currentEssay.steps.length', 0);
          const score   = safeGet('essayScore', 0);
          const percent = steps ? Math.round((score / steps) * 100) : 0;
          const key     = safeGet('currentCourseId', '') + '_essay';
          celebrate(percent, key);
        } catch (e) {}
      }, 150);
    };
  }

  // Flashcards — always play a gentle completion tone + show C-tier banner
  const _origFlash = window.showFlashcardCompletion;
  if (typeof _origFlash === 'function') {
    window.showFlashcardCompletion = function () {
      _origFlash.apply(this, arguments);
      setTimeout(() => {
        try {
          playCompletionSound();
          const tier = getTier(50); // neutral completion tier
          showScoreBanner({ ...tier, label: 'Session complete!' }, false);
        } catch (e) {}
      }, 150);
    };
  }

})();
