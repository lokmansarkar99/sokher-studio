"use client";

import { motion } from "framer-motion";

import c1 from '@/assests/c1.jpg'
import c2 from '@/assests/c2.jpg'
import shimu1 from '@/assests/shimu1.jpg'
import shimu2 from '@/assests/shimu2.jpg'
import shimu3 from '@/assests/shimu3.jpg'

import randomgirl1 from '@/assests/randomgirl1.jpg'

import profile from '@/assests/profile.jpg'

const galleryImages = [
  {
    id: 1,
    title: "গায়ে হলুদ",
    category: "Holud Ceremony",
    src: c1,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "ওয়েডিং মোমেন্টস",
    category: "Wedding",
    src: c2,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: 3,
    title: "সিনেমাটিক পোর্ট্রেট",
    category: "Cinematic Portrait",
    src: shimu1,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 4,
    title: "রোমান্টিক ক্লিক",
    category: "Pre-Wedding",
    src: randomgirl1,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: 5,
    title: "ব্রাইডাল লুক",
    category: "Bridal",
    src: profile,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: 6,
    title: "ওয়েডিং ডিটেইলস",
    category: "Decoration",
    src:shimu3,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: 7,
    title: "ওয়েডিং ডিটেইলস",
    category: "Decoration",
    src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-light text-brand-darker">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
              নির্বাচিত <span className="text-brand-accent italic font-normal">গ্যালারি</span>
            </h2>
            <p className="text-brand-dark/50 font-sans text-lg max-w-xl font-light">
              ক্যামেরার লেন্সে এক টুকরো বিশুদ্ধ সারল্য আর প্রকৃতির মিতালী। আমাদের তোলা কিছু মুহূর্ত।
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className="px-8 py-3 border border-brand-darker text-brand-darker text-sm font-sans tracking-widest uppercase hover:bg-brand-darker hover:text-brand-light transition-colors duration-500">
              আরও দেখুন
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-2 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
              className={`relative group overflow-hidden cursor-pointer bg-brand-darker ${img.colSpan} ${img.rowSpan}`}
            >
              <img
                src={typeof img.src === 'string' ? img.src : (img.src as any).src}
                alt={img.title}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-60"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-accent text-[10px] font-sans uppercase tracking-[0.2em] mb-3 block">
                  {img.category}
                </span>
                <h3 className="text-brand-light text-2xl font-serif font-light">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
