import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { universities, courses } from '../data/mockData';
import { Building2, Search, MapPin, Award, BookOpen, ExternalLink } from 'lucide-react';

export default function Universities() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUnivs = universities.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getProgramCount = (univId) => {
    return courses.filter(c => c.universityId === univId).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 space-y-8 text-left">
      
      <div className="space-y-3">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
          Accrediting Partner Universities
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-405 max-w-2xl leading-relaxed">
          Edology collaborates with world-renowned institutions in Switzerland, Germany, the United Kingdom, and the United States to confer globally valid certifications and degree titles.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="Filter universities by name or country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredUnivs.map(univ => (
          <div 
            key={univ.id}
            className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                <img 
                  src={univ.image} 
                  alt={univ.name} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 bg-cyan-600/90 text-white text-[10px] font-bold uppercase rounded-lg backdrop-blur-md">
                  {univ.ranking}
                </span>
                
                <div className="absolute -bottom-5 left-6 w-14 h-14 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                  {univ.logo.split(' ')[0]}
                </div>
              </div>

              <div className="p-6 pt-8 space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {univ.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-405 mt-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{univ.location} • Established {univ.established}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-405 leading-relaxed line-clamp-3">
                  {univ.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {univ.accreditation.slice(0, 2).map((acc, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400 rounded font-medium">
                      {acc}
                    </span>
                  ))}
                  {univ.accreditation.length > 2 && (
                    <span className="text-[10px] text-slate-400 pt-0.5">+{univ.accreditation.length - 2} more</span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-slate-50 dark:border-slate-800/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-550 dark:text-slate-404">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>{getProgramCount(univ.id)} Active Programs</span>
                </div>
              </div>
              
              <Link
                to={`/universities/${univ.id}`}
                className="inline-flex items-center gap-1 py-2 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white dark:bg-slate-800/60 dark:hover:bg-cyan-600 dark:text-slate-300 font-bold text-xs rounded-xl transition-all"
              >
                View Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
