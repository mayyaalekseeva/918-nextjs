'use client'

import { LoginForm } from 'app/components'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-green-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex gap-4 flex">
        <div>
          <span className="text-lg">Залогиниться </span>
          <span className="text-xl">&rarr;</span>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
