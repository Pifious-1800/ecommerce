'use client'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProductDetails from '../../components/ProductDetails'
import { products } from '../../data/products'

export default function ProductPage() {
  const { id } = useParams()
  const router = useRouter()
  const [prod, setProd] = useState<typeof products[0] | null | undefined>(undefined)

  useEffect(() => {
    if (!id) return
    const found = products.find(p => p.id === Number(id))
    setProd(found ?? null)
  }, [id])

  if (prod === undefined) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-xl text-gray-600">Chargement du produit...</p>
      </div>
    )
  }

  if (prod === null) {
    return (
      <div className="p-6 text-center space-y-4">
        <p className="text-xl text-gray-700">Produit introuvable.</p>
        <button
          onClick={() => router.push('/boutique')}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition"
        >
          Retour à la boutique
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-gray-600 hover:underline"
      >
        ← Retour
      </button>
      <ProductDetails product={prod} />
    </div>
  )
}
