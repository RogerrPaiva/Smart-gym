import { Link } from 'react-router-dom'

function PlanCard({
  nome,
  descricao,
  preco,
  beneficios = [],
  destaque = false,
  tag = '',
  cta = 'Comprar',
}) {
  return (
    <article className={`plan-card ${destaque ? 'plan-card-featured' : ''}`}>
      {tag && <span className="plan-card-tag">{tag}</span>}

      <div className="plan-card-header">
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>

      <div className="plan-card-price-box">
        <span className="plan-card-price">{preco}</span>
        <small>Cancele quando quiser</small>
      </div>

      {beneficios.length > 0 && (
        <ul className="plan-card-benefits">
          {beneficios.map((beneficio) => (
            <li key={beneficio}>{beneficio}</li>
          ))}
        </ul>
      )}

      <Link
        to="/contato"
        state={{ planoSelecionado: nome }}
        className="plan-card-action"
      >
        {cta}
      </Link>
    </article>
  )
}

export default PlanCard
