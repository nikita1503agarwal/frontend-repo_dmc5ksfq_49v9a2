import { motion } from 'framer-motion'
import { PenTool, Layout, Wand2, Globe } from 'lucide-react'

const services = [
  { icon: PenTool, title: 'Editorial & Proofing', desc: 'Developmental edits, copyedits, and proofreading for print and digital.' },
  { icon: Layout, title: 'Design & Typesetting', desc: 'Covers, interiors, and beautiful typography crafted for readability.' },
  { icon: Wand2, title: 'Art Direction', desc: 'Illustration commissioning, photo research, and visual curation.' },
  { icon: Globe, title: 'Digital Production', desc: 'Ebooks, interactive samples, and web-ready assets for campaigns.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">What we do</h2>
          <p className="mt-2 max-w-2xl text-white/70">End-to-end publishing support with meticulous craft and modern tools.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <s.icon size={18} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white tracking-tight">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
