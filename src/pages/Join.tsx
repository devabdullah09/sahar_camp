import { getSaharLogoDark } from '../config/r2-assets'

// Get R2 URLs for logos
const logoDark = getSaharLogoDark()

function Join() {
  return (
    <div>
      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 text-gray-900 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
            {/* Hamburger Menu - Left */}
            <button
              onClick={() => {
                const event = new CustomEvent('toggleMenu')
                window.dispatchEvent(event)
              }}
              className="text-gray-900 hover:opacity-70 transition-colors z-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo and Title - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
              <img
                src={logoDark}
                alt="Sahar Camp Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300"
              />
              <h2 className="text-sm sm:text-lg md:text-2xl font-light uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap text-gray-900" style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}>
                SAHAR CAMP
              </h2>
            </div>

            {/* Spacer for right alignment */}
            <div className="w-16 sm:w-20 md:w-24 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-32 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 md:mb-12 text-gray-900">Join Us</h1>
          
          {/* Notion Application Section */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2">
              Become part of Sahar camp 2026 by completing the application via Notion using the link below:
            </p>
            <a
              href="https://unmarred-rail-a64.notion.site/2e91987a90a081e28006f2d146960e63?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-xs sm:text-sm md:text-base break-all text-left max-w-full"
            >
              https://unmarred-rail-a64.notion.site/2e91987a90a081e28006f2d146960e63?pvs=105
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Join

