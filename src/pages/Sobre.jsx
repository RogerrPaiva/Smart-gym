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

      <section className="sobre-container">
        <div className="sobre-card">
          <h2>Quem somos</h2>
          <p>
            A Smart Gym é uma academia inteligente criada para oferecer uma
            experiência moderna, prática e eficiente para todos que buscam
            mais saúde, qualidade de vida e desempenho físico. Nosso objetivo
            é ir além do treino tradicional, unindo tecnologia e bem-estar em
            um só lugar.
          </p>
        </div>

        <div className="sobre-card">
          <h2>Nossa missão</h2>
          <p>
            Incentivar hábitos saudáveis e promover qualidade de vida por meio
            de um ambiente inovador, acessível e preparado para atender
            diferentes perfis de alunos, desde iniciantes até pessoas com foco
            em alta performance.
          </p>
        </div>

        <div className="sobre-card">
          <h2>Nossa visão</h2>
          <p>
            Ser referência em academias inteligentes, conectando tecnologia e
            treinamento para criar uma experiência fitness mais personalizada,
            motivadora e eficiente.
          </p>
        </div>

        <div className="sobre-card">
          <h2>Nossos valores</h2>
          <ul>
            <li>Inovação</li>
            <li>Compromisso com resultados</li>
            <li>Saúde e bem-estar</li>
            <li>Atendimento de qualidade</li>
            <li>Acessibilidade</li>
            <li>Motivação e superação</li>
          </ul>
        </div>

        <div className="sobre-card">
          <h2>O que nos torna smart?</h2>
          <p>
            Na Smart Gym, a tecnologia é usada para tornar a rotina dos alunos
            mais prática e eficiente. Com recursos digitais, acompanhamento de
            desempenho e ferramentas que auxiliam no cuidado com a saúde, como
            a calculadora de IMC, buscamos oferecer uma experiência mais
            completa e inteligente.
          </p>
        </div>

        <div className="sobre-card">
          <h2>Por que escolher a Smart Gym?</h2>
          <p>
            Porque aqui você encontra mais do que uma academia: encontra um
            espaço de evolução, superação e transformação. Nossa proposta é
            ajudar cada aluno a alcançar seus objetivos com mais conforto,
            organização e motivação, em um ambiente moderno e acolhedor.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Sobre