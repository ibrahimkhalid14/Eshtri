import ProductCard from './ProductCard'
import products from '../data/products'
import '../styles/home.css'

export default function ProductList() {
  return (
    <section className="product-list">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  )
}
