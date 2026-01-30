"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 
      bg-gradient-to-b from-[#05070f]/90 via-[#05070f]/70 to-transparent
      backdrop-blur-md border-b border-green-500/10
      h-[80px] font-poppins">

      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-full
        flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/BAAZ Logo.png"
            alt="BAAZ Casino"
            width={105}
            height={40}
            className="drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            priority
          />
        </div>

        {/* Login | Register */}
        <div className="flex items-center gap-5 text-sm">

          {/* Login */}
          <button className="
            text-green-200 font-medium
            hover:text-yellow-400
            transition-all duration-300
            relative after:absolute after:-bottom-1 after:left-0
            after:w-0 after:h-[1px] after:bg-yellow-400
            hover:after:w-full after:transition-all">
            Login
          </button>

          <span className="text-green-500/30">•</span>

          {/* Register */}
          <button className="
            px-4 py-1.5 rounded-full
            font-semibold text-black
            bg-gradient-to-r from-yellow-400 to-yellow-500
            hover:from-yellow-500 hover:to-yellow-600
            shadow-md shadow-yellow-400/30
            transition-all duration-300
            hover:scale-105">
            Register
          </button>

        </div>

      </nav>
    </header>
  );
}
