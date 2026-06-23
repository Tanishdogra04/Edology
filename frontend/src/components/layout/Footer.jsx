import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, Mail, Phone, MapPin, Send, ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Successfully subscribed to our newsletter!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#121214] text-slate-400 border-t border-slate-900 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
              Stay ahead with educational insights
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Subscribe to the Edeco newsletter to receive updates on newly launched degrees, industry webinars, and career pivot success stories.
            </p>
          </div>
          <div className="flex items-center">
            <form onSubmit={handleSubscribe} className="relative w-full">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-900/50 border border-slate-800 text-white rounded-xl py-3.5 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder-slate-500"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-extrabold text-white tracking-tight">
                Edeco<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Edeco is a premier online learning platform partnering with elite global institutions to deliver accredited Executive MBA, Data Science, AI, and professional degrees.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900/50 border border-slate-800 hover:border-blue-600/50 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900/50 border border-slate-800 hover:border-blue-600/50 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300" 
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-slate-900/50 border border-slate-800 hover:border-blue-600/50 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300" 
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-200">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="inline-block hover:translate-x-1 hover:text-blue-450 transition-all duration-300 text-slate-400">
                  Executive MBAs
                </Link>
              </li>
              <li>
                <Link to="/courses?category=tech" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  M.Sc. Data Science
                </Link>
              </li>
              <li>
                <Link to="/courses?category=tech" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/universities" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Partner Universities
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-200">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/career-hub" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Career Placement
                </Link>
              </li>
              <li>
                <Link to="/blog" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Academic Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Our Mission
                </Link>
              </li>
              <li>
                <a href="#accreditations" className="inline-flex items-center gap-0.5 hover:translate-x-1 hover:text-blue-455 transition-all duration-300 text-slate-400">
                  Accreditation <ArrowUpRight className="w-3.5 h-3.5 text-blue-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-slate-200">Support</h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>admissions@edeco.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="leading-normal">
                  85 Great Portland St, London, W1W 7LT, UK
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800/80 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Edeco. All rights reserved. Designed to the highest academic quality standards.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
