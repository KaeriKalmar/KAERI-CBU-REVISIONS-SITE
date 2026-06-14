// ============================================================
// KAERI EDTECH — EXAM COUNTDOWN v1.0
// Additive only – no changes to script.js or index.html structure
// ============================================================

(function () {
  // ── 1. CONFIGURABLE TARGET DATE ──────────────────────────
  // Change the date string for the next sessional period.
  // Use Lusaka time (GMT+2). The time is set to midnight.
  const TARGET_DATE = new Date('2026-08-24T00:00:00+02:00');

  // ── 2. CREATE THE BANNER ELEMENT ─────────────────────────
  const banner = document.createElement('div');
  banner.id = 'sessional-countdown';
  // Inline styles to match the dark Kaeri theme
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
  // Placeholder text – will be updated immediately
  banner.innerHTML = '📅 <span id="countdown-days">--</span> days until Sessional Exams (24 Aug 2026)';

  // ── 3. CALCULATE DAYS REMAINING ──────────────────────────
  function updateCountdown() {
    const now = new Date();
    const diffTime = TARGET_DATE - now;
    let daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffTime < 0) {
      // Past the target date – keep hidden
      daysRemaining = -1;
    }

    const daysSpan = banner.querySelector('#countdown-days');
    if (!daysSpan) return;

    if (daysRemaining > 0) {
      daysSpan.textContent = daysRemaining;
      banner.style.display = 'block';
    } else if (daysRemaining === 0) {
      daysSpan.textContent = 'Today';
      banner.style.display = 'block';
    } else {
      // Negative – hide the banner
      banner.style.display = 'none';
    }
  }

  // ── 4. INSERT INTO BOTH VIEWS ────────────────────────────
  function injectBanners() {
    const landingView = document.getElementById('landing-view');
    const courseView  = document.getElementById('course-view');
    
    // Clone the banner for each view so both can show independently
    if (landingView) {
      const landingBanner = banner.cloneNode(true);
      landingView.insertBefore(landingBanner, landingView.firstChild);
    }
    if (courseView) {
      const courseBanner = banner.cloneNode(true);
      courseView.insertBefore(courseBanner, courseView.firstChild);
    }
    // After cloning, update all banners (they share the same logic)
    updateAllCountdowns();
  }

  function updateAllCountdowns() {
    const banners = document.querySelectorAll('#sessional-countdown');
    banners.forEach(b => {
      const daysSpan = b.querySelector('#countdown-days');
      if (!daysSpan) return;
      
      const now = new Date();
      const diffTime = TARGET_DATE - now;
      let daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffTime < 0) daysRemaining = -1;

      if (daysRemaining > 0) {
        daysSpan.textContent = daysRemaining;
        b.style.display = 'block';
      } else if (daysRemaining === 0) {
        daysSpan.textContent = 'Today';
        b.style.display = 'block';
      } else {
        b.style.display = 'none';
      }
    });
  }

  // ── 5. REFRESH AFTER COURSE LOAD ─────────────────────────
  // Since the course view is toggled, we need to refresh the
  // countdown whenever a course is selected. We do this by
  // overriding the existing loadCourse function safely.
  const originalLoadCourse = window.loadCourse;
  if (typeof originalLoadCourse === 'function') {
    window.loadCourse = function () {
      originalLoadCourse.apply(this, arguments);
      // Small delay to ensure the view has switched and the
      // cloned banner is present in the course view.
      setTimeout(updateAllCountdowns, 100);
    };
  }

  // Also refresh when returning to menu
  const originalBackToMenu = window.backToMenu;
  if (typeof originalBackToMenu === 'function') {
    window.backToMenu = function () {
      originalBackToMenu.apply(this, arguments);
      setTimeout(updateAllCountdowns, 100);
    };
  }

  // ── 6. INITIALISE ────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectBanners();
      updateAllCountdowns();
    });
  } else {
    injectBanners();
    updateAllCountdowns();
  }
})();
