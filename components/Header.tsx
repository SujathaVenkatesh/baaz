"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#05070f]/95 via-[#05070f]/85 to-transparent backdrop-blur-md border-b border-green-500/20 font-poppins">
      <nav className="max-w-7xl mx-auto px-4 md:px-8  flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/BAAZ Logo.png"
            alt="BAAZ Casino"
            width={120}
            height={50}
            className="drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-green-200 hover:text-yellow-400 transition text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#games"
            className="text-green-200 hover:text-yellow-400 transition text-sm font-medium"
          >
            Games
          </a>

          <a
            href="#"
            className="text-green-200 hover:text-yellow-400 transition text-sm font-medium"
          >
            About Us
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-green-200 hover:text-yellow-400 transition text-sm font-medium">
            Demo
          </button>
          <button className="text-green-200 hover:text-yellow-400 transition text-sm font-medium">
            Admin Panel
          </button>
          <button
            className="px-6 py-2 rounded-full font-semibold text-sm
            bg-gradient-to-r from-yellow-400 to-yellow-500
            text-black
            hover:from-yellow-500 hover:to-yellow-600
            shadow-lg shadow-yellow-400/40 border border-yellow-300"
          >
            Try Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-green-200 hover:text-yellow-400 transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
