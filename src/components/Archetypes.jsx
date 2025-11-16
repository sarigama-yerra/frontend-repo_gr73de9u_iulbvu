import { Brain, Mountain, Trophy } from 'lucide-react'

const Item = ({ icon: Icon, title, subtitle, body }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-md bg-gradient-to-br from-amber-400 to-rose-600 text-white grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-amber-200 text-xs tracking-widest uppercase">{subtitle}</p>
      </div>
    </div>
    <p className="mt-4 text-white/80 text-sm leading-relaxed">{body}</p>
  </div>
)

export default function Archetypes() {
  return (
    <section id="oracle" className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-amber-300 font-semibold tracking-widest uppercase">The Wise Enabler</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Our Archetype Blend</h2>
          <p className="mt-3 text-white/70">We are the Sage that empowers the Explorer to become the Hero. Assured. Knowledgeable. Capable.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Item
            icon={Brain}
            title="The Sage"
            subtitle="Function"
            body="The Oracle. Source of truth for ADR compliance, weather, track status, fuel planning, and vehicle specs. We replace uncertainty with certainty."
          />
          <Item
            icon={Mountain}
            title="The Explorer"
            subtitle="Customer's Goal"
            body="Don't fence me in. We remove barriers so the journey beyond is possible—with confidence and authenticity."
          />
          <Item
            icon={Trophy}
            title="The Hero"
            subtitle="Customer's Result"
            body="Where there's a will, there's a way. Our user masters their build and conquers the track—becoming the hero of their story."
          />
        </div>
      </div>
    </section>
  )
}
