import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const routeMap = {
    courses: 'Courses',
    universities: 'Universities',
    'career-hub': 'Career Hub',
    blog: 'Blog',
    about: 'About Us',
    contact: 'Contact Us',
    login: 'Sign In',
    register: 'Register',
  };

  return (
    <nav className="bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/80 py-3.5 mb-6" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2.5 text-sm text-slate-500 dark:text-slate-400">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            
            const label = routeMap[value] || value
              .replace(/-/g, ' ')
              .replace(/\b\w/g, c => c.toUpperCase());

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700 flex-shrink-0" />
                {last ? (
                  <span className="ml-2.5 font-medium text-slate-850 dark:text-slate-200 select-none">
                    {label}
                  </span>
                ) : (
                  <Link 
                    to={to} 
                    className="ml-2.5 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
