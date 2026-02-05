import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-urban-overlay z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2000&auto=format&fit=crop" 
            alt="Urban Background" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full pt-20">
            {/* Top Badge */}
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex justify-between items-start w-full mb-10 px-4 md:px-0"
            >
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 rounded-full bg-neon-green overflow-hidden border-2 border-white">
                         <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left leading-tight hidden md:block">
                        <p className="font-bold text-white text-sm">SAURAV KUMAR</p>
                        <p className="text-gray-400 text-xs text-neon-green">FULL-STACK DEV</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-spin-slow">
                     <span className="text-xs font-bold">DEV</span>
                </div>
            </motion.div>

          {/* Main Typography */}
          <div className="relative">
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="font-display text-[4rem] md:text-[8rem] leading-[0.85] text-neon-green uppercase tracking-tighter mix-blend-screen"
            >
              FULLSTACK <br />
              <span className="text-white">DEVELOPER</span>
            </motion.h1>

            <motion.div 
               initial={{   rotate: -10, scale: 0, opacity: 0 }}
               animate={{ rotate: -5, scale: 1, opacity: 1 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-y-10 z-30"
            >
                <span className="font-marker text-[4rem] md:text-[8rem] text-primary block leading-none mix-blend-lighten drop-shadow-lg">
                    Portfolio
                </span>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-end gap-8"
          >
             <div className="text-left max-w-md bg-black/50 backdrop-blur-md p-6 border-l-4 border-neon-green">
                 <ul className="space-y-2 text-sm md:text-base text-gray-300">
                     <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Custom designs made from scratch</li>
                     <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> SEO optimized & High Performance</li>
                     <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Smart Web Development</li>
                 </ul>
             </div>

             <div className="flex gap-4">
                <a href="#contact" className="bg-neon-green text-black font-bold font-display tracking-wide text-xl px-8 py-8 rounded-full hover:scale-105 transition-transform flex items-center justify-center w-32 h-32 text-center leading-none shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                    SEND ME <br /> MESSAGE
                </a>
             </div>
          </motion.div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
