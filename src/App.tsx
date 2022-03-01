import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global-style";
import { theme } from "./theme/theme";
import Wordle from "./components/wordle/wordle.component";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Wordle />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
