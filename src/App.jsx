import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SearchModal from './components/common/SearchModal';
import ComparePanel from './components/course/ComparePanel';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import AboutUs from './pages/AboutUs';
import CareerHub from './pages/CareerHub';
import Universities from './pages/Universities';
import UniversityDetails from './pages/UniversityDetails';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Login';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white text-slate-900">
            
            {/* Global Sticky Navbar */}
            <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

            {/* Global Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Global Compare Panel */}
            <ComparePanel />

            {/* Main Page Routing Content */}
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/career-hub" element={<CareerHub />} />
                <Route path="/universities" element={<Universities />} />
                <Route path="/universities/:id" element={<UniversityDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Login />} />
              </Routes>
            </main>

            {/* Global Footer */}
            <Footer />

          </div>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}

