const shortData = [
  // --- BI110 Term 1 Data ---

  // Microscopy & Staining
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes", // Placeholder, as specific year/quiz not provided
    tag: "🔬", // Emoji for microscopy
    q: "Define magnification in microscopy.",
    keywords: ["magnification", "microscopy", "enlarging"],
    explanation: "Magnification is the process of enlarging the apparent size, not physical size, of an object.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔬",
    q: "What is the function of the objective lens in a light microscope?",
    keywords: ["objective lens", "function", "microscope", "magnification", "resolution"],
    explanation: "The objective lens is located closest to the specimen and is responsible for initial magnification and resolution of the image.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔬",
    q: "Explain the role of the ocular lens (eyepiece) in a light microscope.",
    keywords: ["ocular lens", "eyepiece", "microscope", "magnification"],
    explanation: "The ocular lens further magnifies the image formed by the objective lens, allowing the user to view the specimen.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔬",
    q: "What is working distance in microscopy?",
    keywords: ["working distance", "microscopy", "objective lens", "specimen"],
    explanation: "Working distance is the distance between the front surface of the objective lens and the surface of the cover glass or specimen when the specimen is in sharp focus.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪", // Emoji for staining/chemistry
    q: "Why is Gram staining considered a 'differential' stain?",
    keywords: ["gram staining", "differential stain", "bacteria", "cell wall"],
    explanation: "It's differential because it differentiates bacteria into two major groups (Gram-positive and Gram-negative) based on differences in their cell wall composition, leading to different color reactions.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪",
    q: "Name the four main reagents used in the Gram staining procedure in order.",
    keywords: ["gram staining reagents", "crystal violet", "gram's iodine", "alcohol", "safranin"],
    explanation: "The four main reagents are: Crystal Violet (primary stain), Gram's Iodine (mordant), Alcohol/Acetone (decolorizer), and Safranin (counterstain).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪",
    q: "What color do Gram-positive bacteria appear after a successful Gram stain?",
    keywords: ["gram-positive", "gram stain", "color", "purple"],
    explanation: "Gram-positive bacteria appear purple after a successful Gram stain.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪",
    q: "What color do Gram-negative bacteria appear after a successful Gram stain?",
    keywords: ["gram-negative", "gram stain", "color", "pink", "red"],
    explanation: "Gram-negative bacteria appear pink or red after a successful Gram stain.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔬",
    q: "Briefly explain the principle of how a phase-contrast microscope works.",
    keywords: ["phase-contrast microscope", "principle", "refractive index", "diffraction", "live specimens"],
    explanation: "A phase-contrast microscope converts slight differences in refractive index and light diffraction from different parts of a specimen into differences in light intensity, making transparent live specimens visible without staining.",
    course: "BI110",
    term: "T1"
  },

  // Cell Structure & Functions
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: "เซลล์", // Using a symbol that broadly represents cells
    q: "State one of the three postulates of the Cell Theory.",
    keywords: ["cell theory", "postulate", "basic unit of life", "pre-existing cells"],
    explanation: "One postulate of the Cell Theory is: All living organisms are composed of one or more cells. (Other valid answers: The cell is the basic unit of structure and organization in organisms; All cells arise from pre-existing cells.)",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: "เซลล์",
    q: "Give two differences between prokaryotic and eukaryotic cells.",
    keywords: ["prokaryotic", "eukaryotic", "differences", "nucleus", "organelles"],
    explanation: "Two differences are: Prokaryotic cells lack a true nucleus and membrane-bound organelles, while eukaryotic cells possess both. Eukaryotic cells are generally much larger and more complex than prokaryotic cells.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: " organelles",
    q: "What is the primary function of the cell wall in plant cells?",
    keywords: ["cell wall", "plant cells", "function", "structural support", "protection"],
    explanation: "The cell wall in plant cells provides structural support, protection, and prevents excessive water uptake by maintaining turgor pressure.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: " organelles",
    q: "Which organelle is responsible for generating most of the cell's supply of adenosine triphosphate (ATP) through cellular respiration?",
    keywords: ["mitochondria", "ATP", "cellular respiration", "powerhouse"],
    explanation: "Mitochondria are responsible for generating most of the cell's ATP through cellular respiration.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: " organelles",
    q: "What is the main function of ribosomes?",
    keywords: ["ribosomes", "protein synthesis", "translation"],
    explanation: "The main function of ribosomes is protein synthesis (translation), where they assemble amino acids into proteins based on mRNA instructions.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: " organelles",
    q: "Differentiate between the rough endoplasmic reticulum (RER) and smooth endoplasmic reticulum (SER).",
    keywords: ["RER", "SER", "endoplasmic reticulum", "ribosomes", "protein synthesis", "lipid synthesis", "detoxification"],
    explanation: "The RER has ribosomes on its surface and is involved in protein synthesis and modification, while the SER lacks ribosomes and is involved in lipid synthesis, detoxification, and calcium ion storage.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: " organelles",
    q: "What is the primary role of the Golgi apparatus?",
    keywords: ["Golgi apparatus", "protein modification", "sorting", "packaging"],
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids synthesized in the ER for secretion or delivery to other organelles.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: "membrane",
    q: "Why is the plasma membrane described as 'selectively permeable'?",
    keywords: ["plasma membrane", "selectively permeable", "cell membrane", "regulation"],
    explanation: "It is selectively permeable because it regulates the passage of substances into and out of the cell, allowing some to pass freely while restricting others.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL STRUCTURE & FUNCTIONS",
    year: "Notes",
    tag: "👨‍🔬", // Emoji for scientists
    q: "Name the three scientists credited with significant contributions to the development of the Cell Theory.",
    keywords: ["cell theory", "scientists", "matthias schleiden", "theodor schwann", "rudolf virchow"],
    explanation: "The three scientists are Matthias Schleiden, Theodor Schwann, and Rudolf Virchow.",
    course: "BI110",
    term: "T1"
  },

  // Cell Division
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗", // Emoji for division
    q: "What is the main purpose of mitosis?",
    keywords: ["mitosis", "purpose", "cell proliferation", "growth", "repair", "asexual reproduction"],
    explanation: "The main purpose of mitosis is cell proliferation, producing two genetically identical diploid daughter cells for growth, repair, and asexual reproduction.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "What is the main purpose of meiosis?",
    keywords: ["meiosis", "purpose", "sexual reproduction", "gametes", "genetic diversity"],
    explanation: "The main purpose of meiosis is sexual reproduction, producing four genetically diverse haploid gametes (sperm or egg cells) from a diploid parent cell.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "In which phase of the cell cycle does DNA replication occur?",
    keywords: ["dna replication", "cell cycle", "s phase", "interphase"],
    explanation: "DNA replication occurs during the S (synthesis) phase of Interphase.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "What event characterizes Metaphase in mitosis?",
    keywords: ["metaphase", "mitosis", "chromosome alignment", "metaphase plate"],
    explanation: "During Metaphase in mitosis, the chromosomes align individually along the metaphase plate (equatorial plane) of the cell.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "What separates during Anaphase I of meiosis?",
    keywords: ["anaphase i", "meiosis", "homologous chromosomes", "separation"],
    explanation: "During Anaphase I of meiosis, homologous chromosomes separate and move to opposite poles of the cell.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "What separates during Anaphase II of meiosis?",
    keywords: ["anaphase ii", "meiosis", "sister chromatids", "separation"],
    explanation: "During Anaphase II of meiosis, sister chromatids separate and move to opposite poles of the cell.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "What is 'crossing over' and during which meiotic phase does it occur?",
    keywords: ["crossing over", "meiosis", "prophase i", "genetic material exchange"],
    explanation: "Crossing over is the exchange of genetic material between non-sister chromatids of homologous chromosomes. It occurs during Prophase I of meiosis.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "How many daughter cells are produced from one parent cell at the end of mitosis, and what is their ploidy?",
    keywords: ["mitosis", "daughter cells", "ploidy", "diploid", "2n"],
    explanation: "Two diploid (2N) daughter cells are produced from one parent cell at the end of mitosis.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELL DIVISION",
    year: "Notes",
    tag: "➗",
    q: "How many daughter cells are produced from one parent cell at the end of meiosis, and what is their ploidy?",
    keywords: ["meiosis", "daughter cells", "ploidy", "haploid", "n", "gametes"],
    explanation: "Four haploid (N) daughter cells (gametes) are produced from one parent cell at the end of meiosis.",
    course: "BI110",
    term: "T1"
  },

  // Macromolecules
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬", // General science/life science emoji
    q: "Name the four major classes of biological macromolecules.",
    keywords: ["macromolecules", "carbohydrates", "lipids", "proteins", "nucleic acids"],
    explanation: "The four major classes of biological macromolecules are Carbohydrates, Lipids, Proteins, and Nucleic Acids.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍞", // Emoji for carbohydrates/food
    q: "What is the monomer unit of carbohydrates?",
    keywords: ["monomer", "carbohydrates", "monosaccharide"],
    explanation: "The monomer unit of carbohydrates is the monosaccharide.",
    course: "BI110",
    term: "T1"
  },
  
  
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍞",
    q: "What type of bond links monosaccharides together to form disaccharides and polysaccharides?",
    keywords: ["bond", "monosaccharides", "disaccharides", "polysaccharides", "glycosidic bond"],
    explanation: "Monosaccharides are linked by glycosidic bonds.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍔", // Emoji for lipids/fats
    q: "Name two primary functions of lipids.",
    keywords: ["lipids", "functions", "energy storage", "cell membranes"],
    explanation: "Two primary functions of lipids are long-term energy storage and forming the major components of cell membranes.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🥩", // Emoji for proteins/meat
    q: "What are the monomers of proteins?",
    keywords: ["monomers", "proteins", "amino acids"],
    explanation: "The monomers of proteins are amino acids.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🥩",
    q: "Name the four levels of protein structure.",
    keywords: ["protein structure", "primary", "secondary", "tertiary", "quaternary"],
    explanation: "The four levels of protein structure are Primary, Secondary, Tertiary, and Quaternary.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🥩",
    q: "What type of bond connects amino acids to form a polypeptide chain?",
    keywords: ["bond", "amino acids", "polypeptide chain", "peptide bond"],
    explanation: "Amino acids are connected by peptide bonds.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬",
    q: "What are the two types of nucleic acids?",
    keywords: ["nucleic acids", "dna", "rna"],
    explanation: "The two types of nucleic acids are Deoxyribonucleic Acid (DNA) and Ribonucleic Acid (RNA).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬",
    q: "Describe the basic structure of a nucleotide.",
    keywords: ["nucleotide", "structure", "nitrogenous base", "sugar", "phosphate"],
    explanation: "A nucleotide consists of a nitrogenous base, a five-carbon sugar (ribose or deoxyribose), and one or more phosphate groups.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬",
    q: "State the base pairing rules for DNA.",
    keywords: ["dna", "base pairing rules", "adenine", "thymine", "guanine", "cytosine"],
    explanation: "In DNA, Adenine (A) pairs with Thymine (T), and Guanine (G) pairs with Cytosine (C).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬",
    q: "How do the base pairing rules in RNA differ from those in DNA?",
    keywords: ["rna", "dna", "base pairing rules", "uracil"],
    explanation: "In RNA, Adenine (A) pairs with Uracil (U) instead of Thymine (T), while Guanine (G) still pairs with Cytosine (C).",
    course: "BI110",
    term: "T1"
  },

  // Genetics
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Define 'Genetics'.",
    keywords: ["genetics", "definition", "heredity", "variation"],
    explanation: "Genetics is the scientific study of heredity and variation in living organisms.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "What is a 'gene'?",
    keywords: ["gene", "definition", "heredity", "dna", "rna", "trait"],
    explanation: "A gene is a basic unit of heredity, a segment of DNA (or RNA in some viruses) that codes for a specific protein or functional RNA molecule, influencing a particular trait.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Differentiate between 'heredity' and 'variation'.",
    keywords: ["heredity", "variation", "difference", "traits", "transmission"],
    explanation: "Heredity is the transmission of traits from one generation to the next, while variation refers to the differences in traits among individuals within a population.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "What is a 'chromosome'?",
    keywords: ["chromosome", "definition", "dna", "genetic information", "genes"],
    explanation: "A chromosome is a thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Define 'allele'.",
    keywords: ["allele", "definition", "gene", "alternative form"],
    explanation: "An allele is an alternative form of a gene that arises by mutation and is found at the same place (locus) on a chromosome.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "What is 'genotype'?",
    keywords: ["genotype", "definition", "genetic makeup", "alleles"],
    explanation: "Genotype refers to the genetic makeup of an organism; the set of alleles it possesses for a particular trait or set of traits.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "What is 'phenotype'?",
    keywords: ["phenotype", "definition", "observable characteristics", "expression"],
    explanation: "Phenotype is the observable physical or biochemical characteristics of an organism, resulting from the expression of its genotype and its interaction with the environment.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Explain 'dominant allele'.",
    keywords: ["dominant allele", "explanation", "heterozygous", "masks", "expression"],
    explanation: "A dominant allele is an allele that expresses its phenotypic effect even when heterozygous with a recessive allele; it masks the presence of the recessive allele.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Explain 'recessive allele'.",
    keywords: ["recessive allele", "explanation", "homozygous", "masked"],
    explanation: "A recessive allele is an allele whose phenotypic effect is expressed only when it is homozygous; its expression is masked in the presence of a dominant allele.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🧬",
    q: "Differentiate between 'homozygous' and 'heterozygous'.",
    keywords: ["homozygous", "heterozygous", "difference", "alleles"],
    explanation: "Homozygous means having two identical alleles for a particular gene (e.g., AA or aa). Heterozygous means having two different alleles for a particular gene (e.g., Aa).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "📊", // Emoji for chart/diagram
    q: "What is a 'Punnett Square' used for?",
    keywords: ["punnett square", "use", "predict", "genotypes", "phenotypes"],
    explanation: "A Punnett Square is a diagram used to predict the genotypes and phenotypes of offspring resulting from a genetic cross, showing all possible combinations of alleles from the parents.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "📜", // Emoji for law/document
    q: "State Mendel's Law of Segregation.",
    keywords: ["mendel's law", "segregation", "gamete formation", "alleles separate"],
    explanation: "Mendel's Law of Segregation states that during gamete formation, the two alleles for a heritable character separate (segregate) from each other such that each gamete receives only one allele.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "📜",
    q: "State Mendel's Law of Independent Assortment.",
    keywords: ["mendel's law", "independent assortment", "different traits", "assort independently"],
    explanation: "Mendel's Law of Independent Assortment states that genes for different traits assort independently of one another in the formation of gametes. (This applies to genes located on different chromosomes or far apart on the same chromosome).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "↔️", // Emoji for incomplete/blending
    q: "What is 'codominance'?",
    keywords: ["codominance", "inheritance", "both expressed", "no blending", "AB blood type"],
    explanation: "Codominance is a type of inheritance in which two different alleles for a gene are both fully expressed in the phenotype of the heterozygote, without blending (e.g., AB blood type).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🤝", // Emoji for blending/intermediate
    q: "What is 'incomplete dominance'?",
    keywords: ["incomplete dominance", "inheritance", "intermediate blend", "pink flowers"],
    explanation: "Incomplete dominance is a type of inheritance in which one allele is not completely dominant over the other, resulting in a heterozygous phenotype that is an intermediate blend of the two homozygous phenotypes (e.g., pink flowers from red and white parents).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "♂️♀️", // Male/Female symbols for sex-linked
    q: "Define 'sex-linked inheritance'.",
    keywords: ["sex-linked inheritance", "definition", "sex chromosomes", "X chromosome"],
    explanation: "Sex-linked inheritance refers to the inheritance of traits controlled by genes located on the sex chromosomes (usually the X chromosome in humans).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "📈", // Emoji for chart/tracing
    q: "What is a 'pedigree chart' used for in genetics?",
    keywords: ["pedigree chart", "use", "trace traits", "family history"],
    explanation: "A pedigree chart is a diagram that shows the occurrence and appearance or phenotypes of a particular gene or organism and its ancestors from one generation to the next, used to trace genetic traits.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "🚫", // Emoji for change/alteration
    q: "What is a 'mutation' in genetics?",
    keywords: ["mutation", "definition", "dna sequence change", "heritable"],
    explanation: "A mutation is a permanent, heritable change in the DNA sequence of an organism. It can be a change in a single nucleotide base or a large-scale alteration in chromosome structure.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "Genetics",
    year: "Notes",
    tag: "📊",
    q: "Explain the concept of 'polygenic inheritance'.",
    keywords: ["polygenic inheritance", "explanation", "multiple genes", "continuous variation"],
    explanation: "Polygenic inheritance describes a trait whose phenotype is influenced by more than one gene, often resulting in a continuous range of phenotypes (e.g., human height, skin color).",
    course: "BI110",
    term: "T1"
  },
  
  // Short Answer 1
{
  type: "ShortAnswer",
  topic: "Taxonomy",
  year: "Taxonomy Handout",
  tag: "Definition",
  q: "Briefly define 'Taxonomy'.",
  answer: ["The branch of science dealing with the description, identification, nomenclature, and classification of organisms."],
  explanation: "Taxonomy is the scientific discipline focused on grouping, naming, and categorizing living organisms based on shared characteristics.",
  course: "BI110",
  term: "T2"
},
// Short Answer 2
{
  type: "ShortAnswer",
  topic: "Taxonomy",
  year: "Taxonomy Handout",
  tag: "Hierarchy",
  q: "List the main hierarchical taxonomic ranks from most inclusive to least inclusive, as outlined by Linnaeus (excluding Domain).",
  answer: ["Kingdom, Phylum (or Division), Class, Order, Family, Genus, Species"],
  explanation: "The Linnaean hierarchy organizes life into progressively more specific categories: Kingdom, Phylum, Class, Order, Family, Genus, Species.",
  course: "BI110",
  term: "T2"
},
// Short Answer 3
{
  type: "ShortAnswer",
  topic: "Taxonomy",
  year: "Taxonomy Handout",
  tag: "Nomenclature",
  q: "Explain the rule of binomial nomenclature regarding the capitalization and italicization/underlining of scientific names.",
  answer: ["The genus name is capitalized, the species epithet is lowercase. Both names are italicized when typed or underlined when handwritten."],
  explanation: "Binomial nomenclature ensures universal and unambiguous naming, with specific formatting rules for genus and species epithets.",
  course: "BI110",
  term: "T2"
},
// Short Answer 4
{
  type: "ShortAnswer",
  topic: "Prokaryotes",
  year: "Taxonomy Handout",
  tag: "Characteristics",
  q: "Name two fundamental characteristics that distinguish prokaryotic cells from eukaryotic cells.",
  answer: ["Lack a membrane-bound nucleus", "Lack membrane-bound organelles"],
  explanation: "Prokaryotic cells are structurally simpler than eukaryotic cells, lacking the internal compartmentalization provided by membrane-bound organelles and a true nucleus.",
  course: "BI110",
  term: "T2"
},
// Short Answer 5
{
  type: "ShortAnswer",
  topic: "Prokaryotes",
  year: "Taxonomy Handout",
  tag: "Reproduction",
  q: "Describe the process of binary fission in prokaryotes.",
  answer: ["Asexual reproduction where a single cell divides into two identical daughter cells after replicating its genetic material."],
  explanation: "Binary fission is an efficient form of asexual reproduction, allowing prokaryotes to rapidly multiply under favorable conditions.",
  course: "BI110",
  term: "T2"
},
// Short Answer 6
{
  type: "ShortAnswer",
  topic: "Cyanobacteria",
  year: "Taxonomy Handout",
  tag: "Ecological Role",
  q: "What significant ecological role do Cyanobacteria play in ecosystems, particularly regarding nutrients?",
  answer: ["They perform nitrogen fixation, converting atmospheric nitrogen into usable forms."],
  explanation: "Nitrogen fixation by cyanobacteria makes essential nitrogen compounds available to other organisms, supporting primary productivity in various ecosystems.",
  course: "BI110",
  term: "T2"
},
// Short Answer 7
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Characteristics",
  q: "State three general characteristics of Protists.",
  answer: ["Eukaryotic", "Can be unicellular or multicellular", "Diverse habitats (often aquatic/moist)", "Diverse modes of nutrition"], // Accept any three
  explanation: "Protists are a highly heterogeneous group, making their definition broad but encompassing key eukaryotic features and varied lifestyles.",
  course: "BI110",
  term: "T2"
},
// Short Answer 8
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Amoeba",
  q: "How does an Amoeba move and engulf food?",
  answer: ["Using pseudopodia (false feet)"],
  explanation: "Pseudopodia are temporary extensions of the cytoplasm that allow amoebas to crawl and surround food particles for phagocytosis.",
  course: "BI110",
  term: "T2"
},
// Short Answer 9
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Plasmodium",
  q: "Which specific stage of Plasmodium is responsible for infecting human red blood cells and causing malaria symptoms?",
  answer: ["Merozoite"],
  explanation: "Merozoites are released from the liver and invade red blood cells, where they multiply, leading to the symptomatic phase of malaria.",
  course: "BI110",
  term: "T2"
},
// Short Answer 10
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Euglena",
  q: "Explain why Euglena is considered a 'mixotrophic' organism.",
  answer: ["It can perform photosynthesis (autotrophic) in the presence of light and absorb nutrients heterotrophically in the absence of light."],
  explanation: "Mixotrophy combines both autotrophic and heterotrophic nutritional strategies, allowing Euglena flexibility in nutrient acquisition.",
  course: "BI110",
  term: "T2"
},
// Short Answer 11
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Green Algae",
  q: "Name two examples of green algae mentioned in the handout that can be unicellular or multicellular.",
  answer: ["Chlamydomonas", "Volvox", "Ulva"], // Any two
  explanation: "Green algae exhibit a range of cellular organization, from single cells to complex multicellular forms.",
  course: "BI110",
  term: "T2"
},
// Short Answer 12
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Slime Molds",
  q: "What do plasmodia of slime molds differentiate into during unfavorable conditions?",
  answer: ["Fruiting bodies bearing spores"],
  explanation: "Fruiting bodies are reproductive structures that produce resistant spores, enabling survival during harsh environmental conditions.",
  course: "BI110",
  term: "T2"
},
// Short Answer 13
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Economic Importance",
  q: "Give two examples of commercial products derived from marine protists.",
  answer: ["Algin", "Agar", "Carragean", "Antiseptics"], // Any two
  explanation: "Marine algae are a valuable source of hydrocolloids and other compounds with various industrial applications.",
  course: "BI110",
  term: "T2"
},
// Short Answer 14
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Economic Importance",
  q: "How do many protists act as primary producers in aquatic ecosystems?",
  answer: ["They perform photosynthesis, forming the base of aquatic food chains and producing oxygen."],
  explanation: "Photosynthetic protists are crucial for sustaining aquatic life by converting light energy into organic matter and releasing oxygen.",
  course: "BI110",
  term: "T2"
},
// Short Answer 15
{
  type: "ShortAnswer",
  topic: "Prokaryotes",
  year: "Taxonomy Handout",
  tag: "Shapes",
  q: "What are the three common shapes of bacteria mentioned in the handout?",
  answer: ["Spherical (cocci)", "Rod-shaped (bacilli)", "Spiral-shaped (spirilla)"],
  explanation: "Bacterial morphology is a key characteristic used for identification and classification.",
  course: "BI110",
  term: "T2"
},
// Short Answer 16
{
  type: "ShortAnswer",
  topic: "Taxonomy",
  year: "Taxonomy Handout",
  tag: "Phylogeny",
  q: "What are 'clades' in phylogenetic taxonomy?",
  answer: ["Taxonomic groups of organisms based on homologous features derived from a common ancestor."],
  explanation: "Clades represent monophyletic groups, reflecting true evolutionary relationships.",
  course: "BI110",
  term: "T2"
},
// Short Answer 17
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Plasmodium Life Cycle",
  q: "Which specific stage of Plasmodium is ingested by the Anopheles mosquito from an infected human?",
  answer: ["Gametocytes"],
  explanation: "Gametocytes are the sexual forms that develop in human red blood cells and are taken up by mosquitoes to complete the parasite's life cycle.",
  course: "BI110",
  term: "T2"
},
// Short Answer 18
{
  type: "ShortAnswer",
  topic: "Protists",
  year: "Taxonomy Handout",
  tag: "Economic Importance",
  q: "Beyond food and commercial products, how else are protists useful, as mentioned in the handout?",
  answer: ["Source of medicines", "Source of minerals", "Used in biological research", "Pathogens (causing diseases)"], // Any one or two
  explanation: "Protists have diverse impacts, ranging from beneficial roles in medicine and industry to detrimental roles as disease agents.",
  course: "BI110",
  term: "T2"
},
// Short Answer 19
{
  type: "ShortAnswer",
  topic: "Taxonomy",
  year: "Taxonomy Handout",
  tag: "Domain",
  q: "When was the 'Domain' rank introduced, relative to Linnaeus's original classification system?",
  answer: ["1990 (over 250 years after Linnaeus's system)"],
  explanation: "The Domain rank is a relatively new addition to taxonomy, reflecting a deeper understanding of phylogenetic relationships, particularly among prokaryotes.",
  course: "BI110",
  term: "T2"
},
// Short Answer 20
{
  type: "ShortAnswer",
  topic: "Prokaryotes",
  year: "Taxonomy Handout",
  tag: "Genetic Material",
  q: "Where is the genetic material (DNA) primarily located in a prokaryotic cell?",
  answer: ["In the cytoplasm, in a region called the nucleoid (or as a single circular chromosome in the cytoplasm)"],
  explanation: "Unlike eukaryotes, prokaryotes do not compartmentalize their DNA within a membrane-bound nucleus.",
  course: "BI110",
  term: "T2"
}
];
