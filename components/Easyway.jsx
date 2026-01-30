"use client";

import React from "react";

export default function Easyway() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/drop.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HERO GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <p className="text-emerald-400 font-semibold mb-3 tracking-wide">
              🔥 Drops & Wins (Live Casino)
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Easy Way For <br />
              <span className="text-emerald-400">Crypto Play</span>
            </h1>

            <h2 className="mt-6 text-3xl font-extrabold text-emerald-400 drop-shadow">
              €500,000
            </h2>

            <p className="mt-2 text-sm text-emerald-200/70">
              Finishes in <span className="font-medium">3 Days : 13 Hrs : 3 Mins</span>
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end md:-translate-x-16 transition-transform duration-300">

            <div
              className="w-full max-w-[330px] rounded-3xl p-1
              bg-gradient-to-br from-emerald-500 to-emerald-700
              shadow-[0_0_40px_rgba(16,185,129,0.7)]"
            >
              <div className="rounded-3xl bg-black/80 backdrop-blur p-6 overflow-hidden">

                <h3 className="mb-5 text-center font-bold text-emerald-400 text-base">
                  Deposit & Play
                </h3>

                {/* Input Row */}
                <div className="flex gap-2">
                 <input
  placeholder="0.001"
  className="w-[180px] px-3 py-2 rounded-lg bg-black text-emerald-400 border border-emerald-500 outline-none"
/>

                  <select className="px-3 py-2 rounded-lg bg-black text-emerald-400 border border-emerald-500 outline-none -translate-x- -2">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                  </select>
                </div>

                {/* CTA */}
                <button
                  className="mt-6 w-full py-2.5 rounded-full font-bold text-black
                  bg-gradient-to-r from-emerald-400 to-emerald-600
                  hover:from-emerald-500 hover:to-emerald-700
                  shadow-[0_0_25px_rgba(16,185,129,0.8)]
                  transition-all hover:scale-[1.03]"
                >
                  START PLAYING →
                </button>

                {/* Terms */}
                <p className="mt-4 text-[11px] text-center text-emerald-200/70 leading-relaxed">
                  By clicking you agree with our <br />
                  <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">
                    Terms & Conditions
                  </span>{" "}
                  &{" "}
                  <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">
                    Privacy Policy
                  </span>
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
