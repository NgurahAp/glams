import { motion, type Variants } from "framer-motion";

interface AboutHeroProps {
  image: string;
}

const aboutTexts = [
  "ABOUT",
  "US",
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

export default function AboutHero({ image }: AboutHeroProps) {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Bottom Left Text */}
      <div className="absolute bottom-10 left-10 flex flex-col items-start z-10">
        {aboutTexts.map((text, i) => (
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
