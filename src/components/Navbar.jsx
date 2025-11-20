import { Menu, Server } from "lucide-react"

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[2px] shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            <div className="h-full w-full rounded-[10px] bg-slate-900/90 flex items-center justify-center">
              <Server className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">InfraNova</p>
            <p className="text-xs text-cyan-300/70 -mt-0.5">IT Infrastructure & Support</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-200 hover:text-white/90 transition">Services</a>
          <a href="#about" className="text-slate-200 hover:text-white/90 transition">About</a>
          <a href="#contact" className="text-slate-200 hover:text-white/90 transition">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/20 transition">Get Support</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
