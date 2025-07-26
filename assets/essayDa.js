  const essayData = [// --- BI110 Term 1 Essay Simulations ---

  // 1) Microscopy & Staining
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
    title: "Gram Staining Procedure and Interpretation",
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    steps: [
      {
        q: "What is the primary purpose of Gram staining in microbiology?",
        options: [
          "To identify specific bacterial species.",
          "To determine the motility of bacteria.",
          "To differentiate bacteria based on their cell wall composition.",
          "To count the number of bacteria in a sample."
        ],
        correct: 2,
        explanation: "Gram staining is a differential staining technique used to classify bacteria into two large groups: Gram-positive and Gram-negative, based on differences in their cell wall structure."
      },
      {
        q: "What is the first step in the Gram staining procedure, and what reagent is used?",
        options: [
          "Decolorization with alcohol.",
          "Application of iodine as a mordant.",
          "Application of crystal violet as the primary stain.",
          "Counterstaining with safranin."
        ],
        correct: 2,
        explanation: "The first step is to flood the heat-fixed smear with crystal violet, which stains all bacterial cells purple."
      },
      {
        q: "What is the role of Gram's iodine in the Gram staining process?",
        options: [
          "It decolorizes Gram-negative cells.",
          "It acts as a primary stain.",
          "It forms a crystal violet-iodine complex within the cell.",
          "It counterstains Gram-negative cells pink."
        ],
        correct: 2,
        explanation: "Gram's iodine acts as a mordant, forming a large crystal violet-iodine complex that gets trapped in the thick peptidoglycan layer of Gram-positive cells."
      },
      {
        q: "What happens during the decolorization step, and how does it differentiate Gram-positive from Gram-negative bacteria?",
        options: [
          "Gram-positive cells become colorless; Gram-negative cells remain purple.",
          "Alcohol washes out the stain from Gram-negative cells due to their thin peptidoglycan layer; Gram-positive cells retain the stain.",
          "All cells turn pink.",
          "It causes both types of cells to shrink."
        ],
        correct: 1,
        explanation: "Alcohol (or acetone) is used as a decolorizer. In Gram-negative cells, it dissolves the outer membrane and washes the crystal violet-iodine complex out of their thin peptidoglycan layer, making them colorless. In Gram-positive cells, the thick peptidoglycan retains the complex, keeping them purple."
      },
      {
        q: "What is the final step in Gram staining, and what color do Gram-positive and Gram-negative bacteria appear after this step?",
        options: [
          "Washing with water; both appear blue.",
          "Application of safranin; Gram-positive are purple, Gram-negative are pink/red.",
          "Heat fixing; both appear colorless.",
          "Drying; both appear green."
        ],
        correct: 1,
        explanation: "The final step is counterstaining with safranin. Gram-positive cells remain purple, while Gram-negative cells, which were decolorized, pick up the safranin and appear pink or red."
      }
    ]
  },
  {
    course: "BI110",
    term: "T1",
    title: "Comparing Light and Electron Microscopes",
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    steps: [
      {
        q: "What type of radiation is used for imaging in a Light Microscope versus an Electron Microscope?",
        options: [
          "Sound waves vs. X-rays",
          "Visible light vs. a beam of electrons",
          "Infrared light vs. ultraviolet light",
          "Radio waves vs. microwaves"
        ],
        correct: 1,
        explanation: "Light microscopes use visible light for illumination, while electron microscopes use a beam of electrons to create an image."
      },
      {
        q: "Which type of microscope, light or electron, offers significantly higher resolution and magnification?",
        options: [
          "Light microscope",
          "Electron microscope",
          "Both have similar resolution and magnification",
          "Neither offers high resolution"
        ],
        correct: 1,
        explanation: "Electron microscopes (e.g., TEM, SEM) provide much higher resolution and magnification than light microscopes, allowing visualization of subcellular structures and even individual atoms."
      },
      {
        q: "Can living specimens be observed with a Transmission Electron Microscope (TEM)? Why or why not?",
        options: [
          "Yes, because specimens are viewed in a vacuum.",
          "No, because the vacuum and electron beam would kill the cells.",
          "Yes, if they are stained appropriately.",
          "No, because it only provides surface views."
        ],
        correct: 1,
        explanation: "No, living specimens cannot be observed with a TEM because the sample preparation involves dehydration, embedding in resin, sectioning, and viewing in a vacuum, all of which are incompatible with life."
      },
      {
        q: "What is a key advantage of using a scanning electron microscope (SEM) over a transmission electron microscope (TEM)?",
        options: [
          "SEM provides detailed internal structures; TEM provides 3D surface views.",
          "SEM is cheaper to operate; TEM is more expensive.",
          "SEM provides 3D surface topography; TEM provides detailed internal structures.",
          "SEM can view live samples; TEM cannot."
        ],
        correct: 2,
        explanation: "An SEM provides high-resolution three-dimensional images of the specimen's surface topography, whereas a TEM provides two-dimensional images of internal structures."
      }
    ]
  },
  // 2) Cell Structure & Function (+ Cell Division)
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
    title: "Key Cellular Structures and Their Roles",
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    steps: [
      {
        q: "What is the primary function of the cell membrane, and what is it primarily composed of?",
        options: [
          "Protein synthesis; DNA and RNA.",
          "Energy production; carbohydrates.",
          "Regulating passage of substances; phospholipid bilayer and proteins.",
          "Genetic information storage; lipids only."
        ],
        correct: 2,
        explanation: "The cell membrane (plasma membrane) is a selectively permeable barrier that controls what enters and exits the cell. It's primarily composed of a phospholipid bilayer with embedded and associated proteins."
      },
      {
        q: "What are ribosomes, and what crucial process do they carry out in the cell?",
        options: [
          "Membrane-bound organelles; lipid synthesis.",
          "Protein complexes; ATP synthesis.",
          "Non-membrane-bound organelles; protein synthesis (translation).",
          "Storage sacs; waste disposal."
        ],
        correct: 2,
        explanation: "Ribosomes are molecular machines (made of ribosomal RNA and protein) responsible for protein synthesis, also known as translation, where they read mRNA and assemble amino acids into polypeptide chains."
      },
      {
        q: "Differentiate between the smooth endoplasmic reticulum (SER) and the rough endoplasmic reticulum (RER) in terms of structure and function.",
        options: [
          "SER has ribosomes, RER does not; SER for protein synthesis, RER for lipid synthesis.",
          "RER has ribosomes, SER does not; RER for protein synthesis and modification, SER for lipid synthesis, detoxification, and calcium storage.",
          "Both have ribosomes; both are involved in protein synthesis.",
          "SER is only found in plant cells; RER is only in animal cells."
        ],
        correct: 1,
        explanation: "The RER is studded with ribosomes and is involved in the synthesis and folding of proteins that are destined for secretion or insertion into membranes. The SER lacks ribosomes and is involved in lipid synthesis, detoxification of drugs and poisons, and storage of calcium ions."
      },
      {
        q: "What is the primary function of the nucleus in a eukaryotic cell, and what important genetic material does it contain?",
        options: [
          "Digestion of waste; enzymes.",
          "Protein synthesis; ribosomes.",
          "Controlling cell activities and housing genetic material; DNA.",
          "Energy production; ATP."
        ],
        correct: 2,
        explanation: "The nucleus is the control center of the eukaryotic cell, housing the cell's genetic material (DNA) organized into chromosomes. It regulates gene expression and controls cell growth and metabolism."
      }
    ]
  },
  {
    course: "BI110",
    term: "T1",
    title: "The Cell Theory and its Founders",
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    steps: [
      {
        q: "Who proposed that all plants are made of cells, and what was his contribution to Cell Theory?",
        options: [
          "Theodor Schwann; stated that animals are made of cells.",
          "Rudolf Virchow; stated that cells come from pre-existing cells.",
          "Matthias Schleiden; proposed that plants are composed of cells.",
          "Robert Hooke; coined the term 'cell'."
        ],
        correct: 2,
        explanation: "Matthias Schleiden, a botanist, concluded in 1838 that all plant tissues are composed of cells and that the embryo of a plant arises from a single cell. This was a crucial step in the formulation of the cell theory."
      },
      {
        q: "Who extended the cell theory to animals, and what was his key finding?",
        options: [
          "Matthias Schleiden; found that plants are made of cells.",
          "Theodor Schwann; concluded that all animals are composed of cells.",
          "Rudolf Virchow; observed cells dividing.",
          "Anton van Leeuwenhoek; observed 'animalcules'."
        ],
        correct: 1,
        explanation: "Theodor Schwann, a zoologist, independently concluded in 1839 that all animal tissues are also composed of cells, thereby extending the cell theory to animals."
      },
      {
        q: "Which scientist is credited with adding the third postulate to the Cell Theory: 'All cells arise from pre-existing cells'?",
        options: [
          "Robert Hooke",
          "Louis Pasteur",
          "Rudolf Virchow",
          "Anton van Leeuwenhoek"
        ],
        correct: 2,
        explanation: "Rudolf Virchow famously stated 'Omnis cellula e cellula,' meaning 'every cell from a cell,' which established that cells do not spontaneously generate but arise only from the division of existing cells."
      },
      {
        q: "How did the combined work of Schleiden, Schwann, and Virchow fundamentally change the understanding of living organisms?",
        options: [
          "They discovered DNA.",
          "They showed that all life forms are fundamentally composed of and arise from cells, establishing a unifying principle of biology.",
          "They proved the theory of evolution.",
          "They developed the first vaccines."
        ],
        correct: 1,
        explanation: "Their combined contributions established the foundational Cell Theory, which provided a unifying concept for all living organisms, stating that cells are the basic units of life and that all life arises from pre-existing cells."
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
    title: "Stages of Meiosis I and Meiosis II",
    topic: "CELL DIVISION",
    year: "Notes",
    steps: [
      {
        q: "What is the primary distinguishing event that occurs during Prophase I of meiosis but not in mitosis?",
        options: [
          "Chromosome condensation.",
          "Nuclear envelope breakdown.",
          "Synapsis and crossing over.",
          "Spindle formation."
        ],
        correct: 2,
        explanation: "During Prophase I, homologous chromosomes pair up (synapsis) to form bivalents, and genetic material is exchanged between non-sister chromatids (crossing over), leading to genetic recombination."
      },
      {
        q: "How do homologous chromosomes behave during Anaphase I of meiosis?",
        options: [
          "Sister chromatids separate.",
          "Homologous chromosomes move to opposite poles of the cell.",
          "Chromosomes align at the metaphase plate.",
          "Chromosomes replicate."
        ],
        correct: 1,
        explanation: "In Anaphase I, homologous chromosomes (each still consisting of two sister chromatids) separate and move towards opposite poles, reducing the chromosome number by half."
      },
      {
        q: "What is the ploidy level of the cells at the end of Meiosis I, and what enters Meiosis II?",
        options: [
          "Diploid (2N); sister chromatids.",
          "Haploid (N); homologous chromosomes.",
          "Diploid (2N); homologous chromosomes.",
          "Haploid (N); sister chromatids."
        ],
        correct: 3,
        explanation: "At the end of Meiosis I, two haploid (N) daughter cells are formed, each containing chromosomes composed of two sister chromatids. These haploid cells then enter Meiosis II."
      },
      {
        q: "Describe the defining event of Anaphase II in meiosis, and explain its significance.",
        options: [
          "Homologous chromosomes separate; genetic diversity is created.",
          "Sister chromatids separate; results in four haploid gametes.",
          "Chromosomes align at the metaphase plate; ensures equal distribution.",
          "DNA replicates; prepares for division."
        ],
        correct: 1,
        explanation: "During Anaphase II, the sister chromatids finally separate and move to opposite poles. This separation results in four individual chromatids, which are now considered full chromosomes, leading to the formation of four haploid, genetically distinct gametes."
      }
    ]
  },
  
  // 3) Macromolecules
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
        correct: 0,
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
  },
  {
    course: "BI110",
    term: "T1",
    title: "Carbohydrates: Classes and Functions",
    topic: "MACROMOLECULES",
    year: "Notes",
    steps: [
      {
        q: "What are the three main classes of carbohydrates? Give one example for each.",
        options: [
          "Amino acids, fatty acids, nucleotides; e.g., glucose, starch, DNA.",
          "Monosaccharides, disaccharides, polysaccharides; e.g., glucose, sucrose, starch.",
          "Simple sugars, complex sugars, fibers; e.g., fructose, lactose, cellulose.",
          "Sugars, starches, glycogen; e.g., ribose, maltose, chitin."
        ],
        correct: 1,
        explanation: "The three main classes are monosaccharides (simple sugars like glucose, fructose), disaccharides (two monosaccharides linked, like sucrose, lactose), and polysaccharides (many monosaccharides linked, like starch, glycogen, cellulose)."
      },
      {
        q: "Describe the structure and primary function of starch, differentiating between amylose and amylopectin.",
        options: [
          "Starch is a lipid; stores energy in animals; amylose is branched, amylopectin is linear.",
          "Starch is a protein; structural component of plants; amylose is fibrous, amylopectin is globular.",
          "Starch is a polysaccharide; stores energy in plants; amylose is linear, amylopectin is branched.",
          "Starch is a monosaccharide; provides quick energy; both are linear."
        ],
        correct: 2,
        explanation: "Starch is a polysaccharide that serves as the primary energy storage molecule in plants. It consists of two main types: amylose (linear, unbranched chains of glucose) and amylopectin (highly branched chains of glucose)."
      },
      {
        q: "Explain the process of dehydration synthesis (condensation reaction) in carbohydrate formation, using an example.",
        options: [
          "Adding water to break a bond; e.g., glucose to starch.",
          "Removing a water molecule to form a bond; e.g., two monosaccharides forming a disaccharide.",
          "Adding a water molecule to form a bond; e.g., protein synthesis.",
          "Breaking down a polymer into monomers; e.g., hydrolysis."
        ],
        correct: 1,
        explanation: "Dehydration synthesis is a chemical reaction that links monomers together to form polymers by removing a molecule of water. For example, two monosaccharides (like glucose and fructose) combine to form a disaccharide (sucrose) by removing a water molecule."
      },
      {
        q: "What type of bond is formed when monosaccharide units are linked together to form disaccharides and polysaccharides?",
        options: ["Peptide bond", "Ester bond", "Glycosidic bond", "Hydrogen bond"],
        correct: 2,
        explanation: "Monosaccharides are linked together by glycosidic bonds through dehydration synthesis to form disaccharides and polysaccharides."
      }
    ]
  },
  {
    course: "BI110",
    term: "T1",
    title: "Lipids: Types, Structure, and Importance",
    topic: "MACROMOLECULES",
    year: "Notes",
    steps: [
      {
        q: "What is the general structural characteristic that defines lipids?",
        options: [
          "They are polymers of amino acids.",
          "They are hydrophilic and soluble in water.",
          "They are largely nonpolar and hydrophobic, making them insoluble in water.",
          "They are composed of repeating monosaccharide units."
        ],
        correct: 2,
        explanation: "Lipids are a diverse group of macromolecules characterized by their hydrophobic nature (water-fearing) due to their nonpolar hydrocarbon regions, which makes them insoluble in water."
      },
      {
        q: "Name two primary biological functions of lipids.",
        options: [
          "Genetic information storage and enzyme catalysis.",
          "Short-term energy and structural support in cell walls.",
          "Long-term energy storage and major components of cell membranes.",
          "Oxygen transport and muscle contraction."
        ],
        correct: 2,
        explanation: "Lipids serve as efficient long-term energy storage molecules (e.g., fats) and are crucial structural components of cell membranes (e.g., phospholipids and cholesterol)."
      },
      {
        q: "Describe the basic structure of a triglyceride (fat) molecule.",
        options: [
          "A phosphate group, a glycerol, and two fatty acid chains.",
          "A central carbon, an amino group, a carboxyl group, and an R-group.",
          "A glycerol molecule linked to three fatty acid chains.",
          "A sugar, a phosphate, and a nitrogenous base."
        ],
        correct: 2,
        explanation: "A triglyceride is composed of a single glycerol molecule attached to three fatty acid chains via ester linkages."
      },
      {
        q: "How does a saturated fatty acid differ from an unsaturated fatty acid in terms of chemical structure and typical physical state at room temperature?",
        options: [
          "Saturated has double bonds, liquid; Unsaturated has single bonds, solid.",
          "Saturated has no double bonds, solid; Unsaturated has one or more double bonds, liquid.",
          "Saturated has short chains, liquid; Unsaturated has long chains, solid.",
          "Saturated is only found in plants; Unsaturated is only in animals."
        ],
        correct: 1,
        explanation: "Saturated fatty acids contain only single bonds between carbon atoms in their hydrocarbon chains, allowing them to pack tightly and typically making them solid at room temperature (e.g., animal fats). Unsaturated fatty acids contain one or more double bonds, which cause kinks in their chains, preventing tight packing and typically making them liquid at room temperature (e.g., plant oils)."
      }
    ]
  },
   

 

 

  // 4) Genetics
  {
    course: "BI110",
    term: "T1",
    title: "Understanding Mendelian Genetics",
    topic: "Genetics",
    year: "Notes",
    steps: [
      {
        q: "Which scientist is famously known as the 'Father of Genetics' for his pea plant experiments?",
        options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"],
        correct: 1,
        explanation: "Gregor Mendel conducted pioneering experiments with pea plants that laid the foundation for modern genetics."
      },
      {
        q: "What is the term for the genetic makeup of an organism for a particular trait?",
        options: ["Phenotype", "Allele", "Genotype", "Chromosome"],
        correct: 2,
        explanation: "Genotype refers to the specific combination of alleles an individual possesses (e.g., TT, Tt, tt)."
      },
      {
        q: "In a monohybrid cross between two heterozygous parents (e.g., Tt x Tt), what is the expected phenotypic ratio for a trait exhibiting complete dominance?",
        options: ["1:1", "1:2:1", "3:1", "9:3:3:1"],
        correct: 2,
        explanation: "For complete dominance, a heterozygous cross typically yields a 3 dominant : 1 recessive phenotypic ratio (e.g., 3 tall : 1 short)."
      },
      {
        q: "If a true-breeding tall pea plant (TT) is crossed with a true-breeding short pea plant (tt), what will be the genotype of all F1 generation offspring?",
        options: ["TT", "tt", "Tt", "T or t"],
        correct: 2,
        explanation: "All F1 offspring will inherit one dominant allele (T) from the tall parent and one recessive allele (t) from the short parent, making them all heterozygous (Tt)."
      },
      {
        q: "Mendel's Law of Segregation explains that during gamete formation, alleles for a heritable character:",
        options: ["Combine to form new traits.", "Separate from each other so each gamete gets only one.", "Remain together and are passed on as a unit.", "Are always expressed if dominant."],
        correct: 1,
        explanation: "This law ensures that each gamete carries only one of the two alleles present in the parent cell."
      }
    ]
  },
  {
    course: "BI110",
    term: "T1",
    title: "Non-Mendelian Inheritance Patterns",
    topic: "Genetics",
    year: "Notes",
    steps: [
      {
        q: "When a red flower (RR) is crossed with a white flower (WW) and the offspring are all pink (RW), this is an example of what type of inheritance?",
        options: ["Codominance", "Complete Dominance", "Incomplete Dominance", "Sex-Linked Inheritance"],
        correct: 2,
        explanation: "In incomplete dominance, the heterozygous phenotype is an intermediate blend of the two homozygous phenotypes."
      },
      {
        q: "Human ABO blood types exhibit which type(s) of inheritance pattern(s)?",
        options: ["Incomplete Dominance only", "Codominance only", "Complete Dominance and Codominance", "Sex-Linked Inheritance"],
        correct: 2,
        explanation: "Alleles A and B are codominant (both expressed in AB blood type), while both A and B are completely dominant over allele O."
      },
      {
        q: "If a genetic trait is more commonly expressed in males than females, and follows a specific pattern of inheritance from mother to son, it is likely a(n):",
        options: ["Autosomal dominant trait", "Autosomal recessive trait", "Y-linked trait", "X-linked recessive trait"],
        correct: 3,
        explanation: "X-linked recessive traits often affect males more because they have only one X chromosome, so a single recessive allele on it will be expressed."
      },
      {
        q: "Which tool is commonly used by genetic counselors to trace the inheritance of genetic traits through multiple generations within a family?",
        options: ["Punnett Square", "Karyotype", "Pedigree Chart", "DNA Fingerprint"],
        correct: 2,
        explanation: "A pedigree chart graphically represents family relationships and the inheritance of a trait across generations."
      },
      {
        q: "A trait like human height, which shows continuous variation in a population and is influenced by multiple genes, is an example of:",
        options: ["Monogenic inheritance", "Pleiotropy", "Polygenic inheritance", "Epistasis"],
        correct: 2,
        explanation: "Polygenic inheritance involves the additive effect of two or more genes on a single phenotypic character, leading to a spectrum of phenotypes."
      }
    ]
  },
  {
    course: "BI110",
    term: "T1",
    title: "Applying Punnett Squares: Monohybrid and Dihybrid Crosses",
    topic: "Genetics",
    year: "Notes",
    steps: [
      {
        q: "In a monohybrid cross, what specific ratio of genotypes is expected in the F2 generation when starting with a true-breeding dominant parent and a true-breeding recessive parent for a trait exhibiting complete dominance?",
        options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
        correct: 2,
        explanation: "After crossing true-breeding parents (e.g., AA x aa) to get F1 (all Aa), a self-cross of F1 (Aa x Aa) will result in a 1 AA : 2 Aa : 1 aa genotypic ratio in the F2 generation."
      },
      {
        q: "Consider a dihybrid cross involving two traits, each with complete dominance. If two parents heterozygous for both traits (AaBb x AaBb) are crossed, what is the expected phenotypic ratio in the offspring?",
        options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
        correct: 3,
        explanation: "For a dihybrid cross between two double heterozygotes with complete dominance, the classic phenotypic ratio is 9 dominant for both traits : 3 dominant for one/recessive for other : 3 recessive for one/dominant for other : 1 recessive for both traits."
      },
      {
        q: "Explain how Mendel's Law of Independent Assortment is demonstrated in a dihybrid cross.",
        options: [
          "It shows that alleles for one gene segregate together.",
          "It demonstrates that traits are always linked on the same chromosome.",
          "It illustrates that alleles for different genes assort independently of each other during gamete formation.",
          "It explains incomplete dominance."
        ],
        correct: 2,
        explanation: "The Law of Independent Assortment states that alleles for different traits (on different chromosomes or far apart on the same chromosome) are distributed to gametes independently of one another. A dihybrid cross visually demonstrates this, as the inheritance of one trait does not influence the inheritance of the other."
      },
      {
        q: "If you observe an organism with a dominant phenotype, how can a test cross (crossing it with a homozygous recessive individual) help determine its genotype?",
        options: [
          "It will always reveal a homozygous dominant genotype.",
          "It will always reveal a heterozygous genotype.",
          "If any offspring show the recessive phenotype, the unknown parent must be heterozygous; if all offspring show the dominant phenotype, the unknown parent is likely homozygous dominant.",
          "It only works for recessive phenotypes."
        ],
        correct: 2,
        explanation: "A test cross helps determine if an individual with a dominant phenotype is homozygous dominant (AA) or heterozygous (Aa). If the unknown individual is heterozygous (Aa), approximately half of the offspring from the test cross will display the recessive phenotype. If the unknown individual is homozygous dominant (AA), all offspring will display the dominant phenotype."
      }
    ]
  },
  
  //const flashcards_genetics = 
  {
  "Mendelian Genetics": [
    {
      front: "Who is known as the 'father of genetics'?",
      back: "Gregor Mendel.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "What is Mendel's Law of Segregation?",
      back: "Alleles for each gene separate during gamete formation, so each gamete carries only one allele.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "What is Mendel's Law of Independent Assortment?",
      back: "Genes for different traits assort independently of one another during gamete formation (if they are on different chromosomes or far apart on the same chromosome).",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    }
  ],
  "Genetic Terminology": [
    {
      front: "Define 'allele'.",
      back: "An alternative form of a gene.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "Define 'genotype'.",
      back: "The genetic makeup of an organism (e.g., TT, Tt, tt).",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "Define 'phenotype'.",
      back: "The observable physical or biochemical characteristics of an organism (e.g., Tall, Dwarf).",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "What is a 'test cross'?",
      back: "A cross between an individual with an unknown dominant phenotype and a homozygous recessive individual to determine the unknown genotype.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "What is 'linkage'?",
      back: "Genes located on the same chromosome that tend to be inherited together.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    },
    {
      front: "What is 'co-dominance'?",
      back: "A genetic situation where both alleles in a heterozygote are fully and distinctly expressed in the phenotype.",
      course: "BI110",
      term: "T1",
      topic: "Genetics"
    }
  ]
  },
   
   {
  type: "EssaySimulation",
  topic: "Cell Structure & Functions",
  year: "BI110 Master Guide (General Knowledge)",
  tag: "Cell Biology",
  title: "Structure and Function of a Eukaryotic Cell",
  steps: [
    {
      q: "Describe the defining feature of eukaryotic cells that differentiates them from prokaryotic cells.",
      options: [
        "Presence of ribosomes.",
        "Presence of a cell wall.",
        "Presence of a membrane-bound nucleus and other membrane-bound organelles.",
        "Ability to perform photosynthesis."
      ],
      correct: 2,
      explanation: "Eukaryotic cells are characterized by the presence of a true nucleus, which houses the genetic material (DNA) within a nuclear envelope, and various other membrane-bound organelles (like mitochondria, ER, Golgi apparatus, lysosomes) that compartmentalize cellular functions."
    },
    {
      q: "Discuss the structure and primary function of the nucleus in a eukaryotic cell.",
      options: [
        "Site of protein synthesis, contains ribosomes.",
        "Powerhouse of the cell, produces ATP.",
        "Houses the cell's genetic material (DNA) and controls cell activities by regulating gene expression.",
        "Responsible for packaging and modifying proteins."
      ],
      correct: 2,
      explanation: "The nucleus is a large, often spherical organelle enclosed by a double membrane (nuclear envelope) with nuclear pores. Its primary function is to store and protect the cell's DNA, which is organized into chromosomes. It also controls cell growth, metabolism, and reproduction by regulating gene expression (transcription)."
    },
    {
      q: "Explain the roles of the Endoplasmic Reticulum (ER) and Golgi apparatus in protein synthesis and modification.",
      options: [
        "ER produces ATP; Golgi stores waste.",
        "ER is involved in DNA replication; Golgi in cell division.",
        "Rough ER synthesizes and folds proteins (with ribosomes), smooth ER synthesizes lipids. Golgi modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles.",
        "Both ER and Golgi are involved in photosynthesis."
      ],
      correct: 2,
      explanation: "The Rough Endoplasmic Reticulum (RER) is studded with ribosomes and is involved in the synthesis, folding, modification, and transport of proteins destined for secretion or insertion into membranes. The Smooth Endoplasmic Reticulum (SER) synthesizes lipids, detoxifies drugs, and stores calcium. The Golgi apparatus (or Golgi complex) receives proteins and lipids from the ER, further modifies them, sorts them into vesicles, and packages them for transport to their final destinations."
    },
    {
      q: "Describe the structure and function of mitochondria.",
      options: [
        "Single membrane, performs photosynthesis.",
        "Double membrane with cristae, performs cellular respiration to produce ATP.",
        "Site of protein synthesis, part of cytoskeleton.",
        "Responsible for waste disposal and detoxification."
      ],
      correct: 1,
      explanation: "Mitochondria are double-membraned organelles, with the inner membrane folded into cristae to increase surface area. They are often called the 'powerhouses of the cell' because their primary function is cellular respiration, which generates most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
    },
    {
      q: "Briefly explain the function of ribosomes and the cell membrane.",
      options: [
        "Ribosomes store genetic information; cell membrane provides rigidity.",
        "Ribosomes perform lipid synthesis; cell membrane controls cell shape.",
        "Ribosomes are the sites of protein synthesis (translation). The cell membrane regulates the passage of substances into and out of the cell and mediates cell-cell communication.",
        "Ribosomes generate ATP; cell membrane transports waste."
      ],
      correct: 2,
      explanation: "Ribosomes are non-membranous organelles responsible for protein synthesis (translation), where they read mRNA sequences and assemble amino acids into polypeptide chains. The cell membrane (plasma membrane) is a selectively permeable phospholipid bilayer that forms the boundary of the cell, controlling what enters and leaves, and enabling communication with the external environment."
    }
  ],
  course: "BI110",
  term: "T1"
},

{
  type: "EssaySimulation",
  topic: "Cell Division",
  year: "BI110 Master Guide (General Knowledge)",
  tag: "Process",
  title: "Stages and Importance of Mitosis",
  steps: [
    {
      q: "What is the primary purpose of mitosis in eukaryotic organisms?",
      options: [
        "To produce gametes for sexual reproduction.",
        "To reduce the chromosome number by half.",
        "To produce two genetically identical daughter cells from a single parent cell for growth, repair, and asexual reproduction.",
        "To increase genetic diversity in offspring."
      ],
      correct: 2,
      explanation: "Mitosis is a type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus, typical of ordinary tissue growth."
    },
    {
      q: "Describe the key events occurring during Prophase of mitosis.",
      options: [
        "Sister chromatids separate.",
        "Chromosomes align at the metaphase plate.",
        "Chromatin condenses into visible chromosomes, nuclear envelope disappears, and spindle fibers begin to form.",
        "Cytokinesis begins."
      ],
      correct: 2,
      explanation: "In Prophase, chromatin fibers coil and condense into distinct, visible chromosomes, each consisting of two sister chromatids joined at the centromere. The nucleolus disappears, the nuclear envelope breaks down, and the mitotic spindle (composed of microtubules) begins to form from the centrosomes."
    },
    {
      q: "What is the defining event of Metaphase in mitosis?",
      options: [
        "Chromosomes decondense.",
        "Sister chromatids separate and move to opposite poles.",
        "Chromosomes align along the metaphase plate (equatorial plate) of the cell.",
        "Spindle fibers attach to the nuclear envelope."
      ],
      correct: 2,
      explanation: "During Metaphase, all the duplicated chromosomes are precisely aligned in a single plane at the center of the cell, known as the metaphase plate or equatorial plate. Each sister chromatid is attached to a spindle fiber originating from opposite poles."
    },
    {
      q: "Describe the events that characterize Anaphase of mitosis.",
      options: [
        "Nuclear envelope reforms.",
        "Sister chromatids separate and move towards opposite poles of the cell.",
        "Chromosomes condense further.",
        "Cytokinesis divides the cytoplasm."
      ],
      correct: 1,
      explanation: "Anaphase is a rapid stage where the sister chromatids suddenly separate from each other, becoming individual chromosomes. These newly separated chromosomes are pulled by the shortening spindle fibers towards opposite poles of the cell, ensuring that each new daughter cell receives a complete and identical set of chromosomes."
    },
    {
      q: "What occurs during Telophase and Cytokinesis in mitosis, and what is their combined importance?",
      options: [
        "DNA replication; formation of spindle fibers.",
        "Chromosomes align; nuclear envelope breaks down.",
        "Telophase: Chromosomes arrive at poles, decondense; nuclear envelopes reform. Cytokinesis: Cytoplasm divides, forming two distinct daughter cells. Importance: Ensures genetic continuity and allows for growth, tissue repair, and asexual reproduction.",
        "Crossing over occurs; homologous chromosomes separate."
      ],
      correct: 2,
      explanation: "In Telophase, the separated chromosomes reach the poles, begin to decondense, and new nuclear envelopes form around each set of chromosomes, forming two new nuclei. Cytokinesis, which usually overlaps with telophase, is the division of the cytoplasm, resulting in two separate, genetically identical daughter cells. The importance of mitosis lies in its role in growth, tissue repair, development, and asexual reproduction, maintaining a constant chromosome number and genetic integrity."
    }
  ],
  course: "BI110",
  term: "T1"
},

{
  type: "EssaySimulation",
  topic: "Macromolecules (Carbohydrates)",
  year: "BI110 Master Guide (General Knowledge)",
  tag: "Biochemistry",
  title: "Carbohydrates: Classes, Formation, and Functions",
  steps: [
    {
      q: "What are the three main classes of carbohydrates based on their complexity, and what are their basic monomer units?",
      options: [
        "Amino acids, fatty acids, nucleotides.",
        "Monosaccharides, disaccharides, polysaccharides; monomer unit is monosaccharide.",
        "Glucose, fructose, sucrose.",
        "Simple sugars, complex sugars, fibers."
      ],
      correct: 1,
      explanation: "Carbohydrates are broadly classified into monosaccharides (simple sugars, the basic monomer unit), disaccharides (two monosaccharides linked), and polysaccharides (many monosaccharides linked). Their basic building block is the monosaccharide."
    },
    {
      q: "How are disaccharides and polysaccharides formed from monosaccharides?",
      options: [
        "Through hydrolysis reactions, adding water.",
        "Through dehydration synthesis (condensation) reactions, removing water.",
        "Through peptide bond formation.",
        "Through ionic bond formation."
      ],
      correct: 1,
      explanation: "Disaccharides and polysaccharides are formed by joining monosaccharide units together through dehydration synthesis (also called condensation reactions). In this process, a molecule of water is removed for each glycosidic bond formed between two sugar units."
    },
    {
      q: "Give an example of a common disaccharide and a common polysaccharide, and state their general functions.",
      options: [
        "Sucrose (disaccharide, energy storage); Starch (polysaccharide, structural support).",
        "Glucose (monosaccharide, energy source); Cellulose (polysaccharide, energy storage).",
        "Lactose (disaccharide, milk sugar); Glycogen (polysaccharide, energy storage in animals).",
        "Fructose (monosaccharide, fruit sugar); Chitin (polysaccharide, plant cell walls)."
      ],
      correct: 2,
      explanation: "Examples: Sucrose (table sugar, glucose + fructose) is a common disaccharide involved in sugar transport in plants. Starch (plant energy storage) and Glycogen (animal energy storage) are common polysaccharides. Cellulose (plant cell walls) and Chitin (fungal cell walls, insect exoskeletons) are common structural polysaccharides. Generally, carbohydrates serve as primary energy sources, energy storage, and structural components."
    },
    {
      q: "Summarize the primary functions of carbohydrates in living organisms.",
      options: [
        "Genetic information storage and transmission.",
        "Enzymatic catalysis and structural support.",
        "Primary source of energy (e.g., glucose), energy storage (e.g., starch, glycogen), and structural components (e.g., cellulose, chitin).",
        "Hormone production and insulation."
      ],
      correct: 2,
      explanation: "The main functions of carbohydrates include providing immediate energy (e.g., glucose), serving as readily available energy reserves (e.g., starch in plants, glycogen in animals), and acting as structural components (e.g., cellulose in plant cell walls, chitin in fungal cell walls and arthropod exoskeletons)."
    }
  ],
  course: "BI110",
  term: "T1"
},

{
  type: "EssaySimulation",
  topic: "Macromolecules (Proteins)",
  year: "BI110 Master Guide (General Knowledge)",
  tag: "Biochemistry",
  title: "Levels of Protein Structure and Associated Bonds",
  steps: [
    {
      q: "Describe the primary level of protein structure and the type of bond involved.",
      options: [
        "Overall 3D shape; hydrogen bonds.",
        "Linear sequence of amino acids; peptide bonds.",
        "Alpha-helices and beta-sheets; disulfide bridges.",
        "Arrangement of multiple polypeptide chains; ionic bonds."
      ],
      correct: 1,
      explanation: "The primary structure is the unique, linear sequence of amino acids linked together by **peptide bonds**. This sequence is determined by the genetic code in the DNA and dictates all higher levels of protein structure."
    },
    {
      q: "Explain the secondary level of protein structure and the bonds that stabilize it.",
      options: [
        "Interactions between R-groups; covalent bonds.",
        "Local folding of the polypeptide chain into alpha-helices and beta-pleated sheets; stabilized by **hydrogen bonds** between the backbone atoms.",
        "Arrangement of subunits; hydrophobic interactions.",
        "Overall 3D shape of a single polypeptide; van der Waals forces."
      ],
      correct: 1,
      explanation: "The secondary structure refers to the local, regular folding patterns of the polypeptide backbone. The most common forms are the alpha-helix ($ \\alpha $-helix) and the beta-pleated sheet ($ \\beta $-pleated sheet). These structures are stabilized by **hydrogen bonds** that form between the carbonyl oxygen of one peptide bond and the amino hydrogen of another peptide bond within the polypeptide backbone."
    },
    {
      q: "Describe the tertiary level of protein structure and the various types of interactions involved.",
      options: [
        "Linear sequence of amino acids; peptide bonds only.",
        "The overall three-dimensional shape of a single polypeptide chain; stabilized by interactions between the R-groups (side chains) of amino acids.",
        "Arrangement of multiple subunits; hydrogen bonds.",
        "Simple folding into helices; ionic bonds."
      ],
      correct: 1,
      explanation: "The tertiary structure is the comprehensive three-dimensional conformation of a single polypeptide chain, resulting from interactions between the R-groups (side chains) of the amino acids. These interactions include **hydrophobic interactions** (nonpolar groups clustering away from water), **hydrogen bonds**, **ionic bonds**, and strong **disulfide bridges** (covalent bonds between cysteine side chains)."
    },
    {
      q: "Explain the quaternary level of protein structure and when it is observed.",
      options: [
        "Found in all proteins, involves only peptide bonds.",
        "The arrangement and interaction of multiple polypeptide subunits (two or more tertiary structures) to form a functional protein complex; observed only in proteins with more than one polypeptide chain.",
        "Simple linear sequence of amino acids; involves DNA.",
        "Folding of a single polypeptide into a helix; only in structural proteins."
      ],
      correct: 1,
      explanation: "The quaternary structure is observed only in proteins that consist of two or more polypeptide chains (subunits). It describes the specific arrangement and interactions of these multiple polypeptide subunits to form a larger, functional protein complex. The same types of weak interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) and sometimes disulfide bridges that stabilize tertiary structure also hold these subunits together."
    }
  ],
  course: "BI110",
  term: "T1"
},



  // more topics here 
];
  