import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-[#fdfaf6] text-slate-800 scroll-smooth selection:bg-chapaak-brand selection:text-white relative">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Footer />
      
      {/* Sticky Mobile "Book a Table" Button */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50 flex justify-center pointer-events-none">
        <button className="pointer-events-auto w-full max-w-sm bg-slate-900 text-white shadow-2xl shadow-slate-900/40 rounded-full py-4 font-sans text-sm font-bold tracking-widest uppercase flex items-center justify-center space-x-2 active:scale-95 transition-transform border border-slate-700">
          <span>Book a Table</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </button>
      </div>
    </div>
  );
}

export default App;
