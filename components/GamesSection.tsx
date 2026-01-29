'use client';

import React from 'react';

interface GameCard {
  id: number;
  name: string;
  icon: string;
  image: string;
  color: string;
  glowColor: string;
}

export default function GamesSection() {
  const games: GameCard[] = [
    {
      id: 1,
      name: 'MINES',
      icon: '💣',
      image: '/games/mines.jpg',
      color: 'from-orange-600 to-red-700',
      glowColor: 'shadow-orange-500/60',
    },
    {
      id: 2,
      name: 'POKER',
      icon: '♠️',
      image: '/games/poker.jpg',
      color: 'from-amber-600 to-amber-700',
      glowColor: 'shadow-amber-500/60',
    },
    {
      id: 3,
      name: 'COIN FLIP',
      icon: '🪙',
      image: '/games/coinflip.jpg',
      color: 'from-teal-600 to-teal-700',
      glowColor: 'shadow-teal-500/60',
    },
    {
      id: 4,
      name: 'LUCKY WHEEL',
      icon: '🎡',
      image: '/games/luckywheel.jpg',
      color: 'from-green-600 to-green-700',
      glowColor: 'shadow-green-500/60',
    },
    {
      id: 9,
      name: 'ROULETTE',
      icon: '🎯',
      image: '/games/roulette.jpg',
      color: 'from-red-600 to-red-700',
      glowColor: 'shadow-red-500/60',
    },
    {
      id: 10,
      name: 'SLOTS',
      icon: '🎰',
      image: '/games/slots.jpg',
      color: 'from-yellow-600 to-yellow-700',
      glowColor: 'shadow-yellow-500/60',
    },
    {
      id: 11,
      name: 'KENO',
      icon: '🎲',
      image: '/games/keno.jpg',
      color: 'from-indigo-600 to-indigo-700',
      glowColor: 'shadow-indigo-500/60',
    },
    {
      id: 12,
      name: 'PLINKO',
      icon: '⭕',
      image: '/games/plinko.jpg',
      color: 'from-cyan-600 to-cyan-700',
      glowColor: 'shadow-cyan-500/60',
    },
  ];

  return (
      <section
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat font-poppins "
      style={{
        backgroundImage: "url('/twobanner.jpeg')", 
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            ◆◆ <span className="text-green-400">Top Casino Games</span> ◆◆
          </h2>
          <p className="mt-4 text-green-200/70 max-w-xl mx-auto">
            Play the most popular casino games with high rewards and real-time excitement.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {games.map((game, index) => (
            <div
              key={game.id}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`p-1 rounded-3xl bg-gradient-to-br ${game.color}
                ${game.glowColor}
                transition-all duration-500
                group-hover:scale-105`}
              >
                <div className="bg-black rounded-3xl overflow-hidden">

                  {/* Image */}
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col items-center gap-3">
                    <div className="text-5xl">{game.icon}</div>
                    <h3 className="text-lg font-bold tracking-widest text-green-400">
                      {game.name}
                    </h3>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button className="px-12 py-4 rounded-xl font-bold text-black
            bg-gradient-to-r from-green-500 to-green-600
            hover:from-green-600 hover:to-green-700
            shadow-[0_0_35px_rgba(34,197,94,0.8)]">
            View All Games
          </button>
        </div>

      </div>
    </section>
  );
}
