import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background: #04044a; */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  margin-top: -15px;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;


  a {
    text-decoration: none;
    text-transform: none;
    margin-left: 15px;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #efefef;
    }
  }

  li {
    padding: 18px 10px;

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    background: #04044a;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 80vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    border-bottom-left-radius: 20px;
    li {
      color: #fff;
      margin-right: 34px;

      &:hover {
        color: #efefefef;
      }
    }
  }
`

export const Title = styled.text`
  margin: 20px 20px 20px 7%;
  font-size: 1.8em;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }

`

export const TitleUl = styled.text`
  font-size: 30px;
  margin-top: 20px;
  display: none;

  @media (max-width: 768px) {

  }
`
export const Icon = styled.div`
  width: 100vw;
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    pointer-events: none;
    object-fit: contain;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  }
`