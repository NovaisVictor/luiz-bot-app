'use client'
import { faker } from '@faker-js/faker'
import Pix from '@/assets/pix'
import React from 'react'
import Marquee from 'react-fast-marquee'

// Gera um array de dados aleatórios usando Faker
const generateRandomData = (count: number) => {
  return Array.from({ length: count }, () => ({
    name: faker.person.firstName(), // Gera um nome aleatório
    value: faker.commerce.price({ min: 50, max: 500, dec: 2, symbol: 'R$' }), // Gera um valor aleatório entre 50 e 500
  }))
}

// Gera 10 entradas aleatórias
const data = generateRandomData(10)

export function PixInfinit() {
  return (
    <Marquee className="overflow-x-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 items-center bg-accent p-1.5 rounded-full mr-6 overflow-x-hidden"
        >
          <Pix className="size-3" />
          <p className="font-bold text-sm">
            {item.name} ganhou{' '}
            <span className="text-emerald-500">{item.value}</span>
          </p>
        </div>
      ))}
    </Marquee>
  )
}
