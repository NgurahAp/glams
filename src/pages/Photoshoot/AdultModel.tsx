import { motion, type Variants } from "framer-motion";
import { useRef, useState, useCallback } from "react";

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

function SectionDivider() {
  return (
    <motion.div
      className="w-[75%] border-t border-black my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  );
}

const allModels = [
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
    alt: "Baby Model 1",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model 1",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
    alt: "Kid Model 2",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
    alt: "Baby Model 2",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model 3",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
    alt: "Kid Model 4",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
    alt: "Baby Model 3",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model 5",
  },
];

const CARD_WIDTH = 400;
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
              style={{ width: CARD_WIDTH, height: "100%" }}
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
          aria-label="Previous"
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
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
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
          aria-label="Next"
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

export default function AdultModel() {
  const ref = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024789/adult-hero_mexhm9.png)",
          }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-8 py-14">
          {/* Title */}
          <motion.h1
            layoutId="adult-model-title"
            className="-tracking-wider mb-10 text-9xl -pr-4"
            initial={{ color: "#ffffff" }}
            animate={{ color: "#000000" }}
            transition={{
              layout: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
              color: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            Adult Model
          </motion.h1>

          <div className="w-[60%] pb-20" ref={ref}>
            <SectionDivider />

            <div className="w-[65%]">
              <motion.h3
                className="font-bold text-3xl leading-tight -tracking-tight text-black mt-5 mb-20"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Description
              </motion.h3>

              <motion.p
                className="font-normal text-xl leading-tight tracking-tight text-justify text-black mb-16"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod.
              </motion.p>

              <motion.p
                className="font-normal text-xl leading-tight tracking-tight text-justify text-black mb-16"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod.
              </motion.p>

              <motion.p
                className="font-semibold text-xl leading-tight tracking-tight text-justify text-black mb-16"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet
              </motion.p>
            </div>

            <SectionDivider />

            <motion.div
              className="mb-8"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold leading-tight tracking-tight text-black text-3xl">
                Age Range
              </h3>
              <p className="font-normal leading-tight tracking-tight text-justify text-black text-xl pt-2">
                10 month - 8 years old
              </p>
            </motion.div>

            <SectionDivider />

            <motion.div
              className="mb-8"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold leading-tight tracking-tight text-black text-3xl">
                Gender
              </h3>
              <p className="font-normal leading-tight tracking-tight text-justify text-black text-xl pt-2">
                Male and Female
              </p>
            </motion.div>

            <SectionDivider />

            <motion.div
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold leading-tight tracking-tight text-black text-3xl">
                Ethnicity
              </h3>
              <p className="font-normal leading-tight tracking-tight text-justify text-black text-xl pt-2">
                Asian, Western, Mix
              </p>
            </motion.div>

            <SectionDivider />
          </div>

          <ModelCarousel />

          {/* Contact */}
          <motion.h3
            className="font-bold text-2xl leading-tight tracking-tight text-black mt-10 mb-8"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            CONTACT FOR ADULT MODEL
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
      </div>
    </>
  );
}
