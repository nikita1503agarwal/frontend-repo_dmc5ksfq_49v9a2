import { motion } from 'framer-motion'
import { Star, ArrowUpRight, BookCopy, Users } from 'lucide-react'

const books = [
  {
    title: 'Midnight Manuscripts',
    author: 'A. K. Rowan',
    tag: 'Fiction',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'The Design of Words',
    author: 'Mira K.',
    tag: 'Design',
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Atlas of Quiet Cities',
    author: 'Leo Varga',
    tag: 'Travel',
    color: 'from-emerald-500 to-teal-500',
  },
]

function Card({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} opacity-30 blur-2xl transition group-hover:scale-125`} />
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/90">
        <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
        {item.tag}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white tracking-tight">{item.title}</h3>
      <p className="mb-6 text-white/70">by {item.author}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} size={16} fill="currentColor" className="opacity-80" />
          ))}
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 transition hover:bg-white/10">
          Preview
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.07),transparent_40%),radial-gradient(600px_circle_at_80%_50%,rgba(139,92,246,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured titles</h2>
            <p className="mt-2 max-w-xl text-white/70">A handpicked selection that highlights layout craft, cover art direction, and editorial voice.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-white/80">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <BookCopy size={16} /> 120+ Books
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <Users size={16} /> 40+ Authors
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((b, i) => (
            <Card key={b.title} item={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
