import React, { useState } from 'react';
import { careerHub, courses } from '../data/mockData';
import { Cpu, TrendingUp, DollarSign, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareerHub() {
  const [activeCategory, setActiveCategory] = useState('Technology');

  const activeHub = careerHub.find(ch => ch.category === activeCategory) || careerHub[0];

  // Helper to find courses for skills recommendation
  const getRecommendedCourse = (roleTitle) => {
    if (roleTitle.toLowerCase().includes('ai') || roleTitle.toLowerCase().includes('model')) {
      return courses.find(c => c.id === 'pg-ai-caltech');
    }
    if (roleTitle.toLowerCase().includes('data') || roleTitle.toLowerCase().includes('science')) {
      return courses.find(c => c.id === 'msc-ds-ljmu');
    }
    if (roleTitle.toLowerCase().includes('software') || roleTitle.toLowerCase().includes('architect')) {
      return courses.find(c => c.id === 'msc-cs-iu');
    }
    // Business fallback
    return courses.find(c => c.id === 'exec-mba-ssbm');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 space-y-10 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-full text-xs font-semibold text-blue-600 dark:text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Placement Support Center</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Career Placement Hub
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-405 max-w-2xl leading-relaxed">
          Map your academic journey to global salary trajectories. Discover critical job roles, market demand indexes, required skill sets, and matching degrees.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 pb-px">
        {careerHub.map(ch => (
          <button
            key={ch.category}
            onClick={() => setActiveCategory(ch.category)}
            className={`flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold border-b-2 -mb-px transition-all ${
              activeCategory === ch.category
                ? 'border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-white'
            }`}
          >
            {ch.category === 'Technology' ? <Cpu className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
            {ch.category} Sector
          </button>
        ))}
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeHub.roles.map((role, idx) => {
          const matchedCourse = getRecommendedCourse(role.title);
          return (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Role Header */}
                <div className="space-y-1.5">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 text-[9px] font-bold uppercase rounded">
                    {role.demand}
                  </span>
                  <h3 className="font-heading font-extrabold text-base text-slate-850 dark:text-white">
                    {role.title}
                  </h3>
                </div>

                {/* Salary trajectories */}
                <div className="flex items-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                  <DollarSign className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 leading-none">Salary Target Range</p>
                    <p className="font-heading font-bold text-sm text-slate-850 dark:text-slate-200 mt-1">{role.salaryRange}</p>
                  </div>
                </div>

                {/* Required Skills checklist */}
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Prerequisite Competencies</p>
                  <div className="space-y-1.5">
                    {role.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-404">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Recommended Course button */}
              {matchedCourse && (
                <div className="mt-8 pt-4 border-t border-slate-50 dark:border-slate-800/80 space-y-3">
                  <p className="text-[10px] text-slate-405 font-medium leading-relaxed">
                    Designed to bridge this skill gap:
                  </p>
                  <Link
                    to={`/courses/${matchedCourse.id}`}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white dark:bg-slate-800/50 dark:hover:bg-cyan-600 dark:text-slate-350 rounded-xl text-left transition-all text-xs font-bold group"
                  >
                    <span className="line-clamp-1">{matchedCourse.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
