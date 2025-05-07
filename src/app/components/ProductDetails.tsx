'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [sections, setSections] = useState({ fab: false, liv: false, ret: false })
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggle = (key: keyof typeof sections) =>
    setSections(s => ({ ...s, [key]: !s[key] }))

  const handleAdd = () => {
    addToCart(product)
    setDrawerOpen(true)
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full aspect-[16/9]"> {/* Adjusted aspect ratio */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">€{product.price}</p>
            <p className="mb-6 text-gray-600">{product.description}</p>

            {/* Move "Ajouter au panier" to the top */}
            <div
              className="w-full bg-black text-white py-2 text-center rounded cursor-pointer hover:bg-gray-800 select-none mb-4"
              onClick={handleAdd}
            >
              Ajouter au panier
            </div>

            {/* Sections for Fabrication, Livraison, Retour */}
            {(['fab', 'liv', 'ret'] as const).map(key => {
              const titles = { fab: 'Fabrication', liv: 'Livraison', ret: 'Retour' }
              const texts = {
                fab: 'Voile fait main selon un savoir-faire traditionnel.',
                liv: 'Livraison standard en 5-7 jours ouvrables.',
                ret: 'Retour gratuit sous 14 jours.'
              }
              return (
                <div key={key} className="border-b border-gray-200 py-2">
                  <div
                    className="flex justify-between w-full text-left font-medium text-gray-800 cursor-pointer"
                    onClick={() => toggle(key)}
                  >
                    <span>{titles[key]}</span>
                    <span>{sections[key] ? '–' : '+'}</span>
                  </div>
                  {sections[key] && <p className="mt-2 text-gray-600">{texts[key]}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
