import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Talent_management from "./Pages/Talent_management";
import Products from "./Pages/Sonachala";
import Industries from "./Pages/Industries";
import Carrer from "./Pages/Carrer";
import Opportunities from "./Pages/Opportunities";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import Pillamar from "./Pages/Pillamar";
import Internship from "./Pages/Internship";
import Referal from "./Pages/Referal";
import Industry_HL from "./Pages/Industry_HL";
import Industry_EU from "./Pages/Industry_EU";
import Industry_AM from "./Pages/Industry_AM";





function App() {


  return (
    <>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/talent_management" element={<Talent_management />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/Industry_HL" element={<Industry_HL />} />
          <Route path="/industries/Industry_EU" element={<Industry_EU />} />
          <Route path="/industries/Industry_AM" element={<Industry_AM />} />
          
          <Route path="/opportunities" element={<Opportunities />} />

          <Route path="/prohub/Carrer" element={<Carrer />} />
          <Route path="/prohub/internship" element={<Internship />} />
          <Route path="/prohub/referal" element={<Referal />} />
          
          <Route path="/pillamar" element={<Pillamar />} />
          <Route path="/sonachala" element={<Products />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
