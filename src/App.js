import "./App.css";

import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
