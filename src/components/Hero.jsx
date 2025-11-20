import Spline from '@splinetool/react-spline'
import { Shield, Globe2, Rocket } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D Spline Scene */}
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays for futuristic glow - pointer-events-none so 3D remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_20%,rgba(34,211,238,0.18),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/50 px-3 py-1.5 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-200/90">Enterprise-grade Reliability</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Futuristic IT Infrastructure Solutions
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            We design, deploy, and manage resilient infrastructure for modern businesses — from cloud and on‑prem networks to security, observability, and 24/7 support.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-4 py-3">
              <Shield className="h-5 w-5 text-cyan-300" />
              <span className="text-slate-200 text-sm">Zero‑trust Security</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-4 py-3">
              <Globe2 className="h-5 w-5 text-fuchsia-300" />
              <span className="text-slate-200 text-sm">Hybrid & Multi‑Cloud</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-4 py-3">
              <Rocket className="h-5 w-5 text-cyan-300" />
              <span className="text-slate-200 text-sm">24/7 Proactive NOC</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-5 py-3 font-semibold shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:brightness-110 transition">
              Get a Free Assessment
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
