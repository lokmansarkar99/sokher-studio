"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative w-full h-screen overflow-hidden bg-brand-darker flex items-center justify-center">
      {/* Background Image with Parallax Overlay */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 scale-105">
        <img
          src="https://images.pexels.com/photos/11144078/pexels-photo-11144078.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Cinematic Wedding Background"
          className="w-full h-full object-cover opacity-70 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-brand-darker/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-brand-accent text-sm md:text-base font-sans tracking-[0.3em] mb-6 uppercase">
            প্রিমিয়াম ওয়েডিং প্ল্যানিং সার্ভিস
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-brand-light mb-6">
            শখের <span className="text-brand-accent italic font-normal">স্টুডিও</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <p className="text-brand-light/70 text-lg md:text-xl font-sans max-w-2xl mx-auto font-light leading-relaxed">
            আপনার জীবনের সেরা মুহূর্তগুলো ফ্রেমবন্দী করতে আমরা আছি আপনার পাশে।
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-brand-light/50 flex flex-col items-center gap-4 cursor-pointer hover:text-brand-accent transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
