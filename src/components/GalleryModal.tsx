import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lock, X, Zap } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Product } from '../data/products'

interface GalleryModalProps {
  product: Product | null
  onClose: () => void
}

export function GalleryModal({ product, onClose }: GalleryModalProps) {
  const [index, setIndex] = useState(0)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const gallery = product?.gallery ?? []
  const open = product !== null && gallery.length > 0

  const goTo = useCallback(
    (next: number) => {
      if (!gallery.length) return
      setIndex((next + gallery.length) % gallery.length)
    },
    [gallery.length],
  )

  useEffect(() => {
    if (open) setIndex(0)
  }, [open, product?.id])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goTo(index - 1)
      if (e.key === 'ArrowRight') goTo(index + 1)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, goTo, onClose])

  useEffect(() => {
    const active = thumbsRef.current?.children[index] as HTMLElement | undefined
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-[#040714]/92 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-violet-500/30 bg-nova-bg2 shadow-2xl shadow-violet-900/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-violet-500/15 px-6 py-5">
              <div>
                <h3 id="modal-title" className="text-lg font-extrabold">
                  {product.title}
                </h3>
                <p className="text-xs text-nova-muted">
                  Contenu du compte — skins, emotes, accessoires
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-video shrink-0 overflow-hidden bg-[#060c20]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={gallery[index]}
                  src={gallery[index]}
                  alt={`${product.title} — image ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    aria-label="Image précédente"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/40 bg-nova-bg/70 text-white transition hover:bg-violet-600"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    aria-label="Image suivante"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/40 bg-nova-bg/70 text-white transition hover:bg-violet-600"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-4 rounded-full bg-nova-bg/70 px-3 py-1 text-xs font-bold">
                {index + 1} / {gallery.length}
              </div>
            </div>

            {gallery.length > 1 && (
              <div
                ref={thumbsRef}
                className="flex shrink-0 gap-2 overflow-x-auto border-t border-violet-500/10 px-5 py-3.5"
              >
                {gallery.map((url, i) => (
                  <button
                    key={url}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-[52px] w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      i === index
                        ? 'border-violet-500 opacity-100'
                        : 'border-transparent opacity-55 hover:opacity-85'
                    }`}
                  >
                    <img src={url} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-violet-500/15 px-6 py-4">
              <div>
                <p className="text-xs text-nova-muted">Prix du compte</p>
                <p className="text-2xl font-black text-violet-300">{product.price}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-nova-muted">
                  <Lock className="h-3.5 w-3.5 text-emerald-400" />
                  Paiement sécurisé · Livraison instantanée
                </p>
              </div>
              <a
                href={product.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/30"
              >
                <Zap className="h-4 w-4" />
                Acheter Maintenant
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
