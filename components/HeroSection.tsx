"use client";

import React, { useEffect, useState } from "react";

interface Coin {
  id: number;
  left: string;
  top: string;
  delay: string;
}

export default function HeroSection() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    setCoins(
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${i * 0.25}s`,
      })),
    );
  }, []);

  return (
    <section
      id="games"
      className="relative min-h-screen overflow-hidden pt-28 bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
              The Ultimate <br />
              <span className="text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.6)]">
                Casino Platform
              </span>
            </h1>

            <p className="text-lg text-white/90 max-w-md">
              Experience the best in comfort and excitement with our premium
              casino gaming ecosystem.
            </p>

          <button
  className="flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-black
  bg-gradient-to-r from-green-500 to-green-600
  hover:from-green-600 hover:to-green-700
  shadow-[0_0_35px_rgba(34,197,94,0.8)]
  border border-green-500"
>
  Register Now
</button>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center items-center">
            <div className="relative max-w-md md:max-w-lg lg:max-w-xl">
              <img
                src="/right-heros.png"
                alt="Casino Preview"
                className="w-full h-auto object-contain
                drop-shadow-[0_0_60px_rgba(34,197,94,0.6)]"
              />

              <div className="absolute inset-0 -z-10 blur-3xl bg-green-500/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
