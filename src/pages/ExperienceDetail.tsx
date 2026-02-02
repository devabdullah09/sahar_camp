import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { experiences } from '../data/experiences'
import { getSaharLogoWhite, getSaharLogoDark } from '../config/r2-assets'

// Get R2 URLs for logos - using new Sahar logos
const logoWhite = getSaharLogoWhite()
const logoDark = getSaharLogoDark()

function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const experience = experiences.find((exp) => exp.slug === slug)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)
  const sectionRefs = useRef<{ [key: number]: { image: HTMLDivElement | null, text: HTMLDivElement | null } }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsHeaderSolid(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const matchHeights = () => {
      Object.keys(sectionRefs.current).forEach((key) => {
        const index = parseInt(key)
        const refs = sectionRefs.current[index]
        if (refs?.image && refs?.text && window.innerWidth >= 768) {
          // Match image height to text height (like Home page)
          const textHeight = refs.text.offsetHeight
          if (textHeight > 0) {
            refs.image.style.height = `${textHeight}px`
          }
        } else if (refs?.image) {
          refs.image.style.height = 'auto'
        }
      })
    }

    matchHeights()
    const timer = setTimeout(matchHeights, 100)
    window.addEventListener('resize', matchHeights)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', matchHeights)
    }
  }, [experience])

  // Redirect 2026 experience to join page
  if (slug === 'sahar-nevada-usa-2026') {
    return <Navigate to="/join" replace />
  }

  if (!experience) {
    return <Navigate to="/experiences" replace />
  }

  const headerBaseClasses =
    'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ease-out'
  const headerVariantClasses = isHeaderSolid
    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
    : 'bg-transparent border-transparent text-white'

  const iconColor = isHeaderSolid ? 'text-gray-900' : 'text-white'

  return (
    <div className="min-h-screen">
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
                  textShadow: isHeaderSolid ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
                  color: isHeaderSolid ? '#344233' : 'white'
                }}
              >
                SAHAR CAMP
              </h2>
            </div>

            {/* Back Button - Right */}
            <Link
              to="/experiences"
              className={`${iconColor} hover:opacity-70 transition-colors z-10 flex items-center justify-center`}
              aria-label="Back to experiences"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Video or Hero Image */}
      {/* For 2023, always show landing image in hero, video goes to bottom */}
      <section className="relative w-full min-h-[40vh] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {experience.video && experience.slug !== 'sahar-nevada-usa-2023' ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={experience.video} type="video/mp4" />
          </video>
        ) : (
          <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          {/* Alternating Image and Text Sections */}
          {experience.images &&
            experience.fullDescription?.sections &&
            experience.images.map((img, index) => {
              const section = experience.fullDescription?.sections?.[index]
              if (!section) return null

              const isImageLeft = index % 2 === 0
              const isManifesto = section.title?.toLowerCase() === 'camp manifesto'
              const is2025Manifesto = isManifesto && experience.slug === 'sahar-nevada-usa-2025'
              const isFirstSection = index === 0
              
              // Check if previous section used two images (for 2025 manifesto)
              const prevSection = index > 0 ? experience.fullDescription?.sections?.[index - 1] : null
              const prevIs2025Manifesto = prevSection?.title?.toLowerCase() === 'camp manifesto' && experience.slug === 'sahar-nevada-usa-2025'
              
              // Skip this image if it was used as the second image in the previous manifesto section
              if (prevIs2025Manifesto && index > 0) {
                return null
              }
              
              const secondImage = is2025Manifesto && experience.images?.[index + 1] ? experience.images[index + 1] : null

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12 md:items-start"
                >
                  {/* Image(s) */}
                  <div 
                    ref={(el) => {
                      if (!sectionRefs.current[index]) {
                        sectionRefs.current[index] = { image: null, text: null }
                      }
                      sectionRefs.current[index].image = el
                    }}
                    className={`${isImageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'} w-full`}
                  >
                    {is2025Manifesto && secondImage ? (
                      // Two images stacked vertically for 2025 manifesto - no extra space
                      <div className="h-full flex flex-col">
                        <div className="flex-1 overflow-hidden rounded-lg">
                          <img
                            src={img}
                            alt={section.title || `${experience.title} image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 overflow-hidden rounded-lg">
                          <img
                            src={secondImage}
                            alt={`${section.title || experience.title} image ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      // Single image for other sections - match text height
                      <div className="w-full h-full overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={section.title || `${experience.title} image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div 
                    ref={(el) => {
                      if (!sectionRefs.current[index]) {
                        sectionRefs.current[index] = { image: null, text: null }
                      }
                      sectionRefs.current[index].text = el
                    }}
                    className={`${isImageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'} flex flex-col`}
                  >
                    <div>
                      {/* Show subtitle heading in first section's text area */}
                      {isFirstSection && experience.fullDescription?.subtitle && (
                        <h2 
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-4 sm:mb-6"
                          style={{ 
                            fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", 
                            color: '#344233'
                          }}
                        >
                          {experience.fullDescription.subtitle}
                        </h2>
                      )}
                      {section.title && (
                        <h3 
                          className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-3 sm:mb-4 uppercase tracking-[0.1em] sm:tracking-[0.15em]"
                          style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}
                        >
                          {section.title}
                        </h3>
                      )}
                      {isManifesto ? (
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                          {section.content
                            .split(/\n\s*\n/)
                            .filter(p => p.trim())
                            .map((paragraph, idx) => {
                              const lines = paragraph.split('\n').filter(line => line.trim())
                              return (
                                <p key={idx} className={idx > 0 ? 'mt-6' : ''}>
                                  {lines.map((line, lineIdx) => (
                                    <span key={lineIdx}>
                                      {line.trim()}
                                      {lineIdx < lines.length - 1 && <br />}
                                    </span>
                                  ))}
                                </p>
                              )
                            })}
                        </div>
                      ) : section.title === '' ? (
                        // Details section - format with proper labels and spacing
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                          {section.content.split('\n\n').map((detail, idx) => {
                            const trimmedDetail = detail.trim()
                            if (!trimmedDetail) return null
                            const parts = trimmedDetail.split(':')
                            if (parts.length >= 2) {
                              const label = parts[0].trim()
                              const value = parts.slice(1).join(':').trim()
                              return (
                                <div key={idx} className={idx > 0 ? 'mt-6' : ''}>
                                  <span className="font-semibold">{label}:</span>{' '}
                                  <span>{value}</span>
                                </div>
                              )
                            }
                            return (
                              <div key={idx} className={idx > 0 ? 'mt-6' : ''}>
                                {trimmedDetail}
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

          {/* Bottom Landscape Image or Video */}
          {/* For 2023, show video here if it exists, otherwise show bottomVideo or bottomImage */}
          {(experience.slug === 'sahar-nevada-usa-2023' && experience.video) ? (
            <div className="mt-8 sm:mt-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-lg"
              >
                <source src={experience.video} type="video/mp4" />
              </video>
            </div>
          ) : experience.bottomVideo ? (
            <div className="mt-8 sm:mt-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-lg"
              >
                <source src={experience.bottomVideo} type="video/mp4" />
              </video>
            </div>
          ) : experience.bottomImage ? (
            <div className="mt-8 sm:mt-10">
              <img
                src={experience.bottomImage}
                alt={`${experience.title} gallery`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ) : null}

          {/* Gallery Section */}
          {experience.galleryImages && experience.galleryImages.length > 0 && (
            <div className="mt-8 sm:mt-10 md:mt-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-8 sm:mb-12 text-center uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {experience.galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${experience.title} gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Experiences Section */}
          {experiences.filter(exp => exp.slug !== experience.slug && exp.slug !== 'sahar-nevada-usa-2026').length > 0 && (
            <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 md:pt-20 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-8 sm:mb-12 text-center uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                Other Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {experiences
                  .filter(exp => exp.slug !== experience.slug && exp.slug !== 'sahar-nevada-usa-2026')
                  .map((otherExp) => (
                    <Link
                      key={otherExp.id}
                      to={`/experiences/${otherExp.slug}`}
                      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={otherExp.image}
                          alt={otherExp.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        {/* Label at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 text-center z-10">
                          <p className="text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-xs sm:text-sm md:text-base font-light" style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                            {otherExp.label
                              ? otherExp.label
                              : `SAHAR CAMP ${otherExp.title.toUpperCase()}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail