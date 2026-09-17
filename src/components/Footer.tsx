export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#fdf9f5] border-t border-[#f0ded2]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8a7967]">
        <div className="flex items-center gap-2">
          <img src="/images/logo-icon.png" alt="Fit Frequency Wellness" className="w-6 h-6 object-contain" />
          <span>Fit Frequency Wellness &middot; Mind &middot; Body &middot; Energy</span>
        </div>
        <div className="flex items-center gap-6">
          <span>📍 California</span>
          <a
            href="https://www.instagram.com/fitfrequency.wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4a4038] transition-colors"
          >
            @fitfrequency.wellness
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Fit Frequency Wellness. All rights reserved.</p>
      </div>
    </footer>
  )
}
