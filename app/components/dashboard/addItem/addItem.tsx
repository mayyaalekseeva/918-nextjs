'use client'

import AddItemForm from './addItemForm'

export default function Navigation() {
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-8 font-bold">Добавить блюдо</h2>
      <AddItemForm />
    </div>
  )
}
