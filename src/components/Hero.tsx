import { motion } from 'framer-motion'
import { ChevronRight, Headphones, Shield, Zap } from 'lucide-react'
import { HERO_IMAGE } from '../data/products'

const perks = [
  {
    icon: Shield,
    title: '100% Sécurisé',
    subtitle: 'Comptes vérifiés',
  },
  {
    icon: Zap,
    title: 'Livraison Instantanée',
    subtitle: 'Accès immédiat',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    subtitle: 'Nous sommes là',
  },
]

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[calc(100vh-68px)] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Bannière Nova Loot Fortnite"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nova-bg via-nova-bg/90 to-nova-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-nova-bg via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="max-w-xl space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/20 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-violet-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Comptes Fortnite Premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Des comptes Fortnite
            <br />
            <span className="text-gradient">Rares</span> et Sécurisés
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="max-w-lg text-base leading-relaxed text-nova-muted"
          >
            Accédez à des skins exclusifs et objets rares grâce à nos comptes
            Fortnite premium soigneusement sélectionnés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-wrap gap-6 pt-1"
          >
            {perks.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 ring-1 ring-violet-500/30">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-nova-muted">{subtitle}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#boutique"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-400 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white glow-violet"
          >
            Voir les Comptes
            <ChevronRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
