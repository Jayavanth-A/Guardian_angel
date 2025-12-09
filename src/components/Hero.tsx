import SoundWaves from './SoundWaves';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A] via-[#2563EB] to-[#1E293B]" />

      <SoundWaves />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Discover
          <br />
          Your Safety
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A modern safety app that helps you stay connected and protected by alerting your trusted contacts.
        </p>

        <a href="#how-it-works" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-12 py-5 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
          Get Started
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
