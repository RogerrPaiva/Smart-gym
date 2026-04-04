import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Planos from "./pages/Planos"
import Imc from "./pages/Imc"
import Sobre from "./pages/Sobre"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/imc" element={<Imc />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
