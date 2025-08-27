export interface Article {
  title: string
  author: string
  pages: string
}

export interface Volume {
  id: number
  number: number
  year: number
  slug: string
  title: string
  summary: string
  description: string
  editor: string
  isbn?: string
  topics: string[]
  tableOfContents: Article[]
  articles: number
}

// Complete Waja Journal data parsed from the TSV file
const wajaJournalVolumes: Volume[] = [
  {
    id: 1,
    number: 4,
    year: 1974,
    slug: "volume-4",
    title: "Waja Journal - Volume 4",
    summary:
      "Archaeological investigations across West Africa including quern factory excavations in Ghana, Mali excavations, and stone age assemblages.",
    description:
      "This volume presents significant archaeological findings from across West Africa, featuring excavations at various sites in Ghana, Mali, Nigeria, and Cameroon. The research covers stone age assemblages, pottery studies, and regalia analysis, contributing to our understanding of prehistoric and historic African cultures.",
    editor: "Editorial Board",
    topics: [
      "Archaeology",
      "Stone Age",
      "Pottery",
      "West Africa",
      "Excavations",
      "Ghana",
      "Mali",
      "Nigeria",
      "Cameroon",
    ],
    tableOfContents: [
      { title: "A Quern Factory Near Kintampo", author: "Rahtz, P.A & Colin Flight", pages: "1-25" },
      {
        title: "Preliminary Report of Excavation at Karkarichnkat, Mali 1972",
        author: "Smith, Andrew B.",
        pages: "26-45",
      },
      {
        title: "A Stratified Succession of Stone Age Assemblages at Hohoe, Ghana",
        author: "Swarts, B.K Jnr",
        pages: "46-70",
      },
      { title: "Prospection Archaeologique au Cameroun Septentrional", author: "Marliac, A", pages: "71-90" },
      { title: "Excavation at Odo Ogbe street and Lafogido, Ife, Nigeria", author: "Eyo Epko", pages: "91-120" },
      { title: "Excavation at Obalara's Land, Ife, Nigeria", author: "Garlake, Peter", pages: "121-145" },
      {
        title: "Pottery from the Chuluwasi and Jimasangi River site Northern Ghana",
        author: "Mathewson R. Duncan",
        pages: "146-170",
      },
      { title: "Regalia in Biu division, North-Eastern State, Nigeria", author: "Rubin, Arnold", pages: "171-190" },
      { title: "Notes and News", author: "Editorial Board", pages: "191-195" },
      { title: "Reviews", author: "Editorial Board", pages: "196-200" },
    ],
    articles: 10,
  },
  {
    id: 2,
    number: 5,
    year: 1975,
    slug: "volume-5",
    title: "Waja Journal - Volume 5",
    summary:
      "Focus on iron smelting origins in Nigeria, iron-working techniques in Ghana, and archaeological investigations across the Sahel region.",
    description:
      "This volume explores metallurgical archaeology and iron-working traditions across West Africa, with particular emphasis on Nigeria and Ghana. It includes studies of human remains from Sudan, cemetery investigations, and European trade pipe analysis.",
    editor: "Editorial Board",
    topics: ["Iron Smelting", "Metallurgy", "Trade", "Cemetery Studies", "Ghana", "Nigeria", "Sudan", "Tchad"],
    tableOfContents: [
      { title: "The Origin of Iron Smelting in Nigeria", author: "Tylecote, R.F", pages: "1-30" },
      { title: "Iron-working Apparatus and Techniques: Upper Region of Ghana", author: "Pole L.M", pages: "31-55" },
      { title: "Etude de quelques Restes Humains trouves a Soleb (Soudan)", author: "Sausse, F.", pages: "56-75" },
      { title: "La Necropole de Nemra, Region de Koro-Toro, Tchad", author: "Treinen, F.", pages: "76-95" },
      {
        title: "Gao 1972: First Interim Report. A Preliminary Investigation of the Cemetery at Sane",
        author: "Flight, C.R.",
        pages: "96-120",
      },
      { title: "Rescue Archaeology in the Kainji Reservoir Area, 1968", author: "Breternitz D.A", pages: "121-145" },
      { title: "Excavation at Komenda, Ghana", author: "Calvocoressi, D", pages: "146-170" },
      {
        title: "The Potential use of European Clay Tobacco-Pipes in West African Archaeology Research",
        author: "Walker, I. C.",
        pages: "171-190",
      },
      { title: "European Trade Pipes in Ghana", author: "Calvocoressi, D", pages: "191-210" },
      { title: "Notes and News", author: "Editorial Board", pages: "211-218" },
      { title: "Review", author: "Editorial Board", pages: "219-223" },
    ],
    articles: 11,
  },
  {
    id: 3,
    number: 7,
    year: 1977,
    slug: "volume-7",
    title: "Waja Journal - Volume 7",
    summary:
      "Ten years of Saharan archaeological research, excavations in Nigeria and Ghana, and studies of traditional cloth and salt production.",
    description:
      "This comprehensive volume reviews a decade of archaeological research in the Sahara and presents excavation results from various West African sites. It includes important studies on traditional industries like salt production and cloth manufacturing.",
    editor: "Editorial Board",
    topics: [
      "Saharan Archaeology",
      "Excavations",
      "Traditional Industries",
      "Salt Production",
      "Cloth History",
      "Nigeria",
      "Ghana",
      "Benin",
    ],
    tableOfContents: [
      { title: "Ten years of archaeological research in the Sahara 1965-1975", author: "G. Camps", pages: "1-40" },
      {
        title: "The Nana-Mode village site and the prehistory of the Ubangian-speaking peoples",
        author: "N. David & P. Vidal",
        pages: "41-70",
      },
      {
        title: "Excavation on the Woye Asiri family land in Ife, Western Nigeria",
        author: "P.S Garlake",
        pages: "71-95",
      },
      { title: "Excavations at Isoya, near Ile-Ife (Nigeria) in 1972", author: "O. Eluyemi", pages: "96-120" },
      { title: "Excavations at Bantama, near Elmina, Ghana", author: "D. Calvocoressi", pages: "121-145" },
      {
        title:
          "Le sel dans les villages cotiers et lagunaires du Bas-Dahomey: sa fabrication, sa place dans le circuit du sel african",
        author: "J. Rivallain",
        pages: "146-170",
      },
      { title: "Cloth Strips and History", author: "M. Johnson", pages: "171-180" },
      {
        title: "Yagha ware: An Experiment in Dating Archaeological Material by Oral Traditions",
        author: "D. Calvocoressi",
        pages: "181-190",
      },
      { title: "Reviews", author: "Editorial Board", pages: "191-193" },
      { title: "Index to WAJA Vols. 1-5", author: "Editorial Board", pages: "194-195" },
    ],
    articles: 10,
  },
  {
    id: 4,
    number: 8,
    year: 1978,
    slug: "volume-8",
    title: "Waja Journal - Volume 8",
    summary:
      "Archaeological research in Central Africa, Stone Age studies in Guinea, and excavations in Upper Volta and Nigeria.",
    description:
      "This volume presents diverse archaeological research from across Africa, including Central African archaeology, Stone Age investigations in Guinea, and important excavation reports from Upper Volta (now Burkina Faso) and Nigeria.",
    editor: "Editorial Board",
    topics: ["Central African Archaeology", "Stone Age", "Guinea", "Upper Volta", "Nigeria", "Evolutionary Analysis"],
    tableOfContents: [
      { title: "Ramal analysis and evolutionary trees", author: "Daniels, S.G. H.", pages: "1-25" },
      { title: "L'archeologie de l'Afrique centrale", author: "Van Notens, F.", pages: "26-50" },
      { title: "New data on the Stone Age of Guinea", author: "Boriskovsky, P.I. & V.V Soloviev", pages: "51-80" },
      { title: "Excavation at Rim, Upper Volta", author: "Andah, B. W.", pages: "81-120" },
      { title: "Excavations at Dutsen Kongba, Plateau State, Nigeria", author: "York, R.N.", pages: "121-160" },
      { title: "Notes and News", author: "Editorial Board", pages: "161-185" },
      { title: "Reviews", author: "Editorial Board", pages: "186-191" },
    ],
    articles: 7,
  },
  {
    id: 5,
    number: 10,
    year: 1980,
    slug: "volume-10-11",
    title: "Waja Journal - Volumes 10 & 11",
    summary:
      "Combined volume featuring excavations at Sindou and Kawara, Oyo walls research, traditional pottery technology, and Jos Plateau Stone Age studies.",
    description:
      "This double volume presents significant archaeological research including excavations in West Africa, studies of traditional pottery technology among the Krobo people, and important Stone Age research from the Jos Plateau in Nigeria.",
    editor: "Editorial Board",
    topics: ["Excavations", "Traditional Pottery", "Oyo History", "Stone Age", "Jos Plateau", "Ghana", "Nigeria"],
    tableOfContents: [
      { title: "Excavations at Sindou and Kawara", author: "B.W. Andah", pages: "1-30" },
      { title: "The Walls of Oyo Ile - Oyo State Nigeria", author: "R. Soper & P. Darling", pages: "31-60" },
      {
        title: "Traditional Pottery Technology Krobo, Takyman (Techiman) Ghana: An Ethnoarchaeological study",
        author: "K. Effah-Gyamfi",
        pages: "61-90",
      },
      { title: "Cordage Fabric and Basketry of the Tichitt tradition", author: "A. Derefaka", pages: "91-115" },
      {
        title: "The middle stone Age of the Jos Plateau: A preliminary report",
        author: "P. Allsworth-Jones",
        pages: "116-140",
      },
      {
        title: "Excavations at the Smith's quarter of Begho, Ghana: A preliminary report",
        author: "J. Anquandah",
        pages: "141-165",
      },
    ],
    articles: 6,
  },
  {
    id: 6,
    number: 12,
    year: 1982,
    slug: "volume-12-13",
    title: "Waja Journal - Volumes 12 & 13",
    summary:
      "Anthropological studies on human sexuality, urban origins in the Guinea Forest, Ife art traditions, and Bantu phenomena research.",
    description:
      "This combined volume explores anthropological themes including human sexuality from biological and cultural perspectives, urban development in the Guinea Forest region, and detailed studies of Ife art traditions and Bantu cultural phenomena.",
    editor: "Editorial Board",
    topics: [
      "Human Sexuality",
      "Urban Origins",
      "Ife Art",
      "Bantu Studies",
      "Cultural Anthropology",
      "Benin",
      "Nigeria",
    ],
    tableOfContents: [
      { title: "Human Sexuality - Biological or Cultural", author: "Boszormenyi, Z.", pages: "1-25" },
      {
        title: "Urban Origins in the Guinea-Forest with Special Reference to Benin",
        author: "Andah, B.W.",
        pages: "26-60",
      },
      {
        title:
          "Ife Art: An Enquiry into the Surface patterns and The Continuity of the Art Traditions among the Northern Yoruba",
        author: "Adepegba, C.O.",
        pages: "61-95",
      },
      {
        title: "Bantu Phenomena: Some Unanswered Questions of Ethno-archaeology and Ethno-Linguistics",
        author: "Andah, B.W.",
        pages: "96-125",
      },
      {
        title: "The 'Conquest Hypothesis' in Igbo-Igala Relations: A Re-Examination",
        author: "Oguagha, P.A.",
        pages: "126-145",
      },
      { title: "Food Preference and Culture", author: "Boszormenyi, Z.", pages: "146-151" },
    ],
    articles: 6,
  },
  {
    id: 7,
    number: 14,
    year: 1984,
    slug: "volume-14",
    title: "Waja Journal - Volume 14",
    summary:
      "Comprehensive excavation report from Iwo Eleru rockshelter in Ondo State, Nigeria - a landmark archaeological investigation.",
    description:
      "This volume is dedicated to the extensive excavations at Iwo Eleru, one of Nigeria's most important archaeological sites. The research provides crucial insights into prehistoric human occupation and cultural development in the forest region of southwestern Nigeria.",
    editor: "Editorial Board",
    topics: ["Iwo Eleru", "Rockshelter Archaeology", "Prehistoric Nigeria", "Forest Archaeology", "Stone Age"],
    tableOfContents: [
      {
        title: "Excavations at Iwo Eleru in Ondo State Nigeria",
        author: "Thurstan Shaw and S.G.H Daniels",
        pages: "1-269",
      },
    ],
    articles: 1,
  },
  {
    id: 8,
    number: 15,
    year: 1985,
    slug: "volume-15",
    title: "Waja Journal - Volume 15",
    summary:
      "Northern Volta Basin excavations, pottery studies from Ghana, Quaternary research in Nigeria, and ethnographic studies of Igbo society.",
    description:
      "This volume combines archaeological research from the Northern Volta Basin with pottery analysis from Ghana, geological studies of southern Nigeria, and ethnographic investigations of Igbo social structures and religious practices.",
    editor: "Editorial Board",
    topics: [
      "Volta Basin",
      "Pottery Analysis",
      "Quaternary Studies",
      "Ethnography",
      "Igbo Society",
      "Ghana",
      "Nigeria",
    ],
    tableOfContents: [
      { title: "Excavations in the Northern Volta Basin", author: "Agorasah E.K.", pages: "1-30" },
      { title: "Pottery from Bonoso and Ahwene Koko, Ghana", author: "Boachie-Ansah J.", pages: "31-55" },
      { title: "A Review of the Quaternary of Southern Nigeria", author: "Umeji O.P.", pages: "56-80" },
      {
        title: "Land Snails and Post Environment at the Igbo Iwoto Esie site, South-Western Nigeria",
        author: "Barber R.J.",
        pages: "81-100",
      },
      { title: "Title Societies and Personhood Attainment among the Awka Igbo", author: "Webb G.", pages: "101-125" },
      {
        title: "Even a Woman: Sex Roles and Mobility in an Aladura Society",
        author: "Crumbley, D.M.",
        pages: "126-150",
      },
      { title: "Notes and News", author: "Editorial Board", pages: "151-155" },
      { title: "Reviews", author: "Editorial Board", pages: "156-160" },
    ],
    articles: 8,
  },
  {
    id: 9,
    number: 16,
    year: 1986,
    slug: "volume-16",
    title: "Waja Journal - Volume 16",
    summary:
      "Iron development in Southern Cameroon, house forms in Northern Volta Basin, and studies of labor emigration among Awka Igbo males.",
    description:
      "This volume explores traditional iron working in Cameroon, architectural studies from Ghana, ethnographic research on Igbo labor patterns, and urban archaeological investigations in Hausaland.",
    editor: "Editorial Board",
    topics: [
      "Iron Working",
      "Traditional Architecture",
      "Labor Migration",
      "Urban Archaeology",
      "Cameroon",
      "Ghana",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title: "Le Fer Le Development Des Societies Traditionnelles Du Sud Cameroun",
        author: "Essomba J.M.",
        pages: "1-30",
      },
      {
        title:
          "House Forms in Northern Volta Basin, Ghana: Evolution, Internal Spatial Organisation and the Social Relationships Depicted",
        author: "Agorsah E.",
        pages: "31-60",
      },
      { title: "Labour Emigration and Maintenance of Home Ties by Awka Igbo Males", author: "Webb G.", pages: "61-90" },
      { title: "Ancient Urban Sites in Hausaland: A Preliminary Report", author: "Effah-Gyamfi K.", pages: "91-120" },
      {
        title: "A Reassessment of Ethnoarchaeological Data Collecting Technique",
        author: "Onabajo O.",
        pages: "121-140",
      },
      { title: "Archaeology Education in Nigeria", author: "Okpoko A.I", pages: "141-160" },
      { title: "Archaeology and the schools", author: "Afigbo A. E.", pages: "161-175" },
      { title: "Notes and News", author: "Editorial Board", pages: "176-180" },
      { title: "Reviews", author: "Editorial Board", pages: "181-185" },
    ],
    articles: 9,
  },
  {
    id: 10,
    number: 19,
    year: 1989,
    slug: "volume-19",
    title: "Waja Journal - Volume 19",
    summary:
      "Iron metallurgy vestiges in Dahomey region, archaeological reconnaissance in Nigeria, and thermoluminescent dating techniques.",
    description:
      "This volume focuses on iron working traditions in the Dahomey region, archaeological surveys in various Nigerian locations, urban studies of Ijebu Ode, and advances in thermoluminescent dating methods for pottery.",
    editor: "Editorial Board",
    topics: [
      "Iron Metallurgy",
      "Archaeological Reconnaissance",
      "Urban Studies",
      "Dating Techniques",
      "Nigeria",
      "Benin",
    ],
    tableOfContents: [
      {
        title: "Les Vestiges D'une Ancienne Industrie du metallurgie Du Fer Dans La Region D'ahomey",
        author: "Iroko A.F.",
        pages: "1-40",
      },
      {
        title: "Archaeological Reconnaissance of Ipapo Ile, Kwara State, Nigeria: An Interim Report",
        author: "Agbaje-Williams B.",
        pages: "41-70",
      },
      {
        title: "Urban Ijebu Ode: An Archaeological Topographical and Toponymical Perspective",
        author: "Momin K.N.",
        pages: "71-100",
      },
      { title: "Thermoluminescent Dating of Potsherd", author: "Sanni A.O", pages: "101-130" },
      { title: "Special section: Ethnoarchaeology in West Africa", author: "Editorial Board", pages: "131-160" },
      { title: "Reviews", author: "Editorial Board", pages: "161-172" },
    ],
    articles: 6,
  },
  {
    id: 11,
    number: 21,
    year: 1991,
    slug: "volume-21",
    title: "Waja Journal - Volume 21",
    summary:
      "East African urban origins project, Cameroon ethnoarchaeology, Nigerian biostratigraphy, and cultural resource management studies.",
    description:
      "This volume presents research from the East African Urban Origins Project, ethnoarchaeological studies from Cameroon, biostratigraphic analysis from Nigeria's Anambra Basin, and important work on African knowledge systems and cultural resource management.",
    editor: "Editorial Board",
    topics: [
      "Urban Origins",
      "Ethnoarchaeology",
      "Biostratigraphy",
      "Cultural Resource Management",
      "Zimbabwe",
      "Cameroon",
      "Nigeria",
      "Benin",
    ],
    tableOfContents: [
      {
        title: "The East African Urban Origins Project, 'Our Zimbabwe Experience'",
        author: "Andah, B.W.",
        pages: "1-30",
      },
      {
        title: "Of men, Mounds and Cattle: Archaeology and Ethnoarchaeology in Houlouf Region (Northern Cameroun)",
        author: "Hall, A. Levy, T. Lechalier C, & Bridault, A.",
        pages: "31-70",
      },
      {
        title: "Biostratigraphy of the Cretaceous Tertiary Boundary in Umunni-1 well, Anambra Basin",
        author: "Bassey, C.E.",
        pages: "71-90",
      },
      {
        title: "Urgence d'une Archeologie de Sauvetage dans le Golfe Du Benin: Cas de Vallees de Mono et de l'Oume",
        author: "Adande, A. & Bagodo, O.",
        pages: "91-110",
      },
      {
        title: "Les Site Paleolithique de la Moyenne Terrasse Figuil-Louti (Cameroun Septentrional)",
        author: "Digara, C.",
        pages: "111-130",
      },
      {
        title: "An archaeology of African Knowledge Systems: The Case of Writing and Introductory Essay",
        author: "Andah, B. W, Bodam, R.N.S & Chukuegbu, C.C",
        pages: "131-150",
      },
      {
        title: "Teaching West African History and Archaeology Jamaica Schools",
        author: "Alleh, B.M.",
        pages: "151-160",
      },
      {
        title: "Ifa as a Potential Source of Black Aesthetics: A Case Study of Judith Gleason's Agotine",
        author: "Omole, P.",
        pages: "161-170",
      },
      {
        title:
          "Socio-cultural Explanation of the Phenomenon of Age at First Marriage in Two Communities in East Igbo, Southern Nigeria",
        author: "Obi, R.U.",
        pages: "171-185",
      },
      {
        title: "The Nature and Practice of the Female Circumcision Among the Ubiaja People of Bendel State of Nigeria",
        author: "Omorodion, F.R.",
        pages: "186-200",
      },
      {
        title:
          "Community Participation in a Longitudinal observational study of the Diarrhoeal Disease Risk Factors Perception and Coping Measures",
        author: "Oke, E.A, Oladepo, O. & Oyedejide, C.O",
        pages: "201-215",
      },
      { title: "Notes and News", author: "Editorial Board", pages: "216-218" },
      { title: "Reviews", author: "Editorial Board", pages: "219-220" },
    ],
    articles: 13,
  },
  {
    id: 12,
    number: 23,
    year: 1993,
    slug: "volume-23",
    title: "Waja Journal - Volume 23",
    summary:
      "Research and theory in archaeology since the 1960s, Lower Mono Valley investigations, and comprehensive ethnoarchaeological studies.",
    description:
      "This volume provides a comprehensive assessment of archaeological research and theory development since the 1960s, with particular focus on West African archaeology. It includes important ethnoarchaeological studies and material culture analysis from various Nigerian sites.",
    editor: "Editorial Board",
    topics: ["Archaeological Theory", "Ethnoarchaeology", "Material Culture", "Igbo-Ukwu", "Nigeria", "Kenya"],
    tableOfContents: [
      {
        title:
          "Research and Theory in Archaeology since the 1960s: An Assessment of the African, especially West African Scene",
        author: "Andah B.W. & Bagodo O.",
        pages: "1-50",
      },
      { title: "Lower Mono Valley: Preliminary Report", author: "Bagodo O.", pages: "51-80" },
      {
        title: "Archaeological Reconnaissance and Excavations in Parts of Tivland",
        author: "Ogundele S.O.",
        pages: "81-110",
      },
      {
        title: "Ethno-archaeology, its Methods and Practice: The Tiv Example",
        author: "Folorunso C.A.",
        pages: "111-130",
      },
      {
        title: "Traditional Methods of Display of the Dead in parts of Nigeria",
        author: "Okpoko A.I.",
        pages: "131-150",
      },
      {
        title: "The Port Harcourt City Cemetery: An Archaeological Site of Socio-religious Symbolism",
        author: "Umoren U.E.",
        pages: "151-170",
      },
      {
        title: "Material culture and ethnography in Igboland and Environs: Looking Beyond Igbo-Ukwu",
        author: "Editorial Board",
        pages: "171-185",
      },
      {
        title: "Igbo-Ukwu Bronze Objects (A Re-Appraisal of Techniques, Style and Iconography)",
        author: "Aniakor C.",
        pages: "186-205",
      },
      {
        title:
          "Dialogues with a Hunter-gatherer: The Aftermath of WAC Intercongress on Urban Origins in Eastern Africa-Kenya",
        author: "Ineanu A.M.",
        pages: "206-215",
      },
      { title: "Research Notes and News", author: "Editorial Board", pages: "216-220" },
    ],
    articles: 10,
  },
  {
    id: 13,
    number: 24,
    year: 1994,
    slug: "volume-24",
    title: "Waja Journal - Volume 24",
    summary:
      "Archaeological pipes in Africa, non-megalithic burials in Central African Republic, and complex settlements in Central Nigeria.",
    description:
      "This volume explores archaeological evidence of pipes in Africa, burial practices in the Central African Republic, settlement patterns in Central Nigeria, and various cultural research topics including salvage ethnography and state formation processes.",
    editor: "Editorial Board",
    topics: [
      "Archaeological Pipes",
      "Burial Practices",
      "Settlement Patterns",
      "Ethnography",
      "State Formation",
      "Nigeria",
      "Central African Republic",
    ],
    tableOfContents: [
      {
        title: "La question des pipes Archeologiques en Afrique: Les Nouvelles evidences",
        author: "Ossah-Mvondo J.P.",
        pages: "1-30",
      },
      {
        title: "Les Sepultures non Megalithiques du Nord-Ouest de la Republique Centrale Africaine: le cas de Ndio",
        author: "Zangoto E.",
        pages: "31-60",
      },
      {
        title: "Foundations of Complex Settlements in Parts of Central Nigeria",
        author: "Ogundele S.O",
        pages: "61-90",
      },
      {
        title: "Salvage Ethnography and the Institute African Studies, University of Nigeria Nsukka",
        author: "Nzei AA",
        pages: "91-110",
      },
      {
        title: "Formative Principles of State Formation in the Middle Belt of Nigeria before the 18th century",
        author: "Erim E.O",
        pages: "111-130",
      },
      {
        title: "Paleomonnaies Africaines: Fonctionnement et structure des Societes",
        author: "Rivallain J.",
        pages: "131-145",
      },
      {
        title: "Computers in the Management of Archaeological Resources: A Contribution",
        author: "Ilori O.",
        pages: "146-155",
      },
      { title: "Africa Studies and the African Identity", author: "Layiwola A.", pages: "156-160" },
      { title: "Announcements", author: "Editorial Board", pages: "161-162" },
    ],
    articles: 9,
  },
  {
    id: 14,
    number: 26,
    year: 1996,
    slug: "volume-26-1",
    title: "Waja Journal - Volume 26 (1)",
    summary:
      "Sustainable healthcare delivery through indigenous African medical practices, fishing rituals, and mortuary practices among Niger Delta peoples.",
    description:
      "This volume focuses on indigenous African medical practices and their role in sustainable healthcare delivery, along with ethnographic studies of fishing communities and mortuary practices in the Niger Delta region of Nigeria.",
    editor: "Editorial Board",
    topics: ["Indigenous Medicine", "Healthcare", "Fishing Rituals", "Mortuary Practices", "Niger Delta", "Nigeria"],
    tableOfContents: [
      {
        title: "Sustainable Health Care Delivery: Indigenous African Medical Practice",
        author: "Onu O.O",
        pages: "1-30",
      },
      {
        title: "Rituals and Charms in Fishing: The Case of Local Fishermen in Okrika Rivers State Nigeria",
        author: "Igbanibo S.T.",
        pages: "31-50",
      },
      {
        title: "Mortuary Practices Among the Kolokuma Ijo of the Niger Delta",
        author: "Derefaka A.A.",
        pages: "51-70",
      },
      {
        title: "Les Societes a Structures Non Centralisees De L'Akotora a l'Epoque Precoloniale",
        author: "Tiando E.",
        pages: "71-90",
      },
      {
        title: "The Origin and Settlement of Ogurugu Town: A Critical Reassessment",
        author: "Chukwuezi B.",
        pages: "91-110",
      },
      {
        title: "Ifetedo: A Late Stone Age Site in the Forest Region of Southwestern Nigeria",
        author: "Fatunsin A.",
        pages: "111-125",
      },
      {
        title: "Archaeological Reconnaissance of the Badagry Coastal Area, Southwestern Nigeria",
        author: "Alabi R.A.",
        pages: "126-135",
      },
      {
        title: "Settlement and Settlement Styles of the People of North East Yorubaland up to Late Iron Age Times",
        author: "Aremu D.A.",
        pages: "136-140",
      },
    ],
    articles: 8,
  },
  {
    id: 15,
    number: 26,
    year: 1996,
    slug: "volume-26-2",
    title: "Waja Journal - Volume 26 (2)",
    summary: "Archaeology and slavery in Africa and the Diaspora - a comprehensive study by Bassey W. Andah.",
    description:
      "This special volume is dedicated to the archaeological study of slavery in Africa and its diaspora, providing crucial insights into this important historical phenomenon through archaeological evidence and analysis.",
    editor: "Bassey W. Andah",
    topics: ["Slavery", "African Diaspora", "Historical Archaeology", "Africa"],
    tableOfContents: [
      { title: "Archaeology and Slavery in Africa and the Diaspora", author: "Bassey W. Andah", pages: "1-175" },
    ],
    articles: 1,
  },
  {
    id: 16,
    number: 27,
    year: 1997,
    slug: "volume-27-1",
    title: "Waja Journal - Volume 27 (1)",
    summary:
      "Tribute to Mallam Umaru Garba Gol and his contributions to field archaeology in Nigeria, plus archaeological research in Benue State.",
    description:
      "This volume honors Mallam Umaru Garba Gol's contributions to Nigerian archaeology and presents archaeological research from the Katsina-Ala River Basin and stone figurine discoveries from Yorubaland.",
    editor: "Editorial Board",
    topics: ["Field Archaeology", "Nigerian Archaeology", "Stone Figurines", "Yorubaland", "Nigeria"],
    tableOfContents: [
      { title: "Mallam Umaru Garba Gol", author: "Allsworth-Jones. P", pages: "1-20" },
      { title: "Umaru Gol and Development of Field Archaeology in Nigeria", author: "Folorunso C.A.", pages: "21-40" },
      {
        title: "Off-Site Archaeology in the Katsina-Ala River Basin (Benue State, Nigeria) Prospects and Problems",
        author: "Tubosun B.J.",
        pages: "41-80",
      },
      {
        title:
          "The Unfinished Stone Figurine from Pee-Igbomina Results from Recent Archaeological Research in North Central Yorubaland Nigeria",
        author: "Aribidesi A.U.",
        pages: "81-136",
      },
    ],
    articles: 4,
  },
  {
    id: 17,
    number: 27,
    year: 1997,
    slug: "volume-27-2",
    title: "Waja Journal - Volume 27 (2)",
    summary:
      "Obituary and tributes to Professor Bassey Wai Eteyen Andah, archaeological relics of Ijaye Orile, and traditional Yoruba arbitration systems.",
    description:
      "This memorial volume honors Professor Bassey Wai Eteyen Andah's contributions to African archaeology and anthropology, while presenting archaeological research from Ijaye Orile and studies of traditional Yoruba legal systems.",
    editor: "Editorial Board",
    topics: ["Memorial Volume", "Bassey Andah", "Ijaye Archaeology", "Yoruba Legal Systems", "Nigeria"],
    tableOfContents: [
      { title: "Obituary and Tributes; Professor Bassey Wai Eteyen Andah", author: "Folorunso C.A", pages: "1-20" },
      {
        title: "The Archaeological Relics of the Historical Phases of Ijaye Orile. A Preliminary Report",
        author: "Folorunso C.A & Olayinka O.J.",
        pages: "21-60",
      },
      { title: "Identification and Composition of Bloomery Slags", author: "Okafor E.E.", pages: "61-90" },
      {
        title: "Palaces as Court of Arbitration in Traditional Yoruba Societies",
        author: "Olaoba O.B.",
        pages: "91-120",
      },
      { title: "Reaching Out to the Public Nigerian Museum Services", author: "Okpoko A.I.", pages: "121-143" },
    ],
    articles: 5,
  },
  {
    id: 18,
    number: 28,
    year: 1998,
    slug: "volume-28-1",
    title: "Waja Journal - Volume 28 (1)",
    summary:
      "Excavations at Wodoku in Ghana, radiocarbon dates from Central African Republic, and female circumcision studies in Yorubaland.",
    description:
      "This volume presents archaeological excavation results from Ghana, important radiocarbon dating evidence from Central African Republic, and ethnographic studies of female circumcision practices among the Yoruba people.",
    editor: "Editorial Board",
    topics: [
      "Excavations",
      "Radiocarbon Dating",
      "Female Circumcision",
      "Ethnography",
      "Ghana",
      "Central African Republic",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title: "Preliminary Report on Excavations at Wodoku, East Legon, Accra, Ghana",
        author: "Boachie-Ansah",
        pages: "1-40",
      },
      {
        title: "Radiocarbon Dates of Sites in North-West Central African Republic: The Case of Ndio",
        author: "Zangato. E & Saliege. J.",
        pages: "41-70",
      },
      {
        title: "Female Circumcision in Yorubaland: Its Nature, Practice and Persistence Among the people of Iwo",
        author: "Akinsete K.",
        pages: "71-100",
      },
      { title: "The Museum in Nigeria: In Search of Workable Future", author: "Abadom. M", pages: "101-122" },
    ],
    articles: 4,
  },
  {
    id: 19,
    number: 28,
    year: 1998,
    slug: "volume-28-2",
    title: "Waja Journal - Volume 28 (2)",
    summary:
      "Northern Yoruba villages during the Old Oyo period, labor mobilization for agriculture, and Igbo traditional titles.",
    description:
      "This volume examines Northern Yoruba settlements during the Old Oyo period through archaeological research, explores traditional agricultural labor systems among the Yoruba, and provides an overview of Igbo traditional title systems.",
    editor: "Editorial Board",
    topics: ["Old Oyo Period", "Agricultural Labor", "Traditional Titles", "Yoruba", "Igbo", "Nigeria"],
    tableOfContents: [
      {
        title:
          "Northern Yoruba Villages During the Old Oyo Period: Recent Archaeological Research in Kwara State, Nigeria",
        author: "Usman. A.A",
        pages: "1-60",
      },
      {
        title: "The History and Anthropology of Labour Mobilization for Agricultural Production Among the Yoruba",
        author: "Folorunso. C.A.",
        pages: "61-100",
      },
      { title: "The Igbo Traditional Titles: An Overview", author: "Okpoko. A.I & Ezeadichie. E.U.", pages: "101-132" },
    ],
    articles: 3,
  },
  {
    id: 20,
    number: 30,
    year: 2000,
    slug: "volume-30-1",
    title: "Waja Journal - Volume 30 (1)",
    summary:
      "Pottery from Igbominaland, excavations at Bonoso Ghana, Esie stone carvings analysis, and Mouhoun Bend settlement patterns.",
    description:
      "This volume presents pottery analysis from North Central Yorubaland, excavation reports from Ghana, studies of the famous Esie stone carvings, and settlement pattern research from Burkina Faso's Mouhoun Bend region.",
    editor: "Editorial Board",
    topics: [
      "Pottery Analysis",
      "Stone Carvings",
      "Settlement Patterns",
      "Excavations",
      "Nigeria",
      "Ghana",
      "Burkina Faso",
    ],
    tableOfContents: [
      { title: "Pottery from Igbominaland, North Central Yorubaland", author: "Aleru, J.O.", pages: "1-30" },
      {
        title: "Preliminary Report on Excavations at Bonoso, Brong-Ahafo Region, Ghana",
        author: "Boachie-Ansah, J.",
        pages: "31-60",
      },
      {
        title: "The Aberrant Esie Head as Model: An Insight into the Styles and Origin of the Esie Stone Carvings",
        author: "Pogoson, O.I.",
        pages: "61-85",
      },
      {
        title:
          "Settlement patterns, Food Production, and Craft Specialization in the Mouhoun Bend (NW Burkina Faso): Preliminary Results of the MOBAP 1997-1999 Field Seasons",
        author: "Holl, A.F.C. & Lassina K.",
        pages: "86-110",
      },
      {
        title: "Archaeological Survey and Test Excavation in Imoleja Rockshelter Area, Odo Owa, Kwara State, Nigeria",
        author: "Aremu D.A. & Aleru J.O.",
        pages: "111-126",
      },
    ],
    articles: 5,
  },
  {
    id: 21,
    number: 30,
    year: 2000,
    slug: "volume-30-2",
    title: "Waja Journal - Volume 30 (2)",
    summary:
      "Excavations at Old Kargi, intensive salt-making sites, nature conservation for archaeology and tourism, and petrological studies.",
    description:
      "This volume covers excavations in Kaduna State Nigeria, intensive salt production sites on Nigeria's southwest coast, the relationship between nature conservation and archaeological tourism, and technical petrological analysis of stone artifacts.",
    editor: "Editorial Board",
    topics: ["Excavations", "Salt Production", "Nature Conservation", "Tourism", "Petrological Analysis", "Nigeria"],
    tableOfContents: [
      { title: "Excavations at Old Kargi, Kaduna State, Nigeria", author: "Boachie-Ansah, J.", pages: "1-30" },
      {
        title: "Gberefu and Agorin Sea Beach: Intensive Salt-Making Sites on the South-West Coast of Nigeria",
        author: "Alabi, R.A.",
        pages: "31-60",
      },
      {
        title:
          "Nature Conservation for Promoting Archaeology and Tourism in Africa: The Case of Yankari National Park, Bauchi State, Nigeria",
        author: "Aremu D.A.",
        pages: "61-85",
      },
      {
        title: "Petrological Examination and Procurement of Raw Materials for the Saminaka Stone Artefacts",
        author: "Oyelaran, P.A & Opadeji, O.A.",
        pages: "86-100",
      },
      {
        title:
          "Thin Section Spectrographic and Petrographic Analysis of Pottery from Igbominaland, North Central Yorubaland",
        author: "Aleru, J.O.",
        pages: "101-110",
      },
    ],
    articles: 5,
  },
  {
    id: 22,
    number: 30,
    year: 2000,
    slug: "volume-30-combined",
    title: "Waja Journal - Volume 30 (1&2) Combined",
    summary:
      "Typological classification and West African Early Stone Age, focusing on Ugwuele Uturu as a potential Acheulean site.",
    description:
      "This combined volume addresses typological classification issues in West African Stone Age archaeology, with particular focus on the Ugwuele Uturu site and its potential significance as an Acheulean locality.",
    editor: "Editorial Board",
    topics: ["Stone Age", "Acheulean", "Typological Classification", "West Africa", "Nigeria"],
    tableOfContents: [
      {
        title: "Typological Classification and West African Early Stone Age: Ugwuele Uturu: An Acheulean Site?",
        author: "Tanto, T.R",
        pages: "1-85",
      },
    ],
    articles: 1,
  },
  {
    id: 23,
    number: 31,
    year: 2001,
    slug: "volume-31-1",
    title: "Waja Journal - Volume 31 (1)",
    summary:
      "Archaeological training in Francophone West Africa, paleoecology of Okigwe Cuesta, rockshelter excavations, and environmental studies.",
    description:
      "This volume discusses archaeological education in Francophone West Africa, presents paleoecological research from Eastern Nigeria, reports on rockshelter excavations in Kogi State, and examines environmental changes in the Lower Niger region.",
    editor: "Editorial Board",
    topics: ["Archaeological Education", "Paleoecology", "Rockshelter Archaeology", "Environmental Change", "Nigeria"],
    tableOfContents: [
      {
        title: "La Formation Des Archeologues En Afrique De L'Ouest Francophone: Historique et perspectives",
        author: "Jean Baptiste Kiethega",
        pages: "1-30",
      },
      {
        title: "Aspects of The Palaeocology of Okigwe Cuesta, Eastern Nigeria",
        author: "Ibeanu, A.M & Obianutu, P.U.",
        pages: "31-60",
      },
      {
        title: "Aseye Rockshelter Excavations at Iffe Ijumu, Kogi State, Nigeria",
        author: "Asakitikpi, A.E",
        pages: "61-85",
      },
      {
        title:
          "Environmental Changes in the 20th Century Lower Niger: A Study of Societal Decline and Physical Shrinkage",
        author: "Chiegwe, O.",
        pages: "86-100",
      },
      {
        title: "An Assessment of the Environmental Conditions of Historical Sites in Ile Ife",
        author: "Omisore, O.",
        pages: "101-115",
      },
      {
        title: "Harnessing the Tourism Potentials of Sacred Groves and Shrines in Southeast Nigeria",
        author: "Okpoko, P.U.",
        pages: "116-120",
      },
      {
        title:
          "Ojokolo: Archaeological Survey of the Mountain that provides children for barren women (in Idofin Custom and Tradition)",
        author: "Aremu, D.A.",
        pages: "121-125",
      },
    ],
    articles: 7,
  },
  {
    id: 24,
    number: 31,
    year: 2001,
    slug: "volume-31-2",
    title: "Waja Journal - Volume 31 (2)",
    summary:
      "Basic statistical methods in archaeology, Benin cultural objects exhibition, agricultural ethnography, and new terracotta discoveries.",
    description:
      "This volume introduces statistical methods for archaeological analysis, discusses alternative approaches to exhibiting Benin cultural objects, presents agricultural ethnography from the Niger Delta, and reports on new terracotta discoveries from Ile-Ife.",
    editor: "Editorial Board",
    topics: [
      "Statistical Methods",
      "Museum Exhibition",
      "Agricultural Ethnography",
      "Terracotta Art",
      "Nigeria",
      "Benin",
    ],
    tableOfContents: [
      { title: "Basic Statistical Methods in Archaeology", author: "Aremu, D.A. & Tubosun, J.B", pages: "1-30" },
      {
        title: "Alternative Methods of Exhibiting Benin Cultural Objects in Museums",
        author: "Agbontaen-Eghafona & Okpoko, A.I.",
        pages: "31-50",
      },
      {
        title: "A Development Ethnography of Urhobo Agriculture: An Ecological Perspective",
        author: "Okpokunu, E.",
        pages: "51-70",
      },
      {
        title:
          "Yam (Dioscorea spp) Cultivation and Archaeological Inference in Some Parts of Igboland: A Study of Nsukka Area",
        author: "Itanyi. E.I.",
        pages: "71-90",
      },
      {
        title: "Historical Origin and Spread of the Narrowloom in West Africa",
        author: "Asakitikpi, A.E.",
        pages: "91-105",
      },
      {
        title: "A New Terracotta Head From Wunmonije Compound, Ile-Ife, Nigeria",
        author: "Ogunfolakan, A.",
        pages: "106-110",
      },
      {
        title: "Contribution a L'histoire Holocene de la Vegetation du Dahomey-Gap Au Sud-Benin",
        author: "Tossou, M.G. et al",
        pages: "111-115",
      },
    ],
    articles: 7,
  },
  {
    id: 25,
    number: 32,
    year: 2002,
    slug: "volume-32-1",
    title: "Waja Journal - Volume 32 (1)",
    summary:
      "Sociocultural aspects of illicit cultural goods trafficking in Burkina Faso, ethnoarchaeological investigations, and medical anthropology studies.",
    description:
      "This volume addresses the important issue of illicit trafficking of cultural goods in Burkina Faso, presents ethnoarchaeological research from Nigeria, and includes several medical anthropology studies focusing on healthcare practices and cultural traditions.",
    editor: "Editorial Board",
    topics: [
      "Cultural Heritage Protection",
      "Ethnoarchaeology",
      "Medical Anthropology",
      "Healthcare",
      "Burkina Faso",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title: "Quelques Aspects Socioculturels Du Trafic Illicite Des Biens Culturels Au Burkina Faso",
        author: "Kiethega, Jean Baptiste.",
        pages: "1-30",
      },
      {
        title: "Ethnoarchaeological Investigations In Okigwe and Its Environs",
        author: "Ibeanu, A.M.",
        pages: "31-60",
      },
      {
        title: "Indigenous knowledge and Preservation of Cultural Resources in Africa",
        author: "Okpoko, A.I.",
        pages: "61-80",
      },
      { title: "The Fortunes of Medical Anthropology in Africa", author: "Okpokunu, E", pages: "81-100" },
      {
        title: "The Age Grade System Among the Uweppa-Uwano of Etsako, in Edo State: A Study of the Rituals to Manhood",
        author: "Orieso, M.A.",
        pages: "101-120",
      },
      {
        title:
          "Culture Practices Relating to Breastfeeding and their implications for Maternal and Child Healthcare in a Rural Community of Osun State, Nigeria",
        author: "Ajala, A.S.",
        pages: "121-135",
      },
      {
        title: "Oral Traditions, Archaeology, and Culture Contacts Between Badagry and Her Neighbors",
        author: "Alabi, R.A.",
        pages: "136-147",
      },
    ],
    articles: 7,
  },
  {
    id: 26,
    number: 32,
    year: 2002,
    slug: "volume-32-2",
    title: "Waja Journal - Volume 32 (2)",
    summary:
      "Second season rescue excavations at Ladoku Ghana, GIS documentation in Nigeria, Sungbo Eredo preservation, and traditional bone-setting practices.",
    description:
      "This volume reports on continued rescue excavations in Ghana, demonstrates the use of GIS technology for archaeological documentation in Nigeria, discusses the preservation challenges of Sungbo Eredo, and examines traditional bone-setting practices in Ibadan.",
    editor: "Editorial Board",
    topics: [
      "Rescue Excavations",
      "GIS Technology",
      "Heritage Preservation",
      "Traditional Medicine",
      "Ghana",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title: "Report on the Second Season of Rescue Excavations at Ladoku, Eastern Accra plains, Ghana",
        author: "Boachie-Ansah, J.",
        pages: "1-40",
      },
      {
        title:
          "The use of Geographical Information Systems for documenting archaeological and tourism resources of Ijebuland, Southwestern Nigeria",
        author: "Olukole, T. & Aremu, D.A.",
        pages: "41-70",
      },
      { title: "Saving Sungbo Eredo: A Challenge to Nigerian archaeologists", author: "Aremu, D.A", pages: "71-90" },
      {
        title: "The potential value of 'Oriki' (praise poem) in settlement archaeology in Yorubaland",
        author: "Ogunfolakan, A.",
        pages: "91-110",
      },
      {
        title:
          "Knowledge, attitude and the practice of traditional bone-setting among the residents of Ibadan, Nigeria",
        author: "Aderemi, S.A",
        pages: "111-125",
      },
      {
        title: "Book Review- Ibos: Hebrew Exiles from Israel - O. Alaezi. The Igbo, ethnogenesis and a sophistry",
        author: "Ezeh, P.J.",
        pages: "126-130",
      },
    ],
    articles: 6,
  },
  {
    id: 27,
    number: 33,
    year: 2003,
    slug: "volume-33-1",
    title: "Waja Journal - Volume 33 (1)",
    summary:
      "Can the past serve the present? Cultural dimensions of development, indigenous knowledge in Niger Delta, and archaeology-tourism potential.",
    description:
      "This volume explores the relationship between past and present through archaeological research, examines cultural dimensions of development, investigates indigenous knowledge systems in the Niger Delta, and discusses the potential of archaeology for tourism development.",
    editor: "Editorial Board",
    topics: ["Development", "Indigenous Knowledge", "Cultural Heritage", "Tourism", "Niger Delta", "Nigeria"],
    tableOfContents: [
      { title: "Keynote Address: Can the Past Serve the Present?", author: "Ikime, O.", pages: "1-15" },
      { title: "The Cultural Dimensions of Development", author: "Oluwole, S.B.", pages: "16-30" },
      {
        title: "Indigenous Knowledge and Development in the Niger Delta, Nigeria: Status of Existing Data",
        author: "Derefaka, A.A",
        pages: "31-50",
      },
      {
        title:
          "Traditional Farming Methods in the Mambilla Plateau: The Need for a Retention of Valuable Cultural Practices",
        author: "Talla, R.T.",
        pages: "51-70",
      },
      {
        title: "Environmental Changes in West Africa: Human Role and the Need to Maintain an Ecological Equilibrium",
        author: "Alabi R.A",
        pages: "71-85",
      },
      {
        title:
          "Culture for Development: Archaeology and Tourism Potentials in the Badagry Coastal Area of South-western Nigeria",
        author: "Alabi R.A",
        pages: "86-95",
      },
      { title: "Museums and Development: The Nigerian Case", author: "Adepegba, C.O.", pages: "96-102" },
    ],
    articles: 7,
  },
  {
    id: 28,
    number: 33,
    year: 2003,
    slug: "volume-33-2",
    title: "Waja Journal - Volume 33 (2)",
    summary:
      "Ecological crisis in the Mande World, archaeological reconnaissance in Benin Republic, and settlement studies in modern Yoruba towns.",
    description:
      "This volume addresses ecological crisis conceptualization in the Mande World, presents archaeological reconnaissance work in Benin Republic, examines the history of archaeology in the Lake Chad region, and studies settlement evolution in modern Yoruba towns.",
    editor: "Editorial Board",
    topics: [
      "Ecological Crisis",
      "Archaeological Reconnaissance",
      "Settlement Studies",
      "Lake Chad",
      "Benin Republic",
      "Nigeria",
      "Togo",
    ],
    tableOfContents: [
      {
        title: "Memories, Abstractions, and Conceptualisation of Ecological Crisis in the Mande World",
        author: "Togola, T.",
        pages: "1-25",
      },
      {
        title:
          "Increasing Productivity: Workplan and Performance Appraisal for Archaeologists in the Nigerian Museums System",
        author: "Akata, J.E.",
        pages: "26-45",
      },
      {
        title:
          "Reconnaissance Archaeologique et Enquetes Ethnoarchaeologiques dans les Regions de la Dongha (Department de l'Atacora), Republic du Benin",
        author: "Guene, O.B.",
        pages: "46-70",
      },
      {
        title:
          "History of Culture and Language in the Natural Environment of the West African Savanna: An Archaeological Perspective",
        author: "Garba, A. & Hambolu M.O.",
        pages: "71-90",
      },
      {
        title: "History of Archaeology in the Lake Chad Region of North-east Nigeria",
        author: "Garba A.",
        pages: "91-105",
      },
      {
        title: "Settlement Studies: A Developmental Consideration in the Evolution of a Modern Yoruba Town",
        author: "Akpobasa, J.J",
        pages: "106-115",
      },
      {
        title: "Archaeological Survey of North-east Osun State, Nigeria",
        author: "Ogunfolakan, B.A.",
        pages: "116-120",
      },
      {
        title:
          "Approche Ethnoarchaeologique: Survivance d'une technique ancienne d'amenagement de sol chez les Kabiye Au Nord-Togo",
        author: "Aguiah, A.D.",
        pages: "121-123",
      },
    ],
    articles: 8,
  },
  {
    id: 29,
    number: 35,
    year: 2005,
    slug: "volume-35",
    title: "Waja Journal - Volume 35 (1&2)",
    summary:
      "GIS documentation of archaeological sites in Egba Forest, early settlements in Okigwe, ramparts and fortifications, and Benin brass castings continuity.",
    description:
      "This comprehensive double volume demonstrates the application of GIS technology in archaeological documentation, presents research on early settlements in southeastern Nigeria, examines fortification systems, and analyzes continuity and change in Benin brass casting traditions.",
    editor: "Editorial Board",
    topics: ["GIS Documentation", "Early Settlements", "Fortifications", "Benin Art", "Brass Castings", "Nigeria"],
    tableOfContents: [
      {
        title:
          "GIS Documentation of Archaeological Sites, Conflict and Landscape Archaeology in Egba Forest, Southwestern Nigeria",
        author: "Aleru J.O, Opadeji O.A. & Adegbite A.O.",
        pages: "1-40",
      },
      {
        title: "Early Settlements and Subsistence in Okigwe, South Eastern Nigeria",
        author: "Ibeanu, A,M",
        pages: "41-70",
      },
      {
        title: "An Archaeological Survey of Ufe Settlement: A Preliminary Report",
        author: "Bakinde, C.O.",
        pages: "71-90",
      },
      {
        title: "Archaeological Sites in the Shitire of Katsina-Ala, Nigeria: A Preliminary Report",
        author: "Ndera, J.D.",
        pages: "91-110",
      },
      {
        title: "Ramparts and Fortifications in Settlement Archaeology of Nigeria",
        author: "Ogundele S.O.",
        pages: "111-135",
      },
      {
        title: "Continuity and Change in Style and themes of Benin Brass Castings",
        author: "Layiwola, P.",
        pages: "136-160",
      },
      {
        title: "Exhibition Planning and Design for Benin Cultural Objects in Museums: An Alternative Approach",
        author: "Eghafona, K.A.",
        pages: "161-175",
      },
      {
        title: "Ethnographic Study of the Socio-Cultural Significance of Calabash Carving in Oyo, Nigeria",
        author: "Aremu D.A, & Adekunle, S.K.",
        pages: "176-185",
      },
      {
        title: "Globalization, Academic Disciplines and Development: Whither Anthropology in Nigeria?",
        author: "Jegede, A.S & Ajala, A.S.",
        pages: "186-190",
      },
      { title: "Popularizing Archaeology through Museum Exhibition", author: "Hambolu E.O.", pages: "191-193" },
    ],
    articles: 10,
  },
  {
    id: 30,
    number: 38,
    year: 2008,
    slug: "volume-38-39",
    title: "Waja Journal - Volumes 38 (1&2), 39 (1&2)",
    summary:
      "Pottery traditions of Ghana earthworks, challenges of dating in West African Stone Age archaeology, and interpreting Benin art objects.",
    description:
      "This combined volume covers multiple years of research, focusing on pottery traditions from Ghanaian earthwork sites, methodological challenges in Stone Age archaeology dating, and innovative approaches to interpreting Benin art objects through indigenous photographic perspectives.",
    editor: "Editorial Board",
    topics: ["Pottery Traditions", "Dating Methods", "Stone Age", "Benin Art", "Indigenous Photography", "Ghana"],
    tableOfContents: [
      {
        title: "Pottery Traditions of the Earthworks of Southern Ghana: Test Excavation at the site of Nyeduam",
        author: "Boachie-Ansah, J",
        pages: "1-40",
      },
      {
        title: "Challenges of Dating and Sequencing in West African Stone Age Archaeology since the 1970s",
        author: "Bagodo, O.B",
        pages: "41-80",
      },
      {
        title:
          "Interpreting Benin Art Objects in Catalogues and Books as Indigenous Photographs Captured in Conventional Photography",
        author: "Agbontaen-Eghafona, K",
        pages: "81-127",
      },
    ],
    articles: 3,
  },
  {
    id: 31,
    number: 42,
    year: 2012,
    slug: "volume-42",
    title: "Waja Journal - Volume 42 (1&2)",
    summary:
      "The Ajibode 'UMF SITE' - a special edition contribution to Paleolithic settlement archaeology of the Bights of Benin region.",
    description:
      "This special edition volume, edited by Obare Bagodo, focuses entirely on the Ajibode UMF site near Ibadan, Nigeria, providing a comprehensive contribution to understanding Paleolithic settlement archaeology in the Bights of Benin region.",
    editor: "Obare Bagodo",
    topics: ["Paleolithic Archaeology", "Settlement Archaeology", "Bights of Benin", "Nigeria"],
    tableOfContents: [
      {
        title:
          "The Ajibode 'UMF SITE' (N.E. Ibadan, Nigeria). A contribution to the Paleolithic Settlement Archaeology of the Bights of Benin Region",
        author: "Obare Bagodo",
        pages: "1-226",
      },
    ],
    articles: 1,
  },
  {
    id: 32,
    number: 43,
    year: 2013,
    slug: "volume-43",
    title: "Waja Journal - Volume 43 (1&2)",
    summary:
      "Memorial to Charles Thurstan Shaw, West African Archaeological Association perspectives, and interdisciplinary archaeology in contemporary West Africa.",
    description:
      "This volume honors the memory of Charles Thurstan Shaw, a pioneering figure in West African archaeology, while presenting contemporary perspectives on archaeological practice, interdisciplinary approaches, and regional archaeological developments across West Africa.",
    editor: "Editorial Board",
    topics: [
      "Thurstan Shaw Memorial",
      "West African Archaeology",
      "Interdisciplinary Research",
      "Regional Perspectives",
      "Nigeria",
      "Cameroon",
    ],
    tableOfContents: [
      { title: "Editorial Obituary: Charles Thurstan Shaw", author: "Editorial Board", pages: "1-10" },
      {
        title:
          "The West African Archaeological Association (WAAA) and the Issue of Prevention of Archaeology: A Regional Perspective",
        author: "Adande, B.A. Alexis",
        pages: "11-30",
      },
      {
        title:
          "Archeologie, interdisciplinaire et enjeux de development de la recherche scientifique et technique en Afrique de l'Ouest contemporaine",
        author: "Bagodo, Obare",
        pages: "31-60",
      },
      {
        title: "Historical Archaeology in Cameroun: Scope of the field, Theoretical and Methodological Perspectives",
        author: "Eluouga, Martin.",
        pages: "61-90",
      },
      {
        title: "An Appraisal of Archaeology in the Middle Benue Valley:1951-2011",
        author: "Gunzu, Zacharys Anger",
        pages: "91-120",
      },
      {
        title: "Archaeological Reconnaissance of Eggon Land, Nasarawa State, Nigeria",
        author: "Ibeanu, A.M & Dallat, G.D",
        pages: "121-145",
      },
      {
        title: "A Report of Excavation at Okeegbon in Kogi State, Nigeria",
        author: "Bakinde, C.O & Eze-Uzomaka, P.I.",
        pages: "146-165",
      },
      {
        title: "Marginality and Crisis in Nigerian Archaeology: The Politics of the Centre and Peripheries",
        author: "Ogundele, S.O.",
        pages: "166-171",
      },
    ],
    articles: 8,
  },
  {
    id: 33,
    number: 44,
    year: 2014,
    slug: "volume-44",
    title: "Waja Journal - Volume 44 (1&2)",
    summary:
      "Thurstan Shaw's legacy in West African archaeology, domestic architecture in Southern Cameroon, and Afro-Brazilian influences on Yoruba architecture.",
    description:
      "This volume continues the tribute to Thurstan Shaw while exploring diverse architectural themes including domestic production in Cameroon, Afro-Brazilian influences on Yoruba architecture, coastal adaptations in Nigeria, and African rock art as communication systems.",
    editor: "Editorial Board",
    topics: [
      "Thurstan Shaw Legacy",
      "Domestic Architecture",
      "Afro-Brazilian Influence",
      "Rock Art",
      "Coastal Archaeology",
      "Cameroon",
      "Nigeria",
    ],
    tableOfContents: [
      { title: "Thurstan Shaw: archeologue exemplaire et vertueux", author: "Adande, A.B, Alexis", pages: "1-15" },
      {
        title: "The Legacy of Thurstan Shaw in Archaeology of West Africa: Professional and Ethical Issues (1937-2014)",
        author: "Obare, Bagodo",
        pages: "16-35",
      },
      {
        title:
          "Dynamics of Domestic Architectural production in Southern Cameroon: Spatial Structuring, Social Representations and functions of works of Art in the Beti Cultural Area",
        author: "Eluoga, Martin.",
        pages: "36-60",
      },
      {
        title: "Afro-Brazilian Influences on Indigenous Yoruba Architecture: The Ibadan example",
        author: "Agbelusi, Odunyemi Oluseyi",
        pages: "61-80",
      },
      {
        title:
          "Coastal Adaptations and European Activities and Trading in the Southwest coast of Nigeria: Insights from Recent Archaeological work at Lekki",
        author: "Oseni, K Aleru, J.O & Alabi R.A",
        pages: "81-100",
      },
      {
        title: "African Rock Art, Engravings and Carvings as Script and Communication: A Contribution from Nigeria",
        author: "Aremu David Ajamu, Osezua, C.Oghoadena & Owoeye, O. Idowu",
        pages: "101-114",
      },
    ],
    articles: 6,
  },
  {
    id: 34,
    number: 45,
    year: 2015,
    slug: "volume-45",
    title: "Waja Journal - Volume 45 (1&2)",
    summary:
      "Bassey Wai Andah's legacy in archaeology and anthropology, traditional foundations for Christian virtues, and indigenous technology in medical practices.",
    description:
      "This substantial volume honors Bassey Wai Andah's contributions to African archaeology and anthropology, explores the intersection of traditional and Christian values, examines indigenous medical technologies, and discusses poverty alleviation through public archaeology and heritage management.",
    editor: "Editorial Board",
    topics: [
      "Bassey Andah Legacy",
      "Christian Values",
      "Indigenous Technology",
      "Medical Practices",
      "Public Archaeology",
      "Heritage Management",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title: "Archaeology and Anthropology: the Foot Prints and Legacy of Bassey Wai Andah",
        author: "Okpoko, A.I",
        pages: "1-30",
      },
      {
        title:
          "Traditional Foundation for Christian Virtues in Igboland: a Link from Bassey Andah's Viewpoint on Religion and Religious Life in Africa",
        author: "Okpoko, A.I & Onu O.O",
        pages: "31-60",
      },
      {
        title:
          "Historicism, Structuralism and Post-Structuralism: The Contribution of Bassey W. Andah to Deconstructing African Anthropology",
        author: "Tubi, Paul-Kolade",
        pages: "61-90",
      },
      {
        title: "Indigenous Technology: Some Medical Examples of the Origin and the Igbo",
        author: "Ezeh, P.J",
        pages: "91-120",
      },
      {
        title:
          "Ethnography of the Dynamics of Politics and Religion in Traditional Society: A Case Study of the Okun Yoruba",
        author: "Tubi, Paul-Kolade",
        pages: "121-150",
      },
      {
        title: "Towards Poverty Alleviation: Public Archaeology, Heritage Management and Museum in Nigeria",
        author: "Ogundele, S.O",
        pages: "151-180",
      },
      {
        title:
          "Ethnographic Study of Wooden Objects Conservation: Focus on National Museums in Lagos and Oron, Nigeria",
        author: "Oyinloye, M.A & Aremu, D.A",
        pages: "181-254",
      },
    ],
    articles: 7,
  },
  {
    id: 35,
    number: 46,
    year: 2016,
    slug: "volume-46",
    title: "Waja Journal - Volume 46 (1&2)",
    summary:
      "Paleosiderurgical workshops in Cameroon, Tikar chiefdom fortifications, trade feuds in Ghana, and holocene vegetation changes in Southwest Nigeria.",
    description:
      "This final volume in our collection presents diverse research including paleosiderurgical workshops in southern Cameroon, fortification systems in Tikar chiefdoms, archaeological evidence of trade conflicts in Ghana, and environmental studies of vegetation changes in Nigeria's forests.",
    editor: "Editorial Board",
    topics: [
      "Paleosiderurgy",
      "Fortifications",
      "Trade Conflicts",
      "Vegetation Change",
      "Environmental Archaeology",
      "Cameroon",
      "Ghana",
      "Nigeria",
    ],
    tableOfContents: [
      {
        title:
          "Fouille des Ateliers Paleosiderurgiques d'Elig-Zogo Philadelphia et implications sur le development de la metallurgie du fer au Cameroun meridional",
        author: "Eloi Cyrille Tollo",
        pages: "1-40",
      },
      {
        title:
          "Fortifications in Tikar Chiefdoms. Temporal security borders and indicators of an autarchic economic and social life in peace or war time. A contribution to historical archaeology in Cameroon",
        author: "Martin Elouga",
        pages: "41-80",
      },
      {
        title:
          "Trade Feuds and Armed Confrontation: Archaeological indications at Forts Eliza Carthago and Ruychaver, Western Region, Ghana",
        author: "Fritz Biveridge",
        pages: "81-120",
      },
      {
        title:
          "Iconoclasm, Antithesis to Cultural Heritage Conservation in Ghana- A Case-Study of Conflicts Typology in the Danish-Osu Heritage Setting",
        author: "Ing, H.N.A Wellington, Fritz Biveridge & Daniel Kuma",
        pages: "121-160",
      },
      {
        title:
          "Holocene Vegetation Change in the forests of Southwest Nigeria: Inferences from Lowland Rainforest Species Diversity",
        author: "Orijemie, Emuobosa Akpo",
        pages: "161-200",
      },
      {
        title: "'Healthy Women, Healthy World': A Theoretical Discourse of General Health Status of Women in Nigeria",
        author: "Monica Ewomazino Akokowebe",
        pages: "201-230",
      },
      {
        title: "The Nigerian Civil War and Socio-Cultural Context of Ogbunigwe Missile/Bomb",
        author: "Olufikayo Kunle Oyelade",
        pages: "231-261",
      },
    ],
    articles: 7,
  },
]

