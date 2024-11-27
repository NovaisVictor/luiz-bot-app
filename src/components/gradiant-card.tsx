import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}
export function GradiantCard({ children, className }: Props) {
  return (
    <div className="relative inline-block p-1 rounded-lg">
      <div className="bg-gradient-to-r from-primary to-card rounded-lg p-0.5">
        <div className={cn(`bg-secondary p-4 rounded-lg`, className)}>
          {children}
        </div>
      </div>
    </div>
  )
}
