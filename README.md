# KAERI CBU Educational Quiz System
### Complete System Documentation & User Manual

## 1. System Overview
**1. System Overview and Purpose:** A comprehensive learning platform designed to help students master course material through interactive practice (MCQ, Short Answer, Essay Simulation, Flashcards) with secure access control.

## 2. Access & Initialization
**2. Getting Started:** The system initializes automatically as a Single-Page Application (SPA), checking `localStorage` for preferences and access rights instantly.
**3. Access Control:** A sophisticated security checkpoint system protects content.
**4. Access Levels:** Three tiers: *Term Access* (Specific Term), *Course-wide Access* (All Terms), and *Global Access* (Everything).
**5. Demo Mode:** Limited free access allowing users to trial features before purchasing.
**6. Code Entry:** Prompts users for codes if no valid rights are found.
**7. Validation:** Checks codes against revoked lists, global activation lists, and validity databases.
**8. Expiration:** Codes expire 20 days after activation to manage term limits.
**9. Persistence:** Access is stored locally; users do not need to re-enter codes on return visits.

## 3. User Interface
**10. Control Center:** Clean interface with clear dividers for Learning Modes and Accessibility.
**11. Mode Banner:** Visual indicator (Green for Full Access, Red for Demo Mode).
**12. Notifications:** Pop-up feedback for success (Green), errors (Red), and warnings.
**13. Progress Tracking:** Visual bar and text counter (e.g., "3 of 10") updating in real-time.

## 4. Learning Modes
### Multiple Choice (MCQ)
**14. Core Feature:** Randomized questions with 4 options.
**15. Submission:** Immediate processing of answers.
**16. Scoring:** Real-time score tracking with percentage breakdowns and performance comments.

### Short Answer
**17. Recall Testing:** Requires typed responses rather than selection.
**18. Evaluation:** Uses keyword matching algorithms to validate answers conceptually.

### Essay Simulation
**19. Structure:** Breaks complex writing into step-by-step multiple-choice decisions.
**20. Process:** Guides users through Thesis, Arguments, Evidence, and Conclusion.

### Flashcards
**21. Digital Cards:** Front/Back format for self-paced review.
**22. Organization:** Grouped by specific course topics with flip animations.

## 5. Accessibility & Controls
**23. Text-to-Speech (TTS):** Synthetic voice reads questions and feedback.
**24. TTS Control:** Toggle button with memory preference; auto-reads new questions.
**25. Keyboard Navigation:** Full support for non-mouse usage.
**26. MCQ Shortcuts:** Keys 1-4/A-D to select, Enter to submit.
**27. Short Answer Controls:** Enter to submit, Shift+Enter for new lines.
**28. Flashcard Controls:** Arrow keys to navigate, Space/Enter to flip.

## 6. Demo Restrictions
**29. Limitations:** Users get limited attempts per mode per term.
**30. Tracking:** Usage is tracked locally; users are blocked after limits are reached.

## 7. Content Management
**31. Filtering:** Automatically filters data by `data-course` and `data-term`.
**32. Randomization:** Shuffles question arrays to prevent memorization of sequences.
**33. Organization:** Structured by Course > Term > Type > Topic.
**34. Explanations:** Detailed feedback provided for every question, right or wrong.
**35. Analytics:** Tracks accuracy rates during the session.

## 8. Technical Architecture
**39. Mobile Compatibility:** Responsive design adapts to phones, tablets, and desktops.
**40. Performance:** Optimized asset loading for slow connections.
**41. Browser Support:** Compatible with Chrome, Firefox, Safari, Edge.
**42. Privacy:** Client-side storage (Local Storage) ensures data privacy.
**43. Revocation:** System supports blacklisting specific access codes.
**44. Single-Use Codes:** Prevents code sharing via global activation checks.
**45. Global Tracking:** Simulates server-side tracking for activation patterns.
**46. Local Storage:** Manages state without cookies or external databases.
**47. Session Recovery:** Preserves progress during minor connection interruptions.

## 9. Design & UX
**48. Visual Consistency:** Standardized color coding (Green/Red/Blue).
**51. Layouts:** Consistent spacing and typography for readability.
**55. Animations:** Smooth transitions for progress bars and flashcards.
**66. Color Psychology:** Strategic use of color for status indication.
**67. Icons:** Visual cues (✅, ❌, 🔒) to supplement text.

## 10. Security & Maintenance
**82. Cross-Origin Policy:** Compliant with modern browser security standards.
**84. Sanitization:** User inputs are sanitized to prevent injection.
**90. Pedagogical Principles:** Design based on spaced repetition and active recall.
**97. Recovery:** Protocols to handle local data corruption or loss.
