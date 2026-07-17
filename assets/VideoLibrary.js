// ============================================================
// === KAERI EDTECH — VIDEO LIBRARY ENGINE v1.0 ===
// === ADDITIVE ONLY — Zero changes to script.js, index.html ===
// === Pattern: mirrors renderDocuments() / initializeCourseLogic() ===
// ============================================================

// ─────────────────────────────────────────────────────────────
// SECTION 1: VIDEO DATA STORE
// Add/remove videos here only. Never touch script.js.
// Format: { id, title, topic, course, term, type }
//   type: 'free' = visible to everyone (demo + paid)
//         'paid' = visible only with hasFullAccess === true
// ─────────────────────────────────────────────────────────────

const KAERI_VIDEOS = [

  // ── BI110 ─────────────────────────────────────────────────
  {
    id:     "jnder_ye991-Nh82",           // YouTube video ID only (not full URL)
    title:  "Cell Biology Overview",
    topic:  "CELL BIOLOGY",
    course: "BI110",
    term:   "T1",
    type:   "free"
  },
  {
    id:     "URUJD5NEXC8",
    title:  "Microscopy & Staining Techniques",
    topic:  "MICROSCOPY & STAINING",
    course: "BI110",
    term:   "T1",
    type:   "free"
  },
  {
    id:     "QnQe0xW_JY4",
    title:  "Meiosis & Cell Division",
    topic:  "CELL DIVISION",
    course: "BI110",
    term:   "T1",
    type:   "paid"
  },
  {
    id:     "PLACEHOLDER_BI110_T2_001",
    title:  "Taxonomy & Classification",
    topic:  "TAXONOMY",
    course: "BI110",
    term:   "T2",
    type:   "free"
  },

  // ── CS110 ─────────────────────────────────────────────────
  {
    id:     "zOjov-2OZ0E",
    title:  "Introduction to Computing",
    topic:  "BASICS OF COMPUTER",
    course: "CS110",
    term:   "T1",
    type:   "free"
  },
  {
    id:     "PLACEHOLDER_CS110_T1_002",
    title:  "Data Representation — Binary & Hex",
    topic:  "DATA REPRESENTATION",
    course: "CS110",
    term:   "T1",
    type:   "paid"
  },
  {
    id:     "PLACEHOLDER_CS110_T1_003",
    title:  "The Internet Explained",
    topic:  "THE INTERNET",
    course: "CS110",
    term:   "T1",
    type:   "free"
  },

  // ── CH110 ─────────────────────────────────────────────────
  {
    id:     "PLACEHOLDER_CH110_T1_001",
    title:  "Atomic Structure",
    topic:  "ATOMIC STRUCTURE",
    course: "CH110",
    term:   "T1",
    type:   "free"
  },

  // ── PH110 ─────────────────────────────────────────────────
  {
    id:     "PLACEHOLDER_PH110_T1_001",
    title:  "Mechanics — Motion & Forces",
    topic:  "MECHANICS",
    course: "PH110",
    term:   "T1",
    type:   "free"
  },

  // ── MA110 ─────────────────────────────────────────────────
  {
    id:     "PLACEHOLDER_MA110_T1_001",
    title:  "Differentiation — Core Rules",
    topic:  "CALCULUS",
    course: "MA110",
    term:   "T1",
    type:   "free"
  },

  // ── LA111 ─────────────────────────────────────────────────
  {
    id:     "PLACEHOLDER_LA111_T1_001",
    title:  "Academic Writing Structure",
    topic:  "ACADEMIC WRITING",
    course: "LA111",
    term:   "T1",
    type:   "free"
  }

  // Add more entries above this line following the same format.
];

// ─────────────────────────────────────────────────────────────
// SECTION 2: VIDEO VIEWER INJECTOR
// Mirrors injectDocViewerHTML() in script.js exactly.
// Injected once, reused every session.
// ─────────────────────────────────────────────────────────────

