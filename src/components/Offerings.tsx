const offerings = [
  {
    title: 'Movement',
    image: 'offer-movement.jpg',
    alt: 'Outdoor yoga stretch overlooking snow-capped mountains',
    description:
      'Functional strength, mobility, and outdoor training built around how your body actually moves through life.',
    icon: (
      <path
        d="M12 3a2 2 0 100 4 2 2 0 000-4zM7 21l2-6 2 2 3-1 3 5M9 15l1-5 4-1 3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Meditation',
    image: 'offer-meditation.jpg',
    alt: 'Sitting in stillness facing a red rock desert sunrise',
    description:
      'Guided stillness practices that quiet the noise and bring your focus back to what matters.',
    icon: (
      <path
        d="M12 4v2M12 18v2M4 12h2M18 12h2M7 7a7 7 0 0110 10M8 16a5 5 0 108-8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Sound',
    image: 'offer-sound.jpg',
    alt: 'Hands playing a brass singing bowl',
    description:
      'Sound healing and frequency work that resets the nervous system and deepens recovery.',
    icon: (
      <path
        d="M9 18V6l9-2v12M9 18a3 3 0 11-6 0 3 3 0 016 0zM18 16a3 3 0 11-6 0 3 3 0 016 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="py-24 px-6 bg-[#f8f1e9]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-[#bf8a72] mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#4a4038]">
            Three pillars, one frequency
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 rounded-2xl overflow-hidden text-center border border-[#f0ded2] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/photos/${item.image}`}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-5 text-[#c1725a]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#4a4038] mb-3">{item.title}</h3>
                <p className="text-[#6b5d4f] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
