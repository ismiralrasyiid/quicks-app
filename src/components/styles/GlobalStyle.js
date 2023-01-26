import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #2F80ED;
    --primary-dark: #4F4F4F;
    --primary-dark-light: #828282;
    --primary-light: #E0E0E0;
    --secondary-light: #F2F2F2;
    --orange-indicator: #F8B76B;
    --violet-indicator: #8785FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: #333333;
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
    cursor: pointer;
  }
`;

export default GlobalStyle;
