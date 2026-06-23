import React, { useState } from 'react';

export default function Faq() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const homeFaqs = [
    {
      question: "Are the online degrees offered on Edeco recognized?",
      answer: "Yes. All our partner Indian universities offer UGC-entitled and AICTE-approved online degree programs. International partner degrees are fully accredited and comply with Swiss, UK, or US quality assurance frameworks."
    },
    {
      question: "How does the placement support center work?",
      answer: "Edeco provides comprehensive placement support, including resume-building workshops, corporate mentoring, regional alumni networking hubs, and direct interview opportunities with 200+ global hiring partners."
    },
    {
      question: "Can I pursue these programs while working full-time?",
      answer: "Absolutely. All programs are structured specifically for working professionals, featuring 100% online coursework, self-paced learning portals, and flexible online examination slots."
    },
    {
      question: "Is there any financial aid or EMI option available?",
      answer: "Yes. We partner with multiple financial institutions to offer zero-cost EMI options and flexible installment plans (monthly or semester-wise) to make education highly accessible."
    },
    {
      question: "How do I choose the right program for my career goal?",
      answer: "You can use our integrated 'Find Your Course' directory and 'Career Placement Hub' to map specific roles to matching degrees, or connect with our academic advisors for a free counseling session."
    }
  ];

  return (
    <div className="bg-slate-50/50 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-1 lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-600 shadow-sm animate-float">
                <i className="bi bi-question-circle-fill text-blue-600"></i>
                <span>FAQ</span>
              </div>
              <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight leading-tight">
                Got Questions?<br />We Have Answers
              </h2>
              <p className="font-sans text-slate-500 text-sm sm:text-base leading-relaxed">
                Find quick answers to common queries regarding admissions, recognition, career placement, and payment options.
              </p>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-slate-150 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left font-heading font-extrabold text-slate-800 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <i className={`bi bi-chevron-down text-slate-400 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}></i>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed text-left border-t border-slate-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          <div className="col-span-1 lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                alt="Edeco Academic Advisor Support" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-blue-100 shadow-xl flex items-center gap-3 animate-float z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <i className="bi bi-telephone-fill text-lg"></i>
              </div>
              <div className="text-left pr-2">
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-0.5">Talk to Advisors</p>
                <p className="text-xs font-extrabold text-slate-800 font-heading">
                  Free Counseling Session
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
