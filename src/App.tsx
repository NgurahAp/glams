import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainHero from "./components/MainHero";
import AboutHero from "./components/AboutHero";

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png",
];

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainHero images={images} interval={3000} />} />
        <Route path="/about" element={<AboutHero image="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png" />} />
      </Routes>
    </Layout>
  );
}

export default App;
