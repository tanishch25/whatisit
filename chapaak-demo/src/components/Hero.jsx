import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import heroFood from '../assets/hero_food.jpg';
import streetFood from '../assets/street_food.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#fdfaf6] overflow-hidden pt-28 pb-20">
      
      {/* Elegant background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="h-[1px] w-12 bg-chapaak-brand"></div>
              <span className="text-chapaak-brand text-xs font-bold uppercase tracking-[0.3em]">Pure Vegetarian</span>
            </motion.div>
            
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-medium text-slate-900 leading-none tracking-tight relative z-10">
                Chapaak<span className="text-chapaak-brand">.</span>
              </h1>
              <div className="flex items-center gap-4 mt-4 ml-2">
                <div className="h-[2px] w-12 bg-chapaak-brand"></div>
                <h2 className="text-2xl md:text-3xl italic text-slate-500 font-light font-serif tracking-wide">
                  A Splash of Flavours
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md font-sans font-light">
              Experience the vibrant and authentic taste of North Indian, Chinese, and Street Food delicacies curated for the ultimate dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="#menu" className="group relative bg-slate-900 text-white px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase overflow-hidden flex items-center justify-center transition-all hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20">
                <span>Explore Menu</span>
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="group flex items-center justify-center px-8 py-4 text-slate-900 font-sans text-sm font-semibold tracking-widest uppercase hover:text-chapaak-brand transition-colors">
                Our Story
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 flex flex-col items-center lg:items-start"
            >
              <div className="flex text-chapaak-yellow">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-sm font-sans text-slate-500 mt-2 font-medium">Loved by 1000+ guests</span>
            </motion.div>

          </motion.div>

          {/* Right Images (Collage) */}
          <div className="w-full lg:w-1/2 relative h-[600px] hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-3/4 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <img 
                src={heroFood} 
                alt="Main Dish" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ y: y2 }}
              className="absolute bottom-10 left-0 w-[55%] h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#fdfaf6] z-20"
            >
              <img 
                src={streetFood} 
                alt="Secondary Dish" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Aesthetic decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-20 left-10 z-30 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="w-24 h-24 border border-slate-200 rounded-full flex flex-col items-center justify-center text-center border-dashed"
              >
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-slate-500 mb-1">Authentic</span>
                <span className="text-xs font-serif italic text-chapaak-brand">Flavours</span>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-slate-400"
      >
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-10 bg-slate-300"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
