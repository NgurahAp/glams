import { useState, useEffect } from "react";
import MobileSplash from "../../components/MobileSplash";
import PhotoShoot from "../Photoshoot/Photoshoot";

const SPLASH_IMAGE_URL =
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673674/JACK3019_hb48xv.jpg";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

export default function AgencyModel() {
  const [splashDone, setSplashDone] = useState(false);
  // On desktop, skip splash entirely — treat as "done"
  const [splashImageReady, setSplashImageReady] = useState(!isMobile());

  useEffect(() => {
    // Only preload on mobile where splash is shown
    if (!isMobile()) return;

    const img = new Image();
    img.src = SPLASH_IMAGE_URL;
    img.onload = () => setSplashImageReady(true);
    img.onerror = () => setSplashImageReady(true); // fallback: tetap lanjut
  }, []);

  // Blok render sampai splash image siap (mobile only)
  if (!splashImageReady) {
    return <div className="fixed inset-0 bg-white z-[100]" />;
  }

  return (
    <>
      {!splashDone && (
        <MobileSplash
          onDismiss={() => setSplashDone(true)}
          imageUrl={SPLASH_IMAGE_URL}
          title={"GLAMS\nAGENCY"}
        />
      )}
      <PhotoShoot />
    </>
  );
}
