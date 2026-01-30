"use client";

import React from "react";

export default function Easyway() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/drop.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* HERO GRID */}
        <div className="min-h-screen grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <p className="text-green-400 font-semibold mb-4 tracking-wide">
              🔥 Drops & Wins (Live Casino)
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Easy Way For <br />
              <span className="text-green-400">Crypto Play</span>
            </h1>

            <h2 className="mt-8 text-4xl font-extrabold text-green-400 drop-shadow">
              €500,000
            </h2>

            <p className="mt-3 text-sm text-green-200/70">
              Finishes in <span className="font-medium">3 Days : 13 Hrs : 3 Mins</span>
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">

            <div
              className="w-full max-w-[360px] rounded-3xl p-1
              bg-gradient-to-br from-green-500 to-green-700
              shadow-[0_0_40px_rgba(34,197,94,0.6)]"
            >
              <div className="rounded-3xl bg-black/80 backdrop-blur p-7">

                <h3 className="mb-6 text-center font-bold text-green-400 text-lg">
                  Deposit & Play
                </h3>

                {/* Input Row */}
                <div className="flex gap-3">
                  <input
                    placeholder="0.001"
                    className="flex-1 px-4 py-3 rounded-lg text-black outline-none"
                  />

                  <select className="px-4 py-3 rounded-lg text-black outline-none">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                  </select>
                </div>

                {/* CTA */}
                <button
                  className="mt-7 w-full py-3 rounded-full font-bold text-black
                  bg-gradient-to-r from-green-400 to-green-600
                  hover:from-green-500 hover:to-green-700
                  shadow-[0_0_25px_rgba(34,197,94,0.7)]
                  transition-all hover:scale-[1.02]"
                >
                  START PLAYING →
                </button>

                {/* Terms */}
                <p className="mt-5 text-xs text-center text-green-200/70 leading-relaxed">
                  By clicking you agree with our <br />
                  <span className="text-green-400 cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  &{" "}
                  <span className="text-green-400 cursor-pointer">
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
