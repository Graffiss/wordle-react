import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global-style";
import { theme } from "./theme/theme";
import Wordle from "./components/wordle/wordle.component";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Wordle />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
