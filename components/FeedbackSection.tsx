import React from 'react';

export default function FeedbackSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0a0e27] via-[#1a1f40] to-[#0a0e27] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top center green glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-green-500/25 via-green-500/10 to-transparent blur-3xl pointer-events-none" />
        
        {/* Left side glow */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl" />
        
        {/* Right side glow */}
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl" />
        
        {/* Bottom glow wave */}
        <div className="absolute -bottom-32 left-0 right-0 h-96 bg-gradient-to-t from-green-500/20 via-green-500/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-primary">─</span> Client Feedback <span className="text-primary">─</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-2xl font-bold text-white">
              Experience the fall scope of
              <br />
              of our casino platform's capabilities
              <br />
              by requesting a personalized demo.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg border-2 border-green-400 hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-500/50 w-fit">
              Request Now
            </button>
          </div>

          {/* Right content - Device mockups */}
          <div className="relative h-96 md:h-full md:min-h-[500px] flex items-center justify-center">
            {/* Laptop mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Laptop frame */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-56 md:w-full md:h-full rounded-3xl bg-gradient-to-b from-gray-900 to-gray-950 border-8 border-gray-800 shadow-2xl shadow-green-500/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-black relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-black" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gray-700 rounded-full" />
                </div>

                {/* Phone mockup - smaller */}
                <div className="absolute -bottom-4 -right-8 md:-bottom-12 md:-right-16 w-32 md:w-48 h-56 md:h-80 rounded-3xl bg-gradient-to-b from-gray-900 to-gray-950 border-4 border-gray-800 shadow-2xl shadow-green-500/20 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-black relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-black" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
