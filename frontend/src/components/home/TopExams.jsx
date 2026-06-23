import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { examsList } from '../../data/mockData';

export default function TopExams() {
  const { showToast } = useApp();
  const [activeExamCategory, setActiveExamCategory] = useState('Management');

  return (
    <div className="bg-gradient-to-tr from-slate-50 to-blue-50/20 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b border-slate-150 pb-px">
          <div className="text-left space-y-1 pb-4">
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight">
              Top Exams
            </h2>
            <p className="font-sans text-slate-500 text-sm">
              Don't miss important exam registration windows and dates
            </p>
          </div>
          
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

                      <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium line-clamp-3 text-left">
                        {exam.description}
                      </p>
                    </div>

                    <div className="space-y-4 mt-auto">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 text-left">
                        <i className="bi bi-calendar-event text-slate-400 text-sm"></i>
                        <span>Reg: {exam.registration}</span>
                      </div>

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
  );
}
