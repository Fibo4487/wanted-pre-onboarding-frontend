import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  input {
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
