import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface MainHeroProps {
  images: string[];
  interval?: number;
}

const heroTexts = [
  { label: "GLAMS ACADEMY", path: "/glams-academy" },
  { label: "GLAMS AGENCY", path: "/agency-model" },
  { label: "CREATIVE PRODUCTION", path: "/production" },
  { label: "EVENT ORGANIZER", path: "/event-organizer" },
  { label: "PHOTOSHOOT PORTOFOLIO", path: "/photoshoot" },
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

export default function MainHero({ images, interval = 3000 }: MainHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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

      {/* Bottom Left Text */}
      <div className="absolute bottom-5 left-5 flex flex-col items-start z-10">
        {heroTexts.map(({ label, path }, i) => (
          <motion.span
            key={label}
            className="text-white text-7xl font-medium leading-none tracking-tight cursor-pointer"
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={() => navigate(path)}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
