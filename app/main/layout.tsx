import { Footer, Nav } from 'app/components'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <div className="container py-8 px-6 mx-auto min-h-screen flex items-center justify-between">
        {children}
      </div>
      <Footer />
    </>
  )
}
