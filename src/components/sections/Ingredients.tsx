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
    <section ref={containerRef} className="relative flex items-center justify-center py-16 md:py-24 overflow-hidden">
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
           Quality You Can Trust
          </h2>
          <p className="text-xl text-aradana-muted leading-relaxed max-w-lg">
            We focus on taste, hygiene, and presentation to deliver meals that are fresh, consistent, and made to high standards. Every dish is carefully prepared with quality ingredients, ensuring a delightful experience for every guest.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
               <h4 className="text-white font-semibold text-2xl">500+</h4>
               <p className="text-aradana-muted text-sm">Happy Clients</p>
            </div>
            <div>
               <h4 className="text-white font-semibold text-2xl">On-Time</h4>
               <p className="text-aradana-muted text-sm">Delivery</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-md md:shadow-xl">
           <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 h-[120%] -top-[10%]">
             <Image
               src="/images/localized/chef-ingredients.jpg"
               alt="Chef preparing fresh ingredients"
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark/80 to-transparent" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
