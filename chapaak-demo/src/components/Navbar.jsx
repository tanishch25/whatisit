import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <div className="bg-chapaak-brand p-2 rounded-full mr-3 shadow-md shadow-orange-900/20 transform hover:rotate-12 transition-transform">
              <UtensilsCrossed className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-2xl font-bold tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 drop-shadow-md'}`}>
                Chapaak
              </span>
              <span className={`text-[9px] font-sans font-bold uppercase tracking-[0.2em] leading-none mt-1 ${scrolled ? 'text-chapaak-brand' : 'text-chapaak-brand drop-shadow-sm'}`}>
                A Splash of Flavours
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-chapaak-orange' : 'text-slate-800 hover:text-chapaak-orange drop-shadow-sm'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-chapaak-brand text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-900/20 hover:bg-orange-700 hover:shadow-orange-900/40 hover:-translate-y-0.5 transition-all">
              Book a Table
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900' : 'text-slate-900'}>
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full h-screen bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center pb-32 border-t border-slate-100 shadow-2xl"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-6">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-medium text-slate-800 hover:text-chapaak-brand transition-colors active:scale-95"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="w-full pt-8 px-4"
              >
                <button className="w-full bg-chapaak-brand text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-orange-900/20 text-lg active:scale-95 transition-transform">
                  Book a Table
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
