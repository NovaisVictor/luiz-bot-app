import { Apple, Bot } from 'lucide-react'
import { GradiantCard } from './gradiant-card'

export function InstallAppCard() {
  return (
    <GradiantCard>
      <div className="bg-secondary p-4 rounded-md flex flex-col justify-center text-center text-lg font-extrabold gap-4">
        <h3>Instale nosso app</h3>

        <div className="flex justify-center gap-4">
          <Apple />
          <Bot />
        </div>
      </div>
    </GradiantCard>
  )
}
