import { motion } from 'framer-motion'
import { Lock, Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { DISCORD_URL } from '../data/products'
import type { SectionId } from '../hooks/useActiveSection'

const navLinks: { href: string; label: string; section: SectionId }[] = [
  { href: '#accueil', label: 'Accueil', section: 'accueil' },
  { href: '#boutique', label: 'Boutique', section: 'boutique' },
  { href: '#faq', label: 'FAQ', section: 'faq' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

interface HeaderProps {
  activeSection: SectionId
  cartCount: number
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

export function Header({ activeSection, cartCount }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = (section: SectionId) =>
    [
      'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
      activeSection === section
        ? 'bg-violet-600/15 text-white'
        : 'text-nova-muted hover:text-white',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 glass border-b border-violet-500/20">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-5 px-6 lg:px-7">
        <a href="#accueil" className="group leading-none">
          <span className="text-2xl font-black tracking-wider">
            <span className="text-white">NOVA </span>
            <span className="text-gradient">LOOT</span>
          </span>
          <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.18em] text-nova-muted">
            Comptes Fortnite Premium
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.section)}>
              {link.label}
              {activeSection === link.section && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-violet-500"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#boutique"
            className="hidden items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-600/10 px-3 py-2 text-xs font-medium text-nova-muted transition hover:border-violet-500/50 hover:bg-violet-600/20 hover:text-white sm:flex"
          >
            <Lock className="h-4 w-4" />
            <span>Paiement sécurisé</span>
          </a>

          <a
            href="#boutique"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-600/10 text-nova-muted transition hover:border-violet-500/50 hover:bg-violet-600/25 hover:text-white"
            title={`${cartCount} compte${cartCount > 1 ? 's' : ''} disponible${cartCount > 1 ? 's' : ''}`}
            aria-label={`${cartCount} comptes disponibles en boutique`}
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-violet-600 px-1 text-[0.6rem] font-bold">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2 text-xs font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#4752c4] hover:shadow-lg hover:shadow-indigo-500/30 sm:inline-flex"
          >
            <DiscordIcon className="h-4 w-4" />
            Discord
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 text-white md:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        className="overflow-hidden border-t border-violet-500/15 bg-nova-bg/98 md:hidden"
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-3.5 py-2.5 text-sm font-medium ${
                activeSection === link.section
                  ? 'bg-violet-600/15 text-white'
                  : 'text-nova-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2.5 text-sm font-bold text-white"
          >
            <DiscordIcon className="h-4 w-4" />
            Rejoindre Discord
          </a>
        </div>
      </motion.nav>
    </header>
  )
}
