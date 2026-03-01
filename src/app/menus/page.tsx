"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { MenuSection } from "@/components/menus/MenuSection";
import { 
  weddingMenuPackages, 
  danaMenuPackages, 
  funeralMenuPackages, 
  hoppersMenuPackages, 
  bitesMenuItems, 
  bbqMenuPackages, 
  menuCategories 
} from "@/lib/constants/menus";

export default function MenusPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const detailsRef = useRef<HTMLElement>(null);

  const handleViewPackages = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
    
    // Smooth scroll to the details section after the state has updated
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="bg-aradana-dark min-h-screen">
        {/* Page Hero */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden">

         <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/localized/menu-hero-bg.jpg"
                    alt="Menu Background"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aradana-dark" />
             </div>
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
              className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-xl"
            >
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold via-white to-aradana-gold bg-[length:200%_auto] animate-gradient">
                Menus
              </span>
            </motion.h1>
                 {/* Subtitle */}
                 <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-aradana-muted font-light max-w-3xl mx-auto leading-relaxed"
                 >
                    Curated culinary experiences for every occasion.
                 </motion.p>
          </div>
            
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] h-20 origin-top bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />
        </section>

        {/* Menu Categories */}
  <section className="relative z-20 container mx-auto px-6 pb-24">
            <div className="space-y-8">
                {menuCategories.map((category, index) => (
                    <MenuSection 
                      key={index} 
                      category={category} 
                      index={index} 
                      onViewAll={() => handleViewPackages(category.title)}
                    />
                ))}
            </div>
        </section>

        {/* Dynamic Package Details Section */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <section 
              ref={detailsRef}
              id="package-details" 
              className="relative z-20 container mx-auto px-6 pb-24 scroll-mt-24"
            >
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-14">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-16 bg-aradana-gold/50" />
                    <span className="text-aradana-gold tracking-[0.3em] uppercase text-xs font-semibold">Aradana Catering</span>
                    <div className="h-[1px] w-16 bg-aradana-gold/50" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {activeCategory} {activeCategory === "Bites & Appetizers" ? "Menu" : "Packages"}
                  </h2>
                  <p className="text-aradana-muted max-w-2xl mx-auto">
                    {activeCategory === "Dana & Bana" && "Choose from our 12 sample traditional packages. Prepared with reverence and the highest standards."}
                    {activeCategory === "Celebrations & Parties" && "Choose from our 12 carefully curated packages. Minimum 50 guests. Contact us to customise."}
                    {activeCategory === "Funerals" && "Choose from our carefully curated packages. Prepared with the highest standards of quality and care. Minimum 50 guests."}
                    {activeCategory === "BBQ & Grilled" && "Choose from our two signature Western BBQ packages. Perfect for outdoor events and private gatherings."}
                    {activeCategory === "Hoppers & Kottu" && "Choose from our two Hoppers & Kottu packages. Perfect for any occasion."}
                    {activeCategory === "Bites & Appetizers" && "All bites are ordered per 1kg. Mix and match to create the perfect spread for your event."}
                  </p>
                </div>

                {/* Dana & Bana Grid */}
                {activeCategory === "Dana & Bana" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {danaMenuPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-6 transition-all duration-300 group flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-12 h-10 rounded-full bg-aradana-gold/10 border border-aradana-gold/30 flex items-center justify-center text-aradana-gold font-bold text-xs md:text-sm group-hover:bg-aradana-gold/20 transition-colors">
                            {(/^[0-9]+$/.test(String(pkg.id)) ? index + 1 : pkg.id)}
                          </div>
                          <span className="text-white/50 text-xs uppercase tracking-widest">Package</span>
                        </div>
                        <ul className="space-y-2 flex-1">
                          {pkg.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                              <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Wedding Grid */}
                {activeCategory === "Celebrations & Parties" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {weddingMenuPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-6 transition-all duration-300 group flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-full bg-aradana-gold/10 border border-aradana-gold/30 flex items-center justify-center text-aradana-gold font-bold text-sm group-hover:bg-aradana-gold/20 transition-colors">
                            {index + 1}
                          </div>
                          <span className="text-white/50 text-xs uppercase tracking-widest">Package</span>
                        </div>
                        <ul className="space-y-2 flex-1">
                          {pkg.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                              <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Funeral Grid */}
                {activeCategory === "Funerals" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {funeralMenuPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-6 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-full bg-aradana-gold/10 border border-aradana-gold/30 flex items-center justify-center text-aradana-gold font-bold text-sm group-hover:bg-aradana-gold/20 transition-colors">
                            {pkg.id}
                          </div>
                          <span className="text-white/50 text-xs uppercase tracking-widest">Package</span>
                        </div>
                        <ul className="space-y-2">
                          {pkg.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                              <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* BBQ Grid */}
                {activeCategory === "BBQ & Grilled" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {bbqMenuPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                          <div className="text-aradana-gold font-bold text-lg">{pkg.id}</div>
                        </div>
                        <div className="space-y-5">
                          {pkg.sections.map((section, si) => (
                            <div key={si}>
                              <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-2">{section.heading}</p>
                              <ul className="space-y-1">
                                {section.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                                    <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Hoppers Grid */}
                {activeCategory === "Hoppers & Kottu" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hoppersMenuPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                          <div className="text-aradana-gold font-bold text-lg">{pkg.id}</div>
                        </div>
                        <div className="space-y-5">
                          {pkg.sections.map((section, si) => (
                            <div key={si}>
                              <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-2">{section.heading}</p>
                              <ul className="space-y-1">
                                {section.items.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                                    <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bites Menu */}
                {activeCategory === "Bites & Appetizers" && (
                   <div className="bg-white/[0.08] border border-white/10 hover:border-aradana-gold/40 rounded-2xl p-8 md:p-12 transition-all duration-300 group max-w-3xl mx-auto">
                    <p className="text-aradana-gold/80 text-sm uppercase tracking-widest mb-6">Per 01 kg</p>
                    <ul className="space-y-3">
                      {bitesMenuItems.map((item, i) => (
                        <li key={i} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 group-hover:border-aradana-gold/20 transition-colors">
                          <div className="flex items-start gap-2 text-lg text-aradana-muted group-hover:text-white/70 transition-colors">
                            <span className="text-aradana-gold/50 mt-[3px] flex-shrink-0">•</span>
                            <span>{item.name}</span>
                          </div>
                          <span className="text-aradana-gold font-semibold text-base whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </motion.div>
            </section>
          )}
        </AnimatePresence>



            {/* CTA */}
            <section className="relative z-20 container mx-auto px-6 pb-32">
              <div className="mt-4 text-center">
                   <h2 className="text-3xl text-white mb-8">Ready to customize your menu?</h2>
                   <a href="/contact" className="bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 inline-block">
                     Book Your Event
                   </a>
              </div>
            </section>
    </main>
  );
}
