import LotusMark from './LotusMark'

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#fdf9f5] border-t border-[#e8ddd0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8a7967]">
        <div className="flex items-center gap-2">
          <LotusMark className="w-5 h-5" />
          <span>Fit Frequency &middot; Mind &middot; Body &middot; Energy</span>
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
        <p>&copy; {new Date().getFullYear()} Fit Frequency. All rights reserved.</p>
      </div>
    </footer>
  )
}
