const shortData = [
  
  //BI110 TAXONOMY NEW CONTENT 
  
  
  // ======================== TAXONOMY FUNDAMENTALS (Q1–Q30) ========================
  // Q1
  {
    course: "BI110", term: "T2",
    q: "What is **taxonomy**?",
    keywords: ["taxonomy", "classification of organisms", "naming organisms", "identifying organisms", "describing organisms", "biological classification"],
    explanation: `## Insight\nTaxonomy is the branch of science that deals with the description, identification, nomenclature, and classification of living organisms. It provides a universal system for scientists to communicate about biodiversity.\n> **Key Takeaway:** Taxonomy is the science of classifying, naming, and identifying organisms.`
  },
  // Q2
  {
    course: "BI110", term: "T2",
    q: "Who is considered the **father of taxonomy**?",
    keywords: ["carl linnaeus", "linnaeus", "carolus linnaeus", "father of taxonomy"],
    explanation: `## Insight\nCarl Linnaeus, an 18th-century Swedish botanist, developed the hierarchical classification system and binomial nomenclature, earning him the title "father of taxonomy".\n> **Key Takeaway:** Carl Linnaeus is the father of modern taxonomy.`
  },
  // Q3
  {
    course: "BI110", term: "T2",
    q: "What is a **clade** in phylogenetic taxonomy?",
    keywords: ["clade", "monophyletic group", "common ancestor and all descendants", "evolutionary branch"],
    explanation: `## Insight\nA clade is a group of organisms that includes a single common ancestor and all of its descendants. It represents one branch on the tree of life.\n> **Key Takeaway:** A clade is a monophyletic group containing an ancestor and all its descendants.`
  },
  // Q4
  {
    course: "BI110", term: "T2",
    q: "List the **eight major taxonomic ranks** from most general to most specific.",
    keywords: ["domain", "kingdom", "phylum", "class", "order", "family", "genus", "species"],
    explanation: `## Insight\nA useful mnemonic is "Dear King Philip Came Over For Good Soup". Domain is broadest, species is most specific.\n> **Key Takeaway:** Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species.`
  },
  // Q5
  {
    course: "BI110", term: "T2",
    q: "What is the **most inclusive** (broadest) taxonomic rank?",
    keywords: ["domain", "domain rank", "highest rank", "most general rank"],
    explanation: `## Insight\nDomain sits above Kingdom and groups life by fundamental cellular characteristics (Bacteria, Archaea, Eukarya).\n> **Key Takeaway:** Domain is the highest and broadest taxonomic rank.`
  },
  // Q6
  {
    course: "BI110", term: "T2",
    q: "What is the **most specific** taxonomic rank?",
    keywords: ["species", "species rank", "basic unit"],
    explanation: `## Insight\nSpecies is the most specific major rank, representing a group of organisms that can interbreed and produce fertile offspring.\n> **Key Takeaway:** Species is the most specific taxonomic rank.`
  },
  // Q7
  {
    course: "BI110", term: "T2",
    q: "Why are taxonomic ranks (except species) always **capitalized** in scientific writing?",
    keywords: ["capitalization", "proper noun", "formal name", "distinguishes rank", "taxonomic rank capitalization"],
    explanation: `## Insight\nCapitalization indicates that you are referring to the formal taxonomic group (e.g., domain Bacteria) rather than a common descriptive term (e.g., "bacteria").\n> **Key Takeaway:** Capitalisation distinguishes formal taxonomic names from common words.`
  },
  // Q8
  {
    course: "BI110", term: "T2",
    q: "Which two taxonomic ranks are always **italicized**?",
    keywords: ["genus", "species", "genus and species", "italicized ranks"],
    explanation: `## Insight\nIn binomial nomenclature, the full scientific name (genus + specific epithet) is italicized. Higher ranks are not italicized.\n> **Key Takeaway:** Only genus and species names are italicized.`
  },
  // Q9
  {
    course: "BI110", term: "T2",
    q: "What does **binomial nomenclature** consist of?",
    keywords: ["genus", "species", "generic name", "specific epithet", "two-part name"],
    explanation: `## Insight\nBinomial nomenclature uses two Latinised names: the genus (capitalized) and the specific epithet (lowercase). Together they form a unique scientific name.\n> **Key Takeaway:** Binomial name = genus + specific epithet.`
  },
  // Q10
  {
    course: "BI110", term: "T2",
    q: "Why is **Latin** used for scientific names?",
    keywords: ["latin", "stable language", "unchanging", "universal", "dead language", "no evolution of meaning"],
    explanation: `## Insight\nLatin is a "dead" language – its vocabulary and grammar are fixed. This ensures that a scientific name means the same thing today as it did 200 years ago, regardless of the scientist's native language.\n> **Key Takeaway:** Latin provides a stable, universal naming system.`
  },
  // Q11
  {
    course: "BI110", term: "T2",
    q: "How is the scientific name ***Homo sapiens*** correctly abbreviated after its first use?",
    keywords: ["h. sapiens", "homo s.", "genus abbreviation", "h. sapiens"],
    explanation: `## Insight\nThe genus is reduced to its initial capital letter followed by a period; the species epithet remains fully written. Both parts remain italicized.\n> **Key Takeaway:** *Homo sapiens* is abbreviated as *H. sapiens*.`
  },
  // Q12
  {
    course: "BI110", term: "T2",
    q: "Give **three reasons** why scientists use scientific names instead of common names.",
    keywords: ["universal reference", "avoids confusion", "global communication", "unique worldwide", "no regional variation", "standardized"],
    explanation: `## Insight\nCommon names vary by language and region; scientific names are unique, universally recognised, and do not change, enabling clear international communication.\n> **Key Takeaway:** Scientific names ensure clarity, consistency, and global understanding.`
  },
  // Q13
  {
    course: "BI110", term: "T2",
    q: "The species name ***americanus*** appears in both *Ursus americanus* (American black bear) and *Bufo americanus* (American toad). Is this a violation of naming rules? Explain.",
    keywords: ["no violation", "genus unique", "species epithet reused", "full binomial unique", "not a violation"],
    explanation: `## Insight\nThe rule is that the full binomial name (genus + species) must be unique. The same species epithet can be used in different genera because the genus distinguishes them.\n> **Key Takeaway:** Species epithets can be reused across different genera; only the complete binomial name must be unique.`
  },
  // Q14
  {
    course: "BI110", term: "T2",
    q: "What is a **taxon** (plural: taxa)?",
    keywords: ["taxon", "taxa", "named group", "taxonomic group", "category"],
    explanation: `## Insight\nA taxon is any named group at any level of the taxonomic hierarchy, such as a species, genus, family, or domain.\n> **Key Takeaway:** A taxon is a named taxonomic group.`
  },
  // Q15
  {
    course: "BI110", term: "T2",
    q: "What is **systematics**?",
    keywords: ["systematics", "evolutionary relationships", "phylogenetic classification", "study of diversity and relationships"],
    explanation: `## Insight\nSystematics is the study of the diversity of organisms and their evolutionary relationships. It uses taxonomy as a foundation but adds phylogenetic analysis.\n> **Key Takeaway:** Systematics focuses on evolutionary relationships among organisms.`
  },
  // Q16
  {
    course: "BI110", term: "T2",
    q: "What is a **phylogenetic tree**?",
    keywords: ["phylogenetic tree", "evolutionary tree", "cladogram", "branching diagram", "evolutionary relationships"],
    explanation: `## Insight\nA phylogenetic tree is a branching diagram that shows the inferred evolutionary relationships among species or other taxa based on shared derived characteristics.\n> **Key Takeaway:** A phylogenetic tree represents evolutionary history.`
  },
  // Q17
  {
    course: "BI110", term: "T2",
    q: "What is the difference between **homologous** and **analogous** structures?",
    keywords: ["homologous common ancestor", "analogous convergent evolution", "same origin different function", "different origin same function"],
    explanation: `## Insight\nHomologous structures share a common ancestry (e.g., human arm and bird wing). Analogous structures serve similar functions but evolved independently (e.g., bird wing and insect wing).\n> **Key Takeaway:** Homology = shared ancestry; analogy = convergent function.`
  },
  // Q18
  {
    course: "BI110", term: "T2",
    q: "What is **morphology** in the context of taxonomy?",
    keywords: ["morphology", "form and structure", "physical characteristics", "anatomy"],
    explanation: `## Insight\nMorphology is the study of the form and structure of organisms. Taxonomists use morphological characters (e.g., number of legs, leaf shape) to classify organisms.\n> **Key Takeaway:** Morphology refers to the physical form of an organism.`
  },
  // Q19
  {
    course: "BI110", term: "T2",
    q: "What is **phylogeny**?",
    keywords: ["phylogeny", "evolutionary history", "ancestral relationships", "evolutionary lineage"],
    explanation: `## Insight\nPhylogeny is the evolutionary history of a species or group, often represented as a branching tree (phylogenetic tree).\n> **Key Takeaway:** Phylogeny is the evolutionary lineage of organisms.`
  },
  // Q20
  {
    course: "BI110", term: "T2",
    q: "What is a **character** in taxonomy?",
    keywords: ["character", "trait", "feature", "observable characteristic", "measurable attribute"],
    explanation: `## Insight\nA character is any observable or measurable feature of an organism, such as flower colour, number of legs, or DNA sequence.\n> **Key Takeaway:** A character is a distinguishing feature used in classification.`
  },
  // Q21
  {
    course: "BI110", term: "T2",
    q: "What is a **character state**? Give an example.",
    keywords: ["character state", "alternate form", "specific expression", "opposite leaves", "red flowers"],
    explanation: `## Insight\nA character state is one specific expression of a character. For example, if the character is "leaf arrangement", the states could be "opposite", "alternate", or "whorled".\n> **Key Takeaway:** A character state is a particular version of a character.`
  },
  // Q22
  {
    course: "BI110", term: "T2",
    q: "What is a **multistate character**?",
    keywords: ["multistate", "more than two states", "multiple expressions", "three or more states"],
    explanation: `## Insight\nA multistate character is a character that can take three or more distinct forms. Example: petal colour (red, white, blue, yellow).\n> **Key Takeaway:** Multistate characters have three or more possible states.`
  },
  // Q23
  {
    course: "BI110", term: "T2",
    q: "Who introduced the **three-domain system** and in what year?",
    keywords: ["carl woese", "woese", "1990", "three domains", "domain system"],
    explanation: `## Insight\nCarl Woese proposed the three-domain system in 1990 based on ribosomal RNA (rRNA) analysis, which revealed fundamental differences among prokaryotes.\n> **Key Takeaway:** Carl Woese introduced the three-domain system in 1990.`
  },
  // Q24
  {
    course: "BI110", term: "T2",
    q: "Name the **three domains of life**.",
    keywords: ["bacteria", "archaea", "eukarya", "bacteria archaea eukarya"],
    explanation: `## Insight\nBacteria and Archaea are prokaryotes (no nucleus); Eukarya includes all organisms with a membrane-bound nucleus.\n> **Key Takeaway:** The three domains are Bacteria, Archaea, and Eukarya.`
  },
  // Q25
  {
    course: "BI110", term: "T2",
    q: "Which domain contains organisms with a **true, membrane-bound nucleus**?",
    keywords: ["eukarya", "eukaryotes", "eukaryota"],
    explanation: `## Insight\nEukarya includes protists, fungi, plants, and animals – all have a true nucleus and membrane-bound organelles.\n> **Key Takeaway:** Eukarya is the domain of nucleated organisms.`
  },
  // Q26
  {
    course: "BI110", term: "T2",
    q: "What is the main structural difference between **Bacteria and Archaea**?",
    keywords: ["cell wall", "peptidoglycan", "ether lipids", "membrane composition", "rna polymerase"],
    explanation: `## Insight\nBacteria have peptidoglycan in their cell walls; Archaea lack peptidoglycan and have ether-linked membrane lipids. Their rRNA sequences also differ significantly.\n> **Key Takeaway:** Archaea differ from Bacteria in cell wall and membrane chemistry.`
  },
  // Q27
  {
    course: "BI110", term: "T2",
    q: "What is **peptidoglycan**?",
    keywords: ["peptidoglycan", "murein", "bacterial cell wall", "polymer of sugars and amino acids", "target of penicillin"],
    explanation: `## Insight\nPeptidoglycan is a unique polymer of alternating sugars (N-acetylglucosamine and N-acetylmuramic acid) cross-linked by short peptide chains. It provides structural strength to bacterial cell walls.\n> **Key Takeaway:** Peptidoglycan is the rigid mesh that makes up bacterial cell walls.`
  },
  // Q28
  {
    course: "BI110", term: "T2",
    q: "What are **extremophiles**? Give one example.",
    keywords: ["extremophiles", "extreme environments", "thermophiles", "halophiles", "acidophiles", "methanogens"],
    explanation: `## Insight\nExtremophiles are organisms (mostly Archaea) that thrive in extreme conditions such as high temperature, high salinity, low pH, or absence of oxygen. Example: thermophiles in hot springs.\n> **Key Takeaway:** Extremophiles live in physically or chemically extreme environments.`
  },
  // Q29
  {
    course: "BI110", term: "T2",
    q: "Name **two kingdoms** within the domain Eukarya.",
    keywords: ["protista", "fungi", "plantae", "animalia", "protists", "fungi plants animals"],
    explanation: `## Insight\nThe domain Eukarya is divided into four main kingdoms: Protista, Fungi, Plantae, and Animalia.\n> **Key Takeaway:** Eukarya includes Protista, Fungi, Plantae, and Animalia.`
  },
  // Q30
  {
    course: "BI110", term: "T2",
    q: "What is the **full classification** of humans from domain to species?",
    keywords: ["eukarya", "animalia", "chordata", "mammalia", "primates", "hominidae", "homo", "homo sapiens"],
    explanation: `## Insight\nDomain: Eukarya; Kingdom: Animalia; Phylum: Chordata; Class: Mammalia; Order: Primates; Family: Hominidae; Genus: Homo; Species: Homo sapiens.\n> **Key Takeaway:** Human classification: Eukarya → Animalia → Chordata → Mammalia → Primates → Hominidae → Homo → Homo sapiens.`
  },
  // ======================== BIOLOGICAL SPECIES CONCEPT (Q31–Q50) ========================
  // Q31
  {
    course: "BI110", term: "T2",
    q: "What is the **Biological Species Concept (BSC)**?",
    keywords: ["biological species concept", "bsc", "interbreeding", "reproductive isolation", "fertile offspring", "ernst mayr"],
    explanation: `## Insight\nThe BSC defines a species as a group of natural populations that can interbreed successfully and are reproductively isolated from other such groups. It was formalised by Ernst Mayr in 1942.\n> **Key Takeaway:** A species is a group of interbreeding populations reproductively isolated from others.`
  },
  // Q32
  {
    course: "BI110", term: "T2",
    q: "Who formulated the **Biological Species Concept** in 1942?",
    keywords: ["ernst mayr", "mayr"],
    explanation: `## Insight\nErnst Mayr, an evolutionary biologist, proposed the BSC, shifting species definition from appearance to reproductive compatibility.\n> **Key Takeaway:** Ernst Mayr defined the Biological Species Concept.`
  },
  // Q33
  {
    course: "BI110", term: "T2",
    q: "What role does **sexual reproduction** play in the BSC?",
    keywords: ["gene flow", "shared gene pool", "genetic recombination", "maintains species cohesion", "prevents divergence"],
    explanation: `## Insight\nSexual reproduction allows gene flow within a species, maintaining a shared gene pool and preventing populations from diverging into separate species.\n> **Key Takeaway:** Sexual reproduction keeps species genetically unified.`
  },
  // Q34
  {
    course: "BI110", term: "T2",
    q: "Why **cannot** the BSC be applied to bacteria?",
    keywords: ["asexual", "binary fission", "no interbreeding", "clonal reproduction", "horizontal gene transfer", "does not mate"],
    explanation: `## Insight\nBacteria reproduce asexually by binary fission; they do not interbreed, so the concept of reproductive isolation is meaningless for them.\n> **Key Takeaway:** The BSC fails for asexual organisms.`
  },
  // Q35
  {
    course: "BI110", term: "T2",
    q: "What is a **hybrid zone**?",
    keywords: ["hybrid zone", "interbreeding area", "overlap region", "species meet and interbreed", "gene flow between species"],
    explanation: `## Insight\nA hybrid zone is a geographic area where two distinct species overlap and interbreed, producing hybrid offspring. This challenges strict reproductive isolation.\n> **Key Takeaway:** Hybrid zones blur species boundaries.`
  },
  // Q36
  {
    course: "BI110", term: "T2",
    q: "What is **parthenogenesis**? Give an example.",
    keywords: ["parthenogenesis", "asexual reproduction", "unfertilized eggs", "all-female population", "lizards", "salamanders", "aphids"],
    explanation: `## Insight\nParthenogenesis is a form of asexual reproduction where females produce eggs that develop without fertilisation, giving rise to female clones. Example: some lizards and salamanders.\n> **Key Takeaway:** Parthenogenesis produces offspring from unfertilised eggs.`
  },
  // Q37
  {
    course: "BI110", term: "T2",
    q: "What is **horizontal gene transfer**?",
    keywords: ["horizontal gene transfer", "lateral gene transfer", "gene exchange between species", "bacterial conjugation", "transformation", "transduction"],
    explanation: `## Insight\nHorizontal gene transfer is the movement of genetic material between organisms that are not parent and offspring, common in bacteria. It challenges the BSC because genes can be exchanged without interbreeding.\n> **Key Takeaway:** HGT allows gene flow between unrelated species.`
  },
  // Q38
  {
    course: "BI110", term: "T2",
    q: "What is a **prezygotic isolating mechanism**? Give one example.",
    keywords: ["prezygotic", "before fertilization", "temporal isolation", "habitat isolation", "behavioral isolation", "mechanical isolation", "gametic isolation"],
    explanation: `## Insight\nPrezygotic mechanisms prevent mating or fertilisation. Examples: temporal isolation (different breeding seasons), habitat isolation, or behavioural isolation (different courtship rituals).\n> **Key Takeaway:** Prezygotic barriers act before zygote formation.`
  },
  // Q39
  {
    course: "BI110", term: "T2",
    q: "What is a **postzygotic isolating mechanism**? Give one example.",
    keywords: ["postzygotic", "after fertilization", "hybrid inviability", "hybrid sterility", "hybrid breakdown", "mule"],
    explanation: `## Insight\nPostzygotic mechanisms operate after fertilisation, often producing hybrids that are inviable or sterile. Example: a mule (horse x donkey) is sterile.\n> **Key Takeaway:** Postzygotic barriers reduce hybrid fitness.`
  },
  // Q40
  {
    course: "BI110", term: "T2",
    q: "What is the **dark-eyed junco** example?",
    keywords: ["dark-eyed junco", "junco hyemalis", "subspecies interbreed", "variation problem", "biological species concept difficulty"],
    explanation: `## Insight\nFour junco varieties look like separate species in their own regions but interbreed freely where their ranges overlap, forcing classification as one species with subspecies. This shows the BSC is difficult to apply even to well-known birds.\n> **Key Takeaway:** Variation can blur species boundaries under the BSC.`
  },
  // Q41
  {
    course: "BI110", term: "T2",
    q: "What is **reproductive isolation**?",
    keywords: ["reproductive isolation", "cannot interbreed", "no gene flow", "species separation"],
    explanation: `## Insight\nReproductive isolation means that members of different species cannot produce viable, fertile offspring. It is the key criterion of the Biological Species Concept.\n> **Key Takeaway:** Reproductive isolation keeps species separate.`
  },
  // Q42
  {
    course: "BI110", term: "T2",
    q: "Why are **hybrids** often less fertile than pure species?",
    keywords: ["chromosome mismatch", "meiosis problems", "infertility", "reduced fertility", "uneven chromosome pairing"],
    explanation: `## Insight\nHybrids often have mismatched chromosomes from the two parent species, leading to improper pairing during meiosis and failure to produce functional gametes.\n> **Key Takeaway:** Chromosome incompatibility reduces hybrid fertility.`
  },
  // Q43
  {
    course: "BI110", term: "T2",
    q: "What is the **morphological species concept**?",
    keywords: ["morphological species concept", "based on appearance", "physical characteristics", "typological concept"],
    explanation: `## Insight\nThe morphological species concept defines a species based on measurable physical traits (morphology). It is still used for fossils and asexual organisms.\n> **Key Takeaway:** Morphological species are distinguished by form and structure.`
  },
  // Q44
  {
    course: "BI110", term: "T2",
    q: "What is the **phylogenetic species concept**?",
    keywords: ["phylogenetic species concept", "smallest monophyletic group", "shared derived characters", "dna evidence"],
    explanation: `## Insight\nThe phylogenetic species concept defines a species as the smallest group of individuals that share a common ancestor and form a monophyletic branch on a phylogenetic tree.\n> **Key Takeaway:** Phylogenetic species are based on evolutionary history.`
  },
  // Q45
  {
    course: "BI110", term: "T2",
    q: "What is **speciation**?",
    keywords: ["speciation", "formation of new species", "evolutionary divergence", "reproductive isolation", "splitting of lineages"],
    explanation: `## Insight\nSpeciation is the evolutionary process by which populations evolve to become distinct species, usually through reproductive isolation.\n> **Key Takeaway:** Speciation creates new species from existing ones.`
  },
  // Q46
  {
    course: "BI110", term: "T2",
    q: "What is **allopatric speciation**?",
    keywords: ["allopatric", "geographic separation", "physical barrier", "vicariance", "separated populations"],
    explanation: `## Insight\nAllopatric speciation occurs when populations are geographically separated (e.g., by a mountain range or river) and evolve independently, eventually becoming different species.\n> **Key Takeaway:** Geographic isolation leads to allopatric speciation.`
  },
  // Q47
  {
    course: "BI110", term: "T2",
    q: "What is **sympatric speciation**?",
    keywords: ["sympatric", "same geographic area", "no physical barrier", "polyploidy", "habitat differentiation"],
    explanation: `## Insight\nSympatric speciation occurs when new species evolve from a single ancestral population while inhabiting the same geographic region, often through polyploidy or niche differentiation.\n> **Key Takeaway:** Sympatric speciation happens without geographic separation.`
  },
  // Q48
  {
    course: "BI110", term: "T2",
    q: "What is **polyploidy** and how can it cause speciation?",
    keywords: ["polyploidy", "extra sets of chromosomes", "autopolyploidy", "allopolyploidy", "instant speciation", "plants"],
    explanation: `## Insight\nPolyploidy is the condition of having more than two complete sets of chromosomes. It can create immediate reproductive isolation because polyploid individuals cannot interbreed with diploid parents, leading to new species (common in plants).\n> **Key Takeaway:** Polyploidy can cause instantaneous speciation.`
  },
  // Q49
  {
    course: "BI110", term: "T2",
    q: "What is **adaptive radiation**?",
    keywords: ["adaptive radiation", "rapid diversification", "new ecological niches", "common ancestor", "darwin finches"],
    explanation: `## Insight\nAdaptive radiation is the rapid evolution of many species from a single ancestor into a wide variety of forms that occupy different ecological niches. Example: Darwin's finches.\n> **Key Takeaway:** Adaptive radiation fills many niches from one ancestor.`
  },
  // Q50
  {
    course: "BI110", term: "T2",
    q: "What is a **subspecies**?",
    keywords: ["subspecies", "geographic race", "infraspecific variation", "different populations", "potential to interbreed"],
    explanation: `## Insight\nA subspecies is a geographically distinct population within a species that differs morphologically from other populations but can still interbreed with them.\n> **Key Takeaway:** Subspecies are geographic variants of a species.`
  },
  // ======================== VIRUSES (Q51–Q75) ========================
  // Q51
  {
    course: "BI110", term: "T2",
    q: "What are **viruses** made of structurally?",
    keywords: ["nucleic acid", "capsid", "protein coat", "dna or rna", "core", "envelope some viruses"],
    explanation: `## Insight\nA virus consists of a nucleic acid core (either DNA or RNA, never both) surrounded by a protein shell called a capsid. Some viruses also have a lipid envelope.\n> **Key Takeaway:** Viruses are composed of a nucleic acid core and a protein capsid.`
  },
  // Q52
  {
    course: "BI110", term: "T2",
    q: "Can a single virus contain **both DNA and RNA**? Explain.",
    keywords: ["no", "never both", "either dna or rna", "not both simultaneously", "single type of nucleic acid"],
    explanation: `## Insight\nNo. A virus particle contains either DNA or RNA as its genome, never both. This distinguishes viruses from cellular life, which always contains both.\n> **Key Takeaway:** Viruses contain either DNA or RNA, never both.`
  },
  // Q53
  {
    course: "BI110", term: "T2",
    q: "Why can viruses **only replicate inside living cells**?",
    keywords: ["obligate intracellular", "lack ribosomes", "no metabolism", "cannot produce atp", "need host machinery", "hijack host cell"],
    explanation: `## Insight\nViruses have no ribosomes, no ATP-producing machinery, and no ability to synthesise proteins. They must hijack a host cell's machinery to replicate.\n> **Key Takeaway:** Viruses are obligate intracellular parasites.`
  },
  // Q54
  {
    course: "BI110", term: "T2",
    q: "What is a **bacteriophage**?",
    keywords: ["bacteriophage", "phage", "virus that infects bacteria", "bacteria eater"],
    explanation: `## Insight\nA bacteriophage (or phage) is a virus that specifically infects and destroys bacterial cells. They are the most abundant biological entities on Earth.\n> **Key Takeaway:** A bacteriophage is a virus that infects bacteria.`
  },
  // Q55
  {
    course: "BI110", term: "T2",
    q: "List the **five stages** of the bacteriophage lytic replication cycle.",
    keywords: ["attachment", "injection", "synthesis", "assembly", "release", "attachment injection synthesis assembly release"],
    explanation: `## Insight\nThe stages are: 1) Attachment – tail fibres bind to bacterial receptors. 2) Injection – nucleic acid enters host. 3) Synthesis – host makes viral components. 4) Assembly – new phages are built. 5) Release – cell lyses, releasing phages.\n> **Key Takeaway:** Lytic cycle: attachment → injection → synthesis → assembly → release.`
  },
  // Q56
  {
    course: "BI110", term: "T2",
    q: "What is the function of the **viral capsid**?",
    keywords: ["protects nucleic acid", "prevents degradation", "shields genome", "from dnase", "enzymes", "attachment", "host recognition"],
    explanation: `## Insight\nThe capsid acts as a protective shell that prevents the viral genome from being destroyed by enzymes (like DNase) in the environment. It also aids in attachment to host cells.\n> **Key Takeaway:** The capsid protects the viral nucleic acid from enzymatic degradation.`
  },
  // Q57
{
  course: "BI110", term: "T2",
  q: "What is a **\"protein ghost\"** in bacteriophage infection?",
  keywords: ["protein ghost", "empty capsid", "protein shell left outside", "after injection", "ghost"],
  explanation: `## Insight\nAfter a bacteriophage injects its nucleic acid into the host bacterium, the empty protein capsid remains attached to the outside of the cell wall. This inert remnant is called the protein ghost.\n> **Key Takeaway:** The protein ghost is the empty capsid left outside after phage injection.`
},
  // Q58
  {
    course: "BI110", term: "T2",
    q: "Which enzyme **perforates** the bacterial cell wall during phage injection?",
    keywords: ["early muramidase", "lysozyme", "muramidase", "peptidoglycan degradation", "localized digestion"],
    explanation: `## Insight\nEarly muramidase (also called lysozyme) is secreted by the phage to create a small hole in the bacterial peptidoglycan cell wall, allowing the tail core to pass through and inject the nucleic acid.\n> **Key Takeaway:** Early muramidase (lysozyme) perforates the bacterial cell wall during injection.`
  },
  // Q59
  {
    course: "BI110", term: "T2",
    q: "Which enzyme is responsible for **lysing** the bacterial cell wall at the end of the lytic cycle?",
    keywords: ["late muramidase", "late lysozyme", "endolysin", "cell lysis", "burst"],
    explanation: `## Insight\nLate muramidase is produced in large quantities at the end of the lytic cycle. It digests the cell wall from inside, causing the bacterium to burst (lyse) and release new phages.\n> **Key Takeaway:** Late muramidase causes host cell lysis and phage release.`
  },
  // Q60
  {
    course: "BI110", term: "T2",
    q: "Why are viruses **not classified** in any of the three domains of life?",
    keywords: ["non-cellular", "acellular", "no metabolism", "not living", "cannot reproduce independently", "no cells"],
    explanation: `## Insight\nDomains classify cellular organisms. Viruses are acellular, lack independent metabolism, and cannot reproduce without a host, so they are excluded from the domain system.\n> **Key Takeaway:** Viruses are not placed in any domain because they are non-cellular.`
  },
  // Q61
  {
    course: "BI110", term: "T2",
    q: "What is the **lysogenic cycle**?",
    keywords: ["lysogenic cycle", "integration", "prophage", "dormant", "latent", "viral dna incorporated into host genome"],
    explanation: `## Insight\nIn the lysogenic cycle, the viral genome integrates into the host chromosome (as a prophage) and replicates passively with the host cell without causing immediate lysis.\n> **Key Takeaway:** The lysogenic cycle involves viral DNA integration and dormancy.`
  },
  // Q62
  {
    course: "BI110", term: "T2",
    q: "What is a **prophage**?",
    keywords: ["prophage", "integrated viral dna", "bacterial chromosome", "lysogenic cycle", "temperate phage"],
    explanation: `## Insight\nA prophage is the viral DNA that has been integrated into the bacterial chromosome during the lysogenic cycle of a temperate bacteriophage.\n> **Key Takeaway:** A prophage is latent viral DNA inside a bacterial genome.`
  },
  // Q63
  {
    course: "BI110", term: "T2",
    q: "What triggers a **prophage** to exit the lysogenic cycle and enter the lytic cycle?",
    keywords: ["prophage induction", "uv radiation", "dna damage", "sos response", "stress", "environmental trigger"],
    explanation: `## Insight\nEnvironmental stress such as UV radiation or DNA damage triggers the SOS response, causing the prophage to excise from the host chromosome and initiate the lytic cycle.\n> **Key Takeaway:** DNA damage induces prophage activation.`
  },
  // Q64
  {
    course: "BI110", term: "T2",
    q: "What is a **temperate bacteriophage**?",
    keywords: ["temperate phage", "can choose lytic or lysogenic", "both cycles", "lambda phage", "dual lifestyle"],
    explanation: `## Insight\nA temperate bacteriophage is a phage that can either replicate lytically (killing the host) or integrate its genome into the host chromosome as a prophage (lysogeny).\n> **Key Takeaway:** Temperate phages have both lytic and lysogenic cycles.`
  },
  // Q65
  {
    course: "BI110", term: "T2",
    q: "What is a **virulent bacteriophage**?",
    keywords: ["virulent phage", "lytic only", "always kills host", "no lysogenic cycle", "obligate lytic"],
    explanation: `## Insight\nA virulent bacteriophage is a phage that only follows the lytic cycle, replicating rapidly and lysing the host cell immediately; it cannot enter the lysogenic cycle.\n> **Key Takeaway:** Virulent phages only cause lytic infections.`
  },
  // Q66
  {
    course: "BI110", term: "T2",
    q: "What is the **shape** of the Tobacco Mosaic Virus (TMV)?",
    keywords: ["helical", "rod-like", "rigid cylinder", "helical symmetry", "tobacco mosaic virus shape"],
    explanation: `## Insight\nTMV is a helical (rod‑like) virus. Its capsid proteins assemble around the RNA in a spiral, forming a rigid, cylindrical particle.\n> **Key Takeaway:** TMV has a rigid helical (rod-like) shape.`
  },
  // Q67
  {
    course: "BI110", term: "T2",
    q: "What is the **shape** of most spherical (isometric) viruses?",
    keywords: ["icosahedron", "icosahedral", "20 faces", "triangular facets", "spherical viruses shape"],
    explanation: `## Insight\nMost roughly spherical viruses have an icosahedral capsid – a geometric structure made of 20 equilateral triangular faces.\n> **Key Takeaway:** Isometric viruses are icosahedral.`
  },
  // Q68
  {
    course: "BI110", term: "T2",
    q: "Which human virus has a **filamentous** (thread‑like) morphology?",
    keywords: ["ebola", "filamentous", "filoviridae", "thread-like", "ebola virus shape"],
    explanation: `## Insight\nEbola virus belongs to the Filoviridae family and appears as long, flexible, tangled filaments under an electron microscope.\n> **Key Takeaway:** Ebola virus is filamentous.`
  },
  // Q69
  {
    course: "BI110", term: "T2",
    q: "What is a **viroid**?",
    keywords: ["viroid", "naked rna", "circular rna", "no protein coat", "plant pathogen", "infectious rna"],
    explanation: `## Insight\nA viroid is an infectious agent consisting solely of a short, circular, single‑stranded RNA molecule without a protein capsid. It causes diseases in plants.\n> **Key Takeaway:** A viroid is a naked infectious RNA.`
  },
  // Q70
  {
    course: "BI110", term: "T2",
    q: "What is a **prion**?",
    keywords: ["prion", "infectious protein", "misfolded protein", "neurodegenerative", "bse", "cjd", "no nucleic acid"],
    explanation: `## Insight\nA prion is an infectious protein that causes fatal neurodegenerative diseases by inducing normal proteins to misfold. Examples: mad cow disease (BSE), Creutzfeldt‑Jakob disease (CJD).\n> **Key Takeaway:** A prion is an infectious, misfolded protein.`
  },
  // Q71
  {
    course: "BI110", term: "T2",
    q: "What is the **Baltimore classification** system based on?",
    keywords: ["genome type", "dna or rna", "single or double stranded", "sense", "replication strategy", "mrna synthesis"],
    explanation: `## Insight\nThe Baltimore classification groups viruses into seven classes based on the type of nucleic acid (DNA/RNA, single/double, sense) and their mechanism of mRNA synthesis.\n> **Key Takeaway:** Baltimore classification is based on viral genome and replication.`
  },
  // Q72
  {
    course: "BI110", term: "T2",
    q: "What is a **DNA virus**? Give an example.",
    keywords: ["dna virus", "double-stranded dna", "single-stranded dna", "herpesvirus", "adenovirus", "poxvirus", "parvovirus"],
    explanation: `## Insight\nA DNA virus has DNA as its genetic material. Examples: herpesvirus (dsDNA), parvovirus (ssDNA).\n> **Key Takeaway:** DNA viruses use DNA as their genome.`
  },
  // Q73
  {
    course: "BI110", term: "T2",
    q: "What is an **RNA virus**? Give an example.",
    keywords: ["rna virus", "single-stranded rna", "double-stranded rna", "influenza", "hiv", "ebola", "poliovirus", "covid-19"],
    explanation: `## Insight\nAn RNA virus has RNA as its genetic material. Examples: influenza virus, HIV (retrovirus), poliovirus, Ebola virus.\n> **Key Takeaway:** RNA viruses use RNA as their genome.`
  },
  // Q74
  {
    course: "BI110", term: "T2",
    q: "What is a **retrovirus**? Give an example.",
    keywords: ["retrovirus", "reverse transcriptase", "rna to dna", "hiv", "retroviral replication"],
    explanation: `## Insight\nA retrovirus is an RNA virus that uses the enzyme reverse transcriptase to convert its RNA genome into DNA, which then integrates into the host genome. Example: HIV.\n> **Key Takeaway:** Retroviruses have an RNA genome but replicate through a DNA intermediate.`
  },
  // Q75
  {
    course: "BI110", term: "T2",
    q: "What is **reverse transcriptase**?",
    keywords: ["reverse transcriptase", "rna-dependent dna polymerase", "rna to dna", "retrovirus enzyme"],
    explanation: `## Insight\nReverse transcriptase is an enzyme that synthesises a complementary DNA strand from an RNA template. It is unique to retroviruses and is the target of several antiretroviral drugs.\n> **Key Takeaway:** Reverse transcriptase converts viral RNA into DNA.`
  },
  // ======================== KINGDOM PROTISTA (Q76–Q100) ========================
  // Q76
  {
    course: "BI110", term: "T2",
    q: "Who coined the term **Protista** and in what year?",
    keywords: ["ernst haeckel", "haeckel", "1886", "protista coined", "third kingdom"],
    explanation: `## Insight\nErnst Haeckel, a German naturalist, proposed the kingdom Protista in 1886 to accommodate unicellular organisms that did not fit into the plant or animal kingdoms.\n> **Key Takeaway:** Ernst Haeckel introduced the kingdom Protista in 1886.`
  },
  // Q77
  {
    course: "BI110", term: "T2",
    q: "What is the key cellular feature that distinguishes **protists from prokaryotes**?",
    keywords: ["eukaryotic", "membrane-bound nucleus", "true nucleus", "organelles", "mitochondria"],
    explanation: `## Insight\nProtists are eukaryotes – they have a true, membrane-bound nucleus and other organelles such as mitochondria. Prokaryotes lack a nucleus.\n> **Key Takeaway:** Protists are eukaryotic; prokaryotes are not.`
  },
  // Q78
  {
    course: "BI110", term: "T2",
    q: "Into what two major categories is Kingdom Protista divided?",
    keywords: ["protozoans", "algae", "animal-like", "plant-like", "heterotrophic", "autotrophic"],
    explanation: `## Insight\nProtista is divided into protozoans (animal‑like, heterotrophic, motile) and algae (plant‑like, autotrophic via photosynthesis). Fungus‑like protists (slime molds) are also recognised.\n> **Key Takeaway:** Protozoans (animal-like) and algae (plant-like).`
  },
  // Q79
  {
    course: "BI110", term: "T2",
    q: "What are the **four groups** of protozoans based on locomotion?",
    keywords: ["sarcodinians", "zooflagellates", "ciliophorans", "sporozoans", "pseudopodia", "flagella", "cilia", "non-motile"],
    explanation: `## Insight\nSarcodinians (pseudopodia), Zooflagellates (flagella), Ciliophorans (cilia), and Sporozoans (non‑motile).\n> **Key Takeaway:** Protozoan groups are classified by their mode of movement.`
  },
  // Q80
  {
    course: "BI110", term: "T2",
    q: "Which protozoan moves using **pseudopodia**? Give an example.",
    keywords: ["sarcodinians", "amoeba", "pseudopodia", "false feet", "amoeba proteus"],
    explanation: `## Insight\nSarcodinians, such as Amoeba, move and feed by extending pseudopodia ("false feet") – temporary projections of cytoplasm.\n> **Key Takeaway:** Amoeba uses pseudopodia for movement.`
  },
  // Q81
  {
    course: "BI110", term: "T2",
    q: "Which protozoan moves using **flagella**? Give an example.",
    keywords: ["zooflagellates", "trypanosoma", "flagella", "euglena", "giardia"],
    explanation: `## Insight\nZooflagellates use one or more flagella (whip‑like structures) for movement. Examples: Trypanosoma, Euglena (which also has chloroplasts), Giardia.\n> **Key Takeaway:** Trypanosoma moves using flagella.`
  },
  // Q82
  {
    course: "BI110", term: "T2",
    q: "Which protozoan moves using **cilia**? Give an example.",
    keywords: ["ciliophorans", "paramecium", "cilia", "ciliates", "paramecium caudatum"],
    explanation: `## Insight\nCiliophorans (ciliates) use numerous short, hair‑like cilia for locomotion and feeding. Example: Paramecium.\n> **Key Takeaway:** Paramecium moves using cilia.`
  },
  // Q83
  {
    course: "BI110", term: "T2",
    q: "Which protozoan group is **non‑motile** and parasitic? Give an example.",
    keywords: ["sporozoans", "plasmodium", "apicomplexa", "non-motile", "parasitic", "malaria"],
    explanation: `## Insight\nSporozoans (Apicomplexa) lack locomotory structures and are obligate parasites. Example: Plasmodium, which causes malaria.\n> **Key Takeaway:** Sporozoans are non‑motile parasitic protozoans.`
  },
  // Q84
  {
    course: "BI110", term: "T2",
    q: "What disease does **Plasmodium** cause?",
    keywords: ["malaria", "plasmodium causes malaria", "malaria parasite"],
    explanation: `## Insight\nPlasmodium is the protozoan parasite that causes malaria in humans. It is transmitted by Anopheles mosquitoes.\n> **Key Takeaway:** Malaria is caused by Plasmodium.`
  },
  // Q85
  {
    course: "BI110", term: "T2",
    q: "What is the vector for **malaria**?",
    keywords: ["anopheles mosquito", "anopheles", "female anopheles", "malaria vector"],
    explanation: `## Insight\nMalaria is transmitted by the bite of an infected female Anopheles mosquito.\n> **Key Takeaway:** Anopheles mosquitoes transmit Plasmodium.`
  },
  // Q86
  {
    course: "BI110", term: "T2",
    q: "What disease does **Trypanosoma gambiense** cause?",
    keywords: ["african sleeping sickness", "sleeping sickness", "trypanosomiasis", "human african trypanosomiasis"],
    explanation: `## Insight\nTrypanosoma gambiense causes African sleeping sickness, a fatal disease if untreated. It is transmitted by the tsetse fly.\n> **Key Takeaway:** Trypanosoma causes sleeping sickness.`
  },
  // Q87
  {
    course: "BI110", term: "T2",
    q: "What is the vector for **Trypanosoma**?",
    keywords: ["tsetse fly", "glossina", "tsetse", "sleeping sickness vector"],
    explanation: `## Insight\nThe tsetse fly (genus Glossina) is the biological vector that transmits Trypanosoma parasites between humans and animals.\n> **Key Takeaway:** The tsetse fly transmits Trypanosoma.`
  },
  // Q88
  {
    course: "BI110", term: "T2",
    q: "What is **phagocytosis**?",
    keywords: ["phagocytosis", "cell eating", "engulfment", "amoeba feeding", "endocytosis"],
    explanation: `## Insight\nPhagocytosis is a form of endocytosis where a cell engulfs large particles or other cells by extending its membrane around them. Amoeba uses this to feed.\n> **Key Takeaway:** Phagocytosis is the engulfment of food particles.`
  },
  // Q89
  {
    course: "BI110", term: "T2",
    q: "What is the common name for **green algae** (phylum Chlorophyta)?",
    keywords: ["green algae", "chlorophyta", "freshwater algae", "spirogyra", "chlorella"],
    explanation: `## Insight\nGreen algae (Chlorophyta) contain chlorophylls a and b, store starch, and have cell walls of cellulose – the same characteristics as land plants.\n> **Key Takeaway:** Chlorophyta are commonly called green algae.`
  },
  // Q90
  {
    course: "BI110", term: "T2",
    q: "Which algal phylum is commercially important as a source of **agar**?",
    keywords: ["red algae", "rhodophyta", "agar", "gelidium", "carrageenan"],
    explanation: `## Insight\nRed algae (Rhodophyta) produce gelatinous polysaccharides in their cell walls – agar and carrageenan. Agar is used to solidify microbiological media.\n> **Key Takeaway:** Agar is extracted from red algae.`
  },
  // Q91
  {
    course: "BI110", term: "T2",
    q: "What is **diatomaceous earth** and how is it formed?",
    keywords: ["diatomaceous earth", "fossilized diatoms", "silica frustules", "diatom shells", "sediment"],
    explanation: `## Insight\nDiatomaceous earth is a soft, powdery sediment formed from the accumulation of fossilised diatom shells (silica frustules) on the ocean floor over millions of years.\n> **Key Takeaway:** Diatomaceous earth comes from fossilised diatoms.`
  },
  // Q92
  {
    course: "BI110", term: "T2",
    q: "Which algal group is responsible for **red tides**?",
    keywords: ["dinoflagellates", "pyrrophyta", "gonyaulax", "karenia", "red tide", "algal bloom"],
    explanation: `## Insight\nDinoflagellates (phylum Pyrrophyta) cause red tides when they bloom uncontrollably. Many species produce neurotoxins that kill marine life and can cause paralytic shellfish poisoning.\n> **Key Takeaway:** Red tides are caused by dinoflagellates.`
  },
  // Q93
  {
    course: "BI110", term: "T2",
    q: "What are **dinoflagellates** known for?",
    keywords: ["bioluminescence", "red tides", "neurotoxins", "pyrrophyta", "two flagella", "glow in the dark"],
    explanation: `## Insight\nDinoflagellates are known for their ability to bioluminesce (glow at night) and for causing harmful algal blooms (red tides) that release neurotoxins.\n> **Key Takeaway:** Dinoflagellates can bioluminesce and cause red tides.`
  },
  // Q94
  {
    course: "BI110", term: "T2",
    q: "What are **slime molds** classified as?",
    keywords: ["fungus-like protists", "slime molds", "myxomycetes", "saprophytic protists"],
    explanation: `## Insight\nSlime molds are fungus-like protists because they are saprophytic (decomposers) and reproduce using spores, but they are not true fungi.\n> **Key Takeaway:** Slime molds are fungus-like protists.`
  },
  // Q95
  {
    course: "BI110", term: "T2",
    q: "What is a **plasmodium** in slime molds?",
    keywords: ["plasmodium", "multinucleate mass", "single cell", "many nuclei", "feeding stage", "slime mold"],
    explanation: `## Insight\nIn slime molds, the plasmodium is a large, multinucleate, single-celled mass that moves and feeds by phagocytosis during favourable conditions.\n> **Key Takeaway:** The plasmodium is the feeding stage of slime molds.`
  },
  // Q96
  {
    course: "BI110", term: "T2",
    q: "What structure do slime molds form in **unfavourable conditions**?",
    keywords: ["fruiting body", "sporangium", "spores", "reproductive structure", "drought survival"],
    explanation: `## Insight\nWhen conditions become dry or unfavourable, slime molds differentiate into fruiting bodies (sporangia) that release resistant spores capable of surviving harsh conditions.\n> **Key Takeaway:** Fruiting bodies produce spores for survival.`
  },
  // Q97
  {
    course: "BI110", term: "T2",
    q: "Why are **algae** important as primary producers?",
    keywords: ["primary producers", "base of aquatic food chain", "oxygen production", "photosynthesis", "carbon dioxide absorption"],
    explanation: `## Insight\nAlgae perform photosynthesis, producing oxygen and organic matter that form the base of aquatic food webs. They are responsible for a large percentage of Earth's oxygen.\n> **Key Takeaway:** Algae are essential primary producers in aquatic ecosystems.`
  },
  // Q98
  {
    course: "BI110", term: "T2",
    q: "What is **kelp**?",
    keywords: ["kelp", "brown algae", "phaeophyta", "large multicellular alga", "underwater forest"],
    explanation: `## Insight\nKelp are large, multicellular brown algae (Phaeophyta) that grow in dense underwater forests in cold, nutrient-rich coastal waters. They are harvested for algin, a thickener.\n> **Key Takeaway:** Kelp are giant brown algae.`
  },
  // Q99
  {
    course: "BI110", term: "T2",
    q: "What is **algin** used for?",
    keywords: ["algin", "thickener", "stabilizer", "ice cream", "cosmetics", "phaeophyta", "brown algae"],
    explanation: `## Insight\nAlgin (alginic acid) is a polysaccharide extracted from brown algae cell walls. It is used as a stabiliser and thickener in ice cream, cosmetics, and pharmaceuticals.\n> **Key Takeaway:** Algin is a thickening agent from brown algae.`
  },
  // Q100
  {
    course: "BI110", term: "T2",
    q: "What is **carrageenan** and where does it come from?",
    keywords: ["carrageenan", "red algae", "rhodophyta", "thickener", "stabilizer", "dairy products"],
    explanation: `## Insight\nCarrageenan is a gelatinous polysaccharide extracted from red algae. It is used as a thickener and stabiliser in dairy products (ice cream, yogurt) and cosmetics.\n> **Key Takeaway:** Carrageenan is derived from red algae.`
  },
  // ======================== BACTERIA (Q101–Q140) ========================
  // Q101
  {
    course: "BI110", term: "T2",
    q: "What are the **three basic shapes** of bacteria?",
    keywords: ["coccus", "bacillus", "spirillum", "spherical", "rod", "spiral", "cocci bacilli spirilla"],
    explanation: `## Insight\nBacteria have three primary shapes: spherical (coccus), rod‑shaped (bacillus), and spiral (spirillum or spirochete).\n> **Key Takeaway:** Bacterial shapes are cocci, bacilli, and spirilla.`
  },
  // Q102
  {
    course: "BI110", term: "T2",
    q: "What is the **Gram stain** used for?",
    keywords: ["gram stain", "differentiate bacteria", "cell wall", "gram-positive", "gram-negative", "classification"],
    explanation: `## Insight\nThe Gram stain is a differential staining technique that classifies bacteria into Gram‑positive (purple) and Gram‑negative (pink) based on cell wall structure.\n> **Key Takeaway:** The Gram stain identifies bacterial cell wall type.`
  },
  // Q103
  {
    course: "BI110", term: "T2",
    q: "Why do **Gram‑positive bacteria** stain purple?",
    keywords: ["thick peptidoglycan", "retains crystal violet", "thick cell wall", "traps dye-iodine complex"],
    explanation: `## Insight\nGram‑positive bacteria have a thick, single‑layered peptidoglycan cell wall that retains the crystal violet‑iodine complex after alcohol decolourisation.\n> **Key Takeaway:** Thick peptidoglycan traps the purple dye.`
  },
  // Q104
  {
    course: "BI110", term: "T2",
    q: "Why do **Gram‑negative bacteria** stain pink?",
    keywords: ["thin peptidoglycan", "outer membrane", "loses crystal violet", "takes up safranin", "pink stain"],
    explanation: `## Insight\nGram‑negative bacteria have a thin peptidoglycan layer and an outer membrane that is dissolved by alcohol, causing them to lose crystal violet and take up the counterstain (safranin), appearing pink.\n> **Key Takeaway:** Gram‑negative bacteria appear pink due to thin peptidoglycan and an outer membrane.`
  },
  // Q105
  {
    course: "BI110", term: "T2",
    q: "What unique structure do **Gram‑negative bacteria** have that Gram‑positive bacteria lack?",
    keywords: ["outer membrane", "lipopolysaccharide", "lps", "additional lipid bilayer"],
    explanation: `## Insight\nGram‑negative bacteria have an outer lipid membrane outside their thin peptidoglycan layer. This membrane contains lipopolysaccharide (LPS).\n> **Key Takeaway:** An outer membrane distinguishes Gram‑negative bacteria.`
  },
  // Q106
  {
    course: "BI110", term: "T2",
    q: "What is **binary fission**?",
    keywords: ["binary fission", "asexual reproduction", "bacterial replication", "splits into two", "daughter cells"],
    explanation: `## Insight\nBinary fission is the process by which most bacteria reproduce: the cell grows, duplicates its DNA, and divides into two genetically identical daughter cells.\n> **Key Takeaway:** Bacteria reproduce by binary fission.`
  },
  // Q107
  {
    course: "BI110", term: "T2",
    q: "What is an **endospore**?",
    keywords: ["endospore", "dormant structure", "resistant spore", "bacillus", "clostridium", "survival"],
    explanation: `## Insight\nAn endospore is a highly resistant, dormant structure formed by some bacteria (e.g., Bacillus, Clostridium) to survive extreme heat, drying, and chemicals.\n> **Key Takeaway:** Endospores allow bacteria to survive harsh conditions.`
  },
  // Q108
  {
    course: "BI110", term: "T2",
    q: "Which two genera of bacteria are known for producing **endospores**?",
    keywords: ["bacillus", "clostridium", "endospore-forming bacteria"],
    explanation: `## Insight\nBacillus (e.g., B. anthracis) and Clostridium (e.g., C. tetani, C. botulinum) are the primary genera that produce endospores.\n> **Key Takeaway:** Endospores are formed by Bacillus and Clostridium.`
  },
  // Q109
  {
    course: "BI110", term: "T2",
    q: "What disease does **Vibrio cholerae** cause?",
    keywords: ["cholera", "vibrio cholerae", "rice-water stool", "severe diarrhoea", "dehydration"],
    explanation: `## Insight\nVibrio cholerae causes cholera, an acute diarrhoeal disease that can lead to severe dehydration and death if untreated.\n> **Key Takeaway:** Cholera is caused by Vibrio cholerae.`
  },
  // Q110
  {
    course: "BI110", term: "T2",
    q: "How is **cholera** transmitted?",
    keywords: ["faecal-oral", "contaminated water", "contaminated food", "poor sanitation", "ingestion"],
    explanation: `## Insight\nCholera is transmitted through ingestion of water or food contaminated with the faeces of an infected person.\n> **Key Takeaway:** Cholera spreads via the faecal-oral route.`
  },
  // Q111
  {
    course: "BI110", term: "T2",
    q: "Which bacterium causes **tuberculosis**?",
    keywords: ["mycobacterium tuberculosis", "tb", "tuberculosis bacteria"],
    explanation: `## Insight\nTuberculosis is caused by Mycobacterium tuberculosis, an acid‑fast bacterium with a waxy cell wall that makes it resistant to drying and many disinfectants.\n> **Key Takeaway:** TB is caused by Mycobacterium tuberculosis.`
  },
  // Q112
  {
    course: "BI110", term: "T2",
    q: "Which bacterium causes **anthrax**?",
    keywords: ["bacillus anthracis", "anthrax bacteria", "spore-forming"],
    explanation: `## Insight\nAnthrax is caused by Bacillus anthracis, a spore‑forming rod that can survive in soil for decades as endospores.\n> **Key Takeaway:** Anthrax is caused by Bacillus anthracis.`
  },
  // Q113
  {
    course: "BI110", term: "T2",
    q: "Which spirochete causes **syphilis**?",
    keywords: ["treponema pallidum", "syphilis spirochete", "sexually transmitted"],
    explanation: `## Insight\nSyphilis is caused by Treponema pallidum, a corkscrew‑shaped spirochete that is transmitted sexually or from mother to fetus.\n> **Key Takeaway:** Treponema pallidum causes syphilis.`
  },
  // Q114
  {
    course: "BI110", term: "T2",
    q: "Which bacterium causes **gonorrhoea**?",
    keywords: ["neisseria gonorrhoeae", "gonococcus", "gram-negative diplococcus", "sti"],
    explanation: `## Insight\nGonorrhoea is caused by Neisseria gonorrhoeae, a Gram‑negative diplococcus (appears as two coffee‑bean shaped cells).\n> **Key Takeaway:** Neisseria gonorrhoeae causes gonorrhoea.`
  },
  // Q115
  {
    course: "BI110", term: "T2",
    q: "Which bacterium is the most common cause of **bacterial pneumonia**?",
    keywords: ["streptococcus pneumoniae", "pneumococcus", "s. pneumoniae", "pneumonia bacteria"],
    explanation: `## Insight\nStreptococcus pneumoniae (pneumococcus) is a Gram‑positive coccus and the leading cause of community‑acquired bacterial pneumonia.\n> **Key Takeaway:** Streptococcus pneumoniae is the most common cause of bacterial pneumonia.`
  },
  // Q116
  {
    course: "BI110", term: "T2",
    q: "Which spirochete causes **Lyme disease**?",
    keywords: ["borrelia burgdorferi", "lyme disease spirochete", "tick-borne"],
    explanation: `## Insight\nLyme disease is caused by Borrelia burgdorferi, a spirochete transmitted by the bite of infected Ixodes ticks (deer ticks).\n> **Key Takeaway:** Borrelia burgdorferi causes Lyme disease.`
  },
  // Q117
  {
    course: "BI110", term: "T2",
    q: "What is **cyanobacteria** commonly called?",
    keywords: ["blue-green algae", "cyanobacteria", "blue-green bacteria"],
    explanation: `## Insight\nCyanobacteria are often called blue‑green algae because of their colour (from phycocyanin) and their ability to perform oxygenic photosynthesis.\n> **Key Takeaway:** Cyanobacteria are also known as blue‑green algae.`
  },
  // Q118
  {
    course: "BI110", term: "T2",
    q: "What major evolutionary innovation did **cyanobacteria** contribute to Earth's atmosphere?",
    keywords: ["oxygen", "oxygenic photosynthesis", "great oxygenation event", "atmospheric oxygen"],
    explanation: `## Insight\nCyanobacteria were the first organisms to perform oxygenic photosynthesis, releasing molecular oxygen and transforming Earth's atmosphere from anoxic to oxygen‑rich.\n> **Key Takeaway:** Cyanobacteria produced Earth's atmospheric oxygen.`
  },
  // Q119
  {
    course: "BI110", term: "T2",
    q: "What are **heterocysts** in cyanobacteria?",
    keywords: ["heterocysts", "nitrogen fixation", "specialized cells", "oxygen-free", "thick-walled"],
    explanation: `## Insight\nHeterocysts are specialised, thick‑walled cells in filamentous cyanobacteria that lack oxygen‑producing photosystems, creating an anaerobic environment for nitrogen fixation.\n> **Key Takeaway:** Heterocysts fix nitrogen in an oxygen‑free environment.`
  },
  // Q120
  {
    course: "BI110", term: "T2",
    q: "Which enzyme allows cyanobacteria to fix **nitrogen**?",
    keywords: ["nitrogenase", "nitrogen fixation enzyme", "oxygen-sensitive"],
    explanation: `## Insight\nNitrogenase is the enzyme that converts atmospheric nitrogen (N₂) into ammonia (NH₃). It is highly sensitive to oxygen, which is why heterocysts are necessary.\n> **Key Takeaway:** Nitrogenase fixes nitrogen.`
  },
  // Q121
  {
    course: "BI110", term: "T2",
    q: "What is **microcystin**?",
    keywords: ["microcystin", "hepatotoxin", "cyanobacterial toxin", "liver toxin", "microcystis"],
    explanation: `## Insight\nMicrocystin is a potent hepatotoxin (liver toxin) produced by some cyanobacteria, such as Microcystis aeruginosa. It can cause liver damage and failure.\n> **Key Takeaway:** Microcystin is a cyanobacterial liver toxin.`
  },
  // Q122
  {
    course: "BI110", term: "T2",
    q: "What is **anatoxin**?",
    keywords: ["anatoxin", "neurotoxin", "cyanobacterial neurotoxin", "very fast death factor"],
    explanation: `## Insight\nAnatoxin is a neurotoxin produced by some cyanobacteria. It causes rapid muscle paralysis and respiratory failure, sometimes called "very fast death factor".\n> **Key Takeaway:** Anatoxin is a cyanobacterial neurotoxin.`
  },
  // Q123
  {
    course: "BI110", term: "T2",
    q: "What is the **function** of a bacterial capsule?",
    keywords: ["protection", "immune evasion", "prevents phagocytosis", "adhesion", "virulence factor"],
    explanation: `## Insight\nThe bacterial capsule is a polysaccharide layer that protects the bacterium from phagocytosis by host immune cells, enhances adhesion, and is a key virulence factor.\n> **Key Takeaway:** The capsule helps bacteria evade the immune system.`
  },
  // Q124
  {
    course: "BI110", term: "T2",
    q: "What is **flagella** in bacteria?",
    keywords: ["flagella", "motility", "locomotion", "whip-like appendage", "bacterial movement"],
    explanation: `## Insight\nFlagella are long, whip‑like appendages that bacteria use for locomotion (motility). They rotate to propel the bacterium.\n> **Key Takeaway:** Flagella enable bacterial movement.`
  },
  // Q125
  {
    course: "BI110", term: "T2",
    q: "What is **chemotaxis** in bacteria?",
    keywords: ["chemotaxis", "movement toward chemicals", "attractants", "repellents", "bacterial navigation"],
    explanation: `## Insight\nChemotaxis is the movement of a bacterium toward or away from a chemical stimulus. Attractants (e.g., nutrients) cause positive chemotaxis.\n> **Key Takeaway:** Chemotaxis is directed movement in response to chemicals.`
  },
  // Q126
  {
    course: "BI110", term: "T2",
    q: "What is the **nucleoid** in a prokaryotic cell?",
    keywords: ["nucleoid", "region of dna", "no nuclear membrane", "circular chromosome", "prokaryotic dna location"],
    explanation: `## Insight\nThe nucleoid is the irregularly shaped region in a prokaryotic cell where the single circular chromosome is located. It is not surrounded by a membrane.\n> **Key Takeaway:** The nucleoid contains the bacterial DNA.`
  },
  // Q127
  {
    course: "BI110", term: "T2",
    q: "What is **plasmid**?",
    keywords: ["plasmid", "small circular dna", "extrachromosomal", "antibiotic resistance", "gene transfer"],
    explanation: `## Insight\nA plasmid is a small, circular, extrachromosomal DNA molecule that replicates independently. Plasmids often carry genes for antibiotic resistance or virulence factors.\n> **Key Takeaway:** Plasmids are accessory DNA in bacteria.`
  },
  // Q128
  {
    course: "BI110", term: "T2",
    q: "What is **bacterial conjugation**?",
    keywords: ["conjugation", "horizontal gene transfer", "plasmid transfer", "sex pilus", "direct cell contact"],
    explanation: `## Insight\nConjugation is a mechanism of horizontal gene transfer where bacteria transfer plasmids or chromosomal DNA through a sex pilus (direct cell‑to‑cell contact).\n> **Key Takeaway:** Conjugation transfers DNA between bacteria.`
  },
  // Q129
  {
    course: "BI110", term: "T2",
    q: "What is **transformation** in bacteria?",
    keywords: ["transformation", "uptake of free dna", "competent cells", "horizontal gene transfer"],
    explanation: `## Insight\nTransformation is the uptake of free DNA from the environment by a bacterial cell, which may incorporate it into its genome.\n> **Key Takeaway:** Transformation is DNA uptake from the environment.`
  },
  // Q130
  {
    course: "BI110", term: "T2",
    q: "What is **transduction** in bacteria?",
    keywords: ["transduction", "bacteriophage mediated", "horizontal gene transfer", "phage carries bacterial dna"],
    explanation: `## Insight\nTransduction is the transfer of bacterial DNA from one cell to another by a bacteriophage (virus).\n> **Key Takeaway:** Phages mediate transduction.`
  },
  // Q131
  {
    course: "BI110", term: "T2",
    q: "What is **normal flora** (microbiota)?",
    keywords: ["normal flora", "microbiota", "commensal bacteria", "human microbiome", "beneficial bacteria"],
    explanation: `## Insight\nNormal flora are the community of microorganisms (mostly bacteria) that live on and inside the human body without causing disease; they aid in digestion and protect against pathogens.\n> **Key Takeaway:** Normal flora are beneficial resident bacteria.`
  },
  // Q132
  {
    course: "BI110", term: "T2",
    q: "What is an **opportunistic pathogen**?",
    keywords: ["opportunistic pathogen", "causes disease when immune compromised", "normally harmless", "secondary infection"],
    explanation: `## Insight\nAn opportunistic pathogen is a microorganism that normally does not cause disease in a healthy host but can cause infection when the immune system is weakened or when it enters a different body site.\n> **Key Takeaway:** Opportunistic pathogens strike when defences are low.`
  },
  // Q133
  {
    course: "BI110", term: "T2",
    q: "What is **antibiotic resistance**?",
    keywords: ["antibiotic resistance", "drug resistant bacteria", "resistance genes", "superbugs", "mdr"],
    explanation: `## Insight\nAntibiotic resistance is the ability of bacteria to survive and grow in the presence of antibiotics that would normally kill them, often due to resistance genes carried on plasmids.\n> **Key Takeaway:** Resistant bacteria survive antibiotic treatment.`
  },
  // Q134
  {
    course: "BI110", term: "T2",
    q: "Which phylum of bacteria is the **largest** and most diverse?",
    keywords: ["proteobacteria", "largest bacterial phylum", "e. coli", "salmonella", "gram-negative"],
    explanation: `## Insight\nProteobacteria is the largest and most metabolically diverse phylum, containing many Gram‑negative bacteria, including E. coli, Salmonella, and Vibrio.\n> **Key Takeaway:** Proteobacteria is the largest bacterial phylum.`
  },
  // Q135
  {
    course: "BI110", term: "T2",
    q: "What is unique about **Cyanobacteria** among prokaryotes?",
    keywords: ["oxygenic photosynthesis", "blue-green colour", "phycocyanin", "produce oxygen"],
    explanation: `## Insight\nCyanobacteria are the only prokaryotes that perform oxygenic photosynthesis (using water as an electron donor and releasing oxygen).\n> **Key Takeaway:** Cyanobacteria produce oxygen through photosynthesis.`
  },
  // Q136
  {
    course: "BI110", term: "T2",
    q: "What is **mycoplasma**?",
    keywords: ["mycoplasma", "no cell wall", "smallest bacteria", "penicillin resistant", "pleomorphic"],
    explanation: `## Insight\nMycoplasma are bacteria that completely lack a cell wall, making them resistant to antibiotics like penicillin. They are the smallest self‑replicating organisms.\n> **Key Takeaway:** Mycoplasma lack a cell wall.`
  },
  // Q137
  {
    course: "BI110", term: "T2",
    q: "What disease does **Mycobacterium leprae** cause?",
    keywords: ["leprosy", "hansen's disease", "mycobacterium leprae", "chronic infection"],
    explanation: `## Insight\nMycobacterium leprae causes leprosy (Hansen's disease), a chronic granulomatous infection affecting the skin, nerves, and mucous membranes.\n> **Key Takeaway:** Leprosy is caused by Mycobacterium leprae.`
  },
  // Q138
  {
    course: "BI110", term: "T2",
    q: "What is **pasteurisation**?",
    keywords: ["pasteurisation", "heat treatment", "kill pathogens", "reduce spoilage", "louis pasteur"],
    explanation: `## Insight\nPasteurisation is a process of heating liquids (e.g., milk) to a specific temperature for a set time to kill pathogenic bacteria without destroying the product's quality.\n> **Key Takeaway:** Pasteurisation kills harmful bacteria in food.`
  },
  // Q139
  {
    course: "BI110", term: "T2",
    q: "What is **fermentation** in bacteria?",
    keywords: ["fermentation", "anaerobic respiration", "production of alcohol or acid", "lactic acid", "bacterial metabolism"],
    explanation: `## Insight\nFermentation is an anaerobic metabolic process by which bacteria convert sugars into acids, gases, or alcohol, used in food production (yogurt, cheese, bread).\n> **Key Takeaway:** Fermentation is bacterial energy production without oxygen.`
  },
  // Q140
  {
    course: "BI110", term: "T2",
    q: "What is a **bacteriocin**?",
    keywords: ["bacteriocin", "antibacterial protein", "bacterial toxin", "kills other bacteria"],
    explanation: `## Insight\nBacteriocins are proteinaceous toxins produced by bacteria to inhibit the growth of closely related bacterial strains.\n> **Key Takeaway:** Bacteriocins are bacterial weapons against other bacteria.`
  },
  // ======================== TAXONOMIC KEYS (Q141–Q170) ========================
  // Q141
  {
    course: "BI110", term: "T2",
    q: "What is a **dichotomous key**?",
    keywords: ["dichotomous key", "paired choices", "couplets", "identification tool", "taxonomic key"],
    explanation: `## Insight\nA dichotomous key is an identification tool that presents a series of paired, mutually exclusive statements (couplets). The user chooses the description that matches their specimen until the organism is identified.\n> **Key Takeaway:** Dichotomous keys use paired choices to identify organisms.`
  },
  // Q142
  {
    course: "BI110", term: "T2",
    q: "What does **dichotomous** mean?",
    keywords: ["dichotomous", "cut in two", "two branches", "two choices", "divided into two parts"],
    explanation: `## Insight\n"Dichotomous" comes from Greek "dich" (two) and "temnein" (to cut), referring to the two‑choice structure of the key.\n> **Key Takeaway:** Dichotomous means divided into two parts.`
  },
  // Q143
  {
    course: "BI110", term: "T2",
    q: "What is a **couplet** in a dichotomous key?",
    keywords: ["couplet", "paired statements", "two choices", "decision point"],
    explanation: `## Insight\nA couplet is a pair of contrasting, mutually exclusive descriptive statements at one step of a dichotomous key.\n> **Key Takeaway:** Couplets are the decision points in a dichotomous key.`
  },
  // Q144
  {
    course: "BI110", term: "T2",
    q: "What is a **lead** in a dichotomous key?",
    keywords: ["lead", "one choice of a couplet", "single option", "half of couplet"],
    explanation: `## Insight\nA lead is one of the two statements in a couplet. Choosing the correct lead directs the user to the next couplet or to the identification.\n> **Key Takeaway:** Leads are the individual choices within a couplet.`
  },
  // Q145
  {
    course: "BI110", term: "T2",
    q: "What is a **poly‑clave (multi‑access) key**?",
    keywords: ["poly-clave", "multi-access", "order-free key", "elimination key", "computerised key"],
    explanation: `## Insight\nA poly‑clave (multi‑access) key allows the user to select any character in any order, eliminating mismatched species. It is flexible and often computerised.\n> **Key Takeaway:** Poly‑clave keys are order‑free identification tools.`
  },
  // Q146
  {
    course: "BI110", term: "T2",
    q: "Give **two advantages** of a poly‑clave key over a dichotomous key.",
    keywords: ["order-free", "multi-entry", "flexible", "can skip missing characters", "faster", "computerisable"],
    explanation: `## Insight\nPoly‑clave keys allow users to start with any observable character (multi‑entry) and are order‑free, which is useful when some features are absent. They are also easily computerised.\n> **Key Takeaway:** Poly‑clave keys are more flexible and faster.`
  },
  // Q147
  {
    course: "BI110", term: "T2",
    q: "List **three disadvantages** of dichotomous keys.",
    keywords: ["incomplete coverage", "seasonal features", "user error", "fixed path", "missing species", "depends on specific characters"],
    explanation: `## Insight\nDisadvantages include: the key may not cover all species variations; features may be absent in certain seasons; users may misinterpret characters; and a single mistake leads to wrong identification.\n> **Key Takeaway:** Dichotomous keys have limitations in coverage and require careful observation.`
  },
  // Q148
  {
    course: "BI110", term: "T2",
    q: "What is a **character** in a taxonomic key?",
    keywords: ["character", "trait", "observable feature", "measurable characteristic", "attribute"],
    explanation: `## Insight\nA character is any observable or measurable feature of an organism used to build the couplets in a key. Examples: number of legs, leaf shape, flower colour.\n> **Key Takeaway:** Characters are the features used to distinguish organisms.`
  },
  // Q149
  {
    course: "BI110", term: "T2",
    q: "What is a **character state**?",
    keywords: ["character state", "alternate form", "specific expression", "variant"],
    explanation: `## Insight\nA character state is one of the possible expressions of a character. For example, if the character is "leaf arrangement", states could be "opposite", "alternate", or "whorled".\n> **Key Takeaway:** Character states are the specific options in a couplet.`
  },
  // Q150
  {
    course: "BI110", term: "T2",
    q: "What is a **multistate character**?",
    keywords: ["multistate", "more than two states", "three or more expressions", "colour", "arrangement"],
    explanation: `## Insight\nA multistate character is a character that can take three or more distinct forms. Example: petal colour (red, white, blue, yellow).\n> **Key Takeaway:** Multistate characters have multiple possible states.`
  },
  // Q151
  {
    course: "BI110", term: "T2",
    q: "What is an **indented key**?",
    keywords: ["indented key", "yoked key", "indented format", "dichotomous key style"],
    explanation: `## Insight\nAn indented (yoked) key is a type of dichotomous key where each couplet is indented equally from the left margin, and the user follows the chosen lead to the next indented couplet.\n> **Key Takeaway:** Indented keys use spacing to guide the user.`
  },
  // Q152
  {
    course: "BI110", term: "T2",
    q: "What is a **bracketed key**?",
    keywords: ["bracketed key", "side-by-side couplets", "parallel choices", "dichotomous key format"],
    explanation: `## Insight\nA bracketed key presents both choices of each couplet side‑by‑side, often with numbers, making relationships easier to see but harder to construct.\n> **Key Takeaway:** Bracketed keys show both options together.`
  },
  // Q153
  {
    course: "BI110", term: "T2",
    q: "Why are most taxonomic keys described as **artificial**?",
    keywords: ["artificial key", "practical identification", "not phylogenetic", "based on observable traits", "not evolutionary"],
    explanation: `## Insight\nMost keys are "artificial" because they are designed for practical identification using easily observable characters, not necessarily reflecting true evolutionary relationships.\n> **Key Takeaway:** Artificial keys prioritise usefulness over evolutionary history.`
  },
  // Q154
  {
    course: "BI110", term: "T2",
    q: "What is a **natural key**?",
    keywords: ["natural key", "phylogenetic key", "based on evolutionary relationships", "homologous characters"],
    explanation: `## Insight\nA natural key is based on evolutionary (phylogenetic) relationships, using homologous characters to group organisms by common ancestry.\n> **Key Takeaway:** Natural keys reflect true evolutionary history.`
  },
  // Q155
  {
    course: "BI110", term: "T2",
    q: "What is the first step in using a dichotomous key?",
    keywords: ["observe specimen", "select appropriate key", "examine characters", "identify couplet 1"],
    explanation: `## Insight\nThe first step is to carefully observe the specimen and select a key appropriate for the region and group of organisms (e.g., "Plants of Zambia").\n> **Key Takeaway:** Choose the right key and examine the specimen carefully.`
  },
  // Q156
  {
    course: "BI110", term: "T2",
    q: "What should you do if the first couplet of a key does not match your specimen?",
    keywords: ["go to next couplet", "check alternative lead", "repeat observation", "verify identification"],
    explanation: `## Insight\nIf the first couplet does not match, move to the next numbered couplet or follow the "else" lead. Always re‑check your specimen before committing to a choice.\n> **Key Takeaway:** Work through couplets until a match is found.`
  },
  // Q157
  {
    course: "BI110", term: "T2",
    q: "What is **taxonomic identification**?",
    keywords: ["identification", "recognising identity", "naming unknown organism", "using keys"],
    explanation: `## Insight\nTaxonomic identification is the process of determining the identity of an unknown organism, usually by using a taxonomic key to match characters.\n> **Key Takeaway:** Identification matches an organism to a known taxon.`
  },
  // Q158
  {
    course: "BI110", term: "T2",
    q: "What is a **key character**?",
    keywords: ["key character", "diagnostic feature", "essential trait", "discriminating character"],
    explanation: `## Insight\nA key character is a feature that is particularly useful for distinguishing between taxa, often because it shows clear differences.\n> **Key Takeaway:** Key characters are the most informative traits.`
  },
  // Q159
  {
    course: "BI110", term: "T2",
    q: "Why is it important to choose a key specific to the **region or group** being studied?",
    keywords: ["regional key", "local species", "appropriate coverage", "accurate identification"],
    explanation: `## Insight\nKeys are designed for specific geographic areas or taxonomic groups. Using a key from the wrong region may not include the species you are trying to identify, leading to failure or error.\n> **Key Takeaway:** Region‑specific keys cover the species present.`
  },
  // Q160
  {
    course: "BI110", term: "T2",
    q: "What is a **taxonomic revision**?",
    keywords: ["taxonomic revision", "reclassification", "updated taxonomy", "splitting or lumping"],
    explanation: `## Insight\nA taxonomic revision is a study that re‑examines the classification of a group of organisms, often resulting in species being split, lumped, or renamed based on new evidence.\n> **Key Takeaway:** Revisions update classifications with new data.`
  },
  // Q161
  {
    course: "BI110", term: "T2",
    q: "What is a **type specimen**?",
    keywords: ["type specimen", "holotype", "reference specimen", "nomenclatural type", "original description"],
    explanation: `## Insight\nA type specimen (holotype) is the single individual designated as the name‑bearing representative of a species. It serves as the reference for that scientific name.\n> **Key Takeaway:** The type specimen defines a species name.`
  },
  // Q162
  {
    course: "BI110", term: "T2",
    q: "What is the **ICZN**?",
    keywords: ["iczn", "international code of zoological nomenclature", "rules for animal names", "zoological nomenclature"],
    explanation: `## Insight\nThe ICZN (International Commission on Zoological Nomenclature) publishes the code that regulates the scientific naming of animals, ensuring consistency and uniqueness.\n> **Key Takeaway:** ICZN governs animal naming rules.`
  },
  // Q163
  {
    course: "BI110", term: "T2",
    q: "What is the **ICBN**?",
    keywords: ["icbn", "international code of botanical nomenclature", "plant naming rules", "algae", "fungi"],
    explanation: `## Insight\nThe ICBN (now ICN – International Code of Nomenclature for algae, fungi, and plants) sets the rules for naming plants, algae, and fungi.\n> **Key Takeaway:** ICN governs plant and fungal names.`
  },
  // Q164
  {
    course: "BI110", term: "T2",
    q: "What is a **synonym** in taxonomy?",
    keywords: ["synonym", "different name for same species", "same taxon", "homotypic", "heterotypic"],
    explanation: `## Insight\nA synonym is a scientific name that applies to the same taxon as another name. The oldest valid name is usually accepted; later names become synonyms.\n> **Key Takeaway:** Synonyms are different names for the same organism.`
  },
  // Q165
  {
    course: "BI110", term: "T2",
    q: "What is **priority** in nomenclature?",
    keywords: ["priority", "first published name", "law of priority", "oldest valid name"],
    explanation: `## Insight\nThe principle of priority states that the first validly published scientific name for a taxon is the correct one; later names are considered synonyms.\n> **Key Takeaway:** The oldest name has priority.`
  },
  // Q166
  {
    course: "BI110", term: "T2",
    q: "What is a **nominal species**?",
    keywords: ["nominal species", "named species", "species name", "taxon based on type"],
    explanation: `## Insight\nA nominal species is a species that has been formally described and given a scientific name, based on a type specimen.\n> **Key Takeaway:** A nominal species is a formally named species.`
  },
  // Q167
  {
    course: "BI110", term: "T2",
    q: "What is **taxonomic inflation**?",
    keywords: ["taxonomic inflation", "excessive splitting", "too many species", "overclassification"],
    explanation: `## Insight\nTaxonomic inflation occurs when species are split excessively, often due to applying the phylogenetic species concept, leading to an artificially high number of species.\n> **Key Takeaway:** Over‑splitting creates taxonomic inflation.`
  },
  // Q168
  {
    course: "BI110", term: "T2",
    q: "What is a **cryptic species**?",
    keywords: ["cryptic species", "morphologically similar", "genetically distinct", "hidden species"],
    explanation: `## Insight\nCryptic species are groups of organisms that are morphologically indistinguishable (look identical) but are reproductively isolated and genetically distinct.\n> **Key Takeaway:** Cryptic species look alike but are different species.`
  },
  // Q169
  {
    course: "BI110", term: "T2",
    q: "What is **DNA barcoding**?",
    keywords: ["dna barcoding", "short genetic marker", "species identification", "cox1", "molecular taxonomy"],
    explanation: `## Insight\nDNA barcoding uses a short, standardised segment of DNA (e.g., mitochondrial COI gene) to identify species, aiding in taxonomy and biodiversity studies.\n> **Key Takeaway:** DNA barcoding uses a short gene to identify species.`
  },
  // Q170
  {
    course: "BI110", term: "T2",
    q: "What is the **COI gene** used for in DNA barcoding?",
    keywords: ["coi", "cytochrome oxidase I", "mitochondrial gene", "animal barcoding", "species identification"],
    explanation: `## Insight\nThe cytochrome c oxidase subunit I (COI) gene is the standard DNA barcode region for animals. Its sequence varies enough between species to allow identification.\n> **Key Takeaway:** COI is the standard animal barcode gene.`
  },
  // ======================== MISCELLANEOUS / PAST EXAM (Q171–Q200) ========================
  // Q171
  {
    course: "BI110", term: "T2",
    q: "What kingdom does **Amoeba** belong to?",
    keywords: ["protista"],
    explanation: `## Insight\nAmoeba is a unicellular, heterotrophic, motile protist, so it belongs to Kingdom Protista.\n> **Key Takeaway:** Amoeba is a protist.`
  },
  // Q172
  {
    course: "BI110", term: "T2",
    q: "What is the causative agent of **malaria**?",
    keywords: ["plasmodium", "plasmodium falciparum", "plasmodium species"],
    explanation: `## Insight\nMalaria is caused by protozoan parasites of the genus Plasmodium, transmitted by Anopheles mosquitoes.\n> **Key Takeaway:** Plasmodium causes malaria.`
  },
  // Q173
  {
    course: "BI110", term: "T2",
    q: "What is the **protein coat** of a virus called?",
    keywords: ["capsid"],
    explanation: `## Insight\nThe protein coat that encloses the viral nucleic acid is called the capsid.\n> **Key Takeaway:** The capsid is the viral protein coat.`
  },
  // Q174
  {
    course: "BI110", term: "T2",
    q: "Which **stain** is used to classify bacteria into Gram‑positive and Gram‑negative?",
    keywords: ["gram stain", "gram's stain"],
    explanation: `## Insight\nThe Gram stain (crystal violet, iodine, alcohol, safranin) differentiates bacteria based on cell wall structure.\n> **Key Takeaway:** The Gram stain classifies bacteria.`
  },
  // Q175
  {
    course: "BI110", term: "T2",
    q: "What kingdom does **yeast** belong to?",
    keywords: ["fungi", "fungus"],
    explanation: `## Insight\nYeast is a unicellular fungus, so it belongs to Kingdom Fungi.\n> **Key Takeaway:** Yeast is a fungus.`
  },
  // Q176
  {
    course: "BI110", term: "T2",
    q: "Name one protist that moves using **cilia**.",
    keywords: ["paramecium", "paramecium", "ciliate"],
    explanation: `## Insight\nParamecium is a well‑known ciliate that uses cilia for locomotion and feeding.\n> **Key Takeaway:** Paramecium moves with cilia.`
  },
  // Q177
  {
    course: "BI110", term: "T2",
    q: "What insect transmits **Trypanosoma**?",
    keywords: ["tsetse fly", "glossina", "tsetse"],
    explanation: `## Insight\nTrypanosoma, the cause of sleeping sickness, is transmitted by the tsetse fly.\n> **Key Takeaway:** The tsetse fly transmits Trypanosoma.`
  },
  // Q178
  {
    course: "BI110", term: "T2",
    q: "What viral cycle **integrates viral DNA** into the host genome?",
    keywords: ["lysogenic cycle", "lysogeny", "integration", "prophage"],
    explanation: `## Insight\nIn the lysogenic cycle, the viral genome integrates into the host chromosome as a prophage.\n> **Key Takeaway:** The lysogenic cycle involves integration.`
  },
  // Q179
  {
    course: "BI110", term: "T2",
    q: "Name the structure viruses use to **attach** to host cells.",
    keywords: ["tail fibers", "attachment proteins", "spike proteins", "glycoproteins"],
    explanation: `## Insight\nBacteriophages use tail fibers; animal viruses use spike glycoproteins to attach to host cell receptors.\n> **Key Takeaway:** Tail fibers or spike proteins mediate attachment.`
  },
  // Q180
  {
    course: "BI110", term: "T2",
    q: "What type of nucleic acid can a virus contain?",
    keywords: ["dna", "rna", "either dna or rna"],
    explanation: `## Insight\nA virus can have either DNA or RNA as its genetic material, but never both.\n> **Key Takeaway:** Viruses contain DNA or RNA.`
  },
  // Q181
  {
    course: "BI110", term: "T2",
    q: "What does **binomial nomenclature** consist of?",
    keywords: ["genus", "species", "generic name", "specific epithet"],
    explanation: `## Insight\nBinomial nomenclature consists of the genus name (capitalised) followed by the specific epithet (lowercase), both italicized.\n> **Key Takeaway:** Binomial name = genus + species.`
  },
  // Q182
  {
    course: "BI110", term: "T2",
    q: "What **domain** do fungi belong to?",
    keywords: ["eukarya", "eukaryote"],
    explanation: `## Insight\nFungi are eukaryotes with a true nucleus, so they belong to the domain Eukarya.\n> **Key Takeaway:** Fungi are in Eukarya.`
  },
  // Q183
  {
    course: "BI110", term: "T2",
    q: "What is the **basic unit of classification**?",
    keywords: ["species"],
    explanation: `## Insight\nThe species is the most specific and fundamental rank in biological classification.\n> **Key Takeaway:** Species is the basic unit of classification.`
  },
  // Q184
  {
    course: "BI110", term: "T2",
    q: "What level of classification comes immediately **after Order**?",
    keywords: ["family"],
    explanation: `## Insight\nThe hierarchy is ... Order → Family → Genus → Species.\n> **Key Takeaway:** Family comes after Order.`
  },
  // Q185
  {
    course: "BI110", term: "T2",
    q: "What is the **feeding method** of Amoeba?",
    keywords: ["phagocytosis", "engulfment", "endocytosis"],
    explanation: `## Insight\nAmoeba feeds by phagocytosis – it extends pseudopodia to surround and engulf food particles.\n> **Key Takeaway:** Amoeba uses phagocytosis.`
  },
  // Q186
  {
    course: "BI110", term: "T2",
    q: "What is the **cell type** of protists?",
    keywords: ["eukaryotic", "eukaryote", "true nucleus"],
    explanation: `## Insight\nProtists are eukaryotes; they have a membrane‑bound nucleus and organelles.\n> **Key Takeaway:** Protists are eukaryotic.`
  },
  // Q187
  {
    course: "BI110", term: "T2",
    q: "Name one virus that infects **bacteria**.",
    keywords: ["bacteriophage", "phage", "lambda phage", "t4 phage"],
    explanation: `## Insight\nA bacteriophage (e.g., T4 phage, lambda phage) is a virus that specifically infects bacteria.\n> **Key Takeaway:** Bacteriophages infect bacteria.`
  },
  // Q188
  {
    course: "BI110", term: "T2",
    q: "Which group of bacteria is known for its **corkscrew shape**?",
    keywords: ["spirochetes", "spirochete", "spiral bacteria", "treponema", "borrelia"],
    explanation: `## Insight\nSpirochetes are flexible, corkscrew‑shaped bacteria that move by axial filaments.\n> **Key Takeaway:** Spirochetes have a corkscrew shape.`
  },
  // Q189
  {
    course: "BI110", term: "T2",
    q: "What is the **vector for malaria**?",
    keywords: ["anopheles mosquito", "anopheles", "female anopheles"],
    explanation: `## Insight\nMalaria is transmitted by the bite of an infected female Anopheles mosquito.\n> **Key Takeaway:** Anopheles mosquitoes transmit malaria.`
  },
  // Q190
  {
    course: "BI110", term: "T2",
    q: "What is the **genus of the malaria parasite**?",
    keywords: ["plasmodium"],
    explanation: `## Insight\nThe malaria parasite belongs to the genus Plasmodium.\n> **Key Takeaway:** Plasmodium is the malaria genus.`
  },
  // Q191
  {
    course: "BI110", term: "T2",
    q: "What is **diatomaceous earth** used for?",
    keywords: ["filter", "abrasive", "insecticide", "pool filter", "polishing agent"],
    explanation: `## Insight\nDiatomaceous earth is used as a water filter, gentle abrasive, and natural insecticide.\n> **Key Takeaway:** Diatomaceous earth has many industrial uses.`
  },
  // Q192
  {
    course: "BI110", term: "T2",
    q: "What is **agar** used for in microbiology?",
    keywords: ["solidifying agent", "culture media", "bacterial growth medium", "solid medium"],
    explanation: `## Insight\nAgar is used to solidify microbiological culture media, providing a stable surface for bacterial and fungal growth.\n> **Key Takeaway:** Agar solidifies culture media.`
  },
  // Q193
  {
    course: "BI110", term: "T2",
    q: "What is the **function of the bacterial capsule**?",
    keywords: ["prevents phagocytosis", "immune evasion", "adhesion", "virulence factor", "protection"],
    explanation: `## Insight\nThe capsule protects bacteria from being engulfed by immune cells, helps adherence to surfaces, and is a key virulence factor.\n> **Key Takeaway:** The capsule helps bacteria evade the immune system.`
  },
  // Q194
  {
    course: "BI110", term: "T2",
    q: "What is **chemoautotrophy**?",
    keywords: ["chemoautotroph", "energy from chemicals", "carbon from co2", "inorganic electron donors", "chemosynthesis"],
    explanation: `## Insight\nChemoautotrophs obtain energy by oxidising inorganic compounds (e.g., hydrogen sulfide) and use carbon dioxide as their carbon source.\n> **Key Takeaway:** Chemoautotrophs make food from chemicals.`
  },
  // Q195
  {
    course: "BI110", term: "T2",
    q: "What is **chemoheterotrophy**?",
    keywords: ["chemoheterotroph", "energy from chemicals", "carbon from organic compounds", "most bacteria"],
    explanation: `## Insight\nChemoheterotrophs obtain both energy and carbon from organic compounds. Most bacteria (pathogens) are chemoheterotrophs.\n> **Key Takeaway:** Chemoheterotrophs eat organic matter.`
  },
  // Q196
  {
    course: "BI110", term: "T2",
    q: "What is **photoautotrophy**?",
    keywords: ["photoautotroph", "energy from light", "carbon from co2", "photosynthesis", "plants", "cyanobacteria"],
    explanation: `## Insight\nPhotoautotrophs use light energy to synthesise organic compounds from carbon dioxide. Plants, algae, and cyanobacteria are examples.\n> **Key Takeaway:** Photoautotrophs use light and CO₂.`
  },
  // Q197
  {
    course: "BI110", term: "T2",
    q: "What is a **halophile**?",
    keywords: ["halophile", "salt-loving", "high salinity environment", "archaea", "bacteria"],
    explanation: `## Insight\nHalophiles are organisms that thrive in environments with very high salt concentrations (e.g., salt lakes). Many are archaea.\n> **Key Takeaway:** Halophiles love salty conditions.`
  },
  // Q198
  {
    course: "BI110", term: "T2",
    q: "What is a **thermophile**?",
    keywords: ["thermophile", "heat-loving", "high temperature", "hot springs", "archaea"],
    explanation: `## Insight\nThermophiles are organisms that thrive at high temperatures, often between 45°C and 80°C. Hyperthermophiles grow above 80°C.\n> **Key Takeaway:** Thermophiles love heat.`
  },
  // Q199
  {
    course: "BI110", term: "T2",
    q: "What is a **methanogen**?",
    keywords: ["methanogen", "produces methane", "anaerobic", "archaea", "methane-producing"],
    explanation: `## Insight\nMethanogens are archaea that produce methane as a metabolic byproduct. They are strict anaerobes found in swamps, wetlands, and the guts of ruminants.\n> **Key Takeaway:** Methanogens produce methane.`
  },
  // Q200
  {
    course: "BI110", term: "T2",
    q: "What is **endosymbiosis**?",
    keywords: ["endosymbiosis", "one organism inside another", "mitochondria origin", "chloroplast origin", "symbiogenesis"],
    explanation: `## Insight\nEndosymbiosis is a symbiotic relationship where one organism lives inside the cells of another. The endosymbiotic theory explains that mitochondria and chloroplasts originated from free‑living bacteria engulfed by ancestral eukaryotic cells.\n> **Key Takeaway:** Endosymbiosis explains the origin of organelles.`
  },
  
  
  //BI110 VIRUSES NEW CONTENT 
  
  {
    course: "BI110", term: "T2",
    q: `What is the specific scientific term for the protective protein coat that surrounds the nucleic acid core of a virus?`,
    keywords: ["capsid", "viral capsid", "protein coat", "viral shell", "capsid protein", "protective shell", "protein envelope", "capsomere", "nucleocapsid"],
    explanation: `## Insight\nA virus needs a physical shell to protect its fragile genetic material (DNA or RNA) from the harsh outside environment. This geometric shell is built from repeating protein subunits and is officially called the capsid.\n> **Key Takeaway:** The capsid is the protective protein coat that surrounds and protects the viral genome.`
  },
  {
    course: "BI110", term: "T2",
    q: `Because they completely lack cytoplasm, ribosomes, and metabolic machinery, viruses are officially classified as what type of entities?`,
    keywords: ["non-cellular", "acellular", "non living", "noncellular", "nonliving", "not cells", "without cells", "non-cellular entities", "acellular particles", "non-cellular particles"],
    explanation: `## Insight\nTo be considered "alive" or cellular, an entity must possess cytoplasm, ribosomes to build proteins, and an independent metabolism. Because viruses lack all of these, they are biologically classified as non-cellular entities.\n> **Key Takeaway:** Viruses are non-cellular (acellular) because they lack cytoplasm, ribosomes, and independent metabolic machinery.`
  },
  {
    course: "BI110", term: "T2",
    q: `What single term describes a complete, fully assembled, and infective viral particle existing completely outside of a host cell?`,
    keywords: ["virion", "viral particle", "infectious particle", "complete virus", "mature virus", "viral unit", "virus particle", "extracellular virus"],
    explanation: `## Insight\nWhen a virus is inside a cell, it exists as hijacked genetic instructions. However, when it is fully assembled with its nucleic acid and capsid, and is floating outside the cell ready to infect a new host, the complete infectious particle is called a virion.\n> **Key Takeaway:** A virion is a complete, fully assembled, infectious viral particle located outside a host cell.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the term for the biological property where a virus remains dormant and inactive inside a host for many years without immediately replicating?`,
    keywords: ["latency", "latent", "dormancy", "viral latency", "dormant infection", "persistence", "hidden infection", "latent phase", "dormant state", "inactive state"],
    explanation: `## Insight\nSome viruses (like Herpes or HIV) do not immediately destroy the host cell. They can hide their DNA inside the host's chromosomes and effectively "go to sleep" for years or decades before waking up to cause disease. This state of dormancy is called latency.\n> **Key Takeaway:** Viral latency is the state of prolonged dormancy where a virus remains inactive inside a host.`
  },
  {
    course: "BI110", term: "T2",
    q: `In microbiology, what term is used to describe a highly aggressive microorganism or virus that actively causes severe infectious disease?`,
    keywords: ["virulent", "virulence", "virulent virus", "highly pathogenic", "aggressive pathogen", "disease-causing", "deadly", "malignant", "invasive", "high virulence"],
    explanation: `## Insight\nThe word "virus" comes from Latin for poison. If a pathogen is highly effective at invading a host, bypassing immune defenses, and causing severe damage or disease, it is described as being virulent.\n> **Key Takeaway:** The term 'virulent' describes an aggressive pathogen or agent that actively causes infectious disease.`
  },
  {
    course: "BI110", term: "T2",
    q: `What biological concept explains why a specific virus (like HIV) can only infect human immune cells and cannot infect a dog or a plant?`,
    keywords: ["host specificity", "viral specificity", "tropism", "host range", "species specificity", "restricted host", "cell tropism", "tissue tropism", "receptor specificity"],
    explanation: `## Insight\nA virus requires a physical "lock and key" match to enter a cell. Its surface proteins must perfectly bind to specific receptors on the host cell's membrane. Because these receptors differ between species, a virus is heavily restricted to a specific host range.\n> **Key Takeaway:** Host specificity dictates that each virus normally infects only a specific host species or cell type based on receptor matching.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which scientist historically discovered the true chemical nature of viruses by successfully crystallising the Tobacco Mosaic Virus (TMV) in 1933?`,
    keywords: ["wendell stanley", "stanley", "Wendell Stanley", "crystallised TMV", "tobacco mosaic virus crystallization", "Stanley crystallisation"],
    explanation: `## Insight\nIn 1933, Wendell Stanley managed to crystallise the Tobacco Mosaic Virus. Because living cells cannot be crystallised into geometric shapes like salt or ice, this proved conclusively that viruses were complex, non-living chemical particles (nucleoproteins).\n> **Key Takeaway:** Wendell Stanley discovered the true chemical nature of viruses by crystallising TMV in 1933.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which scientist historically coined the term 'bacteriophage' (meaning bacteria eater) in 1917?`,
    keywords: ["felix d'herelle", "d'herelle", "dherelle", "felix dherelle", "Félix d'Herelle", "d'Herelle", "bacteria eater", "phage coiner"],
    explanation: `## Insight\nWhile studying dysentery, Félix d'Herelle noticed invisible microbes that were actively hunting and destroying the dysentery bacteria. He named these highly specialized, bacteria-hunting viruses "bacteriophages."\n> **Key Takeaway:** Félix d'Herelle coined the term 'bacteriophage' in 1917 to describe viruses that "eat" bacteria.`
  },
  {
    course: "BI110", term: "T2",
    q: `In what year was the severe immunodeficiency disease that would later be known as HIV/AIDS first officially identified in Los Angeles?`,
    keywords: ["1981", "nineteen eighty one", "1981 Los Angeles", "AIDS identified 1981", "first AIDS cases 1981", "year 1981", "1981 outbreak"],
    explanation: `## Insight\nIn the summer of 1981, doctors in Los Angeles noted a sudden cluster of rare pneumonias and skin cancers appearing in previously healthy young men. This complete collapse of the immune system was the first official medical recognition of the AIDS epidemic.\n> **Key Takeaway:** HIV/AIDS was first officially identified clinically in Los Angeles in 1981.`
  },
  {
    course: "BI110", term: "T2",
    q: `From which specific geographic feature in the Democratic Republic of the Congo does the Ebola virus disease derive its name?`,
    keywords: ["ebola river", "the ebola river", "ebola", "Ebola River DRC", "river in DRC", "Congo river tributary", "Ebola River", "DRC river"],
    explanation: `## Insight\nIn 1976, a terrifying new hemorrhagic fever emerged in a remote village in Zaire (now the DRC). To avoid stigmatizing the specific village where the outbreak occurred, scientists named the virus after a nearby river—the Ebola River.\n> **Key Takeaway:** The Ebola virus is named after the Ebola River in the Democratic Republic of the Congo.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the primary biological function of the viral capsid?`,
    keywords: ["protect nucleic acid", "protect the genome", "protection and attachment", "protect dna", "shield genetic material", "prevent degradation", "host attachment", "capsid function", "genome protection", "viral protection"],
    explanation: `## Insight\nThe viral genome is incredibly fragile and would be instantly destroyed by cellular enzymes if exposed. The capsid acts as a tough, geometric protein armor box. It protects the DNA/RNA while the virus floats between cells.\n> **Key Takeaway:** The capsid is a protective protein shell that guards the fragile viral genome from enzymatic degradation.`
  },
  {
    course: "BI110", term: "T2",
    q: `According to the fundamental rules of virology, is it possible for a single viral particle to contain both DNA and RNA simultaneously?`,
    keywords: ["no", "never", "false", "impossible", "cannot", "not both", "either dna or rna", "never both", "single type of nucleic acid", "only dna or only rna"],
    explanation: `## Insight\nLiving cells always contain both DNA and RNA. Viruses break this rule. A virus contains only one type of nucleic acid. It is a strict biological rule: a virus genome consists of either DNA or RNA, but never both simultaneously.\n> **Key Takeaway:** A virus contains either DNA or RNA as its genetic payload, but never both simultaneously.`
  },
  {
    course: "BI110", term: "T2",
    q: `What specific structural component of a complex T-even bacteriophage forcefully contracts to physically inject the viral genome into the host bacterium?`,
    keywords: ["spiral protein sheath", "sheath", "contractile sheath", "tail sheath", "contractile tail sheath", "phage sheath", "protein sheath", "injection mechanism"],
    explanation: `## Insight\nOnce the tail fibers lock onto the bacterium, the bacteriophage uses a spiral protein sheath that acts like a highly tensioned spring. When triggered, the sheath violently contracts, driving a central hollow tube through the cell wall to inject the DNA.\n> **Key Takeaway:** The spiral protein sheath of a bacteriophage forcefully contracts to inject the viral genome into the host.`
  },
  {
    course: "BI110", term: "T2",
    q: `After a bacteriophage forcefully injects its DNA into the host, what is the empty, lifeless protein shell left attached to the outside of the bacterium formally called?`,
    keywords: ["ghost", "protein ghost", "empty capsid", "phage ghost", "capsid ghost", "empty protein shell", "viral ghost", "bacteriophage ghost"],
    explanation: `## Insight\nUnlike animal viruses that enter the cell whole, a bacteriophage remains on the outside. It injects only its genetic payload. The entire intricate protein machine remains stuck to the outside of the bacterium as a hollow shell, which virologists call a "ghost."\n> **Key Takeaway:** Once a bacteriophage injects its genetic material, the empty protein shell left on the outside is called a ghost.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific anatomical structures on a complex bacteriophage act as sensory landing gear, recognizing and binding to receptors on the bacterial cell wall?`,
    keywords: ["tail fibers", "tail fibres", "tail fibre", "tail fiber", "attachment fibers", "phage tail fibers", "receptor binding fibers", "sensory fibres"],
    explanation: `## Insight\nThe long, spider-like legs at the bottom of a bacteriophage are the tail fibers. They drift randomly until they bump into the exact right protein receptor on a specific bacterium's cell wall, securely anchoring the virus in place for infection.\n> **Key Takeaway:** The tail fibers are the highly specialized sensory receptors that bind exactly to specific proteins on the host's cell wall.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific enzyme is secreted by a bacteriophage to chemically perforate the tough bacterial cell wall during the initial penetration stage?`,
    keywords: ["early muramidase", "lysozyme", "muramidase", "early lysozyme", "peptidoglycanase", "phage lysozyme", "cell wall perforating enzyme", "bacteriophage lysozyme"],
    explanation: `## Insight\nTo get its DNA inside, the bacteriophage secretes a small amount of an enzyme called muramidase (lysozyme). This acts like molecular wire-cutters, dissolving a tiny pore in the tough peptidoglycan mesh just large enough for the viral DNA tube to slip through.\n> **Key Takeaway:** Bacteriophages secrete early muramidase (lysozyme) to chemically perforate the bacterial cell wall.`
  },
  {
    course: "BI110", term: "T2",
    q: `The heavily studied Tobacco Mosaic Virus (TMV) serves as the classic model for which specific, rigid, rod-like viral shape?`,
    keywords: ["helical", "helical shape", "rigid rod", "rod shaped", "helical symmetry", "rod-like", "cylindrical", "spiral shape", "helical virus", "TMV shape"],
    explanation: `## Insight\nIn the Tobacco Mosaic Virus, the protein capsid subunits stack in a tight spiral staircase around the RNA, creating a rigid cylinder. This is formally classified as a helical shape.\n> **Key Takeaway:** The Tobacco Mosaic Virus (TMV) is classified as having a rigid, helical (rod-like) geometric shape.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the exact geometric shape of the protein capsid in most isometric (roughly spherical) viruses, defined by having exactly 20 equilateral triangular faces?`,
    keywords: ["icosahedron", "icosahedral", "icosahedral shape", "20 faces", "icosahedral symmetry", "icosahedron shape", "geometric capsid", "icosahedral virus"],
    explanation: `## Insight\nThe maximum volume you can enclose using the smallest possible number of repeating protein building blocks is a specific geometric crystal called an icosahedron. Under a weak microscope, it looks like a sphere, but it is highly geometric.\n> **Key Takeaway:** Most roughly spherical viruses possess an icosahedral shape, constructed from exactly 20 equilateral triangular faces.`
  },
  {
    course: "BI110", term: "T2",
    q: `The deadly Ebola virus does not form a sphere or a rigid rod; instead, it looks like a long, flexible, tangled thread. What shape classification is this?`,
    keywords: ["filamentous", "filamentous shape", "thread like", "flexible filament", "filoviridae shape", "filamentous morphology", "long thread", "flexible thread", "tangled filament"],
    explanation: `## Insight\nEbola belongs to the family Filoviridae (from the Latin 'filum', meaning thread). Its viral particles are incredibly long, flexible, and often form loops. This highly elongated, worm-like morphology is strictly classified as a filamentous shape.\n> **Key Takeaway:** The Ebola virus is defined by its highly distinct filamentous (thread-like) morphology.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the modern Baltimore classification system, what are the two primary biological criteria used to officially classify different types of viruses?`,
    keywords: ["genome and replication", "nucleic acid and replication", "type of genome and replication strategy", "dna/rna and strandness", "genome type and mrna synthesis", "Baltimore criteria", "viral genome type", "replication mechanism"],
    explanation: `## Insight\nThe Baltimore System ignores what the virus looks like or what disease it causes. It categorizes the virus entirely based on its core genome (DNA vs RNA) and its specific replication strategy (how it manufactures mRNA).\n> **Key Takeaway:** Viruses are primarily classified based on their type of nucleic acid (genome) and their specific replication strategy.`
  },
  {
    course: "BI110", term: "T2",
    q: `Under which of the three recognized domains of life (Bacteria, Archaea, Eukarya) are viruses officially classified?`,
    keywords: ["none", "none of them", "no domain", "neither", "no domain of life", "outside the three domains", "not classified in any domain", "excluded from domains"],
    explanation: `## Insight\nThe three domains of life classify cellular organisms based on their ribosomal RNA and cellular machinery. Because viruses are non-cellular (no ribosomes, no metabolism), they do not meet the biological definition of life and are excluded from the domain system entirely.\n> **Key Takeaway:** Viruses are excluded from the three domains of life because they are non-cellular and lack independent metabolism.`
  },
  {
    course: "BI110", term: "T2",
    q: `While animal viruses display vast genetic diversity, what specific type of genome do the overwhelming majority of plant viruses possess?`,
    keywords: ["single stranded rna", "ssrna", "rna", "single-stranded rna", "positive sense rna", "ssRNA genome", "RNA genome", "plant virus genome", "majority ssRNA"],
    explanation: `## Insight\nViruses can use single-stranded or double-stranded DNA or RNA. Interestingly, the overwhelming majority of known plant viruses (such as the Tobacco Mosaic Virus) utilize single-stranded RNA (ssRNA) as their primary genetic payload.\n> **Key Takeaway:** The vast majority of known plant viruses utilize single-stranded RNA (ssRNA) as their genetic material.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the chronological sequence of the viral infection cycle, what critical stage occurs immediately after attachment, but before synthesis?`,
    keywords: ["penetration and uncoating", "penetration", "uncoating", "entry", "viral entry", "membrane fusion and uncoating", "injection", "penetration stage", "uncoating stage"],
    explanation: `## Insight\nA virus must follow a strict physical logic. After it locks onto the cell (Attachment), it must breach the membrane and strip off its protein coat to release the genome. These sequential steps are Penetration and Uncoating, which must occur before the factory is hijacked (Synthesis).\n> **Key Takeaway:** Penetration and uncoating are the critical stages that bridge the gap between initial viral attachment and internal synthesis.`
  },
  {
    course: "BI110", term: "T2",
    q: `During which specific stage of the viral infection cycle does the virus actively hijack the host cell's transcription machinery to produce viral proteins?`,
    keywords: ["synthesis", "synthesis stage", "synthesis phase", "replication stage", "gene expression stage", "early and late synthesis", "biosynthesis", "viral replication stage"],
    explanation: `## Insight\nOnce the viral DNA or RNA is naked inside the host cytoplasm, the hostile takeover begins. The virus forces the host's enzymes and ribosomes to manufacture thousands of viral capsid proteins and copy the viral genome. This manufacturing phase is called synthesis.\n> **Key Takeaway:** During the synthesis stage, the virus actively hijacks the host's machinery to manufacture viral proteins.`
  },
  {
    course: "BI110", term: "T2",
    q: `What critical mechanical event occurs during the 'uncoating' stage of an animal virus infection?`,
    keywords: ["removal of capsid", "capsid removal", "release of genome", "release of nucleic acid", "capsid degradation", "unpacking the virus", "capsid disassembly", "viral uncoating"],
    explanation: `## Insight\nWhen an animal virus enters a host cell, its genetic material is still locked tightly inside its protective protein shell (the capsid). During uncoating, host or viral enzymes chemically strip away this protein shell, releasing the naked viral genome into the host cytoplasm.\n> **Key Takeaway:** During the uncoating stage, the viral capsid is degraded, releasing the naked viral genome into the host cell.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the ultimate, destructive fate of the host bacterial cell at the conclusion of the viral 'lytic cycle'?`,
    keywords: ["lysis", "death", "destruction", "bursts", "rupture", "destroyed", "cell bursting", "host cell lysis", "bacterial lysis", "cell death", "lysis of host"],
    explanation: `## Insight\nThe lytic cycle is the active, highly aggressive viral reproduction pathway. The virus forces the cell to build hundreds of new viral clones. To escape, the viruses secrete enzymes that dissolve the cell wall, causing the bacterium to violently burst open (lysis).\n> **Key Takeaway:** In the lytic cycle, the host bacterium is completely destroyed (lysed) to forcefully release the newly manufactured viral particles.`
  },
  {
    course: "BI110", term: "T2",
    q: `What defines a 'temperate' bacteriophage in virology?`,
    options: [],
    keywords: ["can choose lytic or lysogenic", "undergoes both cycles", "lytic and lysogenic", "can do lysogenic cycle", "dual lifestyle", "temperate phage definition", "both lytic and lysogenic", "lysogenic capability"],
    explanation: `## Insight\nA purely "virulent" phage can only perform the deadly lytic cycle. A "temperate" phage is adaptable. When it infects a cell, it can either trigger the violent lytic cycle immediately, or choose the stealthy lysogenic cycle, hiding its DNA in the host until conditions change.\n> **Key Takeaway:** A temperate bacteriophage possesses the ability to undergo both the lytic and lysogenic life cycles.`
  },
  {
    course: "BI110", term: "T2",
    q: `During the stealthy lysogenic cycle, what is the integrated viral genome formally called once it splices into the host's chromosome?`,
    keywords: ["prophage", "integrated phage dna", "lysogenic phage dna", "prophage dna", "integrated viral genome", "phage genome integrated", "latent phage dna"],
    explanation: `## Insight\nOnce the viral DNA physically splices itself into the bacterial chromosome, it ceases to be a free-floating threat. It becomes a silent stretch of code known as a prophage. Every time the bacterium naturally divides, it unknowingly copies this prophage.\n> **Key Takeaway:** Viral DNA that has silently integrated into the host bacterium's chromosome during the lysogenic cycle is formally called a prophage.`
  },
  {
    course: "BI110", term: "T2",
    q: `At the very end of the destructive lytic cycle, which specific enzyme does the bacteriophage command the host to produce in order to burst the bacterial cell wall?`,
    keywords: ["late muramidase", "late lysozyme", "endolysin", "lysis enzyme", "bacteriophage lysozyme", "endolysin enzyme", "cell wall lytic enzyme"],
    explanation: `## Insight\nTo escape at the end of the lytic cycle, the virus needs a massive explosion. The viral DNA commands the host to manufacture huge amounts of "late muramidase." This enzyme aggressively dissolves the internal peptidoglycan wall until the bacterium violently bursts.\n> **Key Takeaway:** The bacteriophage produces 'late muramidase' at the end of the lytic cycle to dissolve the cell wall and release the viruses.`
  },
  {
    course: "BI110", term: "T2",
    q: `While a prophage can hide silently inside a bacterium for thousands of generations, what specific event triggers it to exit the lysogenic cycle and enter the lytic cycle?`,
    keywords: ["environmental stress", "dna damage", "uv radiation", "stress", "sos response", "prophage induction", "mutagen exposure", "host stress", "radiation trigger"],
    explanation: `## Insight\nA prophage is a biological sleeper agent. As long as the bacterium is healthy, the virus remains hidden. If the bacterium experiences severe stress or DNA damage (like UV radiation), the virus senses the host is dying, extracts its DNA, and triggers the lytic cycle to escape.\n> **Key Takeaway:** Severe environmental stress or DNA damage triggers a hidden prophage to abandon the lysogenic cycle and initiate the lytic cycle.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which incredibly unique enzyme is possessed exclusively by retroviruses (like HIV) but is completely absent in normal cellular biology?`,
    keywords: ["reverse transcriptase", "reverse transcriptase enzyme", "rna dependent dna polymerase", "rddp", "retroviral reverse transcriptase", "RNA to DNA enzyme", "RT enzyme"],
    explanation: `## Insight\nHuman cells copy DNA into DNA, or DNA into RNA. They cannot reverse the process. A retrovirus like HIV carries RNA and must bring its own factory equipment to convert it backward into DNA. This unique enzyme is perfectly named reverse transcriptase.\n> **Key Takeaway:** Reverse transcriptase is the unique enzyme that defines retroviruses, allowing them to convert their RNA genome backward into DNA.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the exact biological function of the viral enzyme 'reverse transcriptase'?`,
    keywords: ["converts rna to dna", "makes dna from rna", "rna into dna", "reverse transcription", "rna dependent dna synthesis", "RNA template DNA synthesis", "retroviral replication"],
    explanation: `## Insight\nNormal transcription flows from DNA to RNA. Reverse transcriptase does the exact opposite. It reads a viral RNA strand and builds a matching, complementary strand of solid DNA, which can then be permanently spliced into the human host's chromosomes.\n> **Key Takeaway:** The function of reverse transcriptase is to synthesize a solid DNA strand by reverse-engineering an RNA template.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the HIV replication cycle, which critical step occurs immediately after the viral envelope successfully fuses with the host cell membrane?`,
    keywords: ["reverse transcription", "reverse transcription of rna", "making dna from rna", "reverse transcriptase activity", "RNA to DNA conversion", "reverse transcription step"],
    explanation: `## Insight\nOnce fusion dumps the HIV RNA and enzymes into the human cytoplasm, the very first task the virus must accomplish is building a DNA copy of itself. Therefore, reverse transcription immediately follows fusion and uncoating, well before integration or assembly can begin.\n> **Key Takeaway:** Reverse transcription is the critical step that immediately follows the fusion and uncoating of the HIV virus in the cytoplasm.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific surface receptor on human immune cells does HIV actively recognize and bind to for attachment?`,
    keywords: ["cd4", "cd4 receptor", "cluster of differentiation 4", "cd4 glycoprotein", "t helper cell receptor", "CD4 antigen", "HIV receptor", "primary receptor CD4"],
    explanation: `## Insight\nHIV causes immunodeficiency by attacking the very cells that coordinate the immune response. It relies on a spike protein (gp120) that acts as a perfect lock-and-key match for the CD4 receptor, found heavily on the surface of human T-helper cells.\n> **Key Takeaway:** HIV primarily targets and attaches to the CD4 receptor, a glycoprotein found on human T-helper cells.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological role of the HIV 'protease' enzyme during viral replication?`,
    keywords: ["cleave polyproteins", "cut polyproteins", "cleaves polyproteins into functional units", "cleaves viral proteins", "protease cleavage", "polyprotein processing", "viral maturation", "protease activity"],
    explanation: `## Insight\nWhen an infected cell builds new HIV particles, the proteins are manufactured in one long, continuous, useless chain. The viral enzyme protease acts as biological scissors. It cuts this massive chain into the individual, functional proteins needed to mature the virus.\n> **Key Takeaway:** The HIV protease enzyme cleaves massive viral polyproteins into mature, functional components.`
  },
  {
    course: "BI110", term: "T2",
    q: `Why does an untreated HIV infection ultimately and inevitably lead to the development of AIDS?`,
    keywords: ["destroys cd4 cells", "kills t cells", "destruction of t helper cells", "destroys immune system", "cd4 cell depletion", "immune deficiency", "loss of immunity", "opportunistic infections"],
    explanation: `## Insight\nHIV does not kill patients directly. Instead, the virus specifically targets, hijacks, and destroys CD4+ T-helper cells. As the T-cell count plummets, the immune system collapses. The patient develops AIDS and is killed by common opportunistic infections.\n> **Key Takeaway:** HIV causes AIDS by progressively destroying the CD4+ T-helper cells, completely crippling the human immune system.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly contagious double-stranded DNA virus is the definitive causative agent of the childhood disease chickenpox?`,
    keywords: ["varicella zoster", "varicella zoster virus", "vzv", "varicella", "chickenpox virus", "herpes zoster", "human herpesvirus 3", "HHV-3"],
    explanation: `## Insight\nChickenpox is an extremely contagious childhood disease characterized by itchy, blister-like rashes. The causative agent is the Varicella zoster virus (VZV). Because it is a herpesvirus, it hides permanently in the nervous system and can reactivate decades later as shingles.\n> **Key Takeaway:** Chickenpox is caused by the Varicella zoster virus, a double-stranded DNA virus belonging to the herpesvirus family.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which severe, highly lethal human viral disease holds the unique historical distinction of being officially declared eradicated globally by the WHO in 1980?`,
    keywords: ["smallpox", "variola", "smallpox virus", "variola virus", "eradicated disease", "WHO eradication", "smallpox eradication"],
    explanation: `## Insight\nSmallpox killed hundreds of millions of people. Because the virus has no animal reservoir and the symptoms are highly visible, a massive global vaccination campaign (using the Vaccinia virus) was able to corner and destroy the virus in nature. The last natural case occurred in 1977.\n> **Key Takeaway:** Smallpox is the only human viral disease in history to be completely eradicated globally.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific genome configuration of the Varicella zoster virus (and all other herpesviruses)?`,
    keywords: ["double stranded dna", "dsdna", "double-stranded dna", "herpesvirus genome", "dsDNA genome", "linear dsDNA", "double stranded DNA genome"],
    explanation: `## Insight\nVaricella zoster belongs to the Herpesviridae family. A defining hallmark of all herpesviruses is that they carry massive, complex genetic payloads in the form of double-stranded DNA. This stable DNA allows them to establish lifelong latent infections.\n> **Key Takeaway:** The Varicella zoster virus possesses a highly stable double-stranded DNA genome.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific, highly lethal disease is caused by the Ebola virus, characterized by severe internal bleeding?`,
    keywords: ["haemorrhagic fever", "hemorrhagic fever", "ebola haemorrhagic fever", "ebola virus disease", "evd", "viral hemorrhagic fever", "ebola fever", "Ebola hemorrhagic fever"],
    explanation: `## Insight\nThe Ebola virus attacks the endothelial cells lining the blood vessels, causing them to break down and leak. This triggers massive, chaotic blood clotting throughout the body, resulting in catastrophic internal and external bleeding (haemorrhagic fever).\n> **Key Takeaway:** The Ebola virus causes a highly lethal haemorrhagic fever characterized by severe internal bleeding and organ failure.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary mode of transmission of the rabies virus to humans?`,
    keywords: ["animal bite", "bite", "bites of infected animals", "dog bite", "rabid animal bite", "saliva inoculation", "infected saliva", "bite wound"],
    explanation: `## Insight\nRabies is a neurotropic virus that heavily concentrates in the salivary glands of infected animals (like dogs, bats, and foxes). When the rabid animal bites a human, it physically injects the virus-laden saliva directly into the flesh.\n> **Key Takeaway:** The rabies virus is transmitted almost exclusively through the bite of an infected animal.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral family does the Human Immunodeficiency Virus (HIV) belong to?`,
    keywords: ["retroviridae", "retrovirus", "lentivirus", "retrovirus family", "lentivirus genus", "human retrovirus", "HIV family"],
    explanation: `## Insight\nHIV carries an RNA genome but converts it backward into DNA using the enzyme reverse transcriptase. Any virus that performs this backward (retro) transcription is classified in the family Retroviridae.\n> **Key Takeaway:** HIV belongs to the family Retroviridae, a unique group of RNA viruses that utilize reverse transcriptase.`
  },
  {
    course: "BI110", term: "T2",
    q: `Following a bite from a rabid animal, what is the primary anatomical factor that determines how long the incubation period will last before neurological symptoms appear?`,
    keywords: ["distance from the brain", "distance to the brain", "bite location", "proximity to cns", "bite site", "nerve distance", "bite location on body", "head or foot bite"],
    explanation: `## Insight\nThe rabies virus does not travel through the blood. Instead, it enters the peripheral nerves at the bite site and physically crawls up the nerve axons toward the brain. Therefore, a bite on the foot takes months to incubate, while a bite on the face takes only weeks.\n> **Key Takeaway:** The incubation period for rabies depends heavily on the physical distance from the bite site to the brain.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the defining, highly lethal clinical symptom that categorizes Ebola as a hemorrhagic fever?`,
    keywords: ["haemorrhage", "hemorrhage", "internal bleeding", "massive bleeding", "uncontrolled bleeding", "bleeding from orifices", "vascular leakage", "blood clotting failure"],
    explanation: `## Insight\nEbola aggressively attacks the cells lining the blood vessels, causing severe vascular damage and triggering blood clotting failures. The result is catastrophic, uncontrollable internal and external bleeding (haemorrhage).\n> **Key Takeaway:** Extensive internal and external haemorrhage is the primary, highly lethal hallmark symptom of Ebola virus disease.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the biological causative agent of the disease malaria?`,
    keywords: ["plasmodium", "plasmodium parasite", "plasmodium species", "protozoan parasite", "plasmodium falciparum", "malaria parasite", "Plasmodium protozoa"],
    explanation: `## Insight\nMalaria is not a viral or bacterial disease. It is caused by a highly complex, single-celled eukaryotic parasite (a protozoan) of the genus *Plasmodium*. Because it is a eukaryote, it shares many cellular similarities with human cells.\n> **Key Takeaway:** Malaria is caused by a parasitic eukaryotic protist of the genus *Plasmodium*.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific virus is the direct causative agent of the eradicated human disease smallpox?`,
    keywords: ["variola", "variola virus", "smallpox virus", "variola major", "variola minor", "orthopoxvirus variola"],
    explanation: `## Insight\nSmallpox was an incredibly lethal disease characterized by massive, scarring skin pustules. It is caused exclusively by the Variola virus. (The vaccine used to eradicate it contained a milder cousin, the Vaccinia virus).\n> **Key Takeaway:** The highly lethal disease smallpox was caused directly by the Variola virus.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which destructive agricultural virus is responsible for causing elongated, chlorotic colored stripes on maize leaves?`,
    keywords: ["maize streak virus", "msv", "maize streak", "streak virus", "maize streak geminivirus", "corn streak virus", "MSV disease"],
    explanation: `## Insight\nMaize Streak Virus (MSV) is a devastating pathogen endemic to sub-Saharan Africa. Because maize leaves grow with distinct parallel veins, the viral damage manifests geometrically, causing the loss of green chlorophyll (chlorosis) along these veins, resulting in elongated stripes.\n> **Key Takeaway:** The Maize streak virus causes distinct, elongated chlorotic stripes and severely stunted growth in maize plants.`
  },
  {
    course: "BI110", term: "T2",
    q: `To which specific viral genus does the economically devastating cassava mosaic virus belong?`,
    keywords: ["begomovirus", "begomovirus genus", "geminivirus", "begomoviruses", "whitefly transmitted geminivirus", "cassava begomovirus"],
    explanation: `## Insight\nThe Cassava mosaic virus is a massive threat to food security in Africa. It belongs to the genus Begomovirus. Unlike most plant viruses (which use RNA), begomoviruses are unique because they use single-stranded DNA and are transmitted by whiteflies.\n> **Key Takeaway:** The highly destructive cassava mosaic virus belongs to the genus Begomovirus.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary mode of transmission for the vast majority of plant viruses?`,
    keywords: ["insects", "sap sucking insects", "vectors", "aphids", "whiteflies", "insect vectors", "leafhoppers", "vector transmission", "biological vectors", "sucking insects"],
    explanation: `## Insight\nPlant cells are protected by thick, impenetrable cellulose cell walls. A virus cannot enter a plant unless that wall is physically pierced. Therefore, plant viruses rely almost entirely on sap-sucking insects (like aphids or whiteflies) to pierce the wall and inject the virus directly into the sap.\n> **Key Takeaway:** The vast majority of plant viruses rely heavily on sap-sucking insects to pierce the cell wall and transmit the infection.`
  },
  {
    course: "BI110", term: "T2",
    q: `What distinct visual symptom does the cassava mosaic virus aggressively cause on the leaves of infected plants?`,
    keywords: ["yellowish variegation", "mosaic pattern", "chlorotic mosaic", "mottling", "mosaic", "yellow and green patches", "leaf mosaic", "variegated leaves", "chlorotic patches"],
    explanation: `## Insight\nA "mosaic" virus destroys chlorophyll in random patches across the leaf. This creates a blotchy, disorganized pattern of pale yellow (chlorotic) spots mixed with healthy dark green tissue, looking exactly like a piece of mosaic art.\n> **Key Takeaway:** The cassava mosaic virus causes a distinct, yellowish variegated (mosaic) pattern of light and dark patches on infected leaves.`
  },
  {
    course: "BI110", term: "T2",
    q: `Approximately how many distinct, economically damaging plant diseases are currently known to be caused by viruses?`,
    keywords: ["over 2000", "2000", "over two thousand", "more than 2000", "approximately 2000 plant diseases", "2000+", "around 2000", "about 2000"],
    explanation: `## Insight\nWhile fungi cause the majority of plant diseases, viruses are highly destructive. Scientists have currently documented roughly 600 distinct species of plant viruses, which collectively are responsible for over 2000 distinct plant diseases globally.\n> **Key Takeaway:** There are over 2000 distinct plant diseases globally, caused by approximately 600 different species of viruses.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the current, accepted financial estimate for the massive annual global economic loss caused directly by viral diseases in agriculture?`,
    keywords: ["15 billion", "$15 billion", "15 billion dollars", "15bn", "fifteen billion dollars", "15 billion USD", "annual loss 15 billion", "agricultural loss 15 billion"],
    explanation: `## Insight\nViruses like Cassava Mosaic and Tomato Yellow Leaf Curl do not just damage a few leaves; they utterly stunt the plant, destroying the harvest. The UN and agricultural bodies estimate this global crop loss at $15 billion every single year.\n> **Key Takeaway:** Plant viral diseases are economically devastating, causing an estimated $15 billion in agricultural losses globally every year.`
  },
  {
    course: "BI110", term: "T2",
    q: `Is the Ebola virus capable of being transmitted via inhalation of airborne respiratory droplets from a coughing patient across a room?`,
    keywords: ["no", "false", "cannot be transmitted", "not airborne", "requires direct contact", "does not spread through coughing", "contact transmission only", "not aerosol", "needs fluid contact"],
    explanation: `## Insight\nEbola is *not* an airborne respiratory virus like COVID-19 or the flu. Transmission absolutely requires direct, physical contact with the heavily virus-laden bodily fluids (blood, vomit, sweat) of a symptomatic patient.\n> **Key Takeaway:** Ebola is not an airborne virus; it cannot be transmitted by inhaling airborne droplets, requiring direct fluid contact instead.`
  },
  {
    course: "BI110", term: "T2",
    q: `Statistically, what represents the absolute major mode of HIV transmission globally?`,
    keywords: ["unprotected sex", "sexual intercourse", "sexual contact", "unprotected sexual intercourse", "heterosexual contact", "homosexual contact", "sexual transmission", "unsafe sex"],
    explanation: `## Insight\nWhile HIV can be transmitted through blood transfusions and shared needles, the virus is heavily present in sexual fluids. Unprotected sexual intercourse is the absolute primary engine driving the vast majority of the global HIV pandemic.\n> **Key Takeaway:** Globally, the absolute major mode of HIV transmission is unprotected sexual intercourse.`
  },
  {
    course: "BI110", term: "T2",
    q: `Through what unprecedented global effort was the lethal smallpox virus officially eradicated from nature?`,
    keywords: ["global vaccination", "vaccination", "vaccination campaign", "who vaccination", "ring vaccination", "worldwide immunization", "smallpox vaccine campaign", "WHO eradication program"],
    explanation: `## Insight\nSmallpox was defeated by the immune system. The World Health Organization (WHO) launched a massive, global campaign using the Vaccinia virus (cowpox). Because smallpox has no animal reservoirs, vaccinating the global population completely starved the virus into extinction.\n> **Key Takeaway:** Smallpox was eradicated exclusively through a massive, highly coordinated worldwide vaccination campaign.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the explicit physiological effect of Highly Active Antiretroviral Therapy (ART) in the treatment of an HIV infection?`,
    keywords: ["suppresses replication", "blocks reproduction", "stops replication", "inhibits replication", "reduces viral load", "restores immune function", "does not cure", "lifelong treatment", "viral suppression"],
    explanation: `## Insight\nART stops the virus from replicating, which allows the body's CD4 T-cells to recover and restores immunity. However, because HIV hides dormant DNA (proviruses) in resting memory cells, ART is a lifelong treatment, not a cure.\n> **Key Takeaway:** Antiretroviral therapy (ART) stops HIV replication and restores the immune system, but it cannot eliminate latent viral DNA.`
  },
  {
    course: "BI110", term: "T2",
    q: `What exactly is a 'viroid' in the realm of infectious microbiology?`,
    keywords: ["naked rna", "infectious rna without a capsid", "rna without a protein coat", "naked infectious rna", "circular rna", "no protein coat", "rna only pathogen", "viroid RNA"],
    explanation: `## Insight\nA virus is DNA/RNA wrapped in a protein coat. A viroid is even simpler. It has no protein coat whatsoever. It is literally just a naked, floating loop of single-stranded RNA that causes highly destructive diseases in plants.\n> **Key Takeaway:** A viroid is an ultra-simple infectious agent consisting solely of a naked loop of RNA without any protein coat.`
  },
  {
    course: "BI110", term: "T2",
    q: `What defines an infectious 'prion'?`,
    keywords: ["misfolded protein", "infectious protein", "misfolded prion protein", "proteinaceous infectious particle", "no nucleic acid", "abnormal protein conformation", "PrP scrapie", "neurodegenerative protein"],
    explanation: `## Insight\nPrions break every rule of infection because they possess absolutely zero genetic material (no DNA, no RNA). They are simply normal brain proteins that have folded into a toxic shape. When this prion touches a normal protein, it forces the normal protein to misfold as well, causing diseases like Mad Cow.\n> **Key Takeaway:** A prion is an infectious, misfolded protein that causes fatal neurodegenerative diseases.`
  },
  {
    course: "BI110", term: "T2",
    q: `In human immunology, what does the acronym 'CD4' formally stand for?`,
    keywords: ["cluster of differentiation 4", "cluster of differentiation", "cd4 cluster", "cd4 molecule", "cd4 antigen", "Cluster of Differentiation 4", "CD4 glycoprotein"],
    explanation: `## Insight\nImmunologists use the "Cluster of Differentiation" (CD) system to identify different white blood cells based on surface proteins. CD4 is the 4th specific surface glycoprotein they cataloged, which HIV uses as its primary target receptor.\n> **Key Takeaway:** CD4 stands for Cluster of Differentiation 4, the specific surface glycoprotein receptor targeted by HIV.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the epidemiology of infectious diseases, what is the formal definition of a 'vector'?`,
    keywords: ["transmitting organism", "transmits a pathogen", "carries the virus", "transmits the virus", "biological vector", "insect vector", "arthropod vector", "disease transmitter"],
    explanation: `## Insight\nA vector is a biological taxi (like a mosquito or tick). It actively transmits a pathogen from one host to another. The vector simply carries the pathogen in its gut or saliva; it is the transport mechanism, not the ultimate victim.\n> **Key Takeaway:** A vector is an organism, usually an insect, that acts as a transport mechanism to transmit a pathogen between hosts.`
  },
  {
    course: "BI110", term: "T2",
    q: `During the HIV replication cycle, what is the absolute primary function of the viral enzyme 'integrase'?`,
    keywords: ["insert dna into host genome", "integrate dna", "splices dna into chromosome", "viral dna integration", "provirus formation", "integrase enzyme", "HIV integration", "chromosomal integration"],
    explanation: `## Insight\nOnce reverse transcriptase builds a DNA copy of the viral genome, the enzyme "integrase" carries this viral DNA into the human nucleus, cuts open the human chromosome, and splices the viral DNA permanently inside.\n> **Key Takeaway:** The HIV enzyme integrase permanently inserts the viral DNA copy directly into the host human's chromosome.`
  },
  {
    course: "BI110", term: "T2",
    q: `During the stealthy lysogenic cycle, what is the integrated viral genome formally called once it splices into the bacterial host's chromosome?`,
    keywords: ["prophage"],
    explanation: `## Insight\nOnce the viral DNA physically splices itself into the bacterial chromosome, it ceases to be a free-floating threat. It becomes a silent stretch of code known as a prophage, which is copied harmlessly every time the bacterium divides.\n> **Key Takeaway:** Viral DNA that has silently integrated into the host bacterium's chromosome is formally called a prophage.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the defining characteristic of the viral 'lysogenic cycle' compared to the lytic cycle?`,
    keywords: ["integration without lysis", "integrates into host genome", "dormancy", "replicates silently without killing", "provirus formation", "no immediate cell death", "latent cycle"],
    explanation: `## Insight\nThe lysogenic cycle is a stealth strategy. By integrating its DNA into the host's chromosome, the virus doesn't kill the cell immediately. Every time the bacterium reproduces, it faithfully copies the hidden viral DNA into its offspring.\n> **Key Takeaway:** The lysogenic cycle is characterized by viral DNA integrating silently into the host genome without immediately destroying the cell.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific genome configuration of the highly contagious Varicella zoster virus (chickenpox)?`,
    keywords: ["double stranded dna", "dsdna", "double-stranded dna", "herpesvirus genome", "linear dsDNA"],
    explanation: `## Insight\nVaricella zoster belongs to the Herpesviridae family. A defining hallmark of all herpesviruses is that they carry complex genetic payloads in the form of double-stranded DNA, which allows them to establish lifelong latent infections in nerve cells.\n> **Key Takeaway:** The Varicella zoster virus possesses a highly stable double-stranded DNA genome.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific name of the viral surface glycoprotein on HIV that acts as the key to bind directly to the human CD4 receptor?`,
    keywords: ["gp120", "glycoprotein 120", "HIV gp120", "envelope glycoprotein gp120", "CD4 binding protein", "viral spike protein", "surface subunit gp120"],
    explanation: `## Insight\nHIV is covered in mushroom-shaped protein spikes. The "cap" of the mushroom is a heavily sugared protein called glycoprotein 120 (gp120). This protein acts as a perfect, lock-and-key physical match for the human CD4 receptor.\n> **Key Takeaway:** The HIV surface glycoprotein gp120 acts as the specific key that binds directly to the human CD4 receptor.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which of the following highly devastating diseases is explicitly caused by a misfolded prion protein rather than a virus or bacterium?`,
    keywords: ["mad cow disease", "bovine spongiform encephalopathy", "bse", "creutzfeldt jakob", "CJD", "variant CJD", "scrapie", "kuru", "transmissible spongiform encephalopathy"],
    explanation: `## Insight\nWhen a prion (a toxic, misfolded brain protein) touches a normal protein, it acts like a zombie, forcing the normal protein to misfold as well. This chain reaction literally eats microscopic holes in the brain, causing spongiform encephalopathies like Mad Cow Disease.\n> **Key Takeaway:** Mad cow disease is a fatal neurodegenerative disease caused entirely by an infectious, misfolded prion protein.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly destructive plant virus utilizes a single-stranded DNA genome and relies extensively on whiteflies for transmission?`,
    keywords: ["cassava mosaic virus", "cmv", "cassava mosaic begomovirus", "whitefly transmitted ssDNA virus", "African cassava mosaic virus", "ACMV"],
    explanation: `## Insight\nThe vast majority of plant viruses use RNA. The geminivirus family is unique because it uses single-stranded DNA (ssDNA). The Cassava mosaic virus is a devastating begomovirus completely dependent on the whitefly to transmit its ssDNA payload.\n> **Key Takeaway:** The Cassava mosaic virus is a highly destructive, whitefly-transmitted plant virus featuring a single-stranded DNA genome.`
  },
  {
    course: "BI110", term: "T2",
    q: `In strict virological terms, what does the phrase 'obligate intracellular parasite' mean?`,
    keywords: ["must infect a host cell", "requires a host cell", "cannot reproduce outside a host", "dependent on host cell", "obligate parasite", "intracellular pathogen", "host-dependent replication"],
    explanation: `## Insight\n"Obligate" means mandatory. "Intracellular" means inside a cell. Because a virus has no power supply (ATP) and no 3D printers (ribosomes) to read its code, it is absolutely obligated to plug into a living host cell to manufacture new parts.\n> **Key Takeaway:** Viruses are 'obligate intracellular parasites' because they completely lack ribosomes and metabolism, mandating they hijack a living cell.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which of the following represents a highly specific, defining characteristic of the HIV viral envelope?`,
    keywords: ["derived from host cell membrane", "host cell lipid bilayer", "lipid envelope from host", "stolen from host", "viral envelope lipid", "budding envelope", "host-derived envelope"],
    explanation: `## Insight\nAs newly assembled HIV particles push their way out of a human cell (budding), they wrap themselves in a layer of the host's own lipid fat, pinching it off to form an outer bubble. This stolen camouflage coat is the viral envelope.\n> **Key Takeaway:** The HIV viral envelope is a soft lipid bilayer stolen directly from the human host cell membrane during budding.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the precise biological function of the HIV 'gp41' transmembrane protein?`,
    keywords: ["membrane fusion", "mediates fusion", "fusion", "envelope fusion", "viral-host membrane fusion", "gp41 fusion protein", "transmembrane fusion"],
    explanation: `## Insight\nThe HIV spike is a two-part machine. After gp120 grabs the CD4 receptor, the stem (gp41) acts like a harpoon, stabbing into the human cell membrane and forcing the viral envelope and the cell membrane to melt (fuse) together.\n> **Key Takeaway:** The HIV gp41 protein acts as a harpoon, mediating the physical fusion of the viral envelope with the human host cell membrane.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which virus is a classic example of a pathogen that establishes a permanent, latent (dormant) infection in human nerve ganglia, occasionally causing cold sores?`,
    keywords: ["herpes simplex", "herpes simplex virus", "hsv", "HSV-1", "cold sore virus", "herpes labialis", "oral herpes", "herpesvirus latency"],
    explanation: `## Insight\nHerpesviruses retreat up the nerve endings and splice their DNA into the deep nerve cells. They go completely to sleep (latency). Years later, stress or sunlight can wake them up, causing the virus to travel back down the nerve to form a cold sore.\n> **Key Takeaway:** The Herpes simplex virus establishes permanent, latent (dormant) infections hiding deep within human nerve ganglia.`
  },
  {
    course: "BI110", term: "T2",
    q: `Upon what specific biological criteria is the modern 'Baltimore classification system' for viruses entirely based?`,
    keywords: ["genome type and replication strategy", "nucleic acid and replication", "genome and mrna synthesis", "Baltimore criteria", "viral genome classification", "replication mechanism"],
    explanation: `## Insight\nThe Baltimore System ignores what the virus looks like or what disease it causes. It categorizes the virus entirely based on its core genome (DNA vs RNA, single vs double) and its specific replication strategy (how it manufactures mRNA).\n> **Key Takeaway:** The Baltimore classification system categorizes viruses exclusively based on their genome type and their strategy for synthesizing mRNA.`
  },
  {
    course: "BI110", term: "T2",
    q: `Under the Baltimore classification system, into which specific group are retroviruses (such as HIV) formally categorized?`,
    keywords: ["group vi", "group 6", "vi", "Baltimore group VI", "ssRNA-RT", "single-stranded RNA reverse transcribing", "retrovirus group", "group VI viruses"],
    explanation: `## Insight\nRetroviruses break the rules. Because they carry single-stranded RNA but use reverse transcriptase to turn it backward into DNA before making mRNA, David Baltimore assigned this specific ssRNA-to-DNA pathway its own dedicated category: Group VI.\n> **Key Takeaway:** Retroviruses like HIV belong to Baltimore Group VI, defined by an ssRNA genome that replicates via a DNA intermediate.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary function of the 'viral polymerase' (RdRp) enzyme located within RNA viruses?`,
    keywords: ["replicate rna genome and transcribe mrna", "replicate rna", "copy rna", "RNA-dependent RNA polymerase", "RdRp", "viral RNA synthesis", "RNA replication", "transcription of viral RNA"],
    explanation: `## Insight\nHuman cells have absolutely no machinery to copy RNA into more RNA. Therefore, an RNA virus must bring its own photocopier: the RNA-dependent RNA polymerase (RdRp). Its sole job is to read the viral RNA strand and pump out fresh RNA copies and mRNAs.\n> **Key Takeaway:** The viral polymerase (RdRp) is essential for replicating the viral RNA genome and transcribing viral mRNA.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which of the following describes the function of a positive-sense, single-stranded RNA (+ssRNA) virus genome?`,
    keywords: ["acts directly as mrna", "translated directly", "functions as mrna", "immediate translation", "mRNA-like genome", "positive sense RNA translation", "direct protein synthesis"],
    explanation: `## Insight\nPositive-sense RNA (+ssRNA) is structurally identical to cellular messenger RNA (mRNA). When a +ssRNA virus (like Poliovirus or Zika) enters a cell, the host's ribosomes immediately read the viral RNA and translate it into proteins without any intermediate steps.\n> **Key Takeaway:** Positive-sense RNA viruses possess genomes that function directly as mRNA, allowing immediate translation by host ribosomes.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific virus family is characterized by possessing a highly segmented genome, allowing for rapid genetic reassortment (like the flu)?`,
    keywords: ["orthomyxoviridae", "orthomyxovirus", "influenza", "Orthomyxoviridae family", "segmented RNA virus", "influenza virus family"],
    explanation: `## Insight\nMost viruses have a single, continuous genome. The Influenza virus (Orthomyxoviridae) is unique because its genome is cut into 8 separate segments. If two different flu strains infect the same cell, these segments can shuffle and mix.\n> **Key Takeaway:** The Influenza virus (Orthomyxoviridae) possesses a segmented genome, facilitating rapid genetic reassortment.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the epidemiology of the Influenza virus, what defines the highly dangerous phenomenon known as 'antigenic shift'?`,
    keywords: ["major genetic reassortment", "reassortment", "genetic reassortment", "segment swapping", "new subtype emergence", "pandemic strain", "antigenic shift definition"],
    explanation: `## Insight\nAntigenic *drift* is the slow accumulation of typos. Antigenic *shift* is a massive, sudden change. Because the flu virus is segmented, co-infection can mix the segments together, creating a brand-new hybrid virus that the human immune system has never seen, triggering pandemics.\n> **Key Takeaway:** Antigenic shift is the major genetic reassortment of segmented viral genomes, leading to novel subtypes and pandemics.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological function of the M2 protein in the Influenza virus?`,
    keywords: ["ion channel", "acidifies the virion", "triggers uncoating", "proton channel", "M2 ion channel", "viral uncoating", "pH regulation", "endosomal acidification"],
    explanation: `## Insight\nWhen Influenza is swallowed by a host cell in an endosome, it needs to escape. The viral M2 protein acts as a tiny pore, allowing acidic protons to flood inside the virus. This acid bath causes the viral core to break apart (uncoating), releasing the RNA.\n> **Key Takeaway:** The Influenza M2 protein acts as an ion channel that acidifies the virion, triggering the critical uncoating process.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which characteristic is an essential, defining feature of the human papillomavirus (HPV) life cycle regarding where it replicates?`,
    keywords: ["linked to keratinocyte differentiation", "basal epithelial cells", "differentiation of keratinocytes", "skin cell differentiation", "epithelial cell maturation", "keratinocyte life cycle"],
    explanation: `## Insight\nHPV enters through micro-tears and infects the deepest layer of skin (basal cells). The virus ties its life cycle to the skin cell's life cycle. As the skin cell grows, ages, and moves to the surface (keratinization), the virus matures with it, eventually shedding as dead skin flakes off.\n> **Key Takeaway:** The HPV life cycle is strictly tied to the differentiation of epithelial cells into mature keratinocytes.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which severe, long-term human disease is directly caused by chronic infection with the hepatitis B virus (HBV)?`,
    keywords: ["liver cirrhosis and cancer", "hepatocellular carcinoma", "liver cancer", "cirrhosis", "chronic hepatitis B", "HBV cirrhosis", "HCC", "liver fibrosis"],
    explanation: `## Insight\nHBV attacks the liver. While adults often fight it off, infections acquired in infancy frequently become chronic. The immune system constantly attacks the infected liver cells, causing decades of scarring (cirrhosis), which frequently leads to hepatocellular carcinoma (liver cancer).\n> **Key Takeaway:** Chronic Hepatitis B (HBV) is a leading global cause of severe cirrhosis and liver cancer.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific viral genome type characterizing the hepatitis C virus (HCV)?`,
    options: [], 
    keywords: ["single stranded positive sense rna", "ssrna", "positive sense rna", "rna", "Flaviviridae", "HCV genome", "positive strand RNA", "single-stranded RNA"],
    explanation: `## Insight\nDespite targeting the same organ, Hepatitis B and Hepatitis C are entirely different viruses. HBV is a double-stranded DNA virus. HCV is a positive-sense, single-stranded RNA virus belonging to the Flavivirus family (related to Dengue and Zika).\n> **Key Takeaway:** The hepatitis C virus (HCV) possesses a single-stranded, positive-sense RNA genome.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific virus is the recognized causative agent of the common childhood illness roseola (also known as sixth disease)?`,
    keywords: ["hhv-6", "human herpesvirus 6", "human herpes virus 6", "roseola virus", "sixth disease virus", "HHV-6A", "HHV-6B"],
    explanation: `## Insight\nRoseola is a very common viral infection in infants, characterized by several days of high fever followed by a sudden, mild pink rash. The disease is caused by Human herpesvirus 6 (HHV-6), which establishes lifelong latency after the initial childhood infection.\n> **Key Takeaway:** The common childhood febrile illness roseola is caused by Human herpesvirus 6 (HHV-6).`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific insect acts as the primary biological vector for the transmission of the chikungunya virus?`,
    keywords: ["aedes mosquito", "aedes", "aedes aegypti", "Aedes albopictus", "yellow fever mosquito", "tiger mosquito", "chikungunya vector"],
    explanation: `## Insight\nChikungunya is an arbovirus transmitted exclusively by daytime-biting mosquitoes of the genus *Aedes*. These same aggressive mosquitoes are also the primary vectors for the Dengue and Zika viruses.\n> **Key Takeaway:** The chikungunya virus is transmitted to humans primarily through the bite of infected *Aedes* mosquitoes.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly unique pathogenesis characteristic defines how the rabies virus travels to the brain?`,
    keywords: ["along peripheral nerves", "axonal transport", "peripheral nerves", "retrograde transport", "neural spread", "nerve pathway", "centripetal spread"],
    explanation: `## Insight\nRabies does not use the bloodstream to travel. When introduced via a bite, the virus binds to nerve endings in the muscle. It uses retrograde axonal transport to literally crawl up the peripheral nerves, millimeter by millimeter, until it reaches the brain, causing fatal encephalitis.\n> **Key Takeaway:** The rabies virus slowly travels from the bite site along the peripheral nerves directly to the central nervous system.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological role of the viral neuraminidase (NA) protein during an Influenza infection?`,
    keywords: ["cleaves sialic acid", "cleaves sialic acid receptors", "viral release", "NA enzyme", "influenza neuraminidase", "sialidase activity", "prevents virus aggregation"],
    explanation: `## Insight\nWhen new Influenza viruses bud out of the cell, they accidentally get stuck to sialic acid receptors on the cell surface. The Neuraminidase (NA) enzyme acts as biological scissors, cutting the sialic acid so the new viruses can float away and infect other cells.\n> **Key Takeaway:** The viral neuraminidase (NA) protein cleaves sialic acid receptors, allowing newly formed viruses to detach and release from the host.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral pathogen (specifically high-risk types 16 and 18) is overwhelmingly recognized as the primary causative agent of cervical cancer?`,
    keywords: ["hpv", "human papillomavirus", "HPV 16", "HPV 18", "high-risk HPV", "oncogenic HPV", "cervical cancer virus", "HPV types 16 and 18"],
    explanation: `## Insight\nWhile many viruses cause disease, a few directly cause cancer (oncoviruses). High-risk strains of HPV produce proteins (E6 and E7) that shut down the human cell's natural tumor-suppressor genes. This unchecked cellular division leads directly to cervical cancer.\n> **Key Takeaway:** High-risk strains of the Human papillomavirus (HPV), particularly types 16 and 18, are the primary cause of cervical cancer.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific pathogenic function of the Epstein-Barr virus (EBV) latent membrane protein (LMP1)?`,
    keywords: ["promotes b cell proliferation", "b-cell proliferation", "mimics cd40", "oncoprotein", "LMP1 signalling", "NF-kB activation", "B cell transformation"],
    explanation: `## Insight\nTo keep its host B-cell alive and replicating, EBV produces the LMP1 protein. LMP1 acts like a jammed "ON" switch for the B-cell's growth receptors. It tricks the cell into constantly dividing, which can occasionally lead to uncontrolled cancer (like Burkitt's lymphoma).\n> **Key Takeaway:** The EBV latent membrane protein (LMP1) acts as a permanent "ON" switch, promoting unchecked B-cell proliferation.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral pathogen is globally recognized as the leading cause of severe, dehydrating viral gastroenteritis in young children?`,
    keywords: ["rotavirus", "rotavirus infection", "infant diarrhea", "childhood gastroenteritis", "rotavirus gastroenteritis", "severe diarrhoea", "rotavirus vaccine preventable"],
    explanation: `## Insight\nRotavirus infects the lining of the small intestine, destroying the cells that absorb nutrients and water. This leads to profound, severe, watery diarrhea that can quickly kill infants through dehydration before they can build immunity.\n> **Key Takeaway:** Rotavirus is the leading global cause of severe, dehydrating viral gastroenteritis in infants and young children.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the highly specific mechanism of action for the antiviral drug acyclovir?`,
    keywords: ["inhibits dna polymerase", "dna polymerase inhibitor", "nucleoside analogue", "herpes drug", "acyclovir mechanism", "viral thymidine kinase activation", "chain termination"],
    explanation: `## Insight\nAcyclovir is a "prodrug" that only becomes toxic to DNA replication when activated by an enzyme (thymidine kinase) produced *only* by the Herpes virus. It then acts as a fake DNA building block that permanently jams the viral DNA polymerase.\n> **Key Takeaway:** Acyclovir is a targeted antiviral drug that inhibits herpesvirus DNA polymerase, but only after being activated by the virus's own enzymes.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific antiviral drug is famously categorized as a Nucleoside Reverse Transcriptase Inhibitor (NRTI) utilized in the treatment of HIV?`,
    keywords: ["zidovudine", "azt", "Retrovir", "NRTI", "reverse transcriptase inhibitor", "AZT drug", "zidovudine NRTI"],
    explanation: `## Insight\nZidovudine (AZT) works by mimicking a normal DNA building block. When the HIV reverse transcriptase enzyme tries to build its DNA strand, it accidentally grabs the AZT molecule. Because AZT is chemically "broken," no further DNA blocks can be attached, terminating the chain.\n> **Key Takeaway:** Zidovudine (AZT) is a classic Nucleoside Reverse Transcriptase Inhibitor (NRTI) used to terminate DNA synthesis in HIV.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the highly specific molecular target of the revolutionary Hepatitis C antiviral drug sofosbuvir?`,
    keywords: ["ns5b", "rna-dependent rna polymerase", "rdrp", "HCV polymerase", "sofosbuvir target", "NS5B inhibitor", "hepatitis C polymerase"],
    explanation: `## Insight\nSofosbuvir specifically targets the NS5B protein, which is the RNA-dependent RNA polymerase the Hepatitis C virus uses to copy its genome. By jamming this specific photocopier enzyme, the virus simply cannot replicate, effectively curing the patient.\n> **Key Takeaway:** The antiviral drug sofosbuvir targets and jams the Hepatitis C virus NS5B RNA-dependent RNA polymerase.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which of the following medical formulations correctly describes the modern MMR (Measles, Mumps, Rubella) vaccine?`,
    keywords: ["live attenuated", "live attenuated vaccine", "MMR vaccine", "live virus vaccine", "attenuated measles vaccine", "attenuated mumps vaccine", "attenuated rubella vaccine"],
    explanation: `## Insight\nA "live attenuated" vaccine uses a real, living virus that has been genetically weakened in the lab so it cannot cause disease in healthy people. Because it actively replicates in the body, it triggers a massive, highly effective, lifelong immune response.\n> **Key Takeaway:** The Measles, Mumps, and Rubella (MMR) vaccine is a live attenuated vaccine, containing weakened but actively replicating viruses.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary immunological and safety advantage of utilizing Virus-Like Particles (VLPs) as vaccines (like the HPV vaccine)?`,
    keywords: ["non-infectious", "lack genetic material", "no genetic material", "empty capsid", "VLP vaccine", "safe vaccine", "no replication", "antigenic display"],
    explanation: `## Insight\nA Virus-Like Particle (VLP) is basically an empty viral shell. Because it is completely empty (no DNA/RNA), it is 100% incapable of causing infection. However, because its outside looks exactly like the real virus, the immune system builds perfect immunity to it.\n> **Key Takeaway:** Virus-Like Particles (VLPs) are highly safe vaccines because they physically mimic the viral structure but contain zero infectious genetic material.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the natural biological function of the CRISPR-Cas9 system in bacteria?`,
    keywords: ["adaptive immunity", "immune system", "stores viral dna", "bacterial defence", "Cas9 nuclease", "CRISPR array", "phage resistance"],
    explanation: `## Insight\nCRISPR is a bacterial immune system. When a phage attacks, the bacterium cuts a tiny piece of the viral DNA and stores it in an archive. If that same virus attacks again, the bacterium uses the Cas9 enzyme as guided scissors to instantly cut and destroy the viral DNA.\n> **Key Takeaway:** CRISPR-Cas9 is a bacterial adaptive immune system that stores viral DNA fragments to fight off future viral infections.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the primary, suspected ecological reservoir for the highly lethal Ebola virus in the wild?`,
    keywords: ["fruit bats", "bats", "Pteropodidae", "bat reservoir", "Ebola reservoir", "African fruit bats", "flying foxes"],
    explanation: `## Insight\nExtensive ecological surveying in Africa strongly suggests that specific species of fruit bats naturally harbor the Ebola virus asymptomatically. Outbreaks in humans often begin when people handle infected bats or monkeys that have come into contact with bat saliva or guano.\n> **Key Takeaway:** Fruit bats are strongly believed to be the primary, asymptomatic ecological reservoir for the Ebola virus in nature.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly destructive plant virus is transmitted persistently by the whitefly (*Bemisia tabaci*)?`,
    keywords: ["tomato yellow leaf curl virus", "tylcv", "TYLCV virus", "begomovirus whitefly", "tomato leaf curl", "whitefly transmitted virus"],
    explanation: `## Insight\nTomato Yellow Leaf Curl Virus (TYLCV) is a begomovirus. It has evolved an exclusive relationship with the whitefly. The whitefly ingests the virus, and the virus actually circulates into the insect's salivary glands, allowing the fly to permanently infect plants (persistent transmission).\n> **Key Takeaway:** The highly destructive Tomato Yellow Leaf Curl Virus (TYLCV) relies exclusively on the whitefly for persistent transmission.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly pathogenic RNA virus is devastating global honeybee populations, aggressively transmitted by parasitic Varroa mites?`,
    keywords: ["deformed wing virus", "dwv", "DWV virus", "honeybee virus", "bee virus", "Varroa transmitted virus", "wing deformity virus"],
    explanation: `## Insight\nWhile the Deformed Wing Virus alone is bad, it became a catastrophe due to the *Varroa* mite. The mite acts like a dirty syringe, injecting massive amounts of DWV directly into the bee's bloodstream, causing newly hatched bees to have shriveled, useless wings.\n> **Key Takeaway:** The Deformed wing virus (DWV) is a devastating RNA virus that cripples honeybees and is transmitted by parasitic Varroa mites.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the specific pathogenic function of 'viral RNA silencing suppressor' proteins produced during a plant infection?`,
    keywords: ["block rnai", "inhibit rna interference", "suppress host immunity", "RNAi suppressor", "silencing suppressor", "counter RNA silencing", "viral counterdefense"],
    explanation: `## Insight\nPlants use a system called RNA interference (RNAi) to chop up foreign viral RNA. Viruses evolved "suppressor proteins" to seek out the plant's RNAi scissors and jam them, effectively shutting off the plant's immune system and allowing the virus to replicate freely.\n> **Key Takeaway:** Viral RNA silencing suppressors act as biological jammers, actively blocking the plant's RNAi immune system.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which prominent mycovirus infects the aggressive fungus that causes chestnut blight, significantly reducing the fungus's lethal virulence?`,
    keywords: ["cryptonectria hypovirus 1", "chv1", "chestnut blight virus", "hypovirus", "mycovirus CHV1", "biological control virus"],
    explanation: `## Insight\nCHV1 infects the aggressive fungus that causes chestnut blight. By making the fungus "sick," the virus reduces the fungus's ability to kill the tree (hypovirulence). Scientists use this virus as a biological control agent to save chestnut trees.\n> **Key Takeaway:** Cryptonectria hypovirus 1 (CHV1) is a mycovirus that reduces the lethal virulence of the chestnut blight fungus.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the primary biological limitation hindering the widespread medical use of bacteriophages as therapeutic agents (phage therapy)?`,
    keywords: ["high host specificity", "too specific", "narrow host range", "host specificity", "phage specificity", "limited spectrum", "strain specific", "phage therapy limitation"],
    explanation: `## Insight\nPhage therapy uses viruses to kill antibiotic-resistant bacteria. The problem is that phages are *too* specific. A phage might kill *E. coli* strain A, but completely ignore *E. coli* strain B right next to it. Therefore, doctors often have to mix a customized "cocktail" of dozens of phages to cure a patient.\n> **Key Takeaway:** The extreme host specificity of bacteriophages limits their broad medical use, as a single phage type will not kill all variants of a bacteria.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral pathogen is universally recognized as the direct causative agent of Kaposi's sarcoma, a vascular cancer frequently observed in AIDS patients?`,
    keywords: ["human herpesvirus 8", "hhv-8", "hhv8", "KSHV", "Kaposi's sarcoma herpesvirus", "HHV-8 virus", "gammaherpesvirus 8"],
    explanation: `## Insight\nKaposi's sarcoma is incredibly rare in healthy people but exploded in prevalence during the AIDS epidemic. Scientists discovered that a specific gammaherpesvirus, HHV-8, takes advantage of the patient's collapsed immune system to aggressively drive this vascular cancer.\n> **Key Takeaway:** Human herpesvirus 8 (HHV-8) is an oncovirus that takes advantage of immunosuppression to cause Kaposi's sarcoma.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical molecular function of the HIV 'Rev' protein during the viral replication cycle?`,
    keywords: ["transports unspliced rna", "exports viral rna", "transport rna out of nucleus", "Rev response element", "nuclear export", "RRE binding", "HIV Rev function"],
    explanation: `## Insight\nNormally, human cells refuse to let RNA leave the nucleus unless it is fully chopped up and spliced. The viral 'Rev' protein acts like a VIP bouncer. It grabs the full-length, unspliced viral RNA, bypasses the cellular rules, and drags it out into the cytoplasm so new viruses can be built.\n> **Key Takeaway:** The HIV Rev protein transports massive, unspliced viral RNA genomes out of the nucleus and into the cytoplasm.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is a primary, devastating consequence of the HIV 'Nef' protein's activity inside an infected host cell?`,
    keywords: ["downregulates cd4", "removes mhc class i", "downregulates mhc", "immune evasion", "CD4 downregulation", "MHC-I downregulation", "Nef protein function", "superinfection protection"],
    explanation: `## Insight\n'Nef' is the ultimate stealth protein. An infected cell normally waves a red flag (MHC class I) to tell killer T-cells to destroy it. The Nef protein aggressively pulls these MHC flags back inside the cell, making the infected cell totally invisible to the immune system. It also removes CD4 receptors to prevent superinfection.\n> **Key Takeaway:** The HIV Nef protein removes MHC class I flags from the cell surface to hide the infection from killer T-cells.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the highly specialized, defensive role of the HIV 'Vif' protein?`,
    keywords: ["degrades apobec3g", "counteracts apobec3g", "APOBEC3G antagonist", "vif protein", "host restriction factor", "HIV Vif function", "neutralizes APOBEC3G"],
    explanation: `## Insight\nHuman cells have a built-in defense mechanism against retroviruses called APOBEC3G, which causes massive mutations in viral RNA. The HIV 'Vif' protein seeks out this APOBEC3G enzyme and flags it for immediate destruction by the cell's own garbage disposal system, protecting the virus.\n> **Key Takeaway:** The HIV Vif protein protects the virus by locating and destroying APOBEC3G, a potent human antiviral defense enzyme.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological function of the HIV 'Vpu' protein during the final stages of the viral life cycle?`,
    keywords: ["degrades tetherin", "antagonizes tetherin", "allows viral release", "CD4 degradation", "Vpu protein", "tetherin antagonist", "enhances budding", "HIV release factor"],
    explanation: `## Insight\nWhen new HIV particles try to bud out of the cell, human cells deploy a protein called "tetherin," which acts like a sticky trap holding the new viruses to the cell surface. The HIV 'Vpu' protein acts as chemical scissors, cutting the tetherin trap and freeing the new viruses to float away.\n> **Key Takeaway:** The HIV Vpu protein destroys a host defense mechanism called 'tetherin', allowing newly formed viruses to detach and escape.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which of the following statements accurately highlights a key clinical difference between HIV-1 and HIV-2?`,
    keywords: ["hiv-2 is less virulent", "hiv-2 progresses slower", "hiv 2 is less pathogenic", "HIV-2 lower transmissibility", "slower AIDS progression", "West Africa HIV-2", "milder disease course"],
    explanation: `## Insight\nHIV-1 is the highly aggressive, easily transmitted strain responsible for the global pandemic. HIV-2 (mostly confined to West Africa) is "weaker"; it transmits poorly, and infected individuals can often live for decades before their immune system finally collapses into AIDS.\n> **Key Takeaway:** HIV-2 is generally less aggressive, less transmissible, and progresses much slower than HIV-1.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary biological function of the SARS-CoV-2 'spike' (S) protein?`,
    keywords: ["binds to ace2", "binds ace2 receptor", "receptor binding", "membrane fusion", "viral entry", "ACE2 interaction", "spike glycoprotein function", "SARS-CoV-2 entry"],
    explanation: `## Insight\nThe SARS-CoV-2 spike protein is a highly specialized grappling hook. It perfectly matches and binds to the ACE2 receptor found heavily in human lungs and blood vessels. Once attached, the spike changes shape, forcing the virus and cell membranes to fuse.\n> **Key Takeaway:** The SARS-CoV-2 spike protein acts as the key to infect cells by binding directly to the human ACE2 surface receptor.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly effective oral antiviral drug (found in Paxlovid) functions specifically as a main protease (Mpro) inhibitor in the treatment of COVID-19?`,
    keywords: ["nirmatrelvir", "paxlovid", "nirmatrelvir/ritonavir", "main protease inhibitor", "mpro inhibitor", "covid protease inhibitor", "oral COVID-19 drug"],
    explanation: `## Insight\nSARS-CoV-2 builds its machinery as one giant block of useless protein. The viral main protease (Mpro) cuts this block into functional pieces. Nirmatrelvir physically jams these scissors. Because the virus cannot cut its proteins, it cannot replicate.\n> **Key Takeaway:** Nirmatrelvir is a highly effective COVID-19 antiviral that works by inhibiting the viral protease enzyme.`
  },
  {
    course: "BI110", term: "T2",
    q: `Based on extensive genomic sequencing, what animal species is widely considered the natural ecological reservoir for the SARS-CoV-2 virus?`,
    keywords: ["horseshoe bats", "bats", "rhinolophus", "Rhinolophus bats", "bat reservoir", "horseshoe bat species", "SARSr-CoV reservoir"],
    explanation: `## Insight\nGenetic analysis of SARS-CoV-2 reveals that it shares over 96% of its genome with a coronavirus found naturally in wild horseshoe bats. While an intermediate animal (like a pangolin) may have been involved in the jump to humans, the ultimate evolutionary reservoir is the bat.\n> **Key Takeaway:** Horseshoe bats are widely recognized as the natural ecological reservoir for the SARS-CoV-2 virus.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which highly diverse group of viruses is statistically responsible for causing the majority of 'common cold' infections in adults?`,
    keywords: ["rhinovirus", "rhinoviruses", "human rhinovirus", "HRV", "common cold virus", "rhinovirus serotypes", "upper respiratory infection virus"],
    explanation: `## Insight\nThe "common cold" is caused by over 200 different viruses. The undisputed kings of the cold are the rhinoviruses (from 'rhino', meaning nose). Because there are over 100 different serotypes of rhinovirus alone, you can never build total immunity to all of them.\n> **Key Takeaway:** Rhinoviruses are the leading cause of the common cold in adults, presenting with mild, typically feverless, upper respiratory symptoms.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral pathogen is universally recognized as the absolute most common cause of severe bronchiolitis and pneumonia in infants under one year of age?`,
    keywords: ["respiratory syncytial virus", "rsv", "RSV virus", "bronchiolitis virus", "infant pneumonia", "RSV bronchiolitis", "pediatric RSV"],
    explanation: `## Insight\nWhile RSV might just cause a mild sniffle in an adult, it aggressively attacks the tiny branching airways (bronchioles) in a baby's lungs. The resulting inflammation and mucus severely narrow these already tiny tubes, making it incredibly difficult for the infant to breathe.\n> **Key Takeaway:** Respiratory syncytial virus (RSV) is the definitive leading cause of severe infant bronchiolitis globally.`
  },
  {
    course: "BI110", term: "T2",
    q: `When observed in an artificial laboratory cell culture, what highly characteristic cytopathic effect visually identifies an active RSV infection?`,
    keywords: ["intracytoplasmic inclusion bodies", "inclusion bodies", "syncytia", "eosinophilic inclusions", "RSV inclusion bodies", "multinucleated cells", "cytopathic effect RSV"],
    explanation: `## Insight\nWhen RSV hijacks a cell, it creates massive "factories" to build viral proteins. These factories get so dense they can be seen under a microscope as distinct, pink-staining blobs floating inside the host cell's cytoplasm, known as eosinophilic intracytoplasmic inclusion bodies.\n> **Key Takeaway:** Under a microscope, an RSV infection is characterized by the distinct formation of massive intracytoplasmic inclusion bodies.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific group of highly contagious viruses is responsible for causing Hand, Foot, and Mouth Disease (HFMD) in young children?`,
    keywords: ["coxsackievirus", "enterovirus 71", "enteroviruses", "coxsackievirus a16", "hfmd virus", "coxsackie virus", "EV71", "HFMD enterovirus"],
    explanation: `## Insight\nHand, Foot, and Mouth Disease is characterized by painful sores in the mouth and a blistering rash on the hands and feet. It is primarily caused by viruses that live in the human gut (enteroviruses), specifically Coxsackievirus A16 and Enterovirus 71.\n> **Key Takeaway:** Hand, Foot, and Mouth Disease (HFMD) is primarily caused by specific enteroviruses, most notably Coxsackievirus A16.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary epidemiological route of transmission for the highly infectious Poliovirus?`,
    keywords: ["faecal-oral", "fecal-oral", "fecal oral route", "contaminated water", "oral-fecal", "ingestion of feces", "enteric transmission", "polio transmission route"],
    explanation: `## Insight\nPolio is an enterovirus; it reproduces massively in the human intestines and is shed in the feces. In areas with poor sanitation, the virus leaches into drinking water. When another person drinks that water, the virus enters their gut, completing the fecal-oral cycle.\n> **Key Takeaway:** The Poliovirus is transmitted primarily through the faecal-oral route via the ingestion of contaminated water or food.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is a highly rare, invariably fatal late-stage neurological complication of a Measles infection that can strike years after recovery?`,
    keywords: ["subacute sclerosing panencephalitis", "sspe", "measles late complication", "SSPE measles", "fatal neurological measles", "measles encephalitis late", "persistent measles infection"],
    explanation: `## Insight\nIn extremely rare cases, a mutated version of the measles virus crosses into the brain during childhood. It hides there, spreading slowly for up to 10 years without symptoms. Eventually, it triggers massive brain inflammation (SSPE), causing seizures, coma, and certain death.\n> **Key Takeaway:** Subacute sclerosing panencephalitis (SSPE) is a rare, fatal neurological complication that can occur years after a Measles infection.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific clinical description perfectly identifies the characteristic rash associated with Rubella (German measles)?`,
    keywords: ["fine pink rash", "lasts three days", "three day rash", "fine maculopapular rash", "face to body rash", "light pink exanthem", "rubella rash appearance"],
    explanation: `## Insight\nRubella is often called the "three-day measles." The rash is a very fine, light pink dusting that starts on the face, moves down the body, and vanishes completely in about 72 hours. While mild in children, it is heavily feared because it causes catastrophic birth defects if a pregnant woman catches it.\n> **Key Takeaway:** The Rubella rash is characterized as a fine, light pink rash that appears on the face and fades rapidly within three days.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific viral group is overwhelmingly recognized as the most common global cause of aseptic (viral) meningitis?`,
    keywords: ["enteroviruses", "echoviruses", "coxsackieviruses", "enterovirus meningitis", "viral meningitis cause", "non-polio enteroviruses", "aseptic meningitis virus"],
    explanation: `## Insight\nWhile bacterial meningitis is highly lethal, viral (aseptic) meningitis is usually much milder. The vast majority of these viral cases are caused by enteroviruses, which spread easily through fecal-oral contact in the summer (like swimming in crowded public pools).\n> **Key Takeaway:** Enteroviruses (like echoviruses and coxsackieviruses) are the most common global cause of viral (aseptic) meningitis.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological function of the 'penton base' protein located on the geometric vertices of an Adenovirus?`,
    keywords: ["binds integrins", "mediates entry", "internalisation", "penton base integrin interaction", "adenovirus entry", "cell attachment", "endocytosis trigger", "viral internalization"],
    explanation: `## Insight\nAdenoviruses have antenna-like "fibers" sticking out of their corners to find the host cell. But the base of that antenna—the "penton base"—is what actually forces the door open. It binds to host integrin proteins, tricking the cell into swallowing the virus via endocytosis.\n> **Key Takeaway:** The penton base protein on an Adenovirus mediates viral entry by interacting with host cell integrins to trigger internalisation.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is a recognized, highly severe potential side effect of administering the live Smallpox vaccine (vaccinia virus) to an immunocompromised individual?`,
    keywords: ["progressive vaccinia", "vaccinia necrosum", "uncontrolled spread", "vaccinia infection in immunocompromised", "progressive vaccinia necrosum", "vaccinia gangrenosa"],
    explanation: `## Insight\nThe smallpox vaccine contains the live, replicating Vaccinia virus. In a healthy person, the immune system defeats it. But in an untreated HIV patient, the immune system cannot stop it. The live virus spreads uncontrollably, rotting the skin and organs—a fatal condition called progressive vaccinia.\n> **Key Takeaway:** The live smallpox vaccine poses a severe risk of causing 'progressive vaccinia' (uncontrolled viral spread) in immunocompromised individuals.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the primary antiviral mechanism of action for the broad-spectrum drug ribavirin?`,
    keywords: ["lethal mutagenesis", "inhibits rna synthesis", "mutagenesis", "error prone replication", "nucleoside analogue", "rna mutagen", "ribavirin mechanism", "viral RNA mutagen"],
    explanation: `## Insight\nRibavirin looks exactly like a normal RNA building block. When an RNA virus (like Hepatitis C) tries to copy its genome, it grabs the ribavirin. Because the drug is "broken," it forces the viral photocopier to make thousands of massive spelling errors, resulting in highly mutated, non-functional offspring.\n> **Key Takeaway:** Ribavirin acts as a deceptive nucleoside analogue, inducing lethal mutagenesis and inhibiting RNA synthesis in viruses.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific group of viruses is overwhelmingly recognized as the major global cause of viral conjunctivitis (commonly known as 'pink eye')?`,
    keywords: ["adenovirus", "adenoviruses", "adenoviral conjunctivitis", "epidemic keratoconjunctivitis", "pink eye virus", "adenovirus conjunctivitis", "EKC", "viral pink eye"],
    explanation: `## Insight\n"Pink eye" is incredibly contagious. The most common viral culprits are Adenoviruses. Because they lack a fragile lipid envelope, they can survive for weeks on doorknobs and towels, making them incredibly easy to spread in schools and daycares through mucosal contact.\n> **Key Takeaway:** Adenoviruses are highly contagious and are the major global cause of viral conjunctivitis (pink eye).`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific class of human immune cells serves as the primary target and lifelong reservoir for the Epstein-Barr virus (EBV)?`,
    keywords: ["b cells", "b lymphocytes", "B cells", "B lymphocytes EBV", "CD21 B cells", "EBV reservoir", "memory B cells", "latent EBV reservoir"],
    explanation: `## Insight\nUnlike HIV (which attacks T-cells), EBV specifically attacks B-cells (the cells that make antibodies). The virus latches onto the CD21 receptor on the B-cell, slips inside, and alters the cell's DNA, acting as a permanent hiding place for the virus.\n> **Key Takeaway:** The Epstein-Barr virus (EBV) primarily targets and establishes lifelong latency within human B lymphocytes.`
  },
  {
    course: "BI110", term: "T2",
    q: `In a clinical setting, which rapid laboratory test is heavily utilized to definitively diagnose infectious mononucleosis caused by EBV?`,
    keywords: ["monospot test", "monospot", "heterophile antibody test", "ebv monospot", "paul bunnell test", "mononucleosis spot test", "heterophile agglutination"],
    explanation: `## Insight\nWhen EBV infects B-cells, the B-cells go haywire and start producing massive amounts of weird, random antibodies called "heterophile antibodies." The Monospot test simply looks for these bizarre antibodies in the patient's blood to confirm an active mono infection.\n> **Key Takeaway:** The Monospot test is a rapid diagnostic tool that detects the unique 'heterophile antibodies' produced during an active EBV (mononucleosis) infection.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the critical biological function of the Cytomegalovirus (CMV) 'UL97 kinase' enzyme, particularly regarding medical antiviral treatment?`,
    keywords: ["phosphorylates ganciclovir", "activates ganciclovir", "cmv ul97", "ganciclovir activation", "UL97 kinase", "cmv drug activation", "ganciclovir phosphorylation"],
    explanation: `## Insight\nGanciclovir is the primary drug used to treat severe CMV. The drug is completely inactive when swallowed. It only becomes toxic *after* it is altered. The CMV UL97 kinase enzyme adds a phosphate to the drug, unwittingly activating the very weapon that will destroy the virus.\n> **Key Takeaway:** The CMV UL97 kinase enzyme is critical because it phosphorylates and activates the antiviral drug ganciclovir.`
  },
  {
    course: "BI110", term: "T2",
    q: `What type of vaccine are the modern rotavirus vaccines (Rotarix and RotaTeq) used to prevent severe Rotavirus infections in infants?`,
    keywords: ["live attenuated", "oral live attenuated", "live oral vaccine", "attenuated rotavirus vaccine", "rotavirus live vaccine", "Rotarix live", "RotaTeq live"],
    explanation: `## Insight\nRotavirus infects the gut. To build a strong immune defense exactly where the virus attacks, the vaccine must mimic a natural infection. Both major rotavirus vaccines use live, weakened (attenuated) viruses and are squirted directly into the baby's mouth, rather than injected.\n> **Key Takeaway:** Rotavirus vaccines are 'live attenuated' viral vaccines administered orally to infants to build immunity directly in the gut.`
  },
  {
    course: "BI110", term: "T2",
    q: `What was the most alarming and devastating clinical feature of the massive Zika virus outbreak in the Americas (2015-2016)?`,
    keywords: ["microcephaly", "birth defects", "congenital microcephaly", "zika microcephaly", "small head", "brain damage in newborns", "congenital zika syndrome", "newborn microcephaly"],
    explanation: `## Insight\nThe 2015 outbreak terrified the medical community because the Zika virus proved capable of crossing the placenta. It attacked the developing brains of fetuses, causing babies to be born with abnormally small heads and severe brain damage (microcephaly).\n> **Key Takeaway:** The 2015 Zika epidemic was uniquely devastating because the virus crossed the placenta, causing microcephaly and severe brain damage in newborns.`
  },
  {
    course: "BI110", term: "T2",
    q: `In terms of Baltimore classification and genome structure, what specific type of genome does the Zika virus possess?`,
    keywords: ["positive sense ssrna", "ssrna", "single-stranded rna", "positive sense rna", "flavivirus genome", "positive strand rna", "Zika genome type", "Baltimore group IV"],
    explanation: `## Insight\nZika is genetically and structurally very similar to other mosquito-borne diseases like Dengue fever. Because it belongs to the Flavivirus family, its genetic payload is a single strand of positive-sense RNA, meaning host ribosomes can translate it immediately upon entry.\n> **Key Takeaway:** The Zika virus is a positive-sense, single-stranded RNA virus belonging to the mosquito-borne Flavivirus family.`
  },
  {
    course: "BI110", term: "T2",
    q: `Why is diagnosing a brand-new HIV infection notoriously difficult using standard, cheap antibody blood tests during the 'acute' stage?`,
    keywords: ["window period", "antibodies have not formed yet", "no antibodies", "seroconversion delay", "2-4 week window", "antibody negative but infectious", "acute HIV diagnosis challenge"],
    explanation: `## Insight\nStandard HIV tests look for the antibodies your immune system builds. Building antibodies takes time. During the first few weeks after exposure, a person is highly infectious, but an antibody test will come back completely negative. This dangerous gap is called the "window period."\n> **Key Takeaway:** The 'window period' is the critical 2-4 week gap where a patient is highly infectious with HIV, but standard tests return false negatives because antibodies have not yet formed.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the modern treatment of HIV, what is the absolute primary advantage of utilizing 'integrase inhibitors' (such as dolutegravir)?`,
    keywords: ["high genetic barrier to resistance", "low resistance", "highly tolerated", "integrase inhibitor advantage", "dolutegravir", "high barrier to mutation", "INSTI advantage", "potent antiretroviral"],
    explanation: `## Insight\nHIV mutates incredibly fast. Modern Integrase Strand Transfer Inhibitors (INSTIs) are revolutionary because their chemical structure makes it mathematically very difficult for the virus to mutate around them. They hit the virus hard and have a very high barrier to resistance.\n> **Key Takeaway:** Integrase inhibitors are modern HIV drugs favored because they have an incredibly high genetic barrier to viral resistance and are well tolerated.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific epidemiological characteristic uniquely defines the Hepatitis E virus (HEV) transmission compared to Hepatitis B or C?`,
    keywords: ["faecal-oral route", "fecal oral", "contaminated water", "enteric transmission", "waterborne hepatitis", "hepevirus transmission", "HEV faecal-oral"],
    explanation: `## Insight\nHepatitis B and C are blood-borne viruses. Hepatitis E is an "enteric" virus—it lives in the gut and is shed in feces. If sewage leaks into a town's drinking water, Hepatitis E sweeps through the population, causing massive outbreaks of acute liver inflammation via the faecal-oral route.\n> **Key Takeaway:** The Hepatitis E virus (HEV) is an enteric pathogen transmitted primarily through the faecal-oral route via contaminated drinking water.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the pathology of the Hepatitis B virus (HBV), what is the highly dangerous biological function of the viral 'X protein' (HBx)?`,
    keywords: ["promotes cancer", "carcinogenesis", "transactivates genes", "liver cancer", "hbx oncoprotein", "hepatocellular carcinoma promotion", "cell cycle dysregulation", "HBV X protein"],
    explanation: `## Insight\nHBV doesn't just cause cancer by damaging the liver with inflammation; it actively drives the cancer genetically. The viral HBx protein acts like a rogue manager. It turns on human genes that tell the liver cell to divide uncontrollably, promoting hepatocellular carcinoma.\n> **Key Takeaway:** The Hepatitis B 'X protein' (HBx) is a dangerous regulatory protein that hijacks host cell genes, directly promoting the development of liver cancer.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which specific, recently discovered viral pathogen is definitively associated with the development of Merkel cell carcinoma, a highly rare and aggressive form of skin cancer?`,
    keywords: ["merkel cell polyomavirus", "mcv", "merkel cell carcinoma virus", "polyomavirus", "mcv polyomavirus", "Merkel cell virus", "MCPyV"],
    explanation: `## Insight\nIn 2008, scientists discovered that the vast majority of these rare tumors contained the DNA of a previously unknown virus: the Merkel cell polyomavirus (MCV). The virus splices its DNA into the human chromosome, locking the skin cell into a state of endless, cancerous division.\n> **Key Takeaway:** The Merkel cell polyomavirus (MCV) is a recently discovered oncovirus directly responsible for causing the aggressive skin cancer Merkel cell carcinoma.`
  },
  {
    course: "BI110", term: "T2",
    q: `When treating Influenza with the antiviral drug oseltamivir (Tamiflu), what specific genetic mutation is the most common cause of viral resistance?`,
    keywords: ["h275y", "mutation in neuraminidase active site", "h274y", "neuraminidase mutation", "oseltamivir resistance mutation", "H275Y neuraminidase", "NA H275Y", "Tamiflu resistance"],
    explanation: `## Insight\nOseltamivir (Tamiflu) works by perfectly plugging the active site of the neuraminidase enzyme. However, if the virus experiences a specific point mutation (swapping Histidine for Tyrosine at position 275, known as H275Y), the shape changes slightly, and the drug can no longer fit, rendering the virus resistant.\n> **Key Takeaway:** The Influenza virus develops resistance to oseltamivir (Tamiflu) through highly specific point mutations (like H275Y) in the active site of its neuraminidase enzyme.`
  },
  {
    course: "BI110", term: "T2",
    q: `During the acute phase of a COVID-19 infection, which highly sensitive laboratory method is universally considered the 'gold standard' for definitive diagnosis?`,
    keywords: ["rt-pcr", "pcr", "reverse transcription polymerase chain reaction", "real time pcr", "covid pcr test", "nasopharyngeal swab pcr", "SARS-CoV-2 PCR"],
    explanation: `## Insight\nBecause SARS-CoV-2 is an RNA virus, scientists use a swab to collect cells. The RT-PCR test uses an enzyme to convert the viral RNA into DNA, and then aggressively copies (amplifies) that DNA millions of times until even a tiny trace of the virus becomes glaringly obvious.\n> **Key Takeaway:** Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR) is the highly sensitive "gold standard" test for diagnosing an active COVID-19 infection.`
  },
  {
    course: "BI110", term: "T2",
    q: `Within the physical architecture of the SARS-CoV-2 virus, what is the critical biological function of the Nucleocapsid (N) protein?`,
    keywords: ["encapsidates rna", "binds rna", "protects viral rna", "n protein function", "viral rna packaging", "nucleocapsid packaging", "rna binding protein", "SARS-CoV-2 N protein"],
    explanation: `## Insight\nThe incredibly long, fragile strand of viral RNA cannot just float loosely inside the viral envelope. Millions of Nucleocapsid (N) proteins bind directly to the RNA, spooling it up and packing it tightly and safely into a dense core. It is the primary target for rapid antigen tests.\n> **Key Takeaway:** The SARS-CoV-2 Nucleocapsid (N) protein binds directly to the viral RNA genome, heavily compacting and protecting it inside the viral envelope.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the defining, highly lethal characteristic of MERS (Middle East Respiratory Syndrome)?`,
    keywords: ["severe pneumonia with high mortality", "severe pneumonia", "35% mortality", "acute respiratory distress", "kidney failure", "high case fatality rate", "ARDS", "MERS-CoV CFR"],
    explanation: `## Insight\nUnlike the common cold coronaviruses, MERS-CoV is an absolute killer. Originating in dromedary camels, the virus frequently jumps to humans. It aggressively attacks the deep lungs and kidneys, causing severe pneumonia and resulting in death in more than 1 out of every 3 infected people (~35% CFR).\n> **Key Takeaway:** MERS is a highly lethal coronavirus characterized by severe pneumonia and a staggering mortality rate of approximately 35%.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the medical treatment of Influenza, what highly specific molecular process is aggressively targeted and disabled by the novel antiviral drug baloxavir marboxil?`,
    keywords: ["cap-snatching", "pa endonuclease", "endonuclease", "cap dependent endonuclease", "influenza polymerase pa", "baloxavir target", "mrna cap snatching", "PA subunit inhibitor"],
    explanation: `## Insight\nTo make mRNA, the Influenza virus uses a molecular pair of scissors (the PA endonuclease subunit) to steal a chemical "cap" from the human's own mRNA. Baloxavir marboxil is a revolutionary, single-dose drug that jams these scissors. Without stolen caps, the virus cannot transcribe genes.\n> **Key Takeaway:** The antiviral drug baloxavir marboxil works by explicitly targeting and disabling the cap-dependent endonuclease (PA subunit) to stop viral transcription.`
  },
  {
    course: "BI110", term: "T2",
    q: `For a novel virus to trigger a catastrophic global pandemic, which triad of specific biological and epidemiological factors must absolutely be present?`,
    keywords: ["efficient human transmission, no immunity, severe disease", "transmission, no immunity, severity", "human to human spread", "novel virus", "lack of pre existing immunity", "causes severe illness", "pandemic prerequisites"],
    explanation: `## Insight\nA pandemic requires a perfect storm. The virus must spread easily through the air or casual contact. It must be completely novel, meaning no human's immune system has ever seen it before (no antibodies exist). Finally, it must make people sick enough to cause global hospitalizations.\n> **Key Takeaway:** A global pandemic requires highly efficient human-to-human transmission, zero pre-existing immunity in the population, and the ability to cause severe disease.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the mathematical modeling of infectious diseases, what exactly does the Basic Reproduction Number ($R_0$) measure?`,
    keywords: ["average number of secondary infections", "secondary infections", "r naught", "basic reproduction number", "contagiousness measure", "expected secondary cases", "R0 definition", "epidemiological parameter"],
    explanation: `## Insight\n$R_0$ (pronounced R-naught) is the ultimate measure of how contagious a virus is. It explicitly measures the statistical average number of secondary infections generated by one single infected individual entering a completely susceptible population.\n> **Key Takeaway:** The Basic Reproduction Number ($R_0$) measures the average number of secondary infections one sick person will cause in a completely susceptible population.`
  },
  {
    course: "BI110", term: "T2",
    q: `Of all known human pathogens, which specific virus carries the absolute highest, most terrifying Case Fatality Rate (CFR) if medical treatment is not administered before symptoms begin?`,
    keywords: ["rabies", "rabies virus", "rabies fatality rate", "nearly 100% fatal", "most lethal virus", "rabies cfr", "rabies mortality", "untreated rabies"],
    explanation: `## Insight\nRabies is the absolute king of lethality. Once the virus travels up the nerves and hits the brain, it is virtually unstoppable. Without the post-exposure vaccine administered prior to symptom onset, the mortality rate is considered nearly 100%.\n> **Key Takeaway:** The Rabies virus boasts the highest known Case Fatality Rate (CFR) in humans, being nearly 100% fatal once neurological symptoms appear.`
  },
  {
    course: "BI110", term: "T2",
    q: `In the continuous clinical management of an HIV-positive patient, what is the absolute primary purpose of conducting routine 'viral load' blood testing?`,
    keywords: ["monitor hiv rna levels", "monitor treatment effectiveness", "measure viral rna", "hiv viral load", "art monitoring", "suppression check", "treatment response", "viral suppression"],
    explanation: `## Insight\nAntiretroviral therapy (ART) stops the virus from replicating. To prove the drugs are working, doctors use PCR to count exactly how many copies of HIV RNA are floating in the plasma. If the patient takes their pills daily, the viral load drops to "undetectable" levels.\n> **Key Takeaway:** Viral load testing measures the amount of HIV RNA in the blood to ensure that antiretroviral therapy (ART) is successfully suppressing viral replication.`
  },
  {
    course: "BI110", term: "T2",
    q: `What specific ecological and epidemiological characteristic defines a 'zoonotic' virus?`,
    keywords: ["transmitted from animals to humans", "jumps from animal to human", "animal reservoir", "spillover", "zoonosis", "zoonotic transmission", "cross-species transmission"],
    explanation: `## Insight\nA "zoonosis" is a disease that naturally circulates in wild animals (like bats carrying Ebola or SARS-CoV-2). When a human interacts with that animal reservoir, the virus accidentally spills over into the human population, often causing severe outbreaks.\n> **Key Takeaway:** A zoonotic virus is a pathogen that naturally exists in an animal reservoir but possesses the ability to jump to and infect humans.`
  },
  {
    course: "BI110", term: "T2",
    q: `What is the absolute primary biological challenge preventing scientists from developing a single, lifetime 'universal' vaccine for the Influenza virus?`,
    keywords: ["high variability in hemagglutinin", "hypervariable ha head", "mutation of ha protein", "antigenic drift", "ha head variability", "influenza rapid mutation", "hemagglutinin diversity"],
    explanation: `## Insight\nOur vaccines train our immune system to recognize the "head" of the Hemagglutinin (HA) spike on the outside of the virus. Because the virus's RNA photocopier makes so many mistakes (antigenic drift), the shape of that head changes slightly every single year, rendering old vaccines useless.\n> **Key Takeaway:** We cannot make a universal flu vaccine because the primary target for our antibodies (the hemagglutinin head) mutates incredibly fast.`
  },
  {
    course: "BI110", term: "T2",
    q: `Which virus is globally notorious for crossing the placenta and causing devastating congenital infections that lead to severe birth defects like sensorineural hearing loss?`,
    keywords: ["cytomegalovirus", "cmv", "congenital cmv", "cytomegalovirus congenital", "torch pathogen", "cmv birth defects", "CMV infection pregnancy"],
    explanation: `## Insight\nMost viruses cannot cross the highly guarded placenta to reach a developing fetus. Cytomegalovirus (CMV) is the undisputed king of congenital infections. While it causes a mild cold in the mother, if it hits the fetus, it aggressively attacks the developing brain, causing deafness and brain damage.\n> **Key Takeaway:** The Cytomegalovirus (CMV) is a notorious congenital pathogen capable of crossing the placenta and causing severe birth defects like deafness.`
  },
  {
    course: "BI110", term: "T2",
    q: `Within the carcinogenic pathology of high-risk Human Papillomavirus (HPV), what is the absolute primary, lethal function of the viral 'E6' oncoprotein?`,
    keywords: ["destroys p53", "inhibits p53", "degrades p53 tumor suppressor", "p53 degradation", "e6 p53 interaction", "apoptosis inhibition", "hpv e6 function", "tumor suppressor inactivation"],
    explanation: `## Insight\nHuman cells have an emergency brake: a master guardian protein called p53 that forces severely damaged cells to commit suicide (apoptosis) before they turn into cancer. High-risk HPV produces the E6 oncoprotein, which hunts down and completely destroys p53. Without brakes, the cell divides endlessly into a tumor.\n> **Key Takeaway:** The highly lethal HPV E6 oncoprotein causes cancer by explicitly destroying the human p53 tumor-suppressor protein, preventing damaged cells from committing suicide.`
  },
  
  
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
    tag: "💡", // Emoji for light
    q: "Why is it important to adjust the diaphragm/iris aperture in a light microscope?",
    keywords: ["diaphragm", "iris aperture", "adjust", "light", "contrast", "resolution"],
    explanation: "Adjusting the diaphragm/iris aperture controls the amount of light reaching the specimen, which is crucial for optimizing contrast and resolution.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧹", // Emoji for cleaning
    q: "Why should you only use lens paper to clean microscope lenses?",
    keywords: ["lens paper", "clean", "microscope lenses", "scratch", "damage"],
    explanation: "Lens paper is specifically designed not to scratch or damage the delicate surfaces of optical lenses, unlike other tissues or cloths.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪", // Emoji for stain
    q: "What is the primary purpose of staining in microscopy?",
    keywords: ["staining", "purpose", "microscopy", "visibility", "contrast", "differentiate"],
    explanation: "Staining enhances the visibility of cells or cellular components, increases contrast, and can help differentiate between various structures or organisms.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "💜", // Emoji for Gram stain
    q: "Differentiate between Gram-positive and Gram-negative bacteria in terms of cell wall structure and Gram stain reaction.",
    keywords: ["gram-positive", "gram-negative", "cell wall", "peptidoglycan", "outer membrane", "crystal violet"],
    explanation: "Gram-positive bacteria have a thick peptidoglycan layer and retain crystal violet stain, appearing purple. Gram-negative bacteria have a thin peptidoglycan layer and an outer membrane; they lose crystal violet but counterstain pink/red with safranin.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "💧", // Emoji for immersion oil
    q: "When and why is immersion oil used in microscopy?",
    keywords: ["immersion oil", "when", "why", "100x", "refractive index", "light scattering", "resolution"],
    explanation: "Immersion oil is used with the 100x objective lens to reduce light scattering and increase the numerical aperture, thereby improving the resolution of the image.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🚫", // Emoji for caution
    q: "Why should you never use the coarse adjustment knob with the high power objective lens (40x or 100x)?",
    keywords: ["coarse adjustment knob", "high power", "crack slide", "damage lens"],
    explanation: "Using the coarse adjustment knob with high power objectives can cause the lens to crash into the slide, potentially cracking the slide and damaging the lens.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔄", // Emoji for focus
    q: "What does it mean for a microscope to be 'parfocal'?",
    keywords: ["parfocal", "microscope", "focus", "change objective"],
    explanation: "A parfocal microscope means that once an object is in focus at one magnification, it remains approximately in focus when the magnification is changed to another objective lens.",
    course: "BI110",
    term: "T1"
  },

  // Cells
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🔬",
    q: "Name three structures found in plant cells but not in animal cells.",
    keywords: ["plant cell", "animal cell", "cell wall", "chloroplasts", "large central vacuole"],
    explanation: "Plant cells have a rigid cell wall, chloroplasts for photosynthesis, and a large central vacuole for storage and turgor pressure, which are absent in animal cells.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🏭", // Emoji for factory
    q: "Describe the primary function of the mitochondria.",
    keywords: ["mitochondria", "function", "powerhouse", "ATP", "cellular respiration"],
    explanation: "Mitochondria are often called the 'powerhouse' of the cell because their primary function is to generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy, through cellular respiration.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "📦", // Emoji for packaging
    q: "What is the function of the Golgi apparatus?",
    keywords: ["golgi apparatus", "function", "modify", "pack", "proteins", "lipids"],
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids into vesicles for secretion or delivery to other organelles.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🚧", // Emoji for boundary
    q: "Explain the fluid mosaic model of the cell membrane.",
    keywords: ["fluid mosaic model", "cell membrane", "phospholipid bilayer", "proteins", "fluid", "mosaic"],
    explanation: "The fluid mosaic model describes the cell membrane as a phospholipid bilayer with embedded and peripheral proteins, all able to move laterally (fluidity), forming a 'mosaic' pattern.",
    course: "BI110",
    term: "T1"
  },
  
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧", // Emoji for water
    q: "Differentiate between osmosis and diffusion.",
    keywords: ["osmosis", "diffusion", "difference", "water", "solute", "selectively permeable membrane"],
    explanation: "Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration. Osmosis is a specific type of diffusion that involves the net movement of water across a selectively permeable membrane from an area of higher water concentration to an area of lower water concentration.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🚪", // Emoji for channel
    q: "What is the role of active transport in cell biology?",
    keywords: ["active transport", "role", "energy", "ATP", "against concentration gradient", "low to high"],
    explanation: "Active transport is the movement of molecules across a cell membrane against their concentration gradient (from low to high concentration), requiring energy, typically in the form of ATP.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🗑️", // Emoji for waste
    q: "What is the primary function of lysosomes?",
    keywords: ["lysosomes", "function", "digest", "waste", "organelles", "enzymes"],
    explanation: "Lysosomes are membrane-bound organelles containing digestive enzymes that break down waste materials, cellular debris, and foreign invaders.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🌱", // Emoji for plant
    q: "How does the cell wall contribute to the support of a plant cell?",
    keywords: ["cell wall", "plant cell", "support", "rigid", "turgor pressure", "prevent lysis"],
    explanation: "The rigid cell wall provides structural support to the plant cell, maintains its shape, and prevents excessive water uptake (lysis) by maintaining turgor pressure against the cell membrane.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "Describe what happens to an animal cell when placed in a hypotonic solution.",
    keywords: ["animal cell", "hypotonic solution", "swell", "lyse", "burst", "water influx"],
    explanation: "When an animal cell is placed in a hypotonic solution, water will move by osmosis from the solution into the cell, causing the cell to swell and potentially lyse (burst) due to the lack of a cell wall.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "Describe what happens to a plant cell when placed in an isotonic solution.",
    keywords: ["plant cell", "isotonic solution", "flaccid", "no net movement", "limp"],
    explanation: "When a plant cell is placed in an isotonic solution, there is no net movement of water. The cell becomes flaccid (limp) as the cell membrane is not pressed against the cell wall, but the cell does not lyse.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🦠", // Emoji for bacteria
    q: "Name the two main types of prokaryotes.",
    keywords: ["prokaryotes", "bacteria", "archaea"],
    explanation: "The two main types of prokaryotes are Bacteria and Archaea, which form two of the three domains of life.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🧬", // Emoji for DNA
    q: "Where is the genetic material located in a eukaryotic cell?",
    keywords: ["eukaryotic cell", "genetic material", "dna", "nucleus"],
    explanation: "In eukaryotic cells, the genetic material (DNA) is primarily located within the membrane-bound nucleus.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🔗", // Emoji for connection
    q: "What is the function of the rough endoplasmic reticulum (RER)?",
    keywords: ["rough endoplasmic reticulum", "rer", "function", "protein synthesis", "ribosomes", "membrane proteins"],
    explanation: "The RER is involved in the synthesis, folding, modification, and transport of proteins that are destined for secretion, insertion into membranes, or delivery to other organelles; its surface is studded with ribosomes.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "What is plasmolysis and in what type of cell does it occur?",
    keywords: ["plasmolysis", "plant cell", "shrink", "pull away", "cell wall", "hypertonic"],
    explanation: "Plasmolysis is the process in plant cells where the cytoplasm pulls away from the cell wall due to water loss when the cell is in a hypertonic solution. It occurs specifically in plant cells (or cells with cell walls like fungi, bacteria).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🌿", // Emoji for photosynthesis
    q: "Describe the primary function of chloroplasts.",
    keywords: ["chloroplasts", "function", "photosynthesis", "convert light energy", "sugars"],
    explanation: "Chloroplasts are organelles found in plant cells and other eukaryotic photosynthetic organisms. Their primary function is to conduct photosynthesis, converting light energy into chemical energy in the form of sugars.",
    course: "BI110",
    term: "T1"
  },

  // Macromolecules
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍚", // Emoji for carbs
    q: "Name the three classes of carbohydrates.",
    keywords: ["carbohydrates", "monosaccharides", "disaccharides", "polysaccharides"],
    explanation: "The three classes of carbohydrates are monosaccharides (simple sugars), disaccharides (two monosaccharides linked), and polysaccharides (many monosaccharides linked).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍬", // Emoji for sugar
    q: "Give an example of a monosaccharide and a disaccharide.",
    keywords: ["monosaccharide", "disaccharide", "glucose", "fructose", "galactose", "sucrose", "lactose", "maltose"],
    explanation: "Examples: Monosaccharides - Glucose, Fructose, Galactose. Disaccharides - Sucrose (glucose+fructose), Lactose (glucose+galactose), Maltose (glucose+glucose).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍞", // Emoji for starch
    q: "What is the primary function of starch in plants?",
    keywords: ["starch", "plants", "function", "energy storage"],
    explanation: "The primary function of starch in plants is long-term energy storage.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💪", // Emoji for protein
    q: "Name the monomers that make up proteins.",
    keywords: ["monomers", "proteins", "amino acids"],
    explanation: "Proteins are polymers made up of amino acid monomers linked by peptide bonds.",
    course: "BI110",
    term: "T1"
  },
  
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💧", // Emoji for water, for dehydration
    q: "What type of reaction links monomers together to form polymers?",
    keywords: ["reaction", "monomers", "polymers", "dehydration reaction", "condensation reaction"],
    explanation: "Monomers are linked together to form polymers by a dehydration reaction (or condensation reaction), where a water molecule is removed.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "✂️", // Emoji for cutting, for hydrolysis
    q: "What type of reaction breaks down polymers into monomers?",
    keywords: ["reaction", "polymers", "monomers", "hydrolysis reaction", "add water"],
    explanation: "Polymers are broken down into monomers by a hydrolysis reaction, where a water molecule is added, effectively breaking a bond.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍳", // Emoji for denature
    q: "What does it mean for a protein to be 'denatured', and what can cause it?",
    keywords: ["denatured", "protein", "loss of shape", "loss of function", "heat", "pH change", "chemicals"],
    explanation: "A denatured protein has lost its specific three-dimensional shape (conformation) due to disruptions of its weak chemical bonds and interactions, leading to a loss of its biological function. Causes include extreme heat, pH changes, and certain chemicals.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💧", // Emoji for hydrophobic
    q: "Why are lipids generally considered hydrophobic?",
    keywords: ["lipids", "hydrophobic", "nonpolar", "fats", "oils", "water"],
    explanation: "Lipids are largely composed of hydrocarbons, which form nonpolar covalent bonds. This makes them primarily nonpolar molecules, causing them to repel water (a polar molecule) and thus be hydrophobic.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬", // Emoji for DNA
    q: "Name the two types of nucleic acids.",
    keywords: ["nucleic acids", "dna", "rna"],
    explanation: "The two types of nucleic acids are Deoxyribonucleic Acid (DNA) and Ribonucleic Acid (RNA).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "⛓️", // Emoji for chain
    q: "What are the three components of a nucleotide?",
    keywords: ["nucleotide", "components", "phosphate group", "pentose sugar", "nitrogenous base"],
    explanation: "A nucleotide is composed of a phosphate group, a five-carbon sugar (pentose), and a nitrogenous base.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "📄", // Emoji for template
    q: "What is the primary function of DNA?",
    keywords: ["dna", "function", "genetic information", "heredity", "template"],
    explanation: "The primary function of DNA is to store and transmit genetic information, acting as the blueprint for all cellular activities and hereditary traits.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "⚙️", // Emoji for function
    q: "What is the primary function of RNA?",
    keywords: ["rna", "function", "protein synthesis", "gene expression"],
    explanation: "The primary function of RNA (various types like mRNA, tRNA, rRNA) is to play a crucial role in gene expression, primarily in the synthesis of proteins.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "↔️", // Emoji for double helix
    q: "Describe the basic structure of a DNA molecule.",
    keywords: ["dna structure", "double helix", "two strands", "sugar-phosphate backbone", "base pairs"],
    explanation: "A DNA molecule is typically a double helix, consisting of two polynucleotide strands coiled around a common axis. The backbone is formed by sugar and phosphate groups, with nitrogenous bases pairing in the interior.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🤝", // Emoji for pairing
    q: "How do the base pairing rules in DNA work?",
    keywords: ["dna", "base pairing rules", "adenine", "thymine", "guanine", "cytosine"],
    explanation: "In DNA, Adenine (A) always pairs with Thymine (T), and Guanine (G) always pairs with Cytosine (C).",
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
    keywords: ["branch of science", "description", "identification", "nomenclature", "classification", "organisms"],
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
    keywords: ["Kingdom", "Phylum", "Division", "Class", "Order", "Family", "Genus", "Species"],
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
    keywords: ["genus capitalized", "species lowercase", "italicized", "underlined"],
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
    keywords: ["no nucleus", "no membrane-bound organelles", "lack nucleus", "lack organelles"], // Broaden keywords for common answers
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
    keywords: ["asexual reproduction", "cell divides", "two identical daughter cells", "replicating genetic material"],
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
    keywords: ["nitrogen fixation", "converting atmospheric nitrogen", "usable forms"],
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
    keywords: ["Eukaryotic", "unicellular", "multicellular", "aquatic", "moist", "diverse nutrition"], // Accept any three
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
    keywords: ["pseudopodia", "false feet", "engulfs food", "phagocytosis"],
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
    keywords: ["Merozoite", "red blood cells", "malaria symptoms"],
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
    keywords: ["photosynthesis", "autotrophic", "absorb nutrients", "heterotrophically", "light", "absence of light"],
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
    keywords: ["Chlamydomonas", "Volvox", "Ulva"], // Any two
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
    keywords: ["Fruiting bodies", "spores"],
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
    keywords: ["Algin", "Agar", "Carragean", "Antiseptics"], // Any two
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
    keywords: ["photosynthesis", "aquatic food chains", "producing oxygen", "primary producers"],
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
    keywords: ["Spherical", "cocci", "Rod-shaped", "bacilli", "Spiral-shaped", "spirilla"],
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
    keywords: ["Taxonomic groups", "homologous features", "common ancestor"],
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
    keywords: ["Gametocytes", "Anopheles mosquito", "infected human"],
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
    keywords: ["medicines", "minerals", "biological research", "pathogens", "diseases"], // Any one or two
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
    keywords: ["1990", "250 years after Linnaeus"],
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
    keywords: ["cytoplasm", "nucleoid", "single circular chromosome"],
    explanation: "Unlike eukaryotes, prokaryotes do not compartmentalize their DNA within a membrane-bound nucleus.",
    course: "BI110",
    term: "T2"
  },
  
  
  
  
  
  
  
  
  
  
  //Bi110 t3
  
  //const shortData = [
  // --- BI110 Term 3 Data ---

  // MODULE 12: BRYOPHYTES
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌿", // Emoji for plants
    q: "How do bryophytes differ from algae in terms of habitat?",
    keywords: ["bryophytes", "algae", "habitat", "terrestrial"],
    explanation: "Unlike algae, bryophytes are terrestrial dwellers.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌎", // Emoji for global
    q: "What is the geographical distribution of bryophytes?",
    keywords: ["bryophytes", "distribution", "cosmopolitan", "temperate", "tropical", "arctic"],
    explanation: "Bryophytes are cosmopolitan, found in temperate, tropical, and arctic regions of the world.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌱", // Emoji for plant
    q: "Why are bryophytes considered transitional forms?",
    keywords: ["bryophytes", "transitional", "algae", "vascular plants"],
    explanation: "Bryophytes are considered transitional forms of plants, placed between algae and vascular plants (ferns & seed plants).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "💧", // Emoji for water
    q: "What is a key environmental dependency for bryophytes' survival and reproduction?",
    keywords: ["bryophytes", "water", "dependency", "survival", "reproduction"],
    explanation: "Bryophytes are extremely dependent on water for survival and reproduction.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌱",
    q: "What structures do bryophytes possess instead of roots, and what are their functions?",
    keywords: ["bryophytes", "roots", "rhizoids", "absorption", "anchoring"],
    explanation: "Bryophytes lack roots but possess rhizoids, important for absorption of water & salts and anchoring plants to the substratum.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🛡️", // Emoji for protection
    q: "What is the role of the cutin-coated epidermis in bryophytes?",
    keywords: ["epidermis", "cutin", "protection", "desiccation", "bryophytes"],
    explanation: "The epidermis, coated with cutin, provides protection against desiccation.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌬️", // Emoji for gas
    q: "How do bryophytes facilitate gaseous exchange?",
    keywords: ["gaseous exchange", "air pores", "bryophytes"],
    explanation: "Numerous air pores facilitate gaseous exchange.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌱",
    q: "Which stage is most dominant in the life cycle of bryophytes?",
    keywords: ["life cycle", "dominant", "gametophyte", "bryophytes"],
    explanation: "In their life cycle, the gametophyte (gamete-bearing structure) is the most dominant.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "孢", // Emoji for spore
    q: "How do bryophytes reproduce, and what are they known as due to this method?",
    keywords: ["reproduce", "spores", "cryptogams", "bryophytes"],
    explanation: "Bryophytes reproduce by means of spores, hence they are known as cryptogams.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "♂️", // Male sign
    q: "Describe the antheridium in bryophytes.",
    keywords: ["antheridium", "male sexual organ", "sperm cells", "bryophytes"],
    explanation: "The antheridium is the male sexual organ, either ellipsoidal or spherical. It contains numerous sperm cells with a single layer of sterile cells.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "♀️", // Female sign
    q: "Describe the archegonium in bryophytes.",
    keywords: ["archegonium", "female sexual organ", "egg cell", "bryophytes"],
    explanation: "The archegonium is a flask-shaped female sexual organ which consists of a neck & the venter. The venter encloses the egg cell.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "🥚", // Emoji for egg
    q: "Why are bryophytes considered oogamous?",
    keywords: ["oogamous", "egg", "sperm", "gametes", "bryophytes"],
    explanation: "Bryophytes are oogamous because they bear two types of gametes: the egg (large and non-motile) and sperm (small and motile).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Bryophyte Sporophytes",
    year: "Notes",
    tag: "🌱",
    q: "What are the components of a bryophyte sporophyte?",
    keywords: ["sporophyte", "foot", "seta", "sporangium", "capsule", "bryophytes"],
    explanation: "A bryophyte sporophyte consists of a foot, a seta, and a sporangium (capsule).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Bryophyte Sporophytes",
    year: "Notes",
    tag: "🌬️",
    q: "Which bryophyte sporophytes have stomata?",
    keywords: ["stomata", "hornwort", "moss", "sporophytes", "bryophytes"],
    explanation: "Hornwort and moss sporophytes have stomata.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Classification - Bryophytes",
    year: "Notes",
    tag: "分類", // Emoji for classification
    q: "Name the three phyla of bryophytes and their common names.",
    keywords: ["phyla", "bryophytes", "Hepatophyta", "Liverworts", "Anthocerophyta", "Hornworts", "Bryophyta", "Mosses"],
    explanation: "The three phyla of bryophytes are Phylum Hepatophyta (Liverworts), Phylum Anthocerophyta (Hornworts), and Phylum Bryophyta (Mosses).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "🌱",
    q: "What is the characteristic plant body of liverworts?",
    keywords: ["liverworts", "plant body", "thalloid", "thallus", "differentiated"],
    explanation: "These plants are characterized by a thalloid plant body, meaning it is not differentiated into roots, stems, and leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "🇿🇲", // Emoji for Zambia
    q: "What is the most common liverwort in Zambia?",
    keywords: ["liverwort", "Zambia", "Marchantia polymorpha"],
    explanation: "The most common liverwort in Zambia is Marchantia polymorpha.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "⚤", // Emoji for dioecious
    q: "What does it mean for Marchantia polymorpha to be 'dioecious'?",
    keywords: ["Marchantia polymorpha", "dioecious", "male", "female", "gametes", "separate plants"],
    explanation: "Marchantia polymorpha is dioecious, meaning male & female gametes occur on separate male and female plants.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Hornworts",
    year: "Notes",
    tag: "🌿",
    q: "What distinguishes hornworts morphologically from liverworts?",
    keywords: ["hornworts", "liverworts", "morphological", "thallus", "horn-like structure"],
    explanation: "Hornworts are morphologically different from liverworts; their plants have a thallus bearing a horn-like structure.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Hornworts",
    year: "Notes",
    tag: "💙💚", // Emoji for blue-green algae
    q: "What blue-green algae inhabits the internal cavities of Anthoceros thallus?",
    keywords: ["Anthoceros", "thallus", "internal cavities", "blue-green algae", "Nostoc"],
    explanation: "The thallus of Anthoceros has extensive internal cavities inhabited by the blue-green algae Nostoc.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Division Bryophyta (Mosses)",
    year: "Notes",
    tag: "🌲", // Emoji for tree-like
    q: "Which group is considered the most advanced among bryophytes?",
    keywords: ["advanced group", "bryophytes", "Division Bryophyta", "Mosses"],
    explanation: "The most advanced group of bryophytes is the Division Bryophyta (Mosses).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Division Bryophyta (Mosses)",
    year: "Notes",
    tag: "📏", // Emoji for measure
    q: "What is the taxonomic significance of the number of teeth in mosses?",
    keywords: ["taxonomic significance", "teeth", "mosses", "identification"],
    explanation: "The number of teeth is a taxonomic character for the identification of moss species.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Life Cycle of Mosses",
    year: "Notes",
    tag: "🌱",
    q: "What do moss spores germinate into when released from the capsule?",
    keywords: ["spores", "germinate", "capsule", "protonemata", "protonema", "mosses"],
    explanation: "When spores are released from the capsule, they germinate into protonemata (protonema).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Life Cycle of Mosses",
    year: "Notes",
    tag: "💧",
    q: "What facilitates fertilization in mosses?",
    keywords: ["fertilization", "water", "sperm cells", "archegonia", "mosses"],
    explanation: "Water facilitates the movement of sperm cells towards the archegonia to effect fertilization.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Importance and Ecology of Bryophytes",
    year: "Notes",
    tag: "🌍", // Emoji for ecology
    q: "How do bryophytes serve as bioindicators of pollution?",
    keywords: ["bioindicators", "pollution", "sensitive", "bryophytes"],
    explanation: "Some bryophyte species are very sensitive to pollution and are absent from highly polluted areas, making them bioindicators.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Importance and Ecology of Bryophytes",
    year: "Notes",
    tag: "🔥", // Emoji for fire
    q: "Where does Funaria typically grow well?",
    keywords: ["Funaria", "grow", "burnt areas", "charcoal"],
    explanation: "Funaria grows well on burnt areas, especially where charcoal has been harvested.",
    course: "BI110",
    term: "T3"
  },

  // MODULE 15: ANGIOSPERMS
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌸", // Emoji for flower
    q: "What is the common name for Angiosperms?",
    keywords: ["Angiosperms", "common name", "flowering plants"],
    explanation: "Angiosperms are commonly called flowering plants.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What is a cotyledon?",
    keywords: ["cotyledon", "embryo", "seed", "first leaf"],
    explanation: "A cotyledon is a part of the embryo found within a seed, from which the first leaf emerges.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What characterizes dicot plants?",
    keywords: ["dicot", "dicotyledoneae", "two cotyledons"],
    explanation: "Dicot plants are characterized by their seedlings bearing two cotyledons.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What characterizes monocot plants?",
    keywords: ["monocot", "monocotyledoneae", "single cotyledon"],
    explanation: "Monocot plants are characterized by a seedling with a single cotyledon.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Plant Body",
    year: "Notes",
    tag: "🌿",
    q: "What are the principal vegetative organs of an angiosperm plant?",
    keywords: ["vegetative organs", "angiosperm", "roots", "stems", "leaves"],
    explanation: "The principal vegetative organs of the angiosperm plant are roots, stems, and leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Habits",
    year: "Notes",
    tag: "🌳", // Emoji for tree
    q: "Who classified plants into growth habits like herbs, shrubs, and trees?",
    keywords: ["Theophrastos", "plant habits", "herbs", "shrubs", "trees", "classification"],
    explanation: "Theophrastos is known to have divided plants into growth habits commonly referred to as herbs, shrubs, and trees.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Life Forms",
    year: "Notes",
    tag: "⏳", // Emoji for time
    q: "Define annual plants and give an example.",
    keywords: ["annuals", "life cycle", "single growing season", "maize"],
    explanation: "Annuals are plants which complete their life cycle from germination to the seed within a single growing season. Example: maize.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Life Forms",
    year: "Notes",
    tag: "⏳",
    q: "Define perennial plants and give an example.",
    keywords: ["perennials", "life span", "more than two years", "mango"],
    explanation: "Perennials are plants whose life span extends for more than two years. Example: Mango.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Roots",
    year: "Notes",
    tag: "⬇️", // Emoji for down
    q: "What is the typical growth direction of roots called?",
    keywords: ["roots", "growth direction", "gravity", "geotropic", "positively geotropic"],
    explanation: "Typically, roots grow in the direction of gravity, hence such organs are said to be positively geotropic.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Roots",
    year: "Notes",
    tag: "💧",
    q: "What are root hairs and their role?",
    keywords: ["root hairs", "epidermal cells", "absorption", "water", "mineral elements"],
    explanation: "Root hairs are modified epidermal cells that usually lack a cuticle and are involved in the absorption of water and mineral elements.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Function of Roots",
    year: "Notes",
    tag: "🍠", // Emoji for sweet potato
    q: "Name two functions of roots besides anchorage and absorption.",
    keywords: ["roots", "functions", "storage", "hormone synthesis", "starch", "alkaloids", "cytokinins", "gibberellins"],
    explanation: "Roots are involved in the storage of synthesized compounds (e.g., starch, alkaloids) and the synthesis of hormones (e.g., cytokinins, gibberellins).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "🌱",
    q: "What does the root cap secrete, and what is its role in root growth?",
    keywords: ["root cap", "secrete", "mucigel", "lubricant", "gravity perception", "geotropic growth"],
    explanation: "The root cap secretes mucigel, a slimy polysaccharide lubricant. It is also the site of perception of gravity, controlling geotropic growth.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "💤", // Emoji for sleep
    q: "Describe the quiescent center in roots.",
    keywords: ["quiescent center", "roots", "low mitosis", "no mitotic division"],
    explanation: "The quiescent center (zone) is a hemispherical shaped tissue where cells exhibit low mitosis and even a complete lack of mitotic cell division.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "🌱",
    q: "What does procambium develop into?",
    keywords: ["procambium", "develop", "vascular cambium", "juvenile tissue"],
    explanation: "Procambium is a juvenile tissue that gives rise to the development of the vascular cambium.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Morphology of Roots",
    year: "Notes",
    tag: "🌱",
    q: "Differentiate between tap root system and fibrous root system.",
    keywords: ["tap root system", "fibrous root system", "dicot", "monocot", "initial root", "persistent", "degenerate", "numerous roots"],
    explanation: "Tap root system (dicots): initial root is persistent and becomes the main root. Fibrous root system (monocots): initial root degenerates, replaced by numerous roots of same diameter.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Anatomy of Roots",
    year: "Notes",
    tag: "✖️", // Emoji for X-shape
    q: "Describe xylem arrangement in dicot roots (e.g., Ranunculus).",
    keywords: ["xylem", "dicot roots", "Ranunculus", "tetrach", "four arms"],
    explanation: "In roots of Ranunculus (a dicot), the xylem tissue exhibits four arms radiating from the center, a condition said to be tetrach.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Anatomy of Roots",
    year: "Notes",
    tag: "🚫", // Emoji for no
    q: "Why is secondary growth typically absent in monocot roots?",
    keywords: ["secondary growth", "monocot roots", "cambium", "absent"],
    explanation: "In monocot roots, the cambium is absent, and hence there is no secondary growth in such roots.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Stems",
    year: "Notes",
    tag: "⬆️", // Emoji for up
    q: "What is the main physical role of the stem?",
    keywords: ["stem", "physical role", "bear leaves", "elevated", "ground"],
    explanation: "The main role of the stem is to bear the leaves and ensures that the leaves are elevated above the ground.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Stems",
    year: "Notes",
    tag: "💧",
    q: "What physiological processes are stems involved in?",
    keywords: ["stems", "physiological", "transport", "water", "mineral salts", "conduction", "organic compounds", "phloem"],
    explanation: "In physiological terms, the stems are involved in the transport of water & mineral salts and the conduction of organic compounds through the phloem tissue.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Parts of the Stem",
    year: "Notes",
    tag: "🌱",
    q: "What hormone does the stem apex produce, and what is its effect on lateral buds?",
    keywords: ["stem apex", "hormone", "auxin", "IAA", "indole acetic acid", "apical dominance", "lateral buds", "inhibiting"],
    explanation: "The stem apex produces the auxin called indole acetic acid (IAA), which promotes apical dominance by inhibiting the development of lateral buds.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Tunica-Corpus Theory",
    year: "Notes",
    tag: "🌱",
    q: "Who developed the Tunica-Corpus theory and what does it explain?",
    keywords: ["Tunica-Corpus theory", "Schmidt", "1924", "stem apex", "distinct zones", "tunica", "corpus"],
    explanation: "The tunica-corpus theory was developed by Schmidt in 1924, explaining that the stem apex exhibits two distinct zones called the tunica and the corpus.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Tunica-Corpus Theory",
    year: "Notes",
    tag: "🔬",
    q: "Differentiate between anticlinal and periclinal cell division.",
    keywords: ["anticlinal division", "periclinal division", "cell division", "perpendicular", "parallel"],
    explanation: "Anticlinal division: dividing line perpendicular to the surface. Periclinal division: line of division parallel to the surface.",
    course: "BI110",
    term: "T3"
  },
  
  
  //const shortData = [
  {
    topic: "ANGIOSPERMS - Introduction",
    year: "Notes",
    tag: "📘",
    q: "What are angiosperms commonly called, and what is their dominant characteristic on Earth?",
    keywords: ["Angiosperms", "flowering plants", "green vegetable matter"],
    explanation: "Angiosperms are commonly called flowering plants, and they dominate the green vegetable matter found on planet Earth.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "ANGIOSPERM CLASSIFICATION",
    year: "Notes",
    tag: "📘",
    q: "How are angiosperms classified based on their embryonic leaves, and what are these embryonic leaves called?",
    keywords: ["Angiosperms", "cotyledons", "Dicotyledoneae", "Monocotyledoneae", "dicots", "monocots"],
    explanation: "Since the first embryonic leaves contained in the seedlings are called cotyledons, angiosperms are conveniently classified into two main classes: Dicotyledoneae (dicots) and Monocotyledoneae (monocots).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "DICOT PLANTS",
    year: "Notes",
    tag: "📘",
    q: "What is the defining characteristic of dicot seedlings, and provide four examples of dicot plants.",
    keywords: ["dicots", "two cotyledons", "groundnuts", "tomato plants", "beans", "blackjack"],
    explanation: "Dicot seedlings are characterized by bearing two cotyledons. Examples of dicot plants include groundnuts (Arachis hypogea), Tomato plants (Lycopersicon esculentum), beans (Phaseolus vulgaris), and Blackjack, Kanunka or Kasokopyo (Bidens pilosa).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "MONOCOT PLANTS",
    year: "Notes",
    tag: "📘",
    q: "What defines monocot plants, and give three examples.",
    keywords: ["monocot", "single cotyledon", "maize", "sorghum", "finger millet"],
    explanation: "Monocot plants are characterised by a seedling with a single cotyledon. Examples of monocot plants are Maize (Zea mays), Sorghum (Sorghum bicolor), and Finger millet (Eleusine caracana).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE PLANT BODY",
    year: "Notes",
    tag: "📘",
    q: "Identify the principal vegetative organs of an angiosperm plant and state when flower development typically occurs.",
    keywords: ["vegetative organs", "roots", "stems", "leaves", "flowers", "life cycle", "annual plants"],
    explanation: "The principal vegetative organs of the angiosperm plant are Roots, Stems, and Leaves. The development of flowers occurs near the end of the plant's life cycle, particularly in annual plants.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT HABITS",
    year: "Notes",
    tag: "📘",
    q: "Who is credited with dividing plants into growth habits, and what are these three habits? Describe 'herbs' and provide examples.",
    keywords: ["Theophrastos", "growth habits", "herbs", "shrubs", "trees", "parenchyma tissue", "xylem tissue", "green", "tender stems"],
    explanation: "Theophrastos is known to have divided plants into growth habits commonly referred to as the herbs, shrubs, and trees. Herbs are plants with green and tender stems which contain a much higher proportion of parenchyma tissue compared to xylem tissue. Examples of herbaceous plants are sunflower (Helianthus annus), maize, and the majority of grasses.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT HABITS - Shrubs",
    year: "Notes",
    tag: "📘",
    q: "Define 'shrubs' and give three examples.",
    keywords: ["shrubs", "woody plants", "several stems", "ground level", "single rootstock", "Lantara camara", "Hibiscus spp", "Cassava plant"],
    explanation: "Shrubs are woody plants that develop several stems arising from the ground level and sharing a single rootstock. Examples of shrubs are Lantara camara, Hibiscus spp, and Cassava plant (Manihot esculenta).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT HABITS - Trees",
    year: "Notes",
    tag: "📘",
    q: "Describe 'trees' and list three examples.",
    keywords: ["trees", "woody plants", "single main trunk", "soil level", "single rootstock", "Mango", "Avocado", "Pawpaw"],
    explanation: "Trees are a form of woody plants which develop a single main trunk arising from the soil level and a single rootstock. Examples of plants known to be trees are Mango (Mangifera indica), Avocado (Persea americana), and Pawpaw (Carica papaya).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT LIFE FORMS",
    year: "Notes",
    tag: "📘",
    q: "Who classified plants by their life spans, and what are the three categories?",
    keywords: ["Theophrastos", "life spans", "life forms", "annuals", "biennials", "perennials"],
    explanation: "Theophrastos is credited for having classified plants according to their life spans or life forms known as annuals, biennials, and perennials.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT LIFE FORMS - Annuals",
    year: "Notes",
    tag: "📘",
    q: "Define annual plants and provide three examples.",
    keywords: ["annuals", "life cycle", "germination", "seed", "single growing season", "maize", "groundnuts", "sunflower"],
    explanation: "Annuals are plants which complete their life cycle from germination to the seed within a single growing season. Examples of annual plants are maize, groundnuts, and sunflower.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT LIFE FORMS - Biennials",
    year: "Notes",
    tag: "📘",
    q: "Explain what biennial plants are and give an example of their life cycle.",
    keywords: ["biennials", "life span", "two years", "Spinach plants", "vegetative", "flowers", "seeds"],
    explanation: "Biennials are plants which complete their life span in two years. Biennials such as Spinach plants remain vegetative for two years and only die after producing flowers and seeds at the end of the second year.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PLANT LIFE FORMS - Perennials",
    year: "Notes",
    tag: "📘",
    q: "What defines perennial plants, and name three examples.",
    keywords: ["perennials", "life span", "more than two years", "Cassava", "Mango", "Guava"],
    explanation: "Perennials are plants whose life span extends for more than two years. Examples of perennials are Cassava, Mango, and Guava (Psidium guajava).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE ROOTS - Introduction",
    year: "Notes",
    tag: "📘",
    q: "What are the most important vegetative organs of flowering plants, and how is the main plant axis differentiated?",
    keywords: ["flowering plants", "vegetative organs", "roots", "stems", "leaves", "main plant axis", "root system", "shoot system"],
    explanation: "The most important features of flowering plants is their possession of vegetative organs called roots, the stems and the leaves. The main plant axis is differentiated into root system and a shoot system.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE ROOTS - Characteristics",
    year: "Notes",
    tag: "📘",
    q: "Describe the typical location and growth direction of roots, and explain why they are rarely straight.",
    keywords: ["roots", "underground organs", "soil surface", "positively geotropic", "gravity", "obstacles", "moisture", "well-drained moist soils", "branching"],
    explanation: "The root is the lowermost underground portion of the plant axis which is usually located below the soil surface. Typically, roots grow in the direction of gravity, hence such organs are said to be positively geotropic. Roots are rarely as straight as the stems because they meet obstacles as they penetrate the soil in search of moisture. The best development of roots and giving rise to the most extensive branching of these organs, is found in well-drained moist soils.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE ROOTS - Cellular Features",
    year: "Notes",
    tag: "📘",
    q: "Do roots possess chloroplasts, and what is the role of root hairs in the epidermis?",
    keywords: ["roots", "chloroplasts", "sunlight", "epidermis", "cuticle", "root hairs", "absorption", "water", "mineral elements"],
    explanation: "The roots do not possess chloroplasts, and sunlight has no effect on development of the roots. In roots, the epidermis, which usually lacks the cuticle, contains root hairs as the modified epidermal cells involved in the absorption of water and mineral elements.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "FUNCTION OF ROOTS - Primary",
    year: "Notes",
    tag: "📘",
    q: "List the primary functions of roots.",
    keywords: ["roots", "anchorage", "absorption", "water", "mineral solutes"],
    explanation: "The roots provide the anchorage of plants to their growth medium. Roots are involved in the absorption of water and mineral solutes.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "FUNCTION OF ROOTS - Secondary",
    year: "Notes",
    tag: "📘",
    q: "Beyond primary functions, what other roles do roots play, and provide specific examples for storage and synthesis.",
    keywords: ["roots", "storage", "synthesized compounds", "starch", "root tubers", "sweet potatoes", "cassava", "alkaloids", "medicines", "synthesis", "cytokinins", "gibberellins", "nicotine", "tobacco plants"],
    explanation: "Other roles of the roots embrace the storage of synthesized compounds such as the starch in root tubers of sweet potatoes and cassava, as well as in the storage of the alkaloids which are sources of medicines. Roots are also involved in the synthesis of other compounds such as the cytokinins (promote cell division and expansion), hormones gibberellins (elongation of stem), and nicotine (in tobacco plants).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PRIMARY TISSUES IN ROOTS",
    year: "Notes",
    tag: "📘",
    q: "What governs growth in roots, and name the prominent tissues found in the meristem region.",
    keywords: ["growth", "apical meristem", "prominent tissues", "root cap", "quiescent centre", "procambium", "protoderm", "ground meristem", "lateral meristem"],
    explanation: "Growth in roots is governed by the apical meristem. Prominent tissues found in the region of the meristem are the root cap, the quiescent centre, the procambium, the protoderm, the ground meristem, and lateral meristem.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PRIMARY TISSUES IN ROOTS - Root Cap",
    year: "Notes",
    tag: "📘",
    q: "Describe the composition and functions of the root cap.",
    keywords: ["root cap", "parenchyma cells", "mucigel", "slimy polysaccharide", "lubricant", "carbohydrates", "amino acids", "perception of gravity", "geotropic growth"],
    explanation: "The root cap consists of parenchyma cells that are specialized in the secretion of a slimy polysaccharide called mucigel. The mucigel is a form of lubricant rich in carbohydrates and amino acids. The root cap is also the site of perception of gravity and thus involved in the control of geotropic growth of the roots.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PRIMARY TISSUES IN ROOTS - Quiescent Center",
    year: "Notes",
    tag: "📘",
    q: "What is the quiescent center, and what characteristic do its cells exhibit?",
    keywords: ["quiescent center", "hemispherical shaped tissue", "low mitosis", "lack of mitotic cell division"],
    explanation: "Quiescent center (zone) is a hemispherical shaped tissue where cells exhibit low mitosis and even a complete lack of mitotic cell division.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PRIMARY TISSUES IN ROOTS - Development",
    year: "Notes",
    tag: "📘",
    q: "From which juvenile tissues do the vascular cambium, epidermis, and cortex/pith develop in roots?",
    keywords: ["procambium", "vascular cambium", "protoderm", "epidermis", "ground meristem", "cortex", "pith"],
    explanation: "Procambium is a juvenile tissue that gives rise to the development of the vascular cambium. The protoderm is the juvenile tissue that develops to give rise to the outermost protective tissue called epidermis. Ground meristem is the portion of apical juvenile tissue that develops into the cortex or pith.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "MORPHOLOGY OF ROOTS - Dicots",
    year: "Notes",
    tag: "📘",
    q: "Describe the initial root development in dicot plants and the resulting root system.",
    keywords: ["dicot plants", "initial root", "germination", "persistent", "tap root", "tap root system"],
    explanation: "In dicot plants, the initial root which develops at the onset of germination is usually persistent. This initial root becomes the tap root and this kind of root development in dicot plants is known as the tap root system.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "MORPHOLOGY OF ROOTS - Monocots",
    year: "Notes",
    tag: "📘",
    q: "Explain the initial root development in monocot plants and the resulting root system.",
    keywords: ["monocot plants", "initial root", "germination", "degenerate", "numerous roots", "same diameter", "embryonic root", "proliferation", "fibrous root system"],
    explanation: "In monocot plants, the initial root formed at the onset of germination tends to degenerate, and this condition later gives rise to numerous roots of the same diameter to replace the embryonic root. The embryonic root degenerates at an early stage and is consequently replaced by the proliferation of numerous roots of the same diameter. Development of numerous roots in monocots constitutes the fibrous root system.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "ANATOMY OF ROOTS - Dicots (Ranunculus)",
    year: "Notes",
    tag: "📘",
    q: "Describe the arrangement of vascular tissues in the roots of a dicot like Ranunculus, including the origin of lateral roots.",
    keywords: ["Ranunculus", "dicot root", "xylem tissue", "tetrach", "cambium", "phloem", "pericycle", "meristematic tissue", "lateral roots"],
    explanation: "In roots of Ranunculus, which is a dicot, the xylem tissue exhibits four arms radiating from the centre, a condition said to be tetrach. The xylem tissue is surrounded by the cambium which is externally bounded by the phloem. The phloem tissue is externally surrounded by a meristematic tissue called pericycle which is the origin of lateral roots.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "ANATOMY OF ROOTS - General",
    year: "Notes",
    tag: "📘",
    q: "Identify the uniseriate tissue external to the pericycle and the tissue between the endodermis and epidermis. What modification occurs in some epidermal cells?",
    keywords: ["pericycle", "uniseriate tissue", "endodermis", "Casparian strip", "suberin", "cortex", "epidermis", "root hairs"],
    explanation: "External to the pericycle lies the uniseriate tissue called the endodermis which is strapped by a band of suberin called the Casparian strip. The tissue located between the endodermis and the epidermis is called the cortex. Some cells of the epidermis are modified into root hairs.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "ANATOMY OF ROOTS - Monocots",
    year: "Notes",
    tag: "📘",
    q: "How does the xylem tissue differ in monocot roots compared to dicot roots, and what is the implication of the cambium's absence?",
    keywords: ["monocot roots", "xylem tissues", "numerous arms", "bundles", "polyarch condition", "cambium", "secondary growth"],
    explanation: "In monocot roots, the xylem tissues exhibit numerous arms (bundles) giving rise to a polyarch condition. In monocot roots, the cambium is absent, and hence there is no secondary growth in such roots.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "MODIFIED ROOTS",
    year: "Notes",
    tag: "📘",
    q: "How do roots become modified for food storage, and provide three examples of plants with such modifications.",
    keywords: ["modified roots", "tubers", "storage of food reserves", "cassava", "sweet potato", "Ipomoea batatas", "ground orchids", "Chikanda", "carrot", "Daucus carota", "fleshy structure", "storage parenchyma"],
    explanation: "Roots of many plants become modified into tubers to serve for the storage of food reserves. Plants whose roots swell up to form tubers include cassava, sweet potato (Ipomoea batatas), and ground orchids (Chikanda). The tap root of carrots (Daucus carota) is modified into a fleshy structure consisting of storage parenchyma.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE STEMS - Introduction",
    year: "Notes",
    tag: "📘",
    q: "What is the primary role of the stem, and how can it be classified based on its location?",
    keywords: ["stem", "shoot", "leaves", "aerial", "underground organ", "rhizome", "elevated"],
    explanation: "The shoot is comprised of the stem which ultimately bears the leaves. However, the stem is either an aerial or underground organ which is termed the rhizome. The main role of the stem is to bear the leaves and ensures that the leaves are elevated above the ground.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PHYSIOLOGICAL FUNCTIONS OF STEMS",
    year: "Notes",
    tag: "📘",
    q: "List the physiological functions of stems, including their role in transport, storage, and plant dispersal.",
    keywords: ["stems", "physiological functions", "transport", "water", "mineral salts", "conduction", "organic compounds", "phloem tissue", "storage", "food reserves", "secondary compounds", "alkaloids", "plant dispersal", "cassava", "sweet potatoes"],
    explanation: "In physiological terms, the stems are involved in the transport of water & mineral salts and the conduction of organic compounds through the phloem tissue. They are also involved in the storage of water, food reserves, and secondary compounds such as the alkaloids. In some plants such as cassava and sweet potatoes, stems serve as a means of plant dispersal.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "PARTS OF THE STEM AND AUXIN",
    year: "Notes",
    tag: "📘",
    q: "What are the structural components of a stem in vascular plants, and what important hormone is produced by the stem apex?",
    keywords: ["vascular plants", "stem", "nodes", "internodes", "stem apex", "terminal bud", "auxin", "indole acetic acid", "IAA", "tryptophan"],
    explanation: "In vascular plants, the stem is comprised of the nodes and internodes. The stem apex has a terminal bud which produces the auxin called indole acetic acid (IAA), which is a derivative of the amino acid tryptophan.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "APICAL DOMINANCE",
    year: "Notes",
    tag: "📘",
    q: "Explain the function of IAA concerning lateral buds and how pruning affects plant branching.",
    keywords: ["IAA", "apical dominance", "inhibiting", "lateral buds", "pruning", "shoot tips", "lateral branches"],
    explanation: "The IAA promotes apical dominance by inhibiting the development of lateral buds. This explains why the action of pruning shoot tips promotes the development of lateral branches.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "MERISTEMATIC TISSUES",
    year: "Notes",
    tag: "📘",
    q: "What are bud and leaf primordia, and what is their role?",
    keywords: ["bud primordia", "leaf primordia", "precursor tissues", "meristematic tissues", "formation", "bud", "leaves"],
    explanation: "Both the bud and leaf primordia are the precursor (meristematic) tissues which give rise to the formation of the bud and leaves respectively.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "TUNICA-CORPUS THEORY",
    year: "Notes",
    tag: "📘",
    q: "Who developed the Tunica-Corpus theory, and what does it explain about the stem apex?",
    keywords: ["Tunica-Corpus theory", "Schmidt", "1924", "stem apex", "two distinct zones", 
]
},
//const shortData = [
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
    tag: "💡", // Emoji for light
    q: "Why is it important to adjust the diaphragm/iris aperture in a light microscope?",
    keywords: ["diaphragm", "iris aperture", "adjust", "light", "contrast", "resolution"],
    explanation: "Adjusting the diaphragm/iris aperture controls the amount of light reaching the specimen, which is crucial for optimizing contrast and resolution.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧹", // Emoji for cleaning
    q: "Why should you only use lens paper to clean microscope lenses?",
    keywords: ["lens paper", "clean", "microscope lenses", "scratch", "damage"],
    explanation: "Lens paper is specifically designed not to scratch or damage the delicate surfaces of optical lenses, unlike other tissues or cloths.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🧪", // Emoji for stain
    q: "What is the primary purpose of staining in microscopy?",
    keywords: ["staining", "purpose", "microscopy", "visibility", "contrast", "differentiate"],
    explanation: "Staining enhances the visibility of cells or cellular components, increases contrast, and can help differentiate between various structures or organisms.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "💜", // Emoji for Gram stain
    q: "Differentiate between Gram-positive and Gram-negative bacteria in terms of cell wall structure and Gram stain reaction.",
    keywords: ["gram-positive", "gram-negative", "cell wall", "peptidoglycan", "outer membrane", "crystal violet"],
    explanation: "Gram-positive bacteria have a thick peptidoglycan layer and retain crystal violet stain, appearing purple. Gram-negative bacteria have a thin peptidoglycan layer and an outer membrane; they lose crystal violet but counterstain pink/red with safranin.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "💧", // Emoji for immersion oil
    q: "When and why is immersion oil used in microscopy?",
    keywords: ["immersion oil", "when", "why", "100x", "refractive index", "light scattering", "resolution"],
    explanation: "Immersion oil is used with the 100x objective lens to reduce light scattering and increase the numerical aperture, thereby improving the resolution of the image.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🚫", // Emoji for caution
    q: "Why should you never use the coarse adjustment knob with the high power objective lens (40x or 100x)?",
    keywords: ["coarse adjustment knob", "high power", "crack slide", "damage lens"],
    explanation: "Using the coarse adjustment knob with high power objectives can cause the lens to crash into the slide, potentially cracking the slide and damaging the lens.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MICROSCOPY & STAINING",
    year: "Notes",
    tag: "🔄", // Emoji for focus
    q: "What does it mean for a microscope to be 'parfocal'?",
    keywords: ["parfocal", "microscope", "focus", "change objective"],
    explanation: "A parfocal microscope means that once an object is in focus at one magnification, it remains approximately in focus when the magnification is changed to another objective lens.",
    course: "BI110",
    term: "T1"
  },

  // Cells
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🔬",
    q: "Name three structures found in plant cells but not in animal cells.",
    keywords: ["plant cell", "animal cell", "cell wall", "chloroplasts", "large central vacuole"],
    explanation: "Plant cells have a rigid cell wall, chloroplasts for photosynthesis, and a large central vacuole for storage and turgor pressure, which are absent in animal cells.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🏭", // Emoji for factory
    q: "Describe the primary function of the mitochondria.",
    keywords: ["mitochondria", "function", "powerhouse", "ATP", "cellular respiration"],
    explanation: "Mitochondria are often called the 'powerhouse' of the cell because their primary function is to generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy, through cellular respiration.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "📦", // Emoji for packaging
    q: "What is the function of the Golgi apparatus?",
    keywords: ["golgi apparatus", "function", "modify", "pack", "proteins", "lipids"],
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids into vesicles for secretion or delivery to other organelles.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🚧", // Emoji for boundary
    q: "Explain the fluid mosaic model of the cell membrane.",
    keywords: ["fluid mosaic model", "cell membrane", "phospholipid bilayer", "proteins", "fluid", "mosaic"],
    explanation: "The fluid mosaic model describes the cell membrane as a phospholipid bilayer with embedded and peripheral proteins, all able to move laterally (fluidity), forming a 'mosaic' pattern.",
    course: "BI110",
    term: "T1"
  },
  
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧", // Emoji for water
    q: "Differentiate between osmosis and diffusion.",
    keywords: ["osmosis", "diffusion", "difference", "water", "solute", "selectively permeable membrane"],
    explanation: "Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration. Osmosis is a specific type of diffusion that involves the net movement of water across a selectively permeable membrane from an area of higher water concentration to an area of lower water concentration.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🚪", // Emoji for channel
    q: "What is the role of active transport in cell biology?",
    keywords: ["active transport", "role", "energy", "ATP", "against concentration gradient", "low to high"],
    explanation: "Active transport is the movement of molecules across a cell membrane against their concentration gradient (from low to high concentration), requiring energy, typically in the form of ATP.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🗑️", // Emoji for waste
    q: "What is the primary function of lysosomes?",
    keywords: ["lysosomes", "function", "digest", "waste", "organelles", "enzymes"],
    explanation: "Lysosomes are membrane-bound organelles containing digestive enzymes that break down waste materials, cellular debris, and foreign invaders.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🌱", // Emoji for plant
    q: "How does the cell wall contribute to the support of a plant cell?",
    keywords: ["cell wall", "plant cell", "support", "rigid", "turgor pressure", "prevent lysis"],
    explanation: "The rigid cell wall provides structural support to the plant cell, maintains its shape, and prevents excessive water uptake (lysis) by maintaining turgor pressure against the cell membrane.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "Describe what happens to an animal cell when placed in a hypotonic solution.",
    keywords: ["animal cell", "hypotonic solution", "swell", "lyse", "burst", "water influx"],
    explanation: "When an animal cell is placed in a hypotonic solution, water will move by osmosis from the solution into the cell, causing the cell to swell and potentially lyse (burst) due to the lack of a cell wall.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "Describe what happens to a plant cell when placed in an isotonic solution.",
    keywords: ["plant cell", "isotonic solution", "flaccid", "no net movement", "limp"],
    explanation: "When a plant cell is placed in an isotonic solution, there is no net movement of water. The cell becomes flaccid (limp) as the cell membrane is not pressed against the cell wall, but the cell does not lyse.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🦠", // Emoji for bacteria
    q: "Name the two main types of prokaryotes.",
    keywords: ["prokaryotes", "bacteria", "archaea"],
    explanation: "The two main types of prokaryotes are Bacteria and Archaea, which form two of the three domains of life.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🧬", // Emoji for DNA
    q: "Where is the genetic material located in a eukaryotic cell?",
    keywords: ["eukaryotic cell", "genetic material", "dna", "nucleus"],
    explanation: "In eukaryotic cells, the genetic material (DNA) is primarily located within the membrane-bound nucleus.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🔗", // Emoji for connection
    q: "What is the function of the rough endoplasmic reticulum (RER)?",
    keywords: ["rough endoplasmic reticulum", "rer", "function", "protein synthesis", "ribosomes", "membrane proteins"],
    explanation: "The RER is involved in the synthesis, folding, modification, and transport of proteins that are destined for secretion, insertion into membranes, or delivery to other organelles; its surface is studded with ribosomes.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "💧",
    q: "What is plasmolysis and in what type of cell does it occur?",
    keywords: ["plasmolysis", "plant cell", "shrink", "pull away", "cell wall", "hypertonic"],
    explanation: "Plasmolysis is the process in plant cells where the cytoplasm pulls away from the cell wall due to water loss when the cell is in a hypertonic solution. It occurs specifically in plant cells (or cells with cell walls like fungi, bacteria).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "CELLS",
    year: "Notes",
    tag: "🌿", // Emoji for photosynthesis
    q: "Describe the primary function of chloroplasts.",
    keywords: ["chloroplasts", "function", "photosynthesis", "convert light energy", "sugars"],
    explanation: "Chloroplasts are organelles found in plant cells and other eukaryotic photosynthetic organisms. Their primary function is to conduct photosynthesis, converting light energy into chemical energy in the form of sugars.",
    course: "BI110",
    term: "T1"
  },

  // Macromolecules
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍚", // Emoji for carbs
    q: "Name the three classes of carbohydrates.",
    keywords: ["carbohydrates", "monosaccharides", "disaccharides", "polysaccharides"],
    explanation: "The three classes of carbohydrates are monosaccharides (simple sugars), disaccharides (two monosaccharides linked), and polysaccharides (many monosaccharides linked).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍬", // Emoji for sugar
    q: "Give an example of a monosaccharide and a disaccharide.",
    keywords: ["monosaccharide", "disaccharide", "glucose", "fructose", "galactose", "sucrose", "lactose", "maltose"],
    explanation: "Examples: Monosaccharides - Glucose, Fructose, Galactose. Disaccharides - Sucrose (glucose+fructose), Lactose (glucose+galactose), Maltose (glucose+glucose).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍞", // Emoji for starch
    q: "What is the primary function of starch in plants?",
    keywords: ["starch", "plants", "function", "energy storage"],
    explanation: "The primary function of starch in plants is long-term energy storage.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💪", // Emoji for protein
    q: "Name the monomers that make up proteins.",
    keywords: ["monomers", "proteins", "amino acids"],
    explanation: "Proteins are polymers made up of amino acid monomers linked by peptide bonds.",
    course: "BI110",
    term: "T1"
  },
  
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💧", // Emoji for water, for dehydration
    q: "What type of reaction links monomers together to form polymers?",
    keywords: ["reaction", "monomers", "polymers", "dehydration reaction", "condensation reaction"],
    explanation: "Monomers are linked together to form polymers by a dehydration reaction (or condensation reaction), where a water molecule is removed.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "✂️", // Emoji for cutting, for hydrolysis
    q: "What type of reaction breaks down polymers into monomers?",
    keywords: ["reaction", "polymers", "monomers", "hydrolysis reaction", "add water"],
    explanation: "Polymers are broken down into monomers by a hydrolysis reaction, where a water molecule is added, effectively breaking a bond.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🍳", // Emoji for denature
    q: "What does it mean for a protein to be 'denatured', and what can cause it?",
    keywords: ["denatured", "protein", "loss of shape", "loss of function", "heat", "pH change", "chemicals"],
    explanation: "A denatured protein has lost its specific three-dimensional shape (conformation) due to disruptions of its weak chemical bonds and interactions, leading to a loss of its biological function. Causes include extreme heat, pH changes, and certain chemicals.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "💧", // Emoji for hydrophobic
    q: "Why are lipids generally considered hydrophobic?",
    keywords: ["lipids", "hydrophobic", "nonpolar", "fats", "oils", "water"],
    explanation: "Lipids are largely composed of hydrocarbons, which form nonpolar covalent bonds. This makes them primarily nonpolar molecules, causing them to repel water (a polar molecule) and thus be hydrophobic.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🧬", // Emoji for DNA
    q: "Name the two types of nucleic acids.",
    keywords: ["nucleic acids", "dna", "rna"],
    explanation: "The two types of nucleic acids are Deoxyribonucleic Acid (DNA) and Ribonucleic Acid (RNA).",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "⛓️", // Emoji for chain
    q: "What are the three components of a nucleotide?",
    keywords: ["nucleotide", "components", "phosphate group", "pentose sugar", "nitrogenous base"],
    explanation: "A nucleotide is composed of a phosphate group, a five-carbon sugar (pentose), and a nitrogenous base.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "📄", // Emoji for template
    q: "What is the primary function of DNA?",
    keywords: ["dna", "function", "genetic information", "heredity", "template"],
    explanation: "The primary function of DNA is to store and transmit genetic information, acting as the blueprint for all cellular activities and hereditary traits.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "⚙️", // Emoji for function
    q: "What is the primary function of RNA?",
    keywords: ["rna", "function", "protein synthesis", "gene expression"],
    explanation: "The primary function of RNA (various types like mRNA, tRNA, rRNA) is to play a crucial role in gene expression, primarily in the synthesis of proteins.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "↔️", // Emoji for double helix
    q: "Describe the basic structure of a DNA molecule.",
    keywords: ["dna structure", "double helix", "two strands", "sugar-phosphate backbone", "base pairs"],
    explanation: "A DNA molecule is typically a double helix, consisting of two polynucleotide strands coiled around a common axis. The backbone is formed by sugar and phosphate groups, with nitrogenous bases pairing in the interior.",
    course: "BI110",
    term: "T1"
  },
  {
    topic: "MACROMOLECULES",
    year: "Notes",
    tag: "🤝", // Emoji for pairing
    q: "How do the base pairing rules in DNA work?",
    keywords: ["dna", "base pairing rules", "adenine", "thymine", "guanine", "cytosine"],
    explanation: "In DNA, Adenine (A) always pairs with Thymine (T), and Guanine (G) always pairs with Cytosine (C).",
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
    keywords: ["branch of science", "description", "identification", "nomenclature", "classification", "organisms"],
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
    keywords: ["Kingdom", "Phylum", "Division", "Class", "Order", "Family", "Genus", "Species"],
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
    keywords: ["genus capitalized", "species lowercase", "italicized", "underlined"],
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
    keywords: ["no nucleus", "no membrane-bound organelles", "lack nucleus", "lack organelles"], // Broaden keywords for common answers
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
    keywords: ["asexual reproduction", "cell divides", "two identical daughter cells", "replicating genetic material"],
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
    keywords: ["nitrogen fixation", "converting atmospheric nitrogen", "usable forms"],
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
    keywords: ["Eukaryotic", "unicellular", "multicellular", "aquatic", "moist", "diverse nutrition"], // Accept any three
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
    keywords: ["pseudopodia", "false feet", "engulfs food", "phagocytosis"],
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
    keywords: ["Merozoite", "red blood cells", "malaria symptoms"],
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
    keywords: ["photosynthesis", "autotrophic", "absorb nutrients", "heterotrophically", "light", "absence of light"],
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
    keywords: ["Chlamydomonas", "Volvox", "Ulva"], // Any two
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
    keywords: ["Fruiting bodies", "spores"],
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
    keywords: ["Algin", "Agar", "Carragean", "Antiseptics"], // Any two
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
    keywords: ["photosynthesis", "aquatic food chains", "producing oxygen", "primary producers"],
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
    keywords: ["Spherical", "cocci", "Rod-shaped", "bacilli", "Spiral-shaped", "spirilla"],
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
    keywords: ["Taxonomic groups", "homologous features", "common ancestor"],
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
    keywords: ["Gametocytes", "Anopheles mosquito", "infected human"],
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
    keywords: ["medicines", "minerals", "biological research", "pathogens", "diseases"], // Any one or two
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
    keywords: ["1990", "250 years after Linnaeus"],
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
    keywords: ["cytoplasm", "nucleoid", "single circular chromosome"],
    explanation: "Unlike eukaryotes, prokaryotes do not compartmentalize their DNA within a membrane-bound nucleus.",
    course: "BI110",
    term: "T2"
  }, 
  
  
  
  
  
  //Bi110 t3
  
  //const shortData = [
  // --- BI110 Term 3 Data ---

  // MODULE 12: BRYOPHYTES
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌿", // Emoji for plants
    q: "How do bryophytes differ from algae in terms of habitat?",
    keywords: ["bryophytes", "algae", "habitat", "terrestrial"],
    explanation: "Unlike algae, bryophytes are terrestrial dwellers.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌎", // Emoji for global
    q: "What is the geographical distribution of bryophytes?",
    keywords: ["bryophytes", "distribution", "cosmopolitan", "temperate", "tropical", "arctic"],
    explanation: "Bryophytes are cosmopolitan, found in temperate, tropical, and arctic regions of the world.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "🌱", // Emoji for plant
    q: "Why are bryophytes considered transitional forms?",
    keywords: ["bryophytes", "transitional", "algae", "vascular plants"],
    explanation: "Bryophytes are considered transitional forms of plants, placed between algae and vascular plants (ferns & seed plants).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "THE BRYOPHYTES",
    year: "Notes",
    tag: "💧", // Emoji for water
    q: "What is a key environmental dependency for bryophytes' survival and reproduction?",
    keywords: ["bryophytes", "water", "dependency", "survival", "reproduction"],
    explanation: "Bryophytes are extremely dependent on water for survival and reproduction.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌱",
    q: "What structures do bryophytes possess instead of roots, and what are their functions?",
    keywords: ["bryophytes", "roots", "rhizoids", "absorption", "anchoring"],
    explanation: "Bryophytes lack roots but possess rhizoids, important for absorption of water & salts and anchoring plants to the substratum.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🛡️", // Emoji for protection
    q: "What is the role of the cutin-coated epidermis in bryophytes?",
    keywords: ["epidermis", "cutin", "protection", "desiccation", "bryophytes"],
    explanation: "The epidermis, coated with cutin, provides protection against desiccation.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌬️", // Emoji for gas
    q: "How do bryophytes facilitate gaseous exchange?",
    keywords: ["gaseous exchange", "air pores", "bryophytes"],
    explanation: "Numerous air pores facilitate gaseous exchange.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "General Features of Bryophytes",
    year: "Notes",
    tag: "🌱",
    q: "Which stage is most dominant in the life cycle of bryophytes?",
    keywords: ["life cycle", "dominant", "gametophyte", "bryophytes"],
    explanation: "In their life cycle, the gametophyte (gamete-bearing structure) is the most dominant.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "孢", // Emoji for spore
    q: "How do bryophytes reproduce, and what are they known as due to this method?",
    keywords: ["reproduce", "spores", "cryptogams", "bryophytes"],
    explanation: "Bryophytes reproduce by means of spores, hence they are known as cryptogams.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "♂️", // Male sign
    q: "Describe the antheridium in bryophytes.",
    keywords: ["antheridium", "male sexual organ", "sperm cells", "bryophytes"],
    explanation: "The antheridium is the male sexual organ, either ellipsoidal or spherical. It contains numerous sperm cells with a single layer of sterile cells.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "♀️", // Female sign
    q: "Describe the archegonium in bryophytes.",
    keywords: ["archegonium", "female sexual organ", "egg cell", "bryophytes"],
    explanation: "The archegonium is a flask-shaped female sexual organ which consists of a neck & the venter. The venter encloses the egg cell.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Reproduction in Bryophytes",
    year: "Notes",
    tag: "🥚", // Emoji for egg
    q: "Why are bryophytes considered oogamous?",
    keywords: ["oogamous", "egg", "sperm", "gametes", "bryophytes"],
    explanation: "Bryophytes are oogamous because they bear two types of gametes: the egg (large and non-motile) and sperm (small and motile).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Bryophyte Sporophytes",
    year: "Notes",
    tag: "🌱",
    q: "What are the components of a bryophyte sporophyte?",
    keywords: ["sporophyte", "foot", "seta", "sporangium", "capsule", "bryophytes"],
    explanation: "A bryophyte sporophyte consists of a foot, a seta, and a sporangium (capsule).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Bryophyte Sporophytes",
    year: "Notes",
    tag: "🌬️",
    q: "Which bryophyte sporophytes have stomata?",
    keywords: ["stomata", "hornwort", "moss", "sporophytes", "bryophytes"],
    explanation: "Hornwort and moss sporophytes have stomata.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Classification - Bryophytes",
    year: "Notes",
    tag: "分類", // Emoji for classification
    q: "Name the three phyla of bryophytes and their common names.",
    keywords: ["phyla", "bryophytes", "Hepatophyta", "Liverworts", "Anthocerophyta", "Hornworts", "Bryophyta", "Mosses"],
    explanation: "The three phyla of bryophytes are Phylum Hepatophyta (Liverworts), Phylum Anthocerophyta (Hornworts), and Phylum Bryophyta (Mosses).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "🌱",
    q: "What is the characteristic plant body of liverworts?",
    keywords: ["liverworts", "plant body", "thalloid", "thallus", "differentiated"],
    explanation: "These plants are characterized by a thalloid plant body, meaning it is not differentiated into roots, stems, and leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "🇿🇲", // Emoji for Zambia
    q: "What is the most common liverwort in Zambia?",
    keywords: ["liverwort", "Zambia", "Marchantia polymorpha"],
    explanation: "The most common liverwort in Zambia is Marchantia polymorpha.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Liverworts",
    year: "Notes",
    tag: "⚤", // Emoji for dioecious
    q: "What does it mean for Marchantia polymorpha to be 'dioecious'?",
    keywords: ["Marchantia polymorpha", "dioecious", "male", "female", "gametes", "separate plants"],
    explanation: "Marchantia polymorpha is dioecious, meaning male & female gametes occur on separate male and female plants.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Hornworts",
    year: "Notes",
    tag: "🌿",
    q: "What distinguishes hornworts morphologically from liverworts?",
    keywords: ["hornworts", "liverworts", "morphological", "thallus", "horn-like structure"],
    explanation: "Hornworts are morphologically different from liverworts; their plants have a thallus bearing a horn-like structure.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Hornworts",
    year: "Notes",
    tag: "💙💚", // Emoji for blue-green algae
    q: "What blue-green algae inhabits the internal cavities of Anthoceros thallus?",
    keywords: ["Anthoceros", "thallus", "internal cavities", "blue-green algae", "Nostoc"],
    explanation: "The thallus of Anthoceros has extensive internal cavities inhabited by the blue-green algae Nostoc.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Division Bryophyta (Mosses)",
    year: "Notes",
    tag: "🌲", // Emoji for tree-like
    q: "Which group is considered the most advanced among bryophytes?",
    keywords: ["advanced group", "bryophytes", "Division Bryophyta", "Mosses"],
    explanation: "The most advanced group of bryophytes is the Division Bryophyta (Mosses).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Division Bryophyta (Mosses)",
    year: "Notes",
    tag: "📏", // Emoji for measure
    q: "What is the taxonomic significance of the number of teeth in mosses?",
    keywords: ["taxonomic significance", "teeth", "mosses", "identification"],
    explanation: "The number of teeth is a taxonomic character for the identification of moss species.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Life Cycle of Mosses",
    year: "Notes",
    tag: "🌱",
    q: "What do moss spores germinate into when released from the capsule?",
    keywords: ["spores", "germinate", "capsule", "protonemata", "protonema", "mosses"],
    explanation: "When spores are released from the capsule, they germinate into protonemata (protonema).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Life Cycle of Mosses",
    year: "Notes",
    tag: "💧",
    q: "What facilitates fertilization in mosses?",
    keywords: ["fertilization", "water", "sperm cells", "archegonia", "mosses"],
    explanation: "Water facilitates the movement of sperm cells towards the archegonia to effect fertilization.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Importance and Ecology of Bryophytes",
    year: "Notes",
    tag: "🌍", // Emoji for ecology
    q: "How do bryophytes serve as bioindicators of pollution?",
    keywords: ["bioindicators", "pollution", "sensitive", "bryophytes"],
    explanation: "Some bryophyte species are very sensitive to pollution and are absent from highly polluted areas, making them bioindicators.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Importance and Ecology of Bryophytes",
    year: "Notes",
    tag: "🔥", // Emoji for fire
    q: "Where does Funaria typically grow well?",
    keywords: ["Funaria", "grow", "burnt areas", "charcoal"],
    explanation: "Funaria grows well on burnt areas, especially where charcoal has been harvested.",
    course: "BI110",
    term: "T3"
  },

  // MODULE 15: ANGIOSPERMS
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌸", // Emoji for flower
    q: "What is the common name for Angiosperms?",
    keywords: ["Angiosperms", "common name", "flowering plants"],
    explanation: "Angiosperms are commonly called flowering plants.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What is a cotyledon?",
    keywords: ["cotyledon", "embryo", "seed", "first leaf"],
    explanation: "A cotyledon is a part of the embryo found within a seed, from which the first leaf emerges.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What characterizes dicot plants?",
    keywords: ["dicot", "dicotyledoneae", "two cotyledons"],
    explanation: "Dicot plants are characterized by their seedlings bearing two cotyledons.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Biology of Angiosperm Plants - Introduction",
    year: "Notes",
    tag: "🌱",
    q: "What characterizes monocot plants?",
    keywords: ["monocot", "monocotyledoneae", "single cotyledon"],
    explanation: "Monocot plants are characterized by a seedling with a single cotyledon.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Plant Body",
    year: "Notes",
    tag: "🌿",
    q: "What are the principal vegetative organs of an angiosperm plant?",
    keywords: ["vegetative organs", "angiosperm", "roots", "stems", "leaves"],
    explanation: "The principal vegetative organs of the angiosperm plant are roots, stems, and leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Habits",
    year: "Notes",
    tag: "🌳", // Emoji for tree
    q: "Who classified plants into growth habits like herbs, shrubs, and trees?",
    keywords: ["Theophrastos", "plant habits", "herbs", "shrubs", "trees", "classification"],
    explanation: "Theophrastos is known to have divided plants into growth habits commonly referred to as herbs, shrubs, and trees.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Life Forms",
    year: "Notes",
    tag: "⏳", // Emoji for time
    q: "Define annual plants and give an example.",
    keywords: ["annuals", "life cycle", "single growing season", "maize"],
    explanation: "Annuals are plants which complete their life cycle from germination to the seed within a single growing season. Example: maize.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Plant Life Forms",
    year: "Notes",
    tag: "⏳",
    q: "Define perennial plants and give an example.",
    keywords: ["perennials", "life span", "more than two years", "mango"],
    explanation: "Perennials are plants whose life span extends for more than two years. Example: Mango.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Roots",
    year: "Notes",
    tag: "⬇️", // Emoji for down
    q: "What is the typical growth direction of roots called?",
    keywords: ["roots", "growth direction", "gravity", "geotropic", "positively geotropic"],
    explanation: "Typically, roots grow in the direction of gravity, hence such organs are said to be positively geotropic.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Roots",
    year: "Notes",
    tag: "💧",
    q: "What are root hairs and their role?",
    keywords: ["root hairs", "epidermal cells", "absorption", "water", "mineral elements"],
    explanation: "Root hairs are modified epidermal cells that usually lack a cuticle and are involved in the absorption of water and mineral elements.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Function of Roots",
    year: "Notes",
    tag: "🍠", // Emoji for sweet potato
    q: "Name two functions of roots besides anchorage and absorption.",
    keywords: ["roots", "functions", "storage", "hormone synthesis", "starch", "alkaloids", "cytokinins", "gibberellins"],
    explanation: "Roots are involved in the storage of synthesized compounds (e.g., starch, alkaloids) and the synthesis of hormones (e.g., cytokinins, gibberellins).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "🌱",
    q: "What does the root cap secrete, and what is its role in root growth?",
    keywords: ["root cap", "secrete", "mucigel", "lubricant", "gravity perception", "geotropic growth"],
    explanation: "The root cap secretes mucigel, a slimy polysaccharide lubricant. It is also the site of perception of gravity, controlling geotropic growth.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "💤", // Emoji for sleep
    q: "Describe the quiescent center in roots.",
    keywords: ["quiescent center", "roots", "low mitosis", "no mitotic division"],
    explanation: "The quiescent center (zone) is a hemispherical shaped tissue where cells exhibit low mitosis and even a complete lack of mitotic cell division.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Primary Tissues in Roots",
    year: "Notes",
    tag: "🌱",
    q: "What does procambium develop into?",
    keywords: ["procambium", "develop", "vascular cambium", "juvenile tissue"],
    explanation: "Procambium is a juvenile tissue that gives rise to the development of the vascular cambium.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Morphology of Roots",
    year: "Notes",
    tag: "🌱",
    q: "Differentiate between tap root system and fibrous root system.",
    keywords: ["tap root system", "fibrous root system", "dicot", "monocot", "initial root", "persistent", "degenerate", "numerous roots"],
    explanation: "Tap root system (dicots): initial root is persistent and becomes the main root. Fibrous root system (monocots): initial root degenerates, replaced by numerous roots of same diameter.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Anatomy of Roots",
    year: "Notes",
    tag: "✖️", // Emoji for X-shape
    q: "Describe xylem arrangement in dicot roots (e.g., Ranunculus).",
    keywords: ["xylem", "dicot roots", "Ranunculus", "tetrach", "four arms"],
    explanation: "In roots of Ranunculus (a dicot), the xylem tissue exhibits four arms radiating from the center, a condition said to be tetrach.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Anatomy of Roots",
    year: "Notes",
    tag: "🚫", // Emoji for no
    q: "Why is secondary growth typically absent in monocot roots?",
    keywords: ["secondary growth", "monocot roots", "cambium", "absent"],
    explanation: "In monocot roots, the cambium is absent, and hence there is no secondary growth in such roots.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Stems",
    year: "Notes",
    tag: "⬆️", // Emoji for up
    q: "What is the main physical role of the stem?",
    keywords: ["stem", "physical role", "bear leaves", "elevated", "ground"],
    explanation: "The main role of the stem is to bear the leaves and ensures that the leaves are elevated above the ground.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Stems",
    year: "Notes",
    tag: "💧",
    q: "What physiological processes are stems involved in?",
    keywords: ["stems", "physiological", "transport", "water", "mineral salts", "conduction", "organic compounds", "phloem"],
    explanation: "In physiological terms, the stems are involved in the transport of water & mineral salts and the conduction of organic compounds through the phloem tissue.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "Parts of the Stem",
    year: "Notes",
    tag: "🌱",
    q: "What hormone does the stem apex produce, and what is its effect on lateral buds?",
    keywords: ["stem apex", "hormone", "auxin", "IAA", "indole acetic acid", "apical dominance", "lateral buds", "inhibiting"],
    explanation: "The stem apex produces the auxin called indole acetic acid (IAA), which promotes apical dominance by inhibiting the development of lateral buds.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Tunica-Corpus Theory",
    year: "Notes",
    tag: "🌱",
    q: "Who developed the Tunica-Corpus theory and what does it explain?",
    keywords: ["Tunica-Corpus theory", "Schmidt", "1924", "stem apex", "distinct zones", "tunica", "corpus"],
    explanation: "The tunica-corpus theory was developed by Schmidt in 1924, explaining that the stem apex exhibits two distinct zones called the tunica and the corpus.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "The Tunica-Corpus Theory",
    year: "Notes",
    tag: "🔬",
    q: "Differentiate between anticlinal and periclinal cell division.",
    keywords: ["anticlinal division", "periclinal division", "cell division", "perpendicular", "parallel"],
    
  },
  
  //const shortData = [
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Explain the difference between homosporous and heterosporous plants.",
    keywords: ["homosporous", "heterosporous", "spore type", "gametophyte"],
    explanation: "Homosporous plants produce one type of spore, forming a bisexual gametophyte. Heterosporous plants produce two types of spores (microspores and megaspores), which form male and female gametophytes respectively.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is a seed, and what are its three main components?",
    keywords: ["seed", "ovule", "embryo", "endosperm", "seed coat"],
    explanation: "A seed is a mature ovule containing a plant embryo, a food reserve (endosperm), and a protective seed coat.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Why are gymnosperms called 'naked seed' plants?",
    keywords: ["gymnosperm", "naked seeds", "ovules", "sporophylls"],
    explanation: "The term 'gymnosperm' means 'naked seeds' because their ovules and resulting seeds are exposed on the surface of sporophylls, not enclosed in a fruit.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is a sporophyll?",
    keywords: ["sporophyll", "modified leaf", "sporangia"],
    explanation: "A sporophyll is a modified leaf or a leaf-like organ that bears sporangia, such as the fertile leaves of ferns or the stamens of angiosperms.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "List the four main divisions of gymnosperms.",
    keywords: ["Cycadophyta", "Ginkgophyta", "Coniferophyta", "Gnetophyta"],
    explanation: "The four divisions are Cycadophyta (Cycads), Ginkgophyta, Coniferophyta (Conifers), and Gnetophyta.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Which two genera of gymnosperms are indigenous to Zambia?",
    keywords: ["Podocarpus", "Encephalartos", "Zambia"],
    explanation: "*Podocarpus* and *Encephalartos* are the only gymnosperms found in Zambia.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Describe the composition of the xylem tissue in pines.",
    keywords: ["xylem", "tracheid", "homogenous"],
    explanation: "The xylem in pines is homogenous, meaning it is made up only of tracheid cells.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is a 'physiological drought' in pines?",
    keywords: ["physiological drought", "temperate", "winter", "water"],
    explanation: "This occurs because pines are found in temperate climates where winter snow makes water unavailable to the plant, even though it is present.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Name two anatomical adaptations of a *Pinus* leaf to dry environments.",
    keywords: ["adaptations", "sunken stomata", "cuticle", "hypodermis"],
    explanation: "Key adaptations include sunken stomata to reduce water loss, a thick cuticle, and a protective hypodermis.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is mycorrhiza, and why is it important for pine trees?",
    keywords: ["mycorrhiza", "symbiotic", "fungus", "roots"],
    explanation: "Mycorrhiza is a symbiotic mutual relationship between pine roots and a fungus, which is essential for the growth of many exotic pine species.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the function of resin canals in pine stems and leaves?",
    keywords: ["resin canals", "resin", "protection"],
    explanation: "Resin canals, found in the xylem and cortex, contain a resinous substance that protects the plant from insects and pathogens.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What two types of branches are found on pine stems, and what kind of leaves do they bear?",
    keywords: ["long shoots", "spur shoots", "scale leaves", "needle-like leaves"],
    explanation: "Pine stems have long shoots bearing non-photosynthetic scale leaves and spur shoots bearing photosynthetic needle-like leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is transfusion tissue, and where is it located in a *Pinus* leaf?",
    keywords: ["transfusion tissue", "tracheids", "parenchyma", "vascular system", "endodermis"],
    explanation: "Transfusion tissue is a mixture of dead tracheids and living parenchyma located between the vascular system and the endodermis in a pine leaf.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How are *Pinus* species identified using their leaves?",
    keywords: ["fascicle", "identification"],
    explanation: "The number of leaves per fascicle (a small bundle of leaves) is a key characteristic used for species identification.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What does it mean for a pine species to be monoecious?",
    keywords: ["monoecious", "male cone", "female cone", "same plant"],
    explanation: "A monoecious pine tree has both male (staminate) and female (ovulate) cones on the same individual plant.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Where do ovules and pollen grains develop in pine trees?",
    keywords: ["ovules", "pollen", "female cones", "male cones"],
    explanation: "Ovules develop in female cones (ovulate strobili), while pollen grains are produced in male cones (staminate strobili).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the function of the wings on pine pollen grains?",
    keywords: ["winged pollen", "wind dispersal"],
    explanation: "The wings on the pollen grains aid in wind dispersal, which is the primary method of pollination in pines.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How long does it take for a female pine cone to mature?",
    keywords: ["female cone", "ovulate strobilus", "maturity"],
    explanation: "Ovulate strobili (female cones) can take up to five years to reach maturity.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Although a pine seed may have multiple embryos, what is the final outcome?",
    keywords: ["multiple embryos", "viable seed"],
    explanation: "While multiple embryos may form, only one embryo eventually matures into a viable seed.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the indigenous pine species in Zambia, and what is its local name?",
    keywords: ["Podocarpus latifolius", "Mulushi", "Mweye"],
    explanation: "The indigenous pine species is *Podocarpus latifolius*, locally known as Mulushi (Bemba, Bisa) or Mweye (Tumbuka).",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How does the evergreen nature of pine trees relate to their leaves?",
    keywords: ["evergreen", "leaves", "persist"],
    explanation: "Pine trees are evergreen because their leaves are long-lasting, persisting on the tree for 2-14 years.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the specific name of the longest-living pine species mentioned in the notes?",
    keywords: ["Pinus longaeva", "long-living"],
    explanation: "*Pinus longaeva* is a long-living pine species found in the southwestern USA.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How do the medullary rays of pine xylem appear?",
    keywords: ["medullary rays", "uniseriate"],
    explanation: "The medullary rays in pine xylem are uniseriate, meaning they are one cell thick.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the purpose of the endosperm in a seed?",
    keywords: ["endosperm", "food reserves"],
    explanation: "The endosperm holds food reserves that provide nutrition for the developing embryo.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the name of the most commonly cultivated *Pinus* species in Zambia?",
    keywords: ["Pinus insularis", "cultivated"],
    explanation: "The most commonly cultivated species in Zambia is *Pinus insularis*.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "In what part of a pine tree are both male and female cones found?",
    keywords: ["monoecious", "same plant"],
    explanation: "Both male and female cones are found on the same individual plant, which is why pines are described as monoecious.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the difference between a long shoot and a spur shoot?",
    keywords: ["long shoot", "spur shoot", "scale leaves", "needle-like leaves"],
    explanation: "Long shoots bear non-photosynthetic scale leaves, while spur shoots bear the photosynthetic needle-like leaves.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the term for the vascular system found in the young stems of pines?",
    keywords: ["eustele", "vascular system", "young stems"],
    explanation: "The vascular system in young stems is described as eustele.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How does the vascular system change in older pine stems?",
    keywords: ["ectophloic siphonostele", "older stems"],
    explanation: "In older stems, the vascular system changes to an ectophloic siphonostele.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How does the position of sporangia differ between male and female cones?",
    keywords: ["microsporangia", "megasporangia", "abaxial", "adaxial"],
    explanation: "Microsporangia (male) develop on the abaxial side, while megasporangia (female) develop on the adaxial side of the sporophylls.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What are the common names for the gymnosperm divisions Cycadophyta and Coniferophyta?",
    keywords: ["Cycadophyta", "Coniferophyta", "Cycads", "Conifers"],
    explanation: "Cycadophyta are commonly called Cycads, and Coniferophyta are commonly called Conifers.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the local name for the indigenous pine species in Bemba and Bisa?",
    keywords: ["Podocarpus latifolius", "Mulushi"],
    explanation: "The local name for *Podocarpus latifolius* in Bemba and Bisa is Mulushi.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the local name for the indigenous pine species in Tumbuka?",
    keywords: ["Podocarpus latifolius", "Mweye"],
    explanation: "The local name for *Podocarpus latifolius* in Tumbuka is Mweye.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Name an example of a cycad genus.",
    keywords: ["cycad", "Cycas", "Encephalartos"],
    explanation: "Examples of cycad genera include *Cycas* and *Encephalartos*.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How does the structure of a pine leaf's mesophyll contribute to its survival?",
    keywords: ["mesophyll", "resin canals"],
    explanation: "The mesophyll contains resin canals, which are part of the plant's defense against pests and diseases.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the difference between ovulate and staminate strobili?",
    keywords: ["ovulate strobili", "staminate strobili"],
    explanation: "Ovulate strobili are female cones, and staminate strobili are male cones.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How does the vascular system of an older pine stem differ from that of a young stem?",
    keywords: ["eustele", "ectophloic siphonostele"],
    explanation: "Young stems have a eustele vascular system, while older stems have an ectophloic siphonostele.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is a key difference in reproductive structures between seed plants and seedless vascular plants?",
    keywords: ["seed plants", "seedless vascular plants", "seeds", "spores"],
    explanation: "Seed plants reproduce using seeds, while seedless vascular plants reproduce using spores.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Why are pteridophytes often called vascular cryptogams?",
    keywords: ["pteridophytes", "vascular cryptogams"],
    explanation: "They are vascular plants that reproduce via spores, rather than seeds.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "Give an example of a bifoliate *Pinus* species.",
    keywords: ["Pinus sylvestris", "bifoliate"],
    explanation: "*Pinus sylvestris* is an example of a bifoliate pine species, meaning it has two leaves per fascicle.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the scientific name for a unifoliate pine species?",
    keywords: ["Pinus monophylla", "unifoliate"],
    explanation: "*Pinus monophylla* is an example of a unifoliate pine, with one leaf per fascicle.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the scientific name for a trifoliate pine species?",
    keywords: ["Pinus insularis", "trifoliate"],
    explanation: "*Pinus insularis* is an example of a trifoliate pine species, with three leaves per fascicle.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "How many species of *Pinus* were introduced to Zambia?",
    keywords: ["Pinus", "introduced", "Zambia"],
    explanation: "27 species of *Pinus* were introduced to Zambia.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is a key difference in reproductive output between male and female cones?",
    keywords: ["staminate strobili", "ovulate strobili", "annually", "5 years"],
    explanation: "Staminate strobili (male cones) develop annually, while ovulate strobili (female cones) can take up to 5 years to mature.",
    course: "BI110",
    term: "T3"
  },
  {
    topic: "GYMNOSPERMS",
    year: "Notes",
    tag: "🌲",
    q: "What is the end result of fertilization in a pine tree?",
    keywords: ["fertilization", "zygote"],
    explanation: "Fertilization leads to the formation of a zygote, which develops into an embryo.",
    course: "BI110",
    term: "T3"
  },
  
  //const mcqs = [
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐛",
    "q": "What is the primary division of the Kingdom Animalia?",
    "keywords": ["Kingdom Animalia", "division", "invertebrates", "vertebrates"],
    "explanation": "The Kingdom Animalia is composed of invertebrates and vertebrates, a fundamental classification based on the presence or absence of a backbone.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐛",
    "q": "Which of the following defines an invertebrate?",
    "keywords": ["invertebrate", "definition", "backbone", "vertebral column"],
    "explanation": "An invertebrate is an animal without a backbone or vertebral column.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐛",
    "q": "What is the function of the vertebral column?",
    "keywords": ["vertebral column", "function", "skeletal support", "backbone"],
    "explanation": "The vertebral column serves as the main skeletal support for an animal.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🇿🇲",
    "q": "Which of these phyla is found in Zambia?",
    "keywords": ["phyla", "Zambia", "invertebrates", "Annelida"],
    "explanation": "The notes list Annelida, Nematoda, Platyhelminthes, Cnidaria, Mollusks, Arthropoda, Loricifera, Cycliophora, and Micrognathozoa as invertebrate phyla found in Zambia.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🪱",
    "q": "What is a characteristic feature of Phylum Annelida?",
    "keywords": ["Annelida", "segmented worms", "soft bodies", "setae"],
    "explanation": "Annelids are segmented worms with cylindrical soft bodies and rings that separate the segments. They possess setae and move using circular and longitudinal muscles.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🪱",
    "q": "Based on the provided diagram of segmented worms (earthworms), what phylum do they belong to?",
    "keywords": ["segmented worms", "earthworms", "diagram", "Annelida"],
    "explanation": "The diagrams of earthworms and other segmented worms are used to illustrate the Phylum Annelida.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🪱",
    "q": "Which of these are examples of annelids?",
    "keywords": ["annelids", "examples", "earthworms", "leeches"],
    "explanation": "The notes list earthworms and leeches as common examples of annelids.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦠",
    "q": "Which of the following describes a nematode?",
    "keywords": ["nematode", "characteristics", "un-segmented", "tubular", "cylindrical"],
    "explanation": "Nematodes are un-segmented, tubular worms that are cylindrical and taper at both ends.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the common name for the parasitic nematode *Ascaris lumbricoides*?",
    "keywords": ["Ascaris lumbricoides", "nematode", "parasite", "intestinal worms"],
    "explanation": "*Ascaris lumbricoides* is a parasitic nematode commonly known as an intestinal worm.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦠",
    "q": "Nematodes are known to cause diseases like elephantiasis and affect plants, particularly those in which family?",
    "keywords": ["nematodes", "elephantiasis", "plants", "Solanaceae"],
    "explanation": "The notes state that filarid nematodes cause elephantiasis and they can affect plants, particularly those in the Solanaceae family.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐠",
    "q": "What phylum includes jellyfish, hydra, and corals?",
    "keywords": ["jellyfish", "hydra", "corals", "Cnidaria"],
    "explanation": "Cnidaria is the phylum for a group of aquatic animals with soft, gelatinous bodies, including jellyfish, hydra, and corals.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐠",
    "q": "What is the key difference between jellyfish and corals?",
    "keywords": ["jellyfish", "corals", "free-swimming", "sessile"],
    "explanation": "Jellyfish are free-swimming, while corals are sessile (sedimentary).",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐠",
    "q": "What is the ecological importance of coral reefs?",
    "keywords": ["coral reefs", "ecological role", "protection", "ocean currents"],
    "explanation": "Coral reefs provide protection for coastal buildings against ocean currents and tides.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐌",
    "q": "Which of the following is a characteristic of Phylum Mollusca?",
    "keywords": ["Mollusca", "soft bodies", "shell", "rasp"],
    "explanation": "Mollusks have soft bodies, often with a rasping tongue-like file, and many species possess a hard shell made of calcium.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐌",
    "q": "How many extant species are there in the Phylum Mollusca?",
    "keywords": ["Mollusca", "extant species", "85,000"],
    "explanation": "The notes state that there are about 85,000 extant species of mollusks.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐌",
    "q": "What parasite can be transmitted by aquatic mollusks?",
    "keywords": ["mollusks", "parasite", "vector", "Schistosoma", "bilharziasis"],
    "explanation": "Aquatic mollusks can act as vectors for the parasite *Schistosoma*, which causes bilharziasis.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦀",
    "q": "What are the defining characteristics of Phylum Arthropoda?",
    "keywords": ["Arthropoda", "exoskeleton", "chitin", "jointed appendage", "segments"],
    "explanation": "Arthropods are characterized by an exoskeleton made of chitin and a paired, jointed appendage, with a body plan of segments.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦀",
    "q": "What is a cephalothorax?",
    "keywords": ["cephalothorax", "definition", "head", "thorax", "fused"],
    "explanation": "A cephalothorax is a fused body segment formed by the combination of the head and thorax, found in some arthropods.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🕷️",
    "q": "Which class of arthropods includes spiders, scorpions, and ticks?",
    "keywords": ["spiders", "scorpions", "ticks", "Arachnida"],
    "explanation": "Spiders, scorpions, and ticks are all part of the class Arachnida.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🕷️",
    "q": "How do spiders catch their prey?",
    "keywords": ["spiders", "prey", "silk webs", "poison glands"],
    "explanation": "Spiders catch their prey in silk webs and use poison glands to paralyze them.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🕷️",
    "q": "What is the main function of the venom in scorpions?",
    "keywords": ["scorpions", "venom", "neurotoxins", "enzyme inhibitors", "lethal"],
    "explanation": "Scorpion venom is a mixture of neurotoxins and enzyme inhibitors that can be lethal to prey and in some cases, humans.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐞",
    "q": "What is the key difference between centipedes and millipedes?",
    "keywords": ["centipedes", "millipedes", "appendages", "legs", "body segments"],
    "explanation": "Centipedes have one pair of legs on each body segment, while millipedes have two pairs on each segment.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦀",
    "q": "Which class of arthropods are aquatic and include crabs and shrimp?",
    "keywords": ["Crustacea", "aquatic", "crabs", "shrimp"],
    "explanation": "The class Crustacea consists of aquatic arthropods such as crabs, crayfish, lobsters, and shrimp.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which phylum of microscopic marine animals was discovered in 1983 and is found in the spaces between sand grains?",
    "keywords": ["Loricifera", "microscopic", "marine animals", "sand grains"],
    "explanation": "Phylum Loricifera consists of tiny marine animals found in the spaces between sand grains, discovered in 1983.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦞",
    "q": "Where are the microscopic metazoans from the Phylum Cycliophora known to live?",
    "keywords": ["Cycliophora", "microscopic", "metazoans", "mouthparts", "clawed lobsters"],
    "explanation": "Phylum Cycliophora organisms are known to inhabit the mouthparts of clawed lobsters.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the defining feature of Phylum Micrognathozoa?",
    "keywords": ["Micrognathozoa", "microscopic", "jaws", "complicated jaws"],
    "explanation": "Phylum Micrognathozoa is a group of microscopic animals with complicated jaws.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🪱",
    "q": "How do annelids move?",
    "keywords": ["annelids", "movement", "circular muscles", "longitudinal muscles"],
    "explanation": "Annelids move using circular and longitudinal muscles.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the shape of a nematode's body?",
    "keywords": ["nematode", "body shape", "cylindrical", "tapered"],
    "explanation": "Nematodes have a cylindrical body that tapers at both ends.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐠",
    "q": "How many species are in the Phylum Cnidaria?",
    "keywords": ["Cnidaria", "species", "10,000", "aquatic"],
    "explanation": "The Phylum Cnidaria contains about 10,000 species of aquatic animals.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🐌",
    "q": "Besides soft bodies and shells, what is another significant feature of a mollusk's body?",
    "keywords": ["mollusca", "body features", "foot", "mantle", "alimentary canal"],
    "explanation": "Significant features of a mollusk's body include the foot, mantle, alimentary canal, and shell.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🕷️",
    "q": "What is the exoskeleton of arthropods made of?",
    "keywords": ["arthropods", "exoskeleton", "chitin", "cuticle"],
    "explanation": "The exoskeleton, also known as the cuticle, is made of chitin.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🕷️",
    "q": "What is the common diet of most arachnids?",
    "keywords": ["arachnids", "diet", "carnivorous", "mites"],
    "explanation": "Most arachnids are carnivorous, with the exception of mites which are largely herbivorous.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🦀",
    "q": "Which class of arthropods has two pairs of antennae and a cephalothorax?",
    "keywords": ["arthropods", "antennae", "cephalothorax", "Crustacea"],
    "explanation": "Crustaceans typically have two pairs of antennae, and their head and thorax are fused into a cephalothorax.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🔬",
    "q": "How many species of Phylum Cycliophora have been documented?",
    "keywords": ["Cycliophora", "species", "documented", "three"],
    "explanation": "Only three species of Cycliophora have been documented to date.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which phylum of microscopic animals with complicated jaws was discovered in Greenland in the year 2000?",
    "keywords": ["Micrognathozoa", "microscopic", "jaws", "Greenland"],
    "explanation": "Phylum Micrognathozoa was discovered in Greenland in the year 2000 and is known for its complicated jaws.",
    "course": "BI110",
    "term": "T3"
  },
  {
    "topic": "Diversity of Animals : Invertebrates",
    "year": "Notes",
    "tag": "🪱",
    "q": "Which phylum is represented by the diagram of a Planarian?",
    "keywords": ["Planarian", "diagram", "phylum", "Platyhelminthes"],
    "explanation": "The diagram of a Planarian, a type of flatworm, represents the Phylum Platyhelminthes.",
    "course": "BI110",
    "term": "T3"
  },
  
  
   {
    q: "Define a biomolecule.",
    keywords: ["organic compounds", "structural and functional components"],
    explanation: "Biomolecules are organic compounds that serve as the basic structural and functional components of a cell.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a monomer and a polymer?",
    keywords: ["monomer: single unit", "polymer: chain of monomers"],
    explanation: "A monomer is a single, small molecular unit, while a polymer is a large molecule made up of a long chain of these repeating monomer units.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Explain the process of dehydration synthesis.",
    keywords: ["joining monomers", "removal of water"],
    explanation: "Dehydration synthesis is a reaction in which two monomers are covalently bonded together by removing a water molecule.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Explain the process of hydrolysis.",
    keywords: ["breaking polymers", "addition of water"],
    explanation: "Hydrolysis is a reaction that breaks the covalent bond in a polymer by adding a water molecule, thus separating it into its individual monomers.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the general chemical formula for carbohydrates?",
    keywords: ["Cn(H2O)n"],
    explanation: "The general chemical formula for a carbohydrate is Cn(H2O)n, which indicates that they are made of carbon, hydrogen, and oxygen with a 2:1 ratio of H to O.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the primary function of carbohydrates in living organisms?",
    keywords: ["energy source", "structural components"],
    explanation: "Carbohydrates serve as an immediate energy source for the body and provide structural components, such as cellulose in plants.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Name three monosaccharides and their common sources.",
    keywords: ["glucose", "fructose", "galactose"],
    explanation: "Three monosaccharides are: Glucose (energy), Fructose (fruit sugar), and Galactose (part of milk sugar).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Name three disaccharides and their constituent monosaccharides.",
    keywords: ["sucrose: glucose + fructose", "lactose: glucose + galactose", "maltose: glucose + glucose"],
    explanation: "Sucrose is made of glucose and fructose. Lactose is made of glucose and galactose. Maltose is made of two glucose molecules.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of starch and where is it found?",
    keywords: ["energy storage", "plants"],
    explanation: "Starch is a polysaccharide that functions as the primary form of energy storage in plants.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of glycogen and where is it found?",
    keywords: ["energy storage", "animals"],
    explanation: "Glycogen is a polysaccharide that serves as the main form of energy storage in animals, primarily in the liver and muscles.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of cellulose and where is it found?",
    keywords: ["structural support", "plant cell walls"],
    explanation: "Cellulose is a polysaccharide that provides structural support to plant cells, as it is the main component of their cell walls.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of chitin and where is it found?",
    keywords: ["structural support", "fungal cell walls", "arthropod exoskeletons"],
    explanation: "Chitin is a polysaccharide that provides structural support, forming the cell walls of fungi and the exoskeletons of arthropods.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a glycosidic linkage?",
    keywords: ["covalent bond", "joins carbohydrates"],
    explanation: "A glycosidic linkage is a covalent bond that joins a carbohydrate molecule to another group, such as another sugar.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the defining characteristic of lipids?",
    keywords: ["hydrophobic", "insoluble in water"],
    explanation: "The defining characteristic of lipids is that they are hydrophobic, meaning they repel water and are insoluble in it.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the three main types of lipids?",
    keywords: ["fats", "phospholipids", "steroids"],
    explanation: "The three main types of lipids are fats (for energy storage), phospholipids (for cell membranes), and steroids (for signaling and structure).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Explain the difference between saturated and unsaturated fatty acids.",
    keywords: ["saturated: no double bonds", "unsaturated: at least one double bond"],
    explanation: "Saturated fatty acids have no double bonds in their hydrocarbon chains, making them straight and solid at room temperature. Unsaturated fatty acids have one or more double bonds, which create kinks and make them liquid at room temperature.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the key role of phospholipids?",
    keywords: ["cell membrane", "lipid bilayer"],
    explanation: "Phospholipids are the main structural component of the cell membrane, forming a lipid bilayer with hydrophilic heads facing out and hydrophobic tails facing in.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Describe the basic structure of a steroid.",
    keywords: ["four fused rings", "carbon skeleton"],
    explanation: "A steroid is a type of lipid characterized by a carbon skeleton consisting of four fused rings.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the monomers of proteins and what bonds link them?",
    keywords: ["amino acids", "peptide bonds"],
    explanation: "The monomers of proteins are amino acids, which are linked together by covalent bonds called peptide bonds.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the primary structure of a protein?",
    keywords: ["unique sequence of amino acids"],
    explanation: "The primary structure is the unique, linear sequence of amino acids in a polypeptide chain.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the secondary structure of a protein?",
    keywords: ["alpha helix", "beta pleated sheet", "hydrogen bonds"],
    explanation: "The secondary structure refers to the local folding of the polypeptide chain into an alpha helix or a beta pleated sheet, stabilized by hydrogen bonds.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the tertiary structure of a protein?",
    keywords: ["overall 3D shape", "R-group interactions"],
    explanation: "The tertiary structure is the overall three-dimensional shape of a single polypeptide chain, determined by interactions between the R-groups of the amino acids.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the quaternary structure of a protein?",
    keywords: ["multiple polypeptide chains", "subunits"],
    explanation: "The quaternary structure is the arrangement of two or more polypeptide chains (subunits) into a single functional protein complex.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Define denaturation in the context of proteins.",
    keywords: ["loss of 3D shape", "loss of function"],
    explanation: "Denaturation is the process where a protein loses its native three-dimensional shape and, consequently, its biological function, due to changes in pH, temperature, or other factors.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the primary function of nucleic acids?",
    keywords: ["store and transmit genetic information"],
    explanation: "Nucleic acids are macromolecules whose primary function is to store, transmit, and express genetic or hereditary information.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the two types of nucleic acids?",
    keywords: ["DNA", "RNA"],
    explanation: "The two types of nucleic acids are deoxyribonucleic acid (DNA) and ribonucleic acid (RNA).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the three components of a nucleotide?",
    keywords: ["five-carbon sugar", "phosphate group", "nitrogenous base"],
    explanation: "A nucleotide, the monomer of a nucleic acid, is composed of a five-carbon sugar, a phosphate group, and a nitrogenous base.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference in sugar between DNA and RNA?",
    keywords: ["DNA has deoxyribose", "RNA has ribose"],
    explanation: "DNA contains the sugar deoxyribose, whereas RNA contains the sugar ribose.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference in nitrogenous bases between DNA and RNA?",
    keywords: ["DNA: A, G, C, T", "RNA: A, G, C, U"],
    explanation: "DNA contains adenine (A), guanine (G), cytosine (C), and thymine (T). RNA contains adenine (A), guanine (G), cytosine (C), and uracil (U) in place of thymine.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the structural difference between DNA and RNA?",
    keywords: ["DNA: double helix", "RNA: single strand"],
    explanation: "DNA is a double-stranded molecule that forms a double helix, while RNA is typically a single-stranded molecule.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a chromosome?",
    keywords: ["thread-like structure", "carries genetic information", "DNA", "proteins"],
    explanation: "A chromosome is a thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of a histone protein?",
    keywords: ["DNA packaging", "nucleosomes"],
    explanation: "Histones are proteins around which DNA is wrapped, helping to package the long DNA molecule into the compact structure of a chromosome, forming units called nucleosomes.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are tumor suppressor genes?",
    keywords: ["inhibit cell division", "prevent uncontrolled growth"],
    explanation: "Tumor suppressor genes are genes that encode proteins that inactivate or inhibit cell division, thereby preventing uncontrolled cell growth and the development of cancer.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the main difference between a dominant and a recessive allele?",
    keywords: ["dominant: expressed", "recessive: masked"],
    explanation: "A dominant allele is one whose trait is fully expressed in an organism, while a recessive allele's trait is only expressed when a dominant allele is not present.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a locus?",
    keywords: ["specific position", "gene on a chromosome"],
    explanation: "A locus is the specific physical location or position of a gene on a chromosome.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a lethal gene?",
    keywords: ["impairs biochemical function", "causes death"],
    explanation: "A lethal gene is an allele that has the potential to cause the death of an organism, often by impairing a critical biochemical function.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the two major products of transcription in gene expression?",
    keywords: ["messenger RNA (mRNA)", "transfer RNA (tRNA)"],
    explanation: "Transcription produces messenger RNA (mRNA), which carries the genetic code from DNA to the ribosome, and transfer RNA (tRNA), which brings amino acids to the ribosome.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of an enzyme?",
    keywords: ["biological catalyst", "speeds up reactions"],
    explanation: "Enzymes are biological catalysts, which are proteins that speed up the rate of a specific biochemical reaction without being consumed in the process.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  
  {
    q: "What is a chromosome complement?",
    keywords: ["haploid set", "diploid set"],
    explanation: "A chromosome complement is the entire set of chromosomes in a cell, which can be either a haploid set (n) or a diploid set (2n).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What does the term 'heredity' mean?",
    keywords: ["transmission of traits", "parents to offspring"],
    explanation: "Heredity refers to the transmission of genetic traits from parents to their offspring.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a tetrad in the context of meiosis?",
    keywords: ["four chromatids", "homologous chromosomes"],
    explanation: "A tetrad is a group of four chromatids formed by the pairing of two homologous chromosomes during prophase I of meiosis.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the purpose of the mitotic spindle?",
    keywords: ["microtubules", "separates sister chromatids"],
    explanation: "The mitotic spindle is a structure made of microtubules that separates the sister chromatids during anaphase of mitosis and pulls them to opposite ends of the cell.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "How does binary fission differ from mitosis?",
    keywords: ["binary fission: prokaryotes", "mitosis: eukaryotes"],
    explanation: "Binary fission is the process of cell division in prokaryotic cells, which lack a nucleus. Mitosis is the process of nuclear division in eukaryotic cells.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the significance of the Law of Segregation?",
    keywords: ["alleles separate", "meiosis", "gametes"],
    explanation: "Mendel's Law of Segregation states that during meiosis, the alleles for each trait are separated into different gametes, so each gamete carries only one allele for each gene.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the Law of Independent Assortment?",
    keywords: ["alleles for different traits", "separate independently"],
    explanation: "Mendel's Law of Independent Assortment states that the alleles for different traits are sorted into gametes independently of one another, leading to a variety of genetic combinations.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a nucleoid and a nucleus?",
    keywords: ["nucleoid: prokaryotes, no membrane", "nucleus: eukaryotes, membrane-bound"],
    explanation: "A nucleoid is the region in a prokaryotic cell where the genetic material is concentrated, but it is not enclosed by a membrane. A nucleus is a membrane-bound organelle in eukaryotic cells that contains the genetic material.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the vacuole in a plant cell?",
    keywords: ["stores water, food, waste", "maintains turgor pressure"],
    explanation: "The large central vacuole in a plant cell stores water, food, and waste, and also helps to maintain turgor pressure, which gives the cell rigidity.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a non-reducing sugar?",
    keywords: ["no free aldehyde or ketone group", "sucrose"],
    explanation: "A non-reducing sugar is a sugar that cannot reduce other compounds. The most common example is sucrose, where the reactive groups of glucose and fructose are bonded together.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "Name two differences between DNA and RNA.",
    keywords: ["sugar type", "nitrogenous bases", "structure"],
    explanation: "DNA contains deoxyribose sugar and the base thymine, while RNA contains ribose sugar and the base uracil. DNA is a double helix, and RNA is typically single-stranded.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the ribosome?",
    keywords: ["protein synthesis", "translation"],
    explanation: "Ribosomes are cellular organelles responsible for protein synthesis through a process called translation, where they read messenger RNA (mRNA) to build a polypeptide chain.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the two major categories of carbohydrates?",
    keywords: ["simple sugars", "complex carbohydrates"],
    explanation: "Carbohydrates can be broadly categorized into simple sugars (monosaccharides and disaccharides) and complex carbohydrates (polysaccharides).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the smooth endoplasmic reticulum (ER)?",
    keywords: ["lipid synthesis", "detoxification"],
    explanation: "The smooth ER is involved in a variety of metabolic processes, including lipid synthesis, metabolism of carbohydrates, and detoxification of drugs and poisons.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the rough endoplasmic reticulum (ER)?",
    keywords: ["protein synthesis", "ribosomes"],
    explanation: "The rough ER is studded with ribosomes and is primarily responsible for the synthesis and modification of proteins that are destined for secretion or insertion into membranes.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the Golgi apparatus?",
    keywords: ["modifies, sorts, packages proteins and lipids"],
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids for secretion or for delivery to other organelles.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are three examples of cellular organelles that are not membrane-bound?",
    keywords: ["ribosomes", "nucleolus", "cytoskeleton"],
    explanation: "Examples of non-membrane-bound organelles include ribosomes (for protein synthesis), the nucleolus (site of ribosome synthesis), and the cytoskeleton (for structural support).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference in function between the mitochondria and chloroplasts?",
    keywords: ["mitochondria: cellular respiration", "chloroplasts: photosynthesis"],
    explanation: "Mitochondria are responsible for cellular respiration, generating ATP from glucose. Chloroplasts are responsible for photosynthesis, converting light energy into chemical energy.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the centrosome?",
    keywords: ["organizes microtubules", "cell division"],
    explanation: "The centrosome is the main microtubule-organizing center of the cell and is responsible for organizing the mitotic spindle during cell division.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a centromere and a centriole?",
    keywords: ["centromere: part of chromosome", "centriole: part of centrosome"],
    explanation: "A centromere is the constricted region of a chromosome that links sister chromatids. A centriole is a cylindrical structure within an animal cell's centrosome that helps organize cell division.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a cell plate and in which type of cell does it form?",
    keywords: ["dividing plant cells", "cytokinesis", "forms new cell wall"],
    explanation: "A cell plate is a structure that forms during cytokinesis in dividing plant cells, which eventually develops into a new cell wall separating the two daughter cells.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the significance of 'crossing over' in meiosis?",
    keywords: ["genetic recombination", "genetic diversity"],
    explanation: "Crossing over is the exchange of genetic material between homologous chromosomes during meiosis, which leads to genetic recombination and increases genetic diversity among offspring.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the principle of segregation?",
    keywords: ["alleles separate", "gamete formation"],
    explanation: "According to Mendel's principle of segregation, alleles for a specific trait separate during the formation of gametes, so each gamete carries only one allele.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What are the stages of mitosis?",
    keywords: ["prophase", "metaphase", "anaphase", "telophase"],
    explanation: "The four stages of mitosis are prophase, metaphase, anaphase, and telophase.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the cell wall?",
    keywords: ["structural support", "protects the cell"],
    explanation: "The cell wall is a rigid outer layer of a plant, fungal, or prokaryotic cell that provides structural support, shape, and protection.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between an aldose and a ketose?",
    keywords: ["aldose: aldehyde group", "ketose: ketone group"],
    explanation: "An aldose is a monosaccharide with a free aldehyde group at one end, while a ketose is a monosaccharide with a ketone group, usually in the middle of the carbon chain.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the enzyme found in flower petals?",
    keywords: ["synthesis of flower color"],
    explanation: "The lecture notes specify that enzymes in flower petals are involved in the synthesis of the compounds responsible for flower color.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of transfer RNA (tRNA)?",
    keywords: ["brings amino acids", "ribosome", "protein synthesis"],
    explanation: "Transfer RNA (tRNA) is a type of RNA molecule that helps decode a messenger RNA (mRNA) sequence into a protein. It functions by bringing specific amino acids to the ribosome.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of messenger RNA (mRNA)?",
    keywords: ["carries genetic code", "DNA to ribosome"],
    explanation: "Messenger RNA (mRNA) is a type of RNA that carries the genetic code from DNA in the nucleus to the ribosomes in the cytoplasm for protein synthesis.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a nucleoid and a chromosome?",
    keywords: ["nucleoid: region in prokaryote", "chromosome: structure in eukaryote"],
    explanation: "A nucleoid is the irregular-shaped region in a prokaryotic cell where the genetic material is located. A chromosome is the tightly packed structure of DNA and proteins within a eukaryotic cell's nucleus.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the centromere?",
    keywords: ["links sister chromatids", "attaches to spindle fibers"],
    explanation: "The centromere is the region of a chromosome that links sister chromatids and serves as the attachment point for the mitotic spindle fibers during cell division.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the role of the cell plate in plant cell division?",
    keywords: ["cytokinesis", "forms new cell wall", "dividing plant cells"],
    explanation: "During cytokinesis in plant cells, a cell plate forms at the metaphase plate and grows outwards, eventually fusing with the existing plasma membrane to form a new cell wall that separates the two daughter cells.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a chromosome complement?",
    keywords: ["entire set of chromosomes", "haploid or diploid"],
    explanation: "A chromosome complement is the entire set of chromosomes possessed by an individual or a cell. This can be a haploid set (n) or a diploid set (2n).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the significance of the research by Walther Flemming?",
    keywords: ["discovered chromosomes", "cell division", "mitosis"],
    explanation: "Walther Flemming was a German anatomist who first discovered chromosomes in the nuclei of diving cells from salamander larvae and described the process of mitosis.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a homozygous genotype?",
    keywords: ["identical alleles", "BB or bb"],
    explanation: "A homozygous genotype is one where an organism has two identical alleles for a specific gene (e.g., BB or bb).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is a heterozygous genotype?",
    keywords: ["different alleles", "Bb"],
    explanation: "A heterozygous genotype is one where an organism has two different alleles for a specific gene (e.g., Bb).",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a gene and an allele?",
    keywords: ["gene: unit of inheritance", "allele: form of a gene"],
    explanation: "A gene is a segment of DNA that codes for a specific trait, while an allele is a different version or form of that gene.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the primary function of a triglyceride?",
    keywords: ["long-term energy storage"],
    explanation: "Triglycerides, or fats, are the primary form of long-term energy storage in many organisms.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "How does the structure of a steroid differ from a fatty acid?",
    keywords: ["steroid: four fused rings", "fatty acid: long hydrocarbon chain"],
    explanation: "A steroid has a characteristic carbon skeleton of four fused rings, whereas a fatty acid is a long, unbranched hydrocarbon chain with a carboxyl group at one end.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the key role of R-groups in protein structure?",
    keywords: ["side chains", "tertiary structure"],
    explanation: "The R-groups, or side chains, of amino acids determine the specific chemical properties and interactions that are crucial for the folding and overall three-dimensional shape (tertiary structure) of a protein.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference between a nucleolus and a nucleus?",
    keywords: ["nucleolus: inside nucleus", "makes ribosomes"],
    explanation: "The nucleus is the membrane-bound organelle that contains the cell's genetic material. The nucleolus is a dense structure found inside the nucleus that is responsible for synthesizing ribosomal RNA and assembling ribosomes.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the function of the cytoskeleton?",
    keywords: ["structural support", "cell shape", "movement"],
    explanation: "The cytoskeleton is a network of protein fibers that provides structural support to the cell, maintains its shape, and plays a role in cell movement and the transport of organelles.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  {
    q: "What is the difference in function between the centrioles and the centrosome?",
    keywords: ["centrosome: organizing center", "centrioles: components of centrosome"],
    explanation: "The centrosome is the primary organizing center for microtubules in the cell. The centrioles are a pair of cylindrical structures found within the centrosome that help organize the mitotic spindle during cell division.",
    topic: "MACROMOLECULES",
    term: "T1",
    course: "BI110",
    year: "Notes",
    tag: "Short"
  },
  
  //Taxonomy 
  
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the primary purpose of taxonomy?",
    "keywords": [
      "taxonomy",
      "purpose",
      "classify",
      "organisms"
    ],
    "explanation": "To describe, name, and classify organisms in a hierarchical system.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "Who is considered the 'father of taxonomy'?",
    "keywords": [
      "father",
      "taxonomy",
      "Carl Linnaeus"
    ],
    "explanation": "Carl Linnaeus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the highest and most general taxonomic rank in the modern classification system?",
    "keywords": [
      "highest",
      "general",
      "taxonomic",
      "rank",
      "domain"
    ],
    "explanation": "Domain.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What are the three domains of life?",
    "keywords": [
      "three",
      "domains",
      "life",
      "Bacteria",
      "Archaea",
      "Eukaryota"
    ],
    "explanation": "Bacteria, Archaea, and Eukaryota.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "Which domain is Eukaryota more closely related to, Archaea or Bacteria?",
    "keywords": [
      "Eukaryota",
      "closely related",
      "Archaea",
      "Bacteria"
    ],
    "explanation": "Archaea.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "In binomial nomenclature, what two taxonomic ranks make up an organism's scientific name?",
    "keywords": [
      "binomial nomenclature",
      "taxonomic ranks",
      "scientific name",
      "genus",
      "species"
    ],
    "explanation": "Genus and species.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for humans?",
    "keywords": [
      "scientific name",
      "humans",
      "Homo sapiens"
    ],
    "explanation": "Homo sapiens.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What does the Biological Species Concept (BSC) define a species as?",
    "keywords": [
      "Biological Species Concept",
      "BSC",
      "species",
      "interbreed",
      "reproductively isolated"
    ],
    "explanation": "A group of populations whose members can interbreed successfully and are reproductively isolated from other groups.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "Why is the BSC difficult to apply to bacteria?",
    "keywords": [
      "BSC",
      "difficult",
      "bacteria",
      "asexually",
      "interbreeding"
    ],
    "explanation": "Because bacteria reproduce asexually, and the concept is based on interbreeding.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the two main components of a virus?",
    "keywords": [
      "virus",
      "components",
      "nucleic acid",
      "DNA",
      "RNA",
      "protein envelope",
      "capsid"
    ],
    "explanation": "A nucleic acid (DNA or RNA) core and a protein envelope (capsid).",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is a bacteriophage?",
    "keywords": [
      "bacteriophage",
      "virus",
      "infects",
      "bacteria"
    ],
    "explanation": "A virus that infects bacteria.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the first step of a viral infection cycle?",
    "keywords": [
      "first step",
      "viral infection",
      "cycle",
      "attachment",
      "binds"
    ],
    "explanation": "Attachment, where the virus binds to a receptor on the host cell.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the 'protein ghost' in a viral infection?",
    "keywords": [
      "protein ghost",
      "viral infection",
      "empty protein shell"
    ],
    "explanation": "The empty protein shell of the virus that remains attached to the host cell wall after the nucleic acid has been injected.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the function of the enzyme 'late muramidase' in a viral infection?",
    "keywords": [
      "enzyme",
      "late muramidase",
      "function",
      "lyses",
      "host cell",
      "liberating",
      "new phage"
    ],
    "explanation": "It lyses the host cell wall, liberating new infectious phage particles.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is a key characteristic that distinguishes protists from other eukaryotes?",
    "keywords": [
      "protists",
      "distinguishes",
      "eukaryotes",
      "simple cellular organization",
      "lack of specialized tissues"
    ],
    "explanation": "Their simple cellular organization and lack of specialized tissues.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "How do protozoans obtain their food?",
    "keywords": [
      "protozoans",
      "obtain food",
      "heterotrophs",
      "consume"
    ],
    "explanation": "They are heterotrophs, meaning they consume other organisms for food.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which group of protozoans moves using 'pseudopodia'?",
    "keywords": [
      "protozoans",
      "moves",
      "pseudopodia",
      "Sarcodinians"
    ],
    "explanation": "Sarcodinians.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What are 'kelps'?",
    "keywords": [
      "kelps",
      "large brown algae"
    ],
    "explanation": "Large brown algae.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What phenomenon is caused by some species of dinoflagellates?",
    "keywords": [
      "phenomenon",
      "dinoflagellates",
      "red tide"
    ],
    "explanation": "The 'red tide' phenomenon.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the three main phyla of Archaea?",
    "keywords": [
      "three",
      "phyla",
      "Archaea",
      "Crenarchaeota",
      "Euryarchaeota",
      "Korarchaeota"
    ],
    "explanation": "Crenarchaeota, Euryarchaeota, and Korarchaeota.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the function of the bacteria that make up the human microbiota?",
    "keywords": [
      "function",
      "bacteria",
      "human microbiota",
      "digestion",
      "nutrient absorption"
    ],
    "explanation": "They perform vital functions like aiding in digestion and nutrient absorption.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is a key characteristic of cyanobacteria?",
    "keywords": [
      "characteristic",
      "cyanobacteria",
      "photosynthesis"
    ],
    "explanation": "They are capable of photosynthesis.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "How is the genus name formatted in binomial nomenclature?",
    "keywords": [
      "genus name",
      "formatted",
      "binomial nomenclature",
      "capitalized",
      "italicized"
    ],
    "explanation": "It is capitalized and italicized.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for the American toad?",
    "keywords": [
      "scientific name",
      "American toad",
      "Bufo americanus"
    ],
    "explanation": "Bufo americanus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "How do Ciliaphorans move?",
    "keywords": [
      "Ciliaphorans",
      "move",
      "cilia"
    ],
    "explanation": "With hair-like structures called cilia.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the primary role of plant-like protists in the aquatic ecosystem?",
    "keywords": [
      "primary role",
      "plant-like protists",
      "aquatic ecosystem",
      "primary producers"
    ],
    "explanation": "They are primary producers, providing food and oxygen.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What substance derived from red algae is used as a medium for growing bacteria in labs?",
    "keywords": [
      "substance",
      "red algae",
      "medium",
      "growing bacteria",
      "agar"
    ],
    "explanation": "Agar.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is 'diatomaceous earth' formed from?",
    "keywords": [
      "diatomaceous earth",
      "formed from",
      "shells",
      "fossil diatoms"
    ],
    "explanation": "The shells of fossil diatoms.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is a 'clade'?",
    "keywords": [
      "clade",
      "taxonomic group",
      "common ancestor"
    ],
    "explanation": "A taxonomic group of organisms based on homologous features derived from a common ancestor.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for the American black bear?",
    "keywords": [
      "scientific name",
      "American black bear",
      "Ursus americanus"
    ],
    "explanation": "Ursus americanus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is a 'specific epithet' in binomial nomenclature?",
    "keywords": [
      "specific epithet",
      "binomial nomenclature",
      "species name"
    ],
    "explanation": "The second part of the scientific name, which is the species name.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "How many families are in the order Carnivora?",
    "keywords": [
      "families",
      "order Carnivora",
      "12"
    ],
    "explanation": "12 families.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the plural of 'genus'?",
    "keywords": [
      "plural",
      "genus",
      "genera"
    ],
    "explanation": "Genera.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the unique motion of Spirochetes?",
    "keywords": [
      "unique motion",
      "Spirochetes",
      "twisting motion"
    ],
    "explanation": "A twisting motion.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What substance derived from brown algae is used in ice cream and lotion?",
    "keywords": [
      "substance",
      "brown algae",
      "ice cream",
      "lotion",
      "algin"
    ],
    "explanation": "Algin.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the taxonomic rank above Family?",
    "keywords": [
      "taxonomic rank",
      "above Family",
      "Order"
    ],
    "explanation": "Order.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is a 'hybrid zone'?",
    "keywords": [
      "hybrid zone",
      "overlap",
      "interbreed",
      "species"
    ],
    "explanation": "A region where two species overlap and interbreed.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the plural form of the taxonomic rank 'phylum'?",
    "keywords": [
      "plural form",
      "phylum",
      "phyla"
    ],
    "explanation": "Phyla.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is a 'protozoan'?",
    "keywords": [
      "protozoan",
      "animal-like",
      "single-celled"
    ],
    "explanation": "An animal-like single-celled organism.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What are 'algae'?",
    "keywords": [
      "algae",
      "plant-like",
      "single-celled",
      "multi-celled"
    ],
    "explanation": "Plant-like single or multi-celled organisms.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which type of protist is non-motile and parasitic?",
    "keywords": [
      "protist",
      "non-motile",
      "parasitic",
      "Sporozoans"
    ],
    "explanation": "Sporozoans.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the function of the spiral protein sheath in a T-even bacteriophage?",
    "keywords": [
      "function",
      "spiral protein sheath",
      "T-even bacteriophage",
      "retracts",
      "nucleic acid"
    ],
    "explanation": "It retracts to allow the nucleic acid to pass into the host cell's cytoplasm.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the taxonomic rank of 'Mammalia'?",
    "keywords": [
      "taxonomic rank",
      "Mammalia",
      "Class"
    ],
    "explanation": "Class.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "How does the size of a virus compare to that of a bacterium?",
    "keywords": [
      "size",
      "virus",
      "bacterium",
      "smaller"
    ],
    "explanation": "Viruses are much smaller than bacteria.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the final stage of a viral infection cycle?",
    "keywords": [
      "final stage",
      "viral infection",
      "release",
      "liberated"
    ],
    "explanation": "Release, where new viruses are liberated from the host cell.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the purpose of 'cysts' formed by some protists?",
    "keywords": [
      "purpose",
      "cysts",
      "protists",
      "survival",
      "adverse conditions"
    ],
    "explanation": "They are formed for survival during adverse environmental conditions.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the common name for the genus 'Juncus'?",
    "keywords": [
      "common name",
      "genus",
      "Juncus",
      "Rush"
    ],
    "explanation": "Rush.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "In the five-kingdom classification system, what were the two main kingdoms for plants and animals?",
    "keywords": [
      "five-kingdom",
      "classification",
      "plants",
      "animals",
      "Plantae",
      "Animalia"
    ],
    "explanation": "Plantae and Animalia.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for the gray wolf?",
    "keywords": [
      "scientific name",
      "gray wolf",
      "Canis lupus"
    ],
    "explanation": "Canis lupus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the full name of the order that contains humans?",
    "keywords": [
      "full name",
      "order",
      "humans",
      "Primates"
    ],
    "explanation": "Primates.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the taxonomic rank of 'Felidae'?",
    "keywords": [
      "taxonomic rank",
      "Felidae",
      "Family"
    ],
    "explanation": "Family.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for the common house cat?",
    "keywords": [
      "scientific name",
      "house cat",
      "Felis catus"
    ],
    "explanation": "Felis catus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "How is the species name formatted in binomial nomenclature?",
    "keywords": [
      "species name",
      "formatted",
      "binomial nomenclature",
      "lowercase",
      "italicized"
    ],
    "explanation": "It is lowercase and italicized.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the taxonomic rank of 'Sarcodina'?",
    "keywords": [
      "taxonomic rank",
      "Sarcodina",
      "Phylum"
    ],
    "explanation": "Phylum.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which group of protozoans moves using 'flagella'?",
    "keywords": [
      "group",
      "protozoans",
      "moves",
      "flagella",
      "Zooflagellates",
      "Phylum Mastigophora"
    ],
    "explanation": "Zooflagellates (Phylum Mastigophora).",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What disease does the protozoan 'Plasmodium' cause?",
    "keywords": [
      "disease",
      "protozoan",
      "Plasmodium",
      "Malaria"
    ],
    "explanation": "Malaria.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What are 'slime molds' an example of?",
    "keywords": [
      "slime molds",
      "example",
      "fungus-like protists"
    ],
    "explanation": "Fungus-like protists.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    
   
    "q": "What is the function of 'algin' derived from brown algae?",
    "keywords": [
      "function",
      "algin",
      "brown algae",
      "ice cream",
      "lotion",
      "plastics"
    ],
    "explanation": "It is used in making products like ice cream, lotion, and plastics.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is a 'ribosome'?",
    "keywords": [
      "ribosome",
      "organelle",
      "proteins",
      "made"
    ],
    "explanation": "A small organelle in a cell where proteins are made.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is a 'prokaryote'?",
    "keywords": [
      "prokaryote",
      "single-celled",
      "organism",
      "lacks nucleus"
    ],
    "explanation": "A single-celled organism that lacks a membrane-bound nucleus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is a 'eukaryote'?",
    "keywords": [
      "eukaryote",
      "organism",
      "membrane-bound nucleus"
    ],
    "explanation": "An organism that has a membrane-bound nucleus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the four kingdoms of the domain Eukarya?",
    "keywords": [
      "four kingdoms",
      "domain Eukarya",
      "Protista",
      "Fungi",
      "Plantae",
      "Animalia"
    ],
    "explanation": "Protista, Fungi, Plantae, and Animalia.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the two main types of nucleic acids found in viruses?",
    "keywords": [
      "two types",
      "nucleic acids",
      "viruses",
      "DNA",
      "RNA"
    ],
    "explanation": "DNA and RNA.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the purpose of the viral capsid?",
    "keywords": [
      "purpose",
      "viral capsid",
      "protect",
      "nucleic acid"
    ],
    "explanation": "To protect the nucleic acid core from destruction.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What happens during the 'synthesis' stage of a viral infection?",
    "keywords": [
      "synthesis stage",
      "viral infection",
      "host cell",
      "produce",
      "viral components"
    ],
    "explanation": "The host cell is directed to produce new viral components like proteins and nucleic acids.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "VIRUSES",
    "year": "Notes",
    "tag": "🦠",
    "q": "What is the function of the enzyme that perforates the bacterial cell wall during viral injection?",
    "keywords": [
      "function",
      "enzyme",
      "perforates",
      "bacterial cell wall",
      "viral injection"
    ],
    "explanation": "It allows the phage's nucleic acid to pass into the host cell's cytoplasm.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the scientific name for the American toad?",
    "keywords": [
      "scientific name",
      "American toad",
      "Bufo americanus"
    ],
    "explanation": "Bufo americanus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the definition of a 'clade'?",
    "keywords": [
      "definition",
      "clade",
      "taxonomic group",
      "common ancestor"
    ],
    "explanation": "A taxonomic group of organisms based on homologous features derived from a common ancestor.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "TAXONOMY",
    "year": "Notes",
    "tag": "🧬",
    "q": "What is the plural of 'genus'?",
    "keywords": [
      "plural",
      "genus",
      "genera"
    ],
    "explanation": "Genera.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What are 'kelps'?",
    "keywords": [
      "kelps",
      "large brown algae"
    ],
    "explanation": "Large brown algae.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the purpose of the cilia in Ciliaphorans?",
    "keywords": [
      "purpose",
      "cilia",
      "Ciliaphorans",
      "locomotion",
      "food particles"
    ],
    "explanation": "They are used for locomotion and for sweeping food particles into the organism.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is 'diatomaceous earth' used for?",
    "keywords": [
      "diatomaceous earth",
      "used for",
      "water filter",
      "abrasive",
      "sparkle"
    ],
    "explanation": "As a water filter, an abrasive, and to add sparkle to products.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "Which type of protozoan causes sleeping sickness?",
    "keywords": [
      "protozoan",
      "causes",
      "sleeping sickness",
      "Trypanosoma gambiense"
    ],
    "explanation": "Trypanosoma gambiense.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is a 'cytoplasm'?",
    "keywords": [
      "cytoplasm",
      "fluid",
      "cell",
      "excluding nucleus"
    ],
    "explanation": "The fluid inside a cell, excluding the nucleus.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROTISTS",
    "year": "Notes",
    "tag": "🔬",
    "q": "What is the role of Protista in the aquatic ecosystem?",
    "keywords": [
      "role",
      "Protista",
      "aquatic ecosystem",
      "primary producers",
      "food source"
    ],
    "explanation": "As primary producers and a major food source for other water organisms.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the two main types of cells?",
    "keywords": [
      "two types",
      "cells",
      "Prokaryotic",
      "eukaryotic"
    ],
    "explanation": "Prokaryotic cells and eukaryotic cells.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "What are the two main divisions of prokaryotes?",
    "keywords": [
      "two main divisions",
      "prokaryotes",
      "Bacteria",
      "Archaea"
    ],
    "explanation": "Bacteria and Archaea.",
    "course": "BI110",
    "term": "T2"
  },
  {
    "topic": "PROKARYOTES & CYANBACTERIA",
    "year": "Notes",
    "tag": "🦠",
    "q": "How does the reproduction of bacteria differ from most animals?",
    "keywords": [
      "reproduction",
      "bacteria",
      "differ",
      "animals",
      "asexually",
      "sexually"
    ],
    "explanation": "Bacteria reproduce asexually, while most animals reproduce sexually.",
    "course": "BI110",
    "term": "T2"
  },


{
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "Who first used the term 'Protista'?",
        "keywords": [
            "Protista",
            "term",
            "Ernst Haeckel"
        ],
        "explanation": "Ernst Haeckel",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "When was the term 'Protista' first used?",
        "keywords": [
            "Protista",
            "term",
            "date"
        ],
        "explanation": "1886",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "How does the Kingdom Protista relate to other kingdoms?",
        "keywords": [
            "Protista",
            "relation",
            "kingdoms"
        ],
        "explanation": "It forms a link between the kingdoms of plants, animals, and fungi.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "What is the primary environment for members of Protista?",
        "keywords": [
            "Protista",
            "environment",
            "habitat"
        ],
        "explanation": "They are primarily aquatic.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "How many phyla are in the Kingdom Protista?",
        "keywords": [
            "Protista",
            "phyla",
            "number"
        ],
        "explanation": "At least 16 phyla.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Kingdom Protista",
        "year": "Notes",
        "tag": "🔬",
        "q": "What are some ecological and medical roles of protists?",
        "keywords": [
            "protists",
            "roles",
            "ecological",
            "medical"
        ],
        "explanation": "Some protists, like algae, are primary producers in aquatic ecosystems, while others are responsible for serious human diseases like malaria and sleeping sickness.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What type of organisms are protists?",
        "keywords": [
            "protists",
            "type",
            "eukaryotic",
            "simple"
        ],
        "explanation": "They are simple eukaryotic organisms.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What distinguishes protists from other eukaryotes?",
        "keywords": [
            "protists",
            "eukaryotes",
            "distinguishes"
        ],
        "explanation": "Their simple cellular organization.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "How would you describe the cellular structure of protists?",
        "keywords": [
            "protists",
            "cellular structure",
            "unicellular",
            "multicellular",
            "colonial"
        ],
        "explanation": "They are unicellular, but some can be colonial or multicellular. They lack specialized tissue organization.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What do protist cells contain?",
        "keywords": [
            "protist cells",
            "nucleus",
            "organelles"
        ],
        "explanation": "They have a well-defined nucleus and membrane-bound organelles.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What are the three primary methods of locomotion for protists?",
        "keywords": [
            "protists",
            "locomotion",
            "movement",
            "flagellum",
            "cilia",
            "pseudopodia"
        ],
        "explanation": "Protists can move using a flagellum, cilia, or pseudopodia (false feet).",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "Where can protists live?",
        "keywords": [
            "protists",
            "habitat",
            "environment"
        ],
        "explanation": "In any environment that contains water, including water bodies and moist soil. Some can also live in the bodies of humans and plants.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What is the primary process for cellular respiration in protists?",
        "keywords": [
            "protists",
            "cellular respiration",
            "aerobic",
            "anaerobic"
        ],
        "explanation": "Cellular respiration is primarily an aerobic process, but some living in anaerobic conditions are strict or facultative anaerobes.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What are the modes of nutrition for protists?",
        "keywords": [
            "protists",
            "nutrition",
            "heterotrophic",
            "autotrophic"
        ],
        "explanation": "They can be both heterotrophic or autotrophic.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "How do some protists feed?",
        "keywords": [
            "protists",
            "feeding",
            "phagotrophs",
            "osmotrophs"
        ],
        "explanation": "Some protists, known as phagotrophs, pull solid food particles into intracellular food vacuoles, while others, known as osmotrophs, ingest food in soluble forms from their surroundings.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "How do protists reproduce?",
        "keywords": [
            "protists",
            "reproduction",
            "asexual",
            "sexual",
            "mitosis",
            "meiosis"
        ],
        "explanation": "They reproduce both asexually and sexually. Some reproduce by mitosis, and some can undergo meiosis for sexual reproduction. Some species have complex life cycles involving multiple organisms, such as Plasmodium.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Characteristics",
        "year": "Notes",
        "tag": "🧬",
        "q": "What do protists form in adverse conditions?",
        "keywords": [
            "protists",
            "adverse conditions",
            "cysts"
        ],
        "explanation": "They form cysts.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Protist Classification",
        "year": "Notes",
        "tag": " वर्गीकरण",
        "q": "How are protists primarily categorized?",
        "keywords": [
            "protists",
            "categorized",
            "classification",
            "protozoans",
            "algae"
        ],
        "explanation": "They are categorized into two taxons: Protozoans: animal-like single-celled organisms. Algae: plant-like single or multi-celled organisms.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What are some economic benefits of protists?",
        "keywords": [
            "protists",
            "economic benefits",
            "food",
            "commercial products",
            "medicines"
        ],
        "explanation": "They are a source of food, commercial products, and medicines.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What are some examples of commercial products derived from marine protists?",
        "keywords": [
            "protists",
            "commercial products",
            "marine",
            "algin",
            "agar",
            "carrageenan",
            "antiseptics"
        ],
        "explanation": "Algin, agar, carrageenan, and antiseptics.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "How are protists important in aquatic ecosystems?",
        "keywords": [
            "protists",
            "aquatic ecosystems",
            "primary producers",
            "food chains"
        ],
        "explanation": "Many are primary producers, playing a basic role in food chains by providing food and oxygen.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What are some examples of medicinal products from algae?",
        "keywords": [
            "algae",
            "medicinal products",
            "sodium laminaria sulphate",
            "fucoidin",
            "heparin"
        ],
        "explanation": "Sodium laminaria sulphate, Fucoidin, and Heparin, which are used as blood coagulants.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What anti-cancer compound does the protist Lyngbya produce?",
        "keywords": [
            "protist",
            "Lyngbya",
            "anti-cancer compound"
        ],
        "explanation": "Lyngbya produces an anti-cancer compound.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "How are kelps economically important?",
        "keywords": [
            "kelps",
            "economically important",
            "minerals",
            "sodium",
            "potassium",
            "iodine"
        ],
        "explanation": "They are a good source of minerals like sodium, potassium, and iodine.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What is an example of a protist used in biological research?",
        "keywords": [
            "protist",
            "biological research",
            "Chlorella"
        ],
        "explanation": "Chlorella, a unicellular, non-motile alga.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "What is diatomaceous earth, and what is it used for?",
        "keywords": [
            "diatomaceous earth",
            "uses",
            "filtration"
        ],
        "explanation": "Diatomaceous earth is a porous and chemically inert material that can be used for the filtration of oil, syrup, alcohols, and antibiotics.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Economic Importance of Protists",
        "year": "Notes",
        "tag": "💰",
        "q": "Can protists be harmful?",
        "keywords": [
            "protists",
            "harmful",
            "pathogenic",
            "diseases"
        ],
        "explanation": "Yes, some are pathogenic and can cause many diseases in humans and plants.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What are some examples of animal-like protists?",
        "keywords": [
            "animal-like protists",
            "protozoans",
            "Amoeba",
            "Paramecium"
        ],
        "explanation": "Amoeba and Paramecium are heterotrophs and predators.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What is the largest size an Amoeba can reach?",
        "keywords": [
            "Amoeba",
            "size"
        ],
        "explanation": "Up to 1 mm across.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What is the origin of the name 'Amoeba'?",
        "keywords": [
            "Amoeba",
            "name",
            "origin",
            "Greek",
            "amoibe"
        ],
        "explanation": "It's derived from the Greek word amoibe, which means 'change'.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "How does an Amoeba move?",
        "keywords": [
            "Amoeba",
            "move",
            "locomotion",
            "pseudopodia"
        ],
        "explanation": "It moves by creeping and stretching its cytoplasm into finger-like extensions called pseudopodia (meaning 'false foot').",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What are the two regions of an Amoeba's cytoplasm?",
        "keywords": [
            "Amoeba",
            "cytoplasm",
            "ectoplasm",
            "endoplasm"
        ],
        "explanation": "Ectoplasm, which is lighter and near the plasma membrane, and endoplasm, which is located towards the interior.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What are the functions of the contractile and food vacuoles in an Amoeba?",
        "keywords": [
            "Amoeba",
            "vacuoles",
            "contractile",
            "food",
            "function"
        ],
        "explanation": "Contractile vacuoles pump out excess water for water balance, while food vacuoles are for digestion.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "What disease can some Amoeba forms cause?",
        "keywords": [
            "Amoeba",
            "disease",
            "amoebic dysentery"
        ],
        "explanation": "Amoebic dysentery.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Animal-like Protists",
        "year": "Notes",
        "tag": "🦠",
        "q": "How do people get infected with amoebic dysentery?",
        "keywords": [
            "amoebic dysentery",
            "infected",
            "contaminated water"
        ],
        "explanation": "By drinking contaminated water.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Parasitic Protists (Plasmodium)",
        "year": "Notes",
        "tag": "🦟",
        "q": "What is Plasmodium?",
        "keywords": [
            "Plasmodium",
            "parasite",
            "malaria"
        ],
        "explanation": "A genus of parasitic species that causes the disease malaria.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Parasitic Protists (Plasmodium)",
        "year": "Notes",
        "tag": "🦟",
        "q": "How is malaria transmitted to humans?",
        "keywords": [
            "malaria",
            "transmitted",
            "Anopheles mosquito"
        ],
        "explanation": "All species of Plasmodium that cause malaria in humans are transmitted by a species of mosquito called Anopheles.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Parasitic Protists (Plasmodium)",
        "year": "Notes",
        "tag": "🦟",
        "q": "Why do female mosquitoes bite?",
        "keywords": [
            "female mosquitoes",
            "bite",
            "blood meal",
            "egg development"
        ],
        "explanation": "The protein content in nectar is insufficient for egg development, so a blood meal is needed.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "How does the Plasmodium life cycle begin in a human?",
        "keywords": [
            "Plasmodium",
            "life cycle",
            "human",
            "sporozoites",
            "mosquito"
        ],
        "explanation": "A female Anopheles mosquito carrying the parasite injects sporozoites into the human bloodstream when it feeds.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "What happens after the sporozoites enter the human body?",
        "keywords": [
            "sporozoites",
            "human body",
            "liver"
        ],
        "explanation": "The sporozoites travel to the liver and infect liver cells.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "What happens in the liver?",
        "keywords": [
            "liver",
            "sporozoites",
            "merozoites",
            "replicate"
        ],
        "explanation": "During a 5-16 day incubation period, the sporozoites grow, divide, and replicate into thousands of parasites called merozoites.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "Where do the merozoites go after leaving the liver?",
        "keywords": [
            "merozoites",
            "liver",
            "red blood cells"
        ],
        "explanation": "They move into the bloodstream to infect red blood cells.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "How do the merozoites reproduce in the red blood cells?",
        "keywords": [
            "merozoites",
            "reproduce",
            "asexually",
            "red blood cells",
            "illness"
        ],
        "explanation": "They divide asexually, and their repeated release from red blood cells over 1-3 days leads to thousands of parasites and causes illness.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "What sexual forms develop in the infected blood cells?",
        "keywords": [
            "sexual forms",
            "infected blood cells",
            "gametocytes"
        ],
       
      
        "explanation": "Merozoites develop into sexual forms of parasites called gametocytes.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Life Cycle of Plasmodium",
        "year": "Notes",
        "tag": "🔄",
        "q": "How is the life cycle completed?",
        "keywords": [
            "life cycle",
            "completed",
            "mosquito",
            "gametocytes",
            "sporozoites",
            "oocysts"
        ],
        "explanation": "When a mosquito bites an infected human, it ingests the gametocytes. The gametocytes develop into gametes, which fuse to form zygotes that develop into oocysts. The oocysts burst after 8-15 days, releasing new sporozoites that travel to the mosquito's salivary glands, ready to infect another person.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Plant-like Protists",
        "year": "Notes",
        "tag": "🌿",
        "q": "What are some examples of plant-like protists?",
        "keywords": [
            "plant-like protists",
            "examples",
            "Euglena",
            "algae",
            "diatoms"
        ],
        "explanation": "Euglena, algae, and diatoms.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "What domain and kingdom is Euglena classified under?",
        "keywords": [
            "Euglena",
            "domain",
            "kingdom",
            "Eukarya",
            "Protista"
        ],
        "explanation": "Domain Eukarya, Kingdom Protista.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "Where are species of Euglena found?",
        "keywords": [
            "Euglena",
            "found",
            "habitat",
            "freshwater",
            "saltwater"
        ],
        "explanation": "In fresh and salty water bodies, and they are abundant in stagnant inland water bodies.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "What kind of protist is Euglena?",
        "keywords": [
            "Euglena",
            "type",
            "unicellular",
            "flagellate"
        ],
        "explanation": "A genus of unicellular flagellate protists.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "How do some species of Euglena get nutrition?",
        "keywords": [
            "Euglena",
            "nutrition",
            "autotrophic",
            "heterotrophic"
        ],
        "explanation": "Some are autotrophic (photosynthetic) because they contain chloroplasts, while others are heterotrophic and feed like animals when they lack chloroplasts.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "How many membranes surround the chloroplasts in Euglena?",
        "keywords": [
            "Euglena",
            "chloroplasts",
            "membranes"
        ],
        "explanation": "They are typically surrounded by three membranes.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "What do the chloroplasts in Euglena contain?",
        "keywords": [
            "Euglena",
            "chloroplasts",
            "pyrenoids",
            "starch formation"
        ],
        "explanation": "They contain pyrenoids, which are spherical proteinaceous bodies involved in the formation of starch.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Euglena",
        "year": "Notes",
        "tag": "🌿",
        "q": "What form of starch do pyrenoids in Euglena synthesize?",
        "keywords": [
            "Euglena",
            "pyrenoids",
            "starch",
            "paramylon starch"
        ],
        "explanation": "They synthesize a starch-like polysaccharide called paramylon starch.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "What are some examples of fungi-like protists?",
        "keywords": [
            "fungi-like protists",
            "examples",
            "water moulds",
            "Saprolegnia"
        ],
        "explanation": "Water moulds, such as the species Saprolegnia.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "What are some characteristics of water moulds?",
        "keywords": [
            "water moulds",
            "characteristics",
            "aquatic",
            "saprobic",
            "parasitic"
        ],
        "explanation": "They are aquatic organisms, with some living in freshwater and a few in saline water. Some are saprobic, while others are parasitic.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "What diseases can parasitic water moulds cause?",
        "keywords": [
            "water moulds",
            "parasitic",
            "diseases",
            "fish gills"
        ],
        "explanation": "They can infect the gills of fish and some other aquatic animals, causing diseases.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "How do water moulds reproduce asexually?",
        "keywords": [
            "water moulds",
            "asexual reproduction",
            "sporangia",
            "zoospores"
        ],
        "explanation": "They reproduce asexually by producing sporangia which contain flagellated motile spores known as zoospores.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "What are septa in a water mould?",
        "keywords": [
            "water mould",
            "septa",
            "somatic cells",
            "reproductive structures"
        ],
        "explanation": "Septa are structures that separate the somatic cells from the reproductive structures that form in the hyphae below the sporangium.",
        "course": "BI110",
        "term": "T2"
    },
    {
        "topic": "Fungi-like Protists",
        "year": "Notes",
        "tag": "🍄",
        "q": "Based on the life cycle image, what is the sequence of sexual reproduction in a water mould?",
        "keywords": [
            "water mould",
            "sexual reproduction",
            "gametangia",
            "zygote"
        ],
        "explanation": "The sexual life cycle involves the production of male and female gametangia, which fuse to form a zygote that develops into a new organism.",
        "course": "BI110",
        "term": "T2"
    },
    //[
  {
    "topic": "Introduction to Computing",
    "year": "Notes",
    "tag": "💻",
    "q": "What is digital literacy?",
    "keywords": ["digital literacy", "knowledge", "understanding", "computers", "mobile devices", "web", "technologies", "digital world", "street smart"],
    "explanation": "Digital literacy is having a current knowledge and understanding of computers, mobile devices, the web, and related technologies. It's like being **'street smart'** in the digital world.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Introduction to Computing",
    "year": "Notes",
    "tag": "💻",
    "q": "How can you explain society's reliance on technology?",
    "keywords": ["society", "reliance", "technology", "work", "communication", "entertainment", "social interaction", "central component", "engine"],
    "explanation": "Today's society relies on technology for work, communication, entertainment, and social interaction. It's the central component that makes everything else work, similar to a car's reliance on its engine.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT",
    "year": "Notes",
    "tag": "🔒",
    "q": "How can you protect your personal information?",
    "keywords": ["protect", "personal information", "privacy", "identity theft", "safeguards", "locking", "front door"],
    "explanation": "You can protect your personal information by understanding privacy issues, such as identity theft, and using safeguards. Think of it as **locking your front door**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Technology in the Professional World",
    "year": "Notes",
    "tag": "💼",
    "q": "What is the role of technology in the professional world?",
    "keywords": ["role", "technology", "professional world", "intelligent workplaces", "mobile health", "mHealth", "super-assistant"],
    "explanation": "Technology's role in the professional world includes intelligent workplaces and mobile health trends. It acts as a **super-assistant**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Job Search Technology",
    "year": "Notes",
    "tag": "🤝",
    "q": "How can technology be used to find a career?",
    "keywords": ["technology", "find", "career", "job search", "professional online presence", "digital resume"],
    "explanation": "You can use technology to find a career by building a professional online presence, which is like a **digital resume**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Convergence",
    "year": "Notes",
    "tag": "🔄",
    "q": "What is convergence?",
    "keywords": ["convergence", "merging", "devices", "technologies", "single product", "Swiss Army knife"],
    "explanation": "Convergence is the merging of devices and technologies into a single product, like a **Swiss Army knife** 🔪.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "🌐",
    "q": "What are the legal and ethical responsibilities of a digital citizen?",
    "keywords": ["legal", "ethical", "responsibilities", "digital citizen", "acceptable use policies", "cyberbullying", "plagiarism", "good citizen", "physical town"],
    "explanation": "Legal and ethical responsibilities include understanding acceptable use policies and avoiding cyberbullying and plagiarism. A digital citizen is like a **good citizen in a physical town**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Assistive Technologies",
    "year": "Notes",
    "tag": "♿",
    "q": "What are the uses of assistive technologies?",
    "keywords": ["uses", "assistive technologies", "computing requirements", "people with limitations", "ramp", "wheelchair"],
    "explanation": "Assistive technologies are used to address computing requirements for people with limitations. It's like a **ramp for a wheelchair**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🌐",
    "q": "What is a digital citizen?",
    "keywords": ["digital citizen", "person", "uses", "internet", "digital technologies", "responsibly", "effectively"],
    "explanation": "A digital citizen is a person who uses the internet and other digital technologies responsibly and effectively.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "💻",
    "q": "What is a computer?",
    "keywords": ["computer", "electronic device", "manipulates", "information", "data", "CPU", "calculates", "processes", "understands"],
    "explanation": "A computer is an electronic device that manipulates information or data. A **C-PU** that **C**alculates, **P**rocesses, and **U**nderstands data.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "💾",
    "q": "What is memory?",
    "keywords": ["memory", "temporary", "storage", "area", "data", "instructions", "desktop"],
    "explanation": "Memory is a temporary storage area for data and instructions. It's like your **desktop**, holding what you're working on.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🕸️",
    "q": "What is the Internet?",
    "keywords": ["internet", "global network", "connecting", "computers", "millions", "giant spiderweb"],
    "explanation": "The Internet is a global network connecting millions of computers. A **giant spiderweb**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🔗",
    "q": "What is a network?",
    "keywords": ["network", "group", "two or more", "computers", "connected", "share", "resources", "information", "conversation between friends"],
    "explanation": "A network is a group of two or more computers connected to each other to share resources and information. A **conversation between friends**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📶",
    "q": "What is Wi-Fi?",
    "keywords": ["Wi-Fi", "wireless", "technology", "allows", "devices", "connect", "internet", "invisible cable"],
    "explanation": "Wi-Fi is a wireless technology that allows devices to connect to the Internet or other devices. An **invisible cable**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🖥️",
    "q": "What is a server?",
    "keywords": ["server", "computer", "device", "network", "manages", "network resources", "waiter"],
    "explanation": "A server is a computer or device on a network that manages network resources. A **waiter** serving information.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🤝",
    "q": "What is an online social network?",
    "keywords": ["online social network", "website", "users", "connect", "friends", "family", "colleagues", "digital town square"],
    "explanation": "An online social network is a website that allows users to connect with friends, family, and colleagues. A **digital town square**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📊",
    "q": "What is big data?",
    "keywords": ["big data", "large", "complex", "datasets", "difficult to process", "ocean of information"],
    "explanation": "Big data refers to large, complex datasets that are difficult to process using traditional database management tools. An **ocean of information**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📱",
    "q": "What are some ways technology impacts daily life?",
    "keywords": ["technology", "impacts", "daily life", "smart devices", "automated systems", "applications", "healthcare", "transportation"],
    "explanation": "Technology impacts daily life through smart devices, automated systems, and various applications in areas like healthcare and transportation.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📜",
    "q": "What were the first generation of computers like?",
    "keywords": ["first generation", "computers", "large", "vacuum tubes", "military", "scientific purposes"],
    "explanation": "The first generation of computers were large, used vacuum tubes, and were primarily used for military and scientific purposes.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📜",
    "q": "What were the constraints of the first generation of computers?",
    "keywords": ["constraints", "first generation", "computers", "size", "cost", "lack of portability"],
    "explanation": "First-generation computers were limited by their size, cost, and a lack of portability.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🍎",
    "q": "What was the Apple II, and who introduced it?",
    "keywords": ["Apple II", "popular", "personal computer", "introduced", "Apple Inc.", "1977"],
    "explanation": "The Apple II was a popular personal computer introduced by Apple Inc. in 1977.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🔌",
    "q": "What is the Internet of Things (IoT)?",
    "keywords": ["Internet of Things", "IoT", "network", "physical objects", "embedded", "sensors", "software", "exchange data", "smart home"],
    "explanation": "The **Internet of Things (IoT)** is a network of physical objects embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the internet. A **smart home**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "💡",
    "q": "Why are IoT-enabled devices often referred to as smart devices?",
    "keywords": ["IoT-enabled devices", "smart devices", "collect", "process", "act on data", "surroundings"],
    "explanation": "IoT-enabled devices are called 'smart devices' because they can collect, process, and act on data from their surroundings.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🧠",
    "q": "What are embedded computers, and what do they do?",
    "keywords": ["embedded computers", "special-purpose", "part of a larger device", "car", "home appliance", "medical instrument", "brain of a car"],
    "explanation": "Embedded computers are special-purpose computers that are part of a larger device or system, such as a car, home appliance, or medical instrument. The **brain of a car**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "💳",
    "q": "How are automated teller machines (ATMs) related to the IoT?",
    "keywords": ["ATMs", "automated teller machines", "IoT", "networked devices", "collect data", "transmit data", "central server"],
    "explanation": "ATMs can be considered part of the **IoT** because they are networked devices that collect and transmit data to a central server.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🏠",
    "q": "What are some daily tasks that IoT can help with?",
    "keywords": ["daily tasks", "IoT", "home security", "smart appliances", "fitness goals"],
    "explanation": "IoT can help with daily tasks like monitoring home security, controlling smart appliances, and tracking fitness goals.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "🏭",
    "q": "How can manufacturing, retail, and shipping companies use technology?",
    "keywords": ["manufacturing", "retail", "shipping", "companies", "use", "technology", "automation", "supply chain management", "logistics optimization"],
    "explanation": "Manufacturing, retail, and shipping companies use technology for automation, supply chain management, and logistics optimization.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "⚕️",
    "q": "How can a healthcare provider use IoT?",
    "keywords": ["healthcare provider", "use", "IoT", "monitor patients", "remotely", "track medical equipment", "manage hospital operations"],
    "explanation": "A healthcare provider can use IoT to monitor patients remotely, track medical equipment, and manage hospital operations.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📉",
    "q": "What is the digital divide?",
    "keywords": ["digital divide", "gap", "individuals", "households", "regions", "access", "information", "communication technologies", "ICT", "paved and dirt driveways"],
    "explanation": "The **digital divide** is the gap between individuals, households, and regions that have access to information and communication technologies (ICT) and those that do not. A road with both **paved and dirt driveways**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts You",
    "year": "Notes",
    "tag": "📉",
    "q": "What factors contribute to the digital divide?",
    "keywords": ["factors", "contribute", "digital divide", "income", "education level", "geographic location"],
    "explanation": "Factors that contribute to the digital divide include income, education level, and geographic location.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Protect Your Privacy",
    "year": "Notes",
    "tag": "🔒",
    "q": "What is privacy?",
    "keywords": ["privacy", "right", "left alone", "control", "personal information", "personal bubble"],
    "explanation": "Privacy is the right to be left alone and to control your personal information. Your **personal bubble**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Protect Your Privacy",
    "year": "Notes",
    "tag": "🦹",
    "q": "What is identity theft?",
    "keywords": ["identity theft", "stealing", "using", "another person's", "personal information", "without consent", "thief pretending to be you"],
    "explanation": "Identity theft is the act of stealing and using another person's personal information without their consent. A **thief pretending to be you**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Protect Your Privacy",
    "year": "Notes",
    "tag": "🚨",
    "q": "What can happen to a victim of identity theft?",
    "keywords": ["victim", "identity theft", "suffer", "financial losses", "damaged credit", "negative consequences"],
    "explanation": "A victim of identity theft can suffer financial losses, damaged credit, and other negative consequences.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Protect Your Privacy",
    "year": "Notes",
    "tag": "🕵️",
    "q": "How is personal information stolen?",
    "keywords": ["personal information", "stolen", "phishing", "data breaches", "social engineering"],
    "explanation": "Personal information can be stolen through various methods, including phishing, data breaches, and social engineering.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Protect Your Privacy",
    "year": "Notes",
    "tag": "🛡️",
    "q": "What safeguards can be used to protect your privacy?",
    "keywords": ["safeguards", "protect", "privacy", "strong passwords", "cautious", "sharing information", "monitoring financial accounts"],
    "explanation": "Safeguards to protect your privacy include using strong passwords, being cautious about sharing information online, and monitoring your financial accounts.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "💼",
    "q": "What is an intelligent workplace?",
    "keywords": ["intelligent workplace", "work environment", "technology", "automate tasks", "improve collaboration", "smart home", "business"],
    "explanation": "An **intelligent workplace** is a work environment that uses technology to automate tasks and improve collaboration. A **smart home, but for a business**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "🏢",
    "q": "How can companies, schools, and students use technology?",
    "keywords": ["companies", "schools", "students", "use technology", "communication", "collaboration", "online learning", "research", "assignments"],
    "explanation": "Companies can use technology for communication and collaboration, schools can use it for online learning, and students can use it for research and assignments.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "🏫",
    "q": "How can a college or university use a learning management system?",
    "keywords": ["college", "university", "learning management system", "LMS", "manage course materials", "track student progress", "facilitate communication", "Learning Master System"],
    "explanation": "A college or university can use a **learning management system (LMS)** to manage course materials, track student progress, and facilitate communication between students and instructors. An **LMS** is a **L**earning **M**aster **S**ystem.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "🩺",
    "q": "What is the mobile health (mHealth) trend?",
    "keywords": ["mobile health", "mHealth", "trend", "use", "mobile devices", "applications", "healthcare services"],
    "explanation": "The **mobile health (mHealth)** trend involves the use of mobile devices and applications to provide healthcare services.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "🖨️",
    "q": "How does healthcare use 3-D printers?",
    "keywords": ["healthcare", "use", "3-D printers", "create", "custom prosthetics", "surgical models", "medical devices", "baker's piping bag", "plastic"],
    "explanation": "Healthcare uses **3-D printers** to create custom prosthetics, surgical models, and medical devices. A **baker's piping bag** for plastic.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "📞",
    "q": "What is telemedicine?",
    "keywords": ["telemedicine", "use", "technology", "remote", "healthcare services", "video consultations", "remote patient monitoring", "telephone", "television screen"],
    "explanation": "Telemedicine is the use of technology to provide remote healthcare services, such as video consultations and remote patient monitoring. Medicine from a **tele**phone or a television screen.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "🚚",
    "q": "How is technology used in the transportation industry?",
    "keywords": ["technology", "used", "transportation industry", "navigation", "logistics", "fleet management"],
    "explanation": "Technology is used in the transportation industry for navigation, logistics, and fleet management.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "⚙️",
    "q": "How do manufacturers use computer-aided manufacturing (CAM)?",
    "keywords": ["manufacturers", "use", "computer-aided manufacturing", "CAM", "automate", "manufacturing process", "improve efficiency", "Computers Automating Manufacturing"],
    "explanation": "Manufacturers use **computer-aided manufacturing (CAM)** to automate the manufacturing process and improve efficiency. **C**omputers **A**utomating **M**anufacturing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Technology Impacts the Professional World",
    "year": "Notes",
    "tag": "💼",
    "q": "How can you use technology to find a job?",
    "keywords": ["use technology", "find a job", "online resume", "search", "job openings", "online", "networking", "professionals", "social media", "LinkedIn"],
    "explanation": "You can use technology to find a job by building an online resume, searching for job openings online, and networking with professionals on social media platforms like LinkedIn.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to Use Technology in Your Job Search",
    "year": "Notes",
    "tag": "💼",
    "q": "Why is a professional online presence important for a job search?",
    "keywords": ["professional online presence", "important", "job search", "potential employers", "find", "evaluate", "candidate"],
    "explanation": "A professional online presence is important for a job search because it allows potential employers to find and evaluate you as a candidate.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to Use Technology in Your Job Search",
    "year": "Notes",
    "tag": "🤝",
    "q": "What is LinkedIn?",
    "keywords": ["LinkedIn", "professional networking site", "create professional profile", "connect", "other professionals", "search for jobs", "Facebook for professionals"],
    "explanation": "**LinkedIn** is a professional networking site that allows users to create a professional profile, connect with other professionals, and search for jobs. **Facebook for professionals**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to Use Technology in Your Job Search",
    "year": "Notes",
    "tag": "📸",
    "q": "What tips should you consider when creating an online presence?",
    "keywords": ["tips", "creating", "online presence", "professional profile picture", "highlighting skills", "experience", "engaging", "industry"],
    "explanation": "When creating an online presence, you should consider using a professional profile picture, highlighting your skills and experience, and engaging with others in your industry.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "🖥️",
    "q": "How does a computer work?",
    "keywords": ["computer", "works", "input", "processing", "storing", "producing", "output", "IPSO"],
    "explanation": "A computer works by taking input, processing it, storing it, and producing output. **IPSO**: **I**nput, **P**rocessing, **S**torage, **O**utput.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "📱",
    "q": "What is software, a program, or an app?",
    "keywords": ["software", "program", "app", "set of instructions", "tells the computer what to do", "recipe"],
    "explanation": "**Software**, a program, or an app is a set of instructions that tells the computer what to do. A **recipe**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "🔄",
    "q": "What is convergence?",
    "keywords": ["convergence", "merging", "devices", "technologies", "single product"],
    "explanation": "Convergence is the merging of devices and technologies into a single product.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "💻",
    "q": "What is a laptop, a tablet, an eBook reader, a desktop, a mobile device, and a smartphone?",
    "keywords": ["laptop", "tablet", "eBook reader", "desktop", "mobile device", "smartphone", "electronic devices", "portability", "functionality"],
    "explanation": "These are all different types of electronic devices with varying levels of portability and functionality. A laptop is a portable computer, a tablet is a slate-like device, an eBook reader is for reading digital books, a desktop is a non-portable computer, a mobile device is a small portable computing device, and a smartphone is a mobile phone with advanced computing capabilities.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "🎧",
    "q": "What are earbuds?",
    "keywords": ["earbuds", "small audio devices", "fit directly into the ear"],
    "explanation": "Earbuds are small audio devices that fit directly into the ear.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "📸",
    "q": "What is a digital camera and a digital media player?",
    "keywords": ["digital camera", "digital media player", "device", "capturing", "photos", "videos", "playing back", "audio", "video files"],
    "explanation": "A digital camera is a device for capturing digital photos and videos, and a digital media player is a device for playing back audio and video files.",
    "course": "CS110",
    "term": "T1"
  },
   
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "🎬",
    "q": "What is streaming?",
    "keywords": ["streaming", "process", "transmitting", "receiving", "data", "continuously", "network", "internet", "faucet", "data"],
    "explanation": "Streaming is the process of transmitting and receiving data continuously over a network, such as the internet. A **faucet** of data.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "⌚",
    "q": "What is a wearable device?",
    "keywords": ["wearable device", "electronic device", "worn on the body", "smartwatch", "fitness tracker"],
    "explanation": "A **wearable device** is an electronic device that can be worn on the body, such as a smartwatch or fitness tracker.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How Convergence Impacts Technology",
    "year": "Notes",
    "tag": "⌚",
    "q": "What is an activity tracker, a smartwatch, a game console, and a handheld game device?",
    "keywords": ["activity tracker", "smartwatch", "game console", "handheld game device", "wearable", "gaming", "device", "tracks physical activity", "smart features", "home entertainment", "portable"],
    "explanation": "An activity tracker is a wearable device that tracks your physical activity, a smartwatch is a wearable watch with smart features, a game console is a home entertainment device for playing video games, and a handheld game device is a portable device for playing video games.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "🌐",
    "q": "What is the difference between a digitally literate person and a digital citizen?",
    "keywords": ["difference", "digitally literate person", "digital citizen", "skills", "use technology", "responsibly", "ethically"],
    "explanation": "A digitally literate person has the skills to use technology, while a digital citizen is a person who uses technology responsibly and ethically.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "💬",
    "q": "What is netiquette?",
    "keywords": ["netiquette", "rules", "polite behavior", "Internet", "network etiquette"],
    "explanation": "**Netiquette** is the set of rules for polite behavior on the Internet. **Net**work **etiquette**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "⚖️",
    "q": "What is digital ethics?",
    "keywords": ["digital ethics", "principles", "guide", "responsible use", "digital technologies"],
    "explanation": "Digital ethics is the set of principles that guide the responsible use of digital technologies.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "😠",
    "q": "What is cyberbullying?",
    "keywords": ["cyberbullying", "use", "electronic communication", "harass", "threaten", "another person", "bully", "megaphone"],
    "explanation": "**Cyberbullying** is the use of electronic communication to harass or threaten another person. A bully with a **megaphone**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "🚗",
    "q": "What is distracted driving?",
    "keywords": ["distracted driving", "act", "driving", "engaging", "other activities", "texting", "talking on the phone"],
    "explanation": "**Distracted driving** is the act of driving while engaging in other activities, such as texting or talking on the phone.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "📝",
    "q": "What are Acceptable Use Policies (AUPs)?",
    "keywords": ["Acceptable Use Policies", "AUPs", "rules", "govern", "use", "computer network", "system", "Agreement for Using Policy"],
    "explanation": "**Acceptable Use Policies (AUPs)** are rules that govern the use of a computer network or system. **A**greement for **U**sing **P**olicy.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "🚫",
    "q": "What is plagiarism?",
    "keywords": ["plagiarism", "act", "using", "someone else's work", "ideas", "without proper attribution", "stealing words"],
    "explanation": "**Plagiarism** is the act of using someone else's work or ideas without proper attribution. **Stealing** words and ideas.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "♻️",
    "q": "What is green computing?",
    "keywords": ["green computing", "practice", "using", "computing resources", "environmentally friendly", "environmentalist for technology"],
    "explanation": "**Green computing** is the practice of using computing resources in an environmentally friendly way. Being an **environmentalist for technology**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "♻️",
    "q": "How can you avoid electronic waste and practice green computing?",
    "keywords": ["avoid", "electronic waste", "practice", "green computing", "recycling", "old devices", "extending life", "energy-efficient devices"],
    "explanation": "You can avoid electronic waste and practice green computing by recycling old devices, extending the life of your devices, and using energy-efficient devices.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Digital Citizenship",
    "year": "Notes",
    "tag": "♻️",
    "q": "What measures can organizations implement to reduce electrical waste?",
    "keywords": ["measures", "organizations", "implement", "reduce", "electrical waste", "energy-efficient devices", "recycling electronics", "power down computers"],
    "explanation": "Organizations can implement measures like using energy-efficient devices, recycling electronics, and encouraging employees to power down their computers when not in use.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "♿",
    "q": "Why is there a need to address computing requirements for those with limitations?",
    "keywords": ["need", "address", "computing requirements", "people with limitations", "ensure", "equal access", "technology", "information"],
    "explanation": "There is a need to address computing requirements for those with limitations to ensure everyone has equal access to technology and information.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "♿",
    "q": "What is accessibility?",
    "keywords": ["accessibility", "practice", "making", "digital products", "services", "usable", "people with disabilities", "ramp", "staircase"],
    "explanation": "**Accessibility** is the practice of making digital products and services usable by people with disabilities. A **ramp for a staircase**.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "♿",
    "q": "What is assistive technology?",
    "keywords": ["assistive technology", "type", "technology", "used", "people with disabilities", "perform tasks"],
    "explanation": "**Assistive technology** is a type of technology used by people with disabilities to perform tasks that would otherwise be difficult or impossible.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "👀",
    "q": "How can screen settings and screen readers help visually impaired people?",
    "keywords": ["screen settings", "screen readers", "help", "visually impaired", "adjusting display", "reading aloud", "content"],
    "explanation": "Screen settings and screen readers can help visually impaired people by adjusting the display and reading aloud the content on the screen.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "👂",
    "q": "How can hearing-impaired people use technology?",
    "keywords": ["hearing-impaired", "use", "technology", "captioned videos", "text-based communication services"],
    "explanation": "Hearing-impaired people can use technology like captioned videos and text-based communication services.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "🖐️",
    "q": "What technologies can help people with limited hand mobility?",
    "keywords": ["technologies", "help", "limited hand mobility", "voice-activated software", "specialized keyboards"],
    "explanation": "Technologies that can help people with limited hand mobility include voice-activated software and specialized keyboards.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "🧠",
    "q": "What technologies can help users with intellectual disabilities?",
    "keywords": ["technologies", "help", "users", "intellectual disabilities", "simplified interfaces", "visual aids"],
    "explanation": "Technologies that can help users with intellectual disabilities include simplified interfaces and visual aids.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Assistive Technologies",
    "year": "Notes",
    "tag": "⚖️",
    "q": "What are the legal requirements for providing assistive technologies?",
    "keywords": ["legal requirements", "providing", "assistive technologies", "laws", "Americans with Disabilities Act", "ADA", "mandates", "accessible digital content"],
    "explanation": "Legal requirements for providing assistive technologies may include laws like the Americans with Disabilities Act (ADA), which mandates that organizations provide accessible digital content.",
    "course": "CS110",
    "term": "T1"
  },//[
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "🖥️",
    "q": "What is hardware?",
    "keywords": [
      "hardware",
      "device",
      "components",
      "wires",
      "cases",
      "switches",
      "electronic circuits"
    ],
    "explanation": "Hardware refers to the device itself and its components, such as wires, cases, switches, and electronic circuits. Components of computer hardware include memory, storage devices, the CPU, input and output devices, and communication devices.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "🧠",
    "q": "What is a processor core and a multi-core processor?",
    "keywords": [
      "processor core",
      "multi-core processor",
      "execute instructions",
      "circuitry"
    ],
    "explanation": "A processor core is a unit on the processor with the circuitry necessary to execute instructions. A processor with multiple cores is a multi-core processor. Processors with more cores perform better.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "💾",
    "q": "What is a swap file?",
    "keywords": [
      "swap file",
      "paging file",
      "virtual memory",
      "hard drive",
      "RAM",
      "performance"
    ],
    "explanation": "A swap file, or paging file, is the area of the hard drive temporarily used to store data that cannot fit in RAM. Using virtual memory may decrease your computer's performance.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "💾",
    "q": "What is the difference between RAM and ROM?",
    "keywords": [
      "RAM",
      "ROM",
      "temporary storage",
      "permanent storage",
      "volatile memory",
      "non-volatile memory",
      "firmware",
      "motherboard",
      "BIOS"
    ],
    "explanation": "RAM is a temporary, volatile memory used for temporary storage and is stored on chips connected to the motherboard. ROM is a permanent, non-volatile memory stored on a chip containing BIOS connected to the motherboard. The instructions on the ROM chip are referred to as firmware.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "💾",
    "q": "What are the different types of RAM?",
    "keywords": [
      "types of RAM",
      "DRAM",
      "Static RAM",
      "Magneto-resistive RAM",
      "Flash memory",
      "volatile",
      "non-volatile"
    ],
    "explanation": "Types of RAM include Dynamic RAM (DRAM), Static RAM, Magneto-resistive RAM, and Flash memory. DRAM and Static RAM are volatile, while Magneto-resistive RAM and Flash memory are non-volatile.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "💻",
    "q": "What is a form factor?",
    "keywords": [
      "form factor",
      "shape",
      "size",
      "desktop",
      "all-in-one",
      "laptop",
      "tablet"
    ],
    "explanation": "The form factor refers to the shape and size of the computer. Various types of computers exist, including desktop computers, all-in-one computers, laptops, and tablets.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "📱",
    "q": "What are the different types of tablets?",
    "keywords": [
      "tablet",
      "slate tablet",
      "convertible tablet",
      "form factor"
    ],
    "explanation": "Two popular form factors of tablets are slate and convertible. A slate tablet resembles a letter-sized pad and does not contain a physical keyboard, while a convertible tablet has a screen on its lid and a keyboard on its base.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "Notes",
    "tag": "🖨️",
    "q": "What are some examples of input and output devices?",
    "keywords": [
      "input devices",
      "output devices",
      "scanner",
      "printer",
      "voice synthesizer",
      "projector"
    ],
    "explanation": "A scanner is an input device that converts an existing paper image into an electronic file. A printer creates hard copy output on paper, film, and other media. A voice synthesizer converts text to speech. A projector can display output from a computer on a large surface.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "Notes",
    "tag": "🖨️",
    "q": "What are the different types of printers?",
    "keywords": [
      "types of printers",
      "inkjet printer",
      "laser printer",
      "multifunction device",
      "mobile printer",
      "plotter",
      "3-D printer"
    ],
    "explanation": "There are different types of printers, including Inkjet (sprays ink), Laser (uses a laser beam and toner), Multifunction (also an all-in-one device for copying, scanning, faxing, and printing), Mobile (small and lightweight for mobile devices), Plotter (large-format for high-quality drawings), and 3-D (creates objects from computer models).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "🔌",
    "q": "What is a Plug-and-Play device and a device driver?",
    "keywords": [
      "Plug-and-Play",
      "device driver",
      "program",
      "connect",
      "install"
    ],
    "explanation": "A Plug-and-Play device is a device that will begin functioning properly as soon as it is connected to your computer. A device driver is a program that allows your computer or device to issue controls to a separate device, such as a printer or monitor.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Hardware (Evaluating Hardware: For Home and Work)",
    "year": "Notes",
    "tag": "⏱️",
    "q": "How is processor speed measured?",
    "keywords": [
      "processor speed",
      "clock speed",
      "cycle",
      "instructions per cycle",
      "benchmark",
      "CPU"
    ],
    "explanation": "The processor's clock speed measures the speed at which it can execute instructions. A cycle is the smallest unit of time a process can measure, and the efficiency of a CPU is measured by instructions per cycle. A benchmark is a test to determine processor speed and other performance factors.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Reducing Hardware Risks",
    "year": "Notes",
    "tag": "🛡️",
    "q": "How can you protect against hardware risks?",
    "keywords": [
      "hardware risks",
      "hardware theft",
      "cable lock",
      "uninterruptible power supply",
      "UPS",
      "surge suppressor",
      "power fluctuations"
    ],
    "explanation": "To prevent theft, use a cable lock on laptops and keep mobile devices out of sight in high-crime areas. You can also use a can of compressed air to clean your keyboard or a damp cloth to gently clean your screen. An uninterruptible power supply (UPS) maintains power to equipment during an interruption, while a surge suppressor prevents power fluctuations from damaging electronic components.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Reducing Hardware Risks",
    "year": "Notes",
    "tag": "⚡",
    "q": "What are the different types of electrical changes?",
    "keywords": [
      "electrical changes",
      "blackout",
      "brownout",
      "spike",
      "surge",
      "noise"
    ],
    "explanation": "The different types of electrical changes are: a Blackout (total loss of power), a Brownout (a drop in voltage), a Spike (a very short voltage increase), a Surge (a short voltage increase), and Noise (unwanted high-frequency energy).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Secure IT: Reducing Hardware Risks",
    "year": "Notes",
    "tag": "🗄️",
    "q": "Why are data backups important?",
    "keywords": [
      "data backups",
      "protect",
      "hardware malfunctions",
      "user errors",
      "software corruption",
      "natural disasters",
      "cyber attacks"
    ],
    "explanation": "Data backups can protect against hardware malfunctions, user errors, software corruption, natural disasters, and cyber attacks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Storage Solutions",
    "year": "Notes",
    "tag": "☁️",
    "q": "What is the difference between internal, external, and cloud storage?",
    "keywords": [
      "internal storage",
      "external storage",
      "cloud storage",
      "hard drive",
      "remote server"
    ],
    "explanation": "Internal hard drives are installed on the computer you are using. An external hard drive can be used to add storage capacity to your computer. Cloud storage involves storing electronic files on a remote server connected to the Internet.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Network Hardware",
    "year": "Notes",
    "tag": "📶",
    "q": "What is a hub, a switch, and a router?",
    "keywords": ["hub", "switch", "router", "network hardware", "networks"],
    "explanation": "A hub is a device that provides a central point for cables in a network and transfers all data to all devices. A switch is similar to a hub but provides a central point for cables in a network. A router is a device that connects two or more networks and directs the flow of information along the networks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Network Hardware",
    "year": "Notes",
    "tag": "📞",
    "q": "What is the difference between a cable modem and a DSL modem?",
    "keywords": [
      "modem",
      "cable modem",
      "DSL modem",
      "digital data",
      "cable TV connection",
      "telephone wiring"
    ],
    "explanation": "A cable modem sends and receives digital data over a cable TV connection, while a DSL modem uses existing standard copper telephone wiring to send and receive digital data.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Inside the Case",
    "year": "Notes",
    "tag": "❄️",
    "q": "What are some ways to cool a processor?",
    "keywords": [
      "processor cooling",
      "heat sink",
      "liquid cooling technology",
      "cooling pad",
      "dissipate heat"
    ],
    "explanation": "Heat sinks, liquid cooling technologies, and cooling pads are used to help dissipate processor heat. A heat sink is a small component with fins that absorbs and disperses heat. Liquid cooling technology uses a continuous flow of fluid to transfer heat away. A cooling pad rests below a laptop to prevent overheating.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Inside the Case",
    "year": "Notes",
    "tag": "⚡",
    "q": "What is a computer chip?",
    "keywords": [
      "computer chip",
      "semiconducting material",
      "integrated circuits",
      "silicon"
    ],
    "explanation": "A computer chip is a small piece of semiconducting material, usually silicon, on which integrated circuits are etched. An integrated circuit contains many microscopic pathways capable of carrying electrical current.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Inside the Case",
    "year": "Notes",
    "tag": "🔄",
    "q": "What are the steps of a machine cycle?",
    "keywords": [
      "machine cycle",
      "fetching",
      "decoding",
      "executing",
      "storing",
      "processor"
    ],
    "explanation": "A machine cycle is a set of four basic operations a processor repeats. The steps are: Fetching (obtaining a program or an application instruction from memory), Decoding (translating the instructions into signals the computer can execute), Executing (carrying out the commands), and Storing (writing the result to memory).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to: Protect Yourself When Using Devices",
    "year": "Notes",
    "tag": "🤕",
    "q": "What is a Repetitive Strain Injury (RSI)?",
    "keywords": [
      "Repetitive Strain Injury",
      "RSI",
      "aches",
      "pains",
      "muscles",
      "nerves",
      "tendons",
      "ligaments"
    ],
    "explanation": "A Repetitive Strain Injury (RSI) is a condition that causes aches and pains in muscles, nerves, tendons, and ligaments due to repeated and long-term usage of technology devices.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to: Protect Yourself When Using Devices",
    "year": "Notes",
    "tag": "🪑",
    "q": "What is ergonomics?",
    "keywords": [
      "ergonomics",
      "applied science",
      "design",
      "arrangement",
      "efficiently",
      "safely"
    ],
    "explanation": "Ergonomics is an applied science that specifies the design and arrangement of items that you use so that you and the items interact efficiently and safely.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to: Protect Yourself When Using Devices",
    "year": "Notes",
    "tag": "📱",
    "q": "What is technology addiction and what are other behavioral risks?",
    "keywords": [
      "technology addiction",
      "behavioral risks",
      "obsessed",
      "sedentary lifestyle",
      "psychological development",
      "social interaction"
    ],
    "explanation": "Technology addiction occurs when a user is obsessed with using a technology device. Other behavioral risks include a sedentary lifestyle, issues with psychological development, and social interaction problems.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "How to: Protect Yourself When Using Devices",
    "year": "Notes",
    "tag": "😠",
    "q": "What is doxing, cyber-bullying, and cyber-stalking?",
    "keywords": [
      "doxing",
      "cyber-bullying",
      "cyber-stalking",
      "harass",
      "threaten",
      "private information",
      "stalk"
    ],
    "explanation": "Doxing is a form of cyber-bullying where documents with a person's private information are shared digitally. Cyber-bullying is when people use electronic communication to harass or threaten another person. Cyber-stalking is the use of technology to stalk someone through email, text messages, phone calls, and other communication methods.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Dispose of Hardware Responsibly",
    "year": "Notes",
    "tag": "♻️",
    "q": "What is e-waste and how should it be handled?",
    "keywords": [
      "e-waste",
      "electronic waste",
      "toxic metals",
      "recycling",
      "donating",
      "disposal"
    ],
    "explanation": "E-waste is electronic waste from discarded digital devices that often contains toxic metals, such as lead and mercury. Responsible methods for disposing of e-waste include sending it to a recycling facility, donating it to a charity, or bringing it to a technology store or firm.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Ethics and Issues: Dispose of Hardware Responsibly",
    "year": "Notes",
    "tag": "♻️",
    "q": "What are the action steps for Sustainable Electronics Management (SEM)?",
    "keywords": [
      "Sustainable Electronics Management",
      "SEM",
      "e-waste",
      "action steps",
      "Buy Green",
      "Donate",
      "Recycle"
    ],
    "explanation": "Sustainable Electronics Management (SEM) is an initiative that promotes the reduction of e-waste. The action steps are: Buy Green (purchase sustainably designed products), Donate (give used but functional equipment to a school or charity), and Recycle (send equipment to a verified recycling center).",
    "course": "CS110",
    "term": "T1"
  },
  //[
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "EBCDIC stands for? (2012 Test One (1))",
    "keywords": [
      "EBCDIC",
      "Extended Binary Coded Decimal Interchange Code",
      "character encoding",
      "IBM mainframe"
    ],
    "explanation": "EBCDIC is an 8-bit character encoding used mainly on IBM mainframe operating systems.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "BCD is? (2012 Test One (1))",
    "keywords": [
      "BCD",
      "Binary Coded Decimal",
      "four-digit binary code",
      "numerals"
    ],
    "explanation": "BCD is a system of writing numerals that assigns a four-digit binary code to each decimal digit.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "ASCII stands for? (2012 Test One (1))",
    "keywords": [
      "ASCII",
      "American Standard Code for Information Interchange",
      "character encoding standard",
      "electronic communication"
    ],
    "explanation": "ASCII is a character encoding standard for electronic communication.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following is first generation of computer? (2012 Test One (1))",
    "keywords": [
      "first generation computer",
      "EDSAC",
      "vacuum tubes"
    ],
    "explanation": "EDSAC (Electronic Delay Storage Automatic Calculator) was an early British computer that used vacuum tubes, characteristic of the first generation.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Chief component of first generation computer was? (2012 Test One (1))",
    "keywords": [
      "first generation computer",
      "chief component",
      "Vacuum Tubes and Valves",
      "magnetic drums"
    ],
    "explanation": "First-generation computers used vacuum tubes for circuitry and magnetic drums for memory.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "FORTRAN is? (2012 Test One (1))",
    "keywords": [
      "FORTRAN",
      "Formula Translation",
      "programming language",
      "scientific computing"
    ],
    "explanation": "FORTRAN is a programming language especially suited to numeric computation and scientific computing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What was the name of the first commercially available microprocessor chip? (2012 Test One (1))",
    "keywords": [
      "first microprocessor",
      "Intel 4004",
      "microprocessor chip",
      "1971"
    ],
    "explanation": "The Intel 4004 was a 4-bit microprocessor released by Intel in 1971. It was the first commercially available microprocessor.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Second Generation computers were developed during? (2012 Test One (1))",
    "keywords": [
      "Second Generation computers",
      "1956 to 1965",
      "transistors"
    ],
    "explanation": "Second-generation computers used transistors, developed during this period, in place of vacuum tubes.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The computer size was very large in? (2012 Test One (1))",
    "keywords": [
      "computer size",
      "First Generation",
      "vacuum tubes"
    ],
    "explanation": "First-generation computers, which used vacuum tubes, were very large and took up entire rooms.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Microprocessors as switching devices are for which generation computers? (2012 Test One (1))",
    "keywords": [
      "Microprocessors",
      "switching devices",
      "Fourth Generation",
      "single chip"
    ],
    "explanation": "The fourth generation of computers saw the development of the microprocessor, which brought the CPU to a single chip.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Modern Computer are very reliable but they are not? (2012 Test One (1))",
    "keywords": [
      "Modern Computer",
      "reliable",
      "infallible",
      "errors"
    ],
    "explanation": "While computers are reliable, they are not infallible and are still susceptible to errors and failures.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What is the name of the display feature that highlights are of the screen which requires operator attention? (2012 Test One (1))",
    "keywords": [
      "display feature",
      "highlights",
      "Reverse video",
      "inverts colors"
    ],
    "explanation": "Reverse video is a screen feature that inverts the colors of a specified area to make it stand out.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Personal computers use a number of chips mounted on a main circuit board. What is the common name for such boards? (2012 Test One (1))",
    "keywords": [
      "Personal computers",
      "chips",
      "main circuit board",
      "Motherboard",
      "CPU",
      "memory"
    ],
    "explanation": "The motherboard is the main circuit board of a personal computer, containing the CPU, memory, and connectors for other peripherals.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "In most IBM PCs, the CPU, the device drives, memory expansion slots and active components are mounted on a single board. What is the name of this board? (2012 Test One (1))",
    "keywords": [
      "IBM PCs",
      "CPU",
      "device drives",
      "memory expansion slots",
      "Motherboard"
    ],
    "explanation": "This is a direct definition of a motherboard, which houses the central components of a computer.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What is meant by a dedicated computer? (2012 Test One (1))",
    "keywords": [
      "dedicated computer",
      "single function",
      "server",
      "firewall",
      "router"
    ],
    "explanation": "A dedicated computer is a system that performs a single, specific function, such as a server, firewall, or router.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The system unit of a personal computer typically contains all of the following except:? (2012 Test One (1))",
    "keywords": [
      "system unit",
      "personal computer",
      "Microprocessor",
      "Disk controller",
      "Serial interface",
      "Modem",
      "external device"
    ],
    "explanation": "A modem is an external or internal device that allows a computer to communicate over a telephone line or other network connection, but it is not a core component of the system unit itself.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A computer program that converts an entire program into machine language is called a/an? (2012 Test One (1))",
    "keywords": [
      "computer program",
      "converts",
      "machine language",
      "Compiler",
      "high-level language"
    ],
    "explanation": "A compiler translates a high-level language program into machine language code all at once.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A computer program that translates one program instructions at a time into machine language is called a/an? (2012 Test One (1))",
    "keywords": [
      "computer program",
      "translates",
      "one program instruction",
      "machine language",
      "Interpreter"
    ],
    "explanation": "An interpreter translates and executes program instructions one line at a time.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A small or intelligent device is so called because it contains within it a? (2012 Test One (1))",
    "keywords": [
      "small device",
      "intelligent device",
      "Microcomputer",
      "microprocessor",
      "embedded"
    ],
    "explanation": "A smart or intelligent device typically contains an embedded microcomputer or microprocessor to control its functions.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Basics of Computer",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which computers are used in the weather forecasting industry? (2012 Test One (1))",
    "keywords": [
      "weather forecasting",
      "Supercomputers",
      "scientific calculations"
    ],
    "explanation": "Supercomputers are used for complex, large-scale scientific calculations, such as those required for weather modeling and forecasting.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Floppy disks which are made from flexible plastic material are also called? (2012 Test One (1))",
    "keywords": [
      "Floppy disks",
      "flexible plastic",
      "Diskettes"
    ],
    "explanation": "The term 'diskette' is another name for a floppy disk, emphasizing its small, flexible nature compared to hard disks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The secondary storage devices can only store data but they cannot perform? (2012 Test One (1))",
    "keywords": [
      "secondary storage devices",
      "store data",
      "Arithmetic Operation",
      "Logic operation",
      "processing"
    ],
    "explanation": "Secondary storage devices are for long-term data storage and do not have the processing capabilities of a CPU, so they cannot perform arithmetic or logic operations.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Hard disks can have a storage capacity in the region of...? (2012 Test One (1))",
    "keywords": [
      "Hard disks",
      "storage capacity",
      "Gigabytes",
      "GB"
    ],
    "explanation": "At the time of this test, hard drive capacities were typically measured in gigabytes (GB), while the other options represent much smaller capacities associated with floppy disks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Formatting a disk results in all the data being...? (2012 Test One (1))",
    "keywords": [
      "Formatting a disk",
      "data being deleted",
      "file system"
    ],
    "explanation": "Formatting a disk erases all existing data by creating a new file system and making the previous data inaccessible.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which storage device has the largest capacity in Mb.s? (2012 Test One (1))",
    "keywords": [
      "storage device",
      "largest capacity",
      "DVD-ROM",
      "GB"
    ],
    "explanation": "A DVD-ROM has a capacity of at least 4.7 GB, which is significantly larger than the capacities of floppy disks (1.44 MB) and CD-ROMs (700 MB).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Regarding a VDU, Which statement is more correct? (2012 Test One (1))",
    "keywords": [
      "VDU",
      "Visual Display Unit",
      "peripheral device",
      "external component"
    ],
    "explanation": "A VDU (Visual Display Unit) is a peripheral device, as it is an external component connected to a computer system.",
    "course": "CS110",
    "term": "T1"
  },
  

//[
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following is not an input device? (2012 Test One (1))",
    "keywords": [
      "input device",
      "OCR",
      "Optical scanners",
      "Voice recognition device",
      "COM",
      "Computer Output to Microfilm",
      "output device"
    ],
    "explanation": "COM is an output device that converts computer-generated data to microfilm or microfiche.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which is considered a direct entry input device? (2012 Test One (1))",
    "keywords": [
      "direct entry",
      "input device",
      "Optical scanner",
      "Mouse",
      "digitizer",
      "Light pen"
    ],
    "explanation": "All of these devices allow for direct entry of data or commands into a computer system without the need for manual typing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following is used only for data entry and storage, and never for processing? (2012 Test One (1))",
    "keywords": [
      "data entry",
      "storage",
      "processing",
      "Dumb terminal"
    ],
    "explanation": "A dumb terminal is a device with a keyboard and screen that relies on a central computer to perform all processing tasks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What input device can be used for marking a multiple choice test? (2012 Test One (1))",
    "keywords": [
      "input device",
      "multiple choice test",
      "Optical mark reader",
      "OMR"
    ],
    "explanation": "An Optical Mark Reader (OMR) is specifically designed to detect marks or shadows on paper, making it ideal for marking multiple-choice tests.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What is the name of the computer terminal which gives paper printout? (2012 Test One (1))",
    "keywords": [
      "computer terminal",
      "paper printout",
      "Hard copy terminal",
      "printer",
      "teletype"
    ],
    "explanation": "A hard copy terminal, such as a printer or teletype, produces a physical copy of output on paper.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Dot-matrix is a type of? (2012 Test One (1))",
    "keywords": [
      "Dot-matrix",
      "Printer",
      "ink-soaked ribbon",
      "pins"
    ],
    "explanation": "A dot-matrix printer creates characters and graphics by striking an ink-soaked ribbon against the paper with a grid of pins.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A kind of serial dot-matrix printer that forms characters with magnetically-charged ink sprayed dots is called? (2012 Test One (1))",
    "keywords": [
      "serial dot-matrix printer",
      "magnetically-charged ink",
      "Ink-jet printer"
    ],
    "explanation": "An inkjet printer works by spraying tiny droplets of ink onto the paper to form images and text.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which printer is very commonly used for desktop publishing? (2012 Test One (1))",
    "keywords": [
      "printer",
      "desktop publishing",
      "Laser printer",
      "high-quality",
      "fast"
    ],
    "explanation": "Laser printers are known for their high-quality, fast, and quiet printing, which makes them ideal for desktop publishing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "An output device that uses words or messages recorded on a magnetic medium to produce audio response is? (2012 Test One (1))",
    "keywords": [
      "output device",
      "audio response",
      "Voice response unit",
      "speech"
    ],
    "explanation": "A voice response unit is an output device that can generate speech from recorded words or phrases.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the printers used in conjunction with computers uses dry ink power? (2012 Test One (1))",
    "keywords": [
      "printers",
      "dry ink power",
      "Laser printer",
      "toner cartridge"
    ],
    "explanation": "Laser printers use a toner cartridge that contains a fine powder of dry ink, which is fused onto the paper with heat.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following produces the best quality graphics reproduction? (2012 Test One (1))",
    "keywords": [
      "best quality",
      "graphics reproduction",
      "Plotter",
      "vector graphics"
    ],
    "explanation": "A plotter is a specialized output device that draws continuous lines on paper, producing very high-quality vector graphics.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What do you need for an ink jet printer? (2012 Test One (1))",
    "keywords": [
      "ink jet printer",
      "cartridge",
      "ink"
    ],
    "explanation": "Inkjet printers use ink cartridges that contain the ink necessary for printing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A laser printer does NOT use? (2012 Test One (1))",
    "keywords": [
      "laser printer",
      "print head",
      "inkjet printer"
    ],
    "explanation": "A print head is a component of an inkjet printer, not a laser printer.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The two kinds of main memory are:? (2012 Test One (1))",
    "keywords": [
      "main memory",
      "primary memory",
      "ROM",
      "RAM",
      "Read-Only Memory",
      "Random-Access Memory"
    ],
    "explanation": "Main memory is also known as primary memory, which includes both ROM (Read-Only Memory) and RAM (Random-Access Memory).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following will happen when data is entered into a memory location? (2012 Test One (1))",
    "keywords": [
      "data entered",
      "memory location",
      "erases previous content",
      "overwrites"
    ],
    "explanation": "When new data is written to a memory location, it overwrites and erases the data that was previously there.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A storage area used to store data to compensate for the difference in speed at which the different units can handle data is.? (2012 Test One (1))",
    "keywords": [
      "storage area",
      "compensate for speed",
      "Buffer",
      "temporary storage"
    ],
    "explanation": "A buffer is a temporary storage area that holds data while it is being transferred from one device to another.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Current SIMMs have either or ... connectors (pins)? (2012 Test One (1))",
    "keywords": [
      "SIMMs",
      "Single In-line Memory Modules",
      "connectors",
      "pins",
      "30",
      "72"
    ],
    "explanation": "SIMMs (Single In-line Memory Modules) were a type of RAM module that came in 30-pin and 72-pin versions.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The storage subsystem in a microcomputer consists mainly of ... or ... media with varying capacities? (2012 Test One (1))",
    "keywords": [
      "storage subsystem",
      "microcomputer",
      "Magnetic",
      "optical",
      "hard drives",
      "CDs",
      "DVDs"
    ],
    "explanation": "Microcomputer storage subsystems use either magnetic media (like hard drives) or optical media (like CDs and DVDs).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The central processing unit (CPU) consists of? (2012 Test One (1))",
    "keywords": [
      "central processing unit",
      "CPU",
      "Control unit",
      "arithmetic-logic unit",
      "primary storage",
      "CU",
      "ALU"
    ],
    "explanation": "The CPU is composed of the Control Unit (CU), Arithmetic-Logic Unit (ALU), and internal memory (primary storage).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "EBCDIC can code up to how many different characters? (2012 Test One (1))",
    "keywords": [
      "EBCDIC",
      "8-bit code",
      "256 characters"
    ],
    "explanation": "EBCDIC is an 8-bit code, and an 8-bit system can represent 2^8, or 256, unique characters.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which is used for manufacturing chips? (2012 Test One (1))",
    "keywords": [
      "manufacturing chips",
      "Semiconductors",
      "integrated circuits",
      "silicon"
    ],
    "explanation": "Semiconductors, such as silicon, are the fundamental materials used to create integrated circuits or computer chips.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A byte consists of? (2012 Test One (1))",
    "keywords": [
      "byte",
      "eight bits",
      "digital information"
    ],
    "explanation": "A byte is a standard unit of digital information, consisting of eight bits.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "EEPROM stand for? (2012 Test One (1))",
    "keywords": [
      "EEPROM",
      "Electrically Erasable Programmable Read Only Memory",
      "non-volatile memory"
    ],
    "explanation": "EEPROM is a type of non-volatile memory that can be erased and reprogrammed using electrical signals.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Ctrl, shift and alt are called keys.? (2012 Test One (1))",
    "keywords": [
      "Ctrl",
      "shift",
      "alt",
      "Modifier keys",
      "keyboard"
    ],
    "explanation": "Modifier keys are special keys on a keyboard that modify the normal action of another key when pressed together.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To make the number pad act as directional arrows, you press the ----key.? (2012 Test One (1))",
    "keywords": [
      "number pad",
      "directional arrows",
      "Num lock"
    ],
    "explanation": "The Num Lock key switches the function of the numeric keypad between number entry and directional arrows.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The modern keyboard typically has ----function keys.? (2012 Test One (1))",
    "keywords": [
      "modern keyboard",
      "function keys",
      "F1",
      "F12"
    ],
    "explanation": "Standard keyboards today typically have 12 function keys, labeled F1 through F12.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To move to the beginning of a line of text, press the ----key.? (2012 Test One (1))",
    "keywords": [
      "beginning of line",
      "Home key",
      "cursor control"
    ],
    "explanation": "The 'Home' key is a cursor control key that moves the cursor to the beginning of the line.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----determines how long you must hold down an alphanumeric key before the keyboard will repeat the character.? (2012 Test One (1))",
    "keywords": [
      "alphanumeric key",
      "repeat the character",
      "Repeat rate",
      "keyboard repeat rate"
    ],
    "explanation": "The repeat rate (or keyboard repeat rate) is a setting that determines how quickly a character repeats when a key is held down.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The traditional mechanical mouse uses a ----to track the pointer position on the screen.? (2012 Test One (1))",
    "keywords": [
      "mechanical mouse",
      "track pointer",
      "Ball",
      "internal rollers"
    ],
    "explanation": "Traditional mechanical mice use a rubber ball that rolls as the mouse moves, and internal rollers track its movement.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To access properties of an object, the mouse technique to use is ----.? (2012 Test One (1))",
    "keywords": [
      "access properties",
      "mouse technique",
      "Right-click",
      "context menu"
    ],
    "explanation": "A right-click on an object typically opens a context menu that provides a list of actions or properties associated with that object.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----can be defined as an upside down mouse.? (2012 Test One (1))",
    "keywords": [
      "upside down mouse",
      "Trackball",
      "input device",
      "rolling the ball"
    ],
    "explanation": "A trackball is an input device that contains a ball held within a socket. Users move the cursor by rolling the ball with their thumb, fingers, or palm.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----key will launch the start button.? (2012 Test One (1))",
    "keywords": [
      "start button",
      "Windows key",
      "Start Menu",
      "shortcut"
    ],
    "explanation": "The 'Windows' key on a keyboard is a shortcut that opens the Start Menu in the Microsoft Windows operating system.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The wheel on a mouse can make it easier to ----.? (2012 Test One (1))",
    "keywords": [
      "mouse wheel",
      "Scroll through documents",
      "scroll"
    ],
    "explanation": "The scroll wheel on a mouse allows a user to move up and down through a document or web page with ease.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "In MS-dos 6.22, which part identifies the product uniquely? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "product uniquely",
      "version number",
      "6.22"
    ],
    "explanation": "The version number '6.22' uniquely identifies this specific release of the MS-DOS product.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "In MS-DOS what command will you use to display system date? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "command",
      "display system date",
      "Date command"
    ],
    "explanation": "The 'DATE' command in MS-DOS is used to display or change the system date.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "While working with Ms-dos which command transfer a specific file from one disk to another? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "command",
      "transfer a file",
      "Copy"
    ],
    "explanation": "The 'COPY' command is used to copy one or more files from one location to another.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "If you don't know the current time, which command will you use to display? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "current time",
      "Time command"
    ],
    "explanation": "The 'TIME' command in MS-DOS is used to display or change the current system time.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which command divides the surface of the blank disk into sectors and assign a unique address to each one? (2012 Test One (1))",
    "keywords": [
      "command",
      "divides disk",
      "sectors",
      "unique address",
      "Format",
      "file system"
    ],
    "explanation": "The 'FORMAT' command prepares a storage device for initial use by creating a file system and partitioning the disk into sectors.",
    "course": "CS110",
    "term": "T2"
  },
  //[
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following is not an input device? (2012 Test One (1))",
    "keywords": [
      "input device",
      "OCR",
      "Optical scanners",
      "Voice recognition device",
      "COM",
      "Computer Output to Microfilm",
      "output device"
    ],
    "explanation": "COM is an output device that converts computer-generated data to microfilm or microfiche.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which is considered a direct entry input device? (2012 Test One (1))",
    "keywords": [
      "direct entry",
      "input device",
      "Optical scanner",
      "Mouse",
      "digitizer",
      "Light pen"
    ],
    "explanation": "All of these devices allow for direct entry of data or commands into a computer system without the need for manual typing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following is used only for data entry and storage, and never for processing? (2012 Test One (1))",
    "keywords": [
      "data entry",
      "storage",
      "processing",
      "Dumb terminal"
    ],
    "explanation": "A dumb terminal is a device with a keyboard and screen that relies on a central computer to perform all processing tasks.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What input device can be used for marking a multiple choice test? (2012 Test One (1))",
    "keywords": [
      "input device",
      "multiple choice test",
      "Optical mark reader",
      "OMR"
    ],
    "explanation": "An Optical Mark Reader (OMR) is specifically designed to detect marks or shadows on paper, making it ideal for marking multiple-choice tests.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What is the name of the computer terminal which gives paper printout? (2012 Test One (1))",
    "keywords": [
      "computer terminal",
      "paper printout",
      "Hard copy terminal",
      "printer",
      "teletype"
    ],
    "explanation": "A hard copy terminal, such as a printer or teletype, produces a physical copy of output on paper.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Dot-matrix is a type of? (2012 Test One (1))",
    "keywords": [
      "Dot-matrix",
      "Printer",
      "ink-soaked ribbon",
      "pins"
    ],
    "explanation": "A dot-matrix printer creates characters and graphics by striking an ink-soaked ribbon against the paper with a grid of pins.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A kind of serial dot-matrix printer that forms characters with magnetically-charged ink sprayed dots is called? (2012 Test One (1))",
    "keywords": [
      "serial dot-matrix printer",
      "magnetically-charged ink",
      "Ink-jet printer"
    ],
    "explanation": "An inkjet printer works by spraying tiny droplets of ink onto the paper to form images and text.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which printer is very commonly used for desktop publishing? (2012 Test One (1))",
    "keywords": [
      "printer",
      "desktop publishing",
      "Laser printer",
      "high-quality",
      "fast"
    ],
    "explanation": "Laser printers are known for their high-quality, fast, and quiet printing, which makes them ideal for desktop publishing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "An output device that uses words or messages recorded on a magnetic medium to produce audio response is? (2012 Test One (1))",
    "keywords": [
      "output device",
      "audio response",
      "Voice response unit",
      "speech"
    ],
    "explanation": "A voice response unit is an output device that can generate speech from recorded words or phrases.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the printers used in conjunction with computers uses dry ink power? (2012 Test One (1))",
    "keywords": [
      "printers",
      "dry ink power",
      "Laser printer",
      "toner cartridge"
    ],
    "explanation": "Laser printers use a toner cartridge that contains a fine powder of dry ink, which is fused onto the paper with heat.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following produces the best quality graphics reproduction? (2012 Test One (1))",
    "keywords": [
      "best quality",
      "graphics reproduction",
      "Plotter",
      "vector graphics"
    ],
    "explanation": "A plotter is a specialized output device that draws continuous lines on paper, producing very high-quality vector graphics.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "What do you need for an ink jet printer? (2012 Test One (1))",
    "keywords": [
      "ink jet printer",
      "cartridge",
      "ink"
    ],
    "explanation": "Inkjet printers use ink cartridges that contain the ink necessary for printing.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A laser printer does NOT use? (2012 Test One (1))",
    "keywords": [
      "laser printer",
      "print head",
      "inkjet printer"
    ],
    "explanation": "A print head is a component of an inkjet printer, not a laser printer.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The two kinds of main memory are:? (2012 Test One (1))",
    "keywords": [
      "main memory",
      "primary memory",
      "ROM",
      "RAM",
      "Read-Only Memory",
      "Random-Access Memory"
    ],
    "explanation": "Main memory is also known as primary memory, which includes both ROM (Read-Only Memory) and RAM (Random-Access Memory).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which of the following will happen when data is entered into a memory location? (2012 Test One (1))",
    "keywords": [
      "data entered",
      "memory location",
      "erases previous content",
      "overwrites"
    ],
    "explanation": "When new data is written to a memory location, it overwrites and erases the data that was previously there.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A storage area used to store data to compensate for the difference in speed at which the different units can handle data is.? (2012 Test One (1))",
    "keywords": [
      "storage area",
      "compensate for speed",
      "Buffer",
      "temporary storage"
    ],
    "explanation": "A buffer is a temporary storage area that holds data while it is being transferred from one device to another.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Current SIMMs have either or ... connectors (pins)? (2012 Test One (1))",
    "keywords": [
      "SIMMs",
      "Single In-line Memory Modules",
      "connectors",
      "pins",
      "30",
      "72"
    ],
    "explanation": "SIMMs (Single In-line Memory Modules) were a type of RAM module that came in 30-pin and 72-pin versions.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The storage subsystem in a microcomputer consists mainly of ... or ... media with varying capacities? (2012 Test One (1))",
    "keywords": [
      "storage subsystem",
      "microcomputer",
      "Magnetic",
      "optical",
      "hard drives",
      "CDs",
      "DVDs"
    ],
    "explanation": "Microcomputer storage subsystems use either magnetic media (like hard drives) or optical media (like CDs and DVDs).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The central processing unit (CPU) consists of? (2012 Test One (1))",
    "keywords": [
      "central processing unit",
      "CPU",
      "Control unit",
      "arithmetic-logic unit",
      "primary storage",
      "CU",
      "ALU"
    ],
    "explanation": "The CPU is composed of the Control Unit (CU), Arithmetic-Logic Unit (ALU), and internal memory (primary storage).",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "EBCDIC can code up to how many different characters? (2012 Test One (1))",
    "keywords": [
      "EBCDIC",
      "8-bit code",
      "256 characters"
    ],
    "explanation": "EBCDIC is an 8-bit code, and an 8-bit system can represent 2^8, or 256, unique characters.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "The Computer System Hardware",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which is used for manufacturing chips? (2012 Test One (1))",
    "keywords": [
      "manufacturing chips",
      "Semiconductors",
      "integrated circuits",
      "silicon"
    ],
    "explanation": "Semiconductors, such as silicon, are the fundamental materials used to create integrated circuits or computer chips.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Data Representation",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "A byte consists of? (2012 Test One (1))",
    "keywords": [
      "byte",
      "eight bits",
      "digital information"
    ],
    "explanation": "A byte is a standard unit of digital information, consisting of eight bits.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Computer Storage",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "EEPROM stand for? (2012 Test One (1))",
    "keywords": [
      "EEPROM",
      "Electrically Erasable Programmable Read Only Memory",
      "non-volatile memory"
    ],
    "explanation": "EEPROM is a type of non-volatile memory that can be erased and reprogrammed using electrical signals.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Ctrl, shift and alt are called keys.? (2012 Test One (1))",
    "keywords": [
      "Ctrl",
      "shift",
      "alt",
      "Modifier keys",
      "keyboard"
    ],
    "explanation": "Modifier keys are special keys on a keyboard that modify the normal action of another key when pressed together.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To make the number pad act as directional arrows, you press the ----key.? (2012 Test One (1))",
    "keywords": [
      "number pad",
      "directional arrows",
      "Num lock"
    ],
    "explanation": "The Num Lock key switches the function of the numeric keypad between number entry and directional arrows.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The modern keyboard typically has ----function keys.? (2012 Test One (1))",
    "keywords": [
      "modern keyboard",
      "function keys",
      "F1",
      "F12"
    ],
    "explanation": "Standard keyboards today typically have 12 function keys, labeled F1 through F12.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To move to the beginning of a line of text, press the ----key.? (2012 Test One (1))",
    "keywords": [
      "beginning of line",
      "Home key",
      "cursor control"
    ],
    "explanation": "The 'Home' key is a cursor control key that moves the cursor to the beginning of the line.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----determines how long you must hold down an alphanumeric key before the keyboard will repeat the character.? (2012 Test One (1))",
    "keywords": [
      "alphanumeric key",
      "repeat the character",
      "Repeat rate",
      "keyboard repeat rate"
    ],
    "explanation": "The repeat rate (or keyboard repeat rate) is a setting that determines how quickly a character repeats when a key is held down.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The traditional mechanical mouse uses a ----to track the pointer position on the screen.? (2012 Test One (1))",
    "keywords": [
      "mechanical mouse",
      "track pointer",
      "Ball",
      "internal rollers"
    ],
    "explanation": "Traditional mechanical mice use a rubber ball that rolls as the mouse moves, and internal rollers track its movement.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "To access properties of an object, the mouse technique to use is ----.? (2012 Test One (1))",
    "keywords": [
      "access properties",
      "mouse technique",
      "Right-click",
      "context menu"
    ],
    "explanation": "A right-click on an object typically opens a context menu that provides a list of actions or properties associated with that object.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----can be defined as an upside down mouse.? (2012 Test One (1))",
    "keywords": [
      "upside down mouse",
      "Trackball",
      "input device",
      "rolling the ball"
    ],
    "explanation": "A trackball is an input device that contains a ball held within a socket. Users move the cursor by rolling the ball with their thumb, fingers, or palm.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The ----key will launch the start button.? (2012 Test One (1))",
    "keywords": [
      "start button",
      "Windows key",
      "Start Menu",
      "shortcut"
    ],
    "explanation": "The 'Windows' key on a keyboard is a shortcut that opens the Start Menu in the Microsoft Windows operating system.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Input and Output Devices",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "The wheel on a mouse can make it easier to ----.? (2012 Test One (1))",
    "keywords": [
      "mouse wheel",
      "Scroll through documents",
      "scroll"
    ],
    "explanation": "The scroll wheel on a mouse allows a user to move up and down through a document or web page with ease.",
    "course": "CS110",
    "term": "T1"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "In MS-dos 6.22, which part identifies the product uniquely? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "product uniquely",
      "version number",
      "6.22"
    ],
    "explanation": "The version number '6.22' uniquely identifies this specific release of the MS-DOS product.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "In MS-DOS what command will you use to display system date? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "command",
      "display system date",
      "Date command"
    ],
    "explanation": "The 'DATE' command in MS-DOS is used to display or change the system date.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "While working with Ms-dos which command transfer a specific file from one disk to another? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "command",
      "transfer a file",
      "Copy"
    ],
    "explanation": "The 'COPY' command is used to copy one or more files from one location to another.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "If you don't know the current time, which command will you use to display? (2012 Test One (1))",
    "keywords": [
      "MS-DOS",
      "current time",
      "Time command"
    ],
    "explanation": "The 'TIME' command in MS-DOS is used to display or change the current system time.",
    "course": "CS110",
    "term": "T2"
  },
  {
    "topic": "Operating Systems",
    "year": "2012 Test One (1)",
    "tag": "MCQ",
    "q": "Which command divides the surface of the blank disk into sectors and assign a unique address to each one? (2012 Test One (1))",
    "keywords": [
      "command",
      "divides disk",
      "sectors",
      "unique address",
      "Format",
      "file system"
    ],
    "explanation": "The 'FORMAT' command prepares a storage device for initial use by creating a file system and partitioning the disk into sectors.",
    "course": "CS110",
    "term": "T2"
  },



  //LA111 data 
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does communication facilitate according to the introduction?",
    "keywords": ["sharing", "common", "experiences"],
    "explanation": "Communication facilitates the sharing of common experiences with others, which forms the foundation of human interaction and understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What activities are included in the wide scope of communication?",
    "keywords": ["thinking", "dreaming", "speaking", "arguing"],
    "explanation": "Communication's wide scope includes thinking, dreaming, speaking, and arguing, showing it encompasses both internal and external processes."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do some scholars describe communication?",
    "keywords": ["transfer", "meaning", "transmission", "stimuli", "mind", "affecting", "sharing", "experiences", "commonness"],
    "explanation": "Scholars describe communication as 'the transfer of meaning', 'transmission of stimuli', 'one mind affecting another', or 'sharing of experiences on the basis of commonness'."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is Wood's (2004) working definition of communication?",
    "keywords": ["systemic", "process", "interact", "symbols", "create", "interpret", "meaning"],
    "explanation": "Wood defines communication as a systemic process where people interact with and through symbols to create and interpret meaning, highlighting its structured and symbolic nature."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is communication a static act or dynamic process?",
    "keywords": ["dynamic", "process", "continuous"],
    "explanation": "Communication is a dynamic process that is continuous in nature, not a static act, which makes it vital for teaching and learning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is required for communication to be complete and effective?",
    "keywords": ["achieve", "desired", "objectives", "intended", "communicator"],
    "explanation": "For communication to be complete and effective, it must achieve the desired objectives as intended by the communicator."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "In a classroom, what must the teacher do to convey messages effectively?",
    "keywords": ["clearly", "define", "objectives", "appropriate", "oral", "written", "signs", "symbols", "body", "language"],
    "explanation": "The teacher must clearly define lesson objectives and convey messages using appropriate oral/written signs, symbols, and body language for effective classroom communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When is communication considered successful in teaching?",
    "keywords": ["meaning", "understood", "learners", "same", "way", "intended", "teacher"],
    "explanation": "Communication is successful when learners understand the meaning in the same way as intended by the teacher, ensuring accurate message reception."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can behavior communicate messages without speech?",
    "keywords": ["gestures", "facial", "expressions", "body", "language", "warmth", "indifference"],
    "explanation": "Behavior can communicate messages through gestures, facial expressions, and body language that convey warmth or indifference without verbal communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are communication skills according to the definition?",
    "keywords": ["skills", "abilities", "tools", "enable", "individuals", "send", "receive", "messages", "effectively"],
    "explanation": "Communication skills are abilities and tools that enable individuals to send and receive messages effectively, including listening, reading, speaking, and writing."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'effectively' mean in the context of communication skills?",
    "keywords": ["interpret", "desired", "feedback", "intended", "sender"],
    "explanation": "In communication skills, 'effectively' means to interpret and get the desired feedback as intended by the sender, ensuring accurate message transmission."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the four major functions of communication?",
    "keywords": ["control", "motivation", "emotional", "expression", "information", "sharing", "education"],
    "explanation": "The four major functions are control, motivation, emotional expression, and information sharing/education, which form the foundation of communication purposes."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are some subtypes of communication functions?",
    "keywords": ["socialisation", "entertainment", "persuasion", "preservation", "culture"],
    "explanation": "Subtypes include socialisation, entertainment, persuasion, and preservation of culture, which are derived from the four major functions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why are communication skills particularly important to engineers and scientists?",
    "keywords": ["share", "new", "findings", "technologies", "products", "collaboration", "common", "understanding"],
    "explanation": "They're important because engineers and scientists need to share new findings, technologies, and products, requiring common understanding for collaboration."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What social reason makes communication skills valuable?",
    "keywords": ["harmonious", "living", "social", "expectations", "miscommunication", "prevent", "careless", "disregard", "rules"],
    "explanation": "Communication skills enable harmonious living by meeting social expectations and preventing miscommunication and careless disregard for social rules."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does our interactive world affect communication diversity?",
    "keywords": ["commerce", "geographical", "occupational", "cultural", "linguistic", "boundaries"],
    "explanation": "Our interactive world has made communication diverse due to commerce that cuts across geographical, occupational, cultural, and linguistic boundaries."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is one purpose of ethical technical communication?",
    "keywords": ["mediate", "conflicts", "arise"],
    "explanation": "Ethical technical communication helps to mediate conflicts that may arise in professional and technical contexts."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What legal considerations exist in technical communication?",
    "keywords": ["serious", "human", "legal", "consequences", "failure", "appreciate", "ethical", "dimensions"],
    "explanation": "Failure to appreciate ethical dimensions can have serious human and legal consequences, particularly with product documentation and instructions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What do product manuals typically provide?",
    "keywords": ["instructions", "use", "assemble", "disassemble", "troubleshoot"],
    "explanation": "Product manuals provide instructions on how to use, assemble, disassemble, and troubleshoot products, serving as essential technical documentation."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do technical documents help prevent conflicts between consumers and producers?",
    "keywords": ["alleviate", "possible", "flare", "ups", "clear", "interpretation", "messages"],
    "explanation": "Technical documents alleviate possible flare-ups by providing clear interpretation of messages contained in documentation, preventing misunderstandings."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does communication frequency affect its value in the workplace?",
    "keywords": ["unavoidable", "getting", "things", "done", "frequency", "meetings", "conversing", "writing"],
    "explanation": "Communication's value lies in its ability to get things done, especially since it's unavoidable and frequent in workplace meetings and interactions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What characterizes the collaborative nature of technical communication?",
    "keywords": ["planning", "writing", "meeting", "negotiating", "designing", "decision-making", "proposals", "diverse", "backgrounds"],
    "explanation": "It involves planning, writing, meeting, negotiating, designing, decision-making, and proposals among people of diverse backgrounds across geographical areas."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How has computerisation affected technical communication?",
    "keywords": ["easier", "complex", "production", "complex", "documents", "embedded", "editable", "pictures", "graphs", "spreadsheets"],
    "explanation": "Computerisation has made technical communication both easier and more complex, enabling production of documents with embedded pictures, graphs, and spreadsheets."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why are good writing skills necessary in the internationalized world?",
    "keywords": ["single", "global", "economy", "information", "age", "facilitate", "process"],
    "explanation": "Good writing skills are necessary for the internationalized world moving toward a single global economy called 'the information age' to facilitate global processes."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "According to Huckin & Olsen (1991), what critical communication skills rank above others?",
    "keywords": ["technical", "writing", "public", "speaking", "working", "individuals", "working", "groups", "talking", "people"],
    "explanation": "Critical skills include technical writing, public speaking, working with individuals, working with groups, and talking with people, which rank above other skills."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is a model in the context of communication?",
    "keywords": ["graphic", "representation", "explain", "way", "variable", "works", "pattern", "plan", "description"],
    "explanation": "A model is a graphic representation designed to explain how a variable works, serving as a pattern, plan, or description of a system's structure or workings."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "From what perspective did Aristotle look at communication?",
    "keywords": ["rhetorical", "perspective", "speaking", "masses", "influence", "persuade"],
    "explanation": "Aristotle looked at communication from the rhetorical perspective of speaking to the masses to influence and persuade them."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What elements were in Aristotle's communication model?",
    "keywords": ["speaker", "speech", "audience", "effect"],
    "explanation": "Aristotle's model included Speaker-Speech-Audience-Effect elements, with persuasion as the basic function of communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What changed the concept of communication in the 20th century?",
    "keywords": ["advent", "mass", "communication", "media", "newspapers", "radio", "television"],
    "explanation": "The concept changed due to the advent of mass communication media like newspapers, radio, and television, which expanded communication's scope."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How was communication perceived during the World Wars?",
    "keywords": ["propaganda", "magic", "bullet", "transferred", "ideas", "knowledge", "automatically", "mind"],
    "explanation": "During the World Wars, communication was used for propaganda and perceived as a 'magic bullet' that automatically transferred ideas from one mind to another."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What did sociologists and psychologists argue about communication?",
    "keywords": ["complex", "process", "dynamic", "two-way"],
    "explanation": "They argued that communication is a complex, dynamic process that is two-way in nature, not the simplistic linear model previously assumed."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What question form did Lasswell use for his 1948 communication model?",
    "keywords": ["who", "says", "what", "which", "channel", "whom", "what", "effect"],
    "explanation": "Lasswell looked at communication as 'Who, Says What, in Which Channel, To Whom, With What Effect', creating a comprehensive analytical framework."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does each component in Lasswell's model represent?",
    "keywords": ["communicator", "message", "medium", "receiver", "effect"],
    "explanation": "The components represent Communicator (Who), Message (Says What), Medium (Channel), Receiver (To Whom), and Effect (With What Effect)."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Who developed the transmission model of communication in 1949?",
    "keywords": ["claude", "shannon", "warren", "weaver"],
    "explanation": "Claude Shannon and Warren Weaver developed the transmission model in 1949, which became one of the most important communication models."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the components of the Shannon and Weaver model?",
    "keywords": ["information", "source", "transmitter", "channel", "receiver", "destination", "noise", "interference"],
    "explanation": "Components include Information Source → Transmitter → Channel → Receiver → Destination, with Noise as interference in the channel."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What did Charles Osgood show in his 1954 communication model?",
    "keywords": ["dynamic", "process", "interactive", "relationship", "source", "receiver"],
    "explanation": "Osgood showed communication as a dynamic process with interactive relationships between source and receiver, emphasizing social nature and interpretation."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What roles do individuals play in Osgood's model?",
    "keywords": ["encodes", "decodes", "interprets", "sends", "receives", "feedback"],
    "explanation": "Individuals both send and receive messages, encoding, decoding, and interpreting through feedback mechanisms in an interactive process."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Where is Osgood's model particularly applicable?",
    "keywords": ["interpersonal", "communication", "source", "receiver", "physically", "present"],
    "explanation": "Osgood's model applies particularly to interpersonal communication where source and receiver are physically present, like teacher-student interactions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What distinction did Wilbur Schramm make about communication types?",
    "keywords": ["sharp", "distinction", "technical", "non-technical", "communication"],
    "explanation": "Schramm did not make a sharp distinction between technical and non-technical communication, viewing communication as a unified field."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What concept did Schramm introduce in his second model?",
    "keywords": ["sharing", "experience", "commonality", "shared", "orientation"],
    "explanation": "Schramm introduced the concept of shared experience and commonality between communicators, visualized as overlapping circles of accumulated experience."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What do the circles in Schramm's model represent?",
    "keywords": ["accumulated", "experience", "individuals", "engaged", "communication"],
    "explanation": "The circles indicate the accumulated experience of two individuals engaged in communication, showing how shared understanding develops."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the three classifications of communication models according to West and Turner (2007)?",
    "keywords": ["linear", "transmission", "interactional", "transactional"],
    "explanation": "Models are classified as Linear/transmission, Interactional, and Transactional, each highlighting different aspects of the communication process."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the nine elements of communication identified in Unit 1.4?",
    "keywords": ["context", "sender", "encoding", "message", "channel", "decoding", "receiver", "feedback", "noise"],
    "explanation": "The nine elements are Context, Sender, Encoding, Message, Channel, Decoding, Receiver, Feedback, and Noise, which make communication continuous."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is the role of the source/sender/encoder in communication?",
    "keywords": ["has", "message", "impart", "decide", "how", "communicate", "select", "channel", "plan", "strategies"],
    "explanation": "The sender has a message to impart, decides how to communicate it, selects the channel, and plans strategies for desired response."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What cues does the sender provide in communication?",
    "keywords": ["verbal", "non-verbal", "cues", "received", "interpreted", "responded"],
    "explanation": "The sender provides verbal or non-verbal cues that can be received, interpreted, and responded to by the receiver in the communication process."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is a message in communication terms?",
    "keywords": ["set", "signs", "symbols", "create", "meanings", "receiver", "content", "shared"],
    "explanation": "A message is a set of signs and symbols given by the source to create meanings for the receiver - essentially the content shared between participants."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What must the sender understand to make the message effective?",
    "keywords": ["nature", "profile", "receiver", "needs", "expectations", "possible", "response"],
    "explanation": "The sender must understand the receiver's nature, profile, needs, expectations, and possible response to make the message effective in any situation."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is a channel or medium in communication?",
    "keywords": ["medium", "used", "communicate", "message", "sender", "receiver"],
    "explanation": "Channel is the medium used to communicate a message from sender to receiver, which can be spoken word, printed word, electronic media, or non-verbal cues."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'channel' mostly refer to in modern communication?",
    "keywords": ["mass", "communication", "media", "newspapers", "radio", "television", "telephone", "computers", "internet"],
    "explanation": "In modern communication, 'channel' mostly refers to mass communication media like newspapers, radio, television, telephone, computers, and internet."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why is channel selection crucial for communication success?",
    "keywords": ["appropriate", "channel", "crucial", "success", "communication"],
    "explanation": "Selecting an appropriate channel is crucial because the wrong medium can distort or prevent effective message transmission and reception."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is the role of the receiver/decoder in communication?",
    "keywords": ["receive", "message", "interpret", "derive", "meaning", "necessary", "communication"],
    "explanation": "The receiver receives the message, interprets it, and derives meaning from it - without a receiver, communication cannot take place."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How should the receiver ideally receive the message?",
    "keywords": ["same", "way", "meant", "sender", "successful", "communication"],
    "explanation": "For successful communication, the receiver should receive the message in the same way it was meant by the sender, ensuring accurate understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What relationship do sender and receiver share in interpersonal communication?",
    "keywords": ["close", "relationship", "gradually", "diluted", "group", "mass", "communication"],
    "explanation": "In interpersonal communication, they share a close relationship that gets gradually diluted in group and mass communication as distance increases."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is noise in communication?",
    "keywords": ["distortion", "message", "affects", "flow", "communication", "internal", "external", "sources"],
    "explanation": "Noise is distortion in a message that affects communication flow, caused by internal or external sources that create barriers to understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is feedback in the communication process?",
    "keywords": ["response", "given", "receiver", "message", "sender", "two-way", "process"],
    "explanation": "Feedback is the response given by the receiver to the sender's message, essential because communication is a two-way process requiring response."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why is feedback important in communication?",
    "keywords": ["without", "feedback", "discussion", "incomplete", "two-way", "process"],
    "explanation": "Without feedback, any discussion on communication is incomplete because communication is inherently a two-way process requiring interaction."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When does feedback scope increase in communication?",
    "keywords": ["interpersonal", "communication", "greater", "scope", "feedback", "facial", "expressions", "body", "movements", "cross", "question"],
    "explanation": "Interpersonal communication allows greater feedback scope as participants can decipher facial expressions, body movements, and cross-question each other."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What happens to feedback as communication participants increase?",
    "keywords": ["gradually", "diluted", "number", "participants", "increases"],
    "explanation": "Feedback gets gradually diluted when the number of participants increases, making it harder to maintain interactive communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the term 'noise' express in communication barriers?",
    "keywords": ["interference", "communication", "source", "sender", "receiver", "distortion", "miscommunication"],
    "explanation": "Noise expresses any interference in communication between source/sender and receiver that leads to distortion or miscommunication of messages."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is successful communication in terms of message distortion?",
    "keywords": ["message", "conveyed", "least", "distortion"],
    "explanation": "Successful communication is one where the message is conveyed with the least distortion, though barriers often make this challenging."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the main types of communication barriers identified?",
    "keywords": ["physical", "psychological", "cultural", "linguistic", "semantic", "technical", "information", "overload"],
    "explanation": "Main barriers include physical, psychological, cultural, linguistic/semantic, technical, and information overload barriers that complicate communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do physical barriers affect communication?",
    "keywords": ["source", "visible", "receiver", "comfortable", "environment", "geographical", "distance"],
    "explanation": "Physical barriers occur when the source isn't visible, the environment is uncomfortable, or geographical distance prevents direct interaction."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What creates psychological barriers in communication?",
    "keywords": ["individual", "differences", "attitudes", "interest", "motivation", "levels", "perceive", "differently"],
    "explanation": "Psychological barriers arise from individual differences in attitudes, interests, motivation, perceptions, anxiety, prejudices, and past experiences."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What psychological processes create selective barriers?",
    "keywords": ["selective", "perception", "selective", "recall", "selective", "retention"],
    "explanation": "Selective perception, recall, and retention cause us to perceive, retain, and recall messages selectively, creating psychological barriers."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are socio-cultural barriers in communication?",
    "keywords": ["women", "discuss", "health", "problems", "male", "health", "worker", "personal", "issues", "family"],
    "explanation": "Socio-cultural barriers include women not discussing health problems with male workers, or viewing some issues as personal/family matters only."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do less vocal societies create communication barriers?",
    "keywords": ["less", "vocal", "affect", "level", "communication", "cultures", "vocal", "aggressive"],
    "explanation": "Less vocal societies may struggle to communicate effectively with more vocal or aggressive cultures, creating cross-cultural communication barriers."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What causes linguistic/language barriers?",
    "keywords": ["faulty", "expressions", "poor", "translation", "verbosity", "ambiguous", "words", "inappropriate", "vocabulary"],
    "explanation": "Linguistic barriers come from faulty expressions, poor translation, verbosity, ambiguous words, and inappropriate vocabulary use in communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why do words mean different things to different people?",
    "keywords": ["meanings", "minds", "perceive", "interpret", "different", "ways", "individual", "frame", "mind"],
    "explanation": "Words mean different things because meanings are in people's minds, and individuals perceive/interpret based on their unique frames of mind."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What three variables influence language use and word definitions?",
    "keywords": ["age", "education", "cultural", "background"],
    "explanation": "Age, education, and cultural background are three obvious variables that influence both language use and how individuals define words."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do departmental specializations create language barriers in organizations?",
    "keywords": ["specialists", "develop", "jargon", "technical", "language", "grouping", "employees", "departments"],
    "explanation": "Grouping employees into departments creates specialists who develop their own jargon or technical language, creating intra-organizational barriers."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What organizational factors can cause language problems?",
    "keywords": ["large", "organizations", "widely", "dispersed", "geographically", "vertical", "levels"],
    "explanation": "In large organizations, geographical dispersion of members and existence of vertical levels can both cause significant language problems."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What creates technical barriers in communication?",
    "keywords": ["poor", "audio", "quality", "weak", "video", "signals", "erratic", "power", "supply"],
    "explanation": "Technical barriers arise from poor audio quality, weak video signals, and erratic power supply when using technology for communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is information overload as a communication barrier?",
    "keywords": ["finite", "capacity", "processing", "data", "more", "information", "sort", "use", "weed", "ignore", "forget"],
    "explanation": "Information overload occurs when individuals have more information than they can process, leading them to weed out, ignore, or forget information."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can fast-paced speaking create communication barriers?",
    "keywords": ["speaker", "provides", "information", "fast", "pace", "considerable", "period", "issues", "concepts", "lost"],
    "explanation": "When a speaker provides information too quickly for too long, listeners may lose track of issues and concepts, creating comprehension barriers."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is filtering as a communication barrier?",
    "keywords": ["sender", "purposely", "manipulating", "information", "receiver", "see", "favourably"],
    "explanation": "Filtering occurs when a sender purposely manipulates information so the receiver will see it more favourably, distorting message content."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What determines the amount of filtering in organizations?",
    "keywords": ["number", "levels", "organization", "structure", "vertical", "levels"],
    "explanation": "The major determinant of filtering is the number of vertical levels in an organization's structure - more levels mean more filtering."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When does filtering typically occur?",
    "keywords": ["status", "differences", "communicators"],
    "explanation": "Filtering occurs wherever there are status differences between communicators, as individuals adjust messages based on hierarchical relationships."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is selective perception in communication?",
    "keywords": ["receiver", "sees", "hears", "selective", "way", "needs", "motivations", "experience", "background", "personal", "characteristics"],
    "explanation": "Selective perception occurs when receivers see/hear selectively based on their needs, motivations, experience, background, and personal characteristics."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the receiver project during selective perception?",
    "keywords": ["projects", "interests", "expectations", "communications", "decodes"],
    "explanation": "During selective perception, the receiver projects his/her interests and expectations into communications while decoding them, filtering reality."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "According to Robin Lakoff, how are girls taught to communicate?",
    "keywords": ["passive", "empathetic", "voices", "encouraged", "active", "listening"],
    "explanation": "Girls are taught to use passive, empathetic voices and are encouraged toward active listening, shaping their communication styles from childhood."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How are boys taught to communicate according to Lakoff's research?",
    "keywords": ["encouraged", "competition", "forceful", "active", "tones"],
    "explanation": "Boys are encouraged toward competition using forceful, active tones, developing communication styles focused on status and assertion."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do men typically use talk according to gender communication differences?",
    "keywords": ["emphasize", "status", "preserve", "independence", "maintain", "status", "hierarchical", "social", "order"],
    "explanation": "Men use talk to emphasize status and preserve independence, maintaining their position in hierarchical social orders through communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do women typically use talk according to gender communication differences?",
    "keywords": ["create", "connection", "negotiations", "closeness", "seek", "give", "confirmation", "support"],
    "explanation": "Women use talk to create connection through negotiations for closeness, seeking and giving confirmation and support in relationships."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do men typically respond when hearing a problem?",
    "keywords": ["assert", "desire", "independence", "control", "providing", "solutions"],
    "explanation": "When men hear a problem, they typically assert independence and control by immediately providing solutions rather than emotional support."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why do women typically present problems in communication?",
    "keywords": ["gain", "support", "connection"],
    "explanation": "Women typically present problems to gain support and connection rather than to receive immediate solutions to the issues raised."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do emotions affect communication interpretation?",
    "keywords": ["receiver", "feels", "time", "receipt", "influence", "interprets"],
    "explanation": "How the receiver feels at the time of message receipt influences interpretation, as emotions color understanding and response to communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Which emotions most hinder effective communication?",
    "keywords": ["extreme", "emotions", "hinder", "effective", "communication"],
    "explanation": "Extreme emotions are most likely to hinder effective communication by distorting interpretation and response to messages received."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the ethological paradigm say about nonverbal behavior?",
    "keywords": ["innate", "genetically", "determined", "general", "patterns", "inflexible", "species"],
    "explanation": "The ethological paradigm asserts nonverbal behavior is partly innate or genetically determined, with certain general patterns inflexible within species."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the enculturation paradigm claim about nonverbal behavior?",
    "keywords": ["reflects", "contingent", "arbitrary", "individually", "stable", "norms", "inculcated", "members", "society", "socialization"],
    "explanation": "It claims nonverbal behavior reflects contingent, arbitrary but stable norms inculcated in all society members through socialization processes."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the internal states paradigm contend about nonverbal behavior?",
    "keywords": ["fluctuates", "function", "ego", "individual", "attributes", "internal", "psychological", "states"],
    "explanation": "This paradigm contends that nonverbal behavior fluctuates based on individual attributes or internal psychological states, regardless of origin."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the situational resource paradigm assert about nonverbal behavior?",
    "keywords": ["learned", "varies", "cultures", "across", "internal", "states", "depending", "statuses", "constraints", "situation"],
    "explanation": "It asserts nonverbal behavior is learned but varies within cultures and across internal states depending on participant statuses and situational constraints."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are some theories of nonverbal behavior mentioned?",
    "keywords": ["burgeon", "expectancy", "violations", "andersen", "cognitive", "valence", "capella", "greene", "discrepancy-arousal"],
    "explanation": "Theories include Burgeon's Expectancy Violations Theory, Andersen's Cognitive Valence Theory, and Capella and Greene's Discrepancy-Arousal Theory."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What six nonverbal behaviors are considered universal?",
    "keywords": ["sadness", "anger", "disgust", "fear", "interest", "surprise", "happiness", "love"],
    "explanation": "Universal nonverbal behaviors include Sadness, Anger, Disgust, Fear, Interest, Surprise, Happiness, and Love (SADFISH + L)."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the seven categories of nonverbal messages?",
    "keywords": ["physical", "appearance", "dress", "artefacts", "gestures", "movements", "face", "eye", "behaviour", "vocal", "behaviour", "space", "distance", "touch", "time"],
    "explanation": "Categories are: Physical appearance/dress/artefacts, Gestures/movements, Face/eye behavior, Vocal behavior, Space/distance, Touch, and Time."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is kinesics in nonverbal communication?",
    "keywords": ["gestures", "movements"],
    "explanation": "Kinesics refers to gestures and movements as a category of nonverbal communication that conveys meaning through bodily motion."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is oculesics in nonverbal communication?",
    "keywords": ["face", "eye", "behaviour"],
    "explanation": "Oculesics refers to face and eye behavior as a category of nonverbal communication, including facial expressions and eye contact."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are vocalics and paralanguage in nonverbal communication?",
    "keywords": ["vocal", "behaviour"],
    "explanation": "Vocalics and paralanguage refer to vocal behavior including tone, pitch, volume, and rate of speech as nonverbal elements."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is proxemics in nonverbal communication?",
    "keywords": ["space", "distance"],
    "explanation": "Proxemics refers to the study of space and distance in nonverbal communication, examining how physical space affects interaction."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is haptics/tactile communication?",
    "keywords": ["touch"],
    "explanation": "Haptics or tactile communication refers to touch as a nonverbal category, including handshakes, hugs, and other physical contact."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is chronemics in nonverbal communication?",
    "keywords": ["time"],
    "explanation": "Chronemics refers to the study of time in nonverbal communication, including punctuality, waiting, and time allocation in interactions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the six functions of nonverbal messages?",
    "keywords": ["complementing", "contradicting", "repeating", "regulating", "substituting", "accenting"],
    "explanation": "The six functions are Complementing, Contradicting, Repeating, Regulating, Substituting, and Accenting verbal messages."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can eye contact be used in public speaking?",
    "keywords": ["engage", "audience"],
    "explanation": "Eye contact can be used to engage the audience, creating connection and maintaining attention during public speaking."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What nonverbal aspects should be emphasized in public speaking gestures?",
    "keywords": ["emphasizing", "gestures", "posture", "movements"],
    "explanation": "Public speakers should emphasize gestures, posture, and movements to reinforce verbal messages and maintain audience engagement."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How should voice be used in public speaking?",
    "keywords": ["vary", "rhythm", "emphasize", "mark", "transition"],
    "explanation": "The voice should be used to vary rhythm, emphasize points, and mark transitions between different sections of a speech."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can appearance serve as a communicative point in public speaking?",
    "keywords": ["appearance", "communicative", "point"],
    "explanation": "Appearance serves as a communicative point by conveying professionalism, credibility, and appropriateness for the speaking context."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the five basic forms/levels of communication?",
    "keywords": ["intrapersonal", "interpersonal", "group", "public", "mass", "communication"],
    "explanation": "The five basic forms are Intrapersonal, Interpersonal, Group, Public, and Mass communication, representing different scales of interaction."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What elements are involved in effective communication?",
    "keywords": ["sender", "receiver", "desired", "result"],
    "explanation": "Effective communication involves a sender, receiver, and desired result, which can occur at individual or group levels."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the four broad types of communication?",
    "keywords": ["verbal", "nonverbal", "written", "visualization"],
    "explanation": "The four broad types are Verbal, Nonverbal, Written, and Visualization, each using different channels and formats."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are examples of verbal communication?",
    "keywords": ["face", "face", "telephone"],
    "explanation": "Verbal communication examples include face-to-face conversations and telephone calls where spoken language is the primary channel."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are examples of nonverbal communication?",
    "keywords": ["body", "language", "gestures"],
    "explanation": "Nonverbal communication includes body language and gestures that convey meaning without spoken words."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are examples of written communication?",
    "keywords": ["books", "magazines", "email"],
    "explanation": "Written communication examples include books, magazines, and email where text is the primary medium of message transmission."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are examples of visualization in communication?",
    "keywords": ["graphs", "charts", "maps"],
    "explanation": "Visualization includes graphs, charts, and maps that communicate information through visual representation rather than text alone."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What factors can affect the formality level of communication?",
    "keywords": ["context", "environment"],
    "explanation": "Context and environment are factors that can affect the level of formality in any form of communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Why do people listen according to different reasons?",
    "keywords": ["learn", "show", "empathy", "entertained", "build", "relationships", "persuade"],
    "explanation": "People listen to learn, show empathy, be entertained, build relationships, and persuade others, with different purposes requiring different listening approaches."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What demands does listening place on the listener?",
    "keywords": ["demands", "listener", "requires", "particular", "skills"],
    "explanation": "Listening places certain demands on listeners and requires particular skills for effective information reception and processing."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When does listening occur in communication?",
    "keywords": ["back", "forth", "feedback", "sender", "receiver"],
    "explanation": "Listening occurs as long as there is back-and-forth feedback between sender and receiver, creating an interactive communication process."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is listening?",
    "keywords": ["paying", "attention", "said", "interpreting", "sound", "deliberate", "intentional"],
    "explanation": "Listening is paying attention to what is being said or interpreting a sound, which is a deliberate, intentional process requiring focus."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is hearing?",
    "keywords": ["perception", "physical", "sounds", "involuntary", "ongoing"],
    "explanation": "Hearing is the perception of physical sounds, which is involuntary and ongoing, not requiring interpretation or intentional focus."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is active listening?",
    "keywords": ["understand", "comprehend", "deliberate", "intentional", "engaging", "applying", "mind"],
    "explanation": "Active listening is listening to understand or comprehend, requiring deliberate engagement and application of the mind to find meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What factors may affect listening duration?",
    "keywords": ["purpose", "occasion", "subject", "matter", "environment"],
    "explanation": "Listening duration may differ depending on purpose, occasion, subject matter, environment, and other contextual factors."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should listeners activate to understand verbal messages?",
    "keywords": ["activate", "comprehension", "skills"],
    "explanation": "To understand verbal messages, listeners should activate comprehension skills to process and interpret the spoken information."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How is comprehension measured in listening?",
    "keywords": ["quality", "feedback", "received"],
    "explanation": "Comprehension is measured by the quality of feedback received, showing how well the listener understood and processed the message."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Where is the meaning of a verbal message found?",
    "keywords": ["words", "interlocutors", "choose"],
    "explanation": "The meaning of a verbal message is found in the words that interlocutors choose to express their thoughts and ideas."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What carries a verbal message?",
    "keywords": ["carried", "words", "form", "content", "exchange"],
    "explanation": "A verbal message is carried through words, and these words form the content of the communication exchange between participants."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should interlocutors know to understand verbal message content?",
    "keywords": ["parts", "speech", "word", "classes"],
    "explanation": "To understand verbal message content, interlocutors should know the parts of speech or word classes to which the words belong."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are open word classes in English?",
    "keywords": ["nouns", "verbs", "adjectives", "adverbs", "content", "words"],
    "explanation": "Open word classes include nouns, verbs, adjectives, and adverbs - also called content words that carry core meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are closed word classes in English?",
    "keywords": ["pronouns", "determiners", "conjunctions", "prepositions", "interjections", "grammatical", "words"],
    "explanation": "Closed word classes include pronouns, determiners, conjunctions, prepositions, and interjections - also called grammatical words."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Where is the meaning of a verbal message contained?",
    "keywords": ["contained", "content", "words", "open", "word", "classes"],
    "explanation": "The meaning of a verbal message is contained in the content words, which are the open word classes like nouns, verbs, adjectives, and adverbs."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What do grammatical words facilitate in sentences?",
    "keywords": ["connections", "open", "word", "classes", "determine", "structure", "sentence"],
    "explanation": "Grammatical words facilitate connections between content words and determine the structure of sentences, organizing meaning relationships."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should listeners pay particular attention to for understanding?",
    "keywords": ["pay", "particular", "attention", "content", "open", "word", "classes"],
    "explanation": "Listeners should pay particular attention to content or open word classes, as these determine understanding of the message's core meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can understanding be measured in listening?",
    "keywords": ["listener", "ability", "paraphrase", "saying", "own", "words"],
    "explanation": "Understanding can be measured by the listener's ability to paraphrase - saying something in their own words without repeating verbatim."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How can a listener paraphrase 'I am sorry'?",
    "keywords": ["please", "forgive", "me"],
    "explanation": "'I am sorry' can be paraphrased as 'please forgive me,' demonstrating understanding through different word choice with same meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does active listening require regarding nonverbal messages?",
    "keywords": ["interpreting", "nonverbal", "messages", "aware", "own", "behaviours"],
    "explanation": "Active listening requires interpreting others' nonverbal messages and being aware of your own nonverbal behaviors during listening."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is self-awareness in listening?",
    "keywords": ["knowledge", "own", "nonverbal", "behaviour", "listening", "key", "factor", "negotiate", "meaning"],
    "explanation": "Self-awareness is knowledge of your own nonverbal behavior when listening, a key factor in negotiating meaning with others effectively."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What nonverbal behaviors should listeners be aware of?",
    "keywords": ["facial", "expressions", "sitting", "posture", "position", "placement", "hands"],
    "explanation": "Listeners should be aware of facial expressions, sitting posture, and hand placement/position, as these affect communication dynamics."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is note taking as a form of active listening?",
    "keywords": ["writing", "down", "key", "ideas", "concepts", "issues", "listening", "activity"],
    "explanation": "Note taking is writing down key ideas, concepts, and issues during a listening activity to capture and retain important information."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are possible contexts for listening activities requiring note taking?",
    "keywords": ["classroom", "church", "meeting", "business", "meeting", "seminar", "presentation"],
    "explanation": "Contexts include classrooms, church meetings, business meetings, and seminar presentations where information retention is important."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are Cornell Notes?",
    "keywords": ["method", "taking", "notes", "listening", "main", "idea", "key", "question", "keywords", "summary"],
    "explanation": "Cornell Notes are a structured note-taking method with sections for main ideas/key questions, keywords/details, and a summary in own words."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should be included in the main section of Cornell Notes?",
    "keywords": ["key", "words", "ideas", "important", "dates", "people", "reported", "stressed", "info", "diagrams", "pictures", "formulas"],
    "explanation": "Include keywords, important dates/people, emphasized information, ideas, textbook info, diagrams, pictures, and formulas in the main section."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is mind mapping in note taking?",
    "keywords": ["central", "idea", "topic", "centre", "branches", "sub", "concepts", "explanations", "tree", "interrelations"],
    "explanation": "Mind mapping places the central topic in the center with branches for sub-concepts, creating a 'tree' showing interrelations of ideas."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When do Cornell notes and mind maps work well?",
    "keywords": ["listening", "presentation", "lecture"],
    "explanation": "Both methods work well when listening to presentations like lectures, where information is structured and hierarchical."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is transcription in relation to note taking?",
    "keywords": ["writing", "everything", "speaker", "says"],
    "explanation": "Transcription is writing everything a speaker says, which is different from selective note taking that captures only key information."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What characterizes active note taking?",
    "keywords": ["selective", "brief"],
    "explanation": "Active note taking is selective and brief, focusing on capturing essential information rather than transcribing everything verbatim."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is reading according to the cognitive process definition?",
    "keywords": ["cognitive", "process", "receiving", "information", "decoding", "written", "symbols", "provide", "meaning"],
    "explanation": "Reading is a cognitive process of receiving information that involves decoding written symbols to provide meaning to the reader."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does Smith (1995) define reading?",
    "keywords": ["interactive", "process", "reader", "prior", "knowledge", "world", "interacts", "message", "conveyed", "text"],
    "explanation": "Smith defines reading as an interactive process where the reader's prior knowledge interacts with the text's message to create meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is activated when a reader approaches a text?",
    "keywords": ["world", "knowledge", "activated", "interact", "text", "create", "meaning"],
    "explanation": "When approaching a text, the reader's world knowledge is activated and interacts with the text to create personalized meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are the three stages of the reading process?",
    "keywords": ["before", "reading", "during", "reading", "after", "reading"],
    "explanation": "The reading process has three stages: before reading (pre-reading), during reading, and after reading (post-reading) activities."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What skills are used in the pre-reading stage?",
    "keywords": ["skimming", "survey", "scanning", "rough", "idea", "text"],
    "explanation": "In pre-reading, skimming (survey) and scanning are used to get a rough idea of the text's content before detailed reading."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does the pre-reading stage help achieve?",
    "keywords": ["connect", "reader", "prior", "knowledge", "new", "information", "make", "deductions", "general", "content"],
    "explanation": "Pre-reading helps connect prior knowledge to new information and make deductions about the text's general content before reading."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What strategies are engaged during reading?",
    "keywords": ["questioning", "underlining", "key", "unfamiliar", "words", "making", "comments"],
    "explanation": "During reading, strategies include questioning, underlining key/unfamiliar words, and making comments to actively engage with the text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What happens in the post-reading stage?",
    "keywords": ["go", "over", "work", "survey", "reciting", "reviewing", "text"],
    "explanation": "Post-reading involves going over the work (another survey) by reciting and reviewing the text to reinforce understanding and retention."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is skimming as a reading skill?",
    "keywords": ["quick", "reading", "selective", "goal", "find", "main", "idea", "whole", "text"],
    "explanation": "Skimming is quick, selective reading with the goal of finding the main idea of the whole text without reading every word."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How is skimming done?",
    "keywords": ["reading", "title", "headings", "subheadings", "italicised", "bold", "letters", "images"],
    "explanation": "Skimming is done by reading the title, headings, subheadings, italicised/bold text, and examining images for overall content understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does skimming involve regarding text organization?",
    "keywords": ["recognition", "organisational", "pattern", "rhetorical", "mode", "cause", "effect", "problem-solution", "descriptive"],
    "explanation": "Skimming involves recognizing the text's organizational pattern or rhetorical mode, such as cause-effect, problem-solution, or descriptive structure."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is scanning as a reading skill?",
    "keywords": ["process", "searching", "specific", "information", "text"],
    "explanation": "Scanning is the process of searching for specific information in a text without reading the entire document comprehensively."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Where is scanning particularly useful?",
    "keywords": ["scientific", "texts", "technical", "documents", "manuals", "directories"],
    "explanation": "Scanning is particularly useful for scientific texts, technical documents like manuals, and directories where specific information is needed."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What must readers identify to scan effectively?",
    "keywords": ["order", "material", "text", "organised"],
    "explanation": "To scan effectively, readers must identify the order in which material is organized in the text to locate information efficiently."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is light reading?",
    "keywords": ["reading", "leisure", "novels", "creative", "non-creative", "works", "slow", "paced"],
    "explanation": "Light reading is reading for leisure, mainly applying to novels and creative works, characterized by a slow-paced, enjoyable approach."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does Burke define close reading?",
    "keywords": ["thoughtful", "critical", "analysis", "text", "focuses", "significant", "details", "patterns", "develop", "deep", "precise", "understanding"],
    "explanation": "Burke defines close reading as thoughtful, critical analysis focusing on significant details/patterns to develop deep, precise text understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What types of materials are suitable for close reading?",
    "keywords": ["short", "texts", "excerpts"],
    "explanation": "Close reading is suitable for short texts and excerpts where detailed analysis of language and structure is feasible and valuable."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does close reading compare to word-by-word reading?",
    "keywords": ["similar", "word", "word", "reading", "better", "method", "learning", "new", "material"],
    "explanation": "While similar to word-by-word reading, close reading is a better method for learning new material through deep analytical engagement."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does SQ3R stand for?",
    "keywords": ["survey", "question", "read", "recite", "review"],
    "explanation": "SQ3R stands for Survey, Question, Read, Recite, and Review - a systematic reading method for comprehensive understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What was added to create SQ4R from SQ3R?",
    "keywords": ["fourth", "r", "reflect", "record"],
    "explanation": "SQ4R added a fourth R (Reflect or Record) between Read and Recite to enhance the reading process with note-making."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does surveying involve in SQ3R/SQ4R?",
    "keywords": ["skimming"],
    "explanation": "Surveying involves skimming the text to get an overview before detailed reading in the SQ3R/SQ4R method."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'question' mean in SQ3R/SQ4R?",
    "keywords": ["ask", "questions", "predict", "need", "answering", "text"],
    "explanation": "Question means asking questions that you predict need answering by the text, creating purpose for your reading."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'read' involve in SQ3R/SQ4R?",
    "keywords": ["engage", "material", "reading"],
    "explanation": "Read involves actively engaging with the material by reading it thoroughly with the prepared questions in mind."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'reflect/record' involve in SQ4R?",
    "keywords": ["make", "notes", "main", "ideas", "issues"],
    "explanation": "Reflect/Record involves making notes of main ideas and issues encountered during reading to aid retention and understanding."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'recite' involve in SQ3R/SQ4R?",
    "keywords": ["committing", "memory", "repeating", "information", "read"],
    "explanation": "Recite involves committing information to memory and repeating it, reinforcing learning through active recall."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'review' involve in SQ3R/SQ4R?",
    "keywords": ["rereading", "important", "sections", "points", "answering", "questions", "strengthen", "understanding"],
    "explanation": "Review involves rereading important sections, answering your questions, and strengthening overall understanding of the material."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is note-making?",
    "keywords": ["process", "writing", "down", "main", "points", "arguments", "ideas", "written", "materials"],
    "explanation": "Note-making is the process of writing down main points, arguments, and ideas from written materials for study and reference."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should readers identify to make effective notes?",
    "keywords": ["thesis", "statement", "topic", "sentences"],
    "explanation": "Readers should identify the thesis statement (main idea of text) and topic sentences (main ideas of paragraphs) for effective note-making."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is a thesis statement?",
    "keywords": ["main", "idea", "text", "essay"],
    "explanation": "A thesis statement is the main idea of the entire text or essay, presenting the central argument or focus of the writing."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is a topic sentence?",
    "keywords": ["main", "idea", "paragraph", "text", "essay"],
    "explanation": "A topic sentence is the main idea of a paragraph within a text or essay, supporting and developing the thesis statement."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Give an example of a thesis statement about communication.",
    "keywords": ["communication", "important", "life"],
    "explanation": "'Communication is important in life' is an example thesis statement presenting the main idea about communication's significance."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Give an example of a topic sentence supporting the communication thesis.",
    "keywords": ["facilitates", "exchange", "ideas"],
    "explanation": "'It facilitates the exchange of ideas' is a topic sentence supporting the thesis that communication is important in life."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How are notes from written text typically written?",
    "keywords": ["form", "outline", "title", "headings", "subheadings", "numbered", "indented"],
    "explanation": "Notes are written in outline form with a title, headings/subheadings, numbered points, and indentation to show hierarchical relationships."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is required for consistency in note-making numbering systems?",
    "keywords": ["consistency", "set", "notes", "required"],
    "explanation": "Different numbering systems can be used, but consistency within each set of notes is required for clarity and organization."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should readers identify to write effective notes?",
    "keywords": ["transitional", "markers", "sentences", "paragraphs"],
    "explanation": "Readers should identify transitional markers between sentences and paragraphs to understand connections and main points for note-making."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are transitional markers also called?",
    "keywords": ["linking", "words"],
    "explanation": "Transitional markers are also called linking words, as they connect ideas, sentences, and paragraphs in written text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Where are transitional markers typically found?",
    "keywords": ["beginning", "sentence", "paragraph"],
    "explanation": "Transitional markers are typically found at the beginning of a sentence or paragraph, signaling connections to previous content."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What type of relation do transitional markers show in 'Mupeta is the best student in Physics. However, her Biology grades are terrible.'?",
    "keywords": ["comparison", "contrast"],
    "explanation": "'However' shows comparison and contrast, indicating a difference between Physics performance and Biology performance."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What type of relation do transitional markers show in chronological sequences?",
    "keywords": ["chronology"],
    "explanation": "Transitional markers like 'firstly,' 'secondly,' 'thirdly' show chronological relations, indicating sequence and order in processes."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What type of relation do transitional markers show in 'Consequently, the Ministry of Education is revising the pass point.'?",
    "keywords": ["cause", "effect"],
    "explanation": "'Consequently' shows cause and effect, indicating that failing mathematics has caused the Ministry's revision action."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What type of relation does 'In conclusion' indicate?",
    "keywords": ["conclusion"],
    "explanation": "'In conclusion' indicates a concluding statement or summary, signaling the end of an argument or presentation."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What do transitional markers show regarding idea relationships?",
    "keywords": ["coordination", "subordination"],
    "explanation": "Transitional markers show coordination (equal importance) and subordination (main vs. dependent ideas) relationships between ideas."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are coordinating conjunctions?",
    "keywords": ["and", "but", "or", "yet", "for"],
    "explanation": "Coordinating conjunctions include and, but, or, yet, for - they connect equal ideas and show relationships like addition, contrast, or choice."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What do coordinating conjunctions show in 'I study every night at 8pm, so I don't really care what time I sleep.'?",
    "keywords": ["result", "effect"],
    "explanation": "'So' shows result or effect, indicating that studying at 8pm leads to not caring about sleep time as a consequence."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'and' show in 'The university should enrol male and female students every academic year.'?",
    "keywords": ["addition"],
    "explanation": "'And' shows addition, indicating both male and female students should be enrolled together each year."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'but' show in 'I wanted to study medicine but I failed Biology.'?",
    "keywords": ["contrast"],
    "explanation": "'But' shows contrast, indicating a difference between the desire to study medicine and the reality of failing Biology."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'nor' show in 'Mwape does not come to class, nor does he write tests.'?",
    "keywords": ["showing", "negation"],
    "explanation": "'Nor' shows negation, indicating that both not coming to class and not writing tests are negative behaviors occurring together."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What are subordinating conjunctions?",
    "keywords": ["because", "since", "while", "unless", "whereas", "spite"],
    "explanation": "Subordinating conjunctions include because, since, while, unless, whereas, in spite of - they show dependent relationships between ideas."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'Although' show in 'Although there are many first year students, I will be top of the class.'?",
    "keywords": ["contrast", "concession"],
    "explanation": "'Although' shows contrast or concession, indicating that despite many students, the speaker will still achieve top position."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What does 'because' show in 'The students came late to class because it was raining.'?",
    "keywords": ["cause", "reason"],
    "explanation": "'Because' shows cause or reason, indicating that rain was the reason for students arriving late to class."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is the function of transitional markers in academic writing?",
    "keywords": ["effective", "movement", "thought", "another"],
    "explanation": "Transitional markers provide effective movement from one thought to another, creating coherence and logical flow in writing."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How do transitional markers appear in different forms of writing?",
    "keywords": ["simple", "complex", "forms", "depending", "nature", "text"],
    "explanation": "They appear in simple and complex forms depending on the text's nature, with academic writing using more sophisticated markers."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How does knowledge of transitional markers help readers?",
    "keywords": ["identify", "main", "points", "argument", "written", "text"],
    "explanation": "Knowing transitional markers helps readers identify main argument points by showing how ideas are connected and emphasized in text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What should notes contain according to the example structure?",
    "keywords": ["points", "meat", "summary"],
    "explanation": "Notes should contain the main points that form the 'meat' of a summary, capturing essential information from the text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When is it possible to write a summary according to the note-making process?",
    "keywords": ["after", "notes", "outline", "written"],
    "explanation": "A summary can only be written after notes/outline have been created, as notes provide the essential content for summarization."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What abbreviation is used for 'and' in note-making?",
    "keywords": ["&"],
    "explanation": "The ampersand (&) is used as an abbreviation for 'and' in note-making to save space and write more efficiently."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What abbreviation is used for 'importance' in note-making?",
    "keywords": ["imp"],
    "explanation": "'Imp.' is used as an abbreviation for 'importance' in note-making, following common shorthand conventions."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What abbreviation is used for 'undergoing' in note-making?",
    "keywords": ["undg"],
    "explanation": "'Undg.' is used as an abbreviation for 'undergoing' in note-making examples provided in the text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What abbreviation is used for 'understanding' in note-making?",
    "keywords": ["unds"],
    "explanation": "'Unds.' is used as an abbreviation for 'understanding' in note-making to condense frequently used terms."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What childhood fear did the author have regarding the school bus?",
    "keywords": ["getting", "wrong", "one", "taken", "unfamiliar", "neighbourhood"],
    "explanation": "The author feared getting on the wrong school bus and being taken to an unfamiliar neighborhood on the way home from school."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "How did the author cope with the fear of the dark according to the passage?",
    "keywords": ["lying", "still", "enemy", "discover"],
    "explanation": "The author would lie very still so 'the enemy' wouldn't discover them, imagining burglars and monsters in the dark."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What social fear did the author have as a child?",
    "keywords": ["not", "liked", "accepted", "popularity", "worried", "looks", "right", "clothes"],
    "explanation": "The author feared not being liked or accepted by others, worrying about looks, wearing the right clothes, and being popular."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What lesson did the author learn about darkness as an adult from the passage?",
    "keywords": ["does", "take", "life", "own"],
    "explanation": "As an adult, the author learned that darkness does not have to take on a life of its own, overcoming the childhood fear."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "What is the relationship between childhood fears and adult life according to the passage?",
    "keywords": ["understanding", "helps", "cope", "adult", "life"],
    "explanation": "Understanding the things that scared us as children helps us to cope with our lives as adults, according to the passage's conclusion."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is communication considered a simple or complex process according to the text?",
    "keywords": ["complex", "process"],
    "explanation": "Communication is considered a complex process because it involves multiple activities and requires careful planning for effectiveness."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is dreaming considered a form of communication?",
    "keywords": ["yes", "included", "scope", "communication"],
    "explanation": "Yes, dreaming is included in the wide scope of communication activities mentioned in the introduction."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Does speaking a common language like English eliminate all language barriers?",
    "keywords": ["no", "differences", "usage", "definitions", "still", "cause", "problems"],
    "explanation": "No, speaking a common language does not prevent differences in usage and definitions that can still cause language problems."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Can warmth toward someone be conveyed without speech?",
    "keywords": ["yes", "gestures", "facial", "expressions", "body", "language"],
    "explanation": "Yes, warmth or indifference can be conveyed through gestures, facial expressions, and body language without verbal communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is 'persuasion' a major function of communication?",
    "keywords": ["no", "subtype", "major", "functions"],
    "explanation": "No, persuasion is a subtype derived from the major functions, not one of the four major functions itself."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Would collaboration be possible without common understanding of skills?",
    "keywords": ["no", "impossible", "chaos"],
    "explanation": "No, without common understanding of specific skills and standards, collaboration would be impossible and lead to chaos."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Does the Shannon and Weaver model include feedback as a component?",
    "keywords": ["no", "linear", "model", "does", "include", "feedback"],
    "explanation": "No, the Shannon and Weaver model is a linear transmission model that does not include feedback as a formal component."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is Osgood's model more applicable to mass communication or interpersonal communication?",
    "keywords": ["interpersonal", "communication"],
    "explanation": "Osgood's model is more applicable to interpersonal communication where source and receiver are physically present and can exchange roles."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Do the circles in Schramm's model need to overlap for communication to occur?",
    "keywords": ["yes", "overlap", "necessary", "shared", "understanding"],
    "explanation": "Yes, the circles representing accumulated experience must overlap for communication to occur, showing shared orientation is necessary."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is noise always external in communication?",
    "keywords": ["no", "internal", "external", "sources"],
    "explanation": "No, noise can come from both internal (psychological) and external (environmental) sources that distort the message."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Does feedback get stronger as the number of communication participants increases?",
    "keywords": ["no", "gradually", "diluted", "increases"],
    "explanation": "No, feedback gets gradually diluted when the number of participants increases, making it less immediate and direct."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Are geographical distances considered physical barriers?",
    "keywords": ["yes", "physical", "barriers"],
    "explanation": "Yes, geographical distances that prevent direct interaction are considered physical barriers in communication."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is selective perception something the sender or receiver does?",
    "keywords": ["receiver", "selects", "perceives", "based", "needs"],
    "explanation": "Selective perception is something the receiver does, seeing and hearing selectively based on personal needs and characteristics."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "According to Lakoff, are girls encouraged toward competition in communication?",
    "keywords": ["no", "passive", "empathetic", "active", "listening"],
    "explanation": "No, according to Lakoff, girls are taught to use passive, empathetic voices and encouraged toward active listening, not competition."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Do men typically present problems to gain support according to gender differences?",
    "keywords": ["no", "provide", "solutions", "assert", "control"],
    "explanation": "No, men typically want to provide solutions and assert control when hearing problems, while women present problems to gain support."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Are nonverbal behaviors like happiness and anger considered universal?",
    "keywords": ["yes", "universal", "across", "cultures"],
    "explanation": "Yes, nonverbal behaviors like happiness, anger, sadness, fear, disgust, interest, surprise, and love are considered universal across cultures."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is intrapersonal communication between two people?",
    "keywords": ["no", "within", "individual"],
    "explanation": "No, intrapersonal communication is communication within oneself, not between people."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Does hearing require interpretation of sounds?",
    "keywords": ["no", "involuntary", "perception", "interpretation", "required"],
    "explanation": "No, hearing is the involuntary perception of physical sounds and does not require interpretation or finding meaning."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Are nouns and verbs considered content words?",
    "keywords": ["yes", "open", "word", "classes", "content", "words"],
    "explanation": "Yes, nouns and verbs are open word classes, also called content words, which carry the core meaning of messages."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is transcription the same as active note taking?",
    "keywords": ["no", "transcription", "writing", "everything", "note", "taking", "selective"],
    "explanation": "No, transcription is writing everything said, while active note taking is selective and brief, capturing only key information."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Is scanning used for reading novels for pleasure?",
    "keywords": ["no", "light", "reading", "leisure"],
    "explanation": "No, scanning is for searching specific information, while light reading is for novels and leisure reading."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "Can a summary be written before making notes from a text?",
    "keywords": ["no", "notes", "required", "first"],
    "explanation": "No, notes must be made first as they provide the essential points needed to write an effective summary."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If a student is searching for a specific date in a history textbook, what reading skill are they using?",
    "keywords": ["scanning"],
    "explanation": "They are using scanning, which involves searching for specific information without reading the entire text."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When a teacher asks students to look at chapter headings before reading, what reading stage is this?",
    "keywords": ["pre-reading", "skimming", "survey"],
    "explanation": "This is the pre-reading stage where students use skimming/survey to get an overview before detailed reading."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If someone nods while saying 'yes', what function of nonverbal communication is this?",
    "keywords": ["complementing", "repeating"],
    "explanation": "This is complementing or repeating, where the nonverbal behavior reinforces the verbal message."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When a manager filters bad news before telling the CEO, what type of barrier is this?",
    "keywords": ["filtering", "status", "differences"],
    "explanation": "This is filtering, which often occurs due to status differences between communicators in organizational hierarchies."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If a listener only hears what confirms their existing beliefs, what psychological barrier is active?",
    "keywords": ["selective", "perception"],
    "explanation": "This is selective perception, where the receiver perceives information selectively based on personal biases and needs."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When technical terms from engineering confuse marketing staff, what type of barrier is this?",
    "keywords": ["linguistic", "jargon", "departmental", "specialization"],
    "explanation": "This is a linguistic barrier caused by departmental specialization and jargon that creates misunderstandings between different groups."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If poor internet connection disrupts a video conference, what type of barrier is this?",
    "keywords": ["technical", "barrier"],
    "explanation": "This is a technical barrier caused by technology issues like poor connectivity or audio/video quality problems."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When a speaker talks too fast with too much information, what barrier affects the audience?",
    "keywords": ["information", "overload"],
    "explanation": "This causes information overload, where listeners receive more information than they can process effectively."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If a woman presents a problem and a man immediately offers solutions, what gender communication difference is shown?",
    "keywords": ["men", "solutions", "women", "support"],
    "explanation": "This shows the gender difference where men typically offer solutions to assert control, while women often seek support and connection."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When a student uses the Cornell method during a lecture, what are they doing?",
    "keywords": ["note", "taking", "structured", "method"],
    "explanation": "They are using structured note taking with the Cornell method to organize information during a listening activity."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If a reader uses SQ3R for textbook study, what does the first 'R' (Review) involve?",
    "keywords": ["rereading", "answering", "questions", "strengthening", "understanding"],
    "explanation": "Review involves rereading important sections, answering prepared questions, and strengthening overall understanding of the material."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "When making notes from an essay, what should be identified first?",
    "keywords": ["thesis", "statement", "main", "idea"],
    "explanation": "The thesis statement (main idea of the entire essay) should be identified first to understand the central argument."
  },
  {
    "course": "LA111",
    "term": "T1",
    "q": "If a sentence begins with 'However', what relationship does it show between ideas?",
    "keywords": ["contrast", "comparison"],
    "explanation": "'However' shows contrast or comparison between ideas, indicating a difference or opposition to what was previously stated."
  },

    // --- QUESTION ONE ---
    {
        course: "MA110", term: "T1",
        q: "Express $2.0\\bar{72}$ as a fraction in its simplest form. (MA110 Test 1 2021)",
        a: "114/55",
        explanation: "To convert a repeating decimal, we use algebra to 'cancel out' the infinite tail. Let $x = 2.07272...$. Multiplying by 10 gives $10x = 20.7272...$ and multiplying by 1000 gives $1000x = 2072.7272...$. Subtracting these equations ($1000x - 10x$) eliminates the repeating part, leaving $990x = 2052$. Simplifying $\\frac{2052}{990}$ by dividing both by 18 gives us $\\frac{114}{55}$."
    },
    {
        course: "MA110", term: "T1",
        q: "Identify the Oblique Asymptote of $f(x)=\\frac{x^{2}+2}{x-1}$. (MA110 Test 1 2021)",
        a: "y=x+1",
        explanation: "Since the numerator's degree is higher than the denominator's, the graph follows a slanted line at infinity. We find this by long division: $x^2+2$ divided by $x-1$ equals $x+1$ with a remainder of 3. As $x$ becomes very large, the remainder fraction $3/(x-1)$ vanishes, leaving the line $y=x+1$. \n\n"
    },
    {
        course: "MA110", term: "T1",
        q: "Identify the Vertical Asymptote of $f(x)=\\frac{x^{2}+2}{x-1}$. (MA110 Test 1 2021)",
        a: "x=1",
        explanation: "Vertical asymptotes occur where the function is undefined. In a fraction, this is where the denominator is zero. Setting $x-1=0$ gives us $x=1$. On a graph, you will see the curve approach this vertical line but never touch it."
    },
    {
        course: "MA110", term: "T1",
        q: "Show that $2+\\sqrt{7}$ is irrational, given $\\sqrt{7}$ is irrational. What method is used? (MA110 Test 1 2021)",
        a: "contradiction",
        explanation: "We use 'Proof by Contradiction.' We start by assuming $2+\\sqrt{7}$ IS rational (can be written as $p/q$). If we subtract 2 from both sides, we get $\\sqrt{7} = p/q - 2$. This would mean $\\sqrt{7}$ is rational, which contradicts the fact that it is irrational. Therefore, our original assumption was wrong, and the number must be irrational."
    },
    {
        course: "MA110", term: "T1",
        q: "Evaluate the operation $(3*2)*-2$ where $a*b=a^b$. (MA110 Test 1 2021)",
        a: "1/81",
        explanation: "In math, we always handle the inner parentheses first. $3*2$ means $3^2$, which is $9$. Now we solve $9*-2$, which is $9^{-2}$. A negative exponent tells us to take the reciprocal: $1/9^2$, resulting in $1/81$."
    },

    // --- QUESTION TWO ---
    {
        course: "MA110", term: "T1",
        q: "Simplify the set expression $[(A \\cap B)' \\cap (A' \\cup B)]'$. (MA110 Test 1 2021)",
        a: "A",
        explanation: "Applying De Morgan’s Law to the outer complement changes the intersection to a union and flips the inner signs: $(A \\cap B) \\cup (A' \\cup B)'$. This becomes $(A \\cap B) \\cup (A \\cap B')$. Using the distributive law, we factor out $A \\cap$, leaving $A \\cap (B \\cup B')$. Since $B$ union its complement is the Universal set ($U$), $A \\cap U = A$."
    },
    {
        course: "MA110", term: "T1",
        q: "What is the domain of $f(x)=\\sqrt{\\frac{x+1}{x-1}}$? (MA110 Test 1 2021)",
        a: "(-inf, -1] U (1, inf)",
        explanation: "Two things to watch for: the value under the root must be $\\ge 0$, and the denominator cannot be $0$. We test intervals: below $-1$, between $-1$ and $1$, and above $1$. The ratio is only positive in $(-\\infty, -1]$ and $(1, \\infty)$. We use a parenthesis for $1$ because $x$ cannot equal $1$. \n\n"
    },
    {
        course: "MA110", term: "T1",
        q: "For $4x^2+3x-2=0$, find the sum of the squared roots $\\alpha^2 + \\beta^2$. (MA110 Test 1 2021)",
        a: "25/16",
        explanation: "From Vieta's formulas, sum $\\alpha+\\beta = -3/4$ and product $\\alpha\\beta = -1/2$. To find $\\alpha^2+\\beta^2$, use the identity $(\\alpha+\\beta)^2 - 2\\alpha\\beta$. Plugging in: $(-3/4)^2 - 2(-1/2) = 9/16 + 1 = 25/16$."
    },
    {
        course: "MA110", term: "T1",
        q: "Solve $10-\\sqrt{2x+7}\\le3$. (MA110 Test 1 2021)",
        a: "x >= 21",
        explanation: "Isolate the root: $10-3 \\le \\sqrt{2x+7}$, so $7 \\le \\sqrt{2x+7}$. Squaring both sides gives $49 \\le 2x+7$. Subtracting 7 gives $42 \\le 2x$, and dividing by 2 gives $x \\ge 21$. \n\n"
    },
    {
        course: "MA110", term: "T1",
        q: "Solve for $y$ in $\\frac{1}{x+iy}+\\frac{1}{1+3i}=1$. (MA110 Test 1 2021)",
        a: "-1/3",
        explanation: "Isolate $\\frac{1}{x+iy}$ and rationalize the complex number $\\frac{1}{1+3i}$. This yields $\\frac{1}{x+iy} = \\frac{9+3i}{10}$. Inverting both sides gives $x+iy = \\frac{10}{9+3i}$, which rationalizes to $1 - \\frac{1}{3}i$. Therefore, the imaginary part $y$ is $-1/3$."
    },

    // --- QUESTION THREE ---
    {
        course: "MA110", term: "T1",
        q: "Find the expression for $k(x)=|2x-1|-|x+2|$ when $x < -2$. (MA110 Test 1 2021)",
        a: "-x+3",
        explanation: "When $x < -2$, the expressions inside both absolute value bars are negative. To remove the bars, we must multiply the contents by $-1$: $k(x) = -(2x-1) - (-(x+2))$. Simplifying this gives $-2x+1+x+2$, which is $-x+3$. \n\n"
    },
    {
        course: "MA110", term: "T1",
        q: "Find the remainder of $(x^3+2x^2+x-2) \\div (x-(1+i))$. (MA110 Test 1 2021)",
        a: "-3+7i",
        explanation: "We use synthetic division with the root $1+i$. The process involves complex multiplication at each step. The final multiplication $(3+4i) \\times (1+i)$ results in $-1+7i$. Adding this to the constant term $-2$ gives the final remainder of $-3+7i$."
    },
    {
        course: "MA110", term: "T1",
        q: "Given $A=[-7,8) \\cup [11,\\infty)$, find the intersection $A \\cap B$ where $B=[0,20]$. (MA110 Test 1 2021)",
        a: "[0, 8) U [11, 20]",
        explanation: "The intersection is where the two sets overlap. Set $B$ starts at 0 and ends at 20. Overlapping this with $A$, we get the numbers from 0 up to (but not including) 8, and the numbers from 11 up to 20. \n\n"
    },
    {
        course: "MA110", term: "T1",
        q: "Simplify $\\frac{\\sqrt{3}+1}{\\sqrt{3}-1}+\\sqrt{3}-1$ to $a+b\\sqrt{3}$. (MA110 Test 1 2021)",
        a: "1+2sqrt(3)",
        explanation: "First, rationalize the fraction: multiply top and bottom by $\\sqrt{3}+1$ to get $2+\\sqrt{3}$. Then, simply add the remaining terms: $(2+\\sqrt{3}) + \\sqrt{3}-1$. This simplifies to $1+2\\sqrt{3}$."
    },
    {
        course: "MA110", term: "T1",
        q: "Is $f(x)=x^5+x^3+x$ even, odd, or neither? (MA110 Test 1 2021)",
        a: "odd",
        explanation: "A function is odd if $f(-x) = -f(x)$. Plugging in $-x$: $(-x)^5 + (-x)^3 + (-x) = -x^5 - x^3 - x$. If we factor out the negative, we get $-(x^5+x^3+x)$, which is exactly $-f(x)$."
    },

  // ============================================================
// === CH110 GENERAL CHEMISTRY - COMPLETE SHORT ANSWER DECK ===
// === COURSE: CH110, TERM: T1 ================================
// === TOTAL QUESTIONS: 126 ===================================
// ============================================================

  // ============================================================
  // MODULE 1: SCIENTIFIC METHOD & CHEMISTRY BASICS (7 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is chemistry?",
    "keywords": ["study", "matter", "changes", "undergoes"],
    "explanation": "Chemistry is the study of matter and the changes it undergoes."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the 5 steps of the Scientific Method?",
    "keywords": ["definition", "problem", "experiments", "observations", "data", "interpretation", "hypothesis", "law", "theory"],
    "explanation": "1. Careful definition of the problem\n2. Performing experiments (doing experiments, making observations, recording data)\n3. Interpretation of results (formulating a hypothesis)\n4. Summarizing information as a law\n5. Developing theories (hypotheses that survive validation evolve into theories)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the difference between qualitative and quantitative data?",
    "keywords": ["qualitative", "general", "observations", "quantitative", "numbers", "measurements"],
    "explanation": "Qualitative data: General observations about the system (e.g., 'the solution turned blue')\nQuantitative data: Numbers obtained by measurements (e.g., '25.3 mL', '80.5°C')"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Define hypothesis.",
    "keywords": ["tentative", "explanation", "set", "observations"],
    "explanation": "A hypothesis is a tentative explanation for a set of observations."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Define law (scientific law).",
    "keywords": ["concise", "verbal", "mathematical", "statement", "relationship", "always", "same", "conditions"],
    "explanation": "A law is a concise verbal or mathematical statement of a relationship between phenomena that is always the same under the same conditions. Example: $F = ma$ (Newton's Second Law)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Define theory (scientific theory).",
    "keywords": ["unifying", "principle", "explains", "facts", "laws", "tested", "modified", "disproven"],
    "explanation": "A theory is a unifying principle that explains a body of facts and/or laws based on them. Theories are constantly tested and modified if disproven by experimental observations."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a system in scientific terminology?",
    "keywords": ["part", "universe", "under", "investigation"],
    "explanation": "A system is the part of the universe that is under investigation."
  },

  // ============================================================
  // MODULE 2: CLASSIFICATION OF MATTER (14 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is matter?",
    "keywords": ["occupies", "space", "has", "mass"],
    "explanation": "Matter is anything that occupies space and has mass. It includes visible things (water, earth, trees) and invisible things (air)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a substance?",
    "keywords": ["definite", "constant", "composition", "distinct", "properties", "cannot", "separated", "physical"],
    "explanation": "A substance is a form of matter that has a definite (constant) composition and distinct properties. A substance cannot be separated into other kinds of matter by physical processes. Examples: water, ammonia, gold, oxygen."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a mixture?",
    "keywords": ["combination", "two", "more", "substances", "retain", "distinct", "identities", "separated", "physical"],
    "explanation": "A mixture is a combination of two or more substances in which the substances retain their distinct identities. Mixtures do not have constant composition and can be separated by physical methods. Examples: air, soft drinks, milk, cement."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a homogeneous mixture?",
    "keywords": ["homogeneous", "solution", "composition", "uniform", "throughout"],
    "explanation": "A homogeneous mixture (also called a solution) is a mixture in which the composition is uniform throughout. Example: sugar dissolved in water, air."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a heterogeneous mixture?",
    "keywords": ["heterogeneous", "composition", "not", "uniform"],
    "explanation": "A heterogeneous mixture is a mixture in which the composition is not uniform. Example: sand mixed with iron filings."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an element?",
    "keywords": ["cannot", "separated", "simpler", "chemical", "one", "kind", "atom"],
    "explanation": "An element is a substance that cannot be separated into simpler substances by chemical means. Each element is composed of only one kind of atom. Examples: gold ($\\ce{Au}$), oxygen ($\\ce{O2}$), carbon ($\\ce{C}$)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How many elements exist?",
    "keywords": ["118", "total", "94", "natural", "24", "synthetic"],
    "explanation": "There are 118 elements total: 94 occur naturally on Earth and 24 are synthetic (created by scientists via nuclear processes)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a compound?",
    "keywords": ["two", "more", "elements", "chemically", "united", "fixed", "proportions", "separated", "chemical"],
    "explanation": "A compound is a substance composed of two or more elements chemically united in fixed proportions. Compounds can only be separated by chemical means into their pure components. Examples: water ($\\ce{H2O}$), carbon dioxide ($\\ce{CO2}$)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the three states of matter?",
    "keywords": ["solid", "liquid", "gas"],
    "explanation": "Solid, liquid, and gas."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a physical property?",
    "keywords": ["measured", "observed", "without", "changing", "composition"],
    "explanation": "A physical property can be measured and observed without changing the composition of a substance. Examples: boiling point, melting point, color, density, mass."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a chemical property?",
    "keywords": ["observed", "chemical", "change"],
    "explanation": "A chemical property is observed only if there is a chemical change. Example: flammability, reactivity with acid."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an extensive property?",
    "keywords": ["depends", "amount", "matter", "added"],
    "explanation": "An extensive property depends on the amount of matter being considered. Values of extensive properties can be added together. Examples: mass, volume."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an intensive property?",
    "keywords": ["does not", "depend", "amount", "matter", "not", "additive"],
    "explanation": "An intensive property does not depend on the amount of matter being considered. Intensive properties are not additive. Examples: density, temperature."
  },

  // ============================================================
  // MODULE 3: MEASUREMENT & SI UNITS (10 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the 7 SI base units?",
    "keywords": ["metre", "kilogram", "second", "ampere", "kelvin", "mole", "candela", "length", "mass", "time", "current", "temperature", "amount", "luminous"],
    "explanation": "1. Length - metre (m)\n2. Mass - kilogram (kg)\n3. Time - second (s)\n4. Electrical current - ampere (A)\n5. Temperature - kelvin (K)\n6. Amount of substance - mole (mol)\n7. Luminous intensity - candela (cd)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the difference between mass and weight?",
    "keywords": ["mass", "amount", "matter", "constant", "weight", "force", "gravity", "depends", "location"],
    "explanation": "Mass: Measure of the amount of matter in an object; constant and does not depend on location.\nWeight: Force that gravity exerts on an object; depends on location (e.g., objects on the moon weigh 1/6 of their Earth weight)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the SI derived unit for volume?",
    "keywords": ["cubic", "metre", "m3", "cm3", "dm3"],
    "explanation": "The SI derived unit for volume is cubic metre (m³). Chemists commonly use cubic centimetre (cm³) and cubic decimetre (dm³)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the relationships between volume units?",
    "keywords": ["1 L", "1 dm3", "1000 mL", "1000 cm3", "1 mL", "1 cm3"],
    "explanation": "1 L = 1 dm³ = 1000 mL = 1000 cm³\n1 mL = 1 cm³\n1 cm³ = (1×10⁻² m)³ = 1×10⁻⁶ m³\n1 dm³ = (1×10⁻¹ m)³ = 1×10⁻³ m³"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is density and what is its equation?",
    "keywords": ["density", "mass", "volume", "rho", "m/V", "g/cm3", "g/mL", "kg/m3"],
    "explanation": "Equation: ρ = m/V\nCommon units:\n- Solids: g/cm³\n- Liquids: g/mL (equivalent to g/cm³)\n- Gases: g/L\n- SI unit: kg/m³"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the conversion factor between g/cm³ and kg/m³?",
    "keywords": ["1 g/cm3", "1 g/mL", "1000 kg/m3"],
    "explanation": "1 g/cm³ = 1 g/mL = 1000 kg/m³"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the three common temperature scales?",
    "keywords": ["Fahrenheit", "Celsius", "Kelvin"],
    "explanation": "Fahrenheit (°F), Celsius (°C), and kelvin (K)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the temperature conversion equations?",
    "keywords": ["°C = (°F - 32) × 5/9", "°F = (9/5 × °C) + 32", "K = °C + 273.15"],
    "explanation": "°C = (°F - 32) × 5/9\n°F = (9/5 × °C) + 32\nK = °C + 273.15"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are key temperature reference points on all three scales?",
    "keywords": ["freezing", "32°F", "0°C", "273 K", "room", "77°F", "25°C", "298 K", "body", "98.6°F", "37°C", "310 K", "boiling", "212°F", "100°C", "373 K"],
    "explanation": "Water freezing: 32°F = 0°C = 273 K\nRoom temperature: 77°F = 25°C = 298 K\nNormal body temperature: 98.6°F = 37°C = 310 K\nWater boiling: 212°F = 100°C = 373 K"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the Kelvin scale?",
    "keywords": ["absolute", "scale", "zero", "0 K", "-273.15°C", "same", "magnitude", "Celsius"],
    "explanation": "The kelvin is the SI base unit of temperature and the absolute scale. Zero kelvin (0 K) is the lowest temperature that can theoretically be attained. The kelvin scale has the same unit magnitude as Celsius (1°C = 1 K), but 0 K = -273.15°C."
  },

  // ============================================================
  // MODULE 4: SCIENTIFIC NOTATION (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is scientific notation?",
    "keywords": ["N × 10^n", "N between 1 and 10", "n integer"],
    "explanation": "Scientific notation expresses numbers in the form: N × 10ⁿ where N is a number between 1 and 10, and n is a positive or negative integer."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you convert a number to scientific notation?",
    "keywords": ["decimal", "moves", "left", "positive", "right", "negative"],
    "explanation": "Count how many places the decimal point must be moved to give a number between 1 and 10:\n- If the decimal moves left, n is positive\n- If the decimal moves right, n is negative\n\nExamples:\n568.762 = 5.68762 × 10² (moved 2 places left, n = +2)\n0.00000772 = 7.72 × 10⁻⁶ (moved 6 places right, n = -6)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you add or subtract numbers in scientific notation?",
    "keywords": ["same", "exponent", "add", "subtract", "coefficients"],
    "explanation": "Write each number with the same exponent, then add or subtract the coefficients while keeping the exponent the same.\n\nExample: 7.4×10³ + 2.1×10³ = (7.4 + 2.1)×10³ = 9.5×10³"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you multiply numbers in scientific notation?",
    "keywords": ["multiply", "coefficients", "add", "exponents"],
    "explanation": "Multiply the coefficients and add the exponents.\n\nExample: (8.0×10⁴) × (5.0×10²) = (8.0 × 5.0) × 10⁴⁺² = 40×10⁶ = 4.0×10⁷"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you divide numbers in scientific notation?",
    "keywords": ["divide", "coefficients", "subtract", "exponents"],
    "explanation": "Divide the coefficients and subtract the exponents.\n\nExample: (6.9×10⁷) ÷ (3.0×10⁻⁵) = (6.9/3.0) × 10⁷⁻⁽⁻⁵⁾ = 2.3×10¹²"
  },

  // ============================================================
  // MODULE 5: SIGNIFICANT FIGURES (6 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are significant figures?",
    "keywords": ["meaningful", "digits", "measured", "calculated", "uncertain", "last"],
    "explanation": "Significant figures are the meaningful digits in a measured or calculated quantity. The last digit is understood to be uncertain. Only integers are exact; all measurements have some margin of error indicated by significant figures."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the 5 guidelines for determining significant figures?",
    "keywords": ["non-zero", "significant", "zeros", "between", "left", "right", "decimal", "trailing"],
    "explanation": "1. Any non-zero digit is significant (845 has 3 sig figs)\n2. Zeros between non-zero digits are significant (606 has 3 sig figs; 40501 has 5 sig figs)\n3. Zeros to the left of the first non-zero digit are NOT significant (0.08 has 1 sig fig; 0.000034 has 2 sig figs)\n4. If a number is >1, all zeros to the right of the decimal are significant (2.0 has 2 sig figs; 40.062 has 5 sig figs). If a number is <1, only zeros at the end and zeros between non-zero digits are significant (0.090 has 2 sig figs; 0.3005 has 4 sig figs)\n5. Trailing zeros without a decimal point may or may not be significant (400 could be 1, 2, or 3 sig figs - use scientific notation to clarify)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the rule for significant figures in addition and subtraction?",
    "keywords": ["fewest", "decimal", "places", "right"],
    "explanation": "The answer cannot have more digits to the right of the decimal point than the original number with the fewest decimal places.\n\nExample:\n  89.332\n+  1.1    ← only 1 decimal place\n--------\n  90.432 → rounds to 90.4"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the rule for significant figures in multiplication and division?",
    "keywords": ["smallest", "number", "significant", "figures"],
    "explanation": "The number of significant figures in the final product or quotient is determined by the original number that has the smallest number of significant figures.\n\nExample:\n  4.5039\n×   2.8    ← 2 sig figs (limiting)\n--------\n 12.60192 → rounds to 13 (2 sig figs)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the rounding procedure for significant figures?",
    "keywords": ["<5", "drop", "≥5", "add", "1"],
    "explanation": "- If the first digit following the point of rounding is <5: drop all following digits (8.724 → 8.72)\n- If the first digit following the point of rounding is ≥5: add 1 to the preceding digit (8.727 → 8.73; 0.425 → 0.43)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How are exact numbers treated in significant figure calculations?",
    "keywords": ["exact", "definitions", "counting", "infinite", "significant", "figures"],
    "explanation": "Exact numbers obtained from definitions or by counting can be considered to have an infinite number of significant figures. They do not limit the number of significant figures in the answer.\n\nExample: mass of 8 objects each 0.2786 g = 0.2786 g × 8 = 2.229 g (not rounded to 1 sig fig because 8 is exact)."
  },

  // ============================================================
  // MODULE 6: PRECISION, ACCURACY & ERRORS (6 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is accuracy?",
    "keywords": ["close", "measurement", "true", "value"],
    "explanation": "Accuracy tells how close a measurement is to the true value of the quantity that was measured."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is precision?",
    "keywords": ["closely", "measurements", "agree", "one", "another"],
    "explanation": "Precision refers to how closely two or more measurements of the same quantity agree with one another."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Can measurements be precise but not accurate?",
    "keywords": ["yes", "precise", "close", "each", "systematic", "errors", "consistently", "wrong"],
    "explanation": "Yes. Highly precise measurements (close to each other) do not necessarily guarantee accurate results if systematic errors are present. The measurements could all be consistently wrong (far from the true value) but still very close to each other."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is measurement error?",
    "keywords": ["difference", "true", "value", "measured"],
    "explanation": "Measurement error is the difference between the true value and the measured value."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are random (indeterminate) errors?",
    "keywords": ["equal", "chance", "high", "low", "natural", "variations", "technique", "scatter", "precision"],
    "explanation": "Random errors mean that a measurement has an equal chance of being high or low. They result from natural variations, poor technique, or lack of measurement skill. Random errors reduce precision and cause scatter in data."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are systematic (determinate) errors?",
    "keywords": ["consistently", "same", "direction", "high", "low", "faulty", "equipment", "calibration", "accuracy", "bias"],
    "explanation": "Systematic errors occur consistently in the same direction (either always high or always low). They result from faulty experimental procedures, poorly calibrated equipment, uncertified analysts, or non-accredited laboratories. Systematic errors reduce accuracy and cause bias in data."
  },

  // ============================================================
  // MODULE 7: DIMENSIONAL ANALYSIS (4 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is dimensional analysis (factor-label method)?",
    "keywords": ["units", "cancel", "conversion", "factors", "desired", "final"],
    "explanation": "Dimensional analysis is a problem-solving method that uses the units of parameters to solve problems through conversion factors. Units must cancel properly to give the desired final unit."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an equivalence statement?",
    "keywords": ["mathematical", "expression", "two", "values", "equals", "sign"],
    "explanation": "An equivalence statement is a mathematical expression of two values linked by an equals sign. Examples: 1 foot = 12 inches, 1 kg = 1000 g."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you create conversion factors from an equivalence statement?",
    "keywords": ["LHS/RHS", "RHS/LHS", "=1"],
    "explanation": "From an equivalence statement (LHS = RHS), you get two conversion factors:\n- LHS/RHS = 1\n- RHS/LHS = 1\n\nExample from '1 foot = 12 inches':\n- 1 ft/12 in = 1\n- 12 in/1 ft = 1"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you choose which conversion factor to use?",
    "keywords": ["cancel", "unwanted", "units", "correct", "desired"],
    "explanation": "Multiply by the conversion factor that will cancel the unwanted units and give the correct desired units in the answer."
  },

  // ============================================================
  // MODULE 8: DALTON'S ATOMIC THEORY (7 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who was Democritus and what did he propose?",
    "keywords": ["ancient", "greek", "philosopher", "atoms", "discrete", "units"],
    "explanation": "Democritus (ca 460 - ca 370 BC) was an ancient Greek philosopher who first proposed that matter is composed of discrete units called atoms. This was a philosophical concept that took over 2000 years to become scientifically validated."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who is considered the 'father of modern chemistry' and why?",
    "keywords": ["Antoine", "Lavoisier", "experimental", "foundation", "elements", "oxygen", "hydrogen", "silicon", "sulfur"],
    "explanation": "Antoine Lavoisier (1743-1794) is considered the 'father of modern chemistry' because he laid the experimental foundation of modern chemistry and put together the first extensive list of elements including oxygen, hydrogen, silicon, and sulfur."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the 4 postulates of Dalton's Atomic Theory?",
    "keywords": ["indivisible", "atoms", "element", "one", "kind", "compound", "fixed", "proportions", "rearranges", "not", "created", "destroyed"],
    "explanation": "1. All matter is composed of indivisible atoms. An atom is an extremely small particle of matter that retains its identity during chemical reactions.\n2. An element is composed of only one kind of atom. Each atom of a given kind has the same properties, including a characteristic mass.\n3. A compound is composed of atoms of two or more elements chemically combined in fixed proportions. The relative numbers of atoms occur in simple ratios (e.g., water has H:O ratio of 2:1).\n4. A chemical reaction rearranges atoms. Atoms are not created, destroyed, or broken into smaller particles by chemical reactions."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an atomic symbol?",
    "keywords": ["one", "two", "letter", "notation", "represent", "atom", "capitalized", "lowercase"],
    "explanation": "An atomic symbol is a one- or two-letter notation used to represent an atom corresponding to a particular element. The first letter is always capitalized; any additional letter is lowercase. Examples: Cl (chlorine), Na (sodium from Latin 'natrium')."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the Law of Conservation of Mass?",
    "keywords": ["total", "mass", "remains", "constant", "chemical", "reaction", "neither", "created", "destroyed"],
    "explanation": "The Law of Conservation of Mass states that the total mass remains constant during a chemical reaction. This is explained by Dalton's theory: atoms are neither created nor destroyed in chemical reactions."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the Law of Definite Proportions (Law of Constant Composition)?",
    "keywords": ["pure", "compound", "always", "definite", "constant", "proportions", "elements", "mass"],
    "explanation": "A pure compound, whatever its source, always contains definite or constant proportions of the elements by mass.\n\nExample: Water is always 11.1% hydrogen and 88.9% oxygen by mass, regardless of its source."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the Law of Multiple Proportions?",
    "keywords": ["two", "more", "compounds", "same", "elements", "given", "mass", "ratio", "small", "whole", "number"],
    "explanation": "For two or more compounds composed of the same elements, for a given mass of one element, the ratio of masses of the other element in the compounds is a small whole-number ratio.\n\nExample:\n- Hydrogen peroxide: 0.0630 g H per 1 g O\n- Water: 0.126 g H per 1 g O\n- Ratio: 0.126/0.0630 = 2/1 (small whole number)"
  },

  // ============================================================
  // MODULE 9: EARLY ATOMIC EXPERIMENTS (9 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who discovered the electron, when, and how?",
    "keywords": ["J.J.", "Thomson", "1897", "cathode", "ray", "tube", "charge", "mass", "ratio"],
    "explanation": "Discoverer: J.J. Thomson\nYear: 1897\nMethod: Cathode ray tube experiments studying electrical conduction through gases\nKey finding: Determined the charge-to-mass ratio: e/mₑ = -1.76×10⁸ coulombs/gram"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How were the charge and mass of the electron determined?",
    "keywords": ["Millikan", "oil", "drop", "1909", "charge", "1.602×10⁻¹⁹", "mass", "9.109×10⁻²⁸", "1840", "lighter", "hydrogen"],
    "explanation": "- Robert Millikan's oil drop experiment (1909) determined the electron charge: e = 1.602×10⁻¹⁹ coulombs\n- Using Thomson's e/mₑ ratio, the electron mass was calculated: mₑ = 9.109×10⁻²⁸ g = 9.109×10⁻³¹ kg\n- The electron is 1840 times lighter than a hydrogen atom"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What was Thomson's Plum Pudding Model of the atom?",
    "keywords": ["sphere", "positive", "charge", "negative", "electrons", "embedded", "disproved", "Rutherford"],
    "explanation": "Thomson's model proposed that:\n- The atom consisted of a sphere of positive charge\n- Negative electrons were embedded throughout this positive 'pudding'\n- This model was later disproved by Rutherford's experiments"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is radioactivity?",
    "keywords": ["spontaneous", "emission", "radiation", "atom", "Becquerel", "1895", "Curie"],
    "explanation": "Radioactivity is the spontaneous emission of radiation by an atom. It was first observed by Henri Becquerel in 1895 and studied by Marie and Pierre Curie."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the three types of radioactive radiation?",
    "keywords": ["alpha", "beta", "gamma", "positively", "charged", "negatively", "electrons", "no", "charge", "electromagnetic"],
    "explanation": "1. Alpha (α) rays: Positively charged particles (helium nuclei, ⁴₂He or He²⁺)\n2. Beta (β) rays: Negatively charged particles (electrons, ⁰₋₁e)\n3. Gamma (γ) rays: No charge; electromagnetic radiation"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Describe Rutherford's gold foil experiment.",
    "keywords": ["1911", "alpha", "particles", "gold", "foil", "passed", "through", "few", "deflected", "empty", "space", "tiny", "dense", "nucleus"],
    "explanation": "Experiment (1911): Ernest Rutherford bombarded thin gold foil with alpha particles.\n\nObservations:\n- Most α particles passed straight through the foil\n- A few (~1 in 8000) were deflected at large angles or bounced back\n\nConclusions:\n- Most of the atom is empty space (explains why most particles pass through)\n- The atom has a tiny, dense, positively charged nucleus (explains large-angle deflections)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the key dimensions in Rutherford's nuclear model?",
    "keywords": ["nuclear", "diameter", "10⁻¹⁵ m", "atomic", "diameter", "10⁻¹⁰ m", "100,000", "times", "smaller"],
    "explanation": "- Nuclear diameter ≈ 10⁻¹⁵ m (1 femtometre or 10⁻³ pm)\n- Atomic diameter ≈ 10⁻¹⁰ m (1 Ångström or 100 pm)\n\nThe nucleus is about 100,000 times smaller than the atom.\n\nAnalogy: If a golf ball represented the nucleus, the atom would be about 3 miles (5 km) in diameter."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who discovered the proton and when?",
    "keywords": ["Ernest", "Rutherford", "1919", "alpha", "particles", "nitrogen", "nuclear", "reaction"],
    "explanation": "The proton was discovered by Ernest Rutherford in 1919 during experiments in which alpha particles struck nitrogen atoms, producing the nuclear reaction:\n\n¹⁴₇N + ⁴₂α → ¹⁷₈O + ¹₁p"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who discovered the neutron and when?",
    "keywords": ["James", "Chadwick", "1932", "beryllium", "alpha", "particles", "knocked", "out"],
    "explanation": "The neutron was discovered by James Chadwick in 1932 during experiments in which beryllium nuclei were struck by alpha particles, knocking out neutrons:\n\n⁹₄Be + ⁴₂α → ¹²₆C + ¹₀n"
  },

  // ============================================================
  // MODULE 10: MODERN ATOMIC STRUCTURE (9 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a proton?",
    "keywords": ["positive", "charge", "+1", "mass", "1840", "electron", "nucleus"],
    "explanation": "A proton is a nuclear particle having:\n- Charge: Positive (+1), equal in magnitude to that of the electron\n- Mass: 1840 times that of an electron (1.673×10⁻²⁴ g)\n- Location: Nucleus"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a neutron?",
    "keywords": ["neutral", "no", "charge", "mass", "almost", "identical", "proton", "nucleus"],
    "explanation": "A neutron is a nuclear particle having:\n- Charge: Neutral (no electric charge)\n- Mass: Almost identical to proton (1.675×10⁻²⁴ g)\n- Location: Nucleus"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an electron?",
    "keywords": ["very", "light", "negatively", "charged", "-1", "mass", "9.109×10⁻²⁸", "g", "around", "nucleus"],
    "explanation": "An electron is a very light, negatively charged particle:\n- Charge: -1\n- Mass: 9.109×10⁻²⁸ g\n- Location: Exists in the region around the atom's positively charged nucleus"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the atomic number (Z)?",
    "keywords": ["number", "protons", "nucleus", "uniquely", "identifies", "element", "neutral", "equals", "electrons"],
    "explanation": "The atomic number is the number of protons in the nucleus of an atom. It uniquely identifies an element.\n- For neutral atoms: Z = number of protons = number of electrons"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the mass number (A)?",
    "keywords": ["total", "number", "protons", "neutrons", "nucleus", "A = Z + N"],
    "explanation": "The mass number is the total number of protons and neutrons in the nucleus.\nA = Z + N\nwhere N = number of neutrons"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a nuclide?",
    "keywords": ["atom", "characterized", "definite", "atomic", "number", "mass", "number"],
    "explanation": "A nuclide is an atom characterized by a definite atomic number and mass number."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How is a nuclide written?",
    "keywords": ["^A_Z X", "element", "symbol", "mass", "number", "superscript", "atomic", "subscript"],
    "explanation": "A nuclide is written as: ^A_Z X\nwhere:\n- X = element symbol\n- A = mass number (superscript, left)\n- Z = atomic number (subscript, left)\n\nExample: ²³₁₁Na (sodium with 11 protons and 12 neutrons)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are isotopes?",
    "keywords": ["same", "atomic", "number", "different", "mass", "number", "same", "protons", "different", "neutrons"],
    "explanation": "Isotopes are atoms whose nuclei have the same atomic number (Z) but different mass numbers (A).\n\nThis means they have:\n- ✅ Same number of protons\n- ✅ Same number of electrons (if neutral)\n- ✅ Same chemical properties\n- ❌ Different numbers of neutrons\n- ❌ Different masses\n\nExample: Carbon isotopes ¹²₆C, ¹³₆C, ¹⁴₆C all have 6 protons but have 6, 7, and 8 neutrons respectively."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the nucleus of an atom?",
    "keywords": ["central", "core", "positively", "charged", "contains", "most", "mass", "protons", "neutrons", "nucleons"],
    "explanation": "The nucleus is the atom's central core that is:\n- Positively charged\n- Contains most of the atom's mass (≥99.95%)\n- Composed of protons and neutrons (collectively called nucleons)"
  },

  // ============================================================
  // MODULE 11: PERIODIC TABLE (13 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "Who developed the periodic table?",
    "keywords": ["Dmitri", "Mendeleev", "J.", "Lothar", "Meyer", "1869", "atomic", "mass", "periodic", "patterns"],
    "explanation": "Dmitri Mendeleev (1834-1907) and J. Lothar Meyer (1830-1895) working independently in 1869. They arranged elements by atomic mass and noticed periodic patterns in properties."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How is the modern periodic table arranged?",
    "keywords": ["atomic", "number", "rows", "columns", "regular", "repetition", "properties"],
    "explanation": "The modern periodic table arranges elements by atomic number (not atomic mass) in rows and columns that highlight regular repetition of properties."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a period in the periodic table?",
    "keywords": ["horizontal", "row", "7", "periods"],
    "explanation": "A period consists of the elements in any one horizontal row of the periodic table. There are 7 periods."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a group in the periodic table?",
    "keywords": ["vertical", "column", "similar", "chemical", "properties"],
    "explanation": "A group consists of the elements in any one vertical column of the periodic table. Elements in the same group have similar chemical properties."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the three group numbering systems?",
    "keywords": ["North", "American", "Roman", "numerals", "A", "B", "European", "IUPAC", "1", "18"],
    "explanation": "1. North American: Roman numerals with letters A and B (IA, IIA...VIIIA, IB...VIIIB)\n2. European: Similar to North American but some A and B are interchanged\n3. IUPAC (recommended): Numbers 1 to 18"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are main-group elements?",
    "keywords": ["representative", "A", "groups", "1", "2", "13-18"],
    "explanation": "Main-group elements (also called representative elements) are:\n- The A groups in the North American system\n- Groups 1, 2, and 13-18 in the IUPAC system"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are transition elements?",
    "keywords": ["B", "groups", "3-12"],
    "explanation": "Transition elements are:\n- The B groups in the North American system\n- Groups 3-12 in the IUPAC system"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are inner transition elements?",
    "keywords": ["lanthanides", "actinides", "bottom", "two", "rows"],
    "explanation": "Inner transition elements are the two rows of elements at the bottom of the periodic table:\n- Lanthanides: First row starting with lanthanum (La)\n- Actinides: Second row starting with actinium (Ac)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name the special groups in the periodic table.",
    "keywords": ["alkali", "metals", "alkaline", "earth", "chalcogens", "halogens", "noble", "gases"],
    "explanation": "Group IA (1): Alkali metals (Li, Na, K, Rb, Cs, Fr)\nGroup IIA (2): Alkaline earth metals (Be, Mg, Ca, Sr, Ba, Ra)\nGroup VIA (16): Chalcogens (O, S, Se, Te, Po)\nGroup VIIA (17): Halogens (F, Cl, Br, I, At)\nGroup VIIIA (18): Noble gases (He, Ne, Ar, Kr, Xe, Rn)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How many elements are in each period?",
    "keywords": ["period 1", "2", "period 2", "8", "period 3", "8", "period 4", "18", "period 5", "18", "period 6", "32", "period 7", "incomplete"],
    "explanation": "Period 1: 2 elements (H to He)\nPeriod 2: 8 elements (Li to Ne)\nPeriod 3: 8 elements (Na to Ar)\nPeriod 4: 18 elements (K to Kr)\nPeriod 5: 18 elements (Rb to Xe)\nPeriod 6: 32 elements (includes lanthanides)\nPeriod 7: Incomplete (includes actinides)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a metal?",
    "keywords": ["lustre", "shine", "conductor", "heat", "electricity", "malleable", "ductile", "solids", "mercury", "left", "side"],
    "explanation": "A metal is a substance or mixture that has:\n- Characteristic lustre (shine)\n- Good conductor of heat and electricity\n- Malleable (can be hammered into sheets)\n- Ductile (can be drawn into wire)\n- Mostly solids at room temperature (except mercury, Hg)\n- Located on the left side of the periodic table"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a non-metal?",
    "keywords": ["poor", "conductor", "heat", "electricity", "gases", "brittle", "solids", "right", "side"],
    "explanation": "A non-metal is an element that does not exhibit the characteristics of a metal:\n- Poor conductors of heat and electricity\n- Mostly gases (Cl₂, O₂, N₂) or brittle solids (P, S, I₂)\n- Located on the right side of the periodic table"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a metalloid (semimetal)?",
    "keywords": ["both", "metallic", "non-metallic", "border", "staircase", "semiconductors", "B", "Si", "Ge", "As", "Sb", "Te"],
    "explanation": "A metalloid is an element having both metallic and non-metallic properties:\n- Border the staircase line separating metals from non-metals\n- Usually good semiconductors (poor conductors at room temperature but moderate conductors at high temperature)\n- Examples: B, Si, Ge, As, Sb, Te"
  },

  // ============================================================
  // MODULE 12: MOLECULES & MOLECULAR COMPOUNDS (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a molecule?",
    "keywords": ["definite", "group", "atoms", "chemically", "bonded"],
    "explanation": "A molecule is a definite group of atoms that are chemically bonded together. Examples: H₂O, NH₃, CO₂, O₂, Cl₂."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a molecular formula?",
    "keywords": ["exact", "number", "different", "atoms", "each", "element", "molecule"],
    "explanation": "A molecular formula gives the exact number of different atoms of each element in a molecule.\n\nExamples:\n- H₂O: 2 hydrogen atoms, 1 oxygen atom\n- H₂O₂: 2 hydrogen atoms, 2 oxygen atoms\n- C₂H₆O: 2 carbon atoms, 6 hydrogen atoms, 1 oxygen atom"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a structural formula?",
    "keywords": ["shows", "how", "atoms", "bonded", "molecule"],
    "explanation": "A structural formula is a chemical formula that shows how the atoms are bonded in a molecule.\n\nExamples:\n- H-O-H (shows two H atoms bonded to O in water)\n- CH₃CH₂OH (condensed structural formula showing bonding in ethanol)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are polymers?",
    "keywords": ["very", "large", "molecules", "many", "smaller", "monomers", "linked"],
    "explanation": "Polymers are very large molecules made up of many smaller molecules (monomers) repeatedly linked together."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are monomers?",
    "keywords": ["small", "molecules", "linked", "together", "form", "polymer"],
    "explanation": "Monomers are the small molecules that are linked together to form a polymer."
  },

  // ============================================================
  // MODULE 13: IONIC COMPOUNDS (6 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an ion?",
    "keywords": ["electrically", "charged", "particle", "atom", "group", "adding", "removing", "electrons"],
    "explanation": "An ion is an electrically charged particle obtained from an atom or chemically bonded group of atoms by adding or removing electrons."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a cation?",
    "keywords": ["positively", "charged", "ion", "loses", "electrons", "metal"],
    "explanation": "A cation is a positively charged ion formed when an atom loses one or more electrons. Metal atoms tend to form cations.\n\nExamples: Na⁺, Ca²⁺, Al³⁺, Fe²⁺, Fe³⁺"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an anion?",
    "keywords": ["negatively", "charged", "ion", "gains", "electrons", "non-metal"],
    "explanation": "An anion is a negatively charged ion formed when an atom gains one or more electrons. Non-metal atoms tend to form anions.\n\nExamples: Cl⁻, O²⁻, S²⁻, N³⁻, SO₄²⁻"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a polyatomic ion?",
    "keywords": ["two", "more", "atoms", "chemically", "bonded", "electric", "charge"],
    "explanation": "A polyatomic ion consists of two or more atoms chemically bonded together but having an excess or deficiency of electrons so the unit has an electric charge.\n\nExamples: SO₄²⁻ (sulfate), NO₃⁻ (nitrate), NH₄⁺ (ammonium)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an ionic compound?",
    "keywords": ["cations", "anions", "electrostatic", "attraction", "electrically", "neutral", "formula", "unit"],
    "explanation": "An ionic compound is a compound composed of cations and anions held together by electrostatic attraction.\n\nProperties:\n- Do NOT contain molecules\n- Are electrically neutral overall\n- Have formulas representing the smallest ratio of ions (formula unit)\n\nExamples: NaCl, CaO, Fe₂(SO₄)₃"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a formula unit?",
    "keywords": ["group", "atoms", "ions", "explicitly", "symbolized", "formula", "smallest", "unit"],
    "explanation": "A formula unit is the group of atoms or ions explicitly symbolized in the formula. It represents the smallest unit of the substance.\n\nExamples:\n- H₂O: formula unit is the molecule\n- NaCl: formula unit consists of 1 Na⁺ and 1 Cl⁻\n- Fe₂(SO₄)₃: formula unit consists of 2 Fe³⁺ and 3 SO₄²⁻ ions"
  },

  // ============================================================
  // MODULE 14: TYPE I BINARY IONIC COMPOUNDS (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is a binary compound?",
    "keywords": ["compound", "composed", "exactly", "two", "elements"],
    "explanation": "A binary compound is a compound composed of exactly two elements."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the general rule for naming ionic compounds?",
    "keywords": ["cation", "named", "first", "anion", "second"],
    "explanation": "The cation is always named first and the anion is named second."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are Type I binary ionic compounds?",
    "keywords": ["metal", "forms", "only", "one", "type", "cation", "non-metal", "anion"],
    "explanation": "Type I binary ionic compounds contain:\n- A metal that forms only one type of cation\n- A non-metal anion"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the naming rules for Type I binary ionic compounds?",
    "keywords": ["cation", "element", "name", "anion", "root", "-ide"],
    "explanation": "1. The cation is named first using the element name\n2. The anion is named second using the element root + '-ide' suffix\n\nExamples:\n- NaCl: sodium chloride\n- CaS: calcium sulfide\n- MgO: magnesium oxide\n- Li₃N: lithium nitride"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are common monatomic anion names?",
    "keywords": ["hydride", "fluoride", "chloride", "bromide", "iodide", "oxide", "sulfide", "nitride", "phosphide"],
    "explanation": "H⁻ = hydride\nF⁻ = fluoride\nCl⁻ = chloride\nBr⁻ = bromide\nI⁻ = iodide\nO²⁻ = oxide\nS²⁻ = sulfide\nN³⁻ = nitride\nP³⁻ = phosphide"
  },

  // ============================================================
  // MODULE 15: TYPE II BINARY IONIC COMPOUNDS (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are Type II binary ionic compounds?",
    "keywords": ["metals", "can", "form", "more", "than", "one", "type", "positive", "ion", "multiple", "oxidation", "states"],
    "explanation": "Type II binary ionic compounds contain metals that can form more than one type of positive ion (multiple oxidation states)."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the naming rule for Type II binary ionic compounds?",
    "keywords": ["Roman", "numeral", "parentheses", "indicating", "charge", "cation"],
    "explanation": "The cation name must include a Roman numeral in parentheses indicating the charge of the cation.\n\nExamples:\n- FeCl₂: iron(II) chloride [Fe²⁺]\n- FeCl₃: iron(III) chloride [Fe³⁺]\n- CuO: copper(II) oxide [Cu²⁺]\n- Cu₂O: copper(I) oxide [Cu⁺]"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is the older naming system for Type II compounds?",
    "keywords": ["-ous", "lower", "charge", "-ic", "higher", "ferrous", "ferric", "cuprous", "cupric"],
    "explanation": "The older system uses:\n- -ous suffix for the ion with lower charge\n- -ic suffix for the ion with higher charge\n\nExamples:\nFe²⁺: ferrous (older) vs iron(II) (systematic)\nFe³⁺: ferric (older) vs iron(III) (systematic)\nCu⁺: cuprous (older) vs copper(I) (systematic)\nCu²⁺: cupric (older) vs copper(II) (systematic)\n\nNote: Use systematic names with Roman numerals in this course."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Which transition metals do NOT require Roman numerals?",
    "keywords": ["silver", "Ag+", "zinc", "Zn²⁺", "cadmium", "Cd²⁺", "only", "one", "type", "ion"],
    "explanation": "These transition metals form only one type of ion and do NOT require Roman numerals:\n- Silver: Ag⁺ only\n- Zinc: Zn²⁺ only\n- Cadmium: Cd²⁺ only"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name common Type II cations with both systematic and older names.",
    "keywords": ["iron(III)", "ferric", "iron(II)", "ferrous", "copper(II)", "cupric", "copper(I)", "cuprous", "cobalt(III)", "cobaltic", "cobalt(II)", "cobaltous", "tin(IV)", "stannic", "tin(II)", "stannous", "lead(IV)", "plumbic", "lead(II)", "plumbous", "mercury(I)", "mercurous", "mercury(II)", "mercuric"],
    "explanation": "Fe³⁺: Iron(III) - Ferric\nFe²⁺: Iron(II) - Ferrous\nCu²⁺: Copper(II) - Cupric\nCu⁺: Copper(I) - Cuprous\nCo³⁺: Cobalt(III) - Cobaltic\nCo²⁺: Cobalt(II) - Cobaltous\nSn⁴⁺: Tin(IV) - Stannic\nSn²⁺: Tin(II) - Stannous\nPb⁴⁺: Lead(IV) - Plumbic\nPb²⁺: Lead(II) - Plumbous\nHg₂²⁺: Mercury(I) - Mercurous\nHg²⁺: Mercury(II) - Mercuric"
  },

  // ============================================================
  // MODULE 16: IONIC COMPOUNDS WITH POLYATOMIC IONS (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name common polyatomic cations.",
    "keywords": ["ammonium", "NH₄⁺", "mercury(I)", "Hg₂²⁺"],
    "explanation": "NH₄⁺ = ammonium\nHg₂²⁺ = mercury(I)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name common polyatomic anions ending in -ate.",
    "keywords": ["nitrate", "sulfate", "carbonate", "phosphate", "chlorate", "perchlorate", "acetate", "permanganate", "chromate", "dichromate"],
    "explanation": "NO₃⁻ = nitrate\nSO₄²⁻ = sulfate\nCO₃²⁻ = carbonate\nPO₄³⁻ = phosphate\nClO₃⁻ = chlorate\nClO₄⁻ = perchlorate\nC₂H₃O₂⁻ = acetate\nMnO₄⁻ = permanganate\nCrO₄²⁻ = chromate\nCr₂O₇²⁻ = dichromate"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name common polyatomic anions ending in -ite.",
    "keywords": ["nitrite", "sulfite", "chlorite", "hypochlorite"],
    "explanation": "NO₂⁻ = nitrite\nSO₃²⁻ = sulfite\nClO₂⁻ = chlorite\nClO⁻ = hypochlorite"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name other important polyatomic anions.",
    "keywords": ["hydroxide", "cyanide", "peroxide", "hydrogen carbonate", "bicarbonate", "hydrogen sulfate", "bisulfate", "hydrogen phosphate", "dihydrogen phosphate", "oxalate", "thiosulfate", "thiocyanate"],
    "explanation": "OH⁻ = hydroxide\nCN⁻ = cyanide\nO₂²⁻ = peroxide\nHCO₃⁻ = hydrogen carbonate (bicarbonate)\nHSO₄⁻ = hydrogen sulfate (bisulfate)\nHPO₄²⁻ = hydrogen phosphate\nH₂PO₄⁻ = dihydrogen phosphate\nC₂O₄²⁻ = oxalate\nS₂O₃²⁻ = thiosulfate\nNCS⁻ or SCN⁻ = thiocyanate"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "How do you name ionic compounds containing polyatomic ions?",
    "keywords": ["cation", "first", "Roman", "numeral", "type II", "polyatomic", "anion", "second", "memorized", "name"],
    "explanation": "Use the same rules as binary ionic compounds:\n1. Name the cation first (include Roman numeral if Type II metal)\n2. Name the polyatomic anion second (using its memorized name)\n\nExamples:\n- Na₂SO₄: sodium sulfate\n- KH₂PO₄: potassium dihydrogen phosphate\n- Fe(NO₃)₃: iron(III) nitrate\n- (NH₄)₂CO₃: ammonium carbonate"
  },

  // ============================================================
  // MODULE 17: BINARY COVALENT COMPOUNDS (TYPE III) (5 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are binary covalent compounds?",
    "keywords": ["formed", "between", "two", "non-metals"],
    "explanation": "Binary covalent compounds (Type III) are formed between two non-metals."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the naming rules for Type III binary covalent compounds?",
    "keywords": ["first", "element", "full", "name", "second", "anion", "-ide", "prefixes", "never", "mono-", "first", "drop", "vowel"],
    "explanation": "1. The first element is named using the full element name\n2. The second element is named as if it were an anion (-ide ending)\n3. Use prefixes to denote the number of atoms\n4. NEVER use 'mono-' prefix for the first element\n5. Drop the final vowel of the prefix if the element begins with a vowel (tetroxide not tetraoxide)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the prefixes for Type III compound naming?",
    "keywords": ["mono-", "1", "di-", "2", "tri-", "3", "tetra-", "4", "penta-", "5", "hexa-", "6", "hepta-", "7", "octa-", "8", "nona-", "9", "deca-", "10"],
    "explanation": "mono- = 1\ndi- = 2\ntri- = 3\ntetra- = 4\npenta- = 5\nhexa- = 6\nhepta- = 7\nocta- = 8\nnona- = 9\ndeca- = 10"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Give examples of Type III compound names.",
    "keywords": ["carbon monoxide", "carbon dioxide", "dinitrogen monoxide", "nitrogen monoxide", "nitrogen dioxide", "dinitrogen trioxide", "dinitrogen tetroxide", "dinitrogen pentoxide", "phosphorus pentachloride", "sulfur hexafluoride"],
    "explanation": "CO: carbon monoxide (NOT monocarbon monoxide)\nCO₂: carbon dioxide\nN₂O: dinitrogen monoxide\nNO: nitrogen monoxide\nNO₂: nitrogen dioxide\nN₂O₃: dinitrogen trioxide\nN₂O₄: dinitrogen tetroxide\nN₂O₅: dinitrogen pentoxide\nPCl₅: phosphorus pentachloride\nSF₆: sulfur hexafluoride"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Which compounds always use common names instead of systematic names?",
    "keywords": ["water", "H₂O", "ammonia", "NH₃", "hydrogen peroxide", "H₂O₂"],
    "explanation": "H₂O = water (NOT dihydrogen oxide)\nNH₃ = ammonia (NOT nitrogen trihydride)\nH₂O₂ = hydrogen peroxide (NOT dihydrogen dioxide)"
  },

  // ============================================================
  // MODULE 18: NAMING ACIDS (6 Questions)
  // ============================================================
  
  {
    "course": "CH110",
    "term": "T1",
    "q": "What is an acid?",
    "keywords": ["molecule", "H⁺", "ions", "attached", "anion", "dissolved", "water", "produces", "free", "protons"],
    "explanation": "An acid is a molecule in which one or more H⁺ ions are attached to an anion. When dissolved in water, acids produce a solution containing free H⁺ ions (protons) and the anions."
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the naming rules for acids without oxygen (binary acids)?",
    "keywords": ["anion", "-ide", "hydro-", "prefix", "root", "-ic", "acid"],
    "explanation": "When the anion name ends in -ide, the acid is named:\nPrefix: 'hydro-'\nAnion root\nSuffix: '-ic'\nAdd: 'acid'\n\nFormula pattern: H + element"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Give examples of binary acid names.",
    "keywords": ["hydrofluoric", "hydrochloric", "hydrobromic", "hydroiodic", "hydrosulfuric", "hydrocyanic"],
    "explanation": "HF: Hydrofluoric acid (fluoride)\nHCl: Hydrochloric acid (chloride)\nHBr: Hydrobromic acid (bromide)\nHI: Hydroiodic acid (iodide)\nH₂S: Hydrosulfuric acid (sulfide)\nHCN: Hydrocyanic acid (cyanide)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "What are the naming rules for oxyacids (acids containing oxygen)?",
    "keywords": ["-ate", "becomes", "-ic", "-ite", "becomes", "-ous"],
    "explanation": "When the anion ends in -ate:\n- Change -ate to -ic\n- Add 'acid'\n\nWhen the anion ends in -ite:\n- Change -ite to -ous\n- Add 'acid'"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Give examples of oxyacid names.",
    "keywords": ["sulfuric", "sulfurous", "nitric", "nitrous", "phosphoric", "acetic"],
    "explanation": "H₂SO₄: Sulfuric acid (sulfate)\nH₂SO₃: Sulfurous acid (sulfite)\nHNO₃: Nitric acid (nitrate)\nHNO₂: Nitrous acid (nitrite)\nH₃PO₄: Phosphoric acid (phosphate)\nHC₂H₃O₂: Acetic acid (acetate)"
  },
  {
    "course": "CH110",
    "term": "T1",
    "q": "Name the oxyacids of chlorine.",
    "keywords": ["perchloric", "chloric", "chlorous", "hypochlorous"],
    "explanation": "HClO₄: Perchloric acid (perchlorate)\nHClO₃: Chloric acid (chlorate)\nHClO₂: Chlorous acid (chlorite)\nHClO: Hypochlorous acid (hypochlorite)"
  },
  


];
