'use client';

import React from 'react';

interface GameCard {
  id: number;
  name: string;
  icon: string;
  image: string;
}

export default function GamesSection() {
  const games: GameCard[] = [
    { id: 1, name: 'MINES', icon: '💣', image: '/games/mines.jpg' },
    { id: 2, name: 'POKER', icon: '♠️', image: '/games/poker.jpg' },
    { id: 3, name: 'COIN FLIP', icon: '🪙', image: '/games/coinflip.jpg' },
    { id: 4, name: 'LUCKY WHEEL', icon: '🎡', image: '/games/luckywheel.jpg' },
    { id: 5, name: 'ROULETTE', icon: '🎯', image: '/games/roulette.jpg' },
    { id: 6, name: 'SLOTS', icon: '🎰', image: '/games/slots.jpg' },
    { id: 7, name: 'KENO', icon: '🎲', image: '/games/keno.jpg' },
    { id: 8, name: 'PLINKO', icon: '⭕', image: '/games/plinko.jpg' },
    { id: 9, name: 'BLACKJACK', icon: '🃏', image: '/games/blackjack.jpg' },
    { id: 10, name: 'BACCARAT', icon: '👑', image: '/games/baccarat.jpg' },
    { id: 11, name: 'CRAPS', icon: '🎲', image: '/games/craps.jpg' },
    { id: 12, name: 'VIDEO POKER', icon: '📺', image: '/games/videopoker.jpg' },
    { id: 13, name: 'SCRATCH CARDS', icon: '🎫', image: '/games/scratch.jpg' },
    { id: 14, name: 'BINGO', icon: '🅱️', image: '/games/bingo.jpg' },
    { id: 15, name: 'DICE ROLL', icon: '🎲', image: '/games/dice.jpg' },
    { id: 16, name: 'WHEEL OF FORTUNE', icon: '🎪', image: '/games/wheeloffortune.jpg' },
  ];

  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('/twobanner.jpeg')" }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Top <span className="text-green-400">Casino Games</span>
          </h2>
          <p className="mt-4 text-green-200/70 max-w-xl mx-auto">
            Simple, fast and exciting games to boost your winning experience.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-2xl bg-black/70 border border-white/10
              overflow-hidden transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <div className="text-4xl mb-2">{game.icon}</div>
                <h3 className="text-sm font-bold tracking-widest text-green-400">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <button
            className="px-12 py-4 rounded-xl font-bold text-black
            bg-green-500 hover:bg-green-600
            transition-all shadow-lg"
          >
            View All Games
          </button>
        </div>

      </div>
    </section>
  );
}
