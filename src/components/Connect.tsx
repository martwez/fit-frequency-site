export default function Connect() {
  return (
    <section
      id="connect"
      className="py-24 px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, #c1725a 0%, #8f5a44 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-white">
        <div className="flex justify-center mb-6">
          <img src="/images/logo-icon.png" alt="Fit Frequency Wellness" className="w-16 h-16 object-contain" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl mb-4">
          Follow along @fitfrequency.wellness
        </h2>
        <p className="text-[#f9e9df] mb-10">
          Daily mindset drops, weekly rhythm posts, and a look behind the practice &mdash;
          all on Instagram. DM to reserve your spot in a session.
        </p>
        <a
          href="https://www.instagram.com/fitfrequency.wellness/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#8f5a44] tracking-wide hover:bg-[#f7d9cd] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.3-.3.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.3.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.3.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.3-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1z" />
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4z" />
            <circle cx="17.4" cy="6.6" r="1.2" />
          </svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
