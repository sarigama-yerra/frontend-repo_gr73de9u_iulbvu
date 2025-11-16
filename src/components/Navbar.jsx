import { Menu, Compass, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow">
            <Compass className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm tracking-widest text-gray-600">DIRTORACLE</p>
            <p className="-mt-1 font-bold text-gray-900">Powering your build</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#oracle" className="hover:text-gray-900">Oracle</a>
          <a href="#explorer" className="hover:text-gray-900">Explorer</a>
          <a href="#hero" className="hover:text-gray-900">Hero</a>
          <a href="/test" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
            <ShieldCheck className="h-4 w-4" /> System Check
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 bg-white text-gray-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
