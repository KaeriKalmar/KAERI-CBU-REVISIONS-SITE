// === CONFIGURATION ===



// NEW: TTS variable

let ttsEnabled = false;



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
    "BI110T1_TEST019 |9",   "BI110T1_TEST020 <0",
    
  
    
  ],

  "BI110_T2": ["test111",
    "BI110T2_MAIN001#A@",   "BI110T2_MAIN002!Z*",
    "BI110T2_MAIN003$K#",   "BI110T2_MAIN004&Y!",
    "BI110T2_MAIN005*X%",   "BI110T2_MAIN006^R&",
    "BI110T2_MAIN007~S+",   "BI110T2_MAIN008?D#",
    "BI110T2_MAIN009|Q$",   "BI110T2_MAIN010<>P",
    "BI110T2_BONUS011 %1",  "BI110T2_BONUS012 @2",
    "BI110T2_BONUS013 #3",  "BI110T2_BONUS014 &4",
    "BI110T2_BONUS015 *5",  "BI110T2_BONUS016 ^6",
    "BI110T2_EXTRA017 ~7",  "BI110T2_EXTRA018 ?8",
    "BI110T2_TEST019 |9",   "BI110T2_TEST020 <0",
    "BI&CS110T2@"
   
   
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
    "BI110T3_TEST019 |9",   "BI110T3_TEST020 <0","ElijA⚓H"
    
   
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
  
  //all used CS110T2_MAIN0
     "CS110T2_MAIN002!Z*",
   "CS110T2_MAIN004&Y!",
    "CS110T2_MAIN005*X%",   "CS110T2_MAIN006^R&",
    "CS110T2_MAIN007~S+",   "CS110T2_MAIN008?D#",
    "CS110T2_MAIN009|Q$",   "CS110T2_MAIN010<>P",
    "CS110T2_BONUS011 %1",  "CS110T2_BONUS012 @2",
    "CS110T2_BONUS013 #3",  "CS110T2_BONUS014 &4",
    "CS110T2_BONUS015 *5",  "CS110T2_BONUS016 ^6",
    "CS110T2_EXTRA017 ~7",  "CS110T2_EXTRA018 ?8",
    "CS110T2_TEST019 |9",   "CS110T2_TEST020 <0",
    
   "BI&CS110T2@",
    
    //new ones 
  "CS110T2_CORE041!A#", "CS110T2_CORE042#B$",
  "CS110T2_CORE043%X", "CS110T2_CORE044^Y*",
  "CS110T2_CORE045*Z@", "CS110T2_CORE046~M%",
  "CS110T2_CORE047?N^", "CS110T2_CORE048|P~",
  "CS110T2_CORE049<QR", "CS110T2_CORE050>ST",
  "CS110T2_BONUS051 +1", "CS110T2_BONUS052 -2",
  "CS110T2_BONUS053 =3", "CS110T2_BONUS054 _4",
  "CS110T2_BONUS055 :5", "CS110T2_BONUS056 ;6",
  "CS110T2_EXTRA057 [7", "CS110T2_EXTRA058 ]8",
  "CS110T2_TEST059 {9", "CS110T2_TEST060 }0",   "CS110T2_MAIN003$K#",  
  
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
    "CS110T3_TEST019 |9",   "CS110T3_TEST020 <0",
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

  // NEW GLOBAL AND COURSE-WIDE ACCESS CODES
  "GLOBAL_ALL_TERMS": ["kk22kk4","Lizzy",
    // A code that unlocks everything
"SUPER_USER_XYZ_789",
"All-terms@#<0",
"Lizzy@",
"becky @&_",
"KULIKA🌟",
"FULL_UNLOCK_2025",
"ACCESS_GRANTED_GLOBAL$",
"CBU_UNLOCK_CODE🔥",
"MASTER_KEY_∞_ENTRY",
"EVERYTHING_PASS_T1T2T3",
"ULTRA_PASS_9999",
"ONE_KEY_TO_RULE_THEM_ALL",
"GLOBAL_MASTER_777🔐",
"UNIVERSAL_ACCESS_VIP",
"CBU_ELITE_KEY2025",
"TOTAL_DOMINATOR_CODE",
"UNLOCK_THIS_WORLD",
"OPEN_ALL_LEVELS_📘",
"ROOT_ACCESS_GRANTED!",
"KAERI_GLOBAL_TERMS🔓","REAL🌟JED",
"All-terms@#<00"
  ],
  
  //all cs110
  "CS110_ALL_TERMS": [
    "CS110_PRO_PASS_ABC",
"CS110_GOLD_MEMBER", // Unlocks all terms for CS110
"CS110_TERM_UNLOCKER_1",
"CS110_T1_T2_T3_UNLOCK",
"CS110_PREMIUM_2025!",
"CS110_TOTAL_ACCESS+",
"CS110_FULL_KIT_KEY",
"CS110_ALL_YEARS_PASS",
"CS110_GENIUS_MODE_🔓",
"CS110_MERIT_GRANT2025",
"CS110_TOP_SECRET_PASS",
"CS110_ULTIMATE_KEY#",
"CS110_QUANTUM_ENTRY",
"CS110_ALL_TERM_ENTRY",
"CS110_BRAINY_MODE_007",
"CS110_UNLOCKZILLA🔥",
"CS110_PASSCARD_24/7",
"CS110_ELITE_ACADEMY",
"CS110_MASTERCLASS_✓",
"CS110_PRO_PLUS_TERMS"
    
  ],
  
  //All for bi110
  "BI110_ALL_TERMS": [
    "BI110_BUNDLE_PACK_123", // Unlocks all terms for BI110
"BI110_TOTAL_ACCESS",
"BI110_PRO_MODE",
"BI110_FULL_SEMESTER_KEY",
"BI110_TEST_PASS_XYZ",
"BI110_T1_T2_T3_OKAY",
"BI110_GRADEBOOST_2025",
"BI110_FLASHCARDS_OPENALL",
"BI110_MASTER_UNLOCK",
"BI110_STAR_USER_KEY",
"BI110_REVISION_KING",
"BI110_TOP_MARKS_KEY",
"BI110_ACCESS_ALL🌱",
"BI110_FULL_POWER_CODE",
"BI110_PASS_ANYTIME",
"BI110_KNOWLEDGE_HUB🔓",
"BI110_ALL_TERM_ENTRY",
"BI110_SMART_PASS@2025",
"BI110_UNLOCK_MY_BRAIN",
"BI110_KAERI_SPECIAL_KEY"
  ]
};

