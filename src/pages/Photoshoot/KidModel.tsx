import { motion, type Variants } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function SectionDivider() {
  return (
    <motion.div
      className="w-full border-t border-black my-8 md:my-10"
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

const CARD_GAP = 20;
const TOTAL = allModels.length;

function CarouselProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="relative flex-1 h-[2px] bg-black/15">
      <motion.div
        className="absolute left-0 top-0 h-full bg-black"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

function ModelCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(400);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        const gap = w < 640 ? 6 : CARD_GAP;
        setCardWidth(Math.floor((w - gap * 2) / 3));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isMobile = cardWidth < 200;
  const CARD_GAP_ACTUAL = isMobile ? 6 : CARD_GAP;
  const CARD_STEP = cardWidth + CARD_GAP_ACTUAL;
  const CARD_HEIGHT = Math.floor(cardWidth * 1.3);

  const loopedModels = [...allModels, ...allModels, ...allModels];
  const LOOP_OFFSET = TOTAL * CARD_STEP;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + TOTAL) % TOTAL),
    [],
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);

  const translateX = -(current * CARD_STEP) - LOOP_OFFSET;

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex"
          style={{ gap: CARD_GAP_ACTUAL, height: CARD_HEIGHT }}
          animate={{ x: translateX }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {loopedModels.map((model, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{ width: cardWidth, height: CARD_HEIGHT }}
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
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-4 flex-1 md:flex-none md:w-72">
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
          <CarouselProgress current={current} total={TOTAL} />
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
        </div>
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

export default function KidModel() {
  const ref = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773026363/kid-hero_mwfa37.png)",
          }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          {/* Title */}
          <motion.h1
            layoutId="kid-model-title"
            className="-tracking-wider mb-6 md:mb-10 text-[clamp(3rem,10vw,9rem)]"
            initial={{ color: "#ffffff" }}
            animate={{ color: "#000000" }}
            transition={{
              layout: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
              color: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            Kid Model
          </motion.h1>

          {/* Description block */}
          <div className="w-full md:w-[50%] pb-12 md:pb-20" ref={ref}>
            <SectionDivider />

            <div className="w-full md:w-[85%]">
              <motion.h3
                className="font-bold text-xl md:text-3xl leading-tight tracking-tight text-black mt-4 md:mt-5 mb-8 md:mb-20"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Description
              </motion.h3>

              <motion.p
                className="font-normal text-sm md:text-xl leading-tight tracking-tight text-black mb-8 md:mb-16"
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
                className="font-normal text-sm md:text-xl leading-tight tracking-tight text-black mb-8 md:mb-16"
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
                className="font-semibold text-sm md:text-xl leading-tight tracking-tight text-black mb-8 md:mb-16"
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
              className="mb-6 md:mb-8"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold leading-tight tracking-tight text-black text-xl md:text-3xl">
                Age Range
              </h3>
              <p className="font-normal leading-tight tracking-tight text-black text-sm md:text-xl pt-2">
                10 month - 8 years old
              </p>
            </motion.div>

            <SectionDivider />

            <motion.div
              className="mb-6 md:mb-8"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-bold leading-tight tracking-tight text-black text-xl md:text-3xl">
                Gender
              </h3>
              <p className="font-normal leading-tight tracking-tight text-black text-sm md:text-xl pt-2">
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
              <h3 className="font-bold leading-tight tracking-tight text-black text-xl md:text-3xl">
                Ethnicity
              </h3>
              <p className="font-normal leading-tight tracking-tight text-black text-sm md:text-xl pt-2">
                Asian, Western, Mix
              </p>
            </motion.div>

            <SectionDivider />
          </div>

          <ModelCarousel />

          {/* Contact */}
          <motion.h3
            className="font-bold text-lg md:text-2xl leading-tight tracking-tight text-black mt-10 mb-4 md:mb-8"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            CONTACT FOR KID MODEL
          </motion.h3>

          <motion.p
            className="font-normal leading-tight text-sm md:text-2xl tracking-tight text-black mb-10 md:mb-16"
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
