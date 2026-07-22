import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import StickyWA from '../components/StickyWA.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <a href="#main-content" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <StickyWA />
    </div>
  )
}
