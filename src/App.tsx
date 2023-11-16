import { ThemeProvider } from "styled-components";
import "./App.css";
import { MainClock } from "./components/clock/MainClock";
import { THEME_SCHEMA } from "./theme/schema";
import { useTheme } from "./theme/useTheme";
import { THEME_KEY } from "./utils/constants";
import { setItemToLocalStorage } from "./utils/localStorage";
import { GlobalStyles } from "./theme/GlobalStyles";

function App() {
  setItemToLocalStorage(THEME_KEY, THEME_SCHEMA);
  const { themeLoaded, currentTheme } = useTheme();
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />
          <div className="app">
            <MainClock />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
