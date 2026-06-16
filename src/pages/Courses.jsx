import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { courses, categories, universities } from '../data/mockData';
import CourseCard from '../components/course/CourseCard';
import { 
  Search, SlidersHorizontal, ArrowUpDown, Heart, RefreshCw, 
  Trash2, X, Star, ExternalLink, ShieldCheck, CheckCircle
} from 'lucide-react';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist, compareList, toggleCompare, clearCompare } = useApp();

  // Search/Filters states
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedUniv, setSelectedUniv] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  // Active filter tab (all, wishlist, compare)
  const activeFilter = searchParams.get('filter') || 'all';

  // Keep search state synchronized with URL params
  useEffect(() => {
    const search = searchParams.get('search');
    if (search !== null) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Handle setting filters in URL
  const handleFilterTabChange = (tab) => {
    const params = new URLSearchParams(searchParams);
    if (tab === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', tab);
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const params = new URLSearchParams(searchParams);
    if (catId === 'all') {
      params.delete('category');
    } else {
      params.set('category', catId);
    }
    setSearchParams(params);
  };

  // Filter and sort core logic
  const getFilteredCourses = () => {
    let list = [...courses];

    // Filter by type tab
    if (activeFilter === 'wishlist') {
      list = list.filter(c => wishlist.includes(c.id));
    } else if (activeFilter === 'compare') {
      return compareList; // Compare view returns list for comparison table
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      list = list.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.overview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter(c => c.category === selectedCategory);
    }

    // Filter by University
    if (selectedUniv !== 'all') {
      list = list.filter(c => c.universityId === selectedUniv);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    return list;
  };

  const filteredList = getFilteredCourses();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 space-y-8">
      
      {/* Page Header */}
      <div className="text-left space-y-2">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
          {activeFilter === 'wishlist' ? 'My Saved Programs' : 
           activeFilter === 'compare' ? 'Compare Master Programs' : 
           'Find Your Degree'}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {activeFilter === 'wishlist' ? `Manage your saved academic pathways (${wishlist.length} programs)` :
           activeFilter === 'compare' ? 'Compare syllabus specifications, pricing packages, and university certifications.' :
           'Explore post-graduate programs accredited across Europe and the United States.'}
        </p>
      </div>

      {/* Filter Tabs Toggle */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 pb-px">
        <button
          onClick={() => handleFilterTabChange('all')}
          className={`px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 -mb-px transition-all ${
            activeFilter === 'all'
              ? 'border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-white'
          }`}
        >
          Browse All
        </button>
        <button
          onClick={() => handleFilterTabChange('wishlist')}
          className={`flex items-center gap-1.5 px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 -mb-px transition-all ${
            activeFilter === 'wishlist'
              ? 'border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-white'
          }`}
        >
          <Heart className="w-4 h-4" />
          Wishlist ({wishlist.length})
        </button>
        <button
          onClick={() => handleFilterTabChange('compare')}
          className={`flex items-center gap-1.5 px-5 py-3 text-xs sm:text-sm font-semibold border-b-2 -mb-px transition-all ${
            activeFilter === 'compare'
              ? 'border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-white'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Comparison ({compareList.length})
        </button>
      </div>

      {/* Standard Directory Filter Toolbar */}
      {activeFilter !== 'compare' && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-805 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-1.5 px-4 py-3 border text-xs font-semibold rounded-xl transition-all ${
                  showFilters 
                    ? 'border-blue-600 bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-cyan-400' 
                    : 'border-slate-200 dark:border-slate-800 text-slate-705 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <SlidersHorizontal className="w-4.5 h-4.5" />
                Filters
              </button>

              <div className="relative flex items-center border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 px-3 py-1.5 shadow-sm">
                <ArrowUpDown className="w-4 h-4 text-slate-400 mr-2" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs sm:text-sm font-semibold text-slate-705 dark:text-slate-300 focus:ring-0 cursor-pointer"
                >
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>

          {/* Collapsible Advanced Filters options */}
          {showFilters && (
            <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in text-left">
              {/* Category selector */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">Academic Fields</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                    }`}
                  >
                    All Fields
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* University Selector */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-3">Accrediting Institution</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedUniv('all')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      selectedUniv === 'all'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                    }`}
                  >
                    All Institutions
                  </button>
                  {universities.map(univ => (
                    <button
                      key={univ.id}
                      onClick={() => setSelectedUniv(univ.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedUniv === univ.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                      }`}
                    >
                      {univ.shortName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CORE DISPLAY LOGIC */}
      {activeFilter === 'compare' ? (
        /* COMPARISON MATRIX SECTION */
        compareList.length > 0 ? (
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-md">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 font-bold text-slate-500 dark:text-slate-400 w-1/4">Metric</th>
                  {compareList.map(course => (
                    <th key={course.id} className="p-4 font-bold text-slate-800 dark:text-white w-1/4 relative group min-w-[220px]">
                      <button
                        onClick={() => toggleCompare(course)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"
                        aria-label="Remove"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex flex-col gap-2 pt-4">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-24 object-cover rounded-xl border border-slate-100 dark:border-slate-800"
                        />
                        <span className="text-[10px] text-slate-400">{course.universityLogo} {course.universityName}</span>
                        <p className="font-heading font-extrabold text-sm leading-tight text-slate-900 dark:text-white line-clamp-2">
                          {course.title}
                        </p>
                      </div>
                    </th>
                  ))}
                  {compareList.length < 3 && (
                    <th className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800 w-1/4 align-middle text-center text-slate-400">
                      Add courses to compare
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800">
                {/* Tuition Cost */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Tuition Cost</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4 font-heading font-extrabold text-slate-900 dark:text-white text-base">
                      {c.currency}{c.price.toLocaleString()}
                    </td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
                {/* Duration */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Program Duration</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300">{c.duration}</td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
                {/* Study Mode */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Methodology</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300">{c.mode}</td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
                {/* Academic Rating */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Academic Review</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{c.rating}</span>
                        <span className="text-xs text-slate-400">({c.ratingCount})</span>
                      </div>
                    </td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
                {/* Eligibility */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Eligibility</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {c.eligibility}
                    </td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
                {/* Key Outcomes */}
                <tr>
                  <td className="p-4 font-semibold bg-slate-50/50 dark:bg-slate-950/25">Key Syllabus Focus</td>
                  {compareList.map(c => (
                    <td key={c.id} className="p-4">
                      <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                        {c.outcomes.slice(0, 3).map((o, idx) => (
                          <li key={idx} className="flex gap-1.5 items-start">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                  {compareList.length < 3 && <td className="p-4 bg-slate-50/20 dark:bg-slate-900/10 border-l border-dashed border-slate-200 dark:border-slate-800" />}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <RefreshCw className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-white">No programs added for comparison</h3>
            <p className="text-xs text-slate-405 mt-1 max-w-sm mx-auto leading-relaxed">
              Navigate back to search directories and add programs using the sync/comparison icon overlays on individual cards.
            </p>
            <button
              onClick={() => handleFilterTabChange('all')}
              className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all"
            >
              Browse Programs
            </button>
          </div>
        )
      ) : (
        /* COURSE GRID DISPLAY */
        filteredList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <Search className="w-12 h-12 text-slate-350 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-white">No courses match your query</h3>
            <p className="text-xs text-slate-450 mt-1 max-w-sm mx-auto leading-relaxed">
              We couldn't find matches matching those specific filters. Try adjusting your fields or search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedUniv('all');
              }}
              className="mt-5 px-5 py-2.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-305 font-bold text-xs rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        )
      )}

    </div>
  );
}
