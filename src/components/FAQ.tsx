import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '../data/faq'
import { Reveal, SectionTitle } from './Reveal'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('delivery')

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle
          title="Questions Fréquentes"
          icon={<HelpCircle className="h-5 w-5" />}
        />

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-violet-500/40 bg-violet-600/5'
                      : 'border-violet-500/20 bg-nova-bg2'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition hover:text-violet-300"
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-violet-500"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-violet-500/10 px-5 pb-5 pt-1 text-sm leading-relaxed text-nova-muted">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
