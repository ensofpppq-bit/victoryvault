import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
}

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface SectionTitleProps {
  title: string
  icon?: ReactNode
}

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <Reveal className="mb-14 text-center">
      <h2 className="flex items-center justify-center gap-3 text-3xl font-extrabold tracking-tight md:text-4xl">
        {icon && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 ring-1 ring-violet-500/30">
            {icon}
          </span>
        )}
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-violet-600 to-violet-400" />
    </Reveal>
  )
}
