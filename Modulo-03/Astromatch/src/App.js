import "./App.css";
import Main from "./components/Main/Main";
import ResetButton from "./components/ResetButton/ResetButton";
import { ContainerBG } from "./components/Styles/styles";

function App() {
  return (
    <ContainerBG>
      <Main />
      <ResetButton />
    </ContainerBG>
  );
}

export default App;
