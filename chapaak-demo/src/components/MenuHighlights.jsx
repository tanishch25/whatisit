import React from 'react';
import { motion } from 'framer-motion';
import chineseFood from '../assets/chinese_food.webp';
import biryaniFood from '../assets/biryani_food.webp';

const heroFood = '/whatisit/hero_food.webp';
const streetFood = '/whatisit/street_food.webp';

const menuCategories = [
  {
    title: 'North Indian',
    subtitle: 'Authentic & Rich',
    description: 'Creamy curries, buttery naans, and authentic aromatic spices cooked to perfection.',
    image: heroFood,
  },
  {
    title: 'Sizzling Chinese',
    subtitle: 'Wok-Tossed Excellence',
    description: 'Spicy manchurian, hakka noodles, and fiery gravies with a perfect balance of umami.',
    image: chineseFood,
  },
  {
    title: 'Aromatic Biryani',
    subtitle: 'Fragrant & Spiced',
    description: 'Premium basmati cooked slowly with exotic spices, saffron, and fresh herbs.',
    image: biryaniFood,
  },
  {
    title: 'Street Food',
    subtitle: 'Tangy & Crunchy',
    description: 'Vibrant chaats, pani puri, and perfectly spiced snacks to hit the exact spot.',
    image: streetFood,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-32 bg-[#fdfaf6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="text-chapaak-brand text-xs font-bold uppercase tracking-[0.3em] mb-4 block">The Menu</span>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">Culinary Signatures</h2>
          <div className="w-px h-12 bg-slate-300 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {menuCategories.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col sm:flex-row items-center bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto sm:aspect-square rounded-xl overflow-hidden shrink-0">
                <img 
                  loading="lazy"
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000"
                />
              </div>
              <div className="w-full sm:w-3/5 p-6 sm:pl-8 text-center sm:text-left flex flex-col justify-center">
                <span className="text-[10px] text-chapaak-brand font-sans font-bold uppercase tracking-[0.2em] mb-2 block">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-medium text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 font-sans font-light text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="w-8 h-px bg-slate-200 mx-auto sm:mx-0 group-hover:w-16 group-hover:bg-chapaak-brand transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <a href="#full-menu" className="inline-flex items-center text-sm font-sans font-semibold tracking-[0.2em] uppercase text-slate-900 hover:text-chapaak-brand transition-colors group">
            <span className="border-b border-slate-900 group-hover:border-chapaak-brand pb-1 transition-colors">View Complete Menu</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;
