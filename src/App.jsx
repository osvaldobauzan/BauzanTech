import { Route, Routes } from "react-router-dom";
import './App.css'
// import HomeEng from './pages/HomeEng'
import About from "./pages/About";
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Terms from "./pages/Terms";
import TermsAndCookiesModal from "./components/TermsAndCookiesModal";

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        {/* <Route path="/es" element={<Home />} />

        <Route path="/homeEng" element={<HomeEng />} />
        <Route path="/home-spa" element={<Home-spa />} />
        <Route path="/home-por" element={<Home-por />} />

        <Route path="/about-eng" element={<About-eng />} />
        <Route path="/about-spa" element={<About-spa />} />
        <Route path="/about-por" element={<About-por />} />

        <Route path="/services-eng" element={<Services-eng />} />
        <Route path="/services-spa" element={<Services-eng />} />
        <Route path="/services-por" element={<Services-eng />} />

        <Route path="/clients-eng" element={<Clients-eng />} />
        <Route path="/clients-spa" element={<Clients-spa />} />
        <Route path="/clients-por" element={<Clients-por />} />

        <Route path="/contact-eng" element={<Contact-eng />} />
        <Route path="/contact-spa" element={<Contact-spa />} />
        <Route path="/contact-por" element={<Contact-por />} /> */}

    </Routes>
  )
}

export default App
