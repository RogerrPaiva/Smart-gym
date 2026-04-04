import '../styles/Sobre.css'

function Sobre() {
  return (
    <main className="sobre-page">
      <section className="sobre-hero">
        <div className="sobre-overlay">
          <h1>Sobre a Smart Gym</h1>
          <p>
            Tecnologia, inovação e bem-estar unidos para transformar sua
            experiência fitness.
          </p>
        </div>
      </section>
      <section className="sobre-section">
        <div className="sobre-grid">
          <div className="sobre-card">
            <h3>Quem somos</h3>
            <p>
              A Smart Gym é uma academia inteligente criada para oferecer uma
              experiência moderna, prática e eficiente para todos que buscam
              mais saúde, qualidade de vida e desempenho físico.
            </p>
          </div>

          <div className="sobre-card">
            <h3>Nossa missão</h3>
            <p>
              Incentivar hábitos saudáveis e promover qualidade de vida por meio
              de um ambiente inovador, acessível e preparado para diferentes
              perfis de alunos.
            </p>
          </div>

          <div className="sobre-card">
            <h3>Nossa visão</h3>
            <p>
              Ser referência em academias inteligentes, conectando tecnologia e
              treinamento para criar uma experiência fitness mais personalizada,
              motivadora e eficiente.
            </p>
          </div>
        </div>
      </section>

      <section className="sobre-section">
        <div className="sobre-grid">
          <div className="sobre-card">
            <h3>Tecnologia</h3>
            <p>
              Utilizamos recursos digitais para tornar a rotina dos alunos mais
              prática, organizada e moderna.
            </p>
          </div>

          <div className="sobre-card">
            <h3>Acompanhamento</h3>
            <p>
              Buscamos oferecer suporte para que cada aluno acompanhe sua
              evolução e alcance seus objetivos com mais eficiência.
            </p>
          </div>

          <div className="sobre-card">
            <h3>Bem-estar</h3>
            <p>
              Mais do que treinos, oferecemos um espaço de motivação,
              superação e transformação para o dia a dia.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sobre
