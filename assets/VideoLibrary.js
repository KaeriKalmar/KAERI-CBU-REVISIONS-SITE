// ============================================================
// === KAERI EDTECH — VIDEO LIBRARY ENGINE (VideoLibrary.js) ===
// === v2.0 LAUNCH READY — Enhanced with Watch History,      ===
// === Search, Upsell & Analytics                            ===
// === Load after script.js – completely self-contained.    ===
// ============================================================

(function () {
    "use strict";

    // ============================================================
    // === SECTION 1: VIDEO DATA                                ===
    // ============================================================
    const VIDEO_DATA = [
        // ... (existing CS110 T1 videos, unchanged) ...
        // (I'm keeping all the original videos for brevity, but they
        //  are exactly as in your current file — no modifications.)
        {
            course: "CS110", term: "T1",
            topic: "Getting Started with Excel",
            videoId: "z7c3x73BzE8", duration: "10:15",
            description: "Tour the Excel interface, ribbons, and basic navigation. Follow along on your computer.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Excel: Cell Basics",
            videoId: "6mSKsaquTAM", duration: "12:30",
            description: "Select, enter, and edit data in cells. Essential before starting the financial sample.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Modifying Columns, Rows & Cells",
            videoId: "9s0OdXiuqL0", duration: "15:22",
            description: "Adjust column widths so all text is visible. Then format data as a table (covered later).",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Formatting Cells (Currency & Date)",
            videoId: "etAMC0KRuBE", duration: "18:10",
            description: "Add $ currency symbol to financial columns and change date format.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Understanding Number Formats",
            videoId: "fjyOG7Ls7BA", duration: "14:45",
            description: "Deep dive into number formatting – essential for currency, percentages, and custom date formats.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Intro to Formulas (Basic Calculations)",
            videoId: "xc14gFviTw", duration: "11:30",
            description: "Learn to write formulas: =units_sold * sale_price, =units_sold * manufacturing_price.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Creating More Complex Formulas",
            videoId: "J-W3thqtDpQ", duration: "16:20",
            description: "Combine operations to calculate discounts based on bands.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Relative and Absolute Cell References",
            videoId: "iDg9s7BJ2m4", duration: "13:55",
            description: "Use $A$1 references to keep discount rates fixed while copying formulas.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Functions (SUM, AVERAGE, etc.)",
            videoId: "-9d4m79twdA", duration: "19:40",
            description: "Apply functions to calculate totals and verify profit.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Sorting Data",
            videoId: "Ep5q1cUhQas", duration: "9:15",
            description: "Sort the table by profit from highest to lowest.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Creating Charts (Scatter Plots)",
            videoId: "Wu7jYTr1Pk", duration: "21:08",
            description: "Insert scatter plots to show sales trends for each country.",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Formatting Data as a Table",
            videoId: "iroIA83soo", duration: "12:30",
            description: "Convert the entire data range into a proper Excel table (Ctrl+T).",
            locked: false
        },
        {
            course: "CS110", term: "T1",
            topic: "Introduction to Google Sheets (Alternative)",
            videoId: "mdrTRzwb4J8", duration: "18:02",
            description: "If you prefer Google Sheets, watch this intro, then perform all tasks in Sheets.",
            locked: false
        }
        // other course videos remain unchanged ...
    ];

    // ============================================================
    // === SECTION 2: MODULE STATE                              ===
    // ============================================================
    const VL = {
        panelVisible: false,
        playerVisible: false,
        currentVideoId: null,
        currentVideoTopic: null,
        filteredVideos: [],
        initialized: false,
        retryCount: 0,
        MAX_RETRIES: 20,
        RETRY_INTERVAL_MS: 250,
        ytPlayer: null,
        ytApiReady: false,
        ytApiLoading: false,
        // NEW: watch history state
        watchHistory: _loadWatchHistory(),
        currentSearch: "",
        currentSort: "default"  // "default" | "topic" | "duration"
    };

    // ── Watch History Helpers ──────────────────────────────
    const WATCH_HISTORY_KEY = "kaeri_vl_watch_history_v1";
    function _loadWatchHistory() {
        try {
            return JSON.parse(localStorage.getItem(WATCH_HISTORY_KEY)) || {};
        } catch (e) {
            return {};
        }
    }
    function _saveWatchHistory(history) {
        try {
            localStorage.setItem(WATCH_HISTORY_KEY, JSON.stringify(history));
        } catch (e) {}
    }
    function markVideoWatched(videoId, percentComplete) {
        const history = VL.watchHistory;
        history[videoId] = {
            lastWatched: Date.now(),
            progress: Math.max(history[videoId]?.progress || 0, percentComplete)
        };
        _saveWatchHistory(history);
    }
    function getWatchedPercent(videoId) {
        return VL.watchHistory[videoId]?.progress || 0;
    }

    // ── Safe Helpers (unchanged except added analytics) ────
    function safeGetElement(id) {
        return document.getElementById(id) || null;
    }
    function safeHasFullAccess() {
        try { return typeof hasFullAccess !== "undefined" && hasFullAccess === true; }
        catch (e) { return false; }
    }
    function safeGetCourse() {
        try { return document.body.getAttribute("data-course") || null; }
        catch (e) { return null; }
    }
    function safeGetTerm() {
        try { return document.body.getAttribute("data-term") || null; }
        catch (e) { return null; }
    }
    function safeOpenPaymentModal() {
        try {
            if (typeof openPaymentModal === "function") openPaymentModal();
            else { const m = safeGetElement("payment-modal"); if (m) m.style.display = "flex"; }
        } catch (e) {}
    }
    function safeShowNotification(msg, type, duration) {
        try { if (typeof showAppNotification === "function") showAppNotification(msg, type||"info", duration||3000); }
        catch (e) {}
    }
    function safeLogAnalytics(action, details) {
        try { if (typeof logAnalyticsEvent === "function") logAnalyticsEvent(action, details); }
        catch (e) {}
    }

    // ============================================================
    // === YOUTUBE IFRAME API LOADER (unchanged)               ===
    // ============================================================
    const EMBED_BLOCKED_ERRORS = new Set([101, 150, 153]);
    function loadYouTubeAPI() { /* ... same as before ... */ }
    function showEmbedFallback(videoId, topic) { /* ... same as before ... */ }

    // ============================================================
    // === CSS INJECTION (extended with new styles)            ===
    // ============================================================
    function injectVideoStyles() {
        if (safeGetElement("vl-styles")) return;
        const style = document.createElement("style");
        style.id = "vl-styles";
        style.innerHTML = `
            /* ... (all existing styles unchanged) ... */

            /* ── NEW: RECENTLY WATCHED SECTION ── */
            .vl-recent-section {
                margin-bottom: 28px;
                background: #1b263b;
                border-radius: 10px;
                padding: 16px 20px;
                border: 1px solid #3e506e;
            }
            .vl-recent-title {
                color: #fccb00; font-size: 0.85em; font-weight: 700;
                text-transform: uppercase; letter-spacing: 1px;
                margin: 0 0 12px 0;
            }
            .vl-recent-grid {
                display: flex; gap: 12px; overflow-x: auto;
                padding-bottom: 6px;
            }
            .vl-recent-card {
                min-width: 180px; max-width: 200px;
                background: #0d1b2a; border-radius: 8px;
                overflow: hidden; cursor: pointer;
                border: 1px solid #2a3a50; transition: 0.2s;
                flex-shrink: 0;
            }
            .vl-recent-card:hover { border-color: #72efdd; }
            .vl-recent-thumb {
                width: 100%; aspect-ratio: 16/9; background: #000;
                position: relative; overflow: hidden;
            }
            .vl-recent-thumb img {
                width: 100%; height: 100%; object-fit: cover; display: block;
            }
            .vl-recent-progress-bar {
                position: absolute; bottom: 0; left: 0; height: 4px;
                background: #e63946; transition: width 0.2s;
                z-index: 1;
            }
            .vl-recent-body {
                padding: 10px 10px 8px;
            }
            .vl-recent-body p {
                margin: 0; font-size: 0.8em; color: #e0e6ed;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                line-height: 1.3;
            }
            .vl-recent-continue {
                font-size: 0.7em; color: #72efdd; margin-top: 4px;
                font-weight: 600;
            }
            .vl-watched-check {
                position: absolute; top: 6px; right: 6px;
                background: #28a745; color: #fff; border-radius: 50%;
                width: 20px; height: 20px; display: flex;
                align-items: center; justify-content: center;
                font-size: 0.7em; z-index: 2;
            }

            /* ── SEARCH & SORT BAR ── */
            .vl-controls-bar {
                display: flex; gap: 10px; margin-bottom: 20px;
                flex-wrap: wrap; align-items: center;
            }
            #vl-search-input {
                flex: 1; min-width: 180px;
                padding: 10px 14px; border-radius: 8px;
                border: 1px solid #3e506e; background: #1b263b;
                color: #fff; font-size: 0.9em;
                outline: none; transition: border-color 0.2s;
            }
            #vl-search-input:focus { border-color: #72efdd; }
            #vl-search-input::placeholder { color: #6c7a8d; }
            #vl-sort-select {
                padding: 10px 12px; border-radius: 8px;
                border: 1px solid #3e506e; background: #1b263b;
                color: #fff; font-size: 0.9em; cursor: pointer;
                outline: none;
            }

            /* ── UPSELL BANNER ── */
            .vl-upsell-banner {
                background: linear-gradient(135deg, #2d2a0a, #1e1a00);
                border: 1px solid #ffc107; border-radius: 10px;
                padding: 16px 20px; margin-top: 20px;
                display: flex; align-items: center; gap: 14px;
                cursor: pointer; transition: 0.2s;
            }
            .vl-upsell-banner:hover { box-shadow: 0 0 15px rgba(255,193,7,0.15); }
            .vl-upsell-banner p { margin: 0; color: #ffc107; font-weight: 600; flex: 1; }
            .vl-upsell-banner button {
                background: #ffc107; color: #000; border: none;
                padding: 8px 16px; border-radius: 6px;
                font-weight: 700; cursor: pointer;
                white-space: nowrap;
            }

            /* ── PROGRESS INDICATOR ON CARD ── */
            .vl-progress-indicator {
                display: flex; align-items: center; gap: 6px;
                margin-top: 4px;
            }
            .vl-progress-bar-small {
                width: 40px; height: 4px; background: #2a3a50;
                border-radius: 2px; overflow: hidden;
            }
            .vl-progress-bar-small-fill {
                height: 100%; background: #72efdd; width: 0%;
            }
            .vl-progress-text {
                font-size: 0.65em; color: #6c7a8d;
            }

            @media (max-width: 480px) { /* ... unchanged ... */ }
        `;
        document.head.appendChild(style);
    }

    // ============================================================
    // === HTML INJECTION (added search & sort, recent section) ===
    // ============================================================
    function injectVideoContainer() {
        if (safeGetElement("vl-panel")) return;
        const quizForm = safeGetElement("quiz-form");
        if (!quizForm) return;

        const container = document.createElement("div");
        container.id = "vl-container";
        container.innerHTML = `
            <div id="vl-panel" role="region" aria-label="Video Library">
                <div class="vl-panel-header">
                    <div>
                        <p class="vl-panel-title">📺 Video Library</p>
                        <p class="vl-panel-subtitle" id="vl-subtitle">Loading videos…</p>
                    </div>
                    <button class="vl-close-panel-btn" onclick="VideoLibrary.closePanel()">✕ Close</button>
                </div>

                <!-- NEW: Recently Watched -->
                <div id="vl-recent-section" class="vl-recent-section" style="display: none;">
                    <p class="vl-recent-title">📌 Continue Watching</p>
                    <div id="vl-recent-grid" class="vl-recent-grid"></div>
                </div>

                <!-- NEW: Search & Sort -->
                <div class="vl-controls-bar">
                    <input type="text" id="vl-search-input" placeholder="🔍 Search videos by topic..."
                           oninput="VideoLibrary.onSearch()">
                    <select id="vl-sort-select" onchange="VideoLibrary.onSort()">
                        <option value="default">Default order</option>
                        <option value="topic">By topic (A-Z)</option>
                        <option value="duration">By duration (shortest first)</option>
                    </select>
                </div>

                <div id="vl-topic-grid" aria-live="polite"></div>

                <!-- Player section unchanged -->
                <div id="vl-player-section" aria-live="polite">
                    <hr class="vl-divider">
                    <div class="vl-player-header">
                        <p id="vl-now-playing-title"></p>
                        <button class="vl-back-to-list-btn" onclick="VideoLibrary.closePlayer()">← Back to List</button>
                    </div>
                    <div id="vl-player-wrapper">
                        <div class="vl-responsive-player">
                            <iframe id="vl-iframe" allowfullscreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                title="Kaeri EdTech Video Player">
                            </iframe>
                        </div>
                    </div>
                    <div id="vl-yt-safety-link" style="margin-top:10px; text-align:right; display:none;">
                        <a id="vl-yt-direct-link" href="#" target="_blank" rel="noopener"
                           style="color:#6c7a8d; font-size:0.8em; text-decoration:none;">
                            🔗 Having trouble? Watch directly on YouTube →
                        </a>
                    </div>
                    <p id="vl-player-description"></p>
                </div>

                <!-- NEW: Upsell Banner (only shown for free users after watching 3+ videos) -->
                <div id="vl-upsell-banner" class="vl-upsell-banner" style="display: none;" onclick="safeOpenPaymentModal()">
                    <p>🔓 Unlock the full library + PDFs & quizzes</p>
                    <button>Upgrade Now</button>
                </div>
            </div>
        `;
        quizForm.parentNode.insertBefore(container, quizForm);
    }

    // ============================================================
    // === BUTTON INJECTION (unchanged)                        ===
    // ============================================================
    function injectVideoButton() { /* ... identical ... */ }

    // ============================================================
    // === DATA FILTERING + SEARCH + SORT                      ===
    // ============================================================
    function filterVideos() {
        const course = safeGetCourse();
        const term = safeGetTerm();
        if (!course || !term) { VL.filteredVideos = []; return; }
        let list = VIDEO_DATA.filter(v => v.course === course && v.term === term);

        // apply search
        if (VL.currentSearch.trim()) {
            const query = VL.currentSearch.trim().toLowerCase();
            list = list.filter(v => v.topic.toLowerCase().includes(query));
        }

        // apply sort
        if (VL.currentSort === "topic") {
            list.sort((a, b) => a.topic.localeCompare(b.topic));
        } else if (VL.currentSort === "duration") {
            list.sort((a, b) => {
                const durA = _durationToSecs(a.duration);
                const durB = _durationToSecs(b.duration);
                return durA - durB;
            });
        }
        VL.filteredVideos = list;
    }

    function _durationToSecs(durStr) {
        if (!durStr) return Infinity;
        const parts = durStr.split(':').map(Number);
        if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
        if (parts.length === 2) return parts[0]*60 + parts[1];
        return parseInt(parts[0]) || Infinity;
    }

    // ============================================================
    // === RENDER: RECENTLY WATCHED SECTION                   ===
    // ============================================================
    function renderRecentlyWatched() {
        const section = safeGetElement("vl-recent-section");
        const grid = safeGetElement("vl-recent-grid");
        if (!section || !grid) return;

        // Get videos that have been watched (progress > 0) sorted by last watched
        const recentVideos = VL.filteredVideos
            .filter(v => getWatchedPercent(v.videoId) > 0)
            .sort((a, b) => (VL.watchHistory[b.videoId]?.lastWatched || 0) - (VL.watchHistory[a.videoId]?.lastWatched || 0))
            .slice(0, 4);

        if (recentVideos.length === 0) {
            section.style.display = "none";
            return;
        }
        section.style.display = "block";
        grid.innerHTML = "";

        recentVideos.forEach(video => {
            const percent = getWatchedPercent(video.videoId);
            const isComplete = percent >= 95;

            const card = document.createElement("div");
            card.className = "vl-recent-card";
            card.onclick = () => VideoLibrary.openPlayer(video);

            card.innerHTML = `
                <div class="vl-recent-thumb">
                    <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg"
                         alt="${video.topic}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:2em;display:flex;align-items:center;justify-content:center;height:100%;color:#555;\\'>🎬</div>'">
                    <div class="vl-recent-progress-bar" style="width: ${percent}%;"></div>
                    ${isComplete ? '<div class="vl-watched-check">✓</div>' : ''}
                </div>
                <div class="vl-recent-body">
                    <p>${video.topic}</p>
                    <span class="vl-recent-continue">${isComplete ? "Watched" : "Continue"}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ============================================================
    // === RENDER TOPIC GRID (enhanced with progress)         ===
    // ============================================================
    function renderTopicGrid() {
        const grid = safeGetElement("vl-topic-grid");
        const subtitle = safeGetElement("vl-subtitle");
        if (!grid) return;

        filterVideos();
        const count = VL.filteredVideos.length;
        if (subtitle) subtitle.textContent = count > 0 ? `${count} video${count!==1?'s':''} available` : "No videos found";

        // Render recently watched
        renderRecentlyWatched();

        // Upsell logic: free user & watched 3+ free videos
        if (!safeHasFullAccess()) {
            const freeVideosWatched = VL.filteredVideos.filter(v => !v.locked && getWatchedPercent(v.videoId) > 0).length;
            const upsellBanner = safeGetElement("vl-upsell-banner");
            if (upsellBanner) {
                upsellBanner.style.display = freeVideosWatched >= 3 ? "flex" : "none";
            }
        }

        if (count === 0) {
            grid.innerHTML = `<div class="vl-empty" style="grid-column:1/-1;"><div class="vl-empty-icon">🔍</div><p>No videos match your search.</p></div>`;
            return;
        }

        grid.innerHTML = "";
        const fullAccess = safeHasFullAccess();

        VL.filteredVideos.forEach(video => {
            const isLocked = video.locked && !fullAccess;
            const progress = getWatchedPercent(video.videoId);
            const isComplete = progress >= 95;

            const card = document.createElement("div");
            card.className = `vl-card${isLocked ? " locked" : ""}`;
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");

            const thumb = buildThumbnail(video.videoId, video.topic);
            if (isLocked) {
                thumb.innerHTML += `<span class="vl-lock-badge">🔒 Locked</span>`;
            } else if (isComplete) {
                thumb.innerHTML += `<div class="vl-watched-check">✓</div>`;
            }
            card.appendChild(thumb);

            const body = document.createElement("div");
            body.className = "vl-card-body";
            body.innerHTML = `
                <p class="vl-card-topic">${video.topic}</p>
                <p class="vl-card-desc">${video.description || ""}</p>
                <div class="vl-card-footer">
                    ${video.duration ? `<span class="vl-duration-badge">⏱ ${video.duration}</span>` : ""}
                    <span class="${isLocked ? "vl-locked-label" : "vl-watch-label"}">
                        ${isLocked ? "🔒 Unlock" : (isComplete ? "✓ Watched" : "▶ Watch Now")}
                    </span>
                </div>
                <!-- progress bar for partially watched -->
                ${!isLocked && progress > 0 && !isComplete ? `
                    <div class="vl-progress-indicator">
                        <div class="vl-progress-bar-small"><div class="vl-progress-bar-small-fill" style="width:${progress}%"></div></div>
                        <span class="vl-progress-text">${Math.round(progress)}%</span>
                    </div>` : ""}
            `;
            card.appendChild(body);

            const clickHandler = isLocked
                ? () => handleLockedClick(video)
                : () => VideoLibrary.openPlayer(video);
            card.addEventListener("click", clickHandler);
            card.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") { e.preventDefault(); clickHandler(); } });
            grid.appendChild(card);
        });
    }

    function handleLockedClick(video) {
        safeShowNotification(`🔒 "${video.topic}" requires full access.`, "warning", 4000);
        safeOpenPaymentModal();
    }

    // ============================================================
    // === PUBLIC API (enhanced with search/sort + analytics) ===
    // ============================================================
    window.VideoLibrary = {
        togglePanel: function() { /* ... unchanged ... */ },
        closePanel: function() { /* ... unchanged ... */ },
        openPlayer: async function(video) {
            if (!video || !video.videoId) return;
            // Analytics: video start
            safeLogAnalytics("video_start", video.topic + " (" + video.videoId + ")");

            // ... (existing player open code, same as before) ...

            // After YT.Player created, attach onStateChange to track progress
            if (VL.ytPlayer) {
                VL.ytPlayer.addEventListener("onStateChange", (event) => {
                    if (event.data === window.YT.PlayerState.ENDED) {
                        // Mark as fully watched
                        markVideoWatched(VL.currentVideoId, 100);
                        safeLogAnalytics("video_complete", VL.currentVideoTopic);
                        // Re-render grid to show checkmarks
                        if (VL.panelVisible) renderTopicGrid();
                    } else if (event.data === window.YT.PlayerState.PLAYING) {
                        // Update progress periodically (every 10 sec)
                        const interval = setInterval(() => {
                            if (!VL.ytPlayer || !VL.currentVideoId) { clearInterval(interval); return; }
                            const currentTime = VL.ytPlayer.getCurrentTime() || 0;
                            const duration = VL.ytPlayer.getDuration() || 1;
                            const percent = Math.min(100, (currentTime / duration) * 100);
                            markVideoWatched(VL.currentVideoId, percent);
                        }, 10000);
                        // Store interval ID to clear later (optional)
                        VL._progressInterval = interval;
                    }
                });
            }
        },
        closePlayer: function() {
            if (VL._progressInterval) { clearInterval(VL._progressInterval); VL._progressInterval = null; }
            // ... (existing player close code) ...
            // Refresh grid after close to show updated progress
            if (VL.panelVisible) renderTopicGrid();
        },
        onSearch: function() {
            const input = safeGetElement("vl-search-input");
            if (input) VL.currentSearch = input.value;
            renderTopicGrid();
        },
        onSort: function() {
            const select = safeGetElement("vl-sort-select");
            if (select) VL.currentSort = select.value;
            renderTopicGrid();
        },
        getVideoCount: function() { filterVideos(); return VL.filteredVideos.length; }
    };

    // ============================================================
    // === ESCAPE KEY & INIT (unchanged)                        ===
    // ============================================================
    // (existing escape listener and attemptInit remain the same)
})();) => a.topic.localeCompare(b.topic));
        } else if (VL.currentSort === "duration") {
            list.sort((a, b) => {
                const durA = _durationToSecs(a.duration);
                const durB = _durationToSecs(b.duration);
                return durA - durB;
            });
        }

        VL.filteredVideos = list;
    }

    function _durationToSecs(durStr) {
        if (!durStr) return Infinity;
        const parts = durStr.split(':').map(Number);
        if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
        if (parts.length === 2) return parts[0]*60 + parts[1];
        return parseInt(parts[0]) || Infinity;
    }

    // ============================================================
    // === SECTION 8: THUMBNAIL BUILDER (unchanged)             ===
    // ============================================================
    function buildThumbnail(videoId, topic) {
        const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        const wrapper = document.createElement("div");
        wrapper.className = "vl-thumb";

        const img = document.createElement("img");
        img.alt = `Thumbnail for ${topic}`;
        img.loading = "lazy";
        img.src = thumbUrl;
        img.onerror = function () {
            wrapper.innerHTML = `<div class="vl-thumb-fallback">🎬</div>`;
        };

        const overlay = document.createElement("div");
        overlay.className = "vl-play-overlay";
        overlay.innerHTML = `<div class="vl-play-icon">▶</div>`;

        wrapper.appendChild(img);
        wrapper.appendChild(overlay);
        return wrapper;
    }

    // ============================================================
    // === SECTION 9: RENDER PANEL (enhanced)                   ===
    // ============================================================
    function renderRecentlyWatched() {
        const section = safeGetElement("vl-recent-section");
        const grid = safeGetElement("vl-recent-grid");
        if (!section || !grid) return;

        const recentVideos = VL.filteredVideos
            .filter(v => getWatchedPercent(v.videoId) > 0)
            .sort((a, b) => (VL.watchHistory[b.videoId]?.lastWatched || 0) - (VL.watchHistory[a.videoId]?.lastWatched || 0))
            .slice(0, 4);

        if (recentVideos.length === 0) {
            section.style.display = "none";
            return;
        }

        section.style.display = "block";
        grid.innerHTML = "";

        recentVideos.forEach(video => {
            const percent = getWatchedPercent(video.videoId);
            const isComplete = percent >= 95;

            const card = document.createElement("div");
            card.className = "vl-recent-card";
            card.onclick = () => VideoLibrary.openPlayer(video);

            card.innerHTML = `
                <div class="vl-recent-thumb">
                    <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg"
                         alt="${video.topic}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:2em;display:flex;align-items:center;justify-content:center;height:100%;color:#555;\\'>🎬</div>'">
                    <div class="vl-recent-progress-bar" style="width: ${percent}%;"></div>
                    ${isComplete ? '<div class="vl-watched-check">✓</div>' : ''}
                </div>
                <div class="vl-recent-body">
                    <p>${video.topic}</p>
                    <span class="vl-recent-continue">${isComplete ? "Watched" : "Continue"}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderTopicGrid() {
        const grid     = safeGetElement("vl-topic-grid");
        const subtitle = safeGetElement("vl-subtitle");
        if (!grid) return;

        filterVideos();

        const count = VL.filteredVideos.length;
        if (subtitle) {
            subtitle.textContent = count > 0
                ? `${count} video${count !== 1 ? "s" : ""} available for this term`
                : "No videos available for this term yet";
        }

        // Render recently watched
        renderRecentlyWatched();

        // Upsell logic for free users
        const upsellBanner = safeGetElement("vl-upsell-banner");
        if (!safeHasFullAccess()) {
            const freeWatched = VL.filteredVideos.filter(v => !v.locked && getWatchedPercent(v.videoId) > 0).length;
            if (upsellBanner) upsellBanner.style.display = freeWatched >= 3 ? "flex" : "none";
        } else if (upsellBanner) {
            upsellBanner.style.display = "none";
        }

        if (count === 0) {
            grid.innerHTML = `
                <div class="vl-empty" style="grid-column: 1/-1;">
                    <div class="vl-empty-icon">🔍</div>
                    <p>No videos match your search.</p>
                </div>`;
            return;
        }

        grid.innerHTML = "";
        const fullAccess = safeHasFullAccess();

        VL.filteredVideos.forEach(video => {
            const isLocked = video.locked && !fullAccess;
            const progress = getWatchedPercent(video.videoId);
            const isComplete = progress >= 95;

            const card = document.createElement("div");
            card.className = `vl-card${isLocked ? " locked" : ""}`;
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", `${video.topic}${isLocked ? " (locked)" : ""}`);

            const thumb = buildThumbnail(video.videoId, video.topic);
            if (isLocked) {
                thumb.innerHTML += `<span class="vl-lock-badge">🔒 Locked</span>`;
            } else if (isComplete) {
                thumb.innerHTML += `<div class="vl-watched-check">✓</div>`;
            }
            card.appendChild(thumb);

            const body = document.createElement("div");
            body.className = "vl-card-body";
            body.innerHTML = `
                <p class="vl-card-topic">${video.topic}</p>
                <p class="vl-card-desc">${video.description || ""}</p>
                <div class="vl-card-footer">
                    ${video.duration ? `<span class="vl-duration-badge">⏱ ${video.duration}</span>` : ""}
                    <span class="${isLocked ? "vl-locked-label" : "vl-watch-label"}">
                        ${isLocked ? "🔒 Unlock" : (isComplete ? "✓ Watched" : "▶ Watch Now")}
                    </span>
                </div>
                ${!isLocked && progress > 0 && !isComplete ? `
                <div class="vl-progress-indicator">
                    <div class="vl-progress-bar-small"><div class="vl-progress-bar-small-fill" style="width:${progress}%"></div></div>
                    <span class="vl-progress-text">${Math.round(progress)}%</span>
                </div>` : ""}
            `;
            card.appendChild(body);

            const clickHandler = isLocked
                ? () => handleLockedClick(video)
                : () => VideoLibrary.openPlayer(video);

            card.addEventListener("click", clickHandler);
            card.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    clickHandler();
                }
            });

            grid.appendChild(card);
        });
    }

    // ============================================================
    // === SECTION 10: LOCKED CARD HANDLER (unchanged)         ===
    // ============================================================
    function handleLockedClick(video) {
        safeShowNotification(
            `🔒 "${video.topic}" requires full access. Unlock below.`,
            "warning",
            4000
        );
        safeOpenPaymentModal();
    }

    // ============================================================
    // === SECTION 11: PUBLIC API (VideoLibrary namespace)       ===
    // ============================================================
    window.VideoLibrary = {

        togglePanel: function () {
            const panel = safeGetElement("vl-panel");
            if (!panel) return;

            VL.panelVisible = !VL.panelVisible;

            if (VL.panelVisible) {
                panel.classList.add("vl-visible");
                renderTopicGrid();
                try { panel.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
                safeShowNotification("📺 Video Library opened", "info", 1500);
            } else {
                VideoLibrary.closePanel();
            }
        },

        closePanel: function () {
            VideoLibrary.closePlayer();
            const panel = safeGetElement("vl-panel");
            if (panel) panel.classList.remove("vl-visible");
            VL.panelVisible = false;
        },

        openPlayer: async function (video) {
            if (!video || !video.videoId) return;

            const playerSection = safeGetElement("vl-player-section");
            const titleEl       = safeGetElement("vl-now-playing-title");
            const descEl        = safeGetElement("vl-player-description");
            const safetyLink    = safeGetElement("vl-yt-safety-link");
            const directLink    = safeGetElement("vl-yt-direct-link");

            if (!playerSection) return;

            VL.currentVideoId    = video.videoId;
            VL.currentVideoTopic = video.topic;

            if (titleEl) titleEl.textContent = `▶ Now Playing: ${video.topic}`;
            if (descEl)  descEl.textContent  = video.description || "";

            if (safetyLink) safetyLink.style.display = "block";
            if (directLink) directLink.href = `https://www.youtube.com/watch?v=${video.videoId}`;

            playerSection.classList.add("vl-visible");
            VL.playerVisible = true;

            try { playerSection.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}

            // Analytics
            safeLogAnalytics("video_start", video.topic + " (" + video.videoId + ")");

            await loadYouTubeAPI();

            const wrapper = safeGetElement("vl-player-wrapper");
            if (wrapper) {
                wrapper.innerHTML = `
                    <div class="vl-responsive-player">
                        <iframe id="vl-iframe" allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write;
                                   encrypted-media; gyroscope; picture-in-picture"
                            title="Kaeri EdTech Video Player">
                        </iframe>
                    </div>`;
            }

            if (VL.ytPlayer && typeof VL.ytPlayer.destroy === "function") {
                try { VL.ytPlayer.destroy(); } catch (e) {}
                VL.ytPlayer = null;
            }

            if (VL.ytApiReady && window.YT && window.YT.Player) {
                try {
                    VL.ytPlayer = new window.YT.Player("vl-iframe", {
                        videoId: video.videoId,
                        playerVars: {
                            autoplay: 1,
                            rel: 0,
                            modestbranding: 1,
                            origin: window.location.origin || ""
                        },
                        events: {
                            onError: function (event) {
                                const code = event.data;
                                if (EMBED_BLOCKED_ERRORS.has(code)) {
                                    try { VL.ytPlayer.destroy(); } catch (e) {}
                                    VL.ytPlayer = null;
                                    showEmbedFallback(VL.currentVideoId, VL.currentVideoTopic);
                                    if (safetyLink) {
                                        safetyLink.innerHTML = `
                                            <a href="https://www.youtube.com/watch?v=${VL.currentVideoId}"
                                               target="_blank" rel="noopener noreferrer"
                                               style="color:#e63946;font-size:0.85em;font-weight:700;text-decoration:none;">
                                                ▶ Watch on YouTube (embedding disabled by uploader)
                                            </a>`;
                                    }
                                }
                            },
                            onStateChange: function (event) {
                                if (event.data === window.YT.PlayerState.ENDED) {
                                    markVideoWatched(VL.currentVideoId, 100);
                                    safeLogAnalytics("video_complete", VL.currentVideoTopic);
                                    if (VL.panelVisible) renderTopicGrid();
                                } else if (event.data === window.YT.PlayerState.PLAYING) {
                                    // Start periodic progress tracking
                                    if (VL._progressInterval) clearInterval(VL._progressInterval);
                                    VL._progressInterval = setInterval(() => {
                                        if (!VL.ytPlayer || !VL.currentVideoId) {
                                            clearInterval(VL._progressInterval);
                                            VL._progressInterval = null;
                                            return;
                                        }
                                        const currentTime = VL.ytPlayer.getCurrentTime() || 0;
                                        const duration = VL.ytPlayer.getDuration() || 1;
                                        const percent = Math.min(100, (currentTime / duration) * 100);
                                        markVideoWatched(VL.currentVideoId, percent);
                                    }, 10000);
                                }
                            }
                        }
                    });
                } catch (apiErr) {
                    console.warn("[VideoLibrary] YT.Player failed, using plain iframe:", apiErr);
                    const iframe = safeGetElement("vl-iframe");
                    if (iframe) {
                        iframe.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`;
                    }
                }
            } else {
                const iframe = safeGetElement("vl-iframe");
                if (iframe) {
                    iframe.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`;
                }
            }
        },

        closePlayer: function () {
            if (VL._progressInterval) {
                clearInterval(VL._progressInterval);
                VL._progressInterval = null;
            }

            const playerSection = safeGetElement("vl-player-section");
            const safetyLink    = safeGetElement("vl-yt-safety-link");

            if (VL.ytPlayer && typeof VL.ytPlayer.destroy === "function") {
                try { VL.ytPlayer.destroy(); } catch (e) {}
                VL.ytPlayer = null;
            }

            const iframe = safeGetElement("vl-iframe");
            if (iframe) {
                iframe.src = "";
                iframe.removeAttribute("src");
            }

            if (playerSection) playerSection.classList.remove("vl-visible");
            if (safetyLink)    safetyLink.style.display = "none";

            VL.playerVisible     = false;
            VL.currentVideoId    = null;
            VL.currentVideoTopic = null;

            // Refresh grid to update progress
            if (VL.panelVisible) renderTopicGrid();
        },

        onSearch: function () {
            const input = safeGetElement("vl-search-input");
            if (input) VL.currentSearch = input.value;
            renderTopicGrid();
        },

        onSort: function () {
            const select = safeGetElement("vl-sort-select");
            if (select) VL.currentSort = select.value;
            renderTopicGrid();
        },

        getVideoCount: function () {
            filterVideos();
            return VL.filteredVideos.length;
        }
    };

    // ============================================================
    // === SECTION 12: ESCAPE KEY (unchanged)                   ===
    // ============================================================
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        if (VL.playerVisible) {
            VideoLibrary.closePlayer();
        } else if (VL.panelVisible) {
            VideoLibrary.closePanel();
        }
    });

    // ============================================================
    // === SECTION 13: INITIALIZATION (unchanged)               ===
    // ============================================================
    function attemptInit() {
        const modeButtons = document.querySelector(".mode-buttons");
        const quizForm    = safeGetElement("quiz-form");

        if (!modeButtons || !quizForm) {
            VL.retryCount++;
            if (VL.retryCount >= VL.MAX_RETRIES) {
                console.warn(
                    `[VideoLibrary] Initialization failed after ${VL.MAX_RETRIES} attempts. ` +
                    "Required elements (.mode-buttons, #quiz-form) not found."
                );
                return;
            }
            setTimeout(attemptInit, VL.RETRY_INTERVAL_MS);
            return;
        }

        if (VL.initialized) return;
        VL.initialized = true;

        try {
            injectVideoStyles();
            injectVideoContainer();
            injectVideoButton();
        } catch (err) {
            console.error("[VideoLibrary] Initialization error:", err);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attemptInit);
    } else {
        attemptInit();
    }

    // ============================================================
    // === END OF VideoLibrary.js                               ===
    // ============================================================
})();adding: 10px 14px; border-radius: 8px;
            border: 1px solid #3e506e; background: #1b263b; color: #fff;
            font-size: 0.9em; outline: none; transition: border-color 0.2s;
        }
        #vl-search-input:focus { border-color: #72efdd; }
        #vl-search-input::placeholder { color: #6c7a8d; }
        #vl-sort-select {
            padding: 10px 12px; border-radius: 8px; border: 1px solid #3e506e;
            background: #1b263b; color: #fff; font-size: 0.9em; cursor: pointer; outline: none;
        }

        /* ── NEW: UPSELL BANNER ── */
        .vl-upsell-banner {
            background: linear-gradient(135deg, #2d2a0a, #1e1a00);
            border: 1px solid #ffc107; border-radius: 10px;
            padding: 16px 20px; margin-top: 20px;
            display: flex; align-items: center; gap: 14px; cursor: pointer; transition: 0.2s;
        }
        .vl-upsell-banner:hover { box-shadow: 0 0 15px rgba(255,193,7,0.15); }
        .vl-upsell-banner p { margin: 0; color: #ffc107; font-weight: 600; flex: 1; }
        .vl-upsell-banner button {
            background: #ffc107; color: #000; border: none; padding: 8px 16px;
            border-radius: 6px; font-weight: 700; cursor: pointer; white-space: nowrap;
        }

        /* ── NEW: PROGRESS INDICATOR ── */
        .vl-progress-indicator { display: flex; align-items: center; gap: 6px; margin-top: 4px; }
        .vl-progress-bar-small { width: 40px; height: 4px; background: #2a3a50; border-radius: 2px; overflow: hidden; }
        .vl-progress-bar-small-fill { height: 100%; background: #72efdd; width: 0%; }
        .vl-progress-text { font-size: 0.65em; color: #6c7a8d; }

        /* ── RESPONSIVE ── */
        @media (max-width: 480px) {
            #vl-topic-grid { grid-template-columns: 1fr; }
            .vl-panel-title { font-size: 1.15em; }
            #vl-panel { padding: 20px 16px; }
        }

        `;
        document.head.appendChild(style);
    }

    // ============================================================
    // === SECTION 5: HTML INJECTION (enhanced)                ===
    // ============================================================
    function injectVideoContainer() {
        if (safeGetElement("vl-panel")) return;

        const quizForm = safeGetElement("quiz-form");
        if (!quizForm) {
            console.warn("[VideoLibrary] #quiz-form not found. Cannot inject container.");
            return;
        }

        const container = document.createElement("div");
        container.id = "vl-container";
        container.innerHTML = `
            <div id="vl-panel" role="region" aria-label="Video Library">

                <div class="vl-panel-header">
                    <div>
                        <p class="vl-panel-title">📺 Video Library</p>
                        <p class="vl-panel-subtitle" id="vl-subtitle">Loading videos…</p>
                    </div>
                    <button class="vl-close-panel-btn" onclick="VideoLibrary.closePanel()" aria-label="Close Video Library">✕ Close</button>
                </div>

                <!-- NEW: Recently Watched -->
                <div id="vl-recent-section" class="vl-recent-section" style="display: none;">
                    <p class="vl-recent-title">📌 Continue Watching</p>
                    <div id="vl-recent-grid" class="vl-recent-grid"></div>
                </div>

                <!-- NEW: Search & Sort -->
                <div class="vl-controls-bar">
                    <input type="text" id="vl-search-input" placeholder="🔍 Search videos by topic..."
                           oninput="VideoLibrary.onSearch()">
                    <select id="vl-sort-select" onchange="VideoLibrary.onSort()">
                        <option value="default">Default order</option>
                        <option value="topic">By topic (A-Z)</option>
                        <option value="duration">By duration (shortest first)</option>
                    </select>
                </div>

                <!-- Topic grid -->
                <div id="vl-topic-grid" aria-live="polite"></div>

                <!-- Player section -->
                <div id="vl-player-section" aria-live="polite">
                    <hr class="vl-divider">
                    <div class="vl-player-header">
                        <p id="vl-now-playing-title"></p>
                        <button class="vl-back-to-list-btn" onclick="VideoLibrary.closePlayer()" aria-label="Back to video list">← Back to List</button>
                    </div>
                    <div id="vl-player-wrapper">
                        <div class="vl-responsive-player">
                            <iframe id="vl-iframe" allowfullscreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                title="Kaeri EdTech Video Player">
                            </iframe>
                        </div>
                    </div>
                    <div id="vl-yt-safety-link" style="margin-top:10px; text-align:right; display:none;">
                        <a id="vl-yt-direct-link" href="#" target="_blank" rel="noopener noreferrer"
                           style="color:#6c7a8d; font-size:0.8em; text-decoration:none;">
                            🔗 Having trouble? Watch directly on YouTube →
                        </a>
                    </div>
                    <p id="vl-player-description"></p>
                </div>

                <!-- NEW: Upsell Banner (for free users after 3 watched) -->
                <div id="vl-upsell-banner" class="vl-upsell-banner" style="display: none;" onclick="safeOpenPaymentModal()">
                    <p>🔓 Unlock the full library + PDFs & quizzes</p>
                    <button>Upgrade Now</button>
                </div>

            </div>
        `;

        quizForm.parentNode.insertBefore(container, quizForm);
    }

    // ============================================================
    // === SECTION 6: BUTTON INJECTION (unchanged)              ===
    // ============================================================
    function injectVideoButton() {
        if (safeGetElement("vl-open-btn")) return;

        const modeButtons = document.querySelector(".mode-buttons");
        if (!modeButtons) {
            console.warn("[VideoLibrary] .mode-buttons not found. Cannot inject button.");
            return;
        }

        const btn = document.createElement("button");
        btn.id = "vl-open-btn";
        btn.innerHTML = "📺 Video Library";
        btn.setAttribute("aria-label", "Open Video Library");
        btn.onclick = VideoLibrary.togglePanel;

        const children = modeButtons.children;
        if (children.length >= 2) {
            modeButtons.insertBefore(btn, children[2]);
        } else {
            modeButtons.appendChild(btn);
        }
    }

    // ============================================================
    // === SECTION 7: DATA FILTERING (+ search & sort)         ===
    // ============================================================
    function filterVideos() {
        const course = safeGetCourse();
        const term   = safeGetTerm();
        if (!course || !term) {
            VL.filteredVideos = [];
            return;
        }

        let list = VIDEO_DATA.filter(v => v.course === course && v.term === term);

        // Apply search
        if (VL.currentSearch.trim()) {
            const query = VL.currentSearch.trim().toLowerCase();
            list = list.filter(v => v.topic.toLowerCase().includes(query));
        }

        // Apply sort
        if (VL.currentSort === "topic") {
            list.sort((a, b) => a.topic.localeCompare(b.topic));
        } else if (VL.currentSort === "duration") {
            list.sort((a, b) => {
                const durA = _durationToSecs(a.duration);
                const durB = _durationToSecs(b.duration);
                return durA - durB;
            });
        }

        VL.filteredVideos = list;
    }

    function _durationToSecs(durStr) {
        if (!durStr) return Infinity;
        const parts = durStr.split(':').map(Number);
        if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
        if (parts.length === 2) return parts[0]*60 + parts[1];
        return parseInt(parts[0]) || Infinity;
    }

    // ============================================================
    // === SECTION 8: THUMBNAIL BUILDER (unchanged)             ===
    // ============================================================
    function buildThumbnail(videoId, topic) {
        const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        const wrapper = document.createElement("div");
        wrapper.className = "vl-thumb";

        const img = document.createElement("img");
        img.alt = `Thumbnail for ${topic}`;
        img.loading = "lazy";
        img.src = thumbUrl;
        img.onerror = function () {
            wrapper.innerHTML = `<div class="vl-thumb-fallback">🎬</div>`;
        };

        const overlay = document.createElement("div");
        overlay.className = "vl-play-overlay";
        overlay.innerHTML = `<div class="vl-play-icon">▶</div>`;

        wrapper.appendChild(img);
        wrapper.appendChild(overlay);
        return wrapper;
    }

    // ============================================================
    // === SECTION 9: RENDER PANEL (enhanced)                   ===
    // ============================================================
    function renderRecentlyWatched() {
        const section = safeGetElement("vl-recent-section");
        const grid = safeGetElement("vl-recent-grid");
        if (!section || !grid) return;

        const recentVideos = VL.filteredVideos
            .filter(v => getWatchedPercent(v.videoId) > 0)
            .sort((a, b) => (VL.watchHistory[b.videoId]?.lastWatched || 0) - (VL.watchHistory[a.videoId]?.lastWatched || 0))
            .slice(0, 4);

        if (recentVideos.length === 0) {
            section.style.display = "none";
            return;
        }

        section.style.display = "block";
        grid.innerHTML = "";

        recentVideos.forEach(video => {
            const percent = getWatchedPercent(video.videoId);
            const isComplete = percent >= 95;

            const card = document.createElement("div");
            card.className = "vl-recent-card";
            card.onclick = () => VideoLibrary.openPlayer(video);

            card.innerHTML = `
                <div class="vl-recent-thumb">
                    <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg"
                         alt="${video.topic}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:2em;display:flex;align-items:center;justify-content:center;height:100%;color:#555;\\'>🎬</div>'">
                    <div class="vl-recent-progress-bar" style="width: ${percent}%;"></div>
                    ${isComplete ? '<div class="vl-watched-check">✓</div>' : ''}
                </div>
                <div class="vl-recent-body">
                    <p>${video.topic}</p>
                    <span class="vl-recent-continue">${isComplete ? "Watched" : "Continue"}</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function renderTopicGrid() {
        const grid     = safeGetElement("vl-topic-grid");
        const subtitle = safeGetElement("vl-subtitle");
        if (!grid) return;

        filterVideos();

        const count = VL.filteredVideos.length;
        if (subtitle) {
            subtitle.textContent = count > 0
                ? `${count} video${count !== 1 ? "s" : ""} available for this term`
                : "No videos available for this term yet";
        }

        // Render recently watched
        renderRecentlyWatched();

        // Upsell logic for free users
        const upsellBanner = safeGetElement("vl-upsell-banner");
        if (!safeHasFullAccess()) {
            const freeWatched = VL.filteredVideos.filter(v => !v.locked && getWatchedPercent(v.videoId) > 0).length;
            if (upsellBanner) upsellBanner.style.display = freeWatched >= 3 ? "flex" : "none";
        } else if (upsellBanner) {
            upsellBanner.style.display = "none";
        }

        if (count === 0) {
            grid.innerHTML = `
                <div class="vl-empty" style="grid-column: 1/-1;">
                    <div class="vl-empty-icon">🔍</div>
                    <p>No videos match your search.</p>
                </div>`;
            return;
        }

        grid.innerHTML = "";
        const fullAccess = safeHasFullAccess();

        VL.filteredVideos.forEach(video => {
            const isLocked = video.locked && !fullAccess;
            const progress = getWatchedPercent(video.videoId);
            const isComplete = progress >= 95;

            const card = document.createElement("div");
            card.className = `vl-card${isLocked ? " locked" : ""}`;
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", `${video.topic}${isLocked ? " (locked)" : ""}`);

            const thumb = buildThumbnail(video.videoId, video.topic);
            if (isLocked) {
                thumb.innerHTML += `<span class="vl-lock-badge">🔒 Locked</span>`;
            } else if (isComplete) {
                thumb.innerHTML += `<div class="vl-watched-check">✓</div>`;
            }
            card.appendChild(thumb);

            const body = document.createElement("div");
            body.className = "vl-card-body";
            body.innerHTML = `
                <p class="vl-card-topic">${video.topic}</p>
                <p class="vl-card-desc">${video.description || ""}</p>
                <div class="vl-card-footer">
                    ${video.duration ? `<span class="vl-duration-badge">⏱ ${video.duration}</span>` : ""}
                    <span class="${isLocked ? "vl-locked-label" : "vl-watch-label"}">
                        ${isLocked ? "🔒 Unlock" : (isComplete ? "✓ Watched" : "▶ Watch Now")}
                    </span>
                </div>
                ${!isLocked && progress > 0 && !isComplete ? `
                <div class="vl-progress-indicator">
                    <div class="vl-progress-bar-small"><div class="vl-progress-bar-small-fill" style="width:${progress}%"></div></div>
                    <span class="vl-progress-text">${Math.round(progress)}%</span>
                </div>` : ""}
            `;
            card.appendChild(body);

            const clickHandler = isLocked
                ? () => handleLockedClick(video)
                : () => VideoLibrary.openPlayer(video);

            card.addEventListener("click", clickHandler);
            card.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    clickHandler();
                }
            });

            grid.appendChild(card);
        });
    }

    // ============================================================
    // === SECTION 10: LOCKED CARD HANDLER (unchanged)         ===
    // ============================================================
    function handleLockedClick(video) {
        safeShowNotification(
            `🔒 "${video.topic}" requires full access. Unlock below.`,
            "warning",
            4000
        );
        safeOpenPaymentModal();
    }

    // ============================================================
    // === SECTION 11: PUBLIC API (VideoLibrary namespace)       ===
    // ============================================================
    window.VideoLibrary = {

        togglePanel: function () {
            const panel = safeGetElement("vl-panel");
            if (!panel) return;

            VL.panelVisible = !VL.panelVisible;

            if (VL.panelVisible) {
                panel.classList.add("vl-visible");
                renderTopicGrid();
                try { panel.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}
                safeShowNotification("📺 Video Library opened", "info", 1500);
            } else {
                VideoLibrary.closePanel();
            }
        },

        closePanel: function () {
            VideoLibrary.closePlayer();
            const panel = safeGetElement("vl-panel");
            if (panel) panel.classList.remove("vl-visible");
            VL.panelVisible = false;
        },

        openPlayer: async function (video) {
            if (!video || !video.videoId) return;

            const playerSection = safeGetElement("vl-player-section");
            const titleEl       = safeGetElement("vl-now-playing-title");
            const descEl        = safeGetElement("vl-player-description");
            const safetyLink    = safeGetElement("vl-yt-safety-link");
            const directLink    = safeGetElement("vl-yt-direct-link");

            if (!playerSection) return;

            VL.currentVideoId    = video.videoId;
            VL.currentVideoTopic = video.topic;

            if (titleEl) titleEl.textContent = `▶ Now Playing: ${video.topic}`;
            if (descEl)  descEl.textContent  = video.description || "";

            if (safetyLink) safetyLink.style.display = "block";
            if (directLink) directLink.href = `https://www.youtube.com/watch?v=${video.videoId}`;

            playerSection.classList.add("vl-visible");
            VL.playerVisible = true;

            try { playerSection.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {}

            // Analytics
            safeLogAnalytics("video_start", video.topic + " (" + video.videoId + ")");

            await loadYouTubeAPI();

            const wrapper = safeGetElement("vl-player-wrapper");
            if (wrapper) {
                wrapper.innerHTML = `
                    <div class="vl-responsive-player">
                        <iframe id="vl-iframe" allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write;
                                   encrypted-media; gyroscope; picture-in-picture"
                            title="Kaeri EdTech Video Player">
                        </iframe>
                    </div>`;
            }

            if (VL.ytPlayer && typeof VL.ytPlayer.destroy === "function") {
                try { VL.ytPlayer.destroy(); } catch (e) {}
                VL.ytPlayer = null;
            }

            if (VL.ytApiReady && window.YT && window.YT.Player) {
                try {
                    VL.ytPlayer = new window.YT.Player("vl-iframe", {
                        videoId: video.videoId,
                        playerVars: {
                            autoplay: 1,
                            rel: 0,
                            modestbranding: 1,
                            origin: window.location.origin || ""
                        },
                        events: {
                            onError: function (event) {
                                const code = event.data;
                                if (EMBED_BLOCKED_ERRORS.has(code)) {
                                    try { VL.ytPlayer.destroy(); } catch (e) {}
                                    VL.ytPlayer = null;
                                    showEmbedFallback(VL.currentVideoId, VL.currentVideoTopic);
                                    if (safetyLink) {
                                        safetyLink.innerHTML = `
                                            <a href="https://www.youtube.com/watch?v=${VL.currentVideoId}"
                                               target="_blank" rel="noopener noreferrer"
                                               style="color:#e63946;font-size:0.85em;font-weight:700;text-decoration:none;">
                                                ▶ Watch on YouTube (embedding disabled by uploader)
                                            </a>`;
                                    }
                                }
                            },
                            onStateChange: function (event) {
                                if (event.data === window.YT.PlayerState.ENDED) {
                                    markVideoWatched(VL.currentVideoId, 100);
                                    safeLogAnalytics("video_complete", VL.currentVideoTopic);
                                    if (VL.panelVisible) renderTopicGrid();
                                } else if (event.data === window.YT.PlayerState.PLAYING) {
                                    // Start periodic progress tracking
                                    if (VL._progressInterval) clearInterval(VL._progressInterval);
                                    VL._progressInterval = setInterval(() => {
                                        if (!VL.ytPlayer || !VL.currentVideoId) {
                                            clearInterval(VL._progressInterval);
                                            VL._progressInterval = null;
                                            return;
                                        }
                                        const currentTime = VL.ytPlayer.getCurrentTime() || 0;
                                        const duration = VL.ytPlayer.getDuration() || 1;
                                        const percent = Math.min(100, (currentTime / duration) * 100);
                                        markVideoWatched(VL.currentVideoId, percent);
                                    }, 10000);
                                }
                            }
                        }
                    });
                } catch (apiErr) {
                    console.warn("[VideoLibrary] YT.Player failed, using plain iframe:", apiErr);
                    const iframe = safeGetElement("vl-iframe");
                    if (iframe) {
                        iframe.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`;
                    }
                }
            } else {
                const iframe = safeGetElement("vl-iframe");
                if (iframe) {
                    iframe.src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`;
                }
            }
        },

        closePlayer: function () {
            if (VL._progressInterval) {
                clearInterval(VL._progressInterval);
                VL._progressInterval = null;
            }

            const playerSection = safeGetElement("vl-player-section");
            const safetyLink    = safeGetElement("vl-yt-safety-link");

            if (VL.ytPlayer && typeof VL.ytPlayer.destroy === "function") {
                try { VL.ytPlayer.destroy(); } catch (e) {}
                VL.ytPlayer = null;
            }

            const iframe = safeGetElement("vl-iframe");
            if (iframe) {
                iframe.src = "";
                iframe.removeAttribute("src");
            }

            if (playerSection) playerSection.classList.remove("vl-visible");
            if (safetyLink)    safetyLink.style.display = "none";

            VL.playerVisible     = false;
            VL.currentVideoId    = null;
            VL.currentVideoTopic = null;

            // Refresh grid to update progress
            if (VL.panelVisible) renderTopicGrid();
        },

        onSearch: function () {
            const input = safeGetElement("vl-search-input");
            if (input) VL.currentSearch = input.value;
            renderTopicGrid();
        },

        onSort: function () {
            const select = safeGetElement("vl-sort-select");
            if (select) VL.currentSort = select.value;
            renderTopicGrid();
        },

        getVideoCount: function () {
            filterVideos();
            return VL.filteredVideos.length;
        }
    };

    // ============================================================
    // === SECTION 12: ESCAPE KEY (unchanged)                   ===
    // ============================================================
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        if (VL.playerVisible) {
            VideoLibrary.closePlayer();
        } else if (VL.panelVisible) {
            VideoLibrary.closePanel();
        }
    });

    // ============================================================
    // === SECTION 13: INITIALIZATION (unchanged)               ===
    // ============================================================
    function attemptInit() {
        const modeButtons = document.querySelector(".mode-buttons");
        const quizForm    = safeGetElement("quiz-form");

        if (!modeButtons || !quizForm) {
            VL.retryCount++;
            if (VL.retryCount >= VL.MAX_RETRIES) {
                console.warn(
                    `[VideoLibrary] Initialization failed after ${VL.MAX_RETRIES} attempts. ` +
                    "Required elements (.mode-buttons, #quiz-form) not found."
                );
                return;
            }
            setTimeout(attemptInit, VL.RETRY_INTERVAL_MS);
            return;
        }

        if (VL.initialized) return;
        VL.initialized = true;

        try {
            injectVideoStyles();
            injectVideoContainer();
            injectVideoButton();
        } catch (err) {
            console.error("[VideoLibrary] Initialization error:", err);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attemptInit);
    } else {
        attemptInit();
    }

    // ============================================================
    // === END OF VideoLibrary.js                               ===
    // ============================================================
})();