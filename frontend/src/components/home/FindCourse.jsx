import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { categories, universities } from '../../data/mockData';

export default function FindCourse() {
  const { compareList, toggleCompare } = useApp();

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
    <div className="bg-slate-50/30 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="col-span-1 lg:col-span-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <h2 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight text-left">
                Find Your Course
              </h2>
            </div>
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

          <div className="col-span-1 lg:col-span-3 space-y-4 text-left lg:sticky lg:top-24">
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              
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

          <div className="col-span-1 lg:col-span-9">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const isBlue = course.colorTheme === 'blue';
                  const themeHoverBg = isBlue ? 'bg-[#110060]' : 'bg-[#007b78]';
                  const themeBtnText = isBlue ? 'text-[#110060]' : 'text-[#007b78]';
                  const topBorderColor = isBlue ? 'border-t-4 border-[#110060]' : 'border-t-4 border-[#007b78]';
                  const isCompared = compareList.some(c => c.id === course.id);
                  
                  return (
                    <div 
                      key={course.id}
                      className={`group relative h-[380px] bg-white border border-slate-150 rounded-xl ${topBorderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6`}
                    >
                      <div className="flex flex-col h-full justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-auto group-hover:pointer-events-none">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <span className={`text-[10px] font-bold tracking-wide uppercase ${isBlue ? 'text-[#110060]' : 'text-[#007b78]'}`}>
                              {course.category}
                            </span>
                            <div className="font-sans text-[10px] font-extrabold tracking-tighter text-slate-500 text-right leading-none max-w-[120px]">
                              {course.partnerLogo}
                            </div>
                          </div>

                          <h3 className="font-heading text-[17px] font-extrabold text-slate-800 tracking-tight leading-snug text-left line-clamp-4">
                            {course.title}
                          </h3>
                        </div>

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

                      <div className={`absolute inset-0 w-full h-full p-6 text-white ${themeHoverBg} flex flex-col justify-between text-left opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto z-10`}>
                        
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
                          <h3 className="font-heading text-[17px] font-extrabold leading-snug tracking-tight">
                            {course.title}
                          </h3>

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
  );
}
