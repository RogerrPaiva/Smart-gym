import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="page error-page">
      <section className="error-box">
        <span className="error-code">404</span>
        <h1>Página não encontrada</h1>
        <p>
          O caminho que você tentou acessar não existe ou foi movido.
          Volte para a página inicial ou confira nossos planos.
        </p>

        <div className="error-actions">
          <Link to="/" className="primary-btn">
            Voltar para a Home
          </Link>
          <Link to="/planos" className="secondary-btn">
            Ver Planos
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Error
