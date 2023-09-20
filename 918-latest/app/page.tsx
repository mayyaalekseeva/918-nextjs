'use client'

import Image from 'next/image'
import { About } from 'app/components'

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <About />
    </main>
  )
}
