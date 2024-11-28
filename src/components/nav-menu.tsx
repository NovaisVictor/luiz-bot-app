'use client'
import { cn } from '@/lib/utils'
import { CircleArrowRight, Gamepad2, HomeIcon, Video } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavMenu() {
  const pathName = usePathname()
  return (
    <div className="fixed bottom-2 right-8 left-8">
      <div className="relative inline-block p-1 rounded-full w-full">
        <div className="bg-gradient-to-r from-primary to-card rounded-full p-0.5">
          <div
            className={`bg-secondary p-3.5 rounded-full bg-gradient-to-r from-primary/40 to-accent`}
          >
            <div className="flex justify-around items-center">
              <Link
                href={'/'}
                className={cn(
                  'rounded-full p-3',
                  pathName === '/' && 'bg-primary',
                )}
              >
                <HomeIcon className="" />
              </Link>
              <Link
                href={'/live'}
                className={cn(
                  'rounded-full p-3',
                  pathName === '/live' && 'bg-primary',
                )}
              >
                <Video />
              </Link>
              <Link
                href={'/aviator'}
                className={cn(
                  'rounded-full p-3',
                  pathName === '/aviator' && 'bg-primary',
                )}
              >
                <Gamepad2 />
              </Link>
              <Link
                href={'/course'}
                className={cn(
                  'rounded-full p-3',
                  pathName === '/course' && 'bg-primary',
                )}
              >
                <CircleArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
