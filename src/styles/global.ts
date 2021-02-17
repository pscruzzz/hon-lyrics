import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    outline: 0;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 556px) {
      font-size: 55%;
    }
    @media (max-width: 390px) {
      font-size: 50%;
    }
    @media (max-width: 350px) {
      font-size: 40%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font: 200 5.5rem 'Source Code Pro', sans-serif;
    text-rendering: optimizelegibility;

    h1 {
      font-size: 5.5rem;
      color: ${props => props.theme.colors.primary};
      margin-top: 40px;
    }

    h2 {
      font-size: 4.4rem;
      color: ${props => props.theme.colors.secondary};
      margin-top: 40px;
    }

    h3 {
      font-size: 3.3rem;
      color: ${props => props.theme.colors.third};
      margin-top: 40px;
    }

    h4 {
      font-size: 2.7rem;
      color: ${props => props.theme.colors.fourth};
      margin-top: 40px;
    }

    p {
      font-size: 2.2rem;
      color: ${props => props.theme.colors.fifth};
      margin-top: 40px;
    }
  }
`
