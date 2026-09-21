import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

// Lazy load below-the-fold components to speed up initial load
const MenuHighlights = lazy(() => import('./components/MenuHighlights'));
const Gallery = lazy(() => import('./components/Gallery'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="font-sans antialiased bg-[#fdfaf6] text-slate-800 scroll-smooth selection:bg-chapaak-brand selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div className="h-40 flex items-center justify-center text-chapaak-brand">Loading...</div>}>
        <MenuHighlights />
        <Gallery />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
