import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(168,85,247,0.08),transparent),radial-gradient(800px_400px_at_80%_0%,rgba(34,211,238,0.08),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative border-t border-white/10 bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} InfraNova — All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="/test" className="hover:text-slate-200">System Check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
