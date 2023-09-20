'use client'

import { config } from 'config'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="">
      <div className="container mx-auto px-6 py-6 border-b-green-100 border-b-4">
        <div className="flex justify-center gap-24 text-2xl uppercase ">
          {Object.keys(config.pages).map((page) => (
            <Link
              href={config.pages[page as keyof typeof config.pages].url}
              className="hover:text-green-500"
            >
              {config.pages[page as keyof typeof config.pages].title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