/* ---------- Helper functions consumed by the pages ---------- */

export function getAllVolumes(): Volume[] {
  return wajaJournalVolumes
}

export function getLatestVolumes(count = 3): Volume[] {
  return [...wajaJournalVolumes].sort((a, b) => b.year - a.year || b.number - a.number).slice(0, count)
}

export function getFeaturedVolumes(count = 3): Volume[] {
  // Featured volumes: select some notable ones
  const featuredIds = [7, 5, 8] // Iwo Eleru volume, Volume 5 (iron smelting), Volume 15
  return wajaJournalVolumes.filter((v) => featuredIds.includes(v.id)).slice(0, count)
}

export function getVolumeBySlug(slug: string): Volume | undefined {
  return wajaJournalVolumes.find((v) => v.slug === slug)
}

export function getRelatedVolumes(id: number, count = 3): Volume[] {
  // Related = volumes from similar time periods or with similar topics
  const currentVolume = wajaJournalVolumes.find((v) => v.id === id)
  if (!currentVolume) return []

  return wajaJournalVolumes
    .filter((v) => v.id !== id)
    .sort((a, b) => {
      // Sort by year proximity and topic similarity
      const yearDiff = Math.abs(a.year - currentVolume.year) - Math.abs(b.year - currentVolume.year)
      return yearDiff
    })
    .slice(0, count)
}
