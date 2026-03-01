"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { ChevronLeft, Menu, X } from "lucide-react";

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
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const isHome = pathname === "/";

  const handleBack = () => {
    if (!isHome) {
      router.back();
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "h-[70px] md:h-[85px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "h-[90px] md:h-[110px] shadow-none"
      }`}
      style={{
        zIndex: 100,
        backgroundColor: scrolled || isMenuOpen ? "rgba(5, 5, 5, 0.98)" : "rgba(5, 5, 5, 0.85)",
        borderBottom: scrolled || isMenuOpen ? "1px solid rgba(255, 215, 0, 0.2)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
        <div className="flex items-center gap-3">
          {/* Back Button - Mobile Only, Not on Home */}
          {!isHome && (
            <button 
              onClick={handleBack}
              className="md:hidden text-white flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 active:scale-95 transition-all group"
              aria-label="Go back"
            >
              <ChevronLeft className="w-8 h-8 group-hover:text-aradana-gold transition-colors" />
            </button>
          )}

          {/* Logo - Left */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="group relative z-10" aria-label="Aradana Caters home">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center gap-1"
            >
              <div className="relative w-12 h-12 md:w-32 md:h-32 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="Aradana Caters logo"
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              
              <h1 className="text-xl md:text-2xl font-bold tracking-tight font-[var(--font-playfair)]">
                <span className="text-white group-hover:text-aradana-gold transition-colors duration-300">
                  Aradana
                </span>
              </h1>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative group py-2"
              >
                <span className={`text-sm md:text-base lg:text-lg font-medium tracking-[0.02em] transition-all duration-300 group-hover:-translate-y-0.5 inline-block font-[var(--font-playfair)] ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-aradana-gold to-aradana-amber"
                    : "text-[#d1d1d1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aradana-gold group-hover:to-aradana-amber"
                }`}>
                  {link.name}
                </span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-aradana-gold to-aradana-amber transition-all duration-300 ease-in-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-3 rounded-full font-semibold text-sm tracking-wider overflow-hidden group transition-all duration-300 text-aradana-dark font-[var(--font-inter)]"
              style={{ background: "linear-gradient(90deg, #FFD700, #FFC870)" }}
            >
              <span className="relative z-10">Book Your Experience</span>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white p-2 flex items-center justify-center active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-10 h-10 text-aradana-gold" /> : <Menu className="w-10 h-10" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-aradana-dark z-[90] md:hidden flex flex-col"
            style={{ height: '100vh', width: '100vw' }}
          >
            {/* Overlay Header Spacer */}
            <div className={`transition-all duration-500 ${scrolled ? 'h-[70px]' : 'h-[90px]'}`} />
            
            <div className="flex flex-col items-center justify-center flex-grow py-10 gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl font-bold transition-all font-[var(--font-playfair)] tracking-wide py-2 inline-block active:scale-95 ${
                      pathname === link.href ? "text-aradana-gold" : "text-white hover:text-aradana-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navLinks.length * 0.1 + 0.3 }}
                className="mt-10"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="px-12 py-4 rounded-full font-bold text-xl text-aradana-dark bg-gradient-to-r from-aradana-gold to-aradana-amber shadow-[0_10px_40px_rgba(255,215,0,0.3)] active:scale-95 transition-all">
                    Book Your Experience
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="pb-10 flex flex-col items-center opacity-30 text-[10px] tracking-[0.2em] uppercase">
              <span className="mb-2 text-white">Aradana Caters</span>
              <div className="w-12 h-px bg-aradana-gold/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
