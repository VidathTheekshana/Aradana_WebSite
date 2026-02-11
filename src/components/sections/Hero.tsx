"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Catering Spread"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aradana-dark/30 via-aradana-dark/40 to-aradana-dark" />
        <div className="absolute inset-0 bg-radial-[circle_at_center_center] from-transparent to-aradana-dark/80" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"

      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
        >
          Aradana <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
            Caters
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-xl md:text-3xl text-aradana-muted font-light tracking-widest uppercase mb-12"
        >
         - Flavor at its finest -
        </motion.p>
        
{/* Buttons removed as per user request */}
      </motion.div>
      
      {/* Scroll Indicator */}
      {/* Animated Arrow Heads Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0"
      >
        {[0, 1, 2].map((i) => {
          // Define sizes for each arrow: Small -> Medium -> Large
          const sizes = ["w-4 h-4", "w-6 h-6", "w-8 h-8"];
          
          return (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
               <svg 
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 xmlns="http://www.w3.org/2000/svg"
                 className={`${sizes[i]} text-aradana-gold`}
               >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
               </svg>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
