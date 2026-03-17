import { motion, type Variants } from "framer-motion";
import { useState, useCallback } from "react";

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const allModels = [
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684387/DSC09923_ttqqma.jpg",
    alt: "Baby Model 1",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684386/DSC09977_gbgcy2.jpg",
    alt: "Baby Model 2",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684384/DSC09551_yng4d1.jpg",
    alt: "Baby Model 3",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684381/DSC09921_qtrdnx.jpg",
    alt: "Baby Model 4",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684363/DSC08994_3_wy6tok.jpg",
    alt: "Baby Model 5",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684332/DSC04066_k4cddv.jpg",
    alt: "Baby Model 6",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684332/DSC03271_pqkvgq.jpg",
    alt: "Baby Model 7",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684332/DSC03502_amfxok.jpg",
    alt: "Baby Model 8",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684329/DSC03374_scr4uo.jpg",
    alt: "Baby Model 9",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684325/DSC01350_tyjcoi.jpg",
    alt: "Baby Model 10",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684325/DSC01756_jx8fjb.jpg",
    alt: "Baby Model 11",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773684324/DSC00459_cgzmeh.jpg",
    alt: "Baby Model 12",
  },
];

const CARD_WIDTH = 400;
const CARD_HEIGHT = 520; // ← fixed height untuk semua card
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const TOTAL = allModels.length;

const loopedModels = [...allModels, ...allModels, ...allModels];
const LOOP_OFFSET = TOTAL * CARD_STEP;

function ModelCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TOTAL);
  }, []);

  const translateX = -(current * CARD_STEP) - LOOP_OFFSET;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          style={{ gap: CARD_GAP }}
          animate={{ x: translateX }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {loopedModels.map((model, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} // ← width & height sama semua
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8 mt-6">
        <button
          onClick={prev}
          className="flex items-center justify-center flex-shrink-0 p-1 group/btn"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform duration-200 ease-out group-hover/btn:scale-150"
          >
            <path
              d="M11 3L5 9L11 15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {allModels.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}>
              <div
                className="transition-all duration-300 bg-black"
                style={{
                  height: 1,
                  width: i === current ? 32 : 16,
                  opacity: i === current ? 1 : 0.25,
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="flex items-center justify-center flex-shrink-0 p-1 group/btn"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform duration-200 ease-out group-hover/btn:scale-150"
          >
            <path
              d="M7 3L13 9L7 15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span
          className="ml-auto font-normal text-sm text-black"
          style={{ opacity: 0.35, letterSpacing: "0.05em" }}
        >
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function BabyAgency() {
  const model = {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
    alt: "Baby Model",
  };

  return (
    <section className="bg-white flex flex-col justify-end pb-4">
      <div className="max-w-7xl mx-auto w-full px-8">
        {/* Title */}
        <motion.div
          className="mb-6 mt-40"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-lg tracking-tight font-medium mb-2">
            GLAMS AGENCY BABY MODEL
          </h2>

          <motion.div
            className="h-[1px] bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Hero Image */}
        <div className="flex justify-center py-24">
          <div className="flex flex-col items-center" style={{ width: 460 }}>
            <motion.div
              layoutId="baby-agency-image"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              className="group"
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Lorem */}
            <motion.p
              className="text-black text-center text-xl leading-tight tracking-tight mt-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod
            </motion.p>
          </div>
        </div>

        {/* Carousel */}
        <ModelCarousel />

        {/* Contact */}
        <motion.h3
          className="font-bold text-2xl leading-tight tracking-tight text-black mt-10 mb-8"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CONTACT FOR BABY MODEL
        </motion.h3>

        <motion.p
          className="font-normal leading-tight text-2xl tracking-tight text-justify text-black mb-16"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          PHONE NUMBER :{" "}
          <a
            href="https://wa.me/6285283824639"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group/phone"
          >
            +62 852-8382-4639
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black group-hover/phone:w-full transition-all duration-500 ease-out" />
          </a>
          <br />
          GMAIL :{" "}
          <a
            href="mailto:glams.management@gmail.com"
            className="relative inline-block group/email"
          >
            glams.management@gmail.com
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black group-hover/email:w-full transition-all duration-500 ease-out" />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
