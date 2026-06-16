export const partners = [
  { id: 1, name: "Swiss School of Business and Management", logo: "SSBM", country: "Switzerland", rank: "Top 50 in Europe" },
  { id: 2, name: "Liverpool John Moores University", logo: "LJMU", country: "United Kingdom", rank: "Top 100 UK University" },
  { id: 3, name: "Caltech CTME", logo: "Caltech", country: "United States", rank: "#1 World University Rank" },
  { id: 4, name: "Coventry University", logo: "Coventry", country: "United Kingdom", rank: "5 Star QS Rated" },
  { id: 5, name: "IU University of Applied Sciences", logo: "IU Germany", country: "Germany", rank: "Top Private University" },
  { id: 6, name: "Golden Gate University", logo: "GGU", country: "United States", rank: "Best for Professionals" }
];

export const categories = [
  { id: "tech", name: "Technology & Data Science", icon: "Code", count: 24, description: "Master AI, Data Science, Cyber Security, and Software Engineering." },
  { id: "business", name: "Business & Management", icon: "Briefcase", count: 32, description: "Executive MBAs, Global Business Management, and leadership courses." },
  { id: "finance", name: "Finance & Accounting", icon: "DollarSign", count: 18, description: "Corporate Finance, Investment Banking, Fintech, and Risk Management." },
  { id: "marketing", name: "Digital Marketing", icon: "Globe", count: 15, description: "SEO, Performance Marketing, Content Strategy, and Brand Management." },
  { id: "law", name: "Law & Public Policy", icon: "Scale", count: 12, description: "International Law, Business Law, and Cyber Law certifications." },
  { id: "psychology", name: "Psychology & Cognitive Science", icon: "Brain", count: 14, description: "Master clinical, organizational, and cognitive psychology programs." }
];

