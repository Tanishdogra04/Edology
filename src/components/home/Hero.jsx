import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [rightSlide, setRightSlide] = useState(0);
  const rightSlides = ["/hero_student.png", "/hero_student_2.png", "/hero_student_3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRightSlide(prev => (prev + 1) % rightSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rightSlides.length]);

  return (
    <div className="relative pt-6 pb-16 lg:pt-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="col-span-1 lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
              <i className="bi bi-sparkles text-blue-600 text-sm"></i>
              <span>UGC-Entitled & AICTE Approved Online Degrees</span>
            </div>

            <h1 className="font-heading font-extrabold tracking-tight leading-[1.1] text-slate-900 text-4xl sm:text-5xl lg:text-[62px]">
              Advance Your Career.<br />
              Study Online from<br />
              <span className="text-blue-600">
                World-Class Universities
              </span>
            </h1>

            <p className="font-sans text-slate-600 text-base sm:text-lg font-medium max-w-xl leading-relaxed">
              Earn recognized Master's, MBA, and professional qualifications delivered 100% online. Gain the practical skills to succeed in today's job market from world-class <span className="text-blue-600 font-bold">Universities</span>.
            </p>

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

          <div className="col-span-1 lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
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

            <div className="absolute top-8 -left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5 animate-float z-10">
              <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <i className="bi bi-award-fill text-amber-500 text-lg"></i>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-semibold leading-none font-sans">Partner Institution</p>
                <p className="text-xs font-extrabold text-slate-800 font-heading">SSBM Geneva MBA</p>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-2.5 animate-float [animation-delay:3s] z-10">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <i className="bi bi-clock-history text-emerald-600 text-lg"></i>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-semibold leading-none font-sans">100% Online</p>
                <p className="text-xs font-extrabold text-slate-800 font-heading">Flexible Schedule</p>
              </div>
            </div>

            <Link
              to="/blog"
              className="absolute top-12 -right-12 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-blue-100 hover:border-blue-300 shadow-xl flex items-center gap-3 animate-float [animation-delay:1.5s] z-20 cursor-pointer group hover:scale-105 duration-300"
            >
              <div className="relative w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <i className="bi bi-bell-fill text-lg animate-swing"></i>
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
  );
}
