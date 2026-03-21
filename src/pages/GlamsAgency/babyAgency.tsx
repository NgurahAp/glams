import { motion, type Variants } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";

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

const TOTAL = allModels.length;
const RENDER_COUNT = 9;

function optimizeUrl(src: string) {
  return src.replace("/upload/", "/upload/q_auto,f_auto,w_800,dpr_auto/");
}

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
  const currentRef = useRef(0);
  const [renderCurrent, setRenderCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const [cardWidth, setCardWidth] = useState(400);

  // Measure container width on mount and resize — always show 3 cards
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        const isMobile = w < 640;
        const gap = isMobile ? 6 : 20;
        setCardWidth(Math.floor((w - gap * 2) / 3));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isMobile = cardWidth < 200;
  const CARD_GAP_ACTUAL = isMobile ? 6 : 20;
  const CARD_STEP = cardWidth + CARD_GAP_ACTUAL;
  const CARD_HEIGHT = Math.floor(cardWidth * 1.3);

  const moveTo = useCallback(
    (idx: number) => {
      if (!trackRef.current) return;
      trackRef.current.style.transform = `translateX(${-idx * CARD_STEP}px)`;
    },
    [CARD_STEP],
  );

  const navigate = useCallback(
    (nextIdx: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      currentRef.current = nextIdx;
      setRenderCurrent(nextIdx);
      requestAnimationFrame(() => {
        moveTo(nextIdx);
      });
      setTimeout(() => {
        isAnimating.current = false;
      }, 680);
    },
    [moveTo],
  );

  const goPrev = useCallback(
    () => navigate((currentRef.current - 1 + TOTAL) % TOTAL),
    [navigate],
  );
  const goNext = useCallback(
    () => navigate((currentRef.current + 1) % TOTAL),
    [navigate],
  );

  const half = Math.floor(RENDER_COUNT / 2);
  const slots = Array.from({ length: RENDER_COUNT }, (_, i) => {
    const offset = i - half;
    const realIdx = (((renderCurrent + offset) % TOTAL) + TOTAL) % TOTAL;
    const slotPos = renderCurrent + offset;
    return { realIdx, slotPos };
  });

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="relative"
          style={{
            height: CARD_HEIGHT,
            transform: "translateX(0px)",
            transition: "transform 0.65s cubic-bezier(0.25, 0.1, 0.25, 1)",
            willChange: "transform",
          }}
        >
          {slots.map(({ realIdx, slotPos }) => (
            <div
              key={`slot-${slotPos}`}
              className="absolute overflow-hidden group cursor-pointer"
              style={{
                width: cardWidth,
                height: CARD_HEIGHT,
                top: 0,
                left: slotPos * CARD_STEP,
                contain: "layout paint style",
              }}
            >
              <img
                src={optimizeUrl(allModels[realIdx].src)}
                alt={allModels[realIdx].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-4 flex-1 md:flex-none md:w-72">
          <button
            onClick={goPrev}
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

          <CarouselProgress current={renderCurrent} total={TOTAL} />

          <button
            onClick={goNext}
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
        </div>

        <span
          className="ml-auto font-normal text-sm text-black"
          style={{ opacity: 0.35, letterSpacing: "0.05em" }}
        >
          {String(renderCurrent + 1).padStart(2, "0")} /{" "}
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
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Title */}
        <motion.div
          className="mb-6 mt-28 md:mt-40"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-sm md:text-lg tracking-tight font-medium mb-2">
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
        <div className="flex justify-center pb-8 md:py-24">
          <div className="flex flex-col items-center w-full md:w-[460px]">
            <motion.div
              layoutId="baby-agency-image"
              className="w-full overflow-hidden group"
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>

            <motion.p
              className="text-black text-center text-sm md:text-xl leading-tight tracking-tight mt-8 md:mt-14"
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
          className="font-bold text-lg md:text-2xl leading-tight tracking-tight text-black mt-10 mb-4 md:mb-8"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CONTACT FOR BABY MODEL
        </motion.h3>

        <motion.p
          className="font-normal leading-tight text-sm md:text-2xl tracking-tight text-justify text-black mb-10 md:mb-16"
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
