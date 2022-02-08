import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: Arial;
    }

    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        background-color: ${({ theme }: { theme: Theme }) => theme.body};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 1em;
    }
`;

export default GlobalStyle;
