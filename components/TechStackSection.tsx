import React from "react";

interface Feature {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export default function CasinoFeaturesSection() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Live Casino Games",
      subtitle: "Real dealers & real-time action",
      icon: "🎥",
    },
    {
      id: 2,
      title: "Provably Fair Play",
      subtitle: "100% transparent game results",
      icon: "🎲",
    },
    {
      id: 3,
      title: "Instant Withdrawals",
      subtitle: "Fast & secure payouts",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Secure Wallet",
      subtitle: "Advanced encryption protection",
      icon: "🔐",
    },
    {
      id: 5,
      title: "Mobile Gaming",
      subtitle: "Play anytime, anywhere",
      icon: "📱",
    },
    {
      id: 6,
      title: "24/7 VIP Support",
      subtitle: "Dedicated player assistance",
      icon: "💬",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#050810] via-[#0b151d] to-[#050810] overflow-hidden">
      
      {/* Background casino glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-96 bg-green-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 -right-48 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Ultimate Casino Experience
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Enjoy premium casino gaming with world-class security, fairness,
            and lightning-fast payouts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="group relative bg-black/60 border border-green-500/20 rounded-2xl p-8 hover:border-green-500 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-opacity" />

              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-green-400">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          {[
            { value: "99.9%", label: "Fair Play" },
            { value: "₹10Cr+", label: "Paid Out" },
            { value: "500+", label: "Daily Winners" },
            { value: "24/7", label: "Live Support" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-green-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-xs border-t border-green-500/20 pt-8 mt-16">
        © 2024 B.A.Z Casino. Play Responsibly.
      </div>
    </section>
  );
}
