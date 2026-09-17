const days = [
  {
    day: 'Monday',
    title: 'Mindset Monday',
    description: 'You get to decide what deserves your energy today.',
  },
  {
    day: 'Tuesday',
    title: 'Transform Tuesday',
    description: "The things that feel hard today become the strength you carry tomorrow.",
  },
  {
    day: 'Wednesday',
    title: 'Wellness Wisdom Wednesday',
    description: 'Mobility is something you maintain — not something you wait to lose.',
  },
  {
    day: 'Thursday',
    title: 'Tune In Thursday',
    description: 'Pay attention to what gives you energy — and what takes it away.',
  },
  {
    day: 'Friday',
    title: 'Feel Good Friday',
    description: 'Do more of what makes you forget to check the time.',
  },
]

export default function WeeklyRhythm() {
  return (
    <section id="rhythm" className="py-24 px-6 bg-[#fdf9f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-[#bf8a72] mb-4">
            Weekly Rhythm
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#4a4038] mb-4">
            A theme for every day
          </h2>
          <p className="text-[#6b5d4f] max-w-xl mx-auto">
            Every week follows the same frequency &mdash; five daily touchpoints to keep
            you grounded, moving, and inspired.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {days.map((item, i) => (
            <div
              key={item.day}
              className="rounded-2xl p-6 border border-[#f0ded2] flex flex-col gap-3"
              style={{
                background:
                  i % 2 === 0
                    ? 'linear-gradient(160deg, #f7d9cd 0%, #fdf9f5 100%)'
                    : 'linear-gradient(160deg, #f3e3b8 0%, #fdf9f5 100%)',
              }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#bf8a72]">
                {item.day}
              </span>
              <h3 className="font-serif text-xl text-[#4a4038]">{item.title}</h3>
              <p className="text-sm text-[#6b5d4f] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
