'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { PIX_DATA } from '@/lib/constants'

export function PixInfinit() {
  return (
    <Marquee className="overflow-x-hidden">
      {PIX_DATA.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 items-center bg-accent p-1.5 rounded-full mr-6 overflow-x-hidden"
        >
          <p className="font-bold text-sm">
            {item.name} pegou vela de{' '}
            {item.value < 10 ? (
              <span className="text-violet-500">{item.value}x</span>
            ) : (
              <span className="text-pink-500">{item.value}x</span>
            )}
          </p>
        </div>
      ))}
    </Marquee>
  )
}