//code killing section
const revokedAccessCodes = ["test111","CS110T1_MAIN001#A@","BI110T2_MAIN004&Y!","BI110T3_MAIN005*X%"];

// NEW: This array will store codes that have been "globally" activated/sold.
// You will manually add codes to this array AFTER they have been initially activated by a user.
const alreadyActivatedCodes = ["MASTER_ACCESS_2025!@#$","CS110T2_BONUS014 &4", "BI110T1_MAIN001#A@",   "BI110T1_MAIN002!Z*",
    "BI110T1_MAIN003$K#",   "BI110T1_MAIN004&Y!",
    "BI110T1_MAIN005*X%",   "BI110T1_MAIN006^R&",
    "BI110T1_MAIN007~S+",   "BI110T1_MAIN008?D#",
    "BI110T1_MAIN009|Q$",   "BI110T1_MAIN010<>P",
    "BI110T1_BONUS011 %1",  "BI110T1_BONUS012 @2",
    "BI110T1_BONUS013 #3",  "BI110T1_BONUS014 &4",
    "BI110T1_BONUS015 *5",  "BI110T1_BONUS016 ^6",
    "BI110T1_EXTRA017 ~7",  "BI110T1_EXTRA018 ?8",
    "BI110T1_TEST019 |9",   "BI110T1_TEST020 <0",
    
    "test111",
    "BI110T2_MAIN001#A@",   "BI110T2_MAIN002!Z*",
     "BI110T2_MAIN004&Y!",
      "BI110T2_MAIN006^R&",
    "BI110T2_MAIN007~S+",   "BI110T2_MAIN008?D#",
    "BI110T2_MAIN009|Q$",   "BI110T2_MAIN010<>P",
    "BI110T2_BONUS011 %1",  "BI110T2_BONUS012 @2",
    "BI110T2_BONUS013 #3",  "BI110T2_BONUS014 &4",
    "BI110T2_BONUS015 *5",  "BI110T2_BONUS016 ^6",
    "BI110T2_EXTRA017 ~7",  "BI110T2_EXTRA018 ?8",
    "BI110T2_TEST019 |9",   "BI110T2_TEST020 <0",
    
    "BI110T3_MAIN001#A@",   "BI110T3_MAIN002!Z*",
    "BI110T3_MAIN003$K#",   "BI110T3_MAIN004&Y!",
    "BI110T3_MAIN005*X%",   "BI110T3_MAIN006^R&",
    "BI110T3_MAIN007~S+",   "BI110T3_MAIN008?D#",
    "BI110T3_MAIN009|Q$",   "BI110T3_MAIN010<>P",
    "BI110T3_BONUS011 %1",  "BI110T3_BONUS012 @2",
    "BI110T3_BONUS013 #3",  "BI110T3_BONUS014 &4",
    "BI110T3_BONUS015 *5",  "BI110T3_BONUS016 ^6",
    "BI110T3_EXTRA017 ~7",  "BI110T3_EXTRA018 ?8",
    "BI110T3_TEST019 |9",   "BI110T3_TEST020 <0",
     //all used 
   , 
    "CS110T2_MAIN003$K#",   "CS110T2_MAIN004&Y!",
    "CS110T2_MAIN005*X%",   "CS110T2_MAIN006^R&",
    "CS110T2_MAIN007~S+",   "CS110T2_MAIN008?D#",
    "CS110T2_MAIN009|Q$",   "CS110T2_MAIN010<>P",
    "CS110T2_BONUS011 %1",  "CS110T2_BONUS012 @2",
    "CS110T2_BONUS013 #3",  "CS110T2_BONUS014 &4",
    "CS110T2_BONUS015 *5",  "CS110T2_BONUS016 ^6",
    "CS110T2_EXTRA017 ~7",  "CS110T2_EXTRA018 ?8",
    "CS110T2_TEST019 |9",   "CS110T2_TEST020 <0",
    
  
    
    //new ones 
  "CS110T2_CORE041!A#", "CS110T2_CORE042#B$",
  "CS110T2_CORE043%X", "CS110T2_CORE044^Y*",
  "CS110T2_CORE045*Z@", "CS110T2_CORE046~M%",
  "CS110T2_CORE047?N^", "CS110T2_CORE048|P~",
  "CS110T2_CORE049<QR", "CS110T2_CORE050>ST",
  "CS110T2_BONUS051 +1", "CS110T2_BONUS052 -2",
  "CS110T2_BONUS053 =3", "CS110T2_BONUS054 _4",
  "CS110T2_BONUS055 :5", "CS110T2_BONUS056 ;6",
  "CS110T2_EXTRA057 [7", "CS110T2_EXTRA058 ]8",
  "CS110T2_TEST059 {9", "CS110T2_TEST060 }0",
  
    "CS110T3_MAIN001#A@",   "CS110T3_MAIN002!Z*",
    "CS110T3_MAIN003$K#",   "CS110T3_MAIN004&Y!",
    "CS110T3_MAIN006^R&",
    "CS110T3_MAIN007~S+",   "CS110T3_MAIN008?D#",
    "CS110T3_MAIN009|Q$",   "CS110T3_MAIN010<>P",
    "CS110T3_BONUS011 %1",  "CS110T3_BONUS012 @2",
    "CS110T3_BONUS013 #3",  "CS110T3_BONUS014 &4",
    "CS110T3_BONUS015 *5",  "CS110T3_BONUS016 ^6",
    "CS110T3_EXTRA017 ~7",  "CS110T3_EXTRA018 ?8",
    "CS110T3_TEST019 |9",   "CS110T3_TEST020 <0",
     "CS110T1_MAIN001#A@",   "CS110T1_MAIN002!Z*",
    "CS110T1_MAIN003$K#",   "CS110T1_MAIN004&Y!",
    "CS110T1_MAIN005*X%",   "CS110T1_MAIN006^R&",
    "CS110T1_MAIN007~S+",   "CS110T1_MAIN008?D#",
    "CS110T1_MAIN009|Q$",   "CS110T1_MAIN010<>P",
    "CS110T1_BONUS011 %1",  "CS110T1_BONUS012 @2",
    "CS110T1_BONUS013 #3",  "CS110T1_BONUS014 &4",
    "CS110T1_BONUS015 *5",  "CS110T1_BONUS016 ^6",
    "CS110T1_EXTRA017 ~7",  "CS110T1_EXTRA018 ?8",
    "CS110T1_TEST019 |9",   "CS110T1_TEST020 <0","Lizzy@",
    "CS110T3_MAIN005*X%","REAL🌟JED",
    
    //added individually 
    "BI110_TOTAL_ACCESS",
    "FULL_UNLOCK_2025","ACCESS_GRANTED_GLOBAL$","BI110_BUNDLE_PACK_123","SUPER_USER_XYZ_789","CBU_UNLOCK_CODE🔥","MASTER_KEY_∞_ENTRY","kk22kk4",
    "BI110_PRO_MODE","CS110_PRO_PASS_ABC",
    "BI110T2_MAIN003$K#",  "ElijA⚓H","All-terms@#<00","CS110_PRO_PLUS_TERMS","BI110_TEST_PASS_XYZ","Lizzy","CS110_ALL_YEARS_PASS","ULTRA_PASS_9999","BI110T2_MAIN005*X%","GLOBAL_MASTER_777🔐","CS110T2_MAIN002!Z*","BI110T2_MAIN003$K#" ,"BI&CS110T2@","BI110_T1_T2_T3_OKAY",  "CS110_TERM_UNLOCKER_1","BI110_GRADEBOOST_2025","UNIVERSAL_ACCESS_VIP","CBU_ELITE_KEY2025","EVERYTHING_PASS_T1T2T3","BI110_FLASHCARDS_OPENALL","BI110_ALL_TERM_ENTRY","CS110_T1_T2_T3_UNLOCK","TOTAL_DOMINATOR_CODE"
  
    // Example: If "CS110T2_MAIN001#A@" was sold and activated by someone,
    // and you now want to prevent new people from using it, you'd add it here.
    // "CS110T2_MAIN001#A@",
    // "BI110T1_BONUS011 %1",
    // Don't forget to add global/course-wide codes here once activated!
    // "MASTER_ACCESS_2025!@#$",
    // "CS110_PRO_PASS_ABC"
];





