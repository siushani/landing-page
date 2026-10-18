import Header from './components/Header'
import Hero from './components/Hero'
import ANCSimulator from './components/ANCSimulator'
import Features from './components/Features'
import SpecBreakdown from './components/SpecBreakdown'
import Gallery from './components/Gallery'
import Unboxing from './components/Unboxing'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ANCSimulator />
        <Features />
        <SpecBreakdown />
        <Gallery />
        <Unboxing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
