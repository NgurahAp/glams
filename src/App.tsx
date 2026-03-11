import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GlamsAcademy from "./pages/GlamsAcademy/GlamsAcademy";
import AgencyModel from "./pages/GlamsAgency/agencyModel";
import BabyModel from "./pages/Photoshoot/BabyModel";
import KidModel from "./pages/Photoshoot/KidModel";
import AdultModel from "./pages/Photoshoot/AdultModel";
import AdultAgency from "./pages/GlamsAgency/adultAgency";
import BabyAgency from "./pages/GlamsAgency/babyAgency";
import KidAgency from "./pages/GlamsAgency/kidAgency";
import PhotoShoot from "./pages/Photoshoot/Photoshoot";

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png",
];

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home images={images} interval={3000} />} />
          <Route
            path="/about"
            element={
              <About image="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png" />
            }
          />
          <Route path="/glams-academy" element={<GlamsAcademy />} />
          <Route path="/agency-model" element={<AgencyModel />} />
          <Route path="/baby-model" element={<BabyModel />} />
          <Route path="/kid-model" element={<KidModel />} />
          <Route path="/adult-model" element={<AdultModel />} />
          <Route path="/adult-agency" element={<AdultAgency />} />
          <Route path="/baby-agency" element={<BabyAgency />} />
          <Route path="/kid-agency" element={<KidAgency />} />
          <Route path="/photoshoot" element={<PhotoShoot />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