export const universities = [
  {
    id: "ssbm",
    name: "Swiss School of Business and Management",
    shortName: "SSBM Geneva",
    logo: "🇨🇭 SSBM",
    location: "Geneva, Switzerland",
    description: "SSBM is a global, innovative and unique business school with students from over 130 countries. It offers Swiss quality education and premium degrees designed for business professionals.",
    established: 2018,
    ranking: "QS Executive MBA Top 50",
    accreditation: ["ACBSP Accredited", "EduQua Certified", "Swiss Quality Standard"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    facultyCount: 85,
    studentsCount: "15,000+",
    programsCount: 45,
    reviews: [
      { student: "Alexander V.", rating: 5, comment: "Superb flexible MBA program designed for managers. Swiss education quality is exceptional.", program: "Executive MBA" },
      { student: "Martina S.", rating: 4.8, comment: "SSBM helped me transition from a technical manager to a global VP role. The network is amazing.", program: "Doctorate in Business Administration" }
    ]
  },
  {
    id: "ljmu",
    name: "Liverpool John Moores University",
    shortName: "LJMU UK",
    logo: "🇬🇧 LJMU",
    location: "Liverpool, United Kingdom",
    description: "LJMU is a pioneering institution in the UK offering academic excellence and industry-aligned master degrees, supporting global students with digital learning platforms.",
    established: 1823,
    ranking: "Top 100 UK Universities (Guardian)",
    accreditation: ["QAA Quality Assured", "AACSB Member", "Royal Charter"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    facultyCount: 220,
    studentsCount: "25,000+",
    programsCount: 110,
    reviews: [
      { student: "Debashis K.", rating: 5, comment: "I completed my MSc Data Science online while working full-time. Extremely well-designed curriculum.", program: "M.Sc. Data Science" },
      { student: "Chloë T.", rating: 4.9, comment: "Exceptional tutors and excellent guidance throughout the research thesis.", program: "M.Sc. Computer Science" }
    ]
  },
  {
    id: "caltech",
    name: "Caltech Center for Technology & Management Education",
    shortName: "Caltech CTME",
    logo: "🇺🇸 Caltech CTME",
    location: "Pasadena, California, USA",
    description: "Caltech's CTME provides leading-edge professional programs for technology-driven organizations, helping professionals master AI, Cloud Computing, and Engineering Management.",
    established: 1891,
    ranking: "#2 World University Rank (Times)",
    accreditation: ["WASC Accredited", "AACSB Partner", "Caltech Quality"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    facultyCount: 150,
    studentsCount: "10,000+",
    programsCount: 18,
    reviews: [
      { student: "Sarah M.", rating: 5, comment: "Intense, rigorous, and completely updated with generative AI techniques. Simply top tier.", program: "Post Graduate Program in AI" }
    ]
  },
  {
    id: "iu",
    name: "IU International University of Applied Sciences",
    shortName: "IU Germany",
    logo: "🇩🇪 IU Germany",
    location: "Erfurt, Germany",
    description: "IU is Germany's largest university, offering state-accredited online degrees, combining maximum flexibility with modern learning tools and German quality standards.",
    established: 1998,
    ranking: "5 Star Rating for Online Learning (QS)",
    accreditation: ["FIBAA Accredited", "German Accreditation Council", "Cambridge Partner"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=800",
    facultyCount: 350,
    studentsCount: "100,000+",
    programsCount: 150,
    reviews: [
      { student: "Jan D.", rating: 4.8, comment: "The IU study portal is extremely smooth. Exam booking is incredibly flexible.", program: "B.Sc. Software Development" }
    ]
  },
  {
    id: "iima",
    name: "Indian Institute of Management, Ahmedabad (IIMA)",
    shortName: "IIM Ahmedabad",
    logo: "🇮🇳 IIMA",
    location: "Ahmedabad, Gujarat",
    description: "IIMA is widely regarded as the premier management institution in India, offering world-class postgraduate credentials, executive education, and leadership pathways.",
    established: 1961,
    ranking: "NIRF Management Rank #1",
    accreditation: ["EQUIS Accredited", "AICTE Entitled", "UGC Approved"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    facultyCount: 120,
    studentsCount: "10,000+",
    programsCount: 15,
    reviews: []
  },
  {
    id: "iitb",
    name: "Indian Institute of Technology, Bombay (IITB)",
    shortName: "IIT Bombay",
    logo: "🇮🇳 IITB",
    location: "Mumbai, Maharashtra",
    description: "IIT Bombay is a leading global institution for engineering, computer science, and technical leadership, pioneering online executive research and data science courses.",
    established: 1958,
    ranking: "QS India Rank #1",
    accreditation: ["Institute of Eminence", "AICTE Approved", "UGC Certified"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    facultyCount: 310,
    studentsCount: "15,000+",
    programsCount: 42,
    reviews: []
  },
  {
    id: "iitk",
    name: "E&ICT Academy, IIT Kanpur",
    shortName: "IIT Kanpur",
    logo: "🇮🇳 IITK",
    location: "Kanpur, Uttar Pradesh",
    description: "Established under the Ministry of Electronics & IT (MeitY) to provide high-quality industry-oriented skill certification in python, machine learning, and data science.",
    established: 2015,
    ranking: "NIRF Engineering Rank #4",
    accreditation: ["MeitY Initiative", "IIT Kanpur Quality Assurance"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    facultyCount: 95,
    studentsCount: "25,000+",
    programsCount: 18,
    reviews: []
  },
  {
    id: "sibm",
    name: "Symbiosis Institute of Business Management",
    shortName: "SIBM Pune",
    logo: "🇮🇳 SIBM",
    location: "Pune, Maharashtra",
    description: "SIBM Pune is a premier private business school recognized for academic excellence, offering specialized executive online degrees and management certifications.",
    established: 1978,
    ranking: "NIRF Management Rank #17",
    accreditation: ["NAAC A++ Grade", "UGC Entitled", "AICTE Member"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=800",
    facultyCount: 65,
    studentsCount: "8,000+",
    programsCount: 12,
    reviews: []
  },
  {
    id: "amity",
    name: "Amity University Online",
    shortName: "Amity Online",
    logo: "🇮🇳 AMITY",
    location: "Noida, Uttar Pradesh",
    description: "India's first university to offer UGC-entitled online degrees, providing highly flexible learning options across MBA, BCA, MCA, and executive corporate programs.",
    established: 2005,
    ranking: "QS Asia Rank #200",
    accreditation: ["WASC Accredited", "UGC Entitled", "DEB Approved"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    facultyCount: 140,
    studentsCount: "45,000+",
    programsCount: 28,
    reviews: []
  },
  {
    id: "bits",
    name: "BITS Pilani (Work Integrated Learning)",
    shortName: "BITS Pilani",
    logo: "🇮🇳 BITS",
    location: "Pilani, Rajasthan",
    description: "BITS Pilani offers UGC-approved executive M.Tech, MBA, and technical degrees designed specifically for working professionals to study without pausing their careers.",
    established: 1964,
    ranking: "NIRF University Rank #25",
    accreditation: ["UGC Entitled", "NAAC A Grade", "BITS WILP Assurance"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    facultyCount: 180,
    studentsCount: "30,000+",
    programsCount: 35,
    reviews: []
  }
];

export const indianColleges = universities.filter(u => ['iima', 'iitb', 'iitk', 'sibm', 'amity', 'bits'].includes(u.id));

export const courses = [
  {
    id: "exec-mba-ssbm",
    title: "Executive Master of Business Administration (EMBA)",
    category: "business",
    universityId: "ssbm",
    universityName: "Swiss School of Business and Management",
    universityLogo: "🇨🇭 SSBM Geneva",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    duration: "12 Months",
    mode: "Online / Self-paced",
    rating: 4.9,
    ratingCount: 1240,
    price: 325000,
    originalPrice: 490000,
    currency: "₹",
    badge: "Most Popular",
    overview: "Develop advanced business knowledge, executive leadership capabilities, and strategic vision to lead complex business environments. Designed for professionals and executives seeking a premier Swiss business degree without pausing their career.",
    outcomes: [
      "Gain critical strategic management and decision-making skills.",
      "Develop executive leadership competencies to manage global teams.",
      "Build a world-class network of peers across diverse industries.",
      "Acquire deep knowledge in Corporate Finance, Digital Transformation, and Marketing."
    ],
    curriculum: [
      { title: "Module 1: Strategic Management", description: "Advanced frameworks for strategy formulation, execution, and competitive advantage in global markets." },
      { title: "Module 2: Executive Leadership & Ethics", description: "Behavioral science approach to leadership, group dynamics, negotiation, and corporate social responsibility." },
      { title: "Module 3: Corporate Finance & Risk", description: "Financial analysis, capital budgeting, risk mitigation, and executive decision-making." },
      { title: "Module 4: Global Marketing & Digital Strategy", description: "Modern digital marketing tactics, branding in a connected world, and customer analytics." }
    ],
    faculty: [
      { name: "Dr. Goran N.", role: "Professor of Strategy, SSBM", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
      { name: "Prof. Ivana M.", role: "Director of Business Programs, SSBM", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" }
    ],
    eligibility: "Bachelor's degree or equivalent, and a minimum of 3 years of professional work experience.",
    faq: [
      { question: "Is the degree globally recognized?", answer: "Yes, SSBM's degrees are fully accredited and recognized worldwide, using Swiss quality standards and ECTS framework." },
      { question: "Can I pay in installments?", answer: "Yes, we support monthly and semester-wise installment plans to make the premium education accessible." }
    ]
  },
  {
    id: "msc-ds-ljmu",
    title: "Master of Science (M.Sc.) in Data Science",
    category: "tech",
    universityId: "ljmu",
    universityName: "Liverpool John Moores University",
    universityLogo: "🇬🇧 LJMU UK",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    duration: "18 Months",
    mode: "Online + Live Mentorship",
    rating: 4.8,
    ratingCount: 3100,
    price: 375000,
    originalPrice: 540000,
    currency: "₹",
    badge: "High Demand",
    overview: "Master modern Data Science tools, Machine Learning, Predictive Modeling, and Big Data Technologies. Walk away with a prestigious British Master's Degree and a comprehensive professional portfolio.",
    outcomes: [
      "Master Python, R, SQL, and advanced business visualization (Tableau/PowerBI).",
      "Implement Machine Learning pipelines and build Deep Learning networks.",
      "Manage Big Data with Apache Spark and cloud engineering tools.",
      "Conduct independent research and publish a Master's Thesis under expert guidance."
    ],
    curriculum: [
      { title: "Module 1: Advanced Applied Statistics", description: "Statistical inference, regression modeling, and probability theory for predictive modeling." },
      { title: "Module 2: Machine Learning Algorithms", description: "Supervised and unsupervised learning, decision trees, support vector machines, and ensemble methods." },
      { title: "Module 3: Big Data and Cloud Analytics", description: "Working with massive datasets using Spark, Hadoop, and AWS cloud environments." },
      { title: "Module 4: Master's Research Dissertation", description: "A capstone project applying data science to solve an industry problem, mentored by LJMU research faculty." }
    ],
    faculty: [
      { name: "Dr. Keith C.", role: "Senior Reader in Computing, LJMU", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
      { name: "Prof. Atif W.", role: "Lead Data Scientist & Researcher, LJMU", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" }
    ],
    eligibility: "Bachelor's degree in a technical/mathematical field, or equivalent work experience with basic programming familiarity.",
    faq: [
      { question: "What software tools will I learn?", answer: "You will master Python (Pandas, Scikit-Learn, TensorFlow), SQL, Git, and Spark." },
      { question: "Do I get access to university resources?", answer: "Yes, you will receive full access to the LJMU digital library, student services, and career networks." }
    ]
  },
  {
    id: "pg-ai-caltech",
    title: "Post Graduate Program in Artificial Intelligence & Machine Learning",
    category: "tech",
    universityId: "caltech",
    universityName: "Caltech CTME",
    universityLogo: "🇺🇸 Caltech CTME",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    duration: "9 Months",
    mode: "Live Virtual Bootcamps",
    rating: 4.9,
    ratingCount: 1850,
    price: 435000,
    originalPrice: 625000,
    currency: "₹",
    badge: "Elite Program",
    overview: "Unlock world-class career growth in Artificial Intelligence. This premium program from Caltech CTME covers Generative AI, Large Language Models (LLMs), Computer Vision, and Reinforcement Learning.",
    outcomes: [
      "Acquire knowledge directly from Caltech faculty and global industry experts.",
      "Build practical expertise in Generative AI, Prompt Engineering, and fine-tuning LLMs.",
      "Develop skills in Neural Networks, Deep Learning, and Computer Vision.",
      "Obtain a certified credential from Caltech CTME and 15 CEUs (Continuing Education Units)."
    ],
    curriculum: [
      { title: "Module 1: Foundation of AI & Deep Learning", description: "Math essentials, neural network optimization, backpropagation, and PyTorch frameworks." },
      { title: "Module 2: Large Language Models & GenAI", description: "Transformers architecture, GPT-style models, instruction tuning, RAG (Retrieval-Augmented Generation)." },
      { title: "Module 3: Computer Vision & Advanced NLP", description: "Convolutional neural networks, object detection, image segmentation, and sequence-to-sequence translation." },
      { title: "Module 4: Reinforcement Learning & Autonomous Systems", description: "Markov processes, Q-learning, deep Q-networks, and application in automation." }
    ],
    faculty: [
      { name: "Dr. Rick S.", role: "Executive Director, Caltech CTME", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
      { name: "Prof. Anima A.", role: "Computing + Mathematical Sciences, Caltech", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" }
    ],
    eligibility: "Bachelor's degree and prior experience in python programming and basic calculus/linear algebra.",
    faq: [
      { question: "What is Caltech CTME?", answer: "The Center for Technology & Management Education (CTME) is a dedicated department within Caltech that empowers engineering, technology, and business professionals." },
      { question: "Are there projects included?", answer: "Yes, you will complete 25+ hands-on projects, including 3 major industry capstones." }
    ]
  },
  {
    id: "msc-cs-iu",
    title: "Master of Science in Computer Science & Cyber Security",
    category: "tech",
    universityId: "iu",
    universityName: "IU International University of Applied Sciences",
    universityLogo: "🇩🇪 IU Germany",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=800",
    duration: "12/24 Months",
    mode: "Fully Online + Flexible Exams",
    rating: 4.7,
    ratingCount: 1560,
    price: 285000,
    originalPrice: 400000,
    currency: "₹",
    badge: "Flexible Pacing",
    overview: "Advance your technical capability with a German-accredited Master's degree. Specialize in Advanced Software Engineering, Cloud Architectures, and System Cryptography, at a fraction of the cost.",
    outcomes: [
      "Master system architecture, design patterns, and enterprise software dev.",
      "Understand network security, penetration testing, and cryptography.",
      "Study cloud deployment (AWS/Azure) and devops automation workflows.",
      "Earn a fully accredited European degree recognized globally."
    ],
    curriculum: [
      { title: "Module 1: Software Architecture & Design", description: "Design principles, microservices, messaging architectures, and robust system setups." },
      { title: "Module 2: Network Cryptography & Pen-testing", description: "Symmetric and asymmetric encryption, security audits, and defensive cloud configurations." },
      { title: "Module 3: Advanced Research Methodologies", description: "Scientific writing, proposal development, and quantitative software validation." }
    ],
    faculty: [
      { name: "Dr. Thomas K.", role: "Professor of Software Engineering, IU", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" }
    ],
    eligibility: "Bachelor's degree in Computer Science, Software Engineering, or related technical disciplines, with English proficiency proof.",
    faq: [
      { question: "Can I choose my speed of studies?", answer: "Yes! IU offers Full-Time, Part-Time 1 (double duration), and Part-Time 2 (triple duration) tracks to perfectly fit your schedule." }
    ]
  },
  {
    id: "global-mba-coventry",
    title: "Global Master of Business Administration",
    category: "business",
    universityId: "ljmu", // Grouped under UK universities for convenience
    universityName: "Coventry University",
    universityLogo: "🇬🇧 Coventry University",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    duration: "12 Months",
    mode: "Online / Live Lectures",
    rating: 4.8,
    ratingCount: 2240,
    price: 350000,
    originalPrice: 500000,
    currency: "₹",
    badge: "Globally Ranked",
    overview: "Acquire real-world business context, strategic leadership capabilities, and financial analytics. Designed to help professionals transition into global management and consultative roles.",
    outcomes: [
      "Build competence in international trade, strategic positioning, and corporate governance.",
      "Understand financial modeling, accounting standards, and international economics.",
      "Master business communications, team dynamics, and cross-cultural negotiations.",
      "Acquire a direct master's degree from a top-ranked, historic British institution."
    ],
    curriculum: [
      { title: "Module 1: Global Marketing", description: "Targeting international markets, pricing models, and cross-border digital messaging." },
      { title: "Module 2: Leadership in a Complex World", description: "Change management, emotional intelligence, and remote-first workforce navigation." },
      { title: "Module 3: Managerial Finance", description: "Cost structures, budgeting, financial projections, and corporate investment guidelines." }
    ],
    faculty: [
      { name: "Prof. Sarah L.", role: "Global MBA Dean, Coventry", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300" }
    ],
    eligibility: "Bachelor's degree in any discipline and 2+ years of professional experience.",
    faq: [
      { question: "Are exams conducted online?", answer: "Yes, all assessments are task-based (written papers, presentations, reports) and submitted online. There are no traditional timed exam centers." }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Senior Data Scientist at Spotify",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    quote: "Completing my M.Sc. in Data Science via LJMU online was an absolute game-changer. The mentorship, the rigorous assignments, and the reputation of the UK university enabled me to confidently land a role at Spotify."
  },
  {
    id: 2,
    name: "Marcus Aurelius",
    role: "VP of Product at Salesforce",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    quote: "The Executive MBA program from SSBM Geneva gave me immediate tools that I could apply to my team. The network is truly global, with peers from 40+ countries in my intake alone. Best decision of my life."
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Lead AI Research Engineer at Siemens",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    quote: "The PG program in AI & ML with Caltech CTME exceeded my expectations. The live bootcamps and hands-on projects using generative models bridged the gap between academia and real-world industrial deployments."
  }
];

export const blogs = [
  {
    id: 1,
    title: "The Impact of Generative AI on Tech Careers in 2026",
    category: "technology",
    author: "Dr. Keith C.",
    date: "June 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    summary: "As LLMs and Agentic AI continue to reshape software engineering, we analyze the top skills professionals must acquire to maintain a competitive advantage.",
    content: "The landscape of tech careers is undergoing a paradigm shift. With AI agents writing boilerplate code, debugging system frameworks, and optimizing database clusters, the role of a software engineer is transitioning from 'syntax writing' to 'system architecture and logic verification'. To stay ahead, tech professionals must master system design, AI model fine-tuning, and robust prompt orchestration workflows..."
  },
  {
    id: 2,
    title: "Demystifying the Executive MBA: Is it worth the investment?",
    category: "business",
    author: "Prof. Ivana M.",
    date: "May 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    summary: "We breakdown the core ROI metrics of global executive business degrees, detailing career pivots, networking effects, and corporate salary boosts.",
    content: "One of the most frequent questions mid-career professionals ask is whether the financial and time investment of an Executive MBA pays off. The answer is found not just in the immediate salary hikes (which average 30% post-graduation), but in the long-term career resilience. An EMBA provides the systemic business vocabulary and peer networks that qualify managers for C-suite promotions..."
  },
  {
    id: 3,
    title: "Understanding Micro-Credentials and European ECTS Credit Systems",
    category: "education",
    author: "Admin Team",
    date: "April 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    summary: "How modern learners are using bite-sized certifications to build transferable academic credits toward global university degrees.",
    content: "Education is becoming modular. Under the Bologna Process in Europe, students can collect ECTS (European Credit Transfer and Accumulation System) points via verified micro-credentials. This allows individuals to learn at their own pace, stacking single modules in Business Law, Python, or Finance into full-fledged diplomas and Master's degrees over time..."
  }
];

export const careerHub = [
  {
    category: "Technology",
    icon: "Cpu",
    roles: [
      { title: "AI Research Engineer", salaryRange: "₹12L - ₹22L", demand: "High Growth", skills: ["Python", "PyTorch", "LLM Fine-tuning", "Neural Networks"] },
      { title: "Senior Data Scientist", salaryRange: "₹10L - ₹18L", demand: "Stable Growth", skills: ["SQL", "Scikit-Learn", "Machine Learning", "Data Pipelines"] },
      { title: "Solutions Architect", salaryRange: "₹14L - ₹25L", demand: "Critical Need", skills: ["AWS/Azure", "Microservices", "Docker", "DevOps"] }
    ]
  },
  {
    category: "Business",
    icon: "TrendingUp",
    roles: [
      { title: "Chief Strategy Officer (CSO)", salaryRange: "₹18L - ₹35L", demand: "Executive", skills: ["Market Analysis", "Strategic Formulation", "M&A", "Corporate Finance"] },
      { title: "VP of Product", salaryRange: "₹15L - ₹28L", demand: "High Demand", skills: ["Product Strategy", "UX/UI Design", "Agile Management", "Data Analytics"] },
      { title: "Management Consultant", salaryRange: "₹9L - ₹17L", demand: "Steady Growth", skills: ["Problem Solving", "Financial Modeling", "Stakeholder Mgmt"] }
    ]
  }
];

export const megaMenuDomains = [
  {
    id: "pg-courses",
    name: "PG Courses",
    subtext: "After Graduation",
    courses: [
      { id: "exec-mba", title: "Online MBA (General)", badge: "High ROI ⚡", duration: "12 Months", compareCount: 6, logo: "💼" },
      { id: "exec-mca", title: "Online MCA (Cloud Computing)", badge: "Tech Career ⚡", duration: "2 Years", compareCount: 4, logo: "💻" },
      { id: "msc-ds", title: "M.Sc. in Data Science", badge: "Global Path ⚡", duration: "18 Months", compareCount: 3, logo: "📊" },
      { id: "msc-cyber", title: "M.Sc. in Cyber Security", badge: "In-Demand ⚡", duration: "12 Months", compareCount: 5, logo: "🔒" },
    ]
  },
  {
    id: "gen-ai",
    name: "Gen AI/Agentic AI",
    subtext: "Future Proof Career",
    courses: [
      { id: "pg-ai-ml", title: "Post Graduate Program in AI", badge: "Elite Program ⚡", duration: "9 Months", compareCount: 2, logo: "🤖" },
      { id: "agentic-ai", title: "Agentic AI Developer Bootcamp", badge: "Trending ⚡", duration: "3 Months", compareCount: 1, logo: "🧠" },
      { id: "prompt-eng", title: "Prompt Engineering Specialist", badge: "Skill Up ⚡", duration: "1 Month", compareCount: 3, logo: "✏️" },
    ]
  },
  {
    id: "exec-ed",
    name: "Executive Education",
    subtext: "Working Professionals & CXOs",
    courses: [
      { id: "cxo-lead", title: "CXO Executive Leadership Program", badge: "US Career ⚡", duration: "6 Months", compareCount: 2, logo: "🏢" },
      { id: "digital-trans", title: "Digital Transformation Strategy", badge: "High Impact ⚡", duration: "4 Months", compareCount: 3, logo: "🔄" },
      { id: "fintech-exec", title: "Fintech for Executives", badge: "Finance ⚡", duration: "5 Months", compareCount: 2, logo: "💳" }
    ]
  },
  {
    id: "doctorate",
    name: "Doctorate/Ph.D.",
    subtext: "Get Dr. Title (After UG + Work Ex)",
    courses: [
      { id: "dba-exec", title: "Executive Doctorate in Business (DBA)", badge: "Dr. Title ⚡", duration: "3 Years", compareCount: 4, logo: "🎓" },
      { id: "phd-cs", title: "Ph.D. in Computer Science", badge: "Academic ⚡", duration: "3-5 Years", compareCount: 2, logo: "🔬" }
    ]
  },
  {
    id: "ug-courses",
    name: "UG Courses",
    subtext: "After 12th",
    courses: [
      { id: "bba-online", title: "Online BBA (General)", badge: "Career Foundation ⚡", duration: "3 Years", compareCount: 8, logo: "📈" },
      { id: "bca-online", title: "Online BCA (Software)", badge: "Tech Starter ⚡", duration: "3 Years", compareCount: 6, logo: "📂" },
      { id: "bcom-online", title: "Online B.Com (Finance)", badge: "Stable Path ⚡", duration: "3 Years", compareCount: 5, logo: "🪙" }
    ]
  },
  {
    id: "engineering",
    name: "Engineering",
    subtext: "Flexi Timing",
    courses: [
      { id: "mtech-cs", title: "M.Tech in Software Systems", badge: "Flexi-Timing ⚡", duration: "2 Years", compareCount: 3, logo: "⚙️" },
      { id: "btech-working", title: "B.Tech for Working Professionals", badge: "Career Boost ⚡", duration: "3.5 Years", compareCount: 4, logo: "🔧" }
    ]
  },
  {
    id: "study-abroad",
    name: "Study Abroad",
    subtext: "Pathway/Hybrid Mode",
    courses: [
      { id: "hybrid-mba-uk", title: "Hybrid MBA (UK Pathway)", badge: "Study Abroad ⚡", duration: "2 Years", compareCount: 3, logo: "✈️" },
      { id: "germany-pathway", title: "Germany Study Pathway (M.Sc.)", badge: "Visa Support ⚡", duration: "1.5 Years", compareCount: 2, logo: "🏰" }
    ]
  },
  {
    id: "skilling",
    name: "Skilling & Certificate",
    subtext: "After 10th & 12th",
    courses: [
      { id: "acca-cert", title: "Online ACCA Certification", badge: "Global Path ⚡", duration: "1 - 3 Years", compareCount: 1, logo: "📊" },
      { id: "cfa-cert", title: "Online CFA Certification", badge: "Career Boost ⚡", duration: "2 - 3 Years", compareCount: 1, logo: "📈" },
      { id: "cma-cert", title: "Online CMA Certification", badge: "High ROI ⚡", duration: "6 - 9 Months", compareCount: 1, logo: "💼" },
      { id: "frm-cert", title: "Online FRM Certification", badge: "Risk Expert ⚡", duration: "12 - 18 Months", compareCount: 1, logo: "🛡️" },
      { id: "fin-accounts", title: "Finance and Accounts Certificate", badge: "IIM Aligned ⚡", duration: "9 Months - 1.5 Years", compareCount: 1, logo: "🧮" },
      { id: "cpa-cert", title: "Online CPA Certification", badge: "US Career ⚡", duration: "12 - 18 Months", compareCount: 1, logo: "🏦" },
      { id: "bootcamp-prog", title: "Bootcamp Programs", badge: "Specializations ⚡", duration: "5+ Specializations", compareCount: 0, isLink: true, url: "/courses" },
      { id: "job-linked", title: "Job - Linked Programs", badge: "Career Boost ⚡", duration: "14+ Specializations", compareCount: 0, isLink: true, url: "/courses" }
    ]
  }
];

export const examsList = [
  // Management
  {
    id: "exam-cat",
    acronym: "CAT",
    fullName: "Common Admission Test",
    category: "Management",
    description: "Primary national level entrance test for admission to premier Indian Institutes of Management (IIMs) and top-tier business schools in India.",
    registration: "August - September"
  },
  {
    id: "exam-gmat",
    acronym: "GMAT",
    fullName: "Graduate Management Admission Test",
    category: "Management",
    description: "A computer-adaptive exam used globally for admission to graduate management programs, such as MBA and Master in Finance.",
    registration: "Year-round Registration"
  },
  {
    id: "exam-xat",
    acronym: "XAT",
    fullName: "Xavier Aptitude Test",
    category: "Management",
    description: "National level management entrance exam conducted by XLRI Jamshedpur for admission to XLRI and over 160 other business schools.",
    registration: "August - November"
  },
  {
    id: "exam-nmat",
    acronym: "NMAT",
    fullName: "NMAT by GMAC",
    category: "Management",
    description: "Entrance exam owned by GMAC for MBA admission at NMIMS University and other leading business schools in India and abroad.",
    registration: "August - October"
  },
  // Technology
  {
    id: "exam-gate",
    acronym: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    category: "Technology",
    description: "An examination that primarily tests the comprehensive understanding of various undergraduate subjects in engineering and science.",
    registration: "August - October"
  },
  {
    id: "exam-jee-adv",
    acronym: "JEE Adv",
    fullName: "Joint Entrance Examination (Advanced)",
    category: "Technology",
    description: "Elite entrance test conducted by IITs for admissions to undergraduate engineering (B.Tech) programs at Indian Institutes of Technology.",
    registration: "April - May"
  },
  {
    id: "exam-aws-sa",
    acronym: "AWS SA",
    fullName: "AWS Certified Solutions Architect",
    category: "Technology",
    description: "Industry-recognized credential validating expertise in designing and deploying scalable, highly available systems on AWS.",
    registration: "Year-round Registration"
  },
  {
    id: "exam-ceh",
    acronym: "CEH",
    fullName: "Certified Ethical Hacker",
    category: "Technology",
    description: "Global certification validating practical skillsets in cybersecurity, penetration testing, and vulnerability assessment methodologies.",
    registration: "Year-round Registration"
  },
  // Finance & Law
  {
    id: "exam-cfa",
    acronym: "CFA",
    fullName: "Chartered Financial Analyst",
    category: "Finance & Law",
    description: "Globally recognized professional credential offered by the CFA Institute, measuring competence and integrity of financial analysts.",
    registration: "Varies by Level (Year-round)"
  },
  {
    id: "exam-clat",
    acronym: "CLAT",
    fullName: "Common Law Admission Test",
    category: "Finance & Law",
    description: "Centralized national-level entrance exam for admissions to 22 National Law Universities (NLUs) in India.",
    registration: "July - November"
  },
  {
    id: "exam-frm",
    acronym: "FRM",
    fullName: "Financial Risk Manager",
    category: "Finance & Law",
    description: "Global certification offered by the Global Association of Risk Professionals (GARP) for financial risk management professionals.",
    registration: "December - September"
  },
  {
    id: "exam-ca-found",
    acronym: "CA Found",
    fullName: "Chartered Accountant Foundation",
    category: "Finance & Law",
    description: "Entry-level exam for the Chartered Accountancy course in India, conducted by the Institute of Chartered Accountants of India (ICAI).",
    registration: "Year-round (Cut-off dates apply)"
  }
];

