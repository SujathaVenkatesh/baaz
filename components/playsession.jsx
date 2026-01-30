"use client";

import React from "react";

export default function PromoSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 font-poppins">

      {/* Background Image */}
      <img
        src="/twobanner.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full"
      />

           <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#E6F5E6] leading-tight">
          Buy ticket and get million
          <br />
          <span className="text-[#00ff88]">dollars for a click</span>
        </h2>

        <div className="mt-10">
          <button
            className="
              px-10 py-4 rounded-xl font-bold text-[#002000]
              bg-gradient-to-r from-[#00ff88] to-[#00cc66]
              shadow-[0_0_40px_rgba(0,255,136,0.8)]
              hover:scale-105 transition-transform
            "
          >
            PLAY NOW
          </button>
        </div>
      </div>
    </section>
  );
}
