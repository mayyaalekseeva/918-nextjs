'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="">
      <div className="container mx-auto px-6 py-6 border-b-green-100 border-b-4">
        <div className="flex justify-center gap-24 text-2xl uppercase ">
          <Link href="/" className="hover:text-green-500">
            Главная
          </Link>
          <Link href="/menu" className="hover:text-green-500">
            Меню
          </Link>
          <Link href="/contacts" className="hover:text-green-500">
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  )
}
