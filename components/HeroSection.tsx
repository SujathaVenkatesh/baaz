"use client";

import React, { useEffect, useState } from "react";

export default function HeroSection() {
  return (
    <section
      id="games"
      className="
        relative overflow-hidden
        pt-20 md:pt-24
        bg-cover bg-center font-poppins
      "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className="
            grid md:grid-cols-2
            gap-8 md:gap-10
            items-center
            min-h-[520px] md:min-h-[600px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1
              className="
                text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-tight text-white
              "
            >
              The Ultimate <br />
              <span className="text-green-400">
                Casino Platform
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/85 max-w-md">
              Experience the best in comfort and excitement with our premium
              casino gaming ecosystem.
            </p>

            <button
              className="
                inline-flex items-center gap-3
                px-9 py-3.5 rounded-xl
                font-bold text-black
                bg-gradient-to-r from-green-500 to-green-600
                hover:from-green-600 hover:to-green-700
                shadow-[0_0_28px_rgba(34,197,94,0.75)]
                border border-green-500
                transition-transform hover:scale-[1.03]
              "
            >
              Register Now
            </button>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="
                relative
                w-[95%]
                md:w-[520px]
                lg:w-[600px]
                xl:w-[650px]
                md:translate-x-6
                rounded-3xl
                overflow-hidden
                border border-white/10
                shadow-2xl
              "
            >
              <video
                src="/casinobanner.mp4" 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Soft green glow */}
              <div
                className="
                  absolute inset-0 -z-10
                  blur-[90px]
                  bg-green-500/30
                  rounded-full
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
