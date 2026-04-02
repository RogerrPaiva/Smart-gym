import PlanCard from '../components/PlanCard'

function Planos() {
  return (
    <main className="page">
      <section className="section-title">
        <h1>Nossos Planos</h1>
        <p>Escolha o plano ideal para sua rotina e seus objetivos.</p>
      </section>

      <div className="plans-grid">
        <PlanCard
          nome="Plano Basic"
          descricao="Acesso à academia e equipamentos básicos."
          preco="R$ 79,90/mês"
        />
        <PlanCard
          nome="Plano Pro"
          descricao="Inclui aulas coletivas e acompanhamento inicial."
          preco="R$ 119,90/mês"
        />
        <PlanCard
          nome="Plano Premium"
          descricao="Inclui benefícios extras e acompanhamento completo."
          preco="R$ 159,90/mês"
        />
      </div>
    </main>
  )
}

export default Planos