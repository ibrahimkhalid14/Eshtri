import ProductCard from './ProductCard'
import '../styles/category.css'

export default function CategorySection({ title, products }) {
  return (
    <section className="category-section">
      <h2 className="category-title">{title}</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
