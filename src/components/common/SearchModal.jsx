import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, GraduationCap, Building2, FileText, ArrowRight } from 'lucide-react';
import { courses } from '../../data/mockData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Live filter results
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = courses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.universityName.toLowerCase().includes(query.toLowerCase()) ||
      course.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 5));
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (courseId) => {
    navigate(`/courses/${courseId}`);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        
        {/* Search input container */}
        <div className="flex items-center gap-3 px-4 border-b border-slate-150 dark:border-slate-800 py-3.5">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search degrees, certificates, or universities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base bg-transparent border-none outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-0"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-50 rounded-full transition-all cursor-pointer"
            aria-label="Close Search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2">
                Matching Programs
              </h4>
              <div className="space-y-1">
                {results.map(course => (
                  <button
                    key={course.id}
                    onClick={() => handleSelect(course.id)}
                    className="w-full flex items-center justify-between gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                        <GraduationCap className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors line-clamp-1">
                          {course.title}
                        </p>
                        <p className="text-xs text-slate-405 dark:text-slate-450">
                          {course.universityName} • {course.duration}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4.5 h-4.5 text-slate-300 dark:text-slate-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : query.trim() !== '' ? (
            <div className="py-8 text-center text-slate-400">
              <p>No programs found matching <strong className="text-slate-750 dark:text-white">"{query}"</strong></p>
              <p className="text-xs mt-1">Try searching with other terms like "MBA", "Data", "AI", or "Swiss".</p>
            </div>
          ) : (
            <div className="space-y-6 py-2">
              {/* Popular Searches */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                  Popular Searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Executive MBA', 'Data Science', 'Generative AI', 'Swiss School', 'Master Degrees'].map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-medium rounded-full text-slate-650 dark:text-slate-350 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation links in search */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => { navigate('/courses'); onClose(); }}
                  className="flex items-center gap-2.5 p-3.5 border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-cyan-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 rounded-xl text-left transition-colors"
                >
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">All Courses</p>
                    <p className="text-[10px] text-slate-400">Browse 50+ degree programs</p>
                  </div>
                </button>
                <button
                  onClick={() => { navigate('/universities'); onClose(); }}
                  className="flex items-center gap-2.5 p-3.5 border border-slate-100 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-blue-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 rounded-xl text-left transition-colors"
                >
                  <Building2 className="w-5 h-5 text-cyan-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">Partner Universities</p>
                    <p className="text-[10px] text-slate-400">View European & US campuses</p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
