import React from 'react';
import { testimonials } from '../../data/mockData';

export default function Testimonials() {
  return (
    <div className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="group relative bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <i className="bi bi-quote text-5xl text-blue-500/10 absolute top-6 right-6 leading-none"></i>
              
              <div className="space-y-4">
                <div className="flex items-center text-left">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-amber-400 mr-1 text-sm"></i>
                  ))}
                </div>

                <p className="font-sans text-slate-600 text-sm italic font-medium leading-relaxed text-left line-clamp-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-100 text-left">
                <img 
                  src={t.image} 
                  alt={t.name}
                  loading="lazy" 
                  className="w-11 h-11 rounded-full border border-slate-200 object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
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
  );
}
