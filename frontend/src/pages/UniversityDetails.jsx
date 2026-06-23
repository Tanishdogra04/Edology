import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { universities, courses } from '../data/mockData';
import CourseCard from '../components/course/CourseCard';
import { MapPin, Award, BookOpen, Star, UserCheck, Calendar, Shield } from 'lucide-react';

export default function UniversityDetails() {
  const { id } = useParams();
  
  const univ = universities.find(u => u.id === id);

  if (!univ) {
    return (
      <div className="py-20 text-center">
        <h2 className="font-heading text-2xl font-bold">University Profile Not Found</h2>
        <Link to="/universities" className="mt-4 inline-block text-blue-600 underline">
          Return to Partner Universities
        </Link>
      </div>
    );
  }

  // Filter courses belonging to this university
  const univCourses = courses.filter(c => c.universityId === univ.id);

  return (
    <div className="pb-20 pt-20 text-left">
      
      <section className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
        <img 
          src={univ.image} 
          alt={univ.name} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-6 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
            <span className="inline-block self-start px-3 py-1 bg-cyan-600/90 text-white text-[10px] font-bold uppercase rounded-lg">
              {univ.ranking}
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {univ.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {univ.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-blue-400" />
                Established {univ.established}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 space-y-12">
          
          <section className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">About the Institution</h2>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
              {univ.description}
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Accredited Academic Programs</h2>
              <span className="text-xs bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-bold px-3 py-1 rounded-full">
                {univCourses.length} Programs
              </span>
            </div>
            {univCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {univCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-450 italic">No courses listed currently for this institution.</p>
            )}
          </section>

          <section className="space-y-6">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Alumni & Student Experiences</h2>
            <div className="grid grid-cols-1 gap-6">
              {univ.reviews.map((rev, i) => (
                <div key={i} className="p-5 border border-slate-150 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">{rev.student}</p>
                      <p className="text-[10px] text-slate-450 mt-0.5">Enrolled in {rev.program}</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="w-4.5 h-4.5 fill-current" />
                      <span className="text-xs font-bold text-slate-800 dark:text-white">{rev.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-505 dark:text-slate-400 mt-4 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Statistics</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <p className="text-[10px] text-slate-400">Total Enrollment</p>
                <p className="font-heading font-extrabold text-base text-slate-850 dark:text-white mt-1">{univ.studentsCount}</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl">
                <p className="text-[10px] text-slate-400">Faculty Staff</p>
                <p className="font-heading font-extrabold text-base text-slate-850 dark:text-white mt-1">{univ.facultyCount}+</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 text-slate-800 border border-slate-200/60 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Shield className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900">Quality Audits</h3>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              These institutions undergo rigorous third-party audits to comply with academic quality policies.
            </p>
            <div className="space-y-2 pt-2">
              {univ.accreditation.map((acc, i) => (
                <div key={i} className="flex gap-2 items-start text-xs font-semibold text-slate-700">
                  <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{acc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
