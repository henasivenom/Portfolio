import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'teal' | 'violet' | 'amber' | 'sky'
}

const accentClassMap: Record<NonNullable<GlassCardProps['accent']>, string> = {
  teal: 'before:bg-[linear-gradient(120deg,var(--accent-teal)_0%,transparent_45%)]',
  violet: 'before:bg-[linear-gradient(120deg,var(--accent-violet)_0%,transparent_45%)]',
  amber: 'before:bg-[linear-gradient(120deg,var(--accent-amber)_0%,transparent_45%)]',
  sky: 'before:bg-[linear-gradient(120deg,var(--accent-sky)_0%,transparent_45%)]',
}

export default function GlassCard({ className, children, accent = 'teal', ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden rounded-3xl border border-white/10 p-6',
        'before:pointer-events-none before:absolute before:inset-0 before:opacity-20 before:content-[""]',
        accentClassMap[accent],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
