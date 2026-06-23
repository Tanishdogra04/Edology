import React from 'react';
import { ShieldAlert, Users, Award, Target, Eye } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="space-y-16 pb-20 pt-24 text-left">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Our Academic Mission</h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-405 leading-relaxed max-w-3xl">
          Founded in London, Edology was built on a simple premise: high-quality university learning should not be restricted by geographic boundaries or rigid schedules. By partnering with historic European and US business schools and technology departments, we create modular, premium online tracks designed for modern corporate progression.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <h3 className="font-heading font-extrabold text-lg text-slate-850 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              Swiss Quality
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-405 mt-2.5 leading-relaxed">
              We uphold Swiss quality standards through our collaborations with top business schools in Geneva, incorporating ECTS credit standards.
            </p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <h3 className="font-heading font-extrabold text-lg text-slate-850 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-500" />
              Global Cohorts
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-405 mt-2.5 leading-relaxed">
              Our cohorts are composed of professionals from 130+ countries, offering rich cultural perspectives and networking.
            </p>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <h3 className="font-heading font-extrabold text-lg text-slate-850 dark:text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-500" />
              Career Outcomes
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-405 mt-2.5 leading-relaxed">
              We track our success through placement audits, resulting in an average 30% salary increase for our alumni.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To empower global working adults by providing accessible, state-of-the-art postgraduate programs. We eliminate technical friction, offer supportive installment-based pricing models, and guide students with active industry practitioners.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-6 h-6 text-cyan-500" />
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              To become the world's most trusted online hub for stackable academic credentials, recognized by global HR recruiters as the benchmark for professional skill acquisition.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Academic Leadership Board</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Dr. Keith Cooper", role: "Academic Board Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300", bio: "Former Dean of Computing at Liverpool University with 20+ years of digital education design." },
            { name: "Prof. Ivana Mijatovic", role: "Director of Business Programs", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300", bio: "Leading researcher in business standardization, consulting for European academic quality units." },
            { name: "Rick Stephens", role: "Admissions Operations VP", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300", bio: "Over 15 years in student success management at US tech schools, streamlining digital admissions." }
          ].map((member, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 space-y-4">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-20 h-20 object-cover rounded-2xl border border-slate-100 dark:border-slate-700"
              />
              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-xs text-blue-600 dark:text-cyan-400 font-semibold">{member.role}</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-404 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
