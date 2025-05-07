'use client'
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

export default function CartDrawer({
  open,
  onClose
}: {
  open: boolean
  onClose: () => void
}) {
  const { cartItems, adjustQuantity, removeFromCart } = useCart()

  const total = cartItems.reduce(
    (sum, { product, qty }) => sum + product.price * qty,
    0
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50 z-40" />
      <DialogContent className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl overflow-y-auto z-50 flex flex-col">
        <div className="p-6 border-b">
          <DialogTitle className="text-xl font-semibold text-gray-900">Votre Panier</DialogTitle>
        </div>
        <div className="flex-1 p-6 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Votre panier est vide.</p>
          ) : (
            cartItems.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">€{product.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      onClick={() => adjustQuantity(product.id, -1)}
                      disabled={qty <= 1}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      −
                    </button>
                    <span className="text-sm font-medium">{qty}</span>
                    <button
                      onClick={() => adjustQuantity(product.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">€{(product.price * qty).toFixed(2)}</p>
                {/* Bouton de suppression */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Supprimer
                </button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert('Fonctionnalité de paiement à implémenter bientôt !')}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition"
            >
              Payer
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Continuer mes achats
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
