import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="hero" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 p-8 sm:p-12 bg-gradient-to-br from-amber-50 to-rose-50">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">Replace doubt with certainty.</h3>
            <p className="mt-3 text-gray-700">Get compliance clarity, route intelligence, and build mastery in one place. Powering your build. Guiding your journey.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/test" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-black">
              Run System Check <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 font-semibold border border-gray-300 hover:bg-gray-50">
              View Brand Guide <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
