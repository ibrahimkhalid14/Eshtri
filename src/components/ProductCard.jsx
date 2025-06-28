import React from 'react'
import '../styles/product.css'

export default function ProductCard({ product }) {
  const image = new URL(`../assets/products/${product.image}`, import.meta.url).href

  return (
    <div className="product-card">
      <img src={image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}
