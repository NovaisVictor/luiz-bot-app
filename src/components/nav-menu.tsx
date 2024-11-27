import { CircleArrowRight, Gamepad2, HomeIcon, Video } from 'lucide-react'

export function NavMenu() {
  return (
    <div className="fixed bottom-2 right-8 left-8">
      <div className="relative inline-block p-1 rounded-full w-full">
        <div className="bg-gradient-to-r from-primary to-card rounded-full p-0.5">
          <div
            className={`bg-secondary p-4 rounded-full bg-gradient-to-r from-primary/40 to-accent py-6`}
          >
            <div className="flex justify-around">
              <HomeIcon />
              <Video />
              <Gamepad2 />
              <CircleArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
