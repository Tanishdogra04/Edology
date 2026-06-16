import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { indianColleges, examsList, testimonials } from '../data/mockData';

export default function Home() {
  const { compareList, toggleCompare, showToast } = useApp();
  const [rightSlide, setRightSlide] = useState(0);
  const [activeExamCategory, setActiveExamCategory] = useState('Management');
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const homeFaqs = [
    {
      question: "Are the online degrees offered on Edeco recognized?",
      answer: "Yes. All our partner Indian universities offer UGC-entitled and AICTE-approved online degree programs. International partner degrees are fully accredited and comply with Swiss, UK, or US quality assurance frameworks."
    },
    {
      question: "How does the placement support center work?",
      answer: "Edeco provides comprehensive placement support, including resume-building workshops, corporate mentoring, regional alumni networking hubs, and direct interview opportunities with 200+ global hiring partners."
    },
    {
      question: "Can I pursue these programs while working full-time?",
      answer: "Absolutely. All programs are structured specifically for working professionals, featuring 100% online coursework, self-paced learning portals, and flexible online examination slots."
    },
    {
      question: "Is there any financial aid or EMI option available?",
      answer: "Yes. We partner with multiple financial institutions to offer zero-cost EMI options and flexible installment plans (monthly or semester-wise) to make education highly accessible."
    },
    {
      question: "How do I choose the right program for my career goal?",
      answer: "You can use our integrated 'Find Your Course' directory and 'Career Placement Hub' to map specific roles to matching degrees, or connect with our academic advisors for a free counseling session."
    }
  ];

  const rightSlides = ["/hero_student.png", "/hero_student_2.png", "/hero_student_3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRightSlide(prev => (prev + 1) % rightSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rightSlides.length]);

  const stats = [
    {
      id: 1,
      value: "50,000+",
      label: "Active Learners",
      desc: "Empowering global learners to achieve career-defining credentials online.",
      icon: "bi-people-fill"
    },
    {
      id: 2,
      value: "150+",
      label: "Accredited Programs",
      desc: "UGC-entitled, AICTE-approved, and premium international degrees.",
      icon: "bi-mortarboard-fill"
    },
    {
      id: 3,
      value: "98.2%",
      label: "Graduation Rate",
      desc: "High completion rate supported by dedicated academic advisor guidance.",
      icon: "bi-trophy-fill"
    },
    {
      id: 4,
      value: "4.9/5",
      label: "Student Rating",
      desc: "Outstanding satisfaction rate from 10k+ independent student reviews.",
      icon: "bi-star-fill"
    }
  ];

  const cities = [
    {
      id: 1,
      name: "Bengaluru",
      count: "15,200+",
      hub: "Silicon Valley Hub",
      focus: "AI, Tech Leadership & Dev",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "Mumbai",
      count: "12,400+",
      hub: "Financial Capital Circle",
      focus: "Investment Banking & Finance",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      name: "Delhi NCR",
      count: "10,800+",
      hub: "Corporate & Strategy Center",
      focus: "Digital Marketing & Operations",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 4,
      name: "Hyderabad",
      count: "9,500+",
      hub: "Cyber City Network",
      focus: "Data Science & Cloud Arch",
      image: "https://images.unsplash.com/photo-1608958220926-a6e95c102a11?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 5,
      name: "Pune",
      count: "8,200+",
      hub: "Educational & IT Sector",
      focus: "Product Tech & MBA Leadership",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const courseList = [
    {
      id: 1,
      title: "Professional Certificate in Artificial Intelligence and Machine Learning",
      category: "Computing & IT",
      partnerLogo: "IBM",
      level: "Postgraduate",
      startDate: "July 2022",
      duration: "Minimum: 10 Months",
      price: 250000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      universityName: "IBM",
      universityLogo: "🤖 IBM",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.8,
      ratingCount: 1420,
      eligibility: "Bachelor's degree or equivalent experience in quantitative subjects.",
      outcomes: [
        "Master key machine learning model architectures and pipelines.",
        "Gain hands-on proficiency in PyTorch, TensorFlow, and Python.",
        "Implement predictive systems and custom neural networks."
      ]
    },
    {
      id: 2,
      title: "Post Graduate Program in Data Science IBM",
      category: "Computing & IT",
      partnerLogo: "IBM",
      level: "Postgraduate",
      startDate: "Aug 2022",
      duration: "Minimum: 12 Months",
      price: 265000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      universityName: "IBM",
      universityLogo: "📊 IBM",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.7,
      ratingCount: 1980,
      eligibility: "Basic algebra and foundational programming recommended.",
      outcomes: [
        "Build statistics frameworks and regression methodologies.",
        "Leverage database analytics (SQL) and cloud dashboards.",
        "Generate automated pipelines for big data querying."
      ]
    },
    {
      id: 3,
      title: "Master in Finance and Investments",
      category: "Finance & Accounting",
      partnerLogo: "London School of Business & Finance",
      level: "Postgraduate",
      startDate: "January, April, July, October",
      duration: "Minimum: 18 Months",
      price: 375000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      universityName: "London School of Business & Finance",
      universityLogo: "💼 LSBF",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.9,
      ratingCount: 890,
      eligibility: "Bachelor's degree in business/accounting or equivalent portfolio.",
      outcomes: [
        "Formulate portfolio management & wealth optimization strategies.",
        "Master corporate valuation methodologies and risk modeling.",
        "Analyze international markets and derivative financial instruments."
      ]
    },
    {
      id: 4,
      title: "Executive MBA in Global Business Management",
      category: "Business & Management",
      partnerLogo: "The University of Law Business School",
      level: "Postgraduate",
      startDate: "September 2022",
      duration: "Minimum: 12 Months",
      price: 325000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      universityName: "The University of Law Business School",
      universityLogo: "🎓 ULaw",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.8,
      ratingCount: 1560,
      eligibility: "Bachelor's degree or 3+ years managerial experience.",
      outcomes: [
        "Acquire global business leadership and organizational skills.",
        "Formulate market entry expansion plans and digital strategies.",
        "Apply strategic negotiations in corporate contexts."
      ]
    },
    {
      id: 5,
      title: "Professional Certificate in Digital Marketing",
      category: "Marketing & Communications",
      partnerLogo: "Brunel University London",
      level: "Professional Qualifications",
      startDate: "Rolling Admissions",
      duration: "Minimum: 6 Months",
      price: 150000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      universityName: "Brunel University London",
      universityLogo: "🇬🇧 Brunel",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.6,
      ratingCount: 740,
      eligibility: "High school graduate or entry-level professional.",
      outcomes: [
        "Optimize marketing SEO and content strategy positioning.",
        "Manage paid advertising budgets and analytics suites.",
        "Build brand stories across multiple digital channels."
      ]
    },
    {
      id: 6,
      title: "Short Course in Python Foundations",
      category: "Computing & IT",
      partnerLogo: "E&ICT Academy, IIT Kanpur",
      level: "Short Courses",
      startDate: "Monthly",
      duration: "Minimum: 3 Months",
      price: 80000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=800",
      universityName: "E&ICT Academy, IIT Kanpur",
      universityLogo: "🇮🇳 IITK",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.9,
      ratingCount: 2430,
      eligibility: "No prior programming experience required.",
      outcomes: [
        "Understand variables, control flow, loops, and OOP concepts.",
        "Write algorithms for data manipulation and analytics.",
        "Integrate APIs and external data services using python."
      ]
    },
    {
      id: 7,
      title: "MSc in Cyber Security Operations",
      category: "Computing & IT",
      partnerLogo: "RangeForce",
      level: "Postgraduate",
      startDate: "October 2022",
      duration: "Minimum: 12 Months",
      price: 290000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      universityName: "RangeForce",
      universityLogo: "🛡️ RangeForce",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.8,
      ratingCount: 650,
      eligibility: "Foundational computer network understanding.",
      outcomes: [
        "Identify system vulnerabilities and configuration gaps.",
        "Coordinate threat defense and real-time security events.",
        "Implement modern cryptographic algorithms."
      ]
    },
    {
      id: 8,
      title: "Master of Laws (LLM) in International Business",
      category: "Law & Criminology",
      partnerLogo: "The University of Law",
      level: "Postgraduate",
      startDate: "September 2022",
      duration: "Minimum: 12 Months",
      price: 310000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      universityName: "The University of Law",
      universityLogo: "⚖️ ULaw",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.7,
      ratingCount: 520,
      eligibility: "Bachelor's degree in Law or related fields.",
      outcomes: [
        "Analyze international corporate dispute resolution frameworks.",
        "Evaluate multinational tax policy and commerce rules.",
        "Draft sound intellectual property and trade contracts."
      ]
    },
    {
      id: 9,
      title: "BSc (Hons) in Computing & Information Systems",
      category: "Computing & IT",
      partnerLogo: "Arden University",
      level: "Undergraduate",
      startDate: "September 2022",
      duration: "Minimum: 36 Months",
      price: 420000,
      colorTheme: "blue",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      universityName: "Arden University",
      universityLogo: "🎓 Arden",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.8,
      ratingCount: 1120,
      eligibility: "High school certification or international equivalent.",
      outcomes: [
        "Master system architectures and database administration.",
        "Learn frontend web design and fullstack developments.",
        "Coordinate enterprise level network topologies safely."
      ]
    },
    {
      id: 10,
      title: "Professional Certificate in Forensic Accounting & Audit",
      category: "Finance & Accounting",
      partnerLogo: "kpmg",
      level: "Professional Qualifications",
      startDate: "November 2022",
      duration: "Minimum: 6 Months",
      price: 180000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      universityName: "KPMG",
      universityLogo: "📈 KPMG",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.9,
      ratingCount: 680,
      eligibility: "Foundational knowledge in bookkeeping/finance.",
      outcomes: [
        "Detect and prevent white-collar accounting fraud patterns.",
        "Coordinate internal forensic audits and tracking logs.",
        "Produce compliance documentation for regulatory agencies."
      ]
    },
    {
      id: 11,
      title: "Postgraduate Diploma in Fashion & Luxury Brand Management",
      category: "Fashion & Media",
      partnerLogo: "University of Bradford",
      level: "Postgraduate",
      startDate: "October 2022",
      duration: "Minimum: 12 Months",
      price: 340000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      universityName: "University of Bradford",
      universityLogo: "✨ Bradford",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.7,
      ratingCount: 310,
      eligibility: "Bachelor's degree or portfolio in design/marketing.",
      outcomes: [
        "Coordinate high-end fashion campaign messaging.",
        "Navigate luxury brand lifecycle positioning strategies.",
        "Analyze global fashion supply chain optimization."
      ]
    },
    {
      id: 12,
      title: "Short Course in Cognitive Behavioural Therapy Foundations",
      category: "Psychology & Social Sciences",
      partnerLogo: "Brunel University London",
      level: "Short Courses",
      startDate: "Rolling Admissions",
      duration: "Minimum: 3 Months",
      price: 65000,
      colorTheme: "teal",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=800",
      universityName: "Brunel University London",
      universityLogo: "🧠 Brunel",
      currency: "₹",
      mode: "100% Online / Self-paced",
      rating: 4.8,
      ratingCount: 410,
      eligibility: "High school graduate or helper professionals.",
      outcomes: [
        "Understand fundamental psychology behavioral patterns.",
        "Apply CBT methods to stress management context.",
        "Conduct baseline mental health client intake sessions."
      ]
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevels, setSelectedLevels] = useState(['Postgraduate']);
  const [selectedFaculties, setSelectedFaculties] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const [expanded, setExpanded] = useState({
    educationType: true,
    faculty: false,
    school: false,
    priceRange: false
  });

  const handleLevelCheckbox = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  const handleFacultyCheckbox = (faculty) => {
    setSelectedFaculties(prev => 
      prev.includes(faculty) 
        ? prev.filter(f => f !== faculty) 
        : [...prev, faculty]
    );
  };

  const handleSchoolCheckbox = (school) => {
    setSelectedSchools(prev => 
      prev.includes(school) 
        ? prev.filter(s => s !== school) 
        : [...prev, school]
    );
  };

  const toggleAccordion = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedLevels([]);
    setSelectedFaculties([]);
    setSelectedSchools([]);
    setPriceFrom('');
    setPriceTo('');
  };

  const filteredCourses = courseList.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    const matchesFaculty = selectedFaculties.length === 0 || selectedFaculties.includes(course.category);
    const matchesSchool = selectedSchools.length === 0 || selectedSchools.includes(course.partnerLogo);
    
    const matchesPriceFrom = priceFrom === '' || course.price >= Number(priceFrom);
    const matchesPriceTo = priceTo === '' || course.price <= Number(priceTo);
    
    return matchesSearch && matchesLevel && matchesFaculty && matchesSchool && matchesPriceFrom && matchesPriceTo;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-6 pb-16 lg:pt-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Content */}
            <div className="col-span-1 lg:col-span-7 space-y-8 text-left">

              {/* Accreditation Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
                <i className="bi bi-sparkles text-blue-600 text-sm"></i>
                <span>UGC-Entitled & AICTE Approved Online Degrees</span>
              </div>

              {/* Bold Premium Heading */}
              <h1 className="font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900 text-4xl sm:text-5xl lg:text-[62px]">
                Advance Your Career.<br />
                Study Online from<br />
                <span className="text-blue-600">
                  World-Class Universities
                </span>
              </h1>

              {/* Premium Slogan Description with highlighted brand color for Universities */}
              <p className="font-sans text-slate-600 text-base sm:text-lg font-medium max-w-xl leading-relaxed">
                Earn recognized Master's, MBA, and professional qualifications delivered 100% online. Gain the practical skills to succeed in today's job market from world-class <span className="text-blue-600 font-bold">Universities</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-heading"
                >
                  Explore Programmes
                  <i className="bi bi-arrow-right text-sm"></i>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-heading"
                >
                  Talk to an Advisor
                </Link>
              </div>

              {/* Social Proof Graduating Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 max-w-md">
                <div className="flex -space-x-2.5">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Student 1" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120" alt="Student 2" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" alt="Student 3" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center font-heading">+50k</div>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 font-heading">50,000+ Students Enrolled</p>
                  <p className="text-[10px] text-slate-400 font-semibold font-sans">
                    Across top Indian & international partner <span className="text-blue-600 font-bold">Universities</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Portrait & Floating cards */}
            <div className="col-span-1 lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">

              {/* Student Frame with Carousel Transitions */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                {rightSlides.map((src, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === rightSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                  >
                    <img
                      src={src}
                      alt={`Edeco Premium Student ${idx + 1}`}
                      className="w-full h-full object-cover object-center scale-[1.01]"
                    />
                  </div>
                ))}
              </div>

              {/* Floating Card 1 (Partner Info with Bootstrap Icon) */}
              <div className="absolute top-8 -left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5 animate-float z-10">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <i className="bi bi-award-fill text-amber-500 text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-semibold leading-none font-sans">Partner Institution</p>
                  <p className="text-xs font-extrabold text-slate-800 font-heading">SSBM Geneva MBA</p>
                </div>
              </div>

              {/* Floating Card 2 (Flexibility Info - Check replaced with Clock Icon) */}
              <div className="absolute bottom-10 -right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5 animate-float [animation-delay:3s] z-10">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <i className="bi bi-clock-history text-emerald-600 text-lg"></i>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-semibold leading-none font-sans">100% Online</p>
                  <p className="text-xs font-extrabold text-slate-800 font-heading">Flexible Schedule</p>
                </div>
              </div>

              {/* Floating Card 3 (Interactive Notification Icon leading to News & Insights) */}
              <Link
                to="/blog"
                className="absolute top-12 -right-12 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-blue-100 hover:border-blue-300 shadow-xl flex items-center gap-3 animate-float [animation-delay:1.5s] z-20 cursor-pointer group hover:scale-105 duration-300"
              >
                <div className="relative w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className="bi bi-bell-fill text-lg animate-swing"></i>
                  {/* Pulsing Red Dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                </div>
                <div className="text-left pr-2">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-0.5">News & Insights</p>
                  <p className="text-xs font-extrabold text-slate-800 font-heading leading-tight max-w-[140px] line-clamp-2">
                    Trends & Updates for 2026! 🚀
                  </p>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-50/50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 text-left"
              >
                {/* Accent top border highlight on hover */}
                <div className="absolute inset-x-0 -top-px h-1 rounded-t-2xl bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`bi ${stat.icon} text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}></i>
                </div>

                {/* Value */}
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm font-bold text-slate-800 font-heading mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 font-medium font-sans leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Cities Alumni Hubs Section */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
              <i className="bi bi-geo-alt-fill text-blue-600"></i>
              <span>Alumni & Placements Network</span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
              Connecting Learners Across India's Key Growth Hubs
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Join active regional student circles, attend exclusive offline networking meets, and unlock placements with leading employers in your city.
            </p>
          </div>

          {/* Grid of City Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cities.map((city) => (
              <div 
                key={city.id}
                className="group relative h-[260px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-end"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={`${city.name} Alumni Hub`} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Premium dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Glassmorphic Top Count Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wide shadow-md">
                  {city.count}
                </div>

                {/* Content Overlay */}
                <div className="relative p-4 text-left z-10">
                  <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest leading-none mb-1">
                    {city.hub}
                  </p>
                  <h3 className="font-heading text-lg font-extrabold text-white leading-tight mb-1">
                    {city.name}
                  </h3>
                  <p className="text-[10px] text-slate-300 leading-normal font-sans font-medium mb-2 line-clamp-1">
                    Focus: {city.focus}
                  </p>
                  
                  {/* Hover Revealed Join Action */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-white opacity-85 group-hover:opacity-100 group-hover:text-blue-300 transition-all duration-300">
                    <span>Explore Circle</span>
                    <i className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Find Your Course Section */}
      <div className="bg-slate-50/30 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Title & Filter Header */}
            <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-4">
                <h2 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight text-left">
                  Find Your Course
                </h2>
              </div>
              {/* Search input field */}
              <div className="relative w-full md:max-w-md flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/25 focus-within:border-blue-500 transition-all">
                <i className="bi bi-search text-slate-400 mr-3 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="Filter programme by title" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 focus:ring-0 p-0 text-left"
                />
              </div>
            </div>

            {/* Left Sidebar: Collapsible filter lists */}
            <div className="col-span-1 lg:col-span-3 space-y-4 text-left lg:sticky lg:top-24">
              <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                
                {/* Accordion 1: EDUCATION TYPE */}
                <div className="border-b border-slate-100">
                  <button 
                    onClick={() => toggleAccordion('educationType')}
                    className="w-full flex items-center justify-between px-5 py-4 font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-blue-600 font-extrabold">
                      <i className="bi bi-mortarboard-fill text-slate-400 text-sm"></i>
                      EDUCATION TYPE
                    </span>
                    <i className={`bi bi-chevron-down transition-transform duration-300 ${expanded.educationType ? 'rotate-180' : ''}`}></i>
                  </button>
                  {expanded.educationType && (
                    <div className="px-6 pb-5 pt-1 space-y-3">
                      {['Postgraduate', 'Professional Qualifications', 'Short Courses', 'Undergraduate'].map((level) => (
                        <label key={level} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox"
                            checked={selectedLevels.includes(level)}
                            onChange={() => handleLevelCheckbox(level)}
                            className="w-4 h-4 rounded border-slate-350 text-blue-600 focus:ring-blue-500/30 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                            {level}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 2: FACULTY */}
                <div className="border-b border-slate-100">
                  <button 
                    onClick={() => toggleAccordion('faculty')}
                    className="w-full flex items-center justify-between px-5 py-4 font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-blue-600 font-extrabold">
                      <i className="bi bi-book-half text-slate-400 text-sm"></i>
                      FACULTY
                    </span>
                    <i className={`bi bi-chevron-down transition-transform duration-300 ${expanded.faculty ? 'rotate-180' : ''}`}></i>
                  </button>
                  {expanded.faculty && (
                    <div className="px-6 pb-5 pt-1 space-y-3">
                      {[
                        'Business & Management',
                        'Computing & IT',
                        'Fashion & Media',
                        'Finance & Accounting',
                        'Law & Criminology',
                        'Marketing & Communications',
                        'Psychology & Social Sciences'
                      ].map((faculty) => (
                        <label key={faculty} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox"
                            checked={selectedFaculties.includes(faculty)}
                            onChange={() => handleFacultyCheckbox(faculty)}
                            className="w-4 h-4 rounded border-slate-350 text-blue-600 focus:ring-blue-500/30 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                            {faculty}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 3: SCHOOL */}
                <div className="border-b border-slate-100">
                  <button 
                    onClick={() => toggleAccordion('school')}
                    className="w-full flex items-center justify-between px-5 py-4 font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-blue-600 font-extrabold">
                      <i className="bi bi-building text-slate-400 text-sm"></i>
                      SCHOOL
                    </span>
                    <i className={`bi bi-chevron-down transition-transform duration-300 ${expanded.school ? 'rotate-180' : ''}`}></i>
                  </button>
                  {expanded.school && (
                    <div className="px-6 pb-5 pt-1 space-y-3 max-h-[220px] overflow-y-auto pr-1">
                      {[
                        'Arden University',
                        'Brunel University London',
                        'E&ICT Academy, IIT Kanpur',
                        'IBM',
                        'London School of Business & Finance',
                        'RangeForce',
                        'The University of Law',
                        'The University of Law Business School',
                        'University of Bradford',
                        'kpmg'
                      ].map((school) => (
                        <label key={school} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox"
                            checked={selectedSchools.includes(school)}
                            onChange={() => handleSchoolCheckbox(school)}
                            className="w-4 h-4 rounded border-slate-350 text-blue-600 focus:ring-blue-500/30 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                            {school}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Accordion 4: PRICE RANGE */}
                <div>
                  <button 
                    onClick={() => toggleAccordion('priceRange')}
                    className="w-full flex items-center justify-between px-5 py-4 font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-blue-600 font-extrabold">
                      <i className="bi bi-tags text-slate-400 text-sm"></i>
                      PRICE RANGE
                    </span>
                    <i className={`bi bi-chevron-down transition-transform duration-300 ${expanded.priceRange ? 'rotate-180' : ''}`}></i>
                  </button>
                  {expanded.priceRange && (
                    <div className="px-6 pb-5 pt-2 space-y-3 text-xs text-slate-600">
                      <p className="font-bold text-slate-700">Enter Price Range (₹):</p>
                      <div className="flex flex-col gap-2">
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">From</label>
                          <input 
                            type="number" 
                            placeholder="Min Price (₹)"
                            value={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">To</label>
                          <input 
                            type="number" 
                            placeholder="Max Price (₹)"
                            value={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Clear All Filters Button */}
              {(searchQuery || selectedLevels.length > 0 || selectedFaculties.length > 0 || selectedSchools.length > 0 || priceFrom || priceTo) && (
                <button 
                  type="button"
                  onClick={clearAllFilters}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 font-heading font-bold text-xs uppercase tracking-wider rounded-xl border border-rose-100 hover:border-rose-200 transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <i className="bi bi-trash-fill text-sm"></i>
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Right Side: Responsive dynamic filtered courses grid */}
            <div className="col-span-1 lg:col-span-9">
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => {
                    const isBlue = course.colorTheme === 'blue';
                    const themeHoverBg = isBlue ? 'bg-[#110060]' : 'bg-[#007b78]'; // High contrast brand colors
                    const themeBtnText = isBlue ? 'text-[#110060]' : 'text-[#007b78]';
                    const topBorderColor = isBlue ? 'border-t-4 border-[#110060]' : 'border-t-4 border-[#007b78]';
                    const isCompared = compareList.some(c => c.id === course.id);
                    
                    return (
                      <div 
                        key={course.id}
                        className={`group relative h-[380px] bg-white border border-slate-150 rounded-xl ${topBorderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6`}
                      >
                        {/* Front Side Layer */}
                        <div className="flex flex-col h-full justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
                          <div className="space-y-4">
                            {/* Category & Partner Logo */}
                            <div className="flex items-start justify-between gap-4">
                              <span className={`text-[10px] font-bold tracking-wide uppercase ${isBlue ? 'text-[#110060]' : 'text-[#007b78]'}`}>
                                {course.category}
                              </span>
                              <div className="font-sans text-[10px] font-extrabold tracking-tighter text-slate-500 text-right leading-none max-w-[120px]">
                                {course.partnerLogo}
                              </div>
                            </div>

                            {/* Course Title */}
                            <h3 className="font-heading text-[17px] font-extrabold text-slate-800 tracking-tight leading-snug text-left line-clamp-4">
                              {course.title}
                            </h3>
                          </div>

                          {/* Card bottom details */}
                          <div className="space-y-4 mt-auto">
                            <div className="space-y-2 text-left">
                              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                <i className="bi bi-mortarboard text-slate-400 text-sm"></i>
                                <span>{course.level}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                <i className="bi bi-calendar-event text-slate-400 text-sm"></i>
                                <span className="line-clamp-1">{course.startDate}</span>
                              </div>
                            </div>

                            <button className={`w-full py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${isBlue ? 'bg-[#110060] hover:bg-[#0b003f]' : 'bg-[#007b78] hover:bg-teal-800'}`}>
                              More Info
                            </button>
                          </div>
                        </div>

                        {/* Back Side Layer (Revealed on Hover) */}
                        <div className={`absolute inset-0 w-full h-full p-6 text-white ${themeHoverBg} flex flex-col justify-between text-left opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto z-10`}>
                          
                          {/* Top-Right Plus/Check Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleCompare(course);
                            }}
                            className={`absolute top-4 right-4 w-7 h-7 rounded-full border flex items-center justify-center font-sans text-sm font-bold leading-none shadow-sm cursor-pointer transition-all ${
                              isCompared 
                                ? 'bg-white text-[#110060] border-white hover:bg-white/95' 
                                : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                            }`}
                            title={isCompared ? "Remove from Compare" : "Compare Programme"}
                          >
                            {isCompared ? '✓' : '+'}
                          </button>

                          <div className="space-y-6 mt-4">
                            {/* Course Title */}
                            <h3 className="font-heading text-[17px] font-extrabold leading-snug tracking-tight">
                              {course.title}
                            </h3>

                            {/* Additional Details */}
                            <div className="space-y-3.5 text-xs text-white/90">
                              <div>
                                <span className="font-bold block uppercase text-[10px] tracking-wider text-white/70 mb-0.5">Duration:</span>
                                <span className="font-semibold">{course.duration}</span>
                              </div>
                              <div>
                                <span className="font-bold block uppercase text-[10px] tracking-wider text-white/70 mb-0.5">Start Dates:</span>
                                <span className="font-semibold">{course.startDate}</span>
                              </div>
                            </div>
                          </div>

                          {/* Price and Action Button */}
                          <div className="space-y-4 mt-auto">
                            <div className="text-2xl font-extrabold tracking-tight font-heading">
                              ₹{course.price.toLocaleString('en-IN')}
                            </div>

                            <button className={`w-full py-2.5 rounded-lg bg-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${themeBtnText} hover:bg-slate-50 shadow-sm`}>
                              More Info
                            </button>
                          </div>

                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white border border-slate-100 rounded-2xl py-16 px-6 text-center text-slate-500">
                  <i className="bi bi-search-heart text-4xl text-slate-350 mb-4 block"></i>
                  <p className="font-bold text-slate-700">No programs matched your filters.</p>
                  <p className="text-xs text-slate-400 mt-1">Try clearing your search query or enabling other education types.</p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Featured Colleges Section */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header row with Title & "View More" */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 border-b border-slate-100 pb-6">
            <div className="text-left space-y-1">
              <h2 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight">
                Featured Colleges
              </h2>
              <p className="font-sans text-slate-500 text-sm">
                Top institutions across all streams
              </p>
            </div>
            <Link 
              to="/universities" 
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-heading font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-200 hover:border-slate-350 transition-all duration-300 self-start sm:self-auto cursor-pointer shadow-sm"
            >
              View More
              <i className="bi bi-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianColleges.map((univ) => {
              // Custom brand acronym for logo display based on university id
              const acronym = 
                univ.id === 'iima' ? 'IIMA' : 
                univ.id === 'iitb' ? 'IITB' : 
                univ.id === 'iitk' ? 'IITK' : 
                univ.id === 'sibm' ? 'SIBM' : 
                univ.id === 'amity' ? 'AMITY' : 
                univ.id === 'bits' ? 'BITS' : univ.shortName.split(' ')[0];

              return (
                <div 
                  key={univ.id}
                  className="group bg-white border border-slate-150 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Campus Image container with hover zoom */}
                  <div className="relative aspect-video overflow-hidden bg-slate-105">
                    <img 
                      src={univ.image} 
                      alt={`${univ.name} Campus`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details block */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      {/* Logo and Title Header */}
                      <div className="flex items-start gap-4">
                        {/* CSS Logo Avatar Box */}
                        <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100/80 flex-shrink-0 flex items-center justify-center text-[#110060] font-heading font-black text-xs shadow-inner">
                          {acronym}
                        </div>
                        <div className="min-w-0">
                          <Link to={`/universities/${univ.id}`}>
                            <h3 className="font-heading font-extrabold text-slate-800 text-base leading-snug hover:text-blue-600 transition-colors line-clamp-2 min-h-[40px]">
                              {univ.name}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-slate-400 font-sans">
                            <i className="bi bi-geo-alt-fill text-slate-350"></i>
                            <span className="truncate">{univ.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description Paragraph Snippet */}
                      <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium line-clamp-3">
                        {univ.description}
                      </p>
                    </div>

                    {/* Bottom Link Action */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400 font-heading">
                        Est. {univ.established}
                      </span>
                      <Link 
                        to={`/universities/${univ.id}`}
                        className="inline-flex items-center gap-1 text-xs font-heading font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider hover:translate-x-0.5 transition-all"
                      >
                        More Details
                        <i className="bi bi-arrow-right text-xs"></i>
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Top Exams Section */}
      <div className="bg-gradient-to-tr from-slate-50 to-blue-50/20 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row with Left-Aligned Title and Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b border-slate-150 pb-px">
            <div className="text-left space-y-1 pb-4">
              <h2 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight">
                Top Exams
              </h2>
              <p className="font-sans text-slate-500 text-sm">
                Don't miss important exam registration windows and dates
              </p>
            </div>
            
            {/* Horizontal Tabs / Pills styled with border-b indicators */}
            <div className="flex -mb-px overflow-x-auto">
              {['Management', 'Technology', 'Finance & Law'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveExamCategory(cat)}
                  className={`px-6 py-3.5 text-xs sm:text-sm font-heading font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeExamCategory === cat
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examsList
              .filter((exam) => exam.category === activeExamCategory)
              .map((exam) => {
                return (
                  <div
                    key={exam.id}
                    className="group h-[320px] bg-white border border-slate-150 border-t-4 border-t-blue-600 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-6"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        {/* Logo and Acronym Header */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100/80 flex-shrink-0 flex items-center justify-center text-[#110060] font-heading font-black text-xs shadow-inner">
                            {exam.acronym}
                          </div>
                          <div className="min-w-0 text-left">
                            <h3 className="font-heading font-extrabold text-slate-800 text-base leading-snug truncate">
                              {exam.acronym}
                            </h3>
                            <div className="text-[11px] font-semibold text-slate-400 font-sans truncate">
                              {exam.fullName}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium line-clamp-3 text-left">
                          {exam.description}
                        </p>
                      </div>

                      {/* Card bottom details */}
                      <div className="space-y-4 mt-auto">
                        {/* Registration timeline */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 text-left">
                          <i className="bi bi-calendar-event text-slate-400 text-sm"></i>
                          <span>Reg: {exam.registration}</span>
                        </div>

                        {/* Universal Button */}
                        <button
                          type="button"
                          onClick={() =>
                            showToast(
                              `${exam.acronym} registration window is ${exam.registration}.`,
                              'info'
                            )
                          }
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
              <i className="bi bi-chat-square-quote-fill text-blue-600"></i>
              <span>Alumni Success Stories</span>
            </div>
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
              Loved by 50,000+ Career Pioneers
            </h2>
            <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
              Discover how professionals around the world have unlocked senior roles, transitioned into new domains, and scaled their leadership potential with Edeco.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="group relative bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Stylized double quote decoration */}
                <i className="bi bi-quote text-5xl text-blue-500/10 absolute top-6 right-6 leading-none"></i>
                
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center text-left">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-amber-400 mr-1 text-sm"></i>
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="font-sans text-slate-600 text-sm italic font-medium leading-relaxed text-left line-clamp-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Alumni profile info footer */}
                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-100 text-left">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    loading="lazy" 
                    className="w-11 h-11 rounded-full border border-slate-200 object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-heading font-extrabold text-slate-800 text-sm truncate leading-snug">
                      {t.name}
                    </h4>
                    <p className="font-sans text-[11px] text-slate-400 font-semibold truncate leading-none mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50/50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: FAQ Content */}
            <div className="col-span-1 lg:col-span-7 space-y-8 text-left">
              
              {/* Header Block */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
                  <i className="bi bi-question-circle-fill text-blue-600"></i>
                  <span>FAQ</span>
                </div>
                <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight leading-tight">
                  Got Questions?<br />We Have Answers
                </h2>
                <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
                  Find quick answers to common queries regarding admissions, recognition, career placement, and payment options.
                </p>
              </div>

              {/* Accordion List wrapper */}
              <div className="space-y-4">
                {homeFaqs.map((faq, index) => {
                  const isOpen = activeFaqIndex === index;
                  return (
                    <div 
                      key={index}
                      className="bg-white border border-slate-150 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-extrabold text-slate-800 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <i className={`bi bi-chevron-down text-slate-400 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}></i>
                      </button>
                      
                      {/* Accordion Answer Details */}
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed text-left border-t border-slate-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Visual Portrait & Floating cards */}
            <div className="col-span-1 lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
              
              {/* Frame with rounded corners */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Edeco Academic Advisor Support" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Card: Have Questions? */}
              <div className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-blue-100 shadow-xl flex items-center gap-3 animate-float z-10">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <i className="bi bi-telephone-fill text-lg"></i>
                </div>
                <div className="text-left pr-2">
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-0.5">Talk to Advisors</p>
                  <p className="text-xs font-extrabold text-slate-800 font-heading">
                    Free Counseling Session
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
