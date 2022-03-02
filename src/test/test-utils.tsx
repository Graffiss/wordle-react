// import { render } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import { ThemeProvider } from "styled-components";
// import { initialState } from "../redux/reducers/guess.reducer";
// import { theme } from "../theme/theme";

// const mockStore = configureStore();
// const store = mockStore(initialState);

// const customRender = (ui: React.ReactElement, options = {}) => {
//     return render(
//         <Provider store={store}>
//             <ThemeProvider theme={theme}>{ui}</ThemeProvider>
//         </Provider>,
//         {
//             wrapper: ({ children }) => children,
//             ...options,
//         }
//     );
// };

// export * from "@testing-library/react";
// export { default as userEvent } from "@testing-library/user-event";
// // override render export
// export { customRender as render };

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import guessReducer from "../redux/reducers/guess.reducer";

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: { user: guessReducer },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
