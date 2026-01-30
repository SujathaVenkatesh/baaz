"use client";

import React from "react";
import { motion } from "framer-motion";

interface GameCard {
  id: number;
  name: string;
  icon: string;
  image: string;
}

export default function GamesSection() {
  const games: GameCard[] = [
    { id: 1, name: "MINES", icon: "💣", image: "/games/mines.jpg" },
    { id: 2, name: "POKER", icon: "♠️", image: "/games/poker.jpg" },
    { id: 3, name: "COIN FLIP", icon: "🪙", image: "/games/coinflip.jpg" },
    { id: 4, name: "LUCKY WHEEL", icon: "🎡", image: "/games/luckywheel.jpg" },
    { id: 5, name: "ROULETTE", icon: "🎯", image: "/games/roulette.jpg" },
    { id: 6, name: "SLOTS", icon: "🎰", image: "/games/slots.jpg" },
    { id: 7, name: "KENO", icon: "🎲", image: "/games/keno.jpg" },
    { id: 8, name: "PLINKO", icon: "⭕", image: "/games/plinko.jpg" },
    { id: 9, name: "BLACKJACK", icon: "🃏", image: "/games/blackjack.jpg" },
    { id: 10, name: "BACCARAT", icon: "👑", image: "/games/baccarat.jpg" },
    { id: 11, name: "CRAPS", icon: "🎲", image: "/games/craps.jpg" },
    { id: 12, name: "VIDEO POKER", icon: "📺", image: "/games/videopoker.jpg" },
    { id: 13, name: "SCRATCH CARDS", icon: "🎫", image: "/games/scratch.jpg" },
    { id: 14, name: "BINGO", icon: "🅱️", image: "/games/bingo.jpg" },
    { id: 15, name: "DICE ROLL", icon: "🎲", image: "/games/dice.jpg" },
    { id: 16, name: "WHEEL OF FORTUNE", icon: "🎪", image: "/games/wheeloffortune.jpg" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/twobanner.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Top <span className="text-green-400">Casino Games</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Simple, fast and exciting games to boost your winning experience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={card}
              whileHover={{
                y: -12,
                rotateX: 6,
                rotateY: -6,
                scale: 1.05,
              }}
              className="
                group relative rounded-2xl
                bg-white/10 backdrop-blur
                border border-white/15
                overflow-hidden
                cursor-pointer
                transition-all
                shadow-[0_0_0_rgba(34,197,94,0)]
                hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]
              "
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <motion.img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-2"
                >
                  {game.icon}
                </motion.div>
                <h3 className="text-sm font-bold tracking-widest text-green-400">
                  {game.name}
                </h3>
              </div>

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 rounded-2xl border border-green-400/40 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-12 py-4 rounded-xl font-bold text-black
              bg-green-500 hover:bg-green-600
              shadow-[0_0_40px_rgba(34,197,94,0.8)]
            "
          >
            View All Games
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
