// ============================================================
// KAERI EDTECH — EXAM COUNTDOWN v1.1 (Live)
// Additive only – no changes to script.js or index.html structure
// ============================================================

(function () {
  // ── 1. CONFIGURABLE TARGET DATE ──────────────────────────
  // Change the date string for the next sessional period.
  // Use Lusaka time (GMT+2). The time is set to midnight.
  const TARGET_DATE = new Date('2026-08-24T00:00:00+02:00');

  // ── 2. CREATE THE BANNER TEMPLATE ────────────────────────
  const banner = document.createElement('div');
  banner.id = 'sessional-countdown';
  banner.style.cssText = `
    display: none;
    text-align: center;
    background: linear-gradient(135deg, #132238, #1c2d46);
    border-bottom: 1px solid #3e506e;
    padding: 10px 20px;
    color: #ffc107;
    font-weight: 600;
    font-size: 0.95em;
    font-family: 'Roboto', sans-serif;
  `;
  banner.innerHTML = '📅 <span id="countdown-days">--</span> days until Sessional Exams (24 Aug 2026)';

  // ── 3. UNIFIED, LIVE REFRESH LOGIC ───────────────────────
  // Days remaining while >24h out; switches to a ticking
  // HH:MM:SS countdown during the final 24 hours.
  function refreshBanner(b) {
    const daysSpan = b.querySelector('#countdown-days');
    if (!daysSpan) return;

    const diffMs = TARGET_DATE - new Date();

    if (diffMs <= 0) {
      b.style.display = 'none';
      return;
    }

    const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (daysRemaining > 1) {
      daysSpan.textContent = daysRemaining;
    } else {
      // Final 24 hours – live ticking countdown
      const totalSeconds = Math.floor(diffMs / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      const pad = n => String(n).padStart(2, '0');
      daysSpan.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    }

    b.style.display = 'block';
  }

  function refreshAllBanners() {
    document.querySelectorAll('#sessional-countdown').forEach(refreshBanner);
  }

  // ── 4. INSERT INTO BOTH VIEWS ────────────────────────────
  function injectBanners() {
    const landingView = document.getElementById('landing-view');
    const courseView  = document.getElementById('course-view');

    if (landingView && !landingView.querySelector('#sessional-countdown')) {
      landingView.insertBefore(banner.cloneNode(true), landingView.firstChild);
    }
    if (courseView && !courseView.querySelector('#sessional-countdown')) {
      courseView.insertBefore(banner.cloneNode(true), courseView.firstChild);
    }
    refreshAllBanners();
  }

  // ── 5. REFRESH AFTER VIEW SWITCHES ───────────────────────
  const originalLoadCourse = window.loadCourse;
  if (typeof originalLoadCourse === 'function') {
    window.loadCourse = function () {
      originalLoadCourse.apply(this, arguments);
      setTimeout(refreshAllBanners, 100);
    };
  }

  const originalBackToMenu = window.backToMenu;
  if (typeof originalBackToMenu === 'function') {
    window.backToMenu = function () {
      originalBackToMenu.apply(this, arguments);
      setTimeout(refreshAllBanners, 100);
    };
  }

  // ── 6. KEEP IT LIVE ───────────────────────────────────────
  // Tick every second — cheap (max 2 DOM nodes) and keeps the
  // day count and the final-24h HH:MM:SS countdown perfectly
  // in sync without needing a reload or course switch.
  setInterval(refreshAllBanners, 1000);

  // Catch up immediately if the tab/device was asleep.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshAllBanners();
  });

  // ── 7. INITIALISE ────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanners);
  } else {
    injectBanners();
  }
})();
