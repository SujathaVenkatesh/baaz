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
      icon: '⚱️',
      image: '/games/mines.jpg',
      color: 'from-orange-600 to-red-700',
      glowColor: 'shadow-orange-500/50',
    },
    {
      id: 2,
      name: 'POKER',
      icon: '♠️',
      image: '/games/poker.jpg',
      color: 'from-amber-600 to-amber-700',
      glowColor: 'shadow-amber-500/50',
    },
    {
      id: 3,
      name: 'COIN FLIP',
      icon: '🪙',
      image: '/games/coinflip.jpg',
      color: 'from-teal-600 to-teal-700',
      glowColor: 'shadow-teal-500/50',
    },
    {
      id: 4,
      name: 'LUCKY WHEEL',
      icon: '🎡',
      image: '/games/luckywheel.jpg',
      color: 'from-green-600 to-green-700',
      glowColor: 'shadow-green-500/50',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#050810] via-[#0f1820] to-[#050810] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top center green glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-green-500/25 via-green-500/10 to-transparent blur-3xl pointer-events-none" />
        
        {/* Left side glow */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl" />
        
        {/* Right side glow */}
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl" />
        
        {/* Bottom glow wave */}
        <div className="absolute -bottom-32 left-0 right-0 h-96 bg-gradient-to-t from-green-500/20 via-green-500/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">◆◆</span> Top Casino Games <span className="text-primary">◆◆</span>
          </h2>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="group cursor-pointer"
            >
              {/* Card outer border */}
              <div className={`bg-gradient-to-br ${game.color} p-1 rounded-3xl shadow-2xl ${game.glowColor} transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 group-hover:shadow-yellow-400/60 overflow-hidden`}>
                {/* Card inner */}
                <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-3xl h-full flex flex-col overflow-hidden">
                  {/* Game Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={game.image || "/placeholder.svg"} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                  </div>

                  {/* Content area */}
                  <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-3">
                    {/* Icon */}
                    <div className="text-5xl md:text-6xl filter drop-shadow-xl">
                      {game.icon}
                    </div>

                    {/* Game name */}
                    <h3 className="text-lg font-bold text-primary text-center tracking-widest">{game.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Games Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg border-2 border-green-400 hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-500/50">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
}
