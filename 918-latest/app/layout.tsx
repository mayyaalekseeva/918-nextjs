import { Footer, Nav } from 'app/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '9/18 бистро',
  description: 'Бистро со спешалти кофе',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Nav />

        <div className="container py-8 px-6 mx-auto min-h-screen flex items-center justify-center">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
