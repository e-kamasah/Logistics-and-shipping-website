import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TrackPage from "./pages/TrackPage";
import { ContactPage } from "./pages/ContactPage";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/track" element={<TrackPage />} />
           <Route path="/contactus" element={<ContactPage />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
