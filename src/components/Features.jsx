import { Cloud, ShieldCheck, Network, Gauge, Headset, Lock } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      desc: 'Design, migration, and cost optimization across AWS, Azure, and GCP.',
    },
    {
      icon: Network,
      title: 'Networking & SD‑WAN',
      desc: 'High‑availability routing, firewalls, and global connectivity.',
    },
    {
      icon: ShieldCheck,
      title: 'Security Operations',
      desc: 'Zero‑trust, SIEM/SOAR, endpoint protection, and compliance.',
    },
    {
      icon: Gauge,
      title: 'Observability',
      desc: 'Telemetry pipelines, SLOs, and real‑time performance dashboards.',
    },
    {
      icon: Headset,
      title: 'Managed Support',
      desc: '24/7 NOC, incident response, and on‑call engineering.',
    },
    {
      icon: Lock,
      title: 'Identity & Access',
      desc: 'SSO, RBAC, PAM, and directory services for secure access.',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_10%_20%,rgba(168,85,247,0.08),transparent),radial-gradient(600px_400px_at_90%_10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Enterprise Services</h2>
          <p className="mt-3 text-slate-300">Everything you need to build and run scalable, secure infrastructure.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-cyan-400/30 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 flex items-center justify-center mb-4 border border-white/10">
                <item.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
