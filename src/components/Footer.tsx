import { CreditCard } from 'lucide-react'
import { Reveal } from './Reveal'

function PayPalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72A.77.77 0 0 1 5.703 3h6.127c2.683 0 4.746.624 5.812 1.855.87.998 1.19 2.406.973 4.186-.023.18-.053.36-.09.543-.378 2.065-1.556 3.696-3.318 4.597-1.6.81-3.657 1.166-6.126 1.166H9.39a.77.77 0 0 0-.758.647l-.84 5.32-.24 1.516a.385.385 0 0 1-.38.323zm.633-2.31h2.96c2.532 0 4.512-.515 5.88-1.53 1.24-.92 2.08-2.28 2.44-3.96.04-.2.07-.4.09-.6.17-1.36-.02-2.44-.57-3.22-.72-.94-2.01-1.42-3.84-1.42H9.39l-1.68 10.75z" />
    </svg>
  )
}

const paymentMethods = [
  { label: 'Visa', icon: CreditCard },
  { label: 'Mastercard', icon: CreditCard },
  { label: 'PayPal', icon: PayPalIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-violet-500/20 bg-[#05091a]/98 py-12">
      <Reveal className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-6 text-center">
        <span className="text-2xl font-black tracking-wider">
          <span className="text-white">NOVA </span>
          <span className="text-gradient">LOOT</span>
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {paymentMethods.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-violet-500/20 bg-white/5 px-3.5 py-2 text-xs text-nova-muted"
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-nova-muted">
          <a href="#" className="transition hover:text-violet-300">
            Conditions d'utilisation
          </a>
          <span className="text-violet-500/30">·</span>
          <a href="#" className="transition hover:text-violet-300">
            Politique de confidentialité
          </a>
          <span className="text-violet-500/30">·</span>
          <a href="#contact" className="transition hover:text-violet-300">
            Contact
          </a>
        </div>

        <p className="text-xs text-nova-muted/50">
          © {new Date().getFullYear()} NOVA LOOT – Tous droits réservés.
        </p>
      </Reveal>
    </footer>
  )
}
