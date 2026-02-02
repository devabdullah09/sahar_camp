import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 pb-4 sm:pb-6 border-b border-gray-700">
            {/* Left: Navigation Links */}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wide">Navigation</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/experiences" className="hover:text-white transition-colors">
                    Our Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/join" className="hover:text-white transition-colors">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="hover:text-white transition-colors">
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Center: Instagram Link */}
            <div className="text-left sm:text-left md:text-center">
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wide">Follow Us</h3>
              <a 
                href="https://www.instagram.com/sahartcamp?igsh=cjJndjk5d3h4N29j" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-200 hover:text-white transition-colors text-xs sm:text-sm py-1"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>

            {/* Right: Entity Information */}
            <div className="text-left sm:text-left md:text-right">
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3 uppercase tracking-wide">Contact</h3>
              <div className="text-gray-300 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <p className="font-semibold text-white">Sahar Art, Inc.</p>
                <p>Nonprofit, 501c3</p>
                <p>3955 KINGSBARNS DR</p>
                <p>ROSEVILLE, CA, 95747</p>
                <a 
                  href="mailto:saharartcamp@gmail.com" 
                  className="text-gray-200 hover:text-white transition-colors block mt-2"
                >
                  saharartcamp@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 sm:pt-5 text-center text-gray-400 text-xs px-2">
            <p>&copy; {new Date().getFullYear()} Sahar Art, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

