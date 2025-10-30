"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const AnimatedButton = ({
  children,
  onClick,
  className,
  type = "button",
}: AnimatedButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={cn(
        "book-demo-btn bg-[#FCFCFC] text-[#1A1A1A] rounded-[32px] border-none px-8 py-5 cursor-pointer font-medium transition-all duration-300 hover:bg-[#7AFF6B] hover:text-[#1A1A1A] hover:shadow-[0_0_20px_rgba(122,255,107,0.4)]",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;