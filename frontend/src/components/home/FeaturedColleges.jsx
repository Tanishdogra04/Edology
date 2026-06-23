import React from 'react';
import { Link } from 'react-router-dom';
import { indianColleges } from '../../data/mockData';

export default function FeaturedColleges() {
  return (
    <div className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indianColleges.map((univ) => {
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
                <div className="relative aspect-video overflow-hidden bg-slate-105">
                  <img 
                    src={univ.image} 
                    alt={`${univ.name} Campus`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100/80 flex-shrink-0 flex items-center justify-center text-[#110060] font-heading font-black text-xs shadow-inner">
                        {acronym}
                      </div>
                      <div className="min-w-0 flex-1">
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

                    <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium line-clamp-3">
                      {univ.description}
                    </p>
                  </div>

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
  );
}
