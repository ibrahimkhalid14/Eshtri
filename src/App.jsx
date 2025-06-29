import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes'
import { AuthProvider } from './context/AuthContext'  
  export default function App() {
    return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}
