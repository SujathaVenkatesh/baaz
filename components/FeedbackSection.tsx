import React from 'react';
import { UserPlus, Wallet, Gamepad2 } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-black font-poppins"
      style={{
        backgroundImage: "url('/hero-bg.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Green glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-green-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E6C15A] drop-shadow-[0_0_14px_rgba(230,193,90,0.6)]">
            How It Works
          </h2>
          <p className="mt-4 text-white/70">
            Start playing in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20">

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px]
            bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 rounded-full flex items-center justify-center
              bg-green-500/10
              shadow-[0_0_35px_rgba(34,197,94,0.7)] mb-6">
              <UserPlus className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-[#E6C15A] mb-2">
              Register Account
            </h3>
            <p className="text-white/70 text-sm">
              Create your secure account and access the casino platform instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 rounded-full flex items-center justify-center
              bg-green-500/10
              shadow-[0_0_35px_rgba(34,197,94,0.7)] mb-6">
              <Wallet className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-[#E6C15A] mb-2">
              Add Balance
            </h3>
            <p className="text-white/70 text-sm">
              Deposit funds safely using trusted and fast payment methods.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center max-w-xs">
            <div className="w-24 h-24 rounded-full flex items-center justify-center
              bg-green-500/10
              shadow-[0_0_35px_rgba(34,197,94,0.7)] mb-6">
              <Gamepad2 className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-[#E6C15A] mb-2">
              Choose Game
            </h3>
            <p className="text-white/70 text-sm">
              Select your favorite game and start winning real rewards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
