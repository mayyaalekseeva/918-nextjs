export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-r from-indigo-500">
      <nav>Admin Dashboard</nav>

      {children}
    </section>
  );
}
