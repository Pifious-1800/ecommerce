// src/app/boutique/page.tsx
'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { products } from '../data/products'

export default function BoutiquePage() {
  const router = useRouter()

  return (
    <section className="py-8 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Nos Voiles</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <div
              onClick={() => router.push(`/product/${p.id}`)}
              className="relative w-full aspect-square cursor-pointer"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-xl font-semibold">{p.name}</p>
              <p className="text-gray-600 mb-2">€{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
