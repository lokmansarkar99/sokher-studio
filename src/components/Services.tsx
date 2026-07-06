"use client";

import { motion } from "framer-motion";
import { Camera, Video, Sparkles, Music } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ফটোগ্রাফি",
    subtitle: "Photography",
    description: "জীবনের অমূল্য মুহূর্তগুলোর নিখুঁত ফ্রেম। ওয়েডিং, প্রি-ওয়েডিং, গায়ে হলুদ এবং পোর্ট্রেট।",
    icon: Camera,
    colSpan: "md:col-span-2",
    bgImage: "https://images.pexels.com/photos/12551959/pexels-photo-12551959.jpeg",
  },
  {
    id: 2,
    title: "সিনেমাটোগ্রাফি",
    subtitle: "Cinematography",
    description: "আপনাদের জীবনের গল্পগুলো সিনেমাটিক ঢঙে, যা চিরকাল মনে রাখার মতো।",
    icon: Video,
    colSpan: "md:col-span-1",
    bgImage: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "ডেকোরেশন",
    subtitle: "Decoration",
    description: "আপনার রুচি ও আভিজাত্যের সাথে মানানসই অপরূপ মঞ্চ ও ইভেন্ট ডেকোরেশন।",
    icon: Sparkles,
    colSpan: "md:col-span-1",
    bgImage: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "লাইভ মিউজিক",
    subtitle: "Live Music",
    description: "আনন্দঘন মুহূর্তগুলোকে আরও প্রাণবন্ত করতে মনোরম লাইভ মিউজিক পরিবেশনা।",
    icon: Music,
    colSpan: "md:col-span-2",
    bgImage: "https://images.pexels.com/photos/7803629/pexels-photo-7803629.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-darker text-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">আমাদের <span className="text-brand-accent italic font-normal">সেবাসমূহ</span></h2>
            <p className="text-brand-light/60 font-sans text-lg font-light leading-relaxed">
              আপনাদের বিশেষ দিনটিকে আরও স্পেশাল করে তুলতে আমরা নিয়ে এসেছি প্রিমিয়াম মানের সব সেবা।
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[360px]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`relative group overflow-hidden bg-brand-dark ${service.colSpan}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale-[10%]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent"></div>
                  
                  {/* Hover Overlay - Soft dark tint */}
                  <div className="absolute inset-0 bg-brand-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative h-full w-full p-8 md:p-10 flex flex-col justify-end z-10">
                  <div className="transform transition-transform duration-700 group-hover:-translate-y-4">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-brand-accent/80 group-hover:text-brand-accent transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-light mb-1 text-brand-light">{service.title}</h3>
                    <h4 className="text-xs font-sans tracking-[0.2em] uppercase text-brand-accent/80 mb-4">{service.subtitle}</h4>
                    
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <p className="text-brand-light/70 font-sans mt-2 font-light text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
