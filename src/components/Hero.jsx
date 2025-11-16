import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="DirtOracle hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-amber-300 font-semibold tracking-widest uppercase">Know your rig. Own your track.</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              DirtOracle
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              Powering your build. Guiding your journey. The trusted source for ADR compliance, weather intel, track status, fuel planning, and vehicle specs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#oracle" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/90 hover:bg-white text-gray-900 px-4 py-2 font-semibold shadow">
                Explore the Oracle
              </a>
              <a href="#explorer" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-gray-900/80 hover:bg-black text-white px-4 py-2 font-semibold shadow">
                Plan a Journey
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
