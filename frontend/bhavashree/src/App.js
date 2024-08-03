import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Remittance from "./components/Remittance";
import Subsidiary from "./components/Subsidiary";
import FixedDeposit from "./components/FixedDeposit";
import ContactUs from "./components/ContactUs";
import PersonalLoan from "./components/PersonalLoan";
import VechicleLoan from "./components/VechicleLoan";
import MortageLoan from "./components/MortageLoan";
import GoldLoan from "./components/GoldLoan";
import AboutUs from "./components/AboutUs";
import SavingAccount from "./components/SavingAccount";
import CurrentAccount from "./components/CurrentAccount";
import RegularAccount from "./components/RegularAccount";
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/fixed-deposit" element={<FixedDeposit />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/vechicle-loan" element={<VechicleLoan />} />
            <Route path="/mortage-loan" element={<MortageLoan />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/saving-account" element={<SavingAccount />} />
            <Route path="/current-account" element={<CurrentAccount />} />
            <Route path="/regular-account" element={<RegularAccount />} />
            {/*<Route path="/mortgage_loan" element={<MortgageLoanPage />} /> */}
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
