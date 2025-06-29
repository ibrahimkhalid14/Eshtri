import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import products from '../data/products'

export default function Home() {
  const categories = [...new Set(products.map(p => p.category))]

  return (
    <>
      <HeroSection />
      {categories.map(category => (
        <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
          <CategorySection
            title={category}
            products={products.filter(p => p.category === category)}
          />
        </section>
      ))}
    </>
  )
}
