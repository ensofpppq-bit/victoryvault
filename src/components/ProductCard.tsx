import { motion } from 'framer-motion'
import { Images, Lock, Zap } from 'lucide-react'
import type { Product } from '../data/products'
import { Reveal } from './Reveal'

interface ProductCardProps {
  product: Product
  index: number
  onOpenGallery: (product: Product) => void
}

export function ProductCard({ product, index, onOpenGallery }: ProductCardProps) {
  const tagStyles =
    product.tag === 'Premium'
      ? 'from-violet-600 to-violet-400'
      : 'from-rose-500 to-orange-400'

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-violet-500/20 bg-nova-bg2 shadow-lg shadow-black/20"
        onClick={() => onOpenGallery(product)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpenGallery(product)
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Voir la galerie de ${product.title}`}
      >
        <div className="relative aspect-video overflow-hidden bg-[#060c20]">
          <span
            className={`absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r ${tagStyles} px-3 py-1 text-[0.58rem] font-extrabold uppercase tracking-wider text-white`}
          >
            {product.tag}
          </span>
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-nova-bg/55 opacity-0 transition group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider">
              <Images className="h-4 w-4" />
              Voir les skins
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-base font-extrabold leading-snug">{product.title}</h3>
          <ul className="space-y-1.5">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-nova-muted before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-violet-500"
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="text-2xl font-black text-violet-300">{product.price}</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-emerald-400">
              Disponible
            </span>
          </div>
          <a
            href={product.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-600/25"
          >
            <Zap className="h-3.5 w-3.5" />
            Acheter Maintenant
          </a>
          <p className="flex items-center gap-1.5 text-[0.62rem] text-nova-muted">
            <Lock className="h-3 w-3 text-emerald-400" />
            Paiement 100% sécurisé · Livraison instantanée
          </p>
        </div>
      </motion.article>
    </Reveal>
  )
}
