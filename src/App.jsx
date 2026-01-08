import { BrowserRouter, Routes, Route } from "react-router-dom";
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





function App() {


  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/talent_management" element={<Talent_management />} />
          <Route path="/industries" element={<Industries />} />
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
      </BrowserRouter>
    </>
  )
}

export default App
