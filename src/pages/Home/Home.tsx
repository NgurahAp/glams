import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface HomeProps {
  images: string[];
  interval?: number;
}

const heroTexts = [
  "GLAMS ACADEMY",
  "GLAMS AGENCY",
  "CREATIVE PRODUCTION",
  "EVENT ORGANIZER",
  "PHOTOSHOOT PORTOFOLIO",
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

export default function Home({ images, interval = 3000 }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="absolute bottom-10 left-10 flex flex-col items-start z-10">
        {heroTexts.map((text, i) => (
          <motion.span
            key={text}
            className="text-white font-medium leading-none tracking-tight cursor-default"
            style={{ fontSize: "110px" }}
            custom={i}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {text}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
