'use client';

import React, { useEffect, useState } from 'react';

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
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070f] pt-28">

      {/* ================= BACKGROUND ENERGY ================= */}
      <div className="absolute inset-0">

        {/* Green energy swirl */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_55%)]" />

        {/* Neon rings */}
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/30 blur-sm" />
        <div className="absolute left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/20 blur-sm" />

        {/* Floating coins */}
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="absolute w-12 h-12 md:w-20 md:h-20 animate-float"
            style={{
              left: coin.left,
              top: coin.top,
              animationDelay: coin.delay,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-[0_0_25px_rgba(250,204,21,0.9)]" />
          </div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">

          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8">

            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-100 leading-tight">
              The Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                Casino Platform
              </span>
            </h1>

            <p className="text-lg text-green-200/80 max-w-md">
              Experience the best in comfort and excitement with our premium
              casino gaming ecosystem.
            </p>

            <button
              className="px-10 py-4 rounded-xl font-bold text-black
              bg-gradient-to-r from-yellow-400 to-yellow-500
              hover:from-yellow-500 hover:to-yellow-600
              shadow-[0_0_35px_rgba(250,204,21,0.8)]
              border border-yellow-300"
            >
              Register Now
            </button>
          </div>

          {/* RIGHT SIDE DEVICES */}
          <div className="relative flex justify-center">

            {/* Laptop */}
            <div
              className="relative w-[420px] h-[260px] md:w-[520px] md:h-[320px]
              rounded-3xl bg-gradient-to-b from-[#0f172a] to-black
              border-8 border-green-500/30
              shadow-[0_0_60px_rgba(34,197,94,0.6)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-black/80" />
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gray-700 rounded-full" />
            </div>

            {/* Mobile */}
            <div
              className="absolute -bottom-16 -right-10 w-[160px] h-[300px]
              rounded-3xl bg-gradient-to-b from-[#0f172a] to-black
              border-4 border-green-500/30
              shadow-[0_0_40px_rgba(34,197,94,0.5)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-black/80" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
