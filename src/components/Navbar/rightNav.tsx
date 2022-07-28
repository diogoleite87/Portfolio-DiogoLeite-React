import * as S from './styles';
import { NavLink } from "react-router-dom";


type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <S.Ul open={props.open}>
      <NavLink to="/" reloadDocument>
        <li>Início</li>
      </NavLink>

        <NavLink to="/about" reloadDocument>
          <li>Sobre</li>
        </NavLink>

        <NavLink to="/projects" reloadDocument>
          <li>Projetos</li>
        </NavLink>

        <NavLink to="/contact" reloadDocument>
          <li>Contato</li>
        </NavLink>


    </S.Ul>
  )
}

export default RightNav