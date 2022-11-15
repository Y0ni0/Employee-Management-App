import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{ 
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Arial, sans-serif;
    }
    body{
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        
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