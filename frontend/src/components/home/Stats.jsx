import React from 'react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: "50,000+",
      label: "Active Learners",
      desc: "Empowering global learners to achieve career-defining credentials online.",
      icon: "bi-people-fill"
    },
    {
      id: 2,
      value: "150+",
      label: "Accredited Programs",
      desc: "UGC-entitled, AICTE-approved, and premium international degrees.",
      icon: "bi-mortarboard-fill"
    },
    {
      id: 3,
      value: "98.2%",
      label: "Graduation Rate",
      desc: "High completion rate supported by dedicated academic advisor guidance.",
      icon: "bi-trophy-fill"
    },
    {
      id: 4,
      value: "4.9/5",
      label: "Student Rating",
      desc: "Outstanding satisfaction rate from 10k+ independent student reviews.",
      icon: "bi-star-fill"
    }
  ];

  return (
    <div className="bg-slate-50/50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="absolute inset-x-0 -top-px h-1 rounded-t-2xl bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <i className={`bi ${stat.icon} text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}></i>
              </div>

              <div className="text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-1">
                {stat.value}
              </div>

              <div className="text-sm font-bold text-slate-800 font-heading mb-2">
                {stat.label}
              </div>

              <p className="text-xs text-slate-500 font-medium font-sans leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
