"use client";

import { motion } from "framer-motion";
import { Frame, Heart } from "lucide-react";

import frame1 from '@/assests/frame1.jpg'
import frame2 from '@/assests/frame2.jpg'
export default function CustomFrames() {
  return (
    <section id="frames" className="py-24 md:py-32 bg-brand-light-alt relative overflow-hidden border-t border-brand-dark/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 order-2 lg:order-1"
          >
            <div>
              <span className="text-brand-accent text-xs font-sans uppercase tracking-[0.2em] mb-6 block">
                Exclusive Gifts
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-brand-darker mb-6">
                স্পেশাল <span className="italic font-normal">ফ্রেম</span>
              </h2>
              <p className="text-brand-dark/70 text-lg font-sans leading-relaxed font-light">
                প্রিয়জনকে উপহার দেওয়ার জন্য কাস্টমাইজড স্পেশাল ফটো ফ্রেম। বিবাহ বার্ষিকী, জন্মদিন অথবা যেকোনো বিশেষ দিনের স্মৃতিকে ফ্রেমবন্দী করে রাখতে আমরা তৈরি করি এক্সক্লুসিভ ডিজাইনের ফ্রেম। 
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <Frame className="w-6 h-6 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-darker mb-2">কাস্টম ডিজাইন</h4>
                  <p className="text-brand-dark/60 font-sans font-light">আপনার পছন্দ অনুযায়ী যেকোনো সাইজ ও ডিজাইনের ফ্রেম তৈরি করা হয়।</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="mt-1">
                  <Heart className="w-6 h-6 text-brand-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-brand-darker mb-2">অ্যানিভার্সারি গিফট</h4>
                  <p className="text-brand-dark/60 font-sans font-light">প্রিয়জনের জন্য স্পেশাল মেসেজ সহ এক্সক্লুসিভ অ্যানিভার্সারি ফ্রেম।</p>
                </div>
              </div>
            </div>

            <button className="px-10 py-4 bg-brand-darker text-brand-light font-sans tracking-widest text-sm uppercase hover:bg-brand-accent transition-colors duration-500">
              অর্ডার করুন
            </button>
          </motion.div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img 
                src={typeof frame1 === 'string' ? frame1 : (frame1 as any).src} 
                alt="Custom Photo Frame" 
                className="w-full h-full object-cover grayscale-[15%]"
              />
            </motion.div>
            
            {/* Decor image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="absolute -left-10 -bottom-10 w-2/3 aspect-square overflow-hidden border-8 border-brand-light-alt hidden md:block shadow-2xl"
            >
              <img 
                src={typeof frame2 === 'string' ? frame2 : (frame2 as any).src} 
                alt="Frame Detail" 
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
