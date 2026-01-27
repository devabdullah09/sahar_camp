import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import { getSaharLogoWhite, getSaharLogoDark } from '../config/r2-assets'

// Get R2 URLs for logos - using new Sahar logos
const logoWhite = getSaharLogoWhite()
const logoDark = getSaharLogoDark()

function Experiences() {
  const heroRef = useRef<HTMLElement>(null)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const { bottom } = heroRef.current.getBoundingClientRect()
      setIsHeaderSolid(bottom <= 80)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroImage =
    experiences[0]?.image ||
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'

  const headerBaseClasses =
    'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ease-out'
  const headerVariantClasses = isHeaderSolid
    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
    : 'bg-transparent border-transparent text-white'

  const iconColor = isHeaderSolid ? 'text-gray-900' : 'text-white'

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header Bar */}
        <div className={`${headerBaseClasses} ${headerVariantClasses}`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => {
                  const event = new CustomEvent('toggleMenu')
                  window.dispatchEvent(event)
                }}
                className={`${iconColor} hover:opacity-70 transition-colors z-10 flex items-center justify-center`}
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
                  src={isHeaderSolid ? logoDark : logoWhite}
                  alt="Sahar Camp Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300"
                  style={{ filter: isHeaderSolid ? 'none' : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))' }}
                />
                <h2
                  className={`text-sm sm:text-lg md:text-2xl font-light uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                    isHeaderSolid ? 'text-gray-900' : 'text-white'
                  }`}
                  style={{ 
                    fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    textShadow: isHeaderSolid ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                    color: isHeaderSolid ? '#344233' : 'white'
                  }}
                >
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

        {/* Hero Content - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center z-20 px-4 sm:px-6">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 text-center transition-opacity duration-300"
            style={{ 
              opacity: Math.max(0, 1 - scrollY / 300),
              fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            Our Experiences
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          {/* Description Paragraph */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-2">
              Music, wellness, adventure, culture, food and learning are the pillars of the Sahar Camp
              experience, creating magical worlds where strangers become friends and friends become family.
              Get a glimpse into the diverse experiences available at our global destinations, reflecting
              our unique ethos and the beauty of each location.
            </p>
          </div>

          {/* Experiences Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {experiences.map((experience) => (
              <Link
                key={experience.id}
                to={experience.slug === 'sahar-nevada-usa-2026' ? '/join' : `/experiences/${experience.slug}`}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Label at bottom - always visible with ASBURY PARK font */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 text-center z-10">
                    <p className="text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-xs sm:text-sm md:text-base font-light" style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                      {experience.label
                        ? experience.label
                        : `SAHAR CAMP ${experience.title.toUpperCase()}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiences

