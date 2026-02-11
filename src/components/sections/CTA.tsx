"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CTA() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
          alt="Culinary Excellence"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark via-aradana-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Experience Culinary Excellence
          </h2>
          <p className="text-xl md:text-2xl text-aradana-muted mb-8 max-w-2xl mx-auto">
            Let&apos;s create something unforgettable together.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-aradana-gold text-aradana-dark font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-colors transform hover:-translate-y-1">
                    Book Your Event
                </Link>
                <Link href="/menus" className="border border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:text-aradana-gold hover:border-aradana-gold transition-colors transform hover:-translate-y-1">
                    Explore Menus
                </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
