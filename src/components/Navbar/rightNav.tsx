import * as S from './styles';
import { NavLink } from "react-router-dom";


type Props = {
  setState(): void
  open: boolean
}

function RightNav({ setState, open }: Props) {

  const handleCloseNavBar = () => setState()

  return (
    <S.Ul open={open}>
      <NavLink to="/">
        <li onClick={handleCloseNavBar}>Início</li>
      </NavLink>

        <NavLink to="/about">
          <li onClick={handleCloseNavBar}>Sobre</li>
        </NavLink>

        <NavLink to="/projects">
          <li onClick={handleCloseNavBar}>Projetos</li>
        </NavLink>

        <NavLink to="/contact">
          <li onClick={handleCloseNavBar}>Contato</li>
        </NavLink>


    </S.Ul>
  )
}

export default RightNav