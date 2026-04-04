import { Link } from 'react-router-dom'

function PlanCard({ nome, descricao, preco }) {
  return (
    <div className="plan-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>{preco}</span>
      <Link
        to="/contato"
        state={{ planoSelecionado: nome }}
        className="plan-card-action"
      >
        Comprar
      </Link>
    </div>
  )
}

export default PlanCard
