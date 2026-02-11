"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        href="https://wa.me/94771234567"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:animate-ping" />
        
        <MessageCircle className="w-8 h-8 text-white fill-current" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-aradana-dark px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium text-sm">
           Chat with us
        </div>
      </Link>
    </motion.div>
  );
}
