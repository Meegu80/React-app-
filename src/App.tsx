import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/themes.ts";
import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    const onClick = () => {
        setIsDark(!isDark)
    }

    return (
        <ThemeProvider theme={isDark ? DarkTheme :LightTheme}>
            <GlobalStyle />
            <RouterProvider router={router(onClick)} />
        </ThemeProvider>
    );
}

export default App;
