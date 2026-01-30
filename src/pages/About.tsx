import { getSaharLogoDark } from '../config/r2-assets'

// Get R2 URLs for logos
const logoDark = getSaharLogoDark()

function About() {
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

      {/* Content Section */}
      <section className="pt-14 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Heading */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900">About Us</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn more about Sahar Camp and our mission.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* About Sahar Section */}
              <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">About Sahar</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Sahar was born from a simple question:
                how can an ephemeral city create deeper belonging than permanent ones?
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Inspired by the cultural dynamics of Black Rock City, Sahar explores how collective building, participation, and shared responsibility can transform strangers into a community in just a short time.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Created as a bridge between global nomadic cultures and African roots, Sahar brings Morocco and Africa into this ephemeral experiment, not as an aesthetic reference, but as a living cultural presence.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                At its core, Sahar is a hub where people from many nationalities come together to co-create, connect, and belong. Architecture, art, music, ritual, and daily life intertwine, inviting participants to unplug from systems and re-plug into something deeply human.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Since 2022, Sahar has welcomed over 140 members across multiple editions, with many returning year after year. What sustains Sahar is not scale, but continuity a shared home in movement.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-12 sm:mb-16">
                More than a camp, Sahar is a living community, shaped by global nomadism and rooted in African soil, proving that temporary spaces can create lasting impact.
              </p>

              {/* Community Section */}
              <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900">Community</h2>
              <ul className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Anna Katarina</strong> — Germany — Strategy and development.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Philipp</strong> — Germany — Film director (Black Sheep).
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Nicola Ciccarelli</strong> — Italy — Filmmaker.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Paulina Escutia</strong> — Mexico — Photographer and social media manager.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Yasmina Zriouil</strong> — Morocco — Founder, architect and cultural curator bridging space, sound, and ritual.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Rania Triki</strong> — Morocco — Co-producer and artist manager shaping creative flow and cohesion.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Ricardo Gil</strong> — Morocco — Architect designing immersive and sustainable structures.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Ines Rau</strong> — Paris — Ambassador, model, activist and artist supporting global presence.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Samir Bouhdary</strong> — USA — Strategy and long-term development.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>José Murillo</strong> — Mexico — 3D design and on-site build coordination producer.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Avy Shanti</strong> — Israel — Sound engineer and stage manager.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Santiago Alcalá</strong> — Mexico — Production and logistics management.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Luca Crostella</strong> — USA — Kitchen and hospitality lead.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Mathilde Deer</strong> — France — Photographer focused on presence and empowerment.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Kamila Sun</strong> — Russia — Women empowerment and community care.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Lauren Meyer</strong> — USA — Elixir bar and set design.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Julia Rado</strong> — USA — Installations and spatial scenography.
                </li>
              </ul>

              {/* Artists Section */}
              <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900">Artists</h2>
              <ul className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Unders</strong> — Netherlands — Deep electronic soundscapes.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Share</strong> — Netherlands — Groovy and soulful house music.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Amémé</strong> — Benin — Afro-inspired electronic rhythms.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Deer Jade</strong> — Switzerland — Hypnotic and emotional journeys.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Bora Uzer</strong> — Turkey — Live voice-driven electronic performance.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Jojo Abot</strong> — Ghana — Voice, poetry, and ancestral expression.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Irénée S</strong> — France — Curated sound narratives.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Maalem Gnawa Merchan</strong> — Morocco — Gnawa master and ritual transmission.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Mehdi Qamoum</strong> — Morocco — Gnawa master and ceremonial music.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Style Beldi</strong> — Morocco — Moroccan styling and cultural aesthetics.
                </li>
              </ul>

              {/* Partners Section */}
              <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900">Partners & Previous Collaborators</h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>The Source Boutique Hotel</strong> — Cultural hosting partner.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Jnane Tamsna</strong> — Art-driven hospitality partner.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Trésors Mamoun</strong> — Moroccan culinary heritage partner.
                </li>
                <li className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  <strong>Nobu Hotel Marrakech</strong> — Contemporary hospitality partner.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

