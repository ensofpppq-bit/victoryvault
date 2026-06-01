import { useEffect, useState } from 'react'

const SECTION_IDS = ['accueil', 'boutique', 'faq', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number] | ''

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('accueil')

  useEffect(() => {
    const onScroll = () => {
      let current: SectionId = 'accueil'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 90) {
          current = id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}
