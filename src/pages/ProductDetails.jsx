import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import '../styles/productDetails.css'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  if (!product) {
    return <div style={{ padding: '60px' }}>Product not found.</div>
  }

  // ✅ بناء رابط الصورة بشكل صحيح
  const image = new URL(`../assets/products/${product.image}`, import.meta.url).href

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="product-image">
        <img src={image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-desc">{product.description}</p>
        <p className="product-stock">
          {product.stock > 0 ? `In stock (${product.stock})` : 'Out of stock'}
        </p>

        <div className="product-actions">
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
