"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "An absolute masterpiece of culinary art. The attention to detail was simply unmatched.",
    author: "Sophia Reynolds",
    role: "Wedding Client",
  },
  {
    quote: "Aradana Catering transformed our corporate gala into an unforgettable experience.",
    author: "James Sterling",
    role: "CEO, Sterling Tech",
  },
  {
    quote: "The flavors were exquisite, and the presentation was nothing short of cinematic.",
    author: "Eleanor Vance",
    role: "Private Dinner Host",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-aradana-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-aradana-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aradana-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aradana-gold to-transparent mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-aradana-gold/30 transition-colors duration-300"
            >
              <Quote className="text-aradana-gold w-8 h-8 mb-6 opacity-80" />
              <div>
                <h4 className="text-white font-semibold text-xl">{testimonial.author}</h4>
                <p className="text-sm text-aradana-gold/80">{testimonial.role}</p>
                <p className="text-aradana-muted italic mb-6">&quot;{testimonial.quote}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
