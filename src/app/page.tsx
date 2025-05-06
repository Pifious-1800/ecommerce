// app/HomePage.tsx
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[55vh]">
        <Image
          src="/hero-voile.jpg"
          alt="Voile hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#d3abc7] flex flex-col items-center justify-center text-center px-4">
          
          <p className="text-xl md:text-3xl text-black max-w-xl">
            Élégance. Simplicité. Intemporalité.
          </p>
          <Link href="/boutique">
            <button className="mt-6 px-4 py-3 bg-black text-black rounded-full font-medium tracking-wide">
              Voir la collection
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[var(--accent-color)] opacity-60" />

      </section>

      {/* Spécialisation */}
<section className="py-8 px-4 text-center bg-[var(--background)]">
  <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
    Spécialistes du voile féminin
  </h2>
  <p className="text-[var(--foreground)] max-w-xl mx-auto text-sm leading-relaxed">
    Chez <strong>Amghar</strong>, nous mêlons élégance moderne et savoir-faire traditionnel pour créer des pièces uniques pensées pour sublimer chaque femme.
  </p>
</section>

{/* Catégories */}
<section className="py-12 px-4 bg-[var(--background)]">
  <h3 className="text-center text-2xl font-semibold mb-6 tracking-tight text-[var(--foreground)]">Catégories</h3>
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {['Été', 'Élégantes', 'Sport'].map((cat) => (
      <Link
        key={cat}
        href="/boutique"
        className="group relative overflow-hidden rounded-lg border border-[var(--accent-color)]"
      >
        <Image
          src={`/cat-${cat.toLowerCase()}.jpg`}
          alt={`Voiles ${cat}`}
          width={400}
          height={280}
          className="object-cover w-full h-60"
        />
        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
          <span className="text-black text-base font-medium tracking-wide">
            {cat}
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>

{/* Réseaux sociaux */}
<section className="py-10 px-4 text-center bg-[var(--background)]">
  <h3 className="text-base font-semibold mb-2 text-[var(--foreground)] tracking-wide">Suivez-nous</h3>
  <p className="text-[var(--foreground)] text-sm mb-4">
    Découvrez nos nouveautés et inspirations en nous rejoignant sur nos réseaux sociaux.
  </p>
  <div className="flex justify-center items-center gap-4 text-2xl text-[var(--foreground)]">
    <a href="#" aria-label="TikTok" className="hover:text-gray-500">
      <FaTiktok />
    </a>
    <a href="#" aria-label="Instagram" className="hover:text-gray-500">
      <FaInstagram />
    </a>
  </div>
</section>
    </>
  )
}
