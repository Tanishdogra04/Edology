import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, RefreshCw, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ComparePanel() {
  const { compareList, toggleCompare, clearCompare } = useApp();
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-45 px-4 sm:px-6 lg:px-8 pb-4 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto bg-white text-slate-800 border border-slate-200 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
        
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-blue-600 animate-spin-slow" />
            <span className="font-heading text-sm font-semibold text-slate-800">
              Comparing Programs ({compareList.length}/3)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-slate-400 hover:text-slate-600 underline cursor-pointer"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            <button 
              onClick={clearCompare}
              className="text-slate-400 hover:text-slate-650 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {compareList.map(course => (
                <div 
                  key={course.id}
                  className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/60 group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{course.universityName}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleCompare(course)}
                    className="text-slate-400 hover:text-red-650 p-1.5 hover:bg-slate-200/50 rounded-lg transition-all cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              
              {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                <div 
                  key={i}
                  className="hidden sm:flex items-center justify-center p-3 border border-dashed border-slate-200 text-slate-450 rounded-xl text-xs"
                >
                  + Add another program
                </div>
              ))}
            </div>

            <div className="flex sm:flex-col justify-center gap-2">
              <button
                onClick={() => {
                  setIsExpanded(false);
                  navigate('/courses?filter=compare');
                }}
                disabled={compareList.length < 2}
                className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl text-sm transition-all shadow-md ${
                  compareList.length >= 2
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/10 hover:scale-[1.02] cursor-pointer'
                    : 'bg-slate-100 text-slate-400 border border-slate-200/80 cursor-not-allowed'
                }`}
              >
                <BarChart2 className="w-4.5 h-4.5" />
                Compare Now
              </button>
              {compareList.length < 2 && (
                <p className="text-[10px] text-center text-slate-400 hidden sm:block font-medium">
                  Add at least 2 courses to compare
                </p>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
