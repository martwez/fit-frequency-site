export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fdf9f5]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="uppercase tracking-[0.3em] text-xs text-[#bf8a72] mb-4">About</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#4a4038] mb-6">
            A practice built on movement, stillness, and sound
          </h2>
          <p className="text-[#6b5d4f] leading-relaxed text-lg">
            Fit Frequency Wellness is a founder-led wellness practice for people who want more than
            a workout &mdash; a rhythm. Every session blends functional movement, guided
            meditation, and sound to help you strengthen your body, focus your mind, and
            come back into balance. No big-box gym energy, just intentional, personal
            coaching &mdash; outdoors, in studio, or wherever the frequency takes us.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[2/3]">
          <img
            src={`${import.meta.env.BASE_URL}images/photos/about-hiking.jpg`}
            alt="Walking a mountain trail at sunset"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
