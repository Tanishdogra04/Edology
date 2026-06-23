import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import AlumniHubs from '../components/home/AlumniHubs';
import FindCourse from '../components/home/FindCourse';
import FeaturedColleges from '../components/home/FeaturedColleges';
import TopExams from '../components/home/TopExams';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Stats />
      <AlumniHubs />
      <FindCourse />
      <FeaturedColleges />
      <TopExams />
      <Testimonials />
      <Faq />
    </div>
  );
}
