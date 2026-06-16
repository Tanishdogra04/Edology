import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  Menu, X, Search, Heart, ChevronDown, GraduationCap, 
  BookOpen, Building2, User, LogOut, Mail, Settings, RefreshCw, Sparkles,
  Briefcase
} from 'lucide-react';
import { categories, universities, megaMenuDomains } from '../../data/mockData';

export default function Navbar({ onOpenSearch }) {
  const { 
    wishlist, compareList, user, logout 
  } = useApp();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("pg-courses");
  const [megaMenuSearch, setMegaMenuSearch] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (course) => {
    setIsMegaMenuOpen(false);
    if (course.isLink && course.url) {
      navigate(course.url);
    } else {
      navigate(`/courses?search=${encodeURIComponent(course.title)}`);
    }
  };

  const currentDomainData = megaMenuDomains.find(d => d.id === selectedDomain);
  const filteredCourses = currentDomainData
    ? currentDomainData.courses.filter(course => 
        course.title.toLowerCase().includes(megaMenuSearch.toLowerCase())
      )
    : [];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white border-b border-slate-150 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo - Edeco Branded in Blue */}
          <Link 
            to="/" 
            onClick={() => {
              setIsMegaMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600">
              Edeco<span className="text-slate-900">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links - Solid dark slate font on white background */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Programmes Mega Menu Toggle */}
            <button 
              onClick={() => {
                setIsMegaMenuOpen(!isMegaMenuOpen);
                setIsToolsMenuOpen(false);
                setIsProfileOpen(false);
              }}
              className={`flex items-center gap-1.5 py-4 font-heading text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                isMegaMenuOpen ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Programmes
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>

            {/* Career Hub */}
            <NavLink 
              to="/career-hub" 
              onClick={() => setIsMegaMenuOpen(false)}
              className={({isActive}) => `flex items-center py-4 font-heading text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Career Hub
            </NavLink>
            
            {/* Top University */}
            <NavLink 
              to="/universities" 
              onClick={() => setIsMegaMenuOpen(false)}
              className={({isActive}) => `flex items-center py-4 font-heading text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Top University
            </NavLink>

            {/* Tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsToolsMenuOpen(true)}
              onMouseLeave={() => setIsToolsMenuOpen(false)}
            >
              <button className="flex items-center gap-1.5 py-4 font-heading text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 transition-colors cursor-pointer">
                Tools
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isToolsMenuOpen && (
                <div className="absolute left-0 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 animate-fade-in text-left">
                  <Link 
                    to="/courses?filter=compare"
                    onClick={() => { setIsToolsMenuOpen(false); setIsMegaMenuOpen(false); }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 font-bold"
                  >
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    Course Comparison
                  </Link>
                  <Link 
                    to="/courses?filter=wishlist"
                    onClick={() => { setIsToolsMenuOpen(false); setIsMegaMenuOpen(false); }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 font-bold"
                  >
                    <Heart className="w-4 h-4 text-rose-500" />
                    Saved Programs
                  </Link>
                  <Link 
                    to="/career-hub"
                    onClick={() => { setIsToolsMenuOpen(false); setIsMegaMenuOpen(false); }}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 font-bold"
                  >
                    <Settings className="w-4 h-4 text-emerald-500" />
                    Career Planner
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Right side Actions */}
          <div className="hidden lg:flex items-center gap-5">
            
            {/* Mail Link prefix (opens Gmail to compose) */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=edeco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-heading text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>edeco@gmail.com</span>
            </a>



            {/* Wishlist count badge if any */}
            {wishlist.length > 0 && (
              <Link 
                to="/courses?filter=wishlist" 
                className="relative p-1.5 text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Heart className="w-4.5 h-4.5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              </Link>
            )}

            {/* Profile Dropdown or Sign In */}
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-semibold">{user?.name ? user.name.split(' ')[0] : 'User'}</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1 animate-fade-in text-left">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-[10px] text-slate-400">Signed in as</p>
                      <p className="text-xs font-semibold text-slate-800 truncate">{user?.email}</p>
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 text-left transition-colors font-semibold"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 font-bold text-xs rounded-xl border border-blue-200 transition-all shadow-sm"
              >
                Sign In
              </Link>
            )}

            {/* Search CTA Trigger Button */}
            <button 
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/10 cursor-pointer transition-all animate-pulse"
              aria-label="Search Programs"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>

          </div>

          {/* Mobile Actions: Hamburger and Search */}
          <div className="flex lg:hidden items-center gap-3">
            <button 
              onClick={onOpenSearch}
              className="p-1.5 text-slate-500"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-500"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-4 shadow-inner max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-left">
            <Link 
              to="/courses" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800"
            >
              Programmes
            </Link>
            <Link 
              to="/career-hub" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800"
            >
              Career Hub
            </Link>
            <Link 
              to="/universities" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800"
            >
              Top University
            </Link>
            <Link 
              to="/courses?filter=compare" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800"
            >
              Comparison Tools
            </Link>
          </nav>

          <hr className="border-slate-100" />

          {/* Mobile Auth / Profile */}
          <div className="flex flex-col gap-3">
            {user ? (
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 py-2 text-slate-700">
                  <User className="w-5 h-5 text-blue-650" />
                  <div>
                    <p className="font-semibold text-sm">{user?.name || 'User'}</p>
                    <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 hover:bg-red-100 text-red-650 font-semibold rounded-xl text-sm transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-705 font-semibold rounded-xl text-center text-sm transition-all"
                >
                  Log In
                </Link>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=edeco@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center text-sm transition-all block shadow-md"
                >
                  Contact edeco@gmail.com
                </a>
              </>
            )}
          </div>
        </div>
      )}

      {/* Backdrop overlay for Mega Menu */}
      {isMegaMenuOpen && (
        <div 
          className="fixed inset-0 top-[68px] bg-slate-900/10 backdrop-blur-[1px] z-30 transition-opacity"
          onClick={() => setIsMegaMenuOpen(false)}
        />
      )}

      {/* Explore Programs Mega Menu (Browse by domains layout matching College Vidya) */}
      {isMegaMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-slate-200 border-b border-slate-200 shadow-2xl z-50 animate-fade-in">
          <div className="max-w-7xl mx-auto flex min-h-[500px]">
            
            {/* Left Sidebar: Domains */}
            <div className="w-72 border-r border-slate-100 bg-slate-50/50 p-6 flex flex-col gap-2 max-h-[580px] overflow-y-auto">
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3 text-left">
                Browse by domains
              </h3>
              <div className="space-y-1">
                {megaMenuDomains.map((domain) => {
                  const isActive = selectedDomain === domain.id;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => {
                        setSelectedDomain(domain.id);
                        setMegaMenuSearch("");
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex flex-col cursor-pointer ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/15' 
                          : 'hover:bg-slate-100/70 text-slate-700 hover:translate-x-0.5'
                      }`}
                    >
                      <span className="font-bold text-xs leading-tight">{domain.name}</span>
                      <span className={`text-[10px] leading-normal mt-0.5 ${isActive ? 'text-white/85' : 'text-slate-400'}`}>
                        {domain.subtext}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Content Grid & Search */}
            <div className="flex-1 p-6 flex flex-col max-h-[580px] overflow-hidden">
              
              {/* Search Bar & Close button */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="relative flex-1 max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={megaMenuSearch}
                    onChange={(e) => setMegaMenuSearch(e.target.value)}
                    placeholder="Search courses and specializations ..."
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <button 
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cards Grid */}
              <div className="flex-1 overflow-y-auto pr-1">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pb-4">
                    {filteredCourses.map((course) => (
                      <div 
                        key={course.id}
                        onClick={() => handleCardClick(course)}
                        className="group bg-white border border-slate-150 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 rounded-2xl p-4 flex flex-col justify-between cursor-pointer text-left h-[180px]"
                      >
                        <div>
                          {/* Top Badges & Logo */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-base shadow-sm border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                              {course.logo || "🎓"}
                            </div>
                            {course.badge && (
                              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-bold uppercase rounded-md flex items-center gap-0.5">
                                {course.badge}
                              </span>
                            )}
                          </div>

                          {/* Course/Certificate Title */}
                          <h4 className="font-heading font-extrabold text-xs text-slate-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                            {course.title}
                          </h4>
                        </div>

                        {/* Footer info: Duration and Comparison */}
                        <div className="mt-3 space-y-2">
                          <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-lg">
                            {course.duration}
                          </span>
                          
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold border-t border-slate-50 pt-2">
                            {course.isLink ? (
                              <span className="text-blue-600 hover:underline flex items-center gap-0.5">
                                View specializations →
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Compare {course.compareCount} {course.compareCount === 1 ? 'University' : 'Universities'}
                              </span>
                            )}
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                    <Search className="w-8 h-8 text-slate-300 mb-2 animate-pulse" />
                    <p className="text-xs font-semibold">No courses found matching "{megaMenuSearch}"</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}
