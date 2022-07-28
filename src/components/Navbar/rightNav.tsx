import React from 'react'
import * as S from './styles';


import { Routes, NavLink, Router } from "react-router-dom";


type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    <S.Ul open={props.open}>
      <React.Suspense fallback={<h2>Loading...</h2>}>    
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
        </React.Suspense>


    </S.Ul>
  )
}

export default RightNav