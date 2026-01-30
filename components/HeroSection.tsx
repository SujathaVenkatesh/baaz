"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      id="games"
      className="
        relative overflow-hidden font-poppins
        md:pt-32
        md:min-h-screen
        "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            items-center
            gap-8 md:gap-6
          "
        >
          {/* LEFT CONTENT */}
          <div className="space-y-5 sm:space-y-6 text-left">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-tight text-white
              "
            >
              The Ultimate <br />
              <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                Casino Platform
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-md">
              Experience the best in comfort and excitement with our premium
              casino gaming ecosystem.
            </p>

            <button
              className="
                inline-flex items-center
                px-7 sm:px-9 py-3 sm:py-3.5
                rounded-xl font-bold text-black
                bg-gradient-to-r from-green-500 to-green-600
                hover:from-green-600 hover:to-green-700
                shadow-[0_0_24px_rgba(34,197,94,0.7)]
                border border-green-500
                transition-transform hover:scale-[1.05]
              "
            >
              Register Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div
              className="
                relative
                w-[75%] sm:w-[60%]
                md:w-[520px] lg:w-[650px]
                mt-4 md:mt-0
              "
            >
              <img
                src="/right-heros.png"
                alt="Casino Preview"
                className="w-full h-auto object-contain"
              />

              {/* GREEN GLOW */}
              <div className="absolute inset-0 -z-10 blur-[80px] bg-green-500/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
