import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(1000px_circle_at_100%_10%,rgba(99,102,241,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
        <Services />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} BluePress Studio — Crafted with care
        </div>
      </footer>
    </div>
  )
}

export default App
