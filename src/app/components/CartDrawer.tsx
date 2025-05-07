'use client'
import { Dialog, DialogOverlay, DialogTitle, DialogContent } from '@radix-ui/react-dialog'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

export default function CartDrawer({
  open,
  onClose
}: {
  open: boolean
  onClose: () => void
}) {
  const { cartItems, adjustQuantity } = useCart()

  const total = cartItems.reduce(
    (sum, { product, qty }) => sum + product.price * qty,
    0
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {/* Dialog Overlay */}
      <DialogOverlay className="fixed inset-0 bg-black/40 z-40" />

      {/* Dialog Content */}
      <DialogContent className="fixed right-0 top-0 w-full max-w-md p-6 overflow-y-auto bg-white z-50 shadow-xl rounded-lg">
        {/* Dialog Title */}
        <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
          Votre Panier
        </DialogTitle>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Votre panier est vide.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-gray-600">€{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustQuantity(product.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={qty <= 1}
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => adjustQuantity(product.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-lg mt-4">
              Total : €{total.toFixed(2)}
            </div>
            {/* Bouton "Payer" */}
            <button
              onClick={() => alert("Fonctionnalité de paiement à implémenter bientôt !")}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded"
            >
              Payer
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
