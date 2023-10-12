'use client'

import { config } from 'config'
import Link from 'next/link'

export default function DashboardNavigation() {
  return (
    <nav className="bg-gradient-to-r from-indigo-400">
      <div className="mx-auto px-6 py-6 border-b-green-100 border-b-4">
        <div className="flex justify-center gap-24 text-4xl uppercase ">
          {Object.keys(config.dashboardPages).map((page, i) => (
            <Link
              href={
                config.dashboardPages[
                  page as keyof typeof config.dashboardPages
                ].url
              }
              className="hover:text-indigo-500"
              key={page + i}
            >
              {
                config.dashboardPages[
                  page as keyof typeof config.dashboardPages
                ].title
              }
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
