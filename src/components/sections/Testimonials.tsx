"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: `Super service and reasonable prices.
Special delicious foods ..
SUPERB.`,
    author: "Nayana ramani jayanetti",
    role: "Party Client",
    link: "https://share.google/bJYIvnpOBs1sKWJQc"
  },
  {
    quote: `Aradana Caters provided us a superb service during "බණ පිංකම". Delicious food. Reasonable price. Friendly staff. Highly recommended.`,
    author: "Bhay Dilz",
    role: "Client",
    link: "https://share.google/rO7CRrgwlxhNkQAD9"
  },
{
  quote: "The food is great.",
  author: "udara weerakoon",
  role: "Private Dinner Host",
  link: "https://share.google/ubxDBjr7oxW7g9bFT"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-aradana-gold/30 transition-colors duration-300 relative group"
            >
              <div className="flex justify-between items-start mb-6">
                <Quote className="text-aradana-gold w-8 h-8 opacity-80" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xl">{testimonial.author}</h4>
                <p className="text-sm text-aradana-gold/80 mb-2">{testimonial.role}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-aradana-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-aradana-muted italic mb-6">&quot;{testimonial.quote}&quot;</p>
                
                <Link 
                  href={testimonial.link} 
                  target="_blank"
                  className="text-xs text-white/40 hover:text-aradana-gold transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-aradana-gold rounded-full" />
                  View the  Review
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="https://www.google.com/maps/place/Aradana+Caters"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all duration-300 group"
          >
            See all reviews on Google
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
