import { Crown } from 'lucide-react'
import { useState } from 'react'
import { products, type Product } from '../data/products'
import { GalleryModal } from './GalleryModal'
import { ProductCard } from './ProductCard'
import { SectionTitle } from './Reveal'

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section id="boutique" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-7">
        <SectionTitle
          title="Comptes Disponibles"
          icon={<Crown className="h-5 w-5" />}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onOpenGallery={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      <GalleryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
