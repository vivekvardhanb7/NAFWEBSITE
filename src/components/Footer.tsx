"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#FF7750] text-white overflow-hidden font-inter">
      {/* Large decorative circle */}
      <div
        className="absolute -bottom-64 -right-64 w-[800px] h-[800px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(15 100% 50%) 0%, hsl(6 100% 60%) 100%)",
        }}
      />

      {/* Top Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="font-jakarta font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Got a Project? <br />
            Want to Collaborate?
          </h2>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-transparent border border-white text-white font-medium hover:bg-white hover:text-[#FF7750] transition"
          >
            GET IN TOUCH
          </a>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-sm leading-relaxed">
            <p className="font-medium mb-1">Contact</p>
            <p>info@naf-halsbach.de</p>
            <p>0152 — 28387141 (Odette Lamkhizni)</p>
            <p>0162 — 1638005 (Technischer Support 24/7)</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-5">
          <p className="text-lg font-semibold">
            We deliver innovative Vending with seamless tech and design.
            Subscribe to learn how.
          </p>

          {/* Email form */}
          <form className="space-y-3">
            <label className="block text-sm font-semibold">E-Mail*</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md text-black outline-none"
              placeholder="Enter your email"
            />
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <p>
                Ich stimme zu, weitere Benachrichtigungen von New Age of Food zu
                erhalten.*
              </p>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#FF7750] rounded-md font-semibold hover:bg-opacity-90"
            >
              Abonnieren
            </button>
          </form>

          {/* Address */}
          <div>
            <p className="font-medium mb-1">Address</p>
            <p>Obere Straße 3, 09599 Freiberg, OT Halsbach</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/European_Union_logo.svg"
              alt="EU Funding"
              className="mt-3 w-48 bg-white p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Scrolling background text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <motion.div
          className="whitespace-nowrap font-jakarta font-bold text-[14vw] md:text-[10vw] uppercase opacity-[0.15] leading-none"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          LET’S WORK TOGETHER • LET’S WORK TOGETHER • LET’S WORK TOGETHER •
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-12 border-t border-white/30 py-4 text-center text-sm">
        <p>
          © Copyright 2025. All rights reserved.{" "}
          <a href="#" className="underline mx-2">
            Imprint
          </a>
          |
          <a href="#" className="underline mx-2">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
