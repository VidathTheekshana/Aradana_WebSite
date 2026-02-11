"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Ingredients() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-aradana-dark z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-8"
        >
          <div className="inline-block border-b border-aradana-gold pb-2">
            <h3 className="text-aradana-gold text-lg font-medium tracking-widest uppercase">
              Craftsmanship
            </h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            From Farm to Table
          </h2>
          <p className="text-xl text-aradana-muted leading-relaxed max-w-lg">
            Every ingredient is hand-selected for freshness and quality. We believe that true culinary excellence begins with the finest raw materials, sourced from local artisans and sustainable farms.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
               <h4 className="text-white font-semibold text-2xl">100+</h4>
               <p className="text-aradana-muted text-sm">Local Farms</p>
            </div>
            <div>
               <h4 className="text-white font-semibold text-2xl">Daily</h4>
               <p className="text-aradana-muted text-sm">Fresh Harvests</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
           <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
             <Image
               src="/images/localized/chef-ingredients.jpg"
               alt="Chef preparing fresh ingredients"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark/80 to-transparent" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
