import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const heroTexts = [
  { label: "Baby Model", path: "/baby-model", layoutId: "baby-model-title" },
  { label: "Kid Model", path: "/kid-model", layoutId: "kid-model-title" },
  { label: "Adult Model", path: "/adult-model", layoutId: "adult-model-title" },
];

const images = [
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-hero_rhytpc.png",
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png",
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i + 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  hover: {
    opacity: 0.6,
  },
};

export default function PhotoShoot() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, 3000]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", scale: 0.98 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Bottom Left Text — shared layoutId untuk transisi ke halaman model */}
      <div className="absolute bottom-8 left-8 flex flex-col items-start z-10">
        {heroTexts.map(({ label, path, layoutId }, i) => (
          <motion.div
            key={label}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="cursor-pointer"
          >
            <motion.span
              layoutId={layoutId}
              onClick={() => navigate(path)}
              className="font-medium leading-none tracking-tight block text-8xl text-white"
            >
              {label}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
