import "./App.css";
import { Navbar, Footer, Sidebar } from "./frontend/components";
import { Main } from "./frontend/routes/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
