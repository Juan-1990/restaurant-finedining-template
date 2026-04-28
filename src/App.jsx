import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservations from './components/Reservations'
import Footer from './components/Footer'

/**
 * App — Root component
 * Composes all sections in order
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Reservations />
      </main>
      <Footer />
    </div>
  )
}
