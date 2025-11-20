function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-900/80 p-8 sm:p-12 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to modernize your infrastructure?</h3>
            <p className="mt-3 text-slate-300 max-w-2xl">
              Get a free assessment and a tailored roadmap covering cloud, security, networking, and observability.
            </p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Name" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40" />
              <input type="email" placeholder="Work email" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/40" />
              <button type="button" className="col-span-1 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold px-6 py-3 hover:brightness-110 transition shadow-[0_10px_40px_rgba(168,85,247,0.25)]">
                Request Call
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-400">We respond within one business day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
