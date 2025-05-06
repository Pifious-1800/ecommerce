// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Liens à gauche */}
        <div className="flex space-x-6 text-sm font-medium text-black">
          <Link href="/" className="hover:text-gray-600">Accueil</Link>
          <Link href="/boutique" className="hover:text-gray-600">Boutique</Link>
          <Link href="/a-propos" className="hover:text-gray-600">À propos</Link>
        </div>

        {/* Logo centré */}
        <div className="text-xl font-bold text-black tracking-widest">Amghar</div>

        {/* Liens à droite */}
        <div className="flex space-x-6 text-sm font-medium text-black">
          <Link href="/compte" className="hover:text-gray-600">Compte</Link>
          <Link href="/panier" className="hover:text-gray-600">Panier</Link>
        </div>
      </div>
    </header>
  )
}
