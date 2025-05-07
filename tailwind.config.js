export default function BoutiquePage() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 bg-[var(--background)]">
      <div className="grid gap-6 grid-cols-3 sm:grid-cols-4">
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