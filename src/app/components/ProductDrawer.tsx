
  'use client'
  import Image from 'next/image'
  import { Fragment, useState } from 'react'
  import { Dialog, Transition } from '@headlessui/react'

  interface Product {
    id: number
    name: string
    price: number
    image: string
    description: string
  }

  interface CartItem {
    id: number
    qty: number
  }

  export default function ProductDrawer({
    open,
    onClose,
    selectedProduct,
    onAddToCart,
    cartItems,
    allProducts,
    adjustQuantity
  }: {
    open: boolean
    onClose: () => void
    selectedProduct: Product
    onAddToCart: (id: number) => void
    cartItems: CartItem[]
    allProducts: Product[]
    adjustQuantity: (id: number, change: number) => void
  }) {
    const [showFabrication, setShowFabrication] = useState(false)
    const [showLivraison, setShowLivraison] = useState(false)
    const [showRetour, setShowRetour] = useState(false)

    // Quantité et total du produit sélectionné
    const qty = cartItems.find(i => i.id === selectedProduct.id)?.qty || 0
    const totalForThis = selectedProduct.price * qty

    // Total général pour tous les articles
    const totalAll = cartItems.reduce((sum, item) => {
      const prod = allProducts.find(p => p.id === item.id)
      return sum + (prod ? prod.price * item.qty : 0)
    }, 0)

    return (
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={onClose}>
          <div className="fixed inset-0 bg-black/40" />
          <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-medium">{selectedProduct.name}</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{selectedProduct.name}</p>
                  <p className="text-sm text-gray-600">€{selectedProduct.price}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{selectedProduct.description}</p>

              {/* Quantité et total pour ce produit */}
              {qty > 0 && (
                <p className="mt-2 text-sm font-medium">
                  Vous avez {qty} × €{selectedProduct.price} = <strong>€{totalForThis}</strong>
                </p>
              )}

              {/* Ajouter les boutons pour ajuster la quantité */}
  <div className="flex items-center justify-between mt-4">
    <button
      onClick={() => adjustQuantity(selectedProduct.id, -1)}
      className="px-3 py-1 text-sm bg-gray-200 rounded"
      disabled={qty <= 0}
    >
      -
    </button>
    <span className="text-sm font-medium">{qty}</span>
    <button
      onClick={() => adjustQuantity(selectedProduct.id, 1)}
      className="px-3 py-1 text-sm bg-gray-200 rounded"
    >
      +
    </button>
  </div>

              {/* Actions */}
              <div className="space-y-2">
                <div
                  className="w-full bg-black text-white py-2 text-center rounded cursor-pointer hover:bg-gray-800 select-none"
                  onClick={() => onAddToCart(selectedProduct.id)}
                >
                  Ajouter au panier
                </div>
                <div
                  className="w-full border border-gray-300 py-2 text-center rounded cursor-pointer hover:bg-gray-100 select-none"
                  onClick={onClose}
                >
                  Continuer mes achats
                </div>
              </div>

              {/* Total général */}
              <div className="mt-4 pt-4 border-t text-sm font-semibold flex justify-between">
                <span>Total panier</span>
                <span>€{totalAll}</span>
              </div>

              {/* Informations supplémentaires */}
              <div className="mt-4 space-y-2">
                <div>
                  <div
                    className="flex justify-between text-sm font-medium text-gray-800 cursor-pointer select-none"
                    onClick={() => setShowFabrication(f => !f)}
                  >
                    <span>Fabrication</span>
                    <span>{showFabrication ? '–' : '+'}</span>
                  </div>
                  {showFabrication && (
                    <p className="mt-1 text-sm text-gray-600">
                      Voile fait main selon un savoir-faire traditionnel, tissé avec des fibres de haute qualité.
                    </p>
                  )}
                </div>
                <div>
                  <div
                    className="flex justify-between text-sm font-medium text-gray-800 cursor-pointer select-none"
                    onClick={() => setShowLivraison(v => !v)}
                  >
                    <span>Livraison</span>
                    <span>{showLivraison ? '–' : '+'}</span>
                  </div>
                  {showLivraison && (
                    <p className="mt-1 text-sm text-gray-600">
                      Livraison standard en 5-7 jours ouvrables. Suivi en temps réel.
                    </p>
                  )}
                </div>
                <div>
                  <div
                    className="flex justify-between text-sm font-medium text-gray-800 cursor-pointer select-none"
                    onClick={() => setShowRetour(v => !v)}
                  >
                    <span>Retour</span>
                    <span>{showRetour ? '–' : '+'}</span>
                  </div>
                  {showRetour && (
                    <p className="mt-1 text-sm text-gray-600">
                      Retour gratuit sous 14 jours après réception.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
  }