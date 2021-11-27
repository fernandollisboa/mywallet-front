import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import fonts from './fonts.css';

const GlobalStyle = createGlobalStyle`
    ${reset}

    ${fonts}

    body {
      background-color: var(--bg-color);
      font-family: 'Raleway', sans-serif;
      
      width: 100%;
      max-width: 100vw;
      height: 100%;
    }

    *{
      font-family: 'Raleway', sans-serif;
      box-sizing: border-box;
    }

    :root{
      --bg-color: #0daa34;
      --btn-color: #11540e;
    }
`;

export default GlobalStyle;
