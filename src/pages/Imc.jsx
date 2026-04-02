import { useState } from 'react'
import '../styles/Imc.css'

function Calculadora() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')
  const [classificacao, setClassificacao] = useState('')

  function calcularIMC(e) {
    e.preventDefault()

    const pesoNum = Number(peso)
    const alturaNum = Number(altura)

    if (!pesoNum || !alturaNum) {
      setResultado('Preencha os campos corretamente.')
      setClassificacao('')
      return
    }

    const imc = pesoNum / (alturaNum * alturaNum)
    const imcFormatado = imc.toFixed(2)

    let classe = ''

    if (imc < 18.5) classe = 'Abaixo do peso'
    else if (imc < 25) classe = 'Peso normal'
    else if (imc < 30) classe = 'Sobrepeso'
    else classe = 'Obesidade'

    setResultado(`Seu IMC é ${imcFormatado}`)
    setClassificacao(classe)
  }

  return (
    <main className="imc-page">
      <section className="imc-container">
        <h1>Calculadora IMC</h1>
        <p>Faça o cálculo do seu índice de massa corporal.</p>

        <form onSubmit={calcularIMC} className="imc-form">
          <input
            type="number"
            step="0.1"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Altura (m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button type="submit">Calcular</button>
        </form>

        {resultado && (
          <div className="imc-resultado">
            <h2>{resultado}</h2>
            <span>{classificacao}</span>
          </div>
        )}
      </section>
    </main>
  )
}

export default Calculadora