import { Link } from 'react-router-dom'
import PlanCard from '../components/PlanCard'

function Home() {
  return (
    <main className="page">
      <section className="banner">
        <div className="banner-text">
          <h1>Transforme seu corpo com a Smart Gym</h1>
          <p>
            Tecnologia, inovação e bem-estar unidos para transformar sua experiência fitness.
          </p>
          <Link to="/planos" className="primary-btn">Ver Planos</Link>
        </div>
      </section>

      <section className="info-section">
        <h2>Por que escolher a Smart Gym?</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Treinos Personalizados</h3>
            <p>Planos adaptados ao seu objetivo e nível de experiência.</p>
          </div>
          <div className="info-card">
            <h3>Equipamentos Modernos</h3>
            <p>Estrutura completa para musculação, cardio e funcional.</p>
          </div>
          <div className="info-card">
            <h3>Acompanhamento</h3>
            <p>Suporte para manter sua constância e melhorar resultados.</p>
          </div>
        </div>
      </section>

      <section className="plans-preview">
        <h2>Planos em destaque</h2>
        <div className="plans-grid">
          <PlanCard
            nome="Plano Basic"
            descricao="Ideal para quem está começando."
            preco="R$ 79,90/mês"
          />
          <PlanCard
            nome="Plano Pro"
            descricao="Mais benefícios para acelerar resultados."
            preco="R$ 119,90/mês"
          />
          <PlanCard
            nome="Plano Premium"
            descricao="Experiência completa com máximo suporte."
            preco="R$ 159,90/mês"
          />
        </div>
      </section>
    </main>
  )
}

export default Home