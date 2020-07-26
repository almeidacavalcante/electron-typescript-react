import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
  }

  body, html {
    background-color: var(--silverlight)
  }

  input, button, * {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #5fcf8b;
    --secondary: #7c70f4;
    --accent: #ebab51;
    --error: #f45859;

    --gray: #2a2b2e;
    --grafith: #556473;
    --silverlight: #d8d8da;
    --silver: #aaaabe;
    --whiteblue: #efedfe;
    --whitesmoke: #f2f5f8;
    --white: #ffffff;
  }
`;
