import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import RouteTransition from '@/components/RouteTransition'
import LayoutClient from './layout-client'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cristian Florin Cozmincă - Agent Imobiliar',
  description: 'Găsește-ți casa perfectă cu ajutorul unui agent de încredere. Cumpărare, vânzare, închiriere - rezultate garantate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Providers>
          <LayoutClient>
            <RouteTransition>
              {children}
            </RouteTransition>
          </LayoutClient>
        </Providers>
      </body>
    </html>
  )
}
