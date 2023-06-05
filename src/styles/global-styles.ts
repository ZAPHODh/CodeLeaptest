import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1C1C1C;
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
