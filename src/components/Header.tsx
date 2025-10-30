"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import nafLogo from "@/assets/naf-logo-animated.gif";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img src={nafLogo} alt="NAF Logo" className="h-12 w-auto" />

          {/* Menu Button */}
          <button
            className="flex items-center gap-2 bg-[#7AFF6B] text-black px-5 py-2 rounded-2xl font-medium shadow-md transition hover:scale-105"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            Menü
          </button>

          <div className="w-[120px]" />
        </div>
      </div>

      {/* Overlay + Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[50%] z-50"
            >
              {/* Main Menu Panel */}
              <div className="bg-[#7AFF6B] rounded-b-[40px] shadow-2xl pt-24 pb-8 px-8">
                {/* Language Selector */}
                <div className="absolute top-6 right-8">
                  <Select value={language} onValueChange={(v) => setLanguage(v as any)}>
                    <SelectTrigger className="w-[140px] bg-[#B8FF9E] border-none text-black rounded-xl h-12 font-medium">
                      <Globe className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="ar">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 text-white">
                  <a 
                    href="#home" 
                    onClick={() => setMenuOpen(false)} 
                    className="flex items-center gap-3 text-2xl font-normal hover:translate-x-2 transition-transform"
                  >
                    <ArrowRight className="w-6 h-6" />
                    Home
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setMenuOpen(false)} 
                    className="text-2xl font-normal hover:translate-x-2 transition-transform pl-9"
                  >
                    Products
                  </a>
                  <a 
                    href="#features" 
                    onClick={() => setMenuOpen(false)} 
                    className="text-2xl font-normal hover:translate-x-2 transition-transform pl-9"
                  >
                    Features
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => setMenuOpen(false)} 
                    className="text-2xl font-normal hover:translate-x-2 transition-transform pl-9"
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMenuOpen(false)} 
                    className="text-2xl font-normal hover:translate-x-2 transition-transform pl-9"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Bottom Menu Button */}
              <div className="flex justify-center -mt-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#7AFF6B] text-black px-8 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                >
                  <X className="w-5 h-5" />
                  Menü
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;