import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Remittance from "./components/Remittance";
import Subsidiary from "./components/Subsidiary";
import FixedDeposit from "./components/FixedDeposit";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="web-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/remittance" element={<Remittance />} />
            <Route path="/subsidiary" element={<Subsidiary />} />
            <Route path="/fixed-deposit" element={<FixedDeposit />} />
            {/*<Route path="/mortgage_loan" element={<MortgageLoanPage />} /> */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
