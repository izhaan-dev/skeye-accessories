/* src/ContactUs.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200 flex flex-col items-center justify-center p-6">
      
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-serif tracking-tight mb-2">Get in Touch</h1>
        <p className="text-stone-500 mb-12">We are here to assist you with any inquiries.</p>
        
        <div className="space-y-6 border-t border-b border-stone-200 py-10">
          
          {/* Phone Section */}
          <div className="flex flex-col items-center gap-2">
            <Phone size={24} className="text-stone-400 mb-2" />
            <span className="text-xs uppercase tracking-widest text-stone-500">Call / WhatsApp</span>
            <a href="tel:+919324638143" className="text-xl font-serif hover:text-stone-600 transition">
              +91 93246 38143
            </a>
          </div>

          {/* Instagram Section */}
          <div className="flex flex-col items-center gap-2 pt-6">
            <Instagram size={24} className="text-stone-400 mb-2" />
            <span className="text-xs uppercase tracking-widest text-stone-500">Follow Us</span>
            <a 
              href="https://www.instagram.com/skeye.accessories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-serif hover:text-stone-600 transition border-b border-black/20 pb-0.5 hover:border-black"
            >
              @skeye.accessories
            </a>
          </div>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-black mt-10">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    </div>
  );
}