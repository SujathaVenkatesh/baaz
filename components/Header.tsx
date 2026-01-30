"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-b from-[#05070f]/90 via-[#05070f]/70 to-transparent
        backdrop-blur-md border-b border-green-500/10
        h-[84px] font-poppins
      "
    >
      <nav
        className="
          max-w-7xl mx-auto
          px-4 md:px-8 h-full
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/BAAZ Logo.png"
            alt="BAAZ Casino"
            width={110}
            height={42}
            className="drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            priority
          />
        </div>

        {/* LOGIN | REGISTER */}
        <div className="flex items-center gap-6 text-base md:text-lg">
          {/* LOGIN */}
          <button
            className="
              text-green-200 font-semibold
              hover:text-yellow-400
              transition-all duration-300
              relative
              after:absolute after:-bottom-1 after:left-0
              after:w-0 after:h-[2px] after:bg-yellow-400
              hover:after:w-full after:transition-all
            "
          >
            Login
          </button>

          <span className="text-green-500/40 text-lg">•</span>

          {/* REGISTER */}
          <button
            className="
              px-5 py-2 rounded-full
              font-bold text-black
              bg-gradient-to-r from-yellow-400 to-yellow-500
              hover:from-yellow-500 hover:to-yellow-600
              shadow-lg shadow-yellow-400/40
              transition-all duration-300
              hover:scale-110
            "
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
