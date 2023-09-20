'use client'

import { ContactsInfo, YaMap } from 'app/components'

export default function Menu() {
  return (
    <main className="flex items-center justify-center">
      <YaMap />
      <ContactsInfo />
    </main>
  )
}
