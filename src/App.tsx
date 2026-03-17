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
import CreativeProduction from "./pages/CreativeProduction/CreativeProduction";
import EventOrganizer from "./pages/EventOrganizer/EventOrganizer";

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673674/JACK3019_hb48xv.jpg",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673672/JACK3586_zzvnux.jpg",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673672/JACK3085_s4gzty.jpg",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673671/JACK3209_la2flr.jpg",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673670/JACK3233_vj3slo.jpg",
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
          <Route path="/production" element={<CreativeProduction />} />
          <Route path="/event" element={<EventOrganizer />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
