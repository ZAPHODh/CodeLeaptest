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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    font-size: 1.4rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #DDDDDD;
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
