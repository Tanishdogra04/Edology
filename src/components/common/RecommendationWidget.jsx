import React, { useState } from 'react';
import { Sparkles, ArrowRight, RefreshCw, Cpu, Briefcase, Award } from 'lucide-react';
import { courses } from '../../data/mockData';
import { Link } from 'react-router-dom';

export default function RecommendationWidget() {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState('');
  const [experience, setExperience] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const handleInterest = (category) => {
    setInterest(category);
    setStep(2);
  };

  const handleExperience = (exp) => {
    setExperience(exp);
    
    // Core Recommendation Engine logic
    let matched = null;
    
    if (categoryMapping[interest]) {
      const categoryCourses = courses.filter(c => c.category === categoryMapping[interest]);
      
      if (exp === 'executive') {
        // Prefer MBA or Executive
        matched = categoryCourses.find(c => c.title.toLowerCase().includes('executive') || c.title.toLowerCase().includes('mba')) || categoryCourses[0];
      } else {
        // Prefer Technical Masters or certificates
        matched = categoryCourses.find(c => !c.title.toLowerCase().includes('executive')) || categoryCourses[0];
      }
    }
    
    // Default fallback
    if (!matched) matched = courses[0];
    
    setRecommendation(matched);
    setStep(3);
  };

  const categoryMapping = {
    tech: 'tech',
    business: 'business',
    other: 'tech' // Fallback
  };

  const resetWidget = () => {
    setStep(1);
    setInterest('');
    setExperience('');
    setRecommendation(null);
  };

  return (
    <div className="bg-gradient-to-tr from-slate-900 via-slate-850 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900/40 relative overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Widget Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-9 h-9 rounded-xl bg-blue-600/30 flex items-center justify-center border border-blue-500/30">
          <Sparkles className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-sm tracking-wide uppercase text-slate-300">AI Admissions Assistant</h3>
          <p className="text-[11px] text-slate-450">Find your ideal program in 15 seconds</p>
        </div>
      </div>

      {/* STEP 1: Select Field */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <h4 className="font-heading font-semibold text-base sm:text-lg">What is your primary career field of interest?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => handleInterest('tech')}
              className="flex items-center gap-3 p-4 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500 rounded-2xl text-left transition-all group"
            >
              <Cpu className="w-6 h-6 text-cyan-400 group-hover:scale-105 transition-transform" />
              <div>
                <span className="block font-bold text-sm">Technology & Data</span>
                <span className="text-[10px] text-slate-450">AI, CS, Cyber, Data Analytics</span>
              </div>
            </button>
            <button
              onClick={() => handleInterest('business')}
              className="flex items-center gap-3 p-4 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500 rounded-2xl text-left transition-all group"
            >
              <Briefcase className="w-6 h-6 text-blue-400 group-hover:scale-105 transition-transform" />
              <div>
                <span className="block font-bold text-sm">Business & Management</span>
                <span className="text-[10px] text-slate-450">MBA, Strategy, Leadership</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Experience level */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <h4 className="font-heading font-semibold text-base">Select your current experience level:</h4>
          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {[
              { id: 'entry', label: 'Early Career / Graduate', desc: '0-2 years of professional background' },
              { id: 'mid', label: 'Mid-Level Specialist', desc: '3-5 years of industry experience' },
              { id: 'executive', label: 'Senior Executive / Director', desc: '6+ years with leadership focus' }
            ].map(level => (
              <button
                key={level.id}
                onClick={() => handleExperience(level.id)}
                className="w-full flex items-center justify-between p-3.5 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500 rounded-xl text-left transition-all"
              >
                <div>
                  <span className="block font-bold text-xs">{level.label}</span>
                  <span className="text-[10px] text-slate-450">{level.desc}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>
          <button onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-white underline pt-1 block">
            Go back
          </button>
        </div>
      )}

      {/* STEP 3: Recommended Course Output */}
      {step === 3 && recommendation && (
        <div className="space-y-5 animate-fade-in">
          <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-2xl flex items-start gap-4">
            <img 
              src={recommendation.image} 
              alt={recommendation.title}
              className="w-16 h-16 object-cover rounded-xl border border-slate-750"
            />
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 bg-cyan-600/30 text-cyan-300 border border-cyan-500/20 text-[9px] font-bold uppercase rounded">
                Top Recommendation
              </span>
              <h4 className="font-heading font-bold text-sm leading-snug line-clamp-2">
                {recommendation.title}
              </h4>
              <p className="text-[10px] text-slate-400">{recommendation.universityName}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link
              to={`/courses/${recommendation.id}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/10"
            >
              Explore Program
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={resetWidget}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700/60 rounded-xl text-slate-400 hover:text-white transition-colors"
              aria-label="Restart Quiz"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
