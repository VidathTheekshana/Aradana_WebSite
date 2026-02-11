"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const menuCategories = [
  {
    title: "Weddings & Parties",
    description: "Elegant courses designed for grand celebrations.",
    image: "/images/localized/wedding-party-category.jpg",
    items: [
      { name: "Grilled Lamb Chops", detail: "with Rosemary Jus" },
      { name: "Herb-Crusted Salmon", detail: "Citrus Beurre Blanc" },
      { name: "Chocolate Mousse Dome", detail: "Gold Leaf Garnish" },
    ]
  },
  {
    title: "Dana & Bana",
    description: "Traditional offerings prepared with reverence and authentic spices.",
    image: "/images/localized/dana-bana-category.jpg", // Abstract/Texture as placement
    items: [
      { name: "Kiribath", detail: "with Lunu Miris" },
      { name: "Pol Sambol", detail: "& Coconut Roti" },
      { name: "Sweet Milk Rice", detail: "Traditional Preparation" },
    ]
  },
  {
    title: "Funerals",
    description: "Comforting, warm meals served with dignity.",
    image: "/images/localized/chef-ingredients.jpg",
    items: [
      { name: "Vegetable Stew", detail: "Hearty & Warm" },
      { name: "Spiced Chicken Curry", detail: "Authentic Blend" },
      { name: "Coconut Roti", detail: "Freshly Made" },
    ]
  },
  {
    title: "Hoppers & Kottu",
    description: "Live action stations bringing street food to luxury events.",
    image: "/images/localized/hoppers-kottu-category.jpg",
    items: [
      { name: "Egg Hoppers", detail: "Crispy Edges" },
      { name: "Chicken Kottu", detail: "with Cashew Nuts" },
      { name: "Vegetable Kottu", detail: "Farm Fresh Vegetables" },
    ]
  },
   {
    title: "Bites & Appetizers",
    description: "Perfect starters for cocktail hours and receptions.",
    image: "/images/localized/bites-appetizers-category.jpg",
    items: [
      { name: "Mini Lamb Patties", detail: "Spiced Mint Yogurt" },
      { name: "Veg Spring Rolls", detail: "Sweet Chili Dip" },
      { name: "Cheese Canapés", detail: "Artisan Selection" },
    ]
  },
  {
    title: "BBQ & Grilled",
    description: "Smoky flavors and perfectly charred cuts.",
    image: "/images/localized/bbq-grilled-category.jpg",
    items: [
      { name: "Grilled Prawns", detail: "Garlic Butter Glaze" },
      { name: "BBQ Chicken Skewers", detail: "Sticky Honey Soy" },
      { name: "Vegetable Kebabs", detail: "Herb Marinated" },
    ]
  }
];

export default function MenusPage() {
  return (
    <main className="bg-aradana-dark min-h-screen">
        {/* Page Hero */}
  <section className="relative h-screen flex items-center justify-center overflow-hidden">

         <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/localized/menu-hero-bg.jpg"
                    alt="Menu Background"
                    fill
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
              className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[1px] bg-gradient-to-b from-aradana-gold/0 via-aradana-gold/50 to-aradana-gold/0"
          />
        </section>

        {/* Menu Categories */}
  <section className="relative z-20 container mx-auto px-6 pb-24">
            <div className="space-y-8">
                {menuCategories.map((category, index) => (
                    <MenuSection key={index} category={category} index={index} />
                ))}
            </div>
            
            {/* CTA */}
            <div className="mt-16 text-center">
                 <h2 className="text-3xl text-white mb-8">Ready to customize your menu?</h2>
                 <a href="/contact" className="bg-gradient-to-r from-aradana-gold to-aradana-amber text-aradana-dark font-bold px-10 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all duration-300 transform hover:scale-105 inline-block">
                   Book Your Event
                 </a>
            </div>
        </section>
    </main>
  );
}

function MenuSection({ category, index }: { category: { title: string; description: string; image: string; items: { name: string; detail: string }[] }, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={cn("flex flex-col md:flex-row gap-12 items-center", isEven ? "" : "md:flex-row-reverse")}
        >
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                 <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-aradana-dark/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-8">
                <div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{category.title}</h2>
                   <p className="text-aradana-muted text-lg">{category.description}</p>
                </div>

                <div className="space-y-6">
                    {category.items.map((item: { name: string; detail: string }, i: number) => (
                        <div key={i} className="group cursor-default">
                             <div className="flex justify-between items-baseline border-b border-white/10 pb-2 group-hover:border-aradana-gold/50 transition-colors duration-300">
                                 <h3 className="text-xl text-white font-medium group-hover:text-aradana-gold transition-colors duration-300">{item.name}</h3>
                             </div>
                             <p className="text-sm text-aradana-muted mt-1">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
