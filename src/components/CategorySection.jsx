import ProductCard from './ProductCard'
import '../styles/category.css'

export default function CategorySection({ title, products }) {
  const sectionId = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <section id={sectionId} className="category-section">
      <h2 className="category-title">{title}</h2>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

