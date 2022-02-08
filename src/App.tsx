import React from "react";
import Wordle from "./components/wordle/wordle.component";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global-style";
import { theme } from "./theme/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wordle />
        </ThemeProvider>
    );
};

export default App;
