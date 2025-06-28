import '../styles/home.css'
import heroImage from '../assets/hero.jpg'

export default function HeroSection() {
  return (
    <div className="hero">
      <img src={heroImage} className="hero-img" alt="Hero Banner" />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Biggest <span>Sale</span> of the Season
          </h1>
          <p>Shop Phones , Laptops , TVs and more with unbeatable prices</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}


