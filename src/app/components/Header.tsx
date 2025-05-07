'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { auth } from '@/../lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa'

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/')
  }

  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Desktop nav à gauche (reste inchangé) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
          <Link href="/" className="hover:text-gray-600">Accueil</Link>
          <Link href="/boutique" className="hover:text-gray-600">Boutique</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo centré */}
        <div className="flex-1 text-center text-xl font-bold text-black tracking-widest">
          Amghar
        </div>

        {/* Panier & Compte (icônes) */}
        <div className="flex items-center space-x-5 text-sm font-medium text-black">
          {/* Panier */}
         

          {/* Compte */}
          {user ? (
            <>
              <Link href="/account" className="hover:text-gray-600">
                <FaUser className="text-xl" />
              </Link>
              <span
                onClick={handleLogout}
                className="cursor-pointer hover:text-gray-600"
              >
                Se déconnecter
              </span>
            </>
          ) : (
            // Version PC : "Se connecter" texte
            <div className="hidden md:block">
              <Link href="/account/login" className="hover:text-gray-600">
                Se connecter
              </Link>

              
            </div>

            
          )}

          

          {/* Version mobile : logo pour la connexion */}
          {!user && (
            <div className="md:hidden">
              <Link href="/account/login">
                <FaUser className="text-xl hover:text-gray-600" />
              </Link>
            </div>
          )}

          <Link href="/panier" className="hover:text-gray-600">
            <FaShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Menu déroulant mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 py-4 text-center">
            <Link href="/" className="block text-black hover:text-gray-600">Accueil</Link>
            <Link href="/boutique" className="block text-black hover:text-gray-600">Boutique</Link>
            <Link href="/about" className="block text-black hover:text-gray-600">About</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
