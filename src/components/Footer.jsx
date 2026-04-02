import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Smart Gym</h2>
          <p>
            Evolua com treinos inteligentes, acompanhamento de qualidade
            e uma experiência moderna dentro da academia.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>
          <Link to="/">Home</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/imc">Calculadora IMC</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <p>Email: contato@smartgym.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>São Paulo - SP</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Smart Gym. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer