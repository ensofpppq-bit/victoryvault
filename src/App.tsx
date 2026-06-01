import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductsSection } from './components/ProductsSection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { products } from './data/products'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const activeSection = useActiveSection()

  return (
    <>
      <Header activeSection={activeSection} cartCount={products.length} />
      <main>
        <Hero />
        <ProductsSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
