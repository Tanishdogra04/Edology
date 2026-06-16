import React, { useState } from 'react';
import { blogs } from '../data/mockData';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBlogs = blogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 space-y-10 text-left">
      
      {/* Header */}
      <div className="space-y-3">
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
          Edology Insights
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-405 max-w-2xl leading-relaxed">
          Stay informed on international higher education standards, technological trends, business case analyses, and alumni highlights.
        </p>
      </div>

      {/* Toolbar Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between border-y border-slate-100 dark:border-slate-800/80 py-5">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 shadow-sm"
          />
        </div>

        {/* Categories toggles */}
        <div className="flex gap-1.5 flex-wrap">
          {['all', 'technology', 'business', 'education'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Blog grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map(post => (
            <article 
              key={post.id} 
              className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span className="text-slate-400 font-normal normal-case">{post.readTime}</span>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors text-base line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Author footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-50 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>

            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-slate-450 border border-dashed rounded-3xl">
          No articles found matching that criteria.
        </div>
      )}

    </div>
  );
}
