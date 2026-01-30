"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      id="games"
      className="
        relative overflow-hidden font-poppins
        pt-24 sm:pt-28 md:pt-32
        min-h-[90vh] md:min-h-[100vh]
        bg-cover bg-center
      "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            items-center
            gap-10 md:gap-6
          "
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left">
            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-tight text-white
                drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]
              "
            >
              The Ultimate <br />
              <span className="drop-shadow-[0_0_22px_rgba(255,255,255,0.6)]">
                Casino Platform
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-md">
              Experience the best in comfort and excitement with our premium
              casino gaming ecosystem.
            </p>

            <button
              className="
                inline-flex items-center gap-3
                px-7 sm:px-9 py-3 sm:py-3.5
                rounded-xl font-bold text-black
                bg-gradient-to-r from-green-500 to-green-600
                hover:from-green-600 hover:to-green-700
                shadow-[0_0_28px_rgba(34,197,94,0.75)]
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
                w-[85%] sm:w-[70%]
                md:w-[520px] lg:w-[650px] xl:w-[750px]
                mt-6 md:mt-0
              "
            >
              <img
                src="/right-heros.png"
                alt="Casino Preview"
                className="
                  w-full h-auto object-contain
                  drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  drop-shadow-[0_0_90px_rgba(34,197,94,0.85)]
                  animate-float
                "
              />

              {/* GREEN GLOW */}
              <div
                className="
                  absolute inset-0 -z-10
                  blur-[100px]
                  bg-green-500/30
                  rounded-full
                "
              />

              {/* DEPTH SHADOW */}
              <div
                className="
                  absolute bottom-[-20px] left-1/2 -translate-x-1/2
                  w-[65%] h-[25px]
                  bg-black/60 blur-[25px]
                  rounded-full -z-20
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
