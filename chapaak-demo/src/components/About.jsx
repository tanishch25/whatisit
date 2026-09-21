import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-chapaak-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 leading-tight">
              A Symphony of <br/><span className="italic text-slate-500 font-light">Authentic</span> Tastes.
            </h2>
            <div className="w-px h-16 bg-slate-200 mx-auto mt-8"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-t-full rounded-b-full overflow-hidden shadow-2xl shadow-slate-200/50 p-2 border border-slate-100">
              <img 
                src="/restaurant_interior.jpg" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover rounded-t-full rounded-b-full hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-10"
          >
            <h3 className="text-3xl font-medium text-slate-900 mb-8">
              We believe dining is an <span className="italic text-chapaak-brand">experience</span>, not just a meal.
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans font-light">
              Located in the vibrant neighborhood of VV Puram, <strong className="text-slate-900 font-medium">Chapaak</strong> brings you a symphony of flavors. We pride ourselves on serving an exquisite multi-cuisine menu that caters to every palate with absolute authenticity.
            </p>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-sans font-light">
              Whether you're craving authentic North Indian curries, sizzling Chinese delicacies, fragrant Biryanis, or the tangy zing of our street-food-inspired chaats, we have something special waiting for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 border-t border-slate-100 pt-10">
              <div>
                <span className="block text-4xl font-medium text-slate-900 mb-2">100<span className="text-chapaak-brand">%</span></span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-widest font-semibold">Pure Vegetarian</span>
              </div>
              <div>
                <span className="block text-4xl font-medium text-slate-900 mb-2">4+</span>
                <span className="text-xs font-sans text-slate-500 uppercase tracking-widest font-semibold">Distinct Cuisines</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
