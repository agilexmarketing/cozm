import NextAuth, { type NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from './db'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: { 
        email: { label: 'Email', type: 'email' }, 
        password: { label: 'Password', type: 'password' } 
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const user = await prisma.adminUser.findUnique({ 
          where: { email: credentials.email } 
        })
        
        if (!user) return null
        
        const isValid = await bcrypt.compare(credentials.password, user.passwordHash)
        if (!isValid) return null
        
        return { 
          id: user.id, 
          email: user.email 
        }
      },
    }),
  ],
  pages: { 
    signIn: '/admin/login' 
  },
}
