import React, { useEffect } from 'react';
import Cursor from './components/Cursor/Cursor';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Value from './components/Value/Value';
import Cases from './components/Cases/Cases';
import Process from './components/Process/Process';
import Advantages from './components/Advantages/Advantages';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth reveal on load
    document.documentElement.style.opacity = '1';
  }, []);

  return (
    <>
      <Preloader />
      <Cursor />
      <Header />
      <Hero />
      <Value />
      <Cases />
      <Process />
      <Advantages />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;