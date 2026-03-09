import "./App.css";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
  } as React.CSSProperties;

  return (
    <div className="h-screen bg-cover bg-center" style={bgStyle}>
      {/* you can put overlay content here */}
    </div>
  );
}

export default App;
