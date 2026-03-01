"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuCategory } from "@/lib/constants/menus";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
  onViewAll: () => void;
}

export function MenuSection({ category, index, onViewAll }: MenuSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px", amount: 0.1 }}
      transition={{ duration: 0.8 }}
      style={{ willChange: "transform, opacity" }}
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
          <button
            onClick={onViewAll}
            className="inline-block mt-6 text-base font-semibold text-aradana-gold border border-aradana-gold/50 px-8 py-3 rounded-full hover:bg-aradana-gold hover:text-aradana-dark transition-all duration-300 transform hover:scale-105"
          >
            {category.title === "Bites & Appetizers" ? "View all items ↓" : "View all packages ↓"}
          </button>
        </div>

        <div className="space-y-6">
          {category.items.map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex justify-between items-baseline border-b border-white/10 pb-2 group-hover:border-aradana-gold/50 transition-colors duration-300">
                <h3 className="text-xl text-white font-medium group-hover:text-aradana-gold transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
              <p className="text-sm text-aradana-muted mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
