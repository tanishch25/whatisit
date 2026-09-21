import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-[#fdfaf6] text-slate-800 scroll-smooth selection:bg-chapaak-brand selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
