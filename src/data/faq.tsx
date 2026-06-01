import type { ReactNode } from 'react'
import { DISCORD_URL } from './products'

export interface FaqItem {
  id: string
  question: string
  answer: ReactNode
}

export const faqItems: FaqItem[] = [
  {
    id: 'delivery',
    question: "Comment recevoir mon compte après l'achat ?",
    answer: (
      <>
        Dès que votre paiement est validé, vous recevez automatiquement un{' '}
        <strong className="text-white">fichier PDF</strong> contenant les
        identifiants de votre compte au format{' '}
        <strong className="text-white">email : mot de passe</strong>.
        <ol className="mt-4 space-y-3">
          {[
            {
              title: 'Payez sur Payhip',
              desc: 'Cliquez sur « Acheter Maintenant » et finalisez votre achat.',
            },
            {
              title: 'Téléchargez votre PDF',
              desc: 'Le fichier est disponible immédiatement sur la page de confirmation Payhip et vous est aussi envoyé par e-mail.',
            },
            {
              title: 'Ouvrez le PDF',
              desc: 'Vous y trouverez les identifiants du compte : email et mot de passe, prêts à l\'emploi.',
            },
            {
              title: 'Connectez-vous sur Fortnite',
              desc: 'Utilisez les identifiants du PDF pour vous connecter. En cas de problème, contactez-nous sur Discord.',
            },
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-400">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <strong className="text-white">{step.title}</strong>
                <span className="mt-0.5 block">{step.desc}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-xl border border-violet-500/25 bg-violet-600/10 px-4 py-3 text-sm text-nova-muted">
          <strong className="text-white">Exemple dans le PDF :</strong>{' '}
          <span className="font-mono text-violet-300">compte@email.com : VotreMotDePasse123</span>
        </p>
      </>
    ),
  },
  {
    id: 'security',
    question: 'Les comptes sont-ils sécurisés ?',
    answer:
      'Oui, chaque compte est vérifié manuellement avant la mise en vente.',
  },
  {
    id: 'payment',
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'Carte bancaire (Visa, Mastercard) et PayPal via Payhip.',
  },
  {
    id: 'email',
    question: "Puis-je modifier l'e-mail du compte ?",
    answer: 'Oui, notre support Discord vous guide dans cette démarche.',
  },
  {
    id: 'support',
    question: 'Comment contacter le support ?',
    answer: (
      <>
        Sur Discord 24/7 :{' '}
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-300 hover:text-indigo-200"
        >
          discord.gg/bqxDsw7VV2
        </a>
      </>
    ),
  },
]