//global used codes management



let usedAccessCodes = [];



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











function denyAccess(message, codeToClear = null) {



  hasFullAccess = false;



  if (codeToClear) {



    // If a specific code was passed (e.g., a global code used for this term)



    localStorage.removeItem("accessCode_GLOBAL_ALL_TERMS"); // Clear global code



    localStorage.removeItem("accessCodeExpires_GLOBAL_ALL_TERMS");



    localStorage.removeItem("accessCode_" + currentCourse + "_ALL_TERMS"); // Clear course-wide code



    localStorage.removeItem("accessCodeExpires_" + currentCourse + "_ALL_TERMS");



  }

  // Always clear the term-specific code (if any was stored)



  localStorage.removeItem("accessCode_" + currentTermKey);



  localStorage.removeItem("accessCodeExpires_" + currentTermKey);





  updateModeBanner("🔒 Demo Mode: Limited Access");



  document.getElementById('mode-banner').classList.add('demo-mode-banner');



  document.getElementById('mode-banner').classList.remove('full-access-banner');



  showAppNotification(message, "error");



}











window.onload = () => {

  // NEW: Initialize TTS preference from localStorage

  ttsEnabled = localStorage.getItem("ttsEnabled") === "true";

  updateTtsButtonText();



  // NEW: Add a TTS toggle button to the UI

  const modeButtonsDiv = document.querySelector('.mode-buttons');

  if (modeButtonsDiv) {

    const ttsButton = document.createElement('button');

    ttsButton.id = 'tts-toggle-button';

    ttsButton.onclick = toggleTTS;

    modeButtonsDiv.appendChild(ttsButton);

    updateTtsButtonText();

  }



  const body = document.body;



  currentCourse = body.getAttribute('data-course');



  currentTerm = body.getAttribute('data-term');



  currentTermKey = `${currentCourse}_${currentTerm}`;



  const courseAllTermsKey = `${currentCourse}_ALL_TERMS`;







  if (!currentCourse || !currentTerm) {



    console.error("Course or Term not defined in HTML data attributes. Check your HTML data-course and data-term attributes.");



    updateModeBanner("⚠️ Error: Term Info Missing");



    return;



  }







  try {



    const storedUsed = localStorage.getItem("globalUsedAccessCodes");



    usedAccessCodes = storedUsed ? JSON.parse(storedUsed) : [];



  } catch (e) {



    console.error("Error parsing globalUsedAccessCodes from localStorage:", e);



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







  let foundValidAccess = false;



  let needsPrompt = true;







  // --- Access Code Check Priority ---



  // 1. Term-specific access code



  // 2. Course-wide "ALL_TERMS" access code



  // 3. Global "ALL_TERMS" access code (highest priority if found and valid)







  // Helper function to check and apply access



  const checkAndApplyAccess = (code, expiry, type) => {



    if (!code || !expiry) return false;







    const storedExpiry = parseInt(expiry, 10);







    if (revokedAccessCodes.includes(code)) {



      denyAccess(`❌ Your stored ${type} code "${code}" was revoked.`, code);



      return false;



    }



    if (alreadyActivatedCodes.includes(code)) {



      const global = usedAccessCodes.find(e => e.code === code);



      if (global && Date.now() < global.globalExpiry && Date.now() < storedExpiry) {



        hasFullAccess = true;



        updateModeBanner("✅ FULL ACCESS");



        document.getElementById('mode-banner').classList.add('full-access-banner');



        document.getElementById('mode-banner').classList.remove('demo-mode-banner');



        showAppNotification(`✅ Full Access Mode (Re-activated via ${type})`, "success");



        clearDemoLocks();



        return true;



      } else {



        denyAccess(`❌ ${type} code "${code}" has already been globally activated or expired.`, code);



        return false;



      }



    }



    if (Date.now() < storedExpiry) {



      hasFullAccess = true;



      updateModeBanner("✅ FULL ACCESS");



      document.getElementById('mode-banner').classList.add('full-access-banner');



      document.getElementById('mode-banner').classList.remove('demo-mode-banner');



      showAppNotification(`✅ Full Access Mode (${type})`, "success");



      clearDemoLocks();



      return true;



    } else {



      denyAccess(`⏳ Your stored ${type} code "${code}" expired.`, code);



      return false;



    }



  };







  // --- Attempt to validate access from localStorage ---







  // Try Term-specific code first



  if (checkAndApplyAccess(



      localStorage.getItem("accessCode_" + currentTermKey),



      localStorage.getItem("accessCodeExpires_" + currentTermKey),



      "Term Access"



    )) {



    foundValidAccess = true;



    needsPrompt = false;



  }







  // If not found or expired, try Course-wide code



  if (!foundValidAccess && currentCourse) {



    if (checkAndApplyAccess(



        localStorage.getItem("accessCode_" + courseAllTermsKey),



        localStorage.getItem("accessCodeExpires_" + courseAllTermsKey),



        "Course-wide Access"



      )) {



      foundValidAccess = true;



      needsPrompt = false;



    }



  }







  // If still not found or expired, try Global code



  if (!foundValidAccess) {



    if (checkAndApplyAccess(



        localStorage.getItem("accessCode_GLOBAL_ALL_TERMS"),



        localStorage.getItem("accessCodeExpires_GLOBAL_ALL_TERMS"),



        "Global Access"



      )) {



      foundValidAccess = true;



      needsPrompt = false;



    }



  }











  if (needsPrompt) {



    const userCode = prompt("Enter Access Code (or blank for Demo):");



    if (!userCode) {



      updateModeBanner("🔒 Demo Mode");



      document.getElementById('mode-banner').classList.add('demo-mode-banner');



      document.getElementById('mode-banner').classList.remove('full-access-banner');



      showAppNotification("🔒 Demo Mode", "info");



    } else if (revokedAccessCodes.includes(userCode)) {



      denyAccess(`❌ "${userCode}" is revoked.`, userCode);



    }

    // NEW CHECK FOR NEWLY ENTERED CODES: If it's in alreadyActivatedCodes



    else if (alreadyActivatedCodes.includes(userCode)) {



      denyAccess(`❌ "${userCode}" has already been activated and is no longer available for new activations.`, userCode);



    }

    // Now check validity against different levels of access



    else {



      let codeFoundInConfig = false;



      let accessType = "";



      let storageKeyPrefix = "";







      // Check Global_ALL_TERMS



      if (fullAccessCodes.GLOBAL_ALL_TERMS && fullAccessCodes.GLOBAL_ALL_TERMS.includes(userCode)) {



        codeFoundInConfig = true;



        accessType = "Global Access";



        storageKeyPrefix = "GLOBAL_ALL_TERMS";



      }

      // Check Course_ALL_TERMS



      else if (fullAccessCodes[courseAllTermsKey] && fullAccessCodes[courseAllTermsKey].includes(userCode)) {



        codeFoundInConfig = true;



        accessType = "Course-wide Access";



        storageKeyPrefix = courseAllTermsKey;



      }

      // Check Term-specific



      else if (fullAccessCodes[currentTermKey] && fullAccessCodes[currentTermKey].includes(userCode)) {



        codeFoundInConfig = true;



        accessType = "Term Access";



        storageKeyPrefix = currentTermKey;



      }







      if (codeFoundInConfig) {



        const global = usedAccessCodes.find(e => e.code === userCode);



        if (global && Date.now() < global.globalExpiry) {



          // Code already in global list and valid, use its expiry



          localStorage.setItem("accessCode_" + storageKeyPrefix, userCode);



          localStorage.setItem("accessCodeExpires_" + storageKeyPrefix, global.globalExpiry);



          hasFullAccess = true;



          updateModeBanner("✅ FULL ACCESS");



          document.getElementById('mode-banner').classList.add('full-access-banner');



          document.getElementById('mode-banner').classList.remove('demo-mode-banner');



          showAppNotification(`✅ Full Access (Re-activated via ${accessType})`, "success");



          clearDemoLocks();



        } else if (global && Date.now() >= global.globalExpiry) {



          // Code in global list but expired



          denyAccess(`⏳ "${userCode}" expired.`, userCode);



        } else {



          // New activation for this code



          const newExpiry = Date.now() + MILLISECONDS_IN_20_DAYS;



          usedAccessCodes.push({ code: userCode, globalExpiry: newExpiry });



          localStorage.setItem("globalUsedAccessCodes", JSON.stringify(usedAccessCodes));



          localStorage.setItem("accessCode_" + storageKeyPrefix, userCode);



          localStorage.setItem("accessCodeExpires_" + storageKeyPrefix, newExpiry);



          hasFullAccess = true;



          updateModeBanner("✅ FULL ACCESS");



          document.getElementById('mode-banner').classList.add('full-access-banner');



          document.getElementById('mode-banner').classList.remove('demo-mode-banner');



          showAppNotification(`✅ Full Access (${accessType})`, "success");



          clearDemoLocks();



        }



      } else {



        denyAccess("❌ Invalid Code.");



      }



    }



  }



};







function showAppNotification(message, type = 'info', duration = 5000) {



  const el = document.getElementById('app-notification');



  if (!el) return alert(message);



  el.querySelector('.notification-message').textContent = message;



  el.className = 'show';

  el.classList.add(type);



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



  let currentIndex = array.length,

    randomIndex;



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







  let q = hasFullAccess ? shuffle([...currentMcqData]).slice(0, 10) : shuffle([...currentMcqData]).slice(0, 10);



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



  container.scrollIntoView({

    behavior: "smooth"

  });



  readCurrentQuestion();



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



  let feedbackText = "";







  if (userAnswer === q.correct) {



    currentScore++;



    resultDiv.innerHTML = "<p>✔️ Correct!</p>";



    feedbackText = "Correct!";



  } else {



    resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</p>`;



    feedbackText = `Wrong. The correct answer is option ${String.fromCharCode(65 + q.correct)}, ${q.options[q.correct]}.`;



  }







  const explanationBox = `<div class="explanation-box">${q.explanation || ''}</div>`;



  resultDiv.innerHTML += explanationBox;



  feedbackText += ` Explanation: ${q.explanation || ''}`;







  currentQuestionIndex++;



  const nextBtn = document.createElement("button");



  nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish Quiz";



  nextBtn.onclick = displayMcqQuestion;



  resultDiv.appendChild(nextBtn);







  document.querySelectorAll('input[name="mcq"]').forEach(input => input.disabled = true);



  readAnswerFeedback(feedbackText);



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







  let q = hasFullAccess ? shuffle([...currentShortData]).slice(0, 10) : shuffle([...currentShortData]).slice(0, 10);



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



  container.scrollIntoView({

    behavior: "smooth"

  });



  readCurrentQuestion();



}







function checkShortAnswer() {



  const ans = document.getElementById("short-answer-input").value.trim().toLowerCase();



  const resultDiv = document.getElementById("result");



  resultDiv.innerHTML = "";



  let feedbackText = "";







  if (!ans) {



    showAppNotification("Please type your answer!", "warning");



    return;



  }







  const q = currentQuizData[currentQuestionIndex];



  const matched = q.keywords.some(k => ans.includes(k.toLowerCase()));







  if (matched) {



    currentScore++;



    resultDiv.innerHTML = "<p>✔️ Correct!</p>";



    feedbackText = "Correct!";



  } else {



    resultDiv.innerHTML = `<p>❌ Keywords: ${q.keywords.join(', ')}</p>`;



    feedbackText = `Wrong. The required keywords are: ${q.keywords.join(', ')}.`;



  }





  const explanationBox = `<div class="explanation-box">${q.explanation || ''}</div>`;



  resultDiv.innerHTML += explanationBox;



  feedbackText += ` Explanation: ${q.explanation || ''}`;







  currentQuestionIndex++;



  const nextBtn = document.createElement("button");



  nextBtn.innerText = currentQuestionIndex < currentQuizData.length ? "Next ➡️" : "Finish";



  nextBtn.onclick = displayShortAnswerQuestion;



  resultDiv.appendChild(nextBtn);







  document.getElementById("short-answer-input").disabled = true;



  readAnswerFeedback(feedbackText);



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







  const randomIndex = Math.floor(Math.random() * currentQuizData.length);



  currentEssay = currentQuizData[randomIndex];



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



  container.scrollIntoView({

    behavior: "smooth"

  });



  readCurrentQuestion();



}







function checkEssayStep() {



  const selectedOption = document.querySelector('input[name="step-option"]:checked');



  const resultDiv = document.getElementById("result");



  resultDiv.innerHTML = "";



  let feedbackText = "";







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



    feedbackText = "Correct!";



  } else {



    resultDiv.innerHTML = `<p>❌ Correct: ${String.fromCharCode(65 + step.correct)}. ${step.options[step.correct]}</p>`;



    feedbackText = `Wrong. The correct option is ${String.fromCharCode(65 + step.correct)}, ${step.options[step.correct]}.`;



  }





  const explanationBox = `<div class="explanation-box">${step.explanation || ''}</div>`;



  resultDiv.innerHTML += explanationBox;



  feedbackText += ` Explanation: ${step.explanation || ''}`;







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



  readAnswerFeedback(feedbackText);



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







  container.scrollIntoView({

    behavior: "smooth"

  });



  readFlashcard();



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



function renderDocumentLinks() {



  const quizForm = document.getElementById("quiz-form");



  const resultDiv = document.getElementById("result");



  resultDiv.innerHTML = "";







  if (!hasFullAccess) {



    quizForm.innerHTML = `<div class="feedback"><p><strong>🚫 Documents are locked.</strong><br>Please purchase access to unlock PDF downloads.</p></div>`;



    return;



  }







  const currentCourse = document.body.getAttribute("data-course");



  const currentTerm = document.body.getAttribute("data-term");







  const filtered = allDocuments.filter(doc => doc.course === currentCourse && doc.term === currentTerm);







  if (filtered.length === 0) {



    quizForm.innerHTML = `<div class="feedback"><p>No documents found for ${currentCourse} ${currentTerm}.</p></div>`;



    return;



  }







  let html = `<div class="feedback"><h3>📄 Available Documents</h3><ul>`;



  filtered.forEach(doc => {



    html += `<li><a href="${doc.filePath}" target="_blank">${doc.title}</a></li>`;



  });



  html += `</ul></div>`;







  quizForm.innerHTML = html;



}



// === KEYBOARD SUPPORT ===



document.addEventListener("keydown", (e) => {



  if (!currentQuizType) return;







  // === MCQ & Essay Navigation ===



  if (currentQuizType === "mcq" || currentQuizType === "essay") {



    const options = document.querySelectorAll('input[type="radio"]');



    const selected = document.querySelector('input[type="radio"]:checked');



    let index = Array.from(options).indexOf(selected);







    switch (e.key) {



      case "ArrowDown":



      case "ArrowRight":



        if (options.length) {



          index = (index + 1) % options.length;



          options[index].checked = true;



        }



        break;



      case "ArrowUp":



      case "ArrowLeft":



        if (options.length) {



          index = (index - 1 + options.length) % options.length;



          options[index].checked = true;



        }



        break;



      case "1":

      case "a":

      case "A":

        if (options[0]) options[0].checked = true;

        break;



      case "2":

      case "b":

      case "B":

        if (options[1]) options[1].checked = true;

        break;



      case "3":

      case "c":

      case "C":

        if (options[2]) options[2].checked = true;

        break;



      case "4":

      case "d":

      case "D":

        if (options[3]) options[3].checked = true;

        break;



      case "Enter":



        if (currentQuizType === "mcq") checkMcqAnswer();



        if (currentQuizType === "essay") checkEssayStep();



        break;



      case " ":

      case "n":

      case "N":



        const nextBtn = document.querySelector("#result button");



        if (nextBtn) nextBtn.click();



        break;



    }



  }







  // === Short Answer Mode ===



  if (currentQuizType === "shortAnswer" && e.key === "Enter") {



    if (!e.shiftKey) { // allow Shift+Enter for newline



      e.preventDefault();



      checkShortAnswer();



    }



  }







  // === Flashcards ===



  if (currentQuizType === "flashcard") {



    switch (e.key) {



      case "ArrowLeft":

        prevFlashcard();

        break;



      case "ArrowRight":

        nextFlashcard();

        break;



      case " ":

      case "Enter":

        flipCard();

        break;



    }



  }



});





// === TEXT-TO-SPEECH READER ===

let utterance = null;



// NEW: Helper function to update the TTS button text

function updateTtsButtonText() {

  const ttsButton = document.getElementById('tts-toggle-button');

  if (ttsButton) {

    ttsButton.textContent = ttsEnabled ? '🔊 Turn Reader Off' : '🔇 Turn Reader On';

  }

}



// NEW: TTS toggle function

function toggleTTS() {

  ttsEnabled = !ttsEnabled;

  localStorage.setItem("ttsEnabled", ttsEnabled);

  stopReading();

  updateTtsButtonText();

  showAppNotification(ttsEnabled ? "🔊 Reader is now ON." : "🔇 Reader is now OFF.");

}



function stopReading() {

  if (utterance) {

    window.speechSynthesis.cancel();

    utterance = null;

  }

}



function readText(text) {

  if (!ttsEnabled) return;

  stopReading();

  utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);

}



function readCurrentQuestion() {

  if (!ttsEnabled) return;

  stopReading();

  let textToRead = "";

  if (currentQuizType === 'mcq' || currentQuizType === 'essay') {

    const questionElement = document.querySelector('.question-box p');

    const optionsElements = document.querySelectorAll('.options label');

    if (questionElement) {

      textToRead += questionElement.textContent.trim();

    }

    if (optionsElements.length > 0) {

      textToRead += ". Options are: ";

      optionsElements.forEach((label, i) => {

        const optionText = label.textContent.replace(String.fromCharCode(65 + i) + ".", "").trim();

        textToRead += `${String.fromCharCode(65 + i)}. ${optionText}. `;

      });

    }

  } else if (currentQuizType === 'shortAnswer') {

    const questionElement = document.querySelector('.question-box p');

    if (questionElement) {

      textToRead = questionElement.textContent.trim();

    }

  }

  readText(textToRead);

}



function readAnswerFeedback(feedbackText) {

  if (!ttsEnabled) return;

  readText(feedbackText);

}



function readFlashcard() {

  if (!ttsEnabled) return;

  stopReading();

  const card = currentFlashcards[currentCardIndex];

  if (isCardFront) {

    readText(`Front of card. ${card.front}`);

  } else {

    readText(`Back of card. ${card.back}`);

  }

}