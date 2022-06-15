import "./App.css";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div className="App">
        <Nav />
        <Accueil />
        <Portfolio />
        <Services />
    </div>
  );
}

export default App;