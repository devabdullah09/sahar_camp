import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import { getR2Url } from '../config/r2-assets'
import { getSaharLogoWhite, getSaharLogoDark, getLandingVideo } from '../config/r2-assets'

const landingVideo = getLandingVideo('251112_BM_Sahart_16x9_FINAL_below.mp4')
const logoWhite = getSaharLogoWhite()
const logoDark = getSaharLogoDark()

function Home() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Start white, become transparent after scrolling 100px
      setIsHeaderTransparent(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerBgClass = isHeaderTransparent 
    ? 'bg-black/40 backdrop-blur-md border-b border-white/20' 
    : 'bg-white border-b border-gray-200 shadow-sm'
  
  const iconColor = isHeaderTransparent ? 'text-white' : 'text-gray-900'
  const logoSrc = isHeaderTransparent ? logoWhite : logoDark
  const textColor = isHeaderTransparent ? 'text-white' : 'text-gray-900'
  const textShadow = isHeaderTransparent 
    ? '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' 
    : 'none'
  const logoFilter = isHeaderTransparent 
    ? 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))' 
    : 'none'

  return (
    <div className="bg-white">
      {/* Full Screen Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        {/* Header Bar - White initially, transparent on scroll */}
        <div className={`fixed top-0 left-0 right-0 z-30 ${headerBgClass} transition-all duration-300`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => {
                  const event = new CustomEvent('toggleMenu')
                  window.dispatchEvent(event)
                }}
                className={`${iconColor} hover:opacity-70 transition-colors z-10`}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
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
                  src={logoSrc}
                  alt="Sahar Camp Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300"
                  style={{ filter: logoFilter }}
                />
                <h1 className={`text-sm sm:text-lg md:text-2xl font-light ${textColor} uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap transition-all duration-300`} style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", textShadow: textShadow, color: isHeaderTransparent ? 'white' : '#344233' }}>
                  SAHAR CAMP
                </h1>
              </div>

              {/* Book Button - Right */}
              <Link
                to="/join"
                className={`px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-gray-50 transition-all font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm z-10 ${
                  isHeaderTransparent 
                    ? 'bg-white text-gray-900 hover:bg-gray-50' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </section>

      {/* Manifesto Section */}
      <section className="relative min-h-screen bg-white flex items-center justify-center py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Loader Logo on top */}
          {/* <div className="flex justify-center mb-8">
            <img
              src={loaderImage}
              alt="Sahar Camp Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </div> */}

          {/* Manifesto Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-12 tracking-wide">
            Manifesto
          </h1>

          {/* Manifesto Text */}
          <div className="space-y-6 text-[#1a1a1a] text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            <p>
              Morocco is a tree whose roots go deep into Africa yet breathes through its leaves in the world.
            </p>
            <p>
              We believe in the power of its culture which through its beauty, authenticity, and art, keeps inspiring many of us.
            </p>
            <p>
              But, far too many are those who, through the cultural appropriation of Morocco, forget what are its roots, and therefore its history.
            </p>
            <p>
              Our mission is to give back the Moroccan culture to those who rightfully belong to it, starting with its nomadic culture.
            </p>
            <p>
              Our mission is to create an extraordinary experience, reminding contemporary societies so paradoxical in their development that nomadism is the source of humanity.
            </p>
            <p>
              Give voice to those who have been mute for far too long,
            </p>
            <p>
              Allow them to share their art internationally,
            </p>
            <p>
              Working in symbiosis with the absorption of this heterotopia called home,
            </p>
            <p>
              That once carried out in the body, will allow them to deprogram their visible or invisible borders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Homes Section */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] text-center mb-12 sm:mb-16 md:mb-20 font-light tracking-wide">
            Our Homes
          </h2>

          {/* Experiences Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {experiences.slice(0, 4).map((experience) => (
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

      {/* Video Section - Our Story */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b7d72] mb-4 font-medium">
                — OUR STORY —
              </p>
            </div>
          </div>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <video
              controls
              playsInline
              className="w-full h-full object-cover"
              poster={getR2Url('OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/088A2970.jpg')}
            >
              <source src={landingVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Signature Experiences Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light tracking-wide">
              Signature Experiences
            </h2>
            <p className="text-[#8b7d72] text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Our brand experiences reflect our unique ethos, pillars and programming, showcasing
              the best of what our homes have to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-20">
            {/* Experience 1 - with image */}
            <div className="relative">
              <img
                src={experiences[0]?.image || getR2Url('OUR EXPERIENCES/1. Nevada, USA/Pictures/Selection/088A2970.jpg')}
                alt="Experience"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex items-center">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#6b5d52] mb-6 font-light">
                  {experiences[0]?.title || 'Sahar nevada, USA 2022'}
                </h3>
                <p className="text-[#8b7d72] text-base leading-relaxed mb-8 font-light">
                  {experiences[0]?.description || 'From music festivals in the desert to wellness retreats in the mountains, our experiences are designed to connect you with the essence of each destination and create lasting memories with our global community.'}
                </p>
                <Link
                  to="/experiences"
                  className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-6">
                <div className="h-px w-16 bg-[#8b7d72] mb-6"></div>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                {experiences[1]?.label || experiences[1]?.title || 'Sahar nevada, USA 2023'}
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                {experiences[1]?.description || 'An unforgettable evening celebrating culture, cuisine and community in the heart of Mexico.'}
              </p>
              <Link
                to={`/experiences/${experiences[1]?.slug || 'sahar-nevada-usa-2023'}`}
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Discover More
              </Link>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={experiences[1]?.image || getR2Url('OUR EXPERIENCES/2. Ethos, Mexico/Pictures/f5d74a18-260f-40b8-8336-029fba6642e0.jpg')}
                alt="Second Experience"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Featured Story (Fixed) */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              {experiences[0] && (
                <Link
                  to={experiences[0].slug === 'sahar-nevada-usa-2026' ? '/join' : `/experiences/${experiences[0].slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
                    <img
                      src={experiences[0].image}
                      alt={experiences[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#6b5d52] mb-3 font-medium">
                    {experiences[0].label || experiences[0].title}
                  </h3>
                  <p className="text-[#8b7d72] text-sm mb-4 font-light">
                    By Sahar Camp Team
                  </p>
                  <p className="text-[#6b5d52] text-base leading-relaxed font-light">
                    {experiences[0].description}
                  </p>
                </Link>
              )}
            </div>

            {/* Right Side - Header + Scrollable Stories */}
            <div>
              <div className="mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light tracking-wide">
                  OUR STORIES
                </h2>
                <p className="text-[#6b5d52] text-lg font-light leading-relaxed">
                  Our stories define us, inspire us and unite us. Every journey is a story worth sharing.
                </p>
              </div>

              <div className="space-y-16">
                {experiences.slice(1).map((experience) => (
                  <Link
                    key={experience.id}
                    to={experience.slug === 'sahar-nevada-usa-2026' ? '/join' : `/experiences/${experience.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#6b5d52] mb-3 font-medium">
                      {experience.label || experience.title}
                    </h3>
                    <p className="text-[#8b7d72] text-sm mb-2 font-light">
                      By Sahar Camp Team
                    </p>
                    <p className="text-[#6b5d52] text-base leading-relaxed font-light">
                      {experience.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={getR2Url('OUR EXPERIENCES/2. Ethos, Mexico/Pictures/f5d74a18-260f-40b8-8336-029fba6642e0.jpg')}
                alt="Giving Back"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                GIVING BACK
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                Our Sahar Camp Rise is our global impact initiative focused on strengthening local
                communities, cultures and conservation efforts.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                OUR SUSTAINABILITY
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                Sustainability drives our decision-making; the materials we choose, the way we build,
                how we operate, and the local and global causes we support. We have one planet and it
                is our responsibility to protect it.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Learn More
              </Link>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={getR2Url('OUR EXPERIENCES/6. Nevada, USA/Picture Sahar 22/DSC06355.jpg')}
                alt="Sustainability"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

