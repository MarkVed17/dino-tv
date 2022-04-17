import "./App.css";
import { Navbar, Footer } from "./frontend/components";
import { Main } from "./frontend/routes/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
