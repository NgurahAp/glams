import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GlamsAcademy from "./pages/GlamsAcademy/GlamsAcademy";
import AgencyModel from "./pages/GlamsAgency/glamsAgency";
import BabyModel from "./pages/BabyModel/BabyModel";
import KidModel from "./pages/KidModel/KidModel";
import AdultModel from "./pages/AdultModel/AdultModel";

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png",
];

function App() {
  return (
    <Layout>
      <Routes>
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
      </Routes>
    </Layout>
  );
}

export default App;
