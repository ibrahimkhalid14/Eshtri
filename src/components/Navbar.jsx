import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    const scrollWithOffset = () => {
      const el = document.getElementById(id)
      if (el) {
        const yOffset = -130 
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        requestAnimationFrame(scrollWithOffset)
      }, 400)
    } else {
      scrollWithOffset()
    }
  }
  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <span className="brand-name">Eshtri</span>
        </Link>
      </div>

      <ul className="navbar-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>

        <li className="dropdown">
          <span>Categories ▾</span>
          <ul className="dropdown-menu">
            <li onClick={() => scrollToSection('phones')}>Phones</li>
            <li onClick={() => scrollToSection('laptops')}>Laptops</li>
            <li onClick={() => scrollToSection('tvs')}>TVs</li>
            <li onClick={() => scrollToSection('cameras')}>Cameras</li>
            <li onClick={() => scrollToSection('accessories')}>Accessories</li>
            <li onClick={() => scrollToSection('gaming')}>Gaming</li>
            <li onClick={() => scrollToSection('home-appliances')}>Home Appliances</li>
          </ul>
        </li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>

        <li className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </li>
      </ul>
    </nav>
  )
}
