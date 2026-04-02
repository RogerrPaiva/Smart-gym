function Contato() {
  return (
    <main className="page">
      <section className="contact-box">
        <h1>Contato</h1>
        <p>Preencha o formulário para falar com a Smart Gym.</p>

        <form className="form-box">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu email" />
          <input type="tel" placeholder="Seu telefone" />
          <textarea placeholder="Sua dúvida" rows="5"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Contato