import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GlamsAcademy from "./pages/GlamsAcademy/GlamsAcademy";
import AgencyModel from "./pages/GlamsAgency/glamsAgency";

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
      </Routes>
    </Layout>
  );
}

export default App;
