"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled ? "py-4 bg-origen/90 backdrop-blur-lg border-b border-silencio/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center h-full">
        
        {/* Left: Logo Only - flex-1 for balance */}
        <div className="flex-1 flex justify-start z-10">
          <Link href="/" className="group">
            <div className="w-16 h-16 md:w-24 md:h-24 transition-transform duration-700 group-hover:rotate-[360deg]">
              <img src="/logo-r.png" alt="Ritmo Audiovisual Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(226,28,34,0.4)]" />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Menu - FORCED MATHEMATICAL CENTER */}
        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 flex-none px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-lato text-[11px] uppercase tracking-[0.3em] text-silencio hover:text-detonante transition-colors duration-300 relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-detonante transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: CTA / Mobile Toggle - flex-1 for balance */}
        <div className="flex-1 flex justify-end items-center gap-6 z-10">
          <Link 
            href="#projects" 
            className="hidden md:block border border-detonante/40 px-6 py-2.5 font-oswald text-[11px] uppercase tracking-[0.2em] text-presencia hover:bg-detonante hover:border-detonante hover:scale-105 transition-all duration-500 rounded-sm"
          >
            Ver Proyectos
          </Link>
          
          <button
            className="text-presencia p-1 hover:text-detonante transition-colors md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-origen z-[999] flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-presencia"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="w-24 h-24 mb-4">
               <img src="/logo.png" alt="Ritmo Audiovisual" className="w-full h-full object-contain" />
            </div>
            <div className="text-center mb-8">
              <span className="font-oswald text-detonante text-sm uppercase tracking-widest block mb-2">Joseph Mathew Ramirez</span>
              <h2 className="font-oswald text-3xl uppercase text-presencia">RITMO AUDIOVISUAL</h2>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-oswald text-5xl uppercase tracking-tighter text-presencia hover:text-detonante transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
