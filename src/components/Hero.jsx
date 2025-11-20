import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Publisher Portfolio
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Showcase your books with a modern, interactive experience
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Present catalogues, authors, and imprints with smooth motion and an immersive 3D header.
            Crafted for publishers who want style and speed.
          </p>
          <div className="pointer-events-auto flex flex-wrap gap-3">
            <a href="#work" className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110">
              View portfolio
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
