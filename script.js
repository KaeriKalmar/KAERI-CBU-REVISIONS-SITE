// ============================================================
    // === KAERI EDTECH QUIZ ENGINE - VERSION B (PATCHED) ===
    // ============================================================

    // === CONFIGURATION & ACCESS CODES ===

    let ttsEnabled = false;
    let printContentData = null; // Store print data for transition

    const fullAccessCodes = {
      // === BI110 ===
      "BI110_T1": [
        "BI110T1_MAIN001#A@4X9P", "BI110T1_MAIN002!Z*3Y8Q", "BI110T1_MAIN003$K#2W7R", "BI110T1_MAIN004&Y!1V6S",
        "BI110T1_MAIN005*X%0U5T", "BI110T1_MAIN006^R&9T4U", "BI110T1_MAIN007~S+8S3V", "BI110T1_MAIN008?D#7R2W",
        "BI110T1_MAIN009|Q$6Q1X", "BI110T1_MAIN010<>P5P0Y", "BI110T1_BONUS011 %14O9Z", "BI110T1_BONUS012 @23N8A",
        "BI110T1_BONUS013 #32M7B", "BI110T1_BONUS014 &41L6C", "BI110T1_BONUS015 *50K5D", "BI110T1_BONUS016 ^69J4E",
        "BI110T1_EXTRA017 ~78I3F", "BI110T1_EXTRA018 ?87H2G", "BI110T1_TEST019 |96G1H", "BI110T1_TEST020 <05F0I"
      ],
      "BI110_T2": [
        "BI110T2_MAIN001#A@E4J9", "BI110T2_MAIN002!Z*D3I8", "BI110T2_MAIN003$K#C2H7", "BI110T2_MAIN004&Y!B1G6",
        "BI110T2_MAIN005*X%A0F5", "BI110T2_MAIN006^R&Z9E4", "BI110T2_MAIN007~S+Y8D3", "BI110T2_MAIN008?D#X7C2",
        "BI110T2_MAIN009|Q$W6B1", "BI110T2_MAIN010<>PV5A0", "BI110T2_BONUS011 %1U4Z9", "BI110T2_BONUS012 @2T3Y8",
        "BI110T2_BONUS013 #3S2X7", "BI110T2_BONUS014 &4R1W6", "BI110T2_BONUS015 *5Q0V5", "BI110T2_BONUS016 ^6P9U4",
        "BI110T2_EXTRA017 ~7O8T3", "BI110T2_EXTRA018 ?8N7S2", "BI110T2_TEST019 |9M6R1", "BI110T2_TEST020 <0L5Q0"
      ],
      "BI110_T3": [
        "BI110T3_MAIN001#A@K9L0", "BI110T3_MAIN002!Z*J8M1", "BI110T3_MAIN003$K#I7N2", "BI110T3_MAIN004&Y!H6O3",
        "BI110T3_MAIN005*X%G5P4", "BI110T3_MAIN006^R&F4Q5", "BI110T3_MAIN007~S+E3R6", "BI110T3_MAIN008?D#D2S7",
        "BI110T3_MAIN009|Q$C1T8", "BI110T3_MAIN010<>PB0U9", "BI110T3_BONUS011 %1A9V0", "BI110T3_BONUS012 @2Z8W1",
        "BI110T3_BONUS013 #3Y7X2", "BI110T3_BONUS014 &4X6Y3", "BI110T3_BONUS015 *5W5Z4", "BI110T3_BONUS016 ^6V4A5",
        "BI110T3_EXTRA017 ~7U3B6", "BI110T3_EXTRA018 ?8T2C7", "BI110T3_TEST019 |9S1D8", "BI110T3_TEST020 <0R0E9"
      ],

      // === CS110 ===
      "CS110_T1": [
        "CS110T1_MAIN001#A@M4F9", "CS110T1_MAIN002!Z*L3E8", "CS110T1_MAIN003$K#K2D7", "CS110T1_MAIN004&Y!J1C6",
        "CS110T1_MAIN005*X%I0B5", "CS110T1_MAIN006^R&H9A4", "CS110T1_MAIN007~S+G8Z3", "CS110T1_MAIN008?D#F7Y2",
        "CS110T1_MAIN009|Q$E6X1", "CS110T1_MAIN010<>PD5W0", "CS110T1_BONUS011 %1C4V9", "CS110T1_BONUS012 @2B3U8",
        "CS110T1_BONUS013 #3A2T7", "CS110T1_BONUS014 &4Z1S6", "CS110T1_BONUS015 *5Y0R5", "CS110T1_BONUS016 ^6X9Q4",
        "CS110T1_EXTRA017 ~7W8P3", "CS110T1_EXTRA018 ?8V7O2", "CS110T1_TEST019 |9U6N1", "CS110T1_TEST020 <0T5M0"
      ],
      "CS110_T2": [
        "CS110T2_MAIN001#A@R9S0", "CS110T2_MAIN002!Z*Q8T1", "CS110T2_MAIN003$K#P7U2", "CS110T2_MAIN004&Y!O6V3",
        "CS110T2_MAIN005*X%N5W4", "CS110T2_MAIN006^R&M4X5", "CS110T2_MAIN007~S+L3Y6", "CS110T2_MAIN008?D#K2Z7",
        "CS110T2_MAIN009|Q$J1A8", "CS110T2_MAIN010<>PI0B9", "CS110T2_BONUS011 %1H9C0", "CS110T2_BONUS012 @2G8D1",
        "CS110T2_BONUS013 #3F7E2", "CS110T2_BONUS014 &4E6F3", "CS110T2_BONUS015 *5D5G4", "CS110T2_BONUS016 ^6C4H5",
        "CS110T2_EXTRA017 ~7B3I6", "CS110T2_EXTRA018 ?8A2J7", "CS110T2_TEST019 |9Z1K8", "CS110T2_TEST020 <0Y0L9"
      ],
      "CS110_T3": [
        "CS110T3_MAIN001#A@O5P9", "CS110T3_MAIN002!Z*N4Q8", "CS110T3_MAIN003$K#M3R7", "CS110T3_MAIN004&Y!L2S6",
        "CS110T3_MAIN005*X%K1T5", "CS110T3_MAIN006^R&J0U4", "CS110T3_MAIN007~S+I9V3", "CS110T3_MAIN008?D#H8W2",
        "CS110T3_MAIN009|Q$G7X1", "CS110T3_MAIN010<>PF6Y0", "CS110T3_BONUS011 %1E5Z9", "CS110T3_BONUS012 @2D4A8",
        "CS110T3_BONUS013 #3C3B7", "CS110T3_BONUS014 &4B2C6", "CS110T3_BONUS015 *5A1D5", "CS110T3_BONUS016 ^6Z0E4",
        "CS110T3_EXTRA017 ~7Y9F3", "CS110T3_EXTRA018 ?8X8G2", "CS110T3_TEST019 |9W7H1", "CS110T3_TEST020 <0V6I0"
      ],

      // === LA111 === (NEW)
      "LA111_T1": [
        "LA111T1_MAIN001#C@4R9A", "LA111T1_MAIN002!X*3Q8B", "LA111T1_MAIN003$Z#2P7C", "LA111T1_MAIN004&W!1O6D",
        "LA111T1_MAIN005*V%0N5E", "LA111T1_MAIN006^U&9M4F", "LA111T1_MAIN007~T+8L3G", "LA111T1_MAIN008?S#7K2H",
        "LA111T1_MAIN009|R$6J1I", "LA111T1_MAIN010<>Q5I0J", "LA111T1_BONUS011 %14H9K", "LA111T1_BONUS012 @23G8L",
        "LA111T1_BONUS013 #32F7M", "LA111T1_BONUS014 &41E6N", "LA111T1_BONUS015 *50D5O", "LA111T1_BONUS016 ^69C4P",
        "LA111T1_EXTRA017 ~78B3Q", "LA111T1_EXTRA018 ?87A2R", "LA111T1_TEST019 |96Z1S", "LA111T1_TEST020 <05Y0T"
      ],
      "LA111_T2": [
        "LA111T2_MAIN001#C@U4V9", "LA111T2_MAIN002!X*T3U8", "LA111T2_MAIN003$Z#S2T7", "LA111T2_MAIN004&W!R1S6",
        "LA111T2_MAIN005*V%Q0R5", "LA111T2_MAIN006^U&P9Q4", "LA111T2_MAIN007~T+O8P3", "LA111T2_MAIN008?S#N7O2",
        "LA111T2_MAIN009|R$M6N1", "LA111T2_MAIN010<>QL5M0", "LA111T2_BONUS011 %1K4L9", "LA111T2_BONUS012 @2J3K8",
        "LA111T2_BONUS013 #3I2J7", "LA111T2_BONUS014 &4H1I6", "LA111T2_BONUS015 *5G0H5", "LA111T2_BONUS016 ^6F9G4",
        "LA111T2_EXTRA017 ~7E8F3", "LA111T2_EXTRA018 ?8D7E2", "LA111T2_TEST019 |9C6D1", "LA111T2_TEST020 <0B5C0"
      ],
      "LA111_T3": [
        "LA111T3_MAIN001#C@B9M0", "LA111T3_MAIN002!X*A8N1", "LA111T3_MAIN003$Z#Z7O2", "LA111T3_MAIN004&W!Y6P3",
        "LA111T3_MAIN005*V%X5Q4", "LA111T3_MAIN006^U&W4R5", "LA111T3_MAIN007~T+V3S6", "LA111T3_MAIN008?S#U2T7",
        "LA111T3_MAIN009|R$T1U8", "LA111T3_MAIN010<>QS0V9", "LA111T3_BONUS011 %1P9W0", "LA111T3_BONUS012 @2O8X1",
        "LA111T3_BONUS013 #3N7Y2", "LA111T3_BONUS014 &4M6Z3", "LA111T3_BONUS015 *5L5A4", "LA111T3_BONUS016 ^6K4B5",
        "LA111T3_EXTRA017 ~7J3C6", "LA111T3_EXTRA018 ?8I2D7", "LA111T3_TEST019 |9H1E8", "LA111T3_TEST020 <0G0F9"
      ],

      // NEW GLOBAL AND COURSE-WIDE ACCESS CODES
      "GLOBAL_ALL_TERMS": [
        "GLOBAL_001_2025#X7J9", "GLOBAL_002_2025!Y6K8", "GLOBAL_003_2025$Z5L7", "GLOBAL_004_2025&A4M6",
        "GLOBAL_005_2025*B3N5", "GLOBAL_006_2025^C2O4", "GLOBAL_007_2025~D1P3", "GLOBAL_008_2025?E0Q2",
        "GLOBAL_009_2025|F9R1", "GLOBAL_010_2025<G8S0", "GLOBAL_011_2025%H7T9", "GLOBAL_012_2025@I6U8",
        "GLOBAL_013_2025#J5V7", "GLOBAL_014_2025&K4W6", "GLOBAL_015_2025*L3X5", "GLOBAL_016_2025^M2Y4",
        "GLOBAL_017_2025~N1Z3", "GLOBAL_018_2025?O0A2", "GLOBAL_019_2025|P9B1", "GLOBAL_020_2025<Q8C0",
        // ambassadors 
        "AMBASSADOR_CHOOPA",
        "AMBASSADOR_CONSTANCE"
      ],
      
      "CS110_ALL_TERMS": [
        "CS110_ALL_001#R7D9", "CS110_ALL_002!S6E8", "CS110_ALL_003$T5F7", "CS110_ALL_004&U4G6",
        "CS110_ALL_005*V3H5", "CS110_ALL_006^W2I4", "CS110_ALL_007~X1J3", "CS110_ALL_008?Y0K2",
        "CS110_ALL_009|Z9L1", "CS110_ALL_010<A8M0", "CS110_ALL_011%B7N9", "CS110_ALL_012@C6O8",
        "CS110_ALL_013#D5P7", "CS110_ALL_014&E4Q6", "CS110_ALL_015*F3R5", "CS110_ALL_016^G2S4",
        "CS110_ALL_017~H1T3", "CS110_ALL_018?I0U2", "CS110_ALL_019|J9V1", "CS110_ALL_020<K8W0",
        // ambassador 
        "AMBASSADOR_CHIBUTA"
      ],
      
      "BI110_ALL_TERMS": [
        "BI110_ALL_001#S7U9", "BI110_ALL_002!T6V8", "BI110_ALL_003$U5W7", "BI110_ALL_004&V4X6",
        "BI110_ALL_005*W3Y5", "BI110_ALL_006^X2Z4", "BI110_ALL_007~Y1A3", "BI110_ALL_008?Z0B2",
        "BI110_ALL_009|A9C1", "BI110_ALL_010<B8D0", "BI110_ALL_011%C7E9", "BI110_ALL_012@D6F8",
        "BI110_ALL_013#E5G7", "BI110_ALL_014&F4H6", "BI110_ALL_015*G3I5", "BI110_ALL_016^H2J4",
        "BI110_ALL_017~I1K3", "BI110_ALL_018?J0L2", "BI110_ALL_019|K9M1", "BI110_ALL_020<L8N0",
        // ambassador 
        "AMBASSADOR_EMILY"
      ],
      
      // LA111_ALL_TERMS (NEW)
      "LA111_ALL_TERMS": [
        "LA111_ALL_001#F7G9", "LA111_ALL_002!E6H8", "LA111_ALL_003$D5I7", "LA111_ALL_004&C4J6",
        "LA111_ALL_005*B3K5", "LA111_ALL_006^A2L4", "LA111_ALL_007~Z1M3", "LA111_ALL_008?Y0N2",
        "LA111_ALL_009|X9O1", "LA111_ALL_010<W8P0", "LA111_ALL_011%V7Q9", "LA111_ALL_012@U6R8",
        "LA111_ALL_013#T5S7", "LA111_ALL_014&R4T6", "LA111_ALL_015*Q3U5", "LA111_ALL_016^P2V4",
        "LA111_ALL_017~O1W3", "LA111_ALL_018?N0X2", "LA111_ALL_019|M9Y1", "LA111_ALL_020<L8Z0",
        // Ambassador code for LA111
        "AMBASSADOR_ORATOR"
      ]
    };

    const revokedAccessCodes = [];

    const alreadyActivatedCodes = [
      // === BI110 ===
      "BI110T1_MAIN001#A@4X9P", "BI110T1_MAIN002!Z*3Y8Q", "BI110T1_MAIN003$K#2W7R", "BI110T1_MAIN004&Y!1V6S",
      "BI110T1_MAIN005*X%0U5T", "BI110T1_MAIN006^R&9T4U", "BI110T1_MAIN007~S+8S3V", "BI110T1_MAIN008?D#7R2W",
      "BI110T1_MAIN009|Q$6Q1X", "BI110T1_MAIN010<>P5P0Y", "BI110T1_BONUS011 %14O9Z", "BI110T1_BONUS012 @23N8A",
      "BI110T1_BONUS013 #32M7B", "BI110T1_BONUS014 &41L6C", "BI110T1_BONUS015 *50K5D", "BI110T1_BONUS016 ^69J4E",
      "BI110T1_EXTRA017 ~78I3F", "BI110T1_EXTRA018 ?87H2G", "BI110T1_TEST019 |96G1H", "BI110T1_TEST020 <05F0I",
      
      // BI110_T2
      "BI110T2_MAIN001#A@E4J9", "BI110T2_MAIN002!Z*D3I8", "BI110T2_MAIN003$K#C2H7", "BI110T2_MAIN004&Y!B1G6",
      "BI110T2_MAIN005*X%A0F5", "BI110T2_MAIN006^R&Z9E4", "BI110T2_MAIN007~S+Y8D3", "BI110T2_MAIN008?D#X7C2",
      "BI110T2_MAIN009|Q$W6B1", "BI110T2_MAIN010<>PV5A0", "BI110T2_BONUS011 %1U4Z9", "BI110T2_BONUS012 @2T3Y8",
      "BI110T2_BONUS013 #3S2X7", "BI110T2_BONUS014 &4R1W6", "BI110T2_BONUS015 *5Q0V5", "BI110T2_BONUS016 ^6P9U4",
      "BI110T2_EXTRA017 ~7O8T3", "BI110T2_EXTRA018 ?8N7S2", "BI110T2_TEST019 |9M6R1", "BI110T2_TEST020 <0L5Q0",
      
      // BI110_T3
      "BI110T3_MAIN001#A@K9L0", "BI110T3_MAIN002!Z*J8M1", "BI110T3_MAIN003$K#I7N2", "BI110T3_MAIN004&Y!H6O3",
      "BI110T3_MAIN005*X%G5P4", "BI110T3_MAIN006^R&F4Q5", "BI110T3_MAIN007~S+E3R6", "BI110T3_MAIN008?D#D2S7",
      "BI110T3_MAIN009|Q$C1T8", "BI110T3_MAIN010<>PB0U9", "BI110T3_BONUS011 %1A9V0", "BI110T3_BONUS012 @2Z8W1",
      "BI110T3_BONUS013 #3Y7X2", "BI110T3_BONUS014 &4X6Y3", "BI110T3_BONUS015 *5W5Z4", "BI110T3_BONUS016 ^6V4A5",
      "BI110T3_EXTRA017 ~7U3B6", "BI110T3_EXTRA018 ?8T2C7", "BI110T3_TEST019 |9S1D8", "BI110T3_TEST020 <0R0E9",
      
      // CS110_T1
      "CS110T1_MAIN001#A@M4F9", "CS110T1_MAIN002!Z*L3E8", "CS110T1_MAIN003$K#K2D7", "CS110T1_MAIN004&Y!J1C6",
      "CS110T1_MAIN005*X%I0B5", "CS110T1_MAIN006^R&H9A4", "CS110T1_MAIN007~S+G8Z3", "CS110T1_MAIN008?D#F7Y2",
      "CS110T1_MAIN009|Q$E6X1", "CS110T1_MAIN010<>PD5W0", "CS110T1_BONUS011 %1C4V9", "CS110T1_BONUS012 @2B3U8",
      "CS110T1_BONUS013 #3A2T7", "CS110T1_BONUS014 &4Z1S6", "CS110T1_BONUS015 *5Y0R5", "CS110T1_BONUS016 ^6X9Q4",
      "CS110T1_EXTRA017 ~7W8P3", "CS110T1_EXTRA018 ?8V7O2", "CS110T1_TEST019 |9U6N1", "CS110T1_TEST020 <0T5M0",
      
      // CS110_T2
      "CS110T2_MAIN001#A@R9S0", "CS110T2_MAIN002!Z*Q8T1", "CS110T2_MAIN003$K#P7U2", "CS110T2_MAIN004&Y!O6V3",
      "CS110T2_MAIN005*X%N5W4", "CS110T2_MAIN006^R&M4X5", "CS110T2_MAIN007~S+L3Y6", "CS110T2_MAIN008?D#K2Z7",
      "CS110T2_MAIN009|Q$J1A8", "CS110T2_MAIN010<>PI0B9", "CS110T2_BONUS011 %1H9C0", "CS110T2_BONUS012 @2G8D1",
      "CS110T2_BONUS013 #3F7E2", "CS110T2_BONUS014 &4E6F3", "CS110T2_BONUS015 *5D5G4", "CS110T2_BONUS016 ^6C4H5",
      "CS110T2_EXTRA017 ~7B3I6", "CS110T2_EXTRA018 ?8A2J7", "CS110T2_TEST019 |9Z1K8", "CS110T2_TEST020 <0Y0L9",
      
      // CS110_T3
      "CS110T3_MAIN001#A@O5P9", "CS110T3_MAIN002!Z*N4Q8", "CS110T3_MAIN003$K#M3R7", "CS110T3_MAIN004&Y!L2S6",
      "CS110T3_MAIN005*X%K1T5", "CS110T3_MAIN006^R&J0U4", "CS110T3_MAIN007~S+I9V3", "CS110T3_MAIN008?D#H8W2",
      "CS110T3_MAIN009|Q$G7X1", "CS110T3_MAIN010<>PF6Y0", "CS110T3_BONUS011 %1E5Z9", "CS110T3_BONUS012 @2D4A8",
      "CS110T3_BONUS013 #3C3B7", "CS110T3_BONUS014 &4B2C6", "CS110T3_BONUS015 *5A1D5", "CS110T3_BONUS016 ^6Z0E4",
      "CS110T3_EXTRA017 ~7Y9F3", "CS110T3_EXTRA018 ?8X8G2", "CS110T3_TEST019 |9W7H1", "CS110T3_TEST020 <0V6I0",
      
      // LA111_T1
      "LA111T1_MAIN001#C@4R9A", "LA111T1_MAIN002!X*3Q8B", "LA111T1_MAIN003$Z#2P7C", "LA111T1_MAIN004&W!1O6D",
      "LA111T1_MAIN005*V%0N5E", "LA111T1_MAIN006^U&9M4F", "LA111T1_MAIN007~T+8L3G", "LA111T1_MAIN008?S#7K2H",
      "LA111T1_MAIN009|R$6J1I", "LA111T1_MAIN010<>Q5I0J", "LA111T1_BONUS011 %14H9K", "LA111T1_BONUS012 @23G8L",
      "LA111T1_BONUS013 #32F7M", "LA111T1_BONUS014 &41E6N", "LA111T1_BONUS015 *50D5O", "LA111T1_BONUS016 ^69C4P",
      "LA111T1_EXTRA017 ~78B3Q", "LA111T1_EXTRA018 ?87A2R", "LA111T1_TEST019 |96Z1S", "LA111T1_TEST020 <05Y0T",
      
      // LA111_T2
      "LA111T2_MAIN001#C@U4V9", "LA111T2_MAIN002!X*T3U8", "LA111T2_MAIN003$Z#S2T7", "LA111T2_MAIN004&W!R1S6",
      "LA111T2_MAIN005*V%Q0R5", "LA111T2_MAIN006^U&P9Q4", "LA111T2_MAIN007~T+O8P3", "LA111T2_MAIN008?S#N7O2",
      "LA111T2_MAIN009|R$M6N1", "LA111T2_MAIN010<>QL5M0", "LA111T2_BONUS011 %1K4L9", "LA111T2_BONUS012 @2J3K8",
      "LA111T2_BONUS013 #3I2J7", "LA111T2_BONUS014 &4H1I6", "LA111T2_BONUS015 *5G0H5", "LA111T2_BONUS016 ^6F9G4",
      "LA111T2_EXTRA017 ~7E8F3", "LA111T2_EXTRA018 ?8D7E2", "LA111T2_TEST019 |9C6D1", "LA111T2_TEST020 <0B5C0",
      
      // LA111_T3
      "LA111T3_MAIN001#C@B9M0", "LA111T3_MAIN002!X*A8N1", "LA111T3_MAIN003$Z#Z7O2", "LA111T3_MAIN004&W!Y6P3",
      "LA111T3_MAIN005*V%X5Q4", "LA111T3_MAIN006^U&W4R5", "LA111T3_MAIN007~T+V3S6", "LA111T3_MAIN008?S#U2T7",
      "LA111T3_MAIN009|R$T1U8", "LA111T3_MAIN010<>QS0V9", "LA111T3_BONUS011 %1P9W0", "LA111T3_BONUS012 @2O8X1",
      "LA111T3_BONUS013 #3N7Y2", "LA111T3_BONUS014 &4M6Z3", "LA111T3_BONUS015 *5L5A4", "LA111T3_BONUS016 ^6K4B5",
      "LA111T3_EXTRA017 ~7J3C6", "LA111T3_EXTRA018 ?8I2D7", "LA111T3_TEST019 |9H1E8", "LA111T3_TEST020 <0G0F9",
      
      // GLOBAL_ALL_TERMS
      "GLOBAL_001_2025#X7J9", "GLOBAL_002_2025!Y6K8", "GLOBAL_003_2025$Z5L7", "GLOBAL_004_2025&A4M6",
      "GLOBAL_005_2025*B3N5", "GLOBAL_006_2025^C2O4", "GLOBAL_007_2025~D1P3", "GLOBAL_008_2025?E0Q2",
      "GLOBAL_009_2025|F9R1", "GLOBAL_010_2025<G8S0", "GLOBAL_011_2025%H7T9", "GLOBAL_012_2025@I6U8",
      "GLOBAL_013_2025#J5V7", "GLOBAL_014_2025&K4W6", "GLOBAL_015_2025*L3X5", "GLOBAL_016_2025^M2Y4",
      "GLOBAL_017_2025~N1Z3", "GLOBAL_018_2025?O0A2", "GLOBAL_019_2025|P9B1", "GLOBAL_020_2025<Q8C0",
      
      // CS110_ALL_TERMS
      "CS110_ALL_001#R7D9", "CS110_ALL_002!S6E8", "CS110_ALL_003$T5F7", "CS110_ALL_004&U4G6",
      "CS110_ALL_005*V3H5", "CS110_ALL_006^W2I4", "CS110_ALL_007~X1J3", "CS110_ALL_008?Y0K2",
      "CS110_ALL_009|Z9L1", "CS110_ALL_010<A8M0", "CS110_ALL_011%B7N9", "CS110_ALL_012@C6O8",
      "CS110_ALL_013#D5P7", "CS110_ALL_014&E4Q6", "CS110_ALL_015*F3R5", "CS110_ALL_016^G2S4",
      "CS110_ALL_017~H1T3", "CS110_ALL_018?I0U2", "CS110_ALL_019|J9V1", "CS110_ALL_020<K8W0",
      
      // BI110_ALL_TERMS
      "BI110_ALL_001#S7U9", "BI110_ALL_002!T6V8", "BI110_ALL_003$U5W7", "BI110_ALL_004&V4X6",
      "BI110_ALL_005*W3Y5", "BI110_ALL_006^X2Z4", "BI110_ALL_007~Y1A3", "BI110_ALL_008?Z0B2",
      "BI110_ALL_009|A9C1", "BI110_ALL_010<B8D0", "BI110_ALL_011%C7E9", "BI110_ALL_012@D6F8",
      "BI110_ALL_013#E5G7", "BI110_ALL_014&F4H6", "BI110_ALL_015*G3I5", "BI110_ALL_016^H2J4",
      "BI110_ALL_017~I1K3", "BI110_ALL_018?J0L2", "BI110_ALL_019|K9M1", "BI110_ALL_020<L8N0",
      
      // LA111_ALL_TERMS
      "LA111_ALL_001#F7G9", "LA111_ALL_002!E6H8", "LA111_ALL_003$D5I7", "LA111_ALL_004&C4J6",
      "LA111_ALL_005*B3K5", "LA111_ALL_006^A2L4", "LA111_ALL_007~Z1M3", "LA111_ALL_008?Y0N2",
      "LA111_ALL_009|X9O1", "LA111_ALL_010<W8P0", "LA111_ALL_011%V7Q9", "LA111_ALL_012@U6R8",
      "LA111_ALL_013#T5S7", "LA111_ALL_014&R4T6", "LA111_ALL_015*Q3U5", "LA111_ALL_016^P2V4",
      "LA111_ALL_017~O1W3", "LA111_ALL_018?N0X2", "LA111_ALL_019|M9Y1", "LA111_ALL_020<L8Z0",
      
      // Ambassador codes
      "AMBASSADOR_CHOOPA", "AMBASSADOR_CHIBUTA", "AMBASSADOR_CONSTANCE", "AMBASSADOR_EMILY", "AMBASSADOR_ORATOR"
    ];

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

    // === STABILITY VARIABLES (NEW PATCH) ===
    let isSubmissionLocked = false; // Prevents double-clicking submit buttons

    let currentCourse = null;
    let currentTerm = null;
    let currentTermKey = null;

    function denyAccess(message, codeToClear = null) {
      hasFullAccess = false;
      if (codeToClear) {
        localStorage.removeItem("accessCode_GLOBAL_ALL_TERMS");
        localStorage.removeItem("accessCodeExpires_GLOBAL_ALL_TERMS");
        localStorage.removeItem("accessCode_" + currentCourse + "_ALL_TERMS");
        localStorage.removeItem("accessCodeExpires_" + currentCourse + "_ALL_TERMS");
      }
      localStorage.removeItem("accessCode_" + currentTermKey);
      localStorage.removeItem("accessCodeExpires_" + currentTermKey);

      updateModeBanner("🔒 Demo Mode: Limited Access");
      document.getElementById('mode-banner').classList.add('demo-mode-banner');
      document.getElementById('mode-banner').classList.remove('full-access-banner');
      showAppNotification(message, "error");
    }

    // --- INIT ---
    function initializeCourseLogic() {
      // Initialize TTS
      ttsEnabled = localStorage.getItem("ttsEnabled") === "true";
      const modeButtonsDiv = document.querySelector('.mode-buttons');
      if (modeButtonsDiv && !document.getElementById('tts-toggle-button')) {
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

      if (!currentCourse || !currentTerm) return;

      try {
        const storedUsed = localStorage.getItem("globalUsedAccessCodes");
        usedAccessCodes = storedUsed ? JSON.parse(storedUsed) : [];
      } catch (e) {
        console.error("Error parsing globalUsedAccessCodes:", e);
        usedAccessCodes = [];
      }

      // DATA LOAD
      if (typeof mcqData !== 'undefined') {
        allMcqData = mcqData;
      } else if (typeof mcqDa !== 'undefined') {
        allMcqData = mcqDa;
      } else {
        allMcqData = [];
      }

      allShortData = typeof shortData !== 'undefined' ? shortData : [];
      allEssayData = typeof essayData !== 'undefined' ? essayData : [];
      allFlashcards = typeof flashcards !== 'undefined' ? flashcards : {};

      // Filter data for current term
      currentMcqData = filterDataByCourseAndTerm(allMcqData, currentCourse, currentTerm);
      currentShortData = filterDataByCourseAndTerm(allShortData, currentCourse, currentTerm);
      currentEssayData = filterDataByCourseAndTerm(allEssayData, currentCourse, currentTerm);
      currentFlashcardTopics = filterFlashcardsByCourseAndTerm(allFlashcards, currentCourse, currentTerm);

      let foundValidAccess = false;
      let needsPrompt = true;

      // Access Code Check Priority: Term -> Course -> Global
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

      // 1. Term Check
      if (checkAndApplyAccess(
          localStorage.getItem("accessCode_" + currentTermKey),
          localStorage.getItem("accessCodeExpires_" + currentTermKey),
          "Term Access"
        )) {
        foundValidAccess = true;
        needsPrompt = false;
      }
      // 2. Course Check
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
      // 3. Global Check
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
          hasFullAccess = false;
        } else if (revokedAccessCodes.includes(userCode)) {
          denyAccess(`❌ "${userCode}" is revoked.`, userCode);
        } else if (alreadyActivatedCodes.includes(userCode)) {
          denyAccess(`❌ "${userCode}" has already been activated and is no longer available.`, userCode);
        } else {
          let codeFoundInConfig = false;
          let accessType = "";
          let storageKeyPrefix = "";

          // Check Global
          if (fullAccessCodes.GLOBAL_ALL_TERMS && fullAccessCodes.GLOBAL_ALL_TERMS.includes(userCode)) {
            codeFoundInConfig = true;
            accessType = "Global Access";
            storageKeyPrefix = "GLOBAL_ALL_TERMS";
          }
          // Check Course
          else if (fullAccessCodes[courseAllTermsKey] && fullAccessCodes[courseAllTermsKey].includes(userCode)) {
            codeFoundInConfig = true;
            accessType = "Course-wide Access";
            storageKeyPrefix = courseAllTermsKey;
          }
          // Check Term
          else if (fullAccessCodes[currentTermKey] && fullAccessCodes[currentTermKey].includes(userCode)) {
            codeFoundInConfig = true;
            accessType = "Term Access";
            storageKeyPrefix = currentTermKey;
          }

          if (codeFoundInConfig) {
            const global = usedAccessCodes.find(e => e.code === userCode);
            if (global && Date.now() < global.globalExpiry) {
              localStorage.setItem("accessCode_" + storageKeyPrefix, userCode);
              localStorage.setItem("accessCodeExpires_" + storageKeyPrefix, global.globalExpiry);
              hasFullAccess = true;
              updateModeBanner("✅ FULL ACCESS");
              document.getElementById('mode-banner').classList.add('full-access-banner');
              document.getElementById('mode-banner').classList.remove('demo-mode-banner');
              showAppNotification(`✅ Full Access (Re-activated via ${accessType})`, "success");
              clearDemoLocks();
            } else if (global && Date.now() >= global.globalExpiry) {
              denyAccess(`⏳ "${userCode}" expired.`, userCode);
            } else {
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
    }

    // === SPA NAVIGATION ENGINE ===
    function loadCourse(course, term, price) {
      document.body.setAttribute('data-course', course);
      document.body.setAttribute('data-term', term);
      document.getElementById('course-title').textContent = `${course} Term ${term.replace('T','')} Study Materials`;
      document.getElementById('price-banner').textContent = `Price: K${price}`;
      document.getElementById('price-val').textContent = `K${price}`;
      document.getElementById('price-desc').textContent = `${course} Term ${term.replace('T','')}`;
      document.getElementById('landing-view').style.display = 'none';
      document.getElementById('course-view').style.display = 'block';
      document.getElementById('fixed-header').style.display = 'block';
      document.getElementById('price-banner').style.display = 'block';
      document.body.classList.add('view-course');
      window.scrollTo(0,0);
      
      setTimeout(() => {
        initializeCourseLogic();
        renderQuiz(); 
      }, 100);
    }

    function backToMenu() {
      document.getElementById('landing-view').style.display = 'block';
      document.getElementById('course-view').style.display = 'none';
      document.getElementById('fixed-header').style.display = 'none';
      document.getElementById('price-banner').style.display = 'none';
      document.body.classList.remove('view-course');

      document.getElementById('quiz-form').innerHTML = '';
      document.getElementById('result').innerHTML = '';
      document.body.removeAttribute('data-course');
      document.body.removeAttribute('data-term');
      stopReading(); 
      window.scrollTo(0,0);
    }

    function toggleTerms(courseId) {
      const termButtons = document.getElementById(courseId + '-terms');
      const courseButton = termButtons.previousElementSibling;
      if (termButtons.style.display === 'flex') {
        termButtons.style.display = 'none';
        courseButton.classList.remove('active');
      } else {
        document.querySelectorAll('.term-buttons').forEach(section => {
          if (section.id !== courseId + '-terms') {
            section.style.display = 'none';
            section.previousElementSibling.classList.remove('active');
          }
        });
        termButtons.style.display = 'flex';
        courseButton.classList.add('active');
      }
    }

    // === HELPER FUNCTIONS ===
    function showAppNotification(message, type = 'info', duration = 5000) {
      const el = document.getElementById('app-notification');
      if (!el) return alert(message);
      el.querySelector('.notification-message').textContent = message;
      el.className = 'show ' + type;
      if (el.timeoutId) clearTimeout(el.timeoutId);
      el.timeoutId = setTimeout(() => el.classList.remove('show'), duration);
      el.querySelector('.close-btn').onclick = () => {
        el.classList.remove('show');
        clearTimeout(el.timeoutId);
      };
    }

    function updateModeBanner(message) {
      const banner = document.getElementById("mode-banner");
      if (banner) banner.textContent = message;
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
      let currentIndex = array.length, randomIndex;
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
      if (attempts >= 100) {
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

    // ============================================================
    // === ENHANCED PRINTING SYSTEM ===
    // ============================================================
    
    function generatePrintPreview() {
      const printDiv = document.getElementById("print-preview-content");
      const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      
      let modeTitle = "";
      if (currentQuizType === 'essay') modeTitle = currentEssay.title;
      else if (currentQuizType === 'flashcard') modeTitle = currentFlashcardTopic + " - Glossary";
      else modeTitle = `${currentCourse} ${currentTerm} - Practice Session`;
      
      let html = `
        <div class="preview-header">
          <h1>${modeTitle}</h1>
          <p><strong>Kaeri EdTech Study Systems</strong></p>
          <p>📞 Call/WhatsApp: <strong>0964312504</strong> for Full Access</p>
          <p style="font-size: 0.9em; border-top: 1px solid #ccc; padding-top: 5px; margin-top: 5px;">
             Generated on: ${date} | Preview - Click Print to save as PDF
          </p>
          <div style="background: #fff3cd; padding: 10px; border-radius: 5px; margin-top: 10px; border: 1px solid #ffeaa7; font-size: 0.9em;">
            <strong>💡 Tip:</strong> Use "Save as PDF" option in print dialog to create digital copy. Watermark will appear on all pages.
          </div>
        </div>
      `;
      
      // CONTENT GENERATION LOGIC
      if (currentQuizType === 'essay') {
        currentEssay.steps.forEach((step, index) => {
          html += `
            <div class="preview-step">
              <div class="preview-q">Step ${index + 1}: ${step.q}</div>
              <div class="preview-ans">✅ Correct Action: ${step.options[step.correct]}</div>
              <div class="preview-exp">💡 Note: ${step.explanation || "No additional explanation."}</div>
            </div>`;
        });
      } else if (currentQuizType === 'mcq') {
        currentQuizData.forEach((item, index) => {
          html += `
            <div class="preview-step">
              <div class="preview-q">Q${index + 1}: ${item.q}</div>
              <div class="preview-ans">✅ Answer: ${item.options[item.correct]}</div>
              <div class="preview-exp">💡 Explanation: ${item.explanation || "No additional explanation."}</div>
            </div>`;
        });
      } else if (currentQuizType === 'shortAnswer') {
        currentQuizData.forEach((item, index) => {
          const keys = item.keywords.join(", ");
          html += `
            <div class="preview-step">
              <div class="preview-q">Q${index + 1}: ${item.q}</div>
              <div class="preview-ans">🔑 Required Keywords: ${keys}</div>
              <div class="preview-exp">💡 Explanation: ${item.explanation || "No additional explanation."}</div>
            </div>`;
        });
      } else if (currentQuizType === 'flashcard') {
        currentFlashcards.forEach((card, index) => {
          html += `
            <div class="preview-step" style="border-left-color: #6f42c1;">
              <div class="preview-q" style="color: #333; font-size: 1.1em;">${index + 1}. ${card.front}</div>
              <div class="preview-ans" style="color: #6f42c1; border-left-color: #6f42c1;">Definition:</div>
              <div style="margin-top:5px; padding: 8px; background: #f8f9fa; border-radius: 4px;">${card.back}</div>
            </div>`;
        });
      }
      
      html += `
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 0.9em; color: #666;">
          <p>Study smarter with Kaeri EdTech. Contact 0964312504 for full access.</p>
        </div>
      `;
      
      printContentData = { html: html.replace(/preview-/g, 'pdf-') };
      printDiv.innerHTML = html;
      document.getElementById('print-preview-modal').classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function proceedToPrint() {
      closePrintPreview();
      setTimeout(() => {
        const printDiv = document.getElementById("printable-summary");
        printDiv.innerHTML = printContentData.html;
        const style = document.createElement('style');
        style.innerHTML = `@page { margin: 20mm; size: A4; }`;
        printDiv.appendChild(style);
        window.print();
        setTimeout(() => { printDiv.innerHTML = ''; }, 1000);
      }, 300);
    }

    function closePrintPreview() {
      document.getElementById('print-preview-modal').classList.remove('show');
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('DOMContentLoaded', function() {
      const closeBtn = document.querySelector('.close-print-preview');
      if(closeBtn) closeBtn.addEventListener('click', closePrintPreview);
      const modal = document.getElementById('print-preview-modal');
      if(modal) modal.addEventListener('click', function(e) {
        if (e.target === this) closePrintPreview();
      });
    });

    // ============================================================
    // === UPDATED QUIZ FUNCTIONS (WITH SUBMISSION LOCK) ===
    // ============================================================

    // --- MCQ ---
    function renderQuiz() {
      if (blockDemo('mcq')) return;
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      document.getElementById("result").innerHTML = "";
      let q = shuffle([...currentMcqData]).slice(0, 10);
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
      // 1. RESET LOCK
      isSubmissionLocked = false; 

      const container = document.getElementById("quiz-form");
      const q = currentQuizData[currentQuestionIndex];
      updateProgress(currentQuestionIndex + 1, currentQuizData.length);
      
      if (!q) return showFinalMcqScore();
      
      let html = `
        <div class="question-header"><h3>MCQ ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3></div>
        <div class="question-box"><p>${q.q}</p><div class="options">
      `;
      
      if (q.options) {
        q.options.forEach((opt, i) => {
          html += `<label><input type="radio" name="mcq" value="${i}"/> ${String.fromCharCode(65 + i)}. ${opt}</label>`;
        });
      }
      
      // ADDED ID for targeting
      html += `</div><button id="mcq-submit-btn" onclick="checkMcqAnswer()">✅ Submit</button></div>`;
      container.innerHTML = html;
      document.getElementById("result").innerHTML = "";
      container.scrollIntoView({ behavior: "smooth" });
      readCurrentQuestion();
    }

    function checkMcqAnswer() {
      // 1. SECURITY CHECK
      if (isSubmissionLocked) return; 
      
      const selected = document.querySelector('input[name="mcq"]:checked');
      if (!selected) return showAppNotification("Select an option!", "warning");

      // 2. LOCK THE STATE
      isSubmissionLocked = true;

      // 3. DISABLE UI
      const submitBtn = document.getElementById("mcq-submit-btn");
      if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d"; 
      }
      document.querySelectorAll('input[name="mcq"]').forEach(input => input.disabled = true);

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      
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
      
      readAnswerFeedback(feedbackText);
    }

    function showFinalMcqScore() {
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      updateProgress(currentQuizData.length, currentQuizData.length);
      const percent = Math.round((currentScore / currentQuizData.length) * 100);
      let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
      
      container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
      
      const restartBtn = document.createElement("button");
      restartBtn.innerText = "🔁 Try Again";
      restartBtn.style.marginRight = "10px";
      restartBtn.onclick = renderQuiz;
      container.appendChild(restartBtn);

      const previewBtn = document.createElement("button");
      previewBtn.innerText = "👁️ Preview & Print";
      previewBtn.style.backgroundColor = "#007bff"; 
      previewBtn.style.color = "white";
      previewBtn.onclick = generatePrintPreview;
      container.appendChild(previewBtn);
    }

    // --- SHORT ANSWER ---
    function renderShortAnswers() {
      if (blockDemo('shortAnswer')) return;
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      document.getElementById("result").innerHTML = "";
      let q = shuffle([...currentShortData]).slice(0, 10);
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
      // 1. RESET LOCK
      isSubmissionLocked = false;

      const container = document.getElementById("quiz-form");
      const q = currentQuizData[currentQuestionIndex];
      updateProgress(currentQuestionIndex + 1, currentQuizData.length);
      if (!q) return showFinalShortAnswerScore();
      
      // Added ID to button
      container.innerHTML = `<h3>Short Answer ${currentQuestionIndex + 1} / ${currentQuizData.length}</h3><div class="question-box"><p>${q.q}</p></div><textarea id="short-answer-input"></textarea><button id="sa-submit-btn" onclick="checkShortAnswer()">✅ Submit</button>`;
      document.getElementById("result").innerHTML = "";
      container.scrollIntoView({ behavior: "smooth" });
      readCurrentQuestion();
    }

    function checkShortAnswer() {
      // 1. SECURITY CHECK
      if (isSubmissionLocked) return;

      const inputEl = document.getElementById("short-answer-input");
      const ans = inputEl.value.trim().toLowerCase();
      
      if (!ans) return showAppNotification("Please type your answer!", "warning");

      // 2. LOCK STATE
      isSubmissionLocked = true;

      // 3. DISABLE UI
      const submitBtn = document.getElementById("sa-submit-btn");
      if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Checked ✓";
        submitBtn.style.backgroundColor = "#6c757d";
      }
      inputEl.disabled = true;

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      
      const q = currentQuizData[currentQuestionIndex];
      const matched = q.keywords.some(k => ans.includes(k.toLowerCase()));
      let feedbackText = "";
      
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
      
      readAnswerFeedback(feedbackText);
    }

    function showFinalShortAnswerScore() {
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      updateProgress(currentQuizData.length, currentQuizData.length);
      const percent = Math.round((currentScore / currentQuizData.length) * 100);
      let comment = percent >= 90 ? "🎉 Excellent work!" : percent >= 70 ? "✅ Good job!" : percent >= 50 ? "⚠️ Fair attempt." : "❌ Keep practicing!";
      
      container.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${currentScore} / ${currentQuizData.length} (${percent}%)</p><p><em>${comment}</em></p>`;
      
      const restartBtn = document.createElement("button");
      restartBtn.innerText = "🔁 Try Again";
      restartBtn.style.marginRight = "10px";
      restartBtn.onclick = renderShortAnswers;
      container.appendChild(restartBtn);

      const previewBtn = document.createElement("button");
      previewBtn.innerText = "👁️ Preview & Print";
      previewBtn.style.backgroundColor = "#007bff"; 
      previewBtn.style.color = "white";
      previewBtn.onclick = generatePrintPreview;
      container.appendChild(previewBtn);
    }

    // --- ESSAY ---
    let currentEssay = null;
    let currentStepIndex = 0;
    let essayScore = 0;

    function renderEssaySimulation() {
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      document.getElementById("result").innerHTML = "";

      currentQuizData = currentEssayData; 
      if (currentQuizData.length === 0) {
        container.innerHTML = "<p>No essay simulations available for this term yet.</p>";
        updateProgress(0, 0);
        return;
      }

      currentQuizType = 'essay'; 
      updateProgress(0, 0);

      const header = document.createElement("h2");
      header.innerText = "Select Essay Topic";
      header.style.textAlign = "center"; 
      header.style.marginBottom = "25px";
      container.appendChild(header);

      const listDiv = document.createElement('div');
      listDiv.className = 'flashcard-topic-buttons'; 

      currentQuizData.forEach((essay, index) => {
        const btn = document.createElement("button");
        btn.textContent = essay.title; 
        btn.onclick = () => attemptStartEssay(index); 
        listDiv.appendChild(btn);
      });

      container.appendChild(listDiv);
    }

    function attemptStartEssay(index) {
        if (blockDemo('essay')) return; 
        startSpecificEssay(index);
    }

    function startSpecificEssay(index) {
      currentEssay = currentQuizData[index];
      currentStepIndex = 0;
      essayScore = 0;
      document.getElementById("result").innerHTML = "";
      showEssayStep(0);
    }

    function showEssayStep(index) {
      // 1. RESET LOCK
      isSubmissionLocked = false;

      const container = document.getElementById("quiz-form");
      const essay = currentEssay;
      const step = essay.steps[index];
      updateProgress(index + 1, essay.steps.length);
      if (!step) return showFinalEssayScore();
      
      let html = `
        <div class="question-header"><h3>📄 ${essay.title} — Step ${index + 1} of ${essay.steps.length}</h3><p>Topic: ${essay.topic} | ${essay.year}</p></div>
        <div class="question-box"><p><strong>Q:</strong> ${step.q}</p><div class="options">
      `;
      step.options.forEach((opt, i) => {
        html += `<label class="option"><input type="radio" name="step-option" value="${i}" /> <span>${String.fromCharCode(65 + i)}. ${opt}</span></label>`;
      });
      
      // Added ID
      html += `</div><button id="essay-submit-btn" onclick="checkEssayStep()">✅ Submit Step</button></div>`;
      container.innerHTML = html;
      document.getElementById("result").innerHTML = "";
      container.scrollIntoView({ behavior: "smooth" });
      readCurrentQuestion();
    }

    function checkEssayStep() {
      // 1. SECURITY CHECK
      if (isSubmissionLocked) return;

      const selectedOption = document.querySelector('input[name="step-option"]:checked');
      if (!selectedOption) return showAppNotification("Please select an option!", "warning");

      // 2. LOCK STATE
      isSubmissionLocked = true;

      // 3. DISABLE UI
      const submitBtn = document.getElementById("essay-submit-btn");
      if(submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
        submitBtn.style.backgroundColor = "#6c757d";
      }
      document.querySelectorAll('input[name="step-option"]').forEach(input => input.disabled = true);

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      
      const essay = currentEssay;
      const step = essay.steps[currentStepIndex];
      const userAnswer = parseInt(selectedOption.value);
      const correct = userAnswer === step.correct;
      let feedbackText = "";
      
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
      
      readAnswerFeedback(feedbackText);
    }

    function showFinalEssayScore() {
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      updateProgress(currentEssay.steps.length, currentEssay.steps.length);
      
      const percent = Math.round((essayScore / currentEssay.steps.length) * 100);
      let comment = percent >= 90 ? "🎉 Excellent process understanding!" : percent >= 70 ? "✅ Good step-by-step grasp!" : percent >= 50 ? "⚠️ Some steps need revision." : "❌ Keep improving!";
      
      container.innerHTML = `<h2>Simulation Complete!</h2><p>Your Score: ${essayScore} / ${currentEssay.steps.length} (${percent}%)</p><p><em>${comment}</em></p>`;
      
      const retryBtn = document.createElement("button");
      retryBtn.innerText = "🔁 Retry This Essay";
      retryBtn.style.backgroundColor = "#ffc107";
      retryBtn.style.color = "#333";
      retryBtn.style.marginRight = "10px";
      retryBtn.onclick = () => attemptStartEssay(currentQuizData.indexOf(currentEssay));
      container.appendChild(retryBtn);

      const previewBtn = document.createElement("button");
      previewBtn.innerText = "👁️ Preview & Print";
      previewBtn.style.backgroundColor = "#007bff"; 
      previewBtn.style.color = "white";
      previewBtn.style.marginRight = "10px";
      previewBtn.onclick = generatePrintPreview;
      container.appendChild(previewBtn);

      const backBtn = document.createElement("button");
      backBtn.innerText = "⬅️ Back to Topics";
      backBtn.className = "back-button"; 
      backBtn.onclick = renderEssaySimulation;
      container.appendChild(backBtn);
    }

    // --- FLASHCARDS ---
    let currentFlashcardTopic = null;
    let currentFlashcards = [];
    let currentCardIndex = 0;
    let isCardFront = true;

    function renderFlashcardTopics() {
      const container = document.getElementById("quiz-form");
      container.innerHTML = "";
      document.getElementById("result").innerHTML = "";
      currentQuizType = 'flashcard';
      updateProgress(0, 0);
      if (Object.keys(currentFlashcardTopics).length === 0) {
        container.innerHTML = "<p>No flashcards available for this term.</p>";
        return;
      }
      const header = document.createElement("h2");
      header.innerText = "Select Flashcard Topic";
      header.style.textAlign = "center";
      header.style.marginBottom = "25px";
      container.appendChild(header);
      const listDiv = document.createElement('div');
      listDiv.className = 'flashcard-topic-buttons';
      for (const topic in currentFlashcardTopics) {
        const btn = document.createElement("button");
        btn.textContent = topic;
        btn.onclick = () => attemptStartFlashcard(topic);
        listDiv.appendChild(btn);
      }
      container.appendChild(listDiv);
    }

    function attemptStartFlashcard(topic) {
      if (blockDemo('flashcard')) return;
      startFlashcards(topic);
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
      
      container.scrollIntoView({ behavior: "smooth" });
      readFlashcard();
    }

    function flipCard() { isCardFront = !isCardFront; displayFlashcard(); }
    function prevFlashcard() { if (currentCardIndex > 0) { currentCardIndex--; isCardFront = true; displayFlashcard(); } }
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
        <div style="text-align: center;">
          <h2>Topic Complete!</h2>
          <p>You have reviewed all flashcards for "<strong>${currentFlashcardTopic}</strong>".</p>
        </div>
      `;
      updateProgress(currentFlashcards.length, currentFlashcards.length);

      const restartBtn = document.createElement("button");
      restartBtn.innerText = "🔁 Review Again";
      restartBtn.className = "restart-button";
      restartBtn.style.marginRight = "10px";
      restartBtn.onclick = () => attemptStartFlashcard(currentFlashcardTopic);
      container.appendChild(restartBtn);

      const previewBtn = document.createElement("button");
      previewBtn.innerText = "👁️ Preview Glossary"; 
      previewBtn.style.backgroundColor = "#007bff"; 
      previewBtn.style.color = "white";
      previewBtn.style.marginRight = "10px";
      previewBtn.onclick = generatePrintPreview;
      container.appendChild(previewBtn);

      const backBtn = document.createElement("button");
      backBtn.innerText = "⬅️ Back to Topics";
      backBtn.className = "back-button";
      backBtn.onclick = renderFlashcardTopics;
      container.appendChild(backBtn);
    }

    // === INPUT SUPPORT ===
    document.addEventListener("keydown", (e) => {
      if (!currentQuizType) return;
      if (currentQuizType === "mcq" || currentQuizType === "essay") {
        const options = document.querySelectorAll('input[type="radio"]');
        const selected = document.querySelector('input[type="radio"]:checked');
        let index = Array.from(options).indexOf(selected);
        switch (e.key) {
          case "ArrowDown": case "ArrowRight":
            if (options.length) { index = (index + 1) % options.length; options[index].checked = true; } break;
          case "ArrowUp": case "ArrowLeft":
            if (options.length) { index = (index - 1 + options.length) % options.length; options[index].checked = true; } break;
          case "1": case "a": case "A": if (options[0]) options[0].checked = true; break;
          case "2": case "b": case "B": if (options[1]) options[1].checked = true; break;
          case "3": case "c": case "C": if (options[2]) options[2].checked = true; break;
          case "4": case "d": case "D": if (options[3]) options[3].checked = true; break;
          case "Enter":
            if (currentQuizType === "mcq") checkMcqAnswer();
            if (currentQuizType === "essay") checkEssayStep();
            break;
          case " ": case "n": case "N":
            const nextBtn = document.querySelector("#result button");
            if (nextBtn) nextBtn.click();
            break;
        }
      }
      if (currentQuizType === "shortAnswer" && e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); checkShortAnswer();
      }
      if (currentQuizType === "flashcard") {
        switch (e.key) {
          case "ArrowLeft": prevFlashcard(); break;
          case "ArrowRight": nextFlashcard(); break;
          case " ": case "Enter": flipCard(); break;
        }
      }
    });

    // === TEXT-TO-SPEECH (TTS) ===
    let utterance = null;
    function updateTtsButtonText() {
      const ttsButton = document.getElementById('tts-toggle-button');
      if (ttsButton) ttsButton.textContent = ttsEnabled ? '🔊 Turn Reader Off' : '🔇 Turn Reader On';
    }
    function toggleTTS() {
      ttsEnabled = !ttsEnabled;
      localStorage.setItem("ttsEnabled", ttsEnabled);
      stopReading();
      updateTtsButtonText();
      showAppNotification(ttsEnabled ? "🔊 Reader is now ON." : "🔇 Reader is now OFF.");
    }
    function stopReading() {
      if (utterance) { window.speechSynthesis.cancel(); utterance = null; }
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
        if (questionElement) textToRead += questionElement.textContent.trim();
        if (optionsElements.length > 0) {
          textToRead += ". Options are: ";
          optionsElements.forEach((label, i) => {
            const optionText = label.textContent.replace(String.fromCharCode(65 + i) + ".", "").trim();
            textToRead += `${String.fromCharCode(65 + i)}. ${optionText}. `;
          });
        }
      } else if (currentQuizType === 'shortAnswer') {
        const questionElement = document.querySelector('.question-box p');
        if (questionElement) textToRead = questionElement.textContent.trim();
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
      readText(isCardFront ? `Front of card. ${card.front}` : `Back of card. ${card.back}`);
    }
