"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-light text-brand-darker relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-10 tracking-wide text-brand-darker">
              প্রতিটি গল্পই একটি <span className="text-brand-accent italic font-normal">শিল্প</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 text-lg md:text-xl text-brand-dark/70 font-sans leading-relaxed font-light"
          >
            <p>
              "Dream Studio - শখের স্টুডিও" শুধুমাত্র একটি নাম নয়, এটি আপনাদের স্বপ্নের মুহূর্তগুলোকে রঙে ও রেখায় জীবন্ত করে তোলার এক নিরলস প্রয়াস। আমরা বিশ্বাস করি, প্রতিটি মানুষের জীবনে এমন কিছু মুহূর্ত আসে যা চিরকাল মনে রাখার মতো।
            </p>
            <p>
              আমাদের সুদক্ষ ফটোগ্রাফার, সিনেমাটোগ্রাফার এবং ডিজাইনাররা আপনাদের সেইসব অমূল্য মুহূর্তগুলোকে নিখুঁতভাবে ক্যামেরাবন্দী করতে বদ্ধপরিকর। উন্নত প্রযুক্তি, নান্দনিকতা এবং সৃজনশীলতার এক অপূর্ব সমন্বয়ে আমরা আপনাদের জন্য তৈরি করি জীবনের সেরা স্মৃতি।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex justify-center"
          >
             <div className="w-16 h-[1px] bg-brand-accent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
