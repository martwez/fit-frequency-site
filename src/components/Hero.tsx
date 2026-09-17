export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 px-6"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, #f7d9cd 0%, transparent 45%), radial-gradient(circle at 80% 30%, #f3e3b8 0%, transparent 50%), linear-gradient(180deg, #fdf9f5 0%, #fbf3ec 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <img src={`${import.meta.env.BASE_URL}images/logo-icon.png`} alt="Fit Frequency Wellness" className="w-24 h-24 object-contain" />
        </div>
        <p className="uppercase tracking-[0.3em] text-xs text-[#bf8a72] mb-4">
          Mind &middot; Body &middot; Energy
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#4a4038] leading-tight mb-6">
          Strengthen Your Body.
          <br />
          Focus Your Mind.
          <br />
          Elevate Your Frequency <span className="text-[#cf9f4f]">&#9889;</span>
        </h1>
        <p className="text-[#6b5d4f] text-lg mb-10">
          Movement &middot; Meditation &middot; Sound &mdash; a small wellness practice
          based in California.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://www.instagram.com/fitfrequency.wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#c1725a] text-white tracking-wide hover:bg-[#8f5a44] transition-colors"
          >
            DM to Reserve Your Spot
          </a>
          <a
            href="#offerings"
            className="px-8 py-3 rounded-full border border-[#cf9f4f] text-[#c1725a] tracking-wide hover:bg-[#f7d9cd]/50 transition-colors"
          >
            Explore Offerings
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9]">
          <img
            src={`${import.meta.env.BASE_URL}images/photos/hero-mountains.jpg`}
            alt="Golden hour over the California mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(74,64,56,0.55) 0%, transparent 45%)' }}
          />
          <p className="absolute bottom-5 left-6 text-white font-serif text-lg sm:text-xl italic">
            Every session begins where the trail meets the sky.
          </p>
        </div>
      </div>
    </section>
  )
}
