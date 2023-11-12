import "./App.css";
import { MainClock } from "./components/clock/MainClock";
import * as themes from "./theme/schema.json";
import { THEME_KEY } from "./utils/constants";
import { setItemToLocalStorage } from "./utils/localStorage";

function App() {
  setItemToLocalStorage(THEME_KEY, themes);
  return <MainClock />;
}

export default App;
