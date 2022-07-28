import React from 'react';
import * as S from './styles';


import Burger from './burguer';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Title>Portfólio | Diogo Leite</S.Title>
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}