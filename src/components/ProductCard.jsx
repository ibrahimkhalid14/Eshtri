import React from 'react'
import { Link } from 'react-router-dom' 
import '../styles/product.css'

export default function ProductCard({ product }) {
  const image = new URL(`../assets/products/${product.image}`, import.meta.url).href

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={image} alt={product.name} />
      </Link>
      <h3>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p className="price">${product.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}
