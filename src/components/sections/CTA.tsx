"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CTA() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/localized/celebration-toast.jpg"
          alt="Culinary Excellence"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark via-aradana-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.8 }}
           style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seeing is believing.
          </h2>
          <p className="text-xl text-aradana-muted mb-10 max-w-2xl mx-auto">
            Experience the artistry and detail that define Aradana events.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ willChange: "transform, opacity" }}
          >
            <Link 
              href="/events#visual-diary" 
              className="inline-block bg-aradana-gold text-aradana-dark font-bold px-12 py-5 rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(255,215,0,0.3)] hover:scale-105"
            >
              View Our Event Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
