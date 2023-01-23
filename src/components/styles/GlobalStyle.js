import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #2F80ED;
    --primary-dark: #4F4F4F;
    --primary-dark-light: #828282;
    --primary-light: #E0E0E0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: var(--primary-dark);
  }

  html {
    scroll-behavior: smooth;
  }

  li {
    list-style: none;
  }

  input, button {
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
