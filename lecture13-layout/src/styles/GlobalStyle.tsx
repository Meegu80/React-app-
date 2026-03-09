import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;
