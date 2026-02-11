"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function ContactPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-aradana-dark min-h-screen">
       {/* Full-Screen Cinematic Hero */}
       <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt="Professional Consultation"
                fill
                priority
                className="object-cover"
              />
              {/* Dark Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-aradana-dark/60 via-aradana-dark/70 to-aradana-dark" />
          </motion.div>
          
          {/* Hero Content */}
          <motion.div 
            style={{ opacity: opacityHero }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
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
                Get In <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
                  Touch
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-lg md:text-2xl text-aradana-muted font-light max-w-3xl mx-auto leading-relaxed"
              >
                We would love to plan your perfect event experience.
              </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />


       </section>

       {/* Contact Form & Info Section */}
       <section className="relative z-20 container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Contact Form */}
                <motion.div
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
                >
                    <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-aradana-muted uppercase tracking-wider">Name</label>
                                <input type="text" id="name" className="w-full bg-aradana-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aradana-gold transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm text-aradana-muted uppercase tracking-wider">Phone</label>
                                <input type="tel" id="phone" className="w-full bg-aradana-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aradana-gold transition-colors" placeholder="+94 77..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-aradana-muted uppercase tracking-wider">Email</label>
                            <input type="email" id="email" className="w-full bg-aradana-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aradana-gold transition-colors" placeholder="your@email.com" />
                        </div>

                        <div className="space-y-2">
                             <label htmlFor="type" className="text-sm text-aradana-muted uppercase tracking-wider">Event Type</label>
                             <select id="type" className="w-full bg-aradana-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aradana-gold transition-colors appearance-none" defaultValue="">
                                 <option value="" disabled>Select Event Type</option>
                                 <option value="wedding">Wedding</option>
                                 <option value="corporate">Dana & Bana</option>
                                 <option value="private">Birthday Party</option>
                                 <option value="other">Other</option>
                             </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-aradana-muted uppercase tracking-wider">Message</label>
                            <textarea id="message" rows={5} className="w-full bg-aradana-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-aradana-gold transition-colors" placeholder="Tell us about your event..."></textarea>
                        </div>

                        <button className="w-full bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                >
                    <div className="space-y-8">
                        <div className="flex items-start space-x-6">
                             <div className="bg-white/10 p-4 rounded-full text-aradana-gold">
                                 <MapPin className="w-6 h-6" />
                             </div>
                             <div>
                                 <h3 className="text-xl text-white font-semibold mb-2">Our Office</h3>
                                 <p className="text-aradana-muted">49/C, Maharagama Road<br/>Mampe, Piliyandala</p>
                             </div>
                        </div>

                         <div className="flex items-start space-x-6">
                             <div className="bg-white/10 p-4 rounded-full text-aradana-gold">
                                 <Phone className="w-6 h-6" />
                             </div>
                             <div>
                                 <h3 className="text-xl text-white font-semibold mb-2">Phone</h3>
                                 <p className="text-aradana-muted">+94 77 932 1079</p>
                             </div>
                        </div>

                         <div className="flex items-start space-x-6">
                             <div className="bg-white/10 p-4 rounded-full text-aradana-gold">
                                 <Mail className="w-6 h-6" />
                             </div>
                             <div>
                                 <h3 className="text-xl text-white font-semibold mb-2">Email</h3>
                                 <p className="text-aradana-muted">wasanthakota@gmail.com</p>
                             </div>
                        </div>
                    </div>

                    {/* Cinematic Map Integration */}
                    <div className="w-full h-[400px] bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden group">
                         {/* Map Container */}
                         <div className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity duration-700">
                             <iframe
                                 src="https://www.google.com/maps?q=6.8073953,79.9276547&hl=en&z=17&output=embed"
                                 width="100%"
                                 height="100%"
                                 style={{ border: 0 }}
                                 allowFullScreen
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 className="w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000"
                             />
                         </div>
                         
                         {/* Cinematic Overlays */}
                         <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark via-transparent to-transparent opacity-40 pointer-events-none" />

                         {/* Overlay Content */}
                         <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                             <div>
                                 <p className="text-aradana-gold text-xs uppercase tracking-[0.2em] mb-1">Location</p>
                                 <h4 className="text-white text-xl font-bold">Piliyandala, Sri Lanka</h4>
                             </div>
                             <a 
                               href="https://www.google.com/maps?q=6.8073953,79.9276547" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-aradana-gold hover:text-black hover:border-aradana-gold transition-all duration-300 transform hover:scale-105"
                             >
                                 Get Directions
                             </a>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </main>
  );
}
