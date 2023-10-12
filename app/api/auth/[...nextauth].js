import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const dbUser = await prisma.user.findUnique({
          where: {
            name: credentials.username,
          },
        })

        if (!dbUser) {
          return null
        }

        return dbUser.password === credentials.password ? dbUser : null
      },
    }),
  ],
}
export default NextAuth(authOptions)
