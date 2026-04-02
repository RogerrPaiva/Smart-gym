function PlanCard({ nome, descricao, preco }) {
  return (
    <div className="plan-card">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>{preco}</span>
      <button>Comprar</button>
    </div>
  )
}

export default PlanCard