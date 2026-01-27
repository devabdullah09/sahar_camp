import { useEffect, useState } from 'react'
import loaderImage from '../assets/loader.png'

function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fade out after minimum display time
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 1200)

    // Hide completely after fade
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1700)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Sahar Logo */}
        <div className="relative">
          <img
            src={loaderImage}
            alt="Sahar Camp Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            style={{
              animation: 'spin 3s linear infinite'
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Loader
