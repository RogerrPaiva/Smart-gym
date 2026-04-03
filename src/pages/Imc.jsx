import { useState } from 'react'
import '../styles/Imc.css'

function parseDecimal(value) {
  const normalizedValue = value.trim().replace(',', '.')
  const numberValue = parseFloat(normalizedValue)

  if (Number.isNaN(numberValue)) {
    return Number.NaN
  }

  return numberValue
}

function getImcData(imc) {
  if (imc < 18.5) {
    return {
      classificacao: 'Abaixo do peso',
      contexto: 'Você está abaixo da faixa considerada saudável para o IMC.',
    }
  }

  if (imc < 25) {
    return {
      classificacao: 'Peso normal',
      contexto: 'Você está dentro da faixa considerada saudável para o IMC.',
    }
  }

  if (imc < 30) {
    return {
      classificacao: 'Sobrepeso',
      contexto: 'Seu resultado ficou acima da faixa saudável de IMC.',
    }
  }

  return {
    classificacao: 'Obesidade',
    contexto: 'Seu resultado ficou bem acima da faixa saudável de IMC.',
  }
}

function Calculadora() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState(null)

  function calcularIMC(e) {
    e.preventDefault()

    const pesoNum = parseDecimal(peso)
    let alturaNum = parseDecimal(altura)

    if (alturaNum > 3) {
      alturaNum = alturaNum / 100
    }

    if (Number.isNaN(pesoNum) || Number.isNaN(alturaNum)) {
      setResultado({
        tipo: 'erro',
        titulo: 'Preencha os campos corretamente.',
        classificacao: '',
        contexto: 'Use apenas números. Você pode informar decimais com ponto ou vírgula.',
        faixaSaudavel: '',
      })
      return
    }

    if (pesoNum <= 0 || alturaNum <= 0) {
      setResultado({
        tipo: 'erro',
        titulo: 'Peso e altura precisam ser maiores que zero.',
        classificacao: '',
        contexto: 'Revise os valores informados para continuar.',
        faixaSaudavel: '',
      })
      return
    }

    if (pesoNum < 10 || pesoNum > 500 || alturaNum < 0.5 || alturaNum > 2.8) {
      setResultado({
        tipo: 'erro',
        titulo: 'Os valores parecem fora do esperado.',
        classificacao: '',
        contexto: 'Confira se o peso está em kg e a altura em metros, como 1,75.',
        faixaSaudavel: '',
      })
      return
    }

    const imc = pesoNum / (alturaNum * alturaNum)
    const imcFormatado = imc.toFixed(2)
    const faixaMinima = (18.5 * alturaNum * alturaNum).toFixed(1)
    const faixaMaxima = (24.9 * alturaNum * alturaNum).toFixed(1)
    const { classificacao, contexto } = getImcData(imc)

    setResultado({
      tipo: 'sucesso',
      titulo: `Seu IMC é ${imcFormatado}`,
      classificacao,
      contexto,
      faixaSaudavel: `Para sua altura, a faixa de peso saudável fica entre ${faixaMinima} kg e ${faixaMaxima} kg.`,
    })
  }

  return (
    <main className="imc-page">
      <section className="imc-container">
        <h1>Calculadora IMC</h1>
        <p>Faça o cálculo do seu índice de massa corporal.</p>

        <form onSubmit={calcularIMC} className="imc-form">
          <input
            type="text"
            inputMode="decimal"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <input
            type="text"
            inputMode="decimal"
            placeholder="Altura (m ou cm)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <p className="imc-hint">Aceita ponto, vírgula e altura em cm. Ex.: 70,5 e 1,75 ou 175.</p>
          <button type="submit">Calcular</button>
        </form>

        {resultado && (
          <div className={`imc-resultado ${resultado.tipo === 'erro' ? 'imc-resultado-erro' : ''}`}>
            <h2>{resultado.titulo}</h2>
            {resultado.classificacao && <span>{resultado.classificacao}</span>}
            <p>{resultado.contexto}</p>
            {resultado.faixaSaudavel && <strong>{resultado.faixaSaudavel}</strong>}
          </div>
        )}
      </section>
    </main>
  )
}

export default Calculadora
