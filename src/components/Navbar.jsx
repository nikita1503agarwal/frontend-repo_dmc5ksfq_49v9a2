import { useState } from 'react'
import { Menu, X, BookOpen, Search } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                <BookOpen size={20} />
              </div>
              <span className="text-white font-semibold tracking-tight">BluePress Studio</span>
            </a>

            <nav className="hidden items-center gap-8 sm:flex">
              <NavLink href="#work">Portfolio</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                <Search size={16} />
                Find a title
              </button>
            </nav>

            <button onClick={() => setOpen(!open)} className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="sm:hidden border-t border-white/10 px-4 py-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a href="#work" className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">Portfolio</a>
                <a href="#services" className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">Services</a>
                <a href="#about" className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">About</a>
                <a href="#contact" className="rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">Contact</a>
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                <Search size={16} />
                Find a title
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
