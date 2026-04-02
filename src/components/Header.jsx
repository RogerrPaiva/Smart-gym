import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import Footer from './Footer'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Smart Gym
        </Link>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/imc">Calculadora IMC</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header