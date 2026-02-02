import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getSaharLogoDark } from '../config/r2-assets'

// Get R2 URLs for logos - using new Sahar logos
const logoDark = getSaharLogoDark()

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Listen for menu toggle event from Home page
  useEffect(() => {
    const handleToggleMenu = () => {
      setIsMenuOpen((prev) => !prev)
    }
    window.addEventListener('toggleMenu', handleToggleMenu)
    return () => window.removeEventListener('toggleMenu', handleToggleMenu)
  }, [])

  return (
    <>
      {/* Side Navigation Menu - White background with black text */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33.333%] max-w-[480px] bg-white border-r border-gray-200 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-12 sm:mb-16 md:mb-20">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={logoDark}
                alt="Sahar Camp Logo"
                className="h-14 sm:h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-gray-600 transition-colors flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Brand Name */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 uppercase tracking-[0.1em] sm:tracking-[0.15em]" style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}>
                SAHAR CAMP
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7"
              style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}
            >
              About Us
            </Link>
            <Link
              to="/experiences"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 flex items-center group"
              style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}
            >
              {(location.pathname === '/experiences' || location.pathname.startsWith('/experience/')) && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0 text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              )}
              <span className={!(location.pathname === '/experiences' || location.pathname.startsWith('/experience/')) ? 'ml-4 sm:ml-7' : ''} style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}>Our Experiences</span>
            </Link>
            <Link
              to="/join"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7"
              style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}
            >
              Join Us
            </Link>
            <Link
              to="/journal"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7"
              style={{ fontFamily: "'ASBURY PARK', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#344233' }}
            >
              Journal
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header

