import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="web-content">
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
