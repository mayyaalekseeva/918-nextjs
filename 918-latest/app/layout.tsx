import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9/18 бистро",
  description: "Бистро со спешалти кофе",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
