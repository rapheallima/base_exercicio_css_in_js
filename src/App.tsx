import Header from './components/Cabecalho'
import Hero from './components/Hero'
import { Container } from './components/Hero/Hero.style'
import ListaVagas from './containers/ListaVagas'
import { StyleGlobal } from './Global.style'

function App() {
  return (
    <>
      <StyleGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
