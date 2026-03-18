import { motion, type Variants } from "framer-motion";
import { useState, useCallback, useRef } from "react";

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
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765468/DSC03179_ve9mck.jpg",
    alt: "Adult Model 1",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765464/DSC03970_kmbmxw.jpg",
    alt: "Adult Model 2",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765460/DSC03112_d7u3qz.jpg",
    alt: "Adult Model 3",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765456/DSC04222_fnw2uc.jpg",
    alt: "Adult Model 4",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765452/DSC04060_renhiv.jpg",
    alt: "Adult Model 5",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765447/DSC04354_hync3w.jpg",
    alt: "Adult Model 6",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765442/DSC04409_e61pjd.jpg",
    alt: "Adult Model 7",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765359/DSC04719_khzni8.jpg",
    alt: "Adult Model 8",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765269/DSC04787_e6rmud.jpg",
    alt: "Adult Model 9",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764310/DSC05073_ttvmuq.jpg",
    alt: "Adult Model 10",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764259/DSC04881_nllgnb.jpg",
    alt: "Adult Model 11",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764190/Glams/photoshoot/adult/copy_of_dsc05000_xfstao_3091c2.jpg",
    alt: "Adult Model 12",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764072/FAMILY_X8_DEC-3_rhlshd.jpg",
    alt: "Adult Model 13",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764070/DSC042381_tsbosf.jpg",
    alt: "Adult Model 14",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764069/FAMILY_X8_DEC-474_o3ikal.jpg",
    alt: "Adult Model 15",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764066/Salinan_DSC03880_iupizy.jpg",
    alt: "Adult Model 16",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764065/Salinan_DSC02062_zfhr7l.jpg",
    alt: "Adult Model 17",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764060/DSC07515_dqzgjk.jpg",
    alt: "Adult Model 18",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764059/DSC07207_mfs0zt.jpg",
    alt: "Adult Model 19",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773764059/DSC07446_sdzbic.jpg",
    alt: "Adult Model 20",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763173/DSC04238_q6rew2.jpg",
    alt: "Adult Model 21",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763172/DSC04301_xlwngm.jpg",
    alt: "Adult Model 22",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763170/DSC03978_zad4wu.jpg",
    alt: "Adult Model 23",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763170/DSC00241_v1kous.jpg",
    alt: "Adult Model 24",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763170/DSC01378_ybggla.jpg",
    alt: "Adult Model 25",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763169/DSC04097-Edit_cwh0hd.jpg",
    alt: "Adult Model 26",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763167/10-DSC09872_xsk2jp.jpg",
    alt: "Adult Model 27",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763167/DSC03701_ut6yks.jpg",
    alt: "Adult Model 28",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763165/DSC02721_pdztek.jpg",
    alt: "Adult Model 29",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763164/DSC03024_azemxn.jpg",
    alt: "Adult Model 30",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763164/DSC01967_cq5qs5.jpg",
    alt: "Adult Model 31",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763162/DSC02225_kgbp1n.jpg",
    alt: "Adult Model 32",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763162/Copy_of_FAMILY_X8_DEC-466_kvauo9.jpg",
    alt: "Adult Model 33",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763161/DSC01823_zkizhb.jpg",
    alt: "Adult Model 34",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763160/DSC00488_vjzjlv.jpg",
    alt: "Adult Model 35",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763159/DSC00847_bcnxka.jpg",
    alt: "Adult Model 36",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763157/DSC00183_aqomg6.jpg",
    alt: "Adult Model 37",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763155/DSC00327_pvq1jx.jpg",
    alt: "Adult Model 38",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763151/DSC00321_sxyvae.jpg",
    alt: "Adult Model 39",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763150/5-DSC08681_bdpt22.jpg",
    alt: "Adult Model 40",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763150/DSC00004_ojqzuh.jpg",
    alt: "Adult Model 41",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763149/DSC00053_t69tks.jpg",
    alt: "Adult Model 42",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763149/DSC00093_tyaoal.jpg",
    alt: "Adult Model 43",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763147/5-DSC08733_o8l2ka.jpg",
    alt: "Adult Model 44",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763147/5-DSC08800_ev9pps.jpg",
    alt: "Adult Model 45",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763143/Copy_of_DSC07561_gvhic7.jpg",
    alt: "Adult Model 46",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773763143/4-DSC00370_pbhxsk.jpg",
    alt: "Adult Model 47",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773762261/10-DSC09872_nzgamr.jpg",
    alt: "Adult Model 48",
  },
];

const CARD_WIDTH = 400;
const CARD_HEIGHT = 520;
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const TOTAL = allModels.length;
const RENDER_COUNT = 9;
const MAX_DOTS = 7;

function optimizeUrl(src: string) {
  return src.replace("/upload/", "/upload/q_auto,f_auto,w_420/");
}

function ModelCarousel() {
  const currentRef = useRef(0);
  const [renderCurrent, setRenderCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const moveTo = useCallback((idx: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${-idx * CARD_STEP}px)`;
  }, []);

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
  const goTo = useCallback((i: number) => navigate(i), [navigate]);

  // Virtualized slots
  const half = Math.floor(RENDER_COUNT / 2);
  const slots = Array.from({ length: RENDER_COUNT }, (_, i) => {
    const offset = i - half;
    const realIdx = (((renderCurrent + offset) % TOTAL) + TOTAL) % TOTAL;
    const slotPos = renderCurrent + offset;
    return { realIdx, slotPos };
  });

  // Windowed dots
  const dotHalf = Math.floor(MAX_DOTS / 2);
  let startDot = renderCurrent - dotHalf;
  let endDot = renderCurrent + dotHalf;
  if (startDot < 0) {
    startDot = 0;
    endDot = MAX_DOTS - 1;
  }
  if (endDot >= TOTAL) {
    endDot = TOTAL - 1;
    startDot = Math.max(0, TOTAL - MAX_DOTS);
  }
  const visibleDots = Array.from(
    { length: endDot - startDot + 1 },
    (_, i) => startDot + i,
  );

  return (
    <div className="relative w-full">
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
                width: CARD_WIDTH,
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
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={goPrev}
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

        <div className="flex items-center gap-2">
          {visibleDots.map((i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className="transition-all duration-300 bg-black"
                style={{
                  height: 1,
                  width: i === renderCurrent ? 32 : 16,
                  opacity: i === renderCurrent ? 1 : 0.25,
                }}
              />
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
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
          {String(renderCurrent + 1).padStart(2, "0")} /{" "}
          {String(TOTAL).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function AdultAgency() {
  const model = {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
    alt: "Adult Model",
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
            GLAMS AGENCY ADULTS MODEL
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
              layoutId="adult-agency-image"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              className="group"
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>

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
    </section>
  );
}
