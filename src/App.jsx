import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Archetypes from './components/Archetypes'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Archetypes />
        <CTA />
        <footer className="py-12 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} DirtOracle — Powering your build. Guiding your journey.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
