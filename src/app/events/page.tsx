"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const eventTypes = [
  {
    title: "Weddings & Parties",
    description: "From intimate garden ceremonies to grand ballroom receptions, we craft wedding experiences that are as unique as your love story. Our team handles every detail, ensuring you can savor every moment of your special day.",
    image: "/images/localized/wedding.jpg", 
  },
  {
    title: "BBQ Nights",
    description: "Experience the theatre of live grilling with smoky aromas and flame-kissed perfection. From premium meats to fresh seafood, our BBQ nights bring warmth, flavor, and unforgettable atmosphere to your event.",
    image: "/images/localized/bbq.jpg",
  },
  {
    title: "Hoppers & Kottu Live Action",
    description: "EFreshly made, right before your eyes. From crispy hoppers to rhythmic kottu action, our live stations bring authentic Sri Lankan street flavors with a refined, event-ready touch.",
    image: "/images/localized/live_stations.jpg",
  }
];

const galleryImages = [
    "/images/localized/hoppers-kottu-category.jpg",
    "/images/localized/menu-hero-bg.jpg",
    "/images/localized/hero-spread.jpg",
    "/images/localized/salad-detail.jpg",
    "/images/localized/gallery-5.jpg",
    "/images/localized/gallery-6.jpg",
];

export default function EventsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  // Optimized Parallax - using spring physics for smoothness
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const yFg = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
  const opacityText = useTransform(smoothProgress, [0, 0.4], [1, 0]);

  return (
    <main className="bg-aradana-dark min-h-screen">
       {/* High-Performance Cinematic Hero */}
       <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Background Layer - Optimized with will-change */}
          <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 will-change-transform">
                <Image 
                    src="/images/localized/events-hero-bg.jpg"
                    alt="Luxury Event Setup"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-60"
                 />
             <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-aradana-dark" />
          </motion.div>

          {/* Foreground Text & Main Focus */}
          <motion.div 
             style={{ y: yFg, opacity: opacityText }}
             className="relative z-20 text-center px-4 max-w-6xl will-change-transform"
          >
                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-aradana-gold/60" />
                    <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
                        Aradana Caters
                    </span>
                    <div className="h-[1px] w-12 bg-aradana-gold/60" />
                </div>
                
                 <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
                 >
                    Extraordinary <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
                        Events
                    </span>
                 </motion.h1>
                     <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="text-xl text-aradana-muted max-w-2xl mx-auto"
                     >
                         Curated culinary experiences for every occasion.
                     </motion.p>
             </motion.div>
             
             <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg md:text-2xl text-aradana-muted font-light max-w-3xl mx-auto leading-relaxed"
             >
                Immersive settings, exquisite flavors, lasting moments.
             </motion.p>
          </motion.div>
          
           {/* Refined Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />
       </section>

       {/* Event Types - Refined Typography & Layout */}
       <section className="py-24 md:py-32 container mx-auto px-6 space-y-32 md:space-y-48">
           {eventTypes.map((event, index) => (
                <EventTypeSection key={index} event={event} index={index} />
           ))}
       </section>

       {/* Gallery - Refined Grid & Interactions */}
       <section className="py-32 relative">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
           <div className="container mx-auto px-6 relative z-10">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-20"
               >
                   <span className="text-aradana-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Visual Diary</span>
                   <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Captured Moments</h2>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {galleryImages.map((src, index) => (
                       <GalleryItem key={index} src={src} index={index} />
                   ))}
               </div>
           </div>
       </section>

       {/* CTA - High Impact */}
       <section className="relative py-40 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/localized/celebration-toast.jpg"
                    alt="Celebration Toast"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-[0.3]" // Darker for better text contrast
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aradana-dark via-transparent to-aradana-dark/50" />
            </div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl">
                 <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                 >
                    Bring Your Vision to Life
                 </motion.h2>
                 <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="text-xl md:text-2xl text-aradana-muted mb-12 max-w-2xl mx-auto"
                 >
                     Aradana Catering delivers unforgettable experiences, tailored to every occasion.
                 </motion.p>
                 
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                     <Link href="/contact" className="bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold px-12 py-5 rounded-full text-lg hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300 transform hover:scale-105">
                        Book Your Event
                     </Link>
                     <Link href="/menus" className="border border-white/20 text-white font-semibold px-12 py-5 rounded-full text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                        Explore Menus
                     </Link>
                 </div>
            </div>
       </section>
    </main>
  );
}

function EventTypeSection({ event, index }: { event: { title: string; description: string; image: string }, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className={cn("flex flex-col lg:flex-row gap-16 lg:gap-24 items-center", isEven ? "" : "lg:flex-row-reverse")}
        >
            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] overflow-hidden group rounded-sm shadow-2xl">
                 <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 will-change-transform" // Slower, smoother zoom
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                     <span className="text-aradana-gold text-lg font-medium">0{index + 1}</span>
                     <div className="h-[1px] w-20 bg-white/20" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">{event.title}</h2>
                <p className="text-xl text-aradana-muted leading-relaxed font-light">{event.description}</p>
                <div className="pt-6">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-white border-b border-aradana-gold/50 pb-1 hover:text-aradana-gold hover:border-aradana-gold transition-all group">
                        Inquire for availability
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

function GalleryItem({ src, index }: { src: string, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer bg-neutral-900"
        >
             <Image 
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </motion.div>
    );
}
