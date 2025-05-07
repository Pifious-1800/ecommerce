import Image from 'next/image'

//app/boutique/page.tsx

// Todo: Replace with actual product data + images with good quality


const products = [
  { name: "Voile Été", price: "test - €40", image: "/product1.jpg" },
  { name: "Voile Élégante", price: "test - €55", image: "/product2.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  { name: "Voile Été", price: "test - €40", image: "/product1.jpg" },
  { name: "Voile Élégante", price: "test - €55", image: "/product2.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  { name: "Voile Été", price: "test - €40", image: "/product1.jpg" },
  { name: "Voile Élégante", price: "test - €55", image: "/product2.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  { name: "Voile Sport", price: "test - €30", image: "/product3.jpg" },
  // Add more products here
]

export default function BoutiquePage() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 bg-[var(--background)]">
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3">
        {products.map((product, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <p className="text-base font-semibold text-[var(--foreground)]">
                {product.name}
              </p>
              <p className="text-sm text-[var(--foreground)]">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
