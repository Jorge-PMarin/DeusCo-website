import { createGlobalStyle } from 'styled-components';

export const theme = {
  navbar_height: '60rem',
};

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

`;

export default GlobalStyle;
