const essayData = [
  // --- BI110 Term 1 Essay Simulations ---

  {
    course: "BI110",
    term: "T1",
    title: "Understanding Light Microscopy",
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    steps: [
      {
        q: "What is the basic principle by which a light microscope magnifies an image?",
        options: ["Diffraction of light", "Refraction of light by lenses", "Absorption of light by the specimen", "Reflection of light from mirrors"],
        correct: 1,
        explanation: "A light microscope works on the principle of refraction, where lenses bend light rays from the illuminator to converge at a focal point, thereby magnifying the image."
      },
      {
        q: "In a bright-field microscope, what is the role of the condenser?",
        options: ["To magnify the specimen", "To illuminate the specimen evenly", "To focus light onto the specimen", "To hold the objective lenses"],
        correct: 2,
        explanation: "The condenser gathers light from the illuminator and focuses it into a concentrated beam that passes through the specimen on the slide."
      },
      {
        q: "How does adjusting the aperture diaphragm affect the image in a bright-field microscope?",
        options: ["It changes the magnification.", "It controls the contrast and resolution.", "It adjusts the focus.", "It changes the color of the light."],
        correct: 1,
        explanation: "The aperture diaphragm regulates the amount of light that passes through the specimen. Closing it increases contrast but can decrease resolution, while opening it increases resolution but decreases contrast."
      },
      {
        q: "Define 'resolution' in the context of microscopy and explain why it is crucial.",
        options: ["The ability to make an image appear larger.", "The clarity of the image.", "The ability to distinguish two closely spaced objects as separate.", "The amount of light passing through the specimen."],
        correct: 2,
        explanation: "Resolution is the ability of a microscope to distinguish between two adjacent points or objects as separate entities. It is crucial because high resolution allows for the visualization of fine details and structures within a specimen."
      },
      {
        q: "What is the significance of using immersion oil with certain objective lenses?",
        options: ["To increase the working distance.", "To reduce light scattering and increase numerical aperture.", "To stain the specimen.", "To cool down the objective lens."],
        correct: 1,
        explanation: "Immersion oil has a refractive index similar to glass. When placed between the objective lens and the slide, it reduces the amount of light that is refracted and lost as it passes from the slide into the air, thereby increasing the numerical aperture and improving resolution."
      }
    ]
  },

  {
    course: "BI110",
    term: "T1",
    title: "Differentiating Cell Types and Organelles",
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    steps: [
      {
        q: "What are the three main postulates of the Cell Theory?",
        options: [
          "All living things have DNA, reproduce, and grow.",
          "All cells are the same size, shape, and function.",
          "The cell is the basic unit of life; all organisms are made of cells; all cells come from pre-existing cells.",
          "Cells can spontaneously generate from non-living matter."
        ],
        correct: 2,
        explanation: "The Cell Theory states that the cell is the basic structural and functional unit of all known living organisms, all living organisms are composed of one or more cells, and all cells arise from pre-existing cells by division."
      },
      {
        q: "List three key differences between prokaryotic and eukaryotic cells.",
        options: [
          "Prokaryotic cells have a nucleus, eukaryotic cells do not; prokaryotic cells are larger; eukaryotic cells lack ribosomes.",
          "Prokaryotic cells lack a true nucleus and membrane-bound organelles; eukaryotic cells have a true nucleus and membrane-bound organelles; prokaryotic DNA is circular, eukaryotic DNA is linear.",
          "Prokaryotic cells perform photosynthesis, eukaryotic cells do not; prokaryotic cells have a cell wall, eukaryotic cells do not.",
          "Prokaryotic cells are multicellular, eukaryotic cells are unicellular."
        ],
        correct: 1,
        explanation: "Key differences include: prokaryotic cells lack a true nucleus and membrane-bound organelles (eukaryotic cells have them); prokaryotic DNA is typically circular in the nucleoid region (eukaryotic DNA is linear and in the nucleus); prokaryotic cells are generally smaller and simpler."
      },
      {
        q: "Describe the interconnected functions of the Endoplasmic Reticulum (ER) and the Golgi apparatus in protein modification and transport.",
        options: [
          "ER stores proteins; Golgi produces ATP.",
          "ER synthesizes proteins; Golgi breaks them down.",
          "ER synthesizes and initially modifies proteins; Golgi further modifies, sorts, and packages them for delivery.",
          "ER is for lipid synthesis; Golgi is for DNA replication."
        ],
        correct: 2,
        explanation: "Proteins destined for secretion or other organelles are synthesized and undergo initial folding/modification in the ER (especially Rough ER). They then move to the Golgi apparatus, where they are further processed, sorted into vesicles, and dispatched to their final cellular or extracellular destinations."
      },
      {
        q: "Explain why mitochondria are called the 'powerhouse of the cell' and mention a key structural feature related to their function.",
        options: [
          "They store light energy; they are green.",
          "They carry genetic information; they are spiral-shaped.",
          "They generate ATP through cellular respiration; they have a highly folded inner membrane (cristae).",
          "They detoxify drugs; they are composed of flat sacs."
        ],
        correct: 2,
        explanation: "Mitochondria are the 'powerhouse' because they are the primary sites of cellular respiration, producing most of the cell's ATP. Their inner membrane is extensively folded into 'cristae,' which increases the surface area for the enzymes involved in ATP synthesis, maximizing efficiency."
      }
    ]
  },

  {
    course: "BI110",
    term: "T1",
    title: "Comparing Mitosis and Meiosis",
    topic: "CELL DIVISION",
    year: "Notes",
    steps: [
      {
        q: "What is the main goal of mitosis, and what kind of cells does it produce?",
        options: [
          "To produce four haploid gametes.",
          "To produce two genetically identical diploid somatic cells.",
          "To produce cells with half the number of chromosomes.",
          "To create genetic diversity through crossing over."
        ],
        correct: 1,
        explanation: "The main goal of mitosis is to produce two daughter cells that are genetically identical to the parent cell, with the same diploid (2N) chromosome number. This process is essential for growth, tissue repair, and asexual reproduction."
      },
      {
        q: "Briefly describe the key events that occur during Interphase, prior to mitosis.",
        options: [
          "Cell division and separation.",
          "DNA replication, cell growth, and organelle duplication.",
          "Chromosome condensation and nuclear envelope breakdown.",
          "Sister chromatid separation."
        ],
        correct: 1,
        explanation: "Interphase is the preparatory phase for cell division, comprising G1 (cell growth, protein synthesis), S (DNA replication, chromosome duplication), and G2 (further growth, preparation for mitosis)."
      },
      {
        q: "Sequence the main phases of mitosis and describe the defining event of Metaphase.",
        options: [
          "Prophase, Anaphase, Metaphase, Telophase; DNA replication occurs.",
          "Prophase, Metaphase, Anaphase, Telophase; Chromosomes align at the metaphase plate.",
          "Interphase, Prophase, Metaphase, Anaphase; Nuclear membrane reforms.",
          "Anaphase, Telophase, Prophase, Metaphase; Cytoplasm divides."
        ],
        correct: 1,
        explanation: "The sequence is Prophase, Metaphase, Anaphase, Telophase. Metaphase is defined by the precise alignment of all condensed chromosomes along the equatorial plane (metaphase plate) of the cell."
      },
      {
        q: "How does Anaphase contribute to ensuring genetic continuity in daughter cells during mitosis?",
        options: [
          "It condenses the chromosomes.",
          "It allows for crossing over between homologous chromosomes.",
          "It separates sister chromatids, pulling identical genetic material to opposite poles.",
          "It reforms the nuclear envelope around the chromosomes."
        ],
        correct: 2,
        explanation: "During Anaphase, the sister chromatids, which are identical copies, separate at their centromeres and are pulled to opposite poles of the cell. This ensures that each nascent daughter nucleus receives a complete and identical set of chromosomes."
      },
      {
        q: "Explain two major differences between mitosis and meiosis.",
        options: [
          "Mitosis produces haploid cells; Meiosis produces diploid cells. Mitosis involves two divisions; Meiosis involves one.",
          "Mitosis is for growth and repair; Meiosis is for sexual reproduction. Mitosis produces identical cells; Meiosis produces genetically diverse cells.",
          "Mitosis only occurs in plants; Meiosis only occurs in animals. Mitosis produces 4 cells; Meiosis produces 2 cells.",
          "Mitosis involves DNA replication; Meiosis does not involve DNA replication."
        ],
        correct: 1,
        explanation: "Two major differences are: Mitosis results in two genetically identical diploid daughter cells (for growth, repair, asexual reproduction), while Meiosis results in four genetically distinct haploid daughter cells (for sexual reproduction). Meiosis involves two rounds of cell division, whereas mitosis involves one."
      }
    ]
  },

  {
    course: "BI110",
    term: "T1",
    title: "Structure and Function of Macromolecules",
    topic: "MACROMOLECULES",
    year: "Notes",
    steps: [
      {
        q: "Name the four major classes of biological macromolecules and provide a primary function for each.",
        options: [
          "Vitamins (energy), Minerals (structure), Water (transport), Gases (respiration).",
          "Carbohydrates (energy), Lipids (storage/membranes), Proteins (structure/enzymes), Nucleic Acids (genetic information).",
          "Sugars (structure), Fats (genetic info), Amino Acids (energy), DNA (enzymes).",
          "Monosaccharides (storage), Disaccharides (genetic), Polysaccharides (enzymes), Amino Acids (membranes)."
        ],
        correct: 1,
        explanation: "The four major classes are Carbohydrates (primary energy source, structural components), Lipids (long-term energy storage, cell membrane components), Proteins (diverse functions including enzymes, structure, transport, defense), and Nucleic Acids (store and transmit genetic information)."
      },
      {
        q: "Describe the monomer and main function of carbohydrates, giving an example of a polysaccharide and its role.",
        options: [
          "Amino acid; genetic storage; DNA.",
          "Fatty acid; membrane formation; cholesterol.",
          "Monosaccharide; energy source/structure; cellulose (plant cell walls).",
          "Nucleotide; enzyme function; hemoglobin."
        ],
        correct: 2,
        explanation: "The monomer of carbohydrates is the monosaccharide (e.g., glucose). Their main function is as a readily available energy source and for structural support. An example of a polysaccharide is cellulose, which forms the strong structural components of plant cell walls."
      },
      {
        q: "Explain the four levels of protein structure and how they contribute to a protein's overall shape and function.",
        options: [
          "Primary (amino acid sequence), Secondary (alpha-helix/beta-sheet), Tertiary (3D folding), Quaternary (multiple polypeptides). Each level is crucial for the specific 3D shape and function.",
          "Only Primary (amino acid sequence) determines function.",
          "Tertiary structure is always simple and linear.",
          "Quaternary structure is present in all proteins."
        ],
        correct: 0, // This should map to an index in the options array
        explanation: "The four levels are: Primary (linear sequence of amino acids); Secondary (local folding into alpha-helices or beta-sheets stabilized by hydrogen bonds); Tertiary (overall 3D shape of a single polypeptide chain due to R-group interactions); Quaternary (arrangement of multiple polypeptide chains). Each level dictates the subsequent one, collectively forming the precise 3D conformation essential for a protein's specific biological function."
      },
      {
        q: "Differentiate between the structure and primary roles of DNA and RNA.",
        options: [
          "DNA is single-stranded, RNA is double-stranded; DNA makes proteins, RNA stores genetic info.",
          "DNA has ribose sugar, RNA has deoxyribose; DNA is found only in the nucleus, RNA only in cytoplasm.",
          "DNA is a double helix with deoxyribose, stores genetic info; RNA is single-stranded with ribose, involved in protein synthesis and gene expression.",
          "Both DNA and RNA are identical in structure and function."
        ],
        correct: 2,
        explanation: "DNA (Deoxyribonucleic Acid) is typically a double helix, contains deoxyribose sugar, and its primary role is to store and transmit genetic information. RNA (Ribonucleic Acid) is typically single-stranded, contains ribose sugar, and its primary roles include mediating gene expression and synthesizing proteins (mRNA, tRNA, rRNA)."
      }
    ]
  },// more topics here 
];