import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Heart, RefreshCw, Star, Clock, Laptop, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  const { wishlist, toggleWishlist, compareList, toggleCompare } = useApp();
  
  const isWishlisted = wishlist.includes(course.id);
  const isCompared = !!compareList.find(c => c.id === course.id);

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
      
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={course.image} 
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(course.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl border backdrop-blur-md transition-all ${
            isWishlisted 
              ? 'bg-red-500 text-white border-red-500 hover:bg-red-650' 
              : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-white/20 hover:bg-white dark:hover:bg-slate-800'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4.5 h-4.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleCompare(course);
          }}
          className={`absolute top-3 left-3 p-2 rounded-xl border backdrop-blur-md transition-all ${
            isCompared 
              ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-750' 
              : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-white/20 hover:bg-white dark:hover:bg-slate-800'
          }`}
          aria-label="Toggle Compare"
        >
          <RefreshCw className={`w-4.5 h-4.5 ${isCompared ? 'animate-spin-slow' : ''}`} />
        </button>

        {course.badge && (
          <span className="absolute bottom-3 left-3 px-3 py-1 bg-slate-900/80 text-white text-[11px] font-bold rounded-lg uppercase tracking-wide backdrop-blur-md">
            {course.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              {course.universityLogo}
            </span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 truncate">
              {course.universityName}
            </span>
          </div>

          <Link to={`/courses/${course.id}`}>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors text-base line-clamp-2 min-h-[48px] leading-snug">
              {course.title}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 py-2 border-y border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5 min-w-0">
            <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Laptop className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span className="truncate">{course.mode}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 text-slate-900 dark:text-slate-100 font-semibold text-sm">
            <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal text-xs">({course.ratingCount})</span>
          </div>

          <div className="text-right">
            {course.originalPrice && (
              <span className="text-xs text-slate-400 dark:text-slate-500 line-through mr-1.5">
                {course.currency}{course.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="font-heading font-extrabold text-slate-900 dark:text-white text-base">
              {course.currency}{course.price.toLocaleString()}
            </span>
          </div>
        </div>

      </div>

      <div className="px-5 pb-5 pt-0">
        <Link
          to={`/courses/${course.id}`}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white dark:bg-slate-800/50 dark:hover:bg-cyan-600 dark:text-slate-300 font-semibold text-xs rounded-xl transition-all"
        >
          View Course Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
