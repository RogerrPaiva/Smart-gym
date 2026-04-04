import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const initialFormData = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
}

function validarFormulario(formData) {
  const nome = formData.nome.trim()
  const email = formData.email.trim()
  const telefone = formData.telefone.trim()
  const mensagem = formData.mensagem.trim()
  const novosErros = {}
  const telefoneLimpo = telefone
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
    .replace(' ', '')

  if (nome === '') {
    novosErros.nome = 'Informe seu nome.'
  }

  if (email === '') {
    novosErros.email = 'Informe seu e-mail.'
  } else if (!email.includes('@') || !email.includes('.')) {
    novosErros.email = 'Digite um e-mail válido.'
  }

  if (telefone === '') {
    novosErros.telefone = 'Informe seu telefone.'
  } else if (telefoneLimpo.length < 10) {
    novosErros.telefone = 'Digite um telefone com DDD.'
  }

  if (mensagem === '') {
    novosErros.mensagem = 'Escreva sua mensagem.'
  } else if (mensagem.length < 10) {
    novosErros.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.'
  }

  return novosErros
}

function Contato() {
  const location = useLocation()
  const planoSelecionado = location.state?.planoSelecionado || ''
  const [formData, setFormData] = useState(initialFormData)
  const [erros, setErros] = useState({})
  const [statusEnvio, setStatusEnvio] = useState('idle')
  const [mensagemStatus, setMensagemStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    setErros({
      ...erros,
      [name]: '',
    })

    setMensagemStatus('')
  }

  function handleSubmit(e) {
    e.preventDefault()

    const novosErros = validarFormulario(formData)

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros)
      setStatusEnvio('erro')
      setMensagemStatus('Revise os campos destacados e tente novamente.')
      return
    }

    setErros({})
    setStatusEnvio('enviando')
    setMensagemStatus('Enviando sua mensagem...')

    setTimeout(() => {
      setFormData(initialFormData)
      setStatusEnvio('sucesso')
      setMensagemStatus('Mensagem enviada com sucesso. Em breve a Smart Gym entra em contato.')
    }, 1200)
  }

  return (
    <main className="page">
      <section className="contact-box">
        <h1>Contato</h1>
        <p>Preencha o formulário para falar com a Smart Gym.</p>

        {planoSelecionado && (
          <div className="selected-plan-box">
            <strong>Plano de interesse:</strong> {planoSelecionado}
          </div>
        )}

        <form className="form-box" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              className={erros.nome ? 'input-error' : ''}
            />
            {erros.nome && <span className="field-error">{erros.nome}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              className={erros.email ? 'input-error' : ''}
            />
            {erros.email && <span className="field-error">{erros.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="telefone">Telefone</label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleChange}
              className={erros.telefone ? 'input-error' : ''}
            />
            {erros.telefone && <span className="field-error">{erros.telefone}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Conte sua dúvida ou objetivo"
              rows="5"
              value={formData.mensagem}
              onChange={handleChange}
              className={erros.mensagem ? 'input-error' : ''}
            />
            {erros.mensagem && <span className="field-error">{erros.mensagem}</span>}
          </div>

          {mensagemStatus && (
            <div
              className={`form-status form-status-${statusEnvio}`}
              aria-live="polite"
            >
              {mensagemStatus}
            </div>
          )}

          <button type="submit" disabled={statusEnvio === 'enviando'}>
            {statusEnvio === 'enviando' ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contato
