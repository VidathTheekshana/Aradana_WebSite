"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock } from "lucide-react";

// Clients and Team data removed as per request

// Counter Component
function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <main className="bg-aradana-dark min-h-screen">
       {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">

          <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Chefs Plating Food"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-aradana-dark/70 via-aradana-dark/50 to-aradana-dark" />
          </motion.div>
          
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        {/* Top Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-aradana-gold/60" />
                            <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
                                Aradana Caters
                            </span>
                            <div className="h-[1px] w-12 bg-aradana-gold/60" />
                        </motion.div>
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
                        >
                            About <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
                                US
                            </span>
                        </motion.h1>
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-aradana-muted font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            Crafting unforgettable culinary experiences for every occasion.
                        </motion.p>
                    </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />
       </section>

       {/* Vision & Mission */}
       <section className="py-24 container mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-16 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="w-full md:w-1/2 space-y-8"
               >
                   <div>
                       <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-4">
                           <div className="w-12 h-[1px] bg-aradana-gold" />
                           Our Vision
                       </h2>
                       <p className="text-aradana-muted text-lg leading-relaxed">
                           To be the premier choice for luxury catering in Sri Lanka, recognized for purely authentic flavors, artistic presentation, and impeccable service that turns every meal into a cherished memory.
                       </p>
                   </div>
                   <div>
                       <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-4">
                           <div className="w-12 h-[1px] bg-aradana-gold" />
                           Our Mission
                       </h2>
                       <p className="text-aradana-muted text-lg leading-relaxed">
                           We are dedicated to sourcing the finest local ingredients, upholding traditional culinary arts, and innovating with modern techniques to deliver exceptional dining experiences that exceed expectations.
                       </p>
                   </div>
               </motion.div>
               
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative h-[500px]"
               >
                   <div className="absolute inset-0 bg-aradana-gold/10 rounded-2xl transform rotate-3" />
                   <Image 
                     src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
                     alt="Visionary Cuisine"
                     fill
                     className="object-cover rounded-2xl shadow-2xl relative z-10"
                   />
               </motion.div>
           </div>
       </section>

       {/* Stats Section */}
       <section className="py-24 bg-white/5 border-y border-white/5">
           <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-16 text-center">
               <div>
                   <div className="text-6xl md:text-8xl font-bold text-aradana-gold mb-2">
                       <Counter value={20} />+
                   </div>
                   <p className="text-white text-xl tracking-widest uppercase">Years of Excellence</p>
               </div>
               <div className="h-24 w-[1px] bg-white/20 hidden md:block" />
               <div>
                   <div className="text-6xl md:text-8xl font-bold text-aradana-gold mb-2">
                       <Counter value={2000} />+
                   </div>
                   <p className="text-white text-xl tracking-widest uppercase">Events Hosted</p>
               </div>
               <div className="h-24 w-[1px] bg-white/20 hidden md:block" />
               <div>
                   <div className="text-6xl md:text-8xl font-bold text-aradana-gold mb-2">
                       <Counter value={35} />+
                   </div>
                   <p className="text-white text-xl tracking-widest uppercase">Professional Staff</p>
               </div>
           </div>
       </section>

       {/* Info & Hotline Section */}
       <section className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Aradana Catering</h2>
                        <p className="text-aradana-muted text-lg leading-relaxed">
                            Aradana Catering is a premier culinary service dedicated to crafting unforgettable dining experiences. With a passion for adding authentic flavors and elegant presentation, we transform every occasion into a celebration of taste and hospitality.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-6 rounded-xl bg-black/20 border border-white/5 hover:border-aradana-gold/30 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-aradana-gold/10 flex items-center justify-center text-aradana-gold shrink-0 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-aradana-muted uppercase tracking-wider mb-1">24/7 Hotline</p>
                                <p className="text-2xl text-white font-bold tracking-wide group-hover:text-aradana-gold transition-colors">+94 11 260 4473</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-xl bg-black/20 border border-white/5 hover:border-aradana-gold/30 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-aradana-gold/10 flex items-center justify-center text-aradana-gold shrink-0 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-aradana-muted uppercase tracking-wider mb-1">Opening Hours</p>
                                <p className="text-2xl text-white font-bold tracking-wide group-hover:text-aradana-gold transition-colors">8:00 AM - 10:00 PM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
       </section>

       {/* CTA */}
       <section className="py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Part of Your Story</h2>
            <Link href="/contact" className="bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 inline-block">
                Start Planning
            </Link>
       </section>
    </main>
  );
}
