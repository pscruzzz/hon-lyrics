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
    /* background: ${props => props.theme.colors.background}; */
    color: ${props => props.theme.colors.primary};
    font: 5.5rem 'Poppins', sans-serif;
    font-weight: 300;
    text-rendering: optimizelegibility;
    perspective: 1000px;

    h1 {
      font-size: 6.6rem;
    }

    h2 {
      font-size: 5.5rem;
    }

    h3 {
      font-size: 4.4rem;
    }

    h4 {
      font-size: 3.3rem;
    }

    p {
      font-size: 2.2rem;
    }
  }
`
