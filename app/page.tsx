'use client'

import { redirect, usePathname } from 'next/navigation'

export default async function MainPage() {
  const pathname = usePathname()
  console.log({ pathname })

  if (!pathname || pathname === '/') {
    redirect('/main/about')
  }
}
