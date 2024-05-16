import styles from './Vaga.module.css'
import { Link, Titulo, Vaga1 } from './Vaga.style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vaga1>
    <Titulo>{props.titulo}</Titulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </Vaga1>
)

export default Vaga
