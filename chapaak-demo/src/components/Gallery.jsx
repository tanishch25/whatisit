import React from 'react';
import { motion } from 'framer-motion';
import restaurantInterior from '../assets/restaurant_interior.jpg';
import heroFood from '../assets/hero_food.jpg';
import biryaniFood from '../assets/biryani_food.jpg';
import streetFood from '../assets/street_food.jpg';

const images = [
  restaurantInterior,
  heroFood,
  biryaniFood,
  streetFood,
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-8 gap-8"
        >
          <div>
            <span className="text-chapaak-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight">
              A Glimpse into <br/><span className="italic text-slate-500 font-light">Chapaak</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-sans font-light max-w-sm md:text-right">
            Good food, great vibes, and unforgettable memories captured in our vibrant space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {images.map((src, index) => {
            // Create an editorial masonry-like layout
            let spanClass = "md:col-span-6";
            let heightClass = "h-[400px]";
            
            if (index === 0) {
              spanClass = "md:col-span-8";
              heightClass = "h-[500px]";
            } else if (index === 1) {
              spanClass = "md:col-span-4";
              heightClass = "h-[500px]";
            } else if (index === 2) {
              spanClass = "md:col-span-5";
              heightClass = "h-[600px]";
            } else if (index === 3) {
              spanClass = "md:col-span-7";
              heightClass = "h-[600px]";
            }

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15 }}
                className={`relative group overflow-hidden ${spanClass} ${heightClass}`}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
