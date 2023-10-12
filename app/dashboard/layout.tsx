import { DashboardNav } from 'app/components'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-indigo-100">
      <DashboardNav />
      <div className="p-16 mx-auto min-h-screen flex w-full">{children}</div>
    </section>
  )
}
