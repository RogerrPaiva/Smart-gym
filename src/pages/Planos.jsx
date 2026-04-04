import PlanCard from '../components/PlanCard'

function Planos() {
  return (
    <main className="page">
      <section className="section-title plans-section-title">
        <h1>Nossos Planos</h1>
        <p>Escolha o plano ideal para sua rotina, seu ritmo de treino e seus objetivos.</p>
      </section>

      <div className="plans-grid">
        <PlanCard
          nome="Plano Basic"
          descricao="Perfeito para quem quer começar com constância e foco."
          preco="R$ 79,90/mês"
          beneficios={[
            'Acesso à sala de musculação',
            'Avaliação inicial',
            'Treino livre em horário comercial',
          ]}
          cta="Quero esse plano"
        />
        <PlanCard
          nome="Plano Pro"
          descricao="O plano mais equilibrado para evoluir com variedade e acompanhamento."
          preco="R$ 119,90/mês"
          beneficios={[
            'Tudo do plano Basic',
            'Aulas coletivas inclusas',
            'Acompanhamento inicial',
          ]}
          destaque={true}
          cta="Quero esse plano"
        />
        <PlanCard
          nome="Plano Premium"
          descricao="Experiência completa para quem quer mais suporte e mais desempenho."
          preco="R$ 159,90/mês"
          beneficios={[
            'Tudo do plano Pro',
            'Acompanhamento mais próximo',
            'Benefícios exclusivos Smart Gym',
          ]}
          cta="Quero esse plano"
        />
      </div>
    </main>
  )
}

export default Planos
