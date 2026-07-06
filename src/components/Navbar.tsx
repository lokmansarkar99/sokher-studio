"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "হোম", href: "#home" },
  { name: "আমাদের সম্পর্কে", href: "#about" },
  { name: "সেবাসমূহ", href: "#services" },
  { name: "গ্যালারি", href: "#gallery" },
  { name: "স্পেশাল ফ্রেম", href: "#frames" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "py-4 bg-brand-darker/95 backdrop-blur-md border-white/5 shadow-sm" : "py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo / Contact Side */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-2 border border-brand-accent text-brand-accent font-sans text-sm tracking-widest uppercase hover:bg-brand-accent hover:text-brand-darker transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>যোগাযোগ</span>
            </a>
          </div>

          {/* Hamburger Menu Side */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 flex items-center justify-center text-white hover:text-brand-accent transition-colors"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-brand-darker flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 lg:right-12 w-14 h-14 flex items-center justify-center text-white hover:text-brand-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <ul className="text-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-6xl font-serif text-brand-light hover:text-brand-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-12 text-brand-light/40 font-sans tracking-widest uppercase text-sm"
            >
              Dream Studio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
