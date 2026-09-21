import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const heroFood = '/whatisit/hero_food.webp';
const streetFood = '/whatisit/street_food.webp';

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
            
            <div className="relative mb-8 text-left w-full">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium text-slate-900 leading-none tracking-tight relative z-10">
                Chapaak<span className="text-chapaak-brand">.</span>
              </h1>
              <div className="flex items-center gap-2 sm:gap-4 mt-4 ml-1 sm:ml-2">
                <div className="h-[2px] w-8 sm:w-12 bg-chapaak-brand shrink-0"></div>
                <h2 className="text-xl sm:text-2xl md:text-3xl italic text-slate-500 font-light font-serif tracking-wide leading-tight">
                  A Splash of Flavours
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed max-w-md font-sans font-light">
              Experience the vibrant and authentic taste of North Indian, Chinese, and Street Food delicacies curated for the ultimate dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <button className="group relative bg-chapaak-brand text-white px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-widest uppercase overflow-hidden flex items-center justify-center transition-all shadow-lg shadow-orange-900/20 active:scale-95">
                <span>Book a Table</span>
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#menu" className="group flex items-center justify-center px-8 py-4 text-slate-900 bg-white border border-slate-200 rounded-full font-sans text-sm font-semibold tracking-widest uppercase hover:border-chapaak-brand hover:text-chapaak-brand transition-all active:scale-95 shadow-sm">
                Explore Menu
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex items-center lg:items-start space-x-4"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#fdfaf6] bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={i === 1 ? heroFood : i === 2 ? streetFood : streetFood} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-chapaak-yellow">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <span className="text-[10px] font-sans text-slate-500 mt-1 font-bold uppercase tracking-wider">1000+ Happy Guests</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Images (Collage) - Ultra Premium Mobile & Desktop */}
          <div className="w-full lg:w-1/2 relative h-[380px] sm:h-[500px] md:h-[600px] mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[85%] md:w-3/4 h-[280px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src={heroFood} 
                alt="Main Dish" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              style={{ y: y2 }}
              className="absolute bottom-4 md:bottom-10 left-0 w-[60%] md:w-[55%] h-[220px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
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
              className="absolute top-4 md:top-20 left-0 md:left-10 z-30 bg-white/95 backdrop-blur-md p-1.5 md:p-3 rounded-full shadow-xl"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="w-20 h-20 md:w-24 md:h-24 border border-slate-200 rounded-full flex flex-col items-center justify-center text-center border-dashed"
              >
                <span className="text-[8px] md:text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 mb-0.5 md:mb-1">Authentic</span>
                <span className="text-[10px] md:text-xs font-serif italic text-chapaak-brand">Flavours</span>
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
