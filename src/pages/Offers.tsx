function Offers() {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 md:mb-6 text-gray-900">Special Offers</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Discover exclusive offers and packages at our homes around the world.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-10 sm:py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2">
              Check back soon for our latest offers and special packages.
            </p>
            <a
              href="https://unmarred-rail-a64.notion.site/2e91987a90a081e28006f2d146960e63"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers

