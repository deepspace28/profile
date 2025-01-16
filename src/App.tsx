import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0a1930] text-gray-300 relative">
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        
        <main className="container mx-auto px-4 py-16 relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </main>

        <footer className="text-center py-8 text-sm flex flex-col items-center space-y-1 relative z-10">
          <p className="text-[#00ffd5]">Built with 💚</p>
          <p className="text-gray-400">by Jishnav</p>
        </footer>
      </div>
    </>
  );
}

export default App;