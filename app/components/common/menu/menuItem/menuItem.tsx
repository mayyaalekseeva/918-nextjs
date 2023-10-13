'use client'

import { Item } from '@prisma/client'
import { config } from 'config'
import Link from 'next/link'

export default function MenuItem(item: Partial<Item>) {
  const { id, name, ingredients, price, kcal, weight } = item
  return (
    <div className="flex">
      <h4>{name}</h4>

      <p>{ingredients}</p>

      <span>{kcal}</span>
      <span>{weight}</span>

      <span>{price}</span>
    </div>
  )
}
