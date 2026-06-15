// ============================================================
// KAERI EDTECH — EXAM COUNTDOWN v1.3 (Always-Live Ticking)
// Additive only – no changes to script.js or index.html structure
// ============================================================

(function () {
  // ── 0. IDEMPOTENCY GUARD ──────────────────────────────────
  // Prevents duplicate banners/timers if this file is ever
  // included more than once on the same page.
  if (window.__kaeriExamCountdownLoaded) return;
  window.__kaeriExamCountdownLoaded = true;

  // ── 1. CONFIGURABLE TARGET DATE ──────────────────────────
  // Change the date string for the next sessional period.
  // Use Lusaka time (GMT+2, no DST). The time is set to midnight.
  const TARGET_DATE = new Date('2026-08-24T00:00:00+02:00');

  if (isNaN(TARGET_DATE.getTime())) {
    console.error('[Kaeri Countdown] Invalid TARGET_DATE — countdown disabled.');
    return;
  }

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
  banner.innerHTML = '📅 <span id="countdown-days">--</span> until Sessional Exams (24 Aug 2026)';

  // ── 3. UNIFIED, ALWAYS-LIVE REFRESH LOGIC ─────────────────
  // Displays "<days>d HH:MM:SS" (or just "HH:MM:SS" inside the
  // final day) and ticks every second, the whole way down.
  // Wrapped in try/catch so a DOM hiccup never breaks the
  // rest of the page's scripts.
  function refreshBanner(b) {
    try {
      const daysSpan = b.querySelector('#countdown-days');
      if (!daysSpan) return;

      const diffMs = TARGET_DATE.getTime() - Date.now();

      if (diffMs <= 0) {
        b.style.display = 'none';
        return;
      }

      const totalSeconds = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const h = Math.floor((totalSeconds % 86400) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      const pad = n => String(n).padStart(2, '0');

      daysSpan.textContent = days > 0
        ? `${days}d ${pad(h)}:${pad(m)}:${pad(s)}`
        : `${pad(h)}:${pad(m)}:${pad(s)}`;

      b.style.display = 'block';
    } catch (err) {
      console.error('[Kaeri Countdown] refresh error:', err);
    }
  }

  function refreshAllBanners() {
    document.querySelectorAll('#sessional-countdown').forEach(refreshBanner);
  }

  // ── 4. INSERT INTO BOTH VIEWS ────────────────────────────
  function injectBanners() {
    try {
      const landingView = document.getElementById('landing-view');
      const courseView  = document.getElementById('course-view');

      if (landingView && !landingView.querySelector('#sessional-countdown')) {
        landingView.insertBefore(banner.cloneNode(true), landingView.firstChild);
      }
      if (courseView && !courseView.querySelector('#sessional-countdown')) {
        courseView.insertBefore(banner.cloneNode(true), courseView.firstChild);
      }
    } catch (err) {
      console.error('[Kaeri Countdown] inject error:', err);
    }
    refreshAllBanners();
  }

  // ── 5. REFRESH AFTER VIEW SWITCHES ───────────────────────
  const originalLoadCourse = window.loadCourse;
  if (typeof originalLoadCourse === 'function') {
    window.loadCourse = function () {
      originalLoadCourse.apply(this, arguments);
      injectBanners(); // also re-inject in case the view was rebuilt
      setTimeout(refreshAllBanners, 100);
    };
  }

  const originalBackToMenu = window.backToMenu;
  if (typeof originalBackToMenu === 'function') {
    window.backToMenu = function () {
      originalBackToMenu.apply(this, arguments);
      injectBanners();
      setTimeout(refreshAllBanners, 100);
    };
  }

  // ── 6. DRIFT-FREE LIVE TICKING ────────────────────────────
  // A plain setInterval(fn, 1000) slowly drifts and can land
  // mid-second. Instead, each tick re-schedules itself to land
  // on the next exact second boundary using Date.now(), so the
  // HH:MM:SS readout stays accurate over hours/days of runtime.
  let tickTimer = null;
  function scheduleNextTick() {
    const delay = 1000 - (Date.now() % 1000);
    tickTimer = setTimeout(() => {
      refreshAllBanners();
      scheduleNextTick();
    }, delay);
  }
  scheduleNextTick();

  // ── 7. RESYNC ON WAKE / RESTORE ──────────────────────────
  // Mobile browsers throttle or suspend timers when a tab is
  // backgrounded or the device sleeps. These listeners force an
  // immediate, accurate refresh the moment the page is usable
  // again, instead of waiting for the next scheduled tick.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshAllBanners();
  });

  window.addEventListener('pageshow', (e) => {
    // Fires on bfcache restores (e.g. swipe-back navigation on iOS)
    if (e.persisted) refreshAllBanners();
  });

  window.addEventListener('focus', refreshAllBanners);

  // ── 8. INITIALISE ────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBanners);
  } else {
    injectBanners();
  }
})();
