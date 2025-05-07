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

  if (prod === undefined) return <p className="p-4">Chargement...</p>
  if (prod === null) {
    return (
      <div className="p-4 text-center">
        <p className="mb-4">Produit introuvable.</p>
        <button onClick={() => router.push('/boutique')} className="px-4 py-2 bg-gray-800 text-white rounded">
          Retour
        </button>
      </div>
    )
  }

  return <ProductDetails product={prod} />
}