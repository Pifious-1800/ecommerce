// app/about/page.tsx

// TODO: Add image with good quality and profesionalism

import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <section className="py-12 px-6 bg-[var(--background)]">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh]">
        <Image
          src="/windows.svg" // Add a suitable image for this section
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-semibold">Our Story</h1>
        </div>
      </div>

      {/* Brand Story */}
      <section className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">
          Who We Are
        </h2>
        <p className="mt-6 text-lg text-[var(--foreground)] leading-relaxed">
          At <strong>Amghar</strong>, we are passionate about creating high-quality, elegant, and timeless scarves for women. Our mission is to provide pieces that empower every woman, making her feel beautiful, confident, and effortlessly stylish. 
        </p>
        <p className="mt-4 text-lg text-[var(--foreground)] leading-relaxed">
          Each scarf is crafted with care and precision, using only the finest fabrics to ensure the highest standards of comfort, durability, and style.
        </p>
      </section>

      {/* Product Quality */}
      <section className="mt-16 bg-white py-12 px-6 rounded-lg shadow-lg">
        <h3 className="text-2xl text-center font-semibold text-[var(--foreground)]">
          Our Quality Promise
        </h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <Image
              src="/quality1.jpg" // Add suitable images for each quality
              alt="Quality Fabric"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="mt-4 text-xl font-medium text-[var(--foreground)]">Premium Fabrics</p>
            <p className="text-md text-[var(--foreground)] leading-relaxed">
              We only use premium fabrics that are soft to the touch and durable, ensuring a long-lasting product that feels as good as it looks.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/quality2.jpg" // Add a relevant image
              alt="Quality Craftsmanship"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="mt-4 text-xl font-medium text-[var(--foreground)]">Expert Craftsmanship</p>
            <p className="text-md text-[var(--foreground)] leading-relaxed">
              Each voile is carefully handcrafted with attention to detail, ensuring precision in every stitch and making each piece unique.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/quality3.jpg" // Add a relevant image
              alt="Timeless Design"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="mt-4 text-xl font-medium text-[var(--foreground)]">Timeless Design</p>
            <p className="text-md text-[var(--foreground)] leading-relaxed">
              Our designs are created with timeless elegance in mind. Each scarf is meant to transcend seasons and trends, offering versatile styles that can be worn year-round.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/quality4.jpg" // Add a relevant image
              alt="Sustainable Practices"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
            <p className="mt-4 text-xl font-medium text-[var(--foreground)]">Sustainable Practices</p>
            <p className="text-md text-[var(--foreground)] leading-relaxed">
              We are committed to sustainability. Our fabrics are sourced responsibly, and we prioritize eco-friendly practices in every step of the production process.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="mt-16 text-center">
        <p className="text-xl text-[var(--foreground)]">
          Our goal is to offer not just a scarf, but a symbol of elegance and confidence that makes every woman feel truly special.
        </p>
      </section>
    </section>
  )
}
