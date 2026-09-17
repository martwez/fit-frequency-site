import LotusMark from './LotusMark'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-28 px-6"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, #f6e2df 0%, transparent 45%), radial-gradient(circle at 80% 30%, #dde8d3 0%, transparent 50%), linear-gradient(180deg, #fdf9f5 0%, #fbf3ec 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6 text-[#c9a75c]">
          <LotusMark className="w-16 h-16" />
        </div>
        <p className="uppercase tracking-[0.3em] text-xs text-[#a4876a] mb-4">
          Mind &middot; Body &middot; Energy
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#4a4038] leading-tight mb-6">
          Strengthen Your Body.
          <br />
          Focus Your Mind.
          <br />
          Elevate Your Frequency <span className="text-[#c9a75c]">&#9889;</span>
        </h1>
        <p className="text-[#6b5d4f] text-lg mb-10">
          Movement &middot; Meditation &middot; Sound &mdash; a small wellness practice
          based in California.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/fitfrequency.wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#8a6f52] text-white tracking-wide hover:bg-[#6f5840] transition-colors"
          >
            DM to Reserve Your Spot
          </a>
          <a
            href="#offerings"
            className="px-8 py-3 rounded-full border border-[#c9a75c] text-[#8a6f52] tracking-wide hover:bg-[#f6e2df]/50 transition-colors"
          >
            Explore Offerings
          </a>
        </div>
      </div>
    </section>
  )
}