function injectVideoViewerHTML() {
  if (document.getElementById('kaeri-video-viewer')) return;

  const html = `
  <div id="kaeri-video-viewer"
       style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
              background:rgba(0,0,0,0.97); z-index:10000; align-items:center;
              justify-content:center; backdrop-filter:blur(6px);">
    <div style="background:#0d1b2a; width:95%; max-width:860px; border-radius:14px;
                padding:0; display:flex; flex-direction:column;
                box-shadow:0 10px 50px rgba(0,0,0,0.7);
                border:2px solid #fccb00; overflow:hidden; position:relative;">

      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center;
                  padding:14px 20px; background:#111435; border-bottom:1px solid #1b263b;">
        <div>
          <p style="margin:0; font-size:0.68rem; letter-spacing:2px;
                    text-transform:uppercase; color:#fccb00; font-family:'Roboto',sans-serif;">
            KAERI EDTECH &nbsp;·&nbsp; VIDEO LESSON
          </p>
          <h3 id="vid-viewer-title"
              style="color:#fff; margin:4px 0 0 0; font-size:1rem;
                     white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:65vw;">
            Loading...
          </h3>
        </div>
        <button onclick="closeVideoViewer()"
                style="background:#dc3545; color:white; border:none; padding:7px 16px;
                       border-radius:6px; cursor:pointer; font-weight:bold; font-size:0.9em;">
          ✕ Close
        </button>
      </div>

      <!-- Responsive YouTube embed container (16:9) -->
      <div style="position:relative; width:100%; padding-top:56.25%; background:#000;">
        <iframe id="kaeri-yt-frame"
                style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                       gyroscope; picture-in-picture; web-share"
                allowfullscreen>
        </iframe>
      </div>

      <!-- Footer -->
      <div style="text-align:center; color:#3e506e; font-size:0.72em;
                  padding:8px; background:#0d1b2a; border-top:1px solid #1b263b;">
        Kaeri EdTech — Selected Educational Content
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

function openVideoViewer(youtubeId, title) {
  injectVideoViewerHTML();

  const viewer  = document.getElementById('kaeri-video-viewer');
  const frame   = document.getElementById('kaeri-yt-frame');
  const titleEl = document.getElementById('vid-viewer-title');

  // Stop previous video first
  frame.src = '';
  titleEl.textContent = title || 'Video Lesson';

  // YouTube nocookie embed — no tracking, no recommendations sidebar
  frame.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  viewer.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Log to analytics (same call as document views — no new backend needed)
  if (typeof logAnalyticsEvent === 'function') {
    logAnalyticsEvent('video_view', `Watched: ${title}`);
  }
}

function closeVideoViewer() {
  const viewer = document.getElementById('kaeri-video-viewer');
  const frame  = document.getElementById('kaeri-yt-frame');
  if (viewer) {
    frame.src = '';                      // stops playback immediately
    viewer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// ─────────────────────────────────────────────────────────────
// SECTION 3: VIDEO LIBRARY RENDERER
// Called by the mode button. Renders into #quiz-form exactly
// like renderDocuments() does — no new divs needed.
// ─────────────────────────────────────────────────────────────

function renderVideoLibrary() {
  const form = document.getElementById('quiz-form');
  if (!form) return;

  // Clear previous mode content (same pattern as all other renderers)
  form.innerHTML = '';
  const result = document.getElementById('result');
  if (result) result.innerHTML = '';

  // ── Filter to current course + term ───────────────────────
  const courseVideos = KAERI_VIDEOS.filter(v =>
    v.course === currentCourse && v.term === currentTerm
  );

  // ── Determine access (mirrors hasFullAccess check in renderDocuments) ──
  // hasFullAccess is the global boolean set by checkAccessStatus() in script.js
  const userHasAccess = (typeof hasFullAccess !== 'undefined') && hasFullAccess;

  // ── Group by topic ─────────────────────────────────────────
  const grouped = {};
  courseVideos.forEach(v => {
    if (!grouped[v.topic]) grouped[v.topic] = [];
    grouped[v.topic].push(v);
  });

  // ── Build HTML ─────────────────────────────────────────────
  let html = `
    <div style="margin-bottom:24px;">
      <h2 style="color:#72efdd; text-align:center; margin-bottom:6px;">
        🎬 Video Lessons
      </h2>
      <p style="text-align:center; color:#8892b0; font-size:0.9em; margin:0 0 24px 0;">
        ${currentCourse} — ${currentTerm} &nbsp;·&nbsp; 
        ${courseVideos.length} video${courseVideos.length !== 1 ? 's' : ''}
      </p>
    </div>`;

  if (courseVideos.length === 0) {
    html += `
      <div style="text-align:center; padding:60px 20px; color:#8892b0;">
        <p style="font-size:2rem; margin:0;">🎬</p>
        <p style="margin:12px 0 0 0;">No videos yet for ${currentCourse} ${currentTerm}.</p>
        <p style="font-size:0.85em; opacity:0.6;">Check back soon — content is added regularly.</p>
      </div>`;
  } else {
    Object.keys(grouped).sort().forEach(topic => {
      html += `
        <div style="margin-bottom:28px;">
          <p style="font-size:0.7rem; letter-spacing:2px; text-transform:uppercase;
                     color:#fccb00; margin:0 0 14px 0; padding-bottom:8px;
                     border-bottom:1px solid rgba(252,203,0,0.18);">
            ${topic}
          </p>
          <div style="display:flex; flex-direction:column; gap:12px;">`;

      grouped[topic].forEach(v => {
        const isLocked = (v.type === 'paid') && !userHasAccess;
        const thumbUrl  = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;

        if (isLocked) {
          // ── LOCKED CARD (same style as locked documents) ──
          html += `
            <div onclick="openPaymentModal()"
                 style="display:flex; align-items:center; gap:14px;
                        background:#1b263b; border-radius:10px; padding:14px 16px;
                        border:1px solid #2a3a50; cursor:pointer;
                        transition:border-color 0.2s;"
                 onmouseover="this.style.borderColor='#fccb00'"
                 onmouseout="this.style.borderColor='#2a3a50'">
              <!-- Thumbnail placeholder -->
              <div style="width:90px; min-width:90px; height:56px; background:#111435;
                          border-radius:7px; display:flex; align-items:center;
                          justify-content:center; font-size:1.6rem;">
                🔒
              </div>
              <div style="flex:1; overflow:hidden;">
                <p style="margin:0; font-size:0.95rem; color:#8892b0;
                           white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                  ${v.title}
                </p>
                <p style="margin:5px 0 0 0; font-size:0.75rem; color:#fccb00; opacity:0.7;">
                  🔓 Full Access required
                </p>
              </div>
            </div>`;
        } else {
          // ── UNLOCKED CARD ──
          html += `
            <div onclick="openVideoViewer('${v.id}', '${v.title.replace(/'/g, "\\'")}')"
                 style="display:flex; align-items:center; gap:14px;
                        background:#1b263b; border-radius:10px; padding:14px 16px;
                        border:1px solid #2a3a50; cursor:pointer;
                        transition:border-color 0.2s, background 0.2s;"
                 onmouseover="this.style.borderColor='#72efdd'; this.style.background='#1e2d40'"
                 onmouseout="this.style.borderColor='#2a3a50'; this.style.background='#1b263b'">
              <!-- YouTube thumbnail -->
              <div style="width:90px; min-width:90px; height:56px; border-radius:7px;
                          overflow:hidden; position:relative; background:#000;">
                <img src="${thumbUrl}" alt="${v.title}"
                     style="width:100%; height:100%; object-fit:cover; display:block;"
                     onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;font-size:1.6rem;\'>▶️</div>'">
                <!-- Play overlay -->
                <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
                             background:rgba(0,0,0,0.55); border-radius:50%;
                             width:28px; height:28px; display:flex;
                             align-items:center; justify-content:center;
                             font-size:0.85rem; pointer-events:none;">
                  ▶
                </div>
              </div>
              <div style="flex:1; overflow:hidden;">
                <p style="margin:0; font-size:0.95rem; color:#e0e6ed;
                           white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                  ${v.title}
                </p>
                ${v.type === 'free' ? `
                <p style="margin:5px 0 0 0; font-size:0.72rem; color:#28a745;">
                  ✅ Free Preview
                </p>` : `
                <p style="margin:5px 0 0 0; font-size:0.72rem; color:#72efdd; opacity:0.7;">
                  ▶ Full Access
                </p>`}
              </div>
            </div>`;
        }
      });

      html += `</div></div>`;
    });
  }

  // ── Upsell strip for demo users ────────────────────────────
  if (!userHasAccess) {
    const lockedCount = courseVideos.filter(v => v.type === 'paid').length;
    if (lockedCount > 0) {
      html += `
        <div onclick="openPaymentModal()"
             style="margin-top:8px; background:linear-gradient(135deg,#1a2a3a,#0d1b2a);
                    border:2px solid #fccb00; border-radius:12px; padding:20px;
                    text-align:center; cursor:pointer;">
          <p style="margin:0; color:#fccb00; font-weight:bold; font-size:1rem;">
            🔓 ${lockedCount} video${lockedCount > 1 ? 's' : ''} locked
          </p>
          <p style="margin:8px 0 0 0; color:#8892b0; font-size:0.85em;">
            Unlock Full Access from ZMW 15 to watch every lesson.
          </p>
        </div>`;
    }
  }

  form.innerHTML = html;
}

// ─────────────────────────────────────────────────────────────
// SECTION 4: MODE BUTTON INJECTOR
// Mirrors the TTS button / docs button injection in
// initializeCourseLogic() — runs after that function fires.
// Safe to call multiple times (ID-guards prevent duplicates).
// ─────────────────────────────────────────────────────────────

function injectVideosButton() {
  const modeButtonsDiv = document.querySelector('.mode-buttons');
  if (!modeButtonsDiv) return;
  if (document.getElementById('videos-btn')) return;   // already injected

  const btn = document.createElement('button');
  btn.id        = 'videos-btn';
  btn.innerHTML = '🎬 Video Lessons';
  btn.style.cssText = `
    background-color: #c0392b;
    color: white;
    border: none;
    padding: 15px 20px;
    font-size: 1.1em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    cursor: pointer;
  `;
  btn.onclick = renderVideoLibrary;

  // Insert after the docs button (position 2, 0-indexed)
  // This keeps: MCQ | Docs | Videos | Short Answer | Essay | Flashcards | TTS | Progress
  const docsBtn = document.getElementById('docs-btn');
  if (docsBtn && docsBtn.nextSibling) {
    modeButtonsDiv.insertBefore(btn, docsBtn.nextSibling);
  } else {
    modeButtonsDiv.appendChild(btn);
  }
}

// ─────────────────────────────────────────────────────────────
// SECTION 5: BOOTSTRAP
// Wait for initializeCourseLogic() to finish, then inject.
// Uses a small poll because initializeCourseLogic is async
// and we cannot modify it.
// ─────────────────────────────────────────────────────────────

(function bootstrapVideoEngine() {
  // Poll every 200ms until .mode-buttons exists (injected by initializeCourseLogic)
  // Max 15 seconds — then give up silently.
  let attempts = 0;
  const MAX    = 7500;

  const poll = setInterval(() => {
    attempts++;
    const modeDiv = document.querySelector('.mode-buttons');
    if (modeDiv || attempts >= MAX) {
      clearInterval(poll);
      if (modeDiv) {
        injectVideosButton();
        injectVideoViewerHTML();
      }
    }
  }, 200);
})();
