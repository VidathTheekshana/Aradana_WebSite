"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const dishes = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Signature Entree",
    yRange: ["0%", "-20%"],
    className: "z-20 w-3/4 md:w-2/3 shadow-2xl rounded-lg translate-x-10",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop",
    alt: "Fresh Salad Detail",
    yRange: ["20%", "-10%"],
    className: "z-10 absolute top-20 -left-10 w-1/2 shadow-xl rounded-lg grayscale-[0.3] hover:grayscale-0 transition-all duration-500",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1974&auto=format&fit=crop",
    alt: "Plating Detail",
    yRange: ["10%", "30%"],
    className: "z-0 absolute -bottom-10 right-0 w-1/2 shadow-lg rounded-lg opacity-80",
  },
];

export function SignatureDishes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="flex items-center justify-center py-20 relative overflow-hidden bg-aradana-dark">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-aradana-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Visual Content - Parallax Layering */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
             <DishImage src={dishes[2].src} alt={dishes[2].alt} className={dishes[2].className} yRange={dishes[2].yRange} progress={scrollYProgress} />
             <DishImage src={dishes[1].src} alt={dishes[1].alt} className={dishes[1].className} yRange={dishes[1].yRange} progress={scrollYProgress} />
             <DishImage src={dishes[0].src} alt={dishes[0].alt} className={dishes[0].className} yRange={dishes[0].yRange} progress={scrollYProgress} />
        </div>

        {/* Text Content - Right Aligned */}
        <motion.div
           style={{ opacity, y: textY }}
           className="space-y-8 text-right md:pl-10 relative z-10"
        >
           <div className="inline-block border-b border-aradana-gold pb-2 ml-auto">
            <h3 className="text-aradana-gold text-lg font-medium tracking-widest uppercase">
              Culinary Art
            </h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Artistry on Every Plate
          </h2>
          <p className="text-xl text-aradana-muted leading-relaxed ml-auto max-w-lg">
            Each dish tells a story, blending flavor, presentation, and innovation. We view cuisine as an art form, where texture, color, and taste converge to create an unforgettable masterpiece.
          </p>
          
           <div className="flex justify-end pt-8">
            <button className="text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-aradana-dark transition-colors duration-300">
                View Full Menu
            </button>
           </div>
        </motion.div>

      </div>
    </section>
  );
}

function DishImage({ src, alt, className, yRange, progress }: { src: string, alt: string, className: string, yRange: string[], progress: MotionValue<number> }) {
    const y = useTransform(progress, [0, 1], yRange);
    return (
        <motion.div style={{ y }} className={className}>
             <div className="relative aspect-[4/3] w-full h-full overflow-hidden rounded-lg">
                <Image src={src} alt={alt} fill className="object-cover" />
             </div>
        </motion.div>
    )
}
