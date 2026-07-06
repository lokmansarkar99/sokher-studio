"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-darker pt-24 md:pt-32 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-brand-light mb-6"
          >
            চলুন <span className="italic font-normal text-brand-accent">ফ্রেমবন্দী</span> করি<br />আপনার স্বপ্ন
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-light/50 font-sans text-lg max-w-xl mx-auto font-light tracking-wide"
          >
            যোগাযোগ করুন এবং আপনার বিশেষ দিনের বুকিং নিশ্চিত করুন।
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-center text-center gap-4">
            <User className="w-6 h-6 text-brand-accent mb-2" strokeWidth={1.5} />
            <h4 className="text-brand-light font-serif text-xl">প্রোপ্রাইটর</h4>
            <p className="text-brand-light/60 font-sans font-light">
              মোঃ রায়হান সরকার<br/>
              (Md. Rayhan Sarkar)
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <Phone className="w-6 h-6 text-brand-accent mb-2" strokeWidth={1.5} />
            <h4 className="text-brand-light font-serif text-xl">ফোন নম্বর</h4>
            <p className="text-brand-light/60 font-sans font-light">
              01998-181452<br/>
              +880 1998-181452
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <Mail className="w-6 h-6 text-brand-accent mb-2" strokeWidth={1.5} />
            <h4 className="text-brand-light font-serif text-xl">ইমেইল</h4>
            <p className="text-brand-light/60 font-sans font-light break-all">
              dreamstory452@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <MapPin className="w-6 h-6 text-brand-accent mb-2" strokeWidth={1.5} />
            <h4 className="text-brand-light font-serif text-xl">ঠিকানা</h4>
            <p className="text-brand-light/60 font-sans font-light">
              থানা রোড, থানা গেটের সামনে,<br/>
              পাঁচবিবি, জয়পুরহাট - ৫৯১০
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-light/40 font-sans text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Dream Studio. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100064692309367" target="_blank" rel="noopener noreferrer" className="text-brand-light/50 hover:text-brand-accent transition-colors duration-300">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-light/50 hover:text-brand-accent transition-colors duration-300">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-light/50 hover:text-brand-accent transition-colors duration-300">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
