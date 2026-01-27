import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const heroRoutes = ['/', '/experiences']
  const isExperienceDetail = location.pathname.startsWith('/experiences/')
  const isHeroRoute = heroRoutes.includes(location.pathname) || isExperienceDetail

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHeroRoute ? '' : 'pt-20'}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

