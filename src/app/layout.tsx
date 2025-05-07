// RootLayout.tsx
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Ma Boutique de Voiles',
  description: 'Boutique en ligne de voiles élégantes pour femmes.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
      <CartProvider> 
      <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </CartProvider>
      </body>
    </html>
  )
}
