import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{ 
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Helvetica Neue';
        src: url('./assets/fonts/helvetica-neu.ttf') format('ttf');
    }
    @font-face {
        font-family: 'La Belle Aurore';
        src: url('./assets/fonts/LaBelleAurore.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Coolvetica';
        src: url('./assets/fonts/CoolveticaRg-Regular.woff2') format('woff2');
    }
    body{
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Helvetica Neue', 'sans-serif';
        font-size: 1.15em;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5; 
    }

    img {
        max-width: 100%;
    }
`
export default GlobalStyles