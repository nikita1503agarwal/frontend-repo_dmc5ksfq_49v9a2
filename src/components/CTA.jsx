import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_20%_0%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(600px_circle_at_90%_60%,rgba(99,102,241,0.25),transparent_40%)]" />
          <div className="relative grid items-center gap-10 p-10 md:grid-cols-2 md:p-16">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a catalogue to launch?</h3>
              <p className="mt-3 max-w-md text-white/75">Tell us about your titles, timelines, and goals. We’ll share a tailored plan and a polished sample.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@bluepress.studio" className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110">Email us</a>
                <a href="#" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">Book a call</a>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="mb-1 block text-sm text-white/80">Your name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Jane Publisher" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="jane@imprint.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Tell us about your project</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="We’re launching 10 titles across two lists..." />
              </div>
              <button className="w-full rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/15">Send message</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
