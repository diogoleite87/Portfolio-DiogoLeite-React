import { useState } from 'react';
import * as S from './styles';

import RightNav from './rightNav'

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger