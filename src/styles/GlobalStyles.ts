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
    background-color: var(--white)
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

    
    --darkgray: #818081ff;
    --grafith: #556473;
    --grayish: #a8a7a8ff;

    --lightgray: #f7f7f7ff;

    --silver: #d5d5ef;
    --gray: #d5d5d6ff;
    --silverlight: #d8d8da;
    --silverlighter: #ebebecff;
    --whiteblue: #efedfe;
    --whitesmoke: #f2f5f8;
    --white: #ffffff;
  }
`;
