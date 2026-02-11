"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Logo is rendered inline below. No LogoImage wrapper to keep behaviour simple and reliable.

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menus", href: "/menus" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "h-[85px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "h-[110px] shadow-none"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(5, 5, 5, 0.9)" : "rgba(5, 5, 5, 0.6)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255, 215, 0, 0.15)",
      }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        {/* Logo - Left */}
  <Link href="/" className="group relative z-10" aria-label="Aradana Caters home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center gap-1"
            >
            {/* Logo Image */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 group-hover:scale-150 transition-transform duration-500">
              <img
                src="/logo.png"
                alt="Aradana Caters logo"
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>
            
            {/* Logo Text */}
            <h1 className="text-xl md:text-2xl font-bold tracking-tight font-[var(--font-playfair)]">
              <span className="text-white group-hover:text-aradana-gold transition-colors duration-300">
                Aradana
              </span>
            </h1>
            {/* Subtle radial glow behind logo */}
            <div className="absolute -inset-4 bg-gradient-radial from-aradana-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          </motion.div>
        </Link>

        {/* Navigation Links - Center (Absolutely positioned) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-10 lg:gap-12 absolute left-1/2 -translate-x-1/2"
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-2"
              >
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`text-sm md:text-base lg:text-lg font-medium tracking-[0.02em] transition-all duration-300 group-hover:-translate-y-0.5 inline-block font-[var(--font-playfair)] ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold to-aradana-amber"
                      : "text-[#d1d1d1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aradana-gold group-hover:to-aradana-amber"
                  }`}
                >
                  {link.name}
                </motion.span>

                {/* Animated underline - expands from center */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-aradana-gold to-aradana-amber transition-all duration-300 ease-in-out ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </motion.div>

        {/* CTA Button - Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-3 rounded-full font-semibold text-sm tracking-wider overflow-hidden group transition-all duration-300 text-aradana-dark font-[var(--font-inter)]"
              style={{
                background: "linear-gradient(90deg, #FFD700, #FFC870)",
              }}
            >
              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FFC870)",
                }}
              />
              
              <span className="relative z-10">Book Your Experience</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-10">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
