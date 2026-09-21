import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top elegant border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <h3 className="text-4xl font-medium text-white mb-6 tracking-tight">Chapaak.</h3>
            <p className="text-slate-400 mb-10 leading-relaxed font-sans font-light max-w-sm">
              A Splash of Flavours. Experience the finest pure vegetarian multi-cuisine dining in Bangalore, where every meal is a masterpiece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 hover:text-chapaak-orange transition-colors">Instagram</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 hover:text-chapaak-orange transition-colors">Facebook</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 hover:text-chapaak-orange transition-colors">Twitter</a>
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-sans font-bold uppercase tracking-[0.2em] mb-8 text-white">Newsletter</h4>
            <p className="text-slate-400 font-sans font-light text-sm mb-4">
              Subscribe to get exclusive offers and tasting event invites.
            </p>
            <div className="flex mb-10">
              <input type="email" placeholder="Your email" className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-chapaak-brand w-full text-sm font-sans" />
              <button className="bg-chapaak-brand text-white px-4 py-2 rounded-r-lg text-sm font-sans font-bold hover:bg-orange-700 transition-colors">Join</button>
            </div>

            <h4 className="text-sm font-sans font-bold uppercase tracking-[0.2em] mb-6 text-white">Menu</h4>
            <ul className="space-y-3 font-sans font-light text-slate-400 text-sm">
              <li><a href="#" className="hover:text-chapaak-orange transition-colors">North Indian</a></li>
              <li><a href="#" className="hover:text-chapaak-orange transition-colors">Sizzling Chinese</a></li>
              <li><a href="#" className="hover:text-chapaak-orange transition-colors">Aromatic Biryani</a></li>
              <li><a href="#" className="hover:text-chapaak-orange transition-colors">Street Food</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-sans font-bold uppercase tracking-[0.2em] mb-8 text-white">Visit Us</h4>
            <div className="space-y-6 text-slate-400 font-sans font-light text-sm">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-4 text-slate-500 group-hover:text-chapaak-orange transition-colors shrink-0" />
                <p>5th Floor, Manandi Samvraddhi,<br/>102, RV Road, VV Puram,<br/>Bengaluru 560004</p>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-4 text-slate-500 group-hover:text-chapaak-orange transition-colors shrink-0" />
                <p>+91 81234 51542</p>
              </div>
              <div className="flex items-center group">
                <Clock className="h-5 w-5 mr-4 text-slate-500 group-hover:text-chapaak-orange transition-colors shrink-0" />
                <p>Open daily • 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 font-sans text-xs tracking-wider uppercase relative">
          <p>&copy; {new Date().getFullYear()} Chapaak. All rights reserved.</p>
          
          <a href="#home" className="absolute left-1/2 -top-5 transform -translate-x-1/2 bg-slate-800 hover:bg-chapaak-brand text-white p-3 rounded-full transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </a>

          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-chapaak-orange hover:text-chapaak-orange hover:-translate-y-1 transition-all">
    {icon}
  </a>
);

export default Footer;
