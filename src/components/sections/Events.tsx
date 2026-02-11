"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function Events() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative flex items-center overflow-hidden py-20 mt-24">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/images/localized/luxury-event.jpg"
          alt="Luxury Event Setup"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aradana-dark/90 via-aradana-dark/60 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white space-y-8">
            <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
            >
              <div className="inline-block border-b border-aradana-gold pb-2 mb-4">
                <h3 className="text-aradana-gold text-lg font-medium tracking-widest uppercase">
                  Luxury Experiences
                </h3>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Tailored to Perfection
              </h2>
              <p className="text-xl text-aradana-muted leading-relaxed">
                From intimate dinners to grand celebrations, we curate environments that captivate and inspire. Our team ensures that every detail, from the table setting to the lighting, reflects your vision of luxury.
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pt-8"
            >
                <Link 
                  href="/contact"
                  className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-aradana-dark transition-all duration-300"
                >
                    Plan Your Event
                </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
