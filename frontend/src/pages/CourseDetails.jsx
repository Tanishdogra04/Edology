import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { courses, universities } from '../data/mockData';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Clock, Laptop, Star, Award, ChevronDown, CheckCircle, 
  HelpCircle, User, Mail, Phone, Briefcase, FileText, Send
} from 'lucide-react';

const applySchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  experience: z.string().min(1, 'Please select your work experience'),
  statement: z.string().min(10, 'Statement of purpose must be at least 10 characters')
});

export default function CourseDetails() {
  const { id } = useParams();
  const { wishlist, toggleWishlist, addRecentlyViewed, showToast } = useApp();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const course = courses.find(c => c.id === id);

  // Sync to recently viewed
  useEffect(() => {
    if (course) {
      addRecentlyViewed(course.id);
    }
  }, [course]);

  // React Hook Form initialization
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(applySchema)
  });

  if (!course) {
    return (
      <div className="py-20 text-center">
        <h2 className="font-heading text-2xl font-bold">Program not found</h2>
        <Link to="/courses" className="mt-4 inline-block text-blue-600 underline">
          Return to course directory
        </Link>
      </div>
    );
  }

  const university = universities.find(u => u.id === course.universityId);

  const onApplySubmit = (data) => {
    console.log('Application Data Submitted:', data);
    showToast(`Application successfully submitted for ${course.title}!`, 'success');
    reset();
  };

  return (
    <div className="pb-20 pt-20">
      
      <section className="bg-slate-50 text-slate-800 dark:bg-slate-900 border-b border-slate-200/60 py-16 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-lg">
                {course.category.toUpperCase()}
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-300">
                {course.universityLogo} {course.universityName}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {course.title}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Duration</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Study Mode</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">{course.mode}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Accreditation</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">ECTS Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400">Rating</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">{course.rating} ({course.ratingCount})</p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 bg-white dark:bg-slate-950 border border-slate-200/75 dark:border-slate-800 p-6 rounded-2xl space-y-4 shadow-sm">
            <div>
              <p className="text-xs text-slate-400 font-semibold">Total Tuition Package</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
                  {course.currency}{course.price.toLocaleString()}
                </span>
                {course.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {course.currency}{course.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => toggleWishlist(course.id)}
              className={`w-full py-3 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                wishlist.includes(course.id)
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {wishlist.includes(course.id) ? 'Saved to Wishlist' : 'Save Program'}
            </button>
            <a
              href="#apply-form"
              className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl text-center shadow-md shadow-blue-500/10 transition-all hover:scale-[1.01]"
            >
              Apply Online Today
            </a>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 space-y-12 text-left">
          
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Program Overview</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {course.overview}
            </p>
          </section>

          <section className="space-y-4 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">What You Will Master</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-normal">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Academic Curriculum</h2>
            <p className="text-xs text-slate-500">Click on any academic module block to see comprehensive topic listings.</p>
            <div className="space-y-3 pt-2">
              {course.curriculum.map((module, idx) => {
                const isOpen = activeModuleIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-150 dark:border-slate-800 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveModuleIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/70 dark:bg-slate-900 dark:hover:bg-slate-850 text-left transition-colors"
                    >
                      <span className="font-heading font-bold text-xs sm:text-sm text-slate-850 dark:text-slate-200">
                        {module.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-404 leading-relaxed">
                        {module.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Expert Faculty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {course.faculty.map((member, i) => (
                <div key={i} className="flex gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-16 h-16 object-cover rounded-xl border border-slate-100 dark:border-slate-700"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">{member.name}</h4>
                    <p className="text-xs text-slate-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {university && (
            <section className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl space-y-4">
              <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">About the Awarding Institution</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="text-3xl font-extrabold">{university.logo}</div>
                <div>
                  <h3 className="font-heading font-bold text-sm">{university.name}</h3>
                  <p className="text-xs text-slate-405">{university.location} • Established {university.established}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-404 leading-relaxed">
                {university.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {university.accreditation.map((acc, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-350 rounded-lg">
                    {acc}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {course.faq.map((item, idx) => {
                const isOpen = activeFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-150 dark:border-slate-800 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center gap-3 justify-between p-4 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-left transition-colors"
                    >
                      <span className="font-heading font-bold text-xs sm:text-sm text-slate-850 dark:text-slate-200 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {item.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        <div id="apply-form" className="lg:col-span-4 space-y-6 text-left">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 shadow-md sticky top-24">
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">Request Admissions Brochure</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Fill in your details below. An admissions representative will contact you via email with syllabus parameters and course timings.
            </p>

            <form onSubmit={handleSubmit(onApplySubmit)} className="space-y-4">
              
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register('fullName')}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                {errors.fullName && <p className="text-[10px] text-red-500 font-medium">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="john@company.com"
                    {...register('email')}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="+44 7123 456789"
                    {...register('phone')}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 font-medium">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Work Experience</label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    {...register('experience')}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500 cursor-pointer appearance-none"
                  >
                    <option value="">Select experience...</option>
                    <option value="student">No experience (Graduate)</option>
                    <option value="mid">1 - 3 Years</option>
                    <option value="senior">4 - 6 Years</option>
                    <option value="executive">7+ Years</option>
                  </select>
                </div>
                {errors.experience && <p className="text-[10px] text-red-500 font-medium">{errors.experience.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Statement of Purpose</label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    rows="3"
                    placeholder="Briefly state your academic objectives..."
                    {...register('statement')}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                {errors.statement && <p className="text-[10px] text-red-500 font-medium">{errors.statement.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shadow-blue-500/10 hover:scale-[1.02] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
