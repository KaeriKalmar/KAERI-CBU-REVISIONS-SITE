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
  
  
  //Bi110 term 3
  //const essayData = [
  {
    course: "BI110",
    term: "T3",
    title: "General Features and Classification of Bryophytes",
    topic: "THE BRYOPHYTES",
    year: "Notes",
    steps: [
      {
        q: "How do bryophytes primarily differ from algae in terms of their habitat, and what does this imply about their evolutionary position?",
        options: [
          "Bryophytes are exclusively aquatic, while algae are terrestrial; they are less evolved.",
          "Bryophytes are terrestrial, while algae are aquatic; they represent a transitional form to land plants.",
          "Both are aquatic; bryophytes are more complex.",
          "Both are terrestrial; bryophytes are simpler."
        ],
        correct: 1,
        explanation: "Unlike algae, bryophytes are terrestrial dwellers, making them a transitional form of plants placed between algae and vascular plants, demonstrating an adaptation to life on land."
      },
      {
        q: "What is the specialized term used to describe bryophytes concerning their vascular tissue, and what structures do they use for absorption and anchorage?",
        options: [
          "Tracheophytes; true roots and stems.",
          "Vascular plants; xylem and phloem.",
          "Non-tracheophytes; rhizoids for absorption and anchorage.",
          "Angiosperms; tap roots and fibrous roots."
        ],
        correct: 2,
        explanation: "Bryophytes are best described as non-tracheophytes or non-vascular plants. They lack true roots but possess rhizoids, which serve the dual function of absorbing water and salts and anchoring the plant to its substratum."
      },
      {
        q: "What is the primary function of the cutin-coated epidermis in bryophytes, and how do they facilitate gaseous exchange?",
        options: [
          "Photosynthesis; stomata.",
          "Nutrient storage; lenticels.",
          "Protection against desiccation; numerous air pores.",
          "Water transport; xylem vessels."
        ],
        correct: 2,
        explanation: "The cutin-coated epidermis in bryophytes primarily provides protection against desiccation (drying out). Gaseous exchange is facilitated by numerous air pores present on their surface."
      },
      {
        q: "What constitutes the 'thallus body' of a bryophyte, and how do their gametophyte 'stems' and 'leaves' differ from those of vascular plants?",
        options: [
          "It is fully differentiated into true roots, stems, and leaves; they have true internal veins.",
          "It is a plant body differentiated into true roots, stems, but not leaves; they lack internal veins.",
          "It is a plant body not differentiated into roots, stems, and leaves; their 'stems' and 'leaves' are without internal 'veins'.",
          "It is an undifferentiated blob; they have no stem-like or leaf-like structures."
        ],
        correct: 2,
        explanation: "A 'thallus body' in bryophytes refers to a plant body not differentiated into true roots, stems, and leaves. While their gametophytes have structures resembling stems and leaves, a key distinction is that these structures are without internal 'veins' (vascular tissue)."
      },
      {
        q: "Name the three phyla (divisions) of bryophytes and identify the class for Liverworts and Hornworts, along with a distinguishing morphological feature for each.",
        options: [
          "Hepatophyta (Liverworts), Pteridophyta (Ferns), Bryophyta (Mosses); Liverworts have true leaves; Hornworts have vascular tissue.",
          "Hepatophyta (Liverworts), Anthocerophyta (Hornworts), Bryophyta (Mosses); Liverworts (Class Hepatopsida) have a thalloid body; Hornworts (Class Anthocerotopsida) have a thallus bearing a horn-like structure.",
          "Bryophyta (Mosses), Hepatophyta (Liverworts), Angiosperms; Mosses are aquatic; Liverworts have rhizomes.",
          "Anthocerophyta (Hornworts), Bryophyta (Mosses), Gymnosperms; Hornworts have true roots; Mosses are non-vascular."
        ],
        correct: 1,
        explanation: "The three phyla of bryophytes are Phylum Hepatophyta (Liverworts, Class Hepatopsida), Phylum Anthocerophyta (Hornworts, Class Anthocerotopsida), and Phylum Bryophyta (Mosses). Liverworts are characterized by a thalloid plant body, while Hornworts are distinct due to their thallus bearing a horn-like (sporophyte) structure."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Reproduction and Life Cycle of Mosses",
    topic: "THE BRYOPHYTES",
    year: "Notes",
    steps: [
      {
        q: "What is the ploidy level of the dominant stage in the moss life cycle, and what is this stage called?",
        options: [
          "Diploid; sporophyte.",
          "Haploid; sporophyte.",
          "Diploid; gametophyte.",
          "Haploid; gametophyte."
        ],
        correct: 3,
        explanation: "In the life cycle of mosses, the gametophyte (gamete-bearing structure) is the most dominant stage and is haploid (n)."
      },
      {
        q: "What structures are released from the moss sporophyte capsule, and what do they germinate into upon landing in a suitable environment?",
        options: [
          "Zygotes; new sporophytes.",
          "Gametophytes; antheridia and archegonia.",
          "Spores; protonemata.",
          "Seeds; young moss plants."
        ],
        correct: 2,
        explanation: "The capsule of a moss sporophyte contains numerous spores. When these spores are released and land in a suitable moist environment, they germinate into filamentous green structures called protonemata (protonema)."
      },
      {
        q: "What develops from the protonema, and where do the sexual reproductive organs form on this new structure?",
        options: [
          "Sporophyte; on the foot.",
          "Zygote; within the venter.",
          "Young moss plants (gametophytes); at the apex of the moss stems.",
          "Seta; on the capsule."
        ],
        correct: 2,
        explanation: "From the protonema, nodes develop, which then give rise to young moss plants, representing the mature gametophyte. Both antheridia (male sexual organs) and archegonia (female sexual organs) develop at the apex of these moss stems."
      },
      {
        q: "What type of gametes do antheridia and archegonia produce, respectively, and what is essential for fertilization to occur?",
        options: [
          "Eggs and spores; wind.",
          "Sperm cells and egg cells; water.",
          "Spores and zygotes; insects.",
          "Pollen and ovules; dry conditions."
        ],
        correct: 1,
        explanation: "Antheridia contain motile sperm cells, while archegonia contain non-motile egg cells. Water is absolutely essential for fertilization, as it facilitates the movement of the sperm cells towards the archegonia to reach and fuse with the egg cell."
      },
      {
        q: "What is the product of fertilization in mosses, and what is its nutritional relationship with the gametophyte?",
        options: [
          "A spore, which is independent of the gametophyte.",
          "A protonema, which feeds on the gametophyte.",
          "A zygote, which develops into a sporophyte that is nutritionally dependent on the gametophyte.",
          "A gametophyte, which is nutritionally dependent on the sporophyte."
        ],
        correct: 2,
        explanation: "The fusion of a sperm cell and an egg cell results in a diploid zygote. This zygote then develops into a sporophyte, which remains physically attached to the gametophyte and is thus nutritionally dependent on it throughout its existence."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Diversity and Ecological Roles of Bryophytes",
    topic: "THE BRYOPHYTES",
    year: "Notes",
    steps: [
      {
        q: "What is the common morphological characteristic that distinguishes Hornworts from Liverworts?",
        options: [
          "Hornworts have true roots, while Liverworts do not.",
          "Hornworts have a thallus bearing a horn-like structure, while Liverworts have a flattened thalloid body.",
          "Hornworts are differentiated into stems and leaves, while Liverworts are not.",
          "Hornworts are aquatic, while Liverworts are terrestrial."
        ],
        correct: 1,
        explanation: "Hornworts are morphologically distinct from liverworts primarily because their plant body (thallus) bears a prominent horn-like sporophyte structure."
      },
      {
        q: "Which specific blue-green algae often forms a symbiotic relationship within the internal cavities of the Anthoceros (hornwort) thallus?",
        options: [
          "Spirogyra",
          "Chlamydomonas",
          "Nostoc",
          "Volvox"
        ],
        correct: 2,
        explanation: "The thallus of Anthoceros, a common genus of hornwort, often contains extensive internal cavities that are inhabited by the blue-green algae Nostoc, forming a symbiotic relationship."
      },
      {
        q: "What three structures are plants of the Division Bryophyta (Mosses) differentiated into, and what are the main components of a fertile moss sporophyte?",
        options: [
          "Roots, stems, and leaves; foot and rhizoids.",
          "Rhizoids, stems, and leaves; seta and capsule.",
          "Thallus, gemma, and archegonia; antheridia and spores.",
          "Foot, seta, and capsule; rhizoids and leaves."
        ],
        correct: 1,
        explanation: "Plants of the Division Bryophyta (Mosses) are differentiated into rhizoids, stems, and leaves. A fertile (mature) moss plant bears a sporophyte, which is comprised of a seta (stalk) and a capsule (sporangium)."
      },
      {
        q: "What unique structures are contained within the capsule of a moss sporophyte, and what is the taxonomic significance of one of these features?",
        options: [
          "Gemma cups; their number indicates species age.",
          "True leaves; their arrangement aids classification.",
          "Numerous spores, Operculum, and a peristome with teeth; the number of teeth is a taxonomic character for identification.",
          "Seeds; their shape defines the genus."
        ],
        correct: 2,
        explanation: "The capsule of a moss sporophyte contains numerous spores, an Operculum, and a circular structure called the peristome, which bears teeth. The number of these peristome teeth is a crucial taxonomic character used for the identification of moss species."
      },
      {
        q: "Explain two significant ecological roles of bryophytes, providing examples where applicable.",
        options: [
          "They are primary producers in oceans; they cause soil erosion.",
          "They act as decomposers; they are sources of fossil fuels.",
          "They serve as carbon sinks, playing a role in the carbon cycle; they are bioindicators of pollution, being absent from highly polluted areas.",
          "They are major sources of timber; they enhance air pollution."
        ],
        correct: 2,
        explanation: "Bryophytes are ecologically important as carbon sinks, contributing significantly to the carbon cycle by sequestering carbon. They also serve as bioindicators of pollution; certain species are highly sensitive to pollutants, and their absence from specific areas can indicate high levels of environmental contamination. For example, Funaria grows well on burnt areas, Campylopus savanarium forms extensive carpets in miombo woodlands, and Tortula porphyroneura prefers calcium-rich areas underlain by limestone rock."
      }
    ]
  },
  
  //const essayData = [
  {
    course: "BI110",
    term: "T3",
    title: "Plant Tissue Types",
    topic: "PLANT TISSUE TYPES",
    year: "Notes",
    steps: [
      {
        q: "What is a plant tissue?",
        options: [
          "A single cell performing all functions",
          "A group of similar cells performing various unrelated functions",
          "A group of cells of the same kind performing a specific function",
          "All structures between the root and leaf"
        ],
        correct: 2,
        explanation: "A tissue in plants is a group of similar cells working together to perform a specific function."
      },
      {
        q: "Which of the following best describes the function of epidermal tissue in plants?",
        options: [
          "Photosynthesis",
          "Structural support",
          "Transport of water",
          "Protection and regulation of water loss"
        ],
        correct: 3,
        explanation: "The epidermis serves as the outermost protective layer, regulating gas exchange and preventing excessive water loss."
      },
      {
        q: "What is the main role of parenchyma cells?",
        options: [
          "Support",
          "Photosynthesis and storage",
          "Transport",
          "Reproduction"
        ],
        correct: 1,
        explanation: "Parenchyma cells are soft, thin-walled ground tissue cells involved in photosynthesis and food storage."
      },
      {
        q: "Which statement best defines xylem?",
        options: [
          "Vascular tissue that transports sugars",
          "Ground tissue responsible for energy storage",
          "Vascular tissue that transports water and minerals",
          "Protective tissue layer in leaves"
        ],
        correct: 2,
        explanation: "Xylem is a vascular tissue composed of tracheids and vessels, responsible for the upward transport of water and minerals."
      },
      {
        q: "Which of the following is a primary component of phloem?",
        options: [
          "Tracheids",
          "Xylem fibers",
          "Sieve elements and companion cells",
          "Epidermal cells"
        ],
        correct: 2,
        explanation: "Phloem transports sugars and amino acids using sieve tubes supported by companion cells."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Pteridophyte Classification and Life Cycle",
    topic: "PTERIDOPHYTES",
    year: "Notes",
    steps: [
      {
        q: "What are pteridophytes?",
        options: [
          "Seed-bearing flowering plants",
          "Non-vascular plants",
          "Seedless vascular plants that reproduce via spores",
          "Fungi-like protists"
        ],
        correct: 2,
        explanation: "Pteridophytes are vascular cryptogams, meaning they are seedless plants that reproduce via spores and have vascular tissue."
      },
      {
        q: "Which group includes true ferns?",
        options: [
          "Bryophytes",
          "Gymnosperms",
          "Angiosperms",
          "Pteridophytes"
        ],
        correct: 3,
        explanation: "True ferns are a subgroup within pteridophytes, specifically those with complex leaf structures called megaphylls."
      },
      {
        q: "What is the dominant generation in the fern life cycle?",
        options: [
          "Gametophyte",
          "Sporophyte",
          "Zygote",
          "Embryo"
        ],
        correct: 1,
        explanation: "The sporophyte is the dominant diploid generation in the fern life cycle and produces spores."
      },
      {
        q: "What structure arises from a germinated spore in ferns?",
        options: [
          "Sporangium",
          "Prothallus (gametophyte)",
          "Frond",
          "Rhizome"
        ],
        correct: 1,
        explanation: "A germinated spore develops into a heart-shaped gametophyte known as the prothallus."
      },
      {
        q: "How does fertilization occur in ferns?",
        options: [
          "Wind-pollination",
          "Water-dependent sperm swimming to egg",
          "Insect pollination",
          "Self-fertilization without gametes"
        ],
        correct: 1,
        explanation: "Fertilization in ferns is water-dependent; sperm swim through water to reach the egg in the archegonium."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Apical Dominance in Plants",
    topic: "PARTS OF THE STEM",
    year: "Notes",
    steps: [
      {
        q: "What is apical dominance?",
        options: [
          "The ability of roots to grow deep into the soil",
          "Suppression of lateral bud growth by the central stem",
          "The dominance of leaves over flowers",
          "Preferential nutrient transport to older tissues"
        ],
        correct: 1,
        explanation: "Apical dominance is the phenomenon where the terminal bud suppresses the growth of lateral buds."
      },
      {
        q: "Which plant hormone is responsible for apical dominance?",
        options: [
          "Cytokinin",
          "Gibberellin",
          "Abscisic acid",
          "Auxin (Indole Acetic Acid)"
        ],
        correct: 3,
        explanation: "Auxin (specifically IAA) produced in the terminal bud inhibits the outgrowth of lateral buds."
      },
      {
        q: "What happens when the apical bud is removed?",
        options: [
          "Lateral buds remain suppressed",
          "New apical buds form immediately",
          "Lateral buds start to grow and branch out",
          "The plant stops growing"
        ],
        correct: 2,
        explanation: "Removal of the apical bud removes auxin influence, promoting lateral bud growth and bushier plant form."
      },
      {
        q: "Why is apical dominance important in horticulture?",
        options: [
          "To delay flowering",
          "To promote root development",
          "To encourage lateral branching by pruning",
          "To maintain leaf color"
        ],
        correct: 2,
        explanation: "Pruning the apex stimulates lateral growth, resulting in fuller, bushier plants."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Functions and Modifications of Roots",
    topic: "FUNCTION OF ROOTS",
    year: "Notes",
    steps: [
      {
        q: "Besides anchorage, what is a primary function of roots?",
        options: [
          "Photosynthesis",
          "Transport of pollen",
          "Storage of food and hormone production",
          "Pollination"
        ],
        correct: 2,
        explanation: "Roots not only anchor the plant but also store nutrients and produce hormones like cytokinins and gibberellins."
      },
      {
        q: "Which hormones are synthesized in roots?",
        options: [
          "Auxins and ethylene",
          "Gibberellins and cytokinins",
          "Abscisic acid and ethylene",
          "IAA and gibberellins"
        ],
        correct: 1,
        explanation: "Gibberellins and cytokinins are synthesized in root tissues and influence plant development."
      },
      {
        q: "What is an example of a root modified for food storage?",
        options: [
          "Carrot tap root",
          "Maize fibrous root",
          "Potato tuber",
          "Onion bulb"
        ],
        correct: 0,
        explanation: "Carrot is a classic example of a tap root modified for food storage."
      },
      {
        q: "What is the role of roots in synthesizing secondary metabolites?",
        options: [
          "Production of chlorophyll",
          "Formation of sugars",
          "Synthesis of compounds like nicotine",
          "Formation of xylem vessels"
        ],
        correct: 2,
        explanation: "Roots can synthesize secondary metabolites like nicotine in tobacco."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Root System Types in Angiosperms",
    topic: "MORPHOLOGY OF ROOTS",
    year: "Notes",
    steps: [
      {
        q: "What defines a tap root system?",
        options: [
          "Main root degenerates early",
          "Main root persists as dominant root",
          "All roots are of equal diameter",
          "Only found in monocots"
        ],
        correct: 1,
        explanation: "Tap root systems have a central, dominant root that grows vertically downward and is typical of dicots."
      },
      {
        q: "Which of the following is an example of a plant with a tap root system?",
        options: [
          "Maize",
          "Sorghum",
          "Finger millet",
          "Carrot"
        ],
        correct: 3,
        explanation: "Carrot exhibits a tap root system with a thickened primary root used for storage."
      },
      {
        q: "What defines a fibrous root system?",
        options: [
          "Dominant central root persists",
          "Numerous roots of the same diameter arise",
          "Root hairs are absent",
          "Tap root forms many branches"
        ],
        correct: 1,
        explanation: "In fibrous root systems, the main root degenerates and is replaced by many similar-sized roots, common in monocots."
      },
      {
        q: "Which plants exhibit a fibrous root system?",
        options: [
          "Groundnut",
          "Carrot",
          "Sorghum and maize",
          "Tobacco"
        ],
        correct: 2,
        explanation: "Sorghum and maize (monocots) have fibrous root systems composed of many fine roots."
      }
    ]
  },
  
//const essayData = [
  {
    course: "BI110",
    term: "T3",
    title: "Anatomy and Functions of Angiosperm Roots and Stems",
    topic: "ANGIOSPERMS",
    year: "Notes",
    steps: [
      {
        q: "What are primary functions of roots in angiosperm plants beyond anchorage and absorption?",
        options: [
          "Only water storage and sugar transport",
          "Only support for stem and leaves",
          "Storage, hormone synthesis, and metabolite production",
          "Providing chloroplasts and photosynthesis"
        ],
        correct: 2,
        explanation: "Roots store compounds (e.g. starch), synthesize hormones like gibberellins and cytokinins, and produce metabolites like nicotine in tobacco."
      },
      {
        q: "What is the function of the root cap in angiosperms?",
        options: [
          "Photosynthesis and gas exchange",
          "Perception of light",
          "Secretion of mucigel and gravity sensing",
          "Pollen reception during reproduction"
        ],
        correct: 2,
        explanation: "The root cap secretes mucigel to help roots move through soil and is involved in gravity perception (positive geotropism)."
      },
      {
        q: "Which meristematic tissues contribute to root development?",
        options: [
          "Tunica and corpus only",
          "Procambium, protoderm, ground meristem, and quiescent center",
          "Cambium and phloem",
          "Mesophyll and sclerenchyma"
        ],
        correct: 1,
        explanation: "Root development involves the procambium (vascular tissue), protoderm (epidermis), ground meristem (cortex/pith), and the quiescent center."
      },
      {
        q: "Which function is NOT typically associated with stems in angiosperms?",
        options: [
          "Transport of water and nutrients",
          "Vegetative propagation",
          "Support of leaves and flowers",
          "Carbon fixation through photosynthesis"
        ],
        correct: 3,
        explanation: "While stems perform transport and support functions, they do not carry out carbon fixation, which is typically done in leaves."
      },
      {
        q: "What is the main idea behind the Tunica-Corpus theory in plant stem development?",
        options: [
          "Growth from vascular cambium and cork cambium",
          "Organization into tunica (outer) and corpus (inner) layers with specific division patterns",
          "Only endodermis and cortex play roles",
          "Meristematic activity happens only in the corpus"
        ],
        correct: 1,
        explanation: "Tunica cells divide anticlinally for surface growth; corpus cells divide anticlinally and periclinally to increase volume."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Monocot vs. Dicot Comparisons in Angiosperms",
    topic: "ANGIOSPERMS",
    year: "Notes",
    steps: [
      {
        q: "What is the primary basis for classifying angiosperms into monocots and dicots?",
        options: [
          "Type of root system",
          "Color of flowers",
          "Number of cotyledons in the seed",
          "Presence of vascular bundles"
        ],
        correct: 2,
        explanation: "Monocots have one cotyledon; dicots have two. This is the main classification criterion."
      },
      {
        q: "Which of the following is a characteristic of dicots?",
        options: [
          "Single cotyledon and fibrous roots",
          "Two cotyledons and tap root system",
          "Parallel venation and no cambium",
          "Ring of vascular bundles and fibrous roots"
        ],
        correct: 1,
        explanation: "Dicots have two cotyledons, tap roots, and ring-like vascular bundle arrangement."
      },
      {
        q: "Which of the following plants is a monocot?",
        options: [
          "Bean (Phaseolus vulgaris)",
          "Groundnut (Arachis hypogea)",
          "Maize (Zea mays)",
          "Tomato (Lycopersicon esculentum)"
        ],
        correct: 2,
        explanation: "Monocots include maize, millet, and sorghum. Beans and groundnuts are dicots."
      },
      {
        q: "How does the internal root anatomy differ between monocots and dicots?",
        options: [
          "Dicots lack xylem; monocots have polyarch xylem",
          "Dicots have star-shaped xylem with cambium; monocots have ring-shaped xylem without cambium",
          "Monocots and dicots both have secondary growth",
          "Monocots have cambium; dicots don’t"
        ],
        correct: 1,
        explanation: "Dicot roots have a star-like xylem core with cambium for secondary growth; monocots lack cambium and show polyarch xylem arrangement."
      },
      {
        q: "Which description best fits a shrub?",
        options: [
          "Green, non-woody stem with high parenchyma",
          "Tall woody plant with single main trunk",
          "Woody plant with multiple stems from ground level",
          "Herbaceous plant with tap roots"
        ],
        correct: 2,
        explanation: "Shrubs are woody plants with multiple stems from a common base, unlike trees (single trunk) or herbs (soft stems)."
      }
    ]
    },
    //const essayData_revised = [
  {
    course: "BI110",
    term: "T3",
    title: "The Evolutionary Transition and Reproductive Biology of Gymnosperms",
    topic: "GYMNOSPERMS",
    year: "Notes",
    steps: [
      {
        q: "Explain the evolutionary transition from seedless vascular plants to seed plants, focusing on the role of heterospory.",
        options: ["Heterospory is the evolutionary step that leads to the production of microspores and megaspores, which is a prerequisite for seed production.", "Heterospory is only found in gymnosperms, not in seedless vascular plants.", "Heterospory allows for the production of bisexual gametophytes.", "Heterospory is the transition from sexual to asexual reproduction."],
        correct: 1,
        explanation: "Heterospory, the production of microspores and megaspores, is a key evolutionary step that transitions from the homospory of most seedless vascular plants to the biology of seed plants. This is the first step towards the development of a seed."
      },
      {
        q: "Define what a seed is and describe its key components and their functions.",
        options: ["A seed is a mature ovule with an embryo, a food reserve (endosperm), and a protective seed coat.", "A seed is a fertilized flower that contains an ovule.", "A seed is a non-vascular reproductive structure.", "A seed is a modified leaf that bears sporangia."],
        correct: 0,
        explanation: "A seed is a mature ovule containing a plant embryo, a food reserve (endosperm) that provides nutrition, and a protective seed coat. This provides protection and nourishment for the embryo, increasing its chances of survival."
      },
      {
        q: "Explain why gymnosperms are referred to as 'naked seed' plants.",
        options: ["Their seeds are enclosed in a fruit.", "Their seeds are exposed on the surface of a sporophyll, not enclosed in a fruit.", "They do not have a seed coat.", "The seeds are produced without fertilization."],
        correct: 1,
        explanation: "Gymnosperms are 'naked seed' plants because their ovules and seeds are not enclosed within a fruit. Instead, they are exposed on the surface of a sporophyll, a modified leaf-like structure."
      },
      {
        q: "Describe the reproductive structures of pines, including the location and development of male and female cones.",
        options: ["Pines are dioecious, with male and female cones on different plants.", "Pines are monoecious, with male and female cones on the same plant. Male cones are produced annually, while female cones take up to 5 years to mature.", "Pines have flowers that contain both male and female parts.", "Male cones are found on the roots, and female cones are found on the branches."],
        correct: 1,
        explanation: "Pines are monoecious, meaning both male (staminate) and female (ovulate) cones are found on the same individual plant. Male cones develop annually, while female cones can take up to five years to reach maturity."
      },
      {
        q: "Explain the process of fertilization in pines, from pollination to the formation of a viable seed.",
        options: ["Pollen is transported by insects, and the zygote immediately forms a viable seed.", "Pollen is dispersed by wind, a zygote forms after fertilization, and while multiple embryos may initially develop, only one matures into a viable seed.", "Pollen is transported by water, and the embryo develops without a food reserve.", "Fertilization is an immediate process that produces a fruit."],
        correct: 1,
        explanation: "Pollination occurs via wind, which carries winged pollen grains to the female cone. Fertilization results in a zygote, and while a seed may initially contain multiple embryos, only one will eventually mature into a viable seed."
      },
      {
        q: "Outline the role of a sporophyll in the reproduction of seed plants.",
        options: ["It is a root-like structure that anchors the plant.", "It is a modified leaf or leaf-like organ that bears sporangia, where spores are produced.", "It is the main photosynthetic organ of the plant.", "It is a male reproductive structure that produces pollen."],
        correct: 1,
        explanation: "A sporophyll is a modified leaf or leaf-like organ that bears sporangia. In gymnosperms, the sporophylls are the scales of the cones that bear either microsporangia (pollen sacs) or megasporangia (ovules)."
      },
      {
        q: "Discuss the primary method of pollen dispersal in pines and the adaptation that aids in this process.",
        options: ["Pollen is dispersed by water, and the adaptation is a waxy coating.", "Pollen is dispersed by animals, and the adaptation is a sticky surface.", "Pollen is dispersed by wind, and the adaptation is winged pollen grains.", "Pollen is dispersed by insects, and the adaptation is a sweet scent."],
        correct: 2,
        explanation: "The primary method of pollen dispersal in pines is wind. The winged pollen grains are a key adaptation that allows for efficient transport over long distances."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Anatomy and Adaptations of *Pinus* Species",
    topic: "GYMNOSPERMS",
    year: "Notes",
    steps: [
      {
        q: "Describe the key anatomical adaptations of a *Pinus* leaf that enable it to survive in dry environments.",
        options: ["Large, flat surface area and many stomata.", "Sunken stomata, a thick cuticle, and a hypodermis.", "A single layer of mesophyll cells.", "The absence of a vascular system."],
        correct: 1,
        explanation: "Key adaptations for dry environments include sunken stomata to reduce water loss, a thick waxy cuticle, and a protective hypodermis, which all help conserve water."
      },
      {
        q: "Explain what is meant by a 'physiological drought' in pines and how they overcome it.",
        options: ["It is a lack of rainfall in the summer months.", "It is a condition where the plant cannot absorb water because the ground is frozen. Pines overcome this with their evergreen leaves and adaptations to reduce water loss.", "It is a condition where the plant has too much water.", "It is a term for the plant's natural state of dormancy."],
        correct: 1,
        explanation: "A 'physiological drought' occurs because pines in temperate regions face a situation where water is present as snow but is frozen and unavailable to the plant. They overcome this with adaptations that minimize water loss."
      },
      {
        q: "Describe the vascular tissue of pines and explain how it differs from that of angiosperms.",
        options: ["Pine xylem is homogeneous with only tracheid cells, while angiosperm xylem has both tracheids and more efficient vessel elements.", "Pine xylem is composed of vessel elements, while angiosperm xylem has only tracheids.", "Pines have no vascular tissue, while angiosperms do.", "The vascular system of pines is always a eustele."],
        correct: 0,
        explanation: "The xylem of pines is homogenous, composed only of tracheid cells. In contrast, the xylem of angiosperms is heterogeneous and contains both tracheids and more efficient vessel elements, allowing for faster water transport."
      },
      {
        q: "What is a mycorrhiza, and why is this symbiotic relationship so important for many exotic pine species?",
        options: ["It is a parasitic relationship where the fungus harms the pine.", "It is a mutualistic relationship between pine roots and a fungus, which helps the tree absorb water and nutrients.", "It is a competitive relationship for water resources.", "It is a relationship that helps the pine tree reproduce."],
        correct: 1,
        explanation: "Mycorrhiza is a mutualistic relationship between pine roots and a fungus. The fungus assists the pine in absorbing water and nutrients from the soil. This relationship is so vital that many exotic pine species cannot grow without it."
      },
      {
        q: "Discuss how the number of leaves per fascicle and the type of branching can be used to identify different *Pinus* species.",
        options: ["All pines have the same number of leaves per fascicle and the same type of branching.", "The number of leaves per fascicle (e.g., unifoliate, bifoliate, trifoliate) is a key identifying characteristic. Branching can be either long shoots or spur shoots, each with different leaf types.", "The number of cones per tree is the key identifier.", "The color of the pollen is used for identification."],
        correct: 1,
        explanation: "The number of leaves per fascicle is a key characteristic for identification (*P. monophylla* is unifoliate, *P. sylvestris* is bifoliate, and *P. insularis* is trifoliate). Also, the presence of long shoots and spur shoots bearing different types of leaves is another defining feature."
      },
      {
        q: "Describe the function of the transfusion tissue and the resin canals in a *Pinus* leaf.",
        options: ["The transfusion tissue is for photosynthesis, and resin canals transport water.", "Transfusion tissue is a mixture of dead tracheids and living parenchyma that aids in transport, while resin canals contain a protective resin.", "Transfusion tissue is for anchorage, and resin canals are for gas exchange.", "Both tissues are for reproduction."],
        correct: 1,
        explanation: "Transfusion tissue, a mix of dead tracheids and living parenchyma, is found between the vascular tissue and endodermis and aids in transport. Resin canals, found in the mesophyll, contain a resinous substance that protects the plant from insects and pathogens."
      }
    ]
  },
  {
    course: "BI110",
    term: "T3",
    title: "Diversity and Zambian Gymnosperms",
    topic: "GYMNOSPERMS",
    year: "Notes",
    steps: [
      {
        q: "List and briefly describe the four main divisions of gymnosperms.",
        options: ["Cycadophyta, Ginkgophyta, Coniferophyta, and Gnetophyta, all of which are flowering plants.", "Cycadophyta (cycads), Ginkgophyta (ginkgoes), Coniferophyta (conifers), and Gnetophyta, all of which are non-flowering seed plants.", "Bryophyta, Pteridophyta, Gymnosperms, and Angiosperms.", "All of the above are divisions of gymnosperms."],
        correct: 1,
        explanation: "The four divisions of gymnosperms are Cycadophyta (cycads), Ginkgophyta, Coniferophyta (conifers), and Gnetophyta. These are all non-flowering seed plants."
      },
      {
        q: "Identify the indigenous gymnosperms found in Zambia and provide their local names where applicable.",
        options: ["*Pinus insularis* and *Pinus sylvestris* are the indigenous species.", "*Podocarpus* and *Encephalartos* are the indigenous genera. *Podocarpus latifolius* is known as Mulushi or Mweye.", "There are no indigenous gymnosperms in Zambia.", "*Cycas* and *Ginkgo* are the indigenous gymnosperms."],
        correct: 1,
        explanation: "The only gymnosperms found in Zambia are the genera *Podocarpus* and *Encephalartos*. The indigenous pine species, *Podocarpus latifolius*, is locally known as Mulushi (Bemba, Bisa) and Mweye (Tumbuka)."
      },
      {
        q: "Discuss the common pine genus found in Zambia and its naturalization in Africa.",
        options: ["*Podocarpus* is the most common genus, and it is indigenous to Africa.", "*Pinus* is the most common genus, with 27 species introduced to Zambia and 8 species naturalized in Africa.", "*Pinus* is indigenous to Zambia, and all species are found in temperate climates.", "*Encephalartos* is the most common genus in Zambia."],
        correct: 1,
        explanation: "The most common pine genus in Zambia is *Pinus*, with 27 species introduced. While native to temperate regions, the notes state that 8 species have been naturalized in Africa."
      },
      {
        q: "What is a 'sporophyll', and how does it relate to the reproductive cones of a gymnosperm?",
        options: ["A sporophyll is a part of the root system.", "A sporophyll is a modified leaf that bears sporangia. In cones, these are the scales that hold either microsporangia or megasporangia.", "A sporophyll is a pollen grain.", "A sporophyll is the endosperm of the seed."],
        correct: 1,
        explanation: "A sporophyll is a modified leaf or leaf-like organ that bears sporangia. The scales of the male and female cones are examples of sporophylls, which bear either pollen sacs or ovules."
      },
      {
        q: "Provide an example of a unifoliate, a bifoliate, and a trifoliate *Pinus* species.",
        options: ["*Pinus sylvestris* (unifoliate), *Pinus insularis* (bifoliate), *Pinus monophylla* (trifoliate).", "*Pinus monophylla* (unifoliate), *Pinus sylvestris* (bifoliate), *Pinus insularis* (trifoliate).", "*Pinus insularis* (unifoliate), *Pinus monophylla* (bifoliate), *Pinus sylvestris* (trifoliate).", "All pine species have the same number of leaves per fascicle."],
        correct: 1,
        explanation: "Based on the notes, *Pinus monophylla* is unifoliate (one leaf), *Pinus sylvestris* is bifoliate (two leaves), and *Pinus insularis* is trifoliate (three leaves)."
      },
      {
        q: "Discuss the structure of pine stems, including the types of branches and the vascular system.",
        options: ["Pine stems have only one type of branch and a single vascular system throughout their life.", "Pine stems have long shoots and spur shoots. The vascular system is eustele in young stems and ectophloic siphonostele in older stems.", "Pine stems have no vascular system.", "Pine stems have a vascular system that is always a protostele."],
        correct: 1,
        explanation: "Pine stems have two kinds of branches: long shoots (bearing scale leaves) and spur shoots (bearing needle-like leaves). The vascular system is eustele in young stems and transitions to ectophloic siphonostele in older stems."
      }
    ]
  },


];
  