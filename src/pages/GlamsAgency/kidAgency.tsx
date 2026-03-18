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

const allPhotos = [
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768066/DSC04090_hkqj80.jpg",
    alt: "Kid Model 1",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768063/DSC03857_qgdgxe.jpg",
    alt: "Kid Model 2",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768057/DSC04295_p4wrl4.jpg",
    alt: "Kid Model 3",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768053/DSC04158_e2tedo.jpg",
    alt: "Kid Model 4",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768048/DSC04558_k2w7cx.jpg",
    alt: "Kid Model 5",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768044/DSC04813_nmm3hf.jpg",
    alt: "Kid Model 6",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768040/DSC04646_wjnu9a.jpg",
    alt: "Kid Model 7",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768036/DSC04472_cddtdf.jpg",
    alt: "Kid Model 8",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768031/DSC05015_dbvgxg.jpg",
    alt: "Kid Model 9",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768027/DSC03368_pbosy1.jpg",
    alt: "Kid Model 10",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768803/DSC03806_lgomen.jpg",
    alt: "Kid Model 11",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773768807/DSC03082_yakijn.jpg",
    alt: "Kid Model 12",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765722/DSC09412_sijbyc.jpg",
    alt: "Kid Model 13",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765718/Salinan_DSC01113_czu3kw.jpg",
    alt: "Kid Model 14",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765718/DSC09654_hgn78f.jpg",
    alt: "Kid Model 15",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765718/DSC06807_xykhs3.jpg",
    alt: "Kid Model 16",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765716/Salinan_DSC02999_heq46f.jpg",
    alt: "Kid Model 17",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765715/Salinan_DSC03103_vcbosb.jpg",
    alt: "Kid Model 18",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765714/Salinan_DSC01010_fjzsqc.jpg",
    alt: "Kid Model 19",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765713/DSC06522_x5dk47.jpg",
    alt: "Kid Model 20",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765711/DSC06310_ldsl9i.jpg",
    alt: "Kid Model 21",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765711/DSC07024_yrqeun.jpg",
    alt: "Kid Model 22",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765711/DSC08017_heea8g.jpg",
    alt: "Kid Model 23",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765710/DSC05986_bqs1x4.jpg",
    alt: "Kid Model 24",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765710/DSC06566_fljwn2.jpg",
    alt: "Kid Model 25",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765708/DSC06602_whrpdr.jpg",
    alt: "Kid Model 26",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765708/DSC06225_wuhcok.jpg",
    alt: "Kid Model 27",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765705/DSC06434_hnau4z.jpg",
    alt: "Kid Model 28",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765705/DSC06096_hd97ax.jpg",
    alt: "Kid Model 29",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765703/DSC06404_hmydfe.jpg",
    alt: "Kid Model 30",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765702/DSC06003_bbl7ql.jpg",
    alt: "Kid Model 31",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765701/DSC05819_shkjw2.jpg",
    alt: "Kid Model 32",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765701/DSC05925_cfmcaf.jpg",
    alt: "Kid Model 33",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765701/DSC05725_dkcpau.jpg",
    alt: "Kid Model 34",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765699/DSC05565_yuxaih.jpg",
    alt: "Kid Model 35",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765699/DSC05620_vqrngz.jpg",
    alt: "Kid Model 36",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765693/DSC05450_ehtkc3.jpg",
    alt: "Kid Model 37",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765693/DSC05619_d2ai89.jpg",
    alt: "Kid Model 38",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765687/DSC04134_oygan4.jpg",
    alt: "Kid Model 39",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765683/DSC02569_1_bjnwjg.jpg",
    alt: "Kid Model 40",
  },
  {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773765680/DSC03294_1_1_bnmhst.jpg",
    alt: "Kid Model 41",
  },
];

const CARD_WIDTH = 400;
const CARD_HEIGHT = 520;
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const TOTAL = allPhotos.length;

function optimizeUrl(src: string) {
  return src.replace("/upload/", "/upload/q_auto,f_auto,w_800,dpr_auto/");
}

const MAX_DOTS = 7;
const RENDER_COUNT = 9;

function PhotoCarousel() {
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

  const goPrev = useCallback(() => {
    navigate((currentRef.current - 1 + TOTAL) % TOTAL);
  }, [navigate]);

  const goNext = useCallback(() => {
    navigate((currentRef.current + 1) % TOTAL);
  }, [navigate]);

  const goTo = useCallback((i: number) => navigate(i), [navigate]);

  // Virtualized slots
  const half = Math.floor(RENDER_COUNT / 2);
  const slots = Array.from({ length: RENDER_COUNT }, (_, i) => {
    const offset = i - half;
    const realIdx = (((renderCurrent + offset) % TOTAL) + TOTAL) % TOTAL;
    const slotPos = renderCurrent + offset;
    return { realIdx, slotPos };
  });

  // Dot window
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
      {/* Overflow container */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="relative"
          style={{
            height: CARD_HEIGHT,
            transform: `translateX(0px)`,
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
                src={optimizeUrl(allPhotos[realIdx].src)}
                alt={allPhotos[realIdx].alt}
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
        {/* Prev */}
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

        {/* Dot indicators */}
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

        {/* Next */}
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

        {/* Counter */}
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

export default function KidAgency() {
  const model = {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model",
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
            GLAMS AGENCY KID MODEL
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
              layoutId="kid-agency-image"
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
        <PhotoCarousel />

        {/* Contact */}
        <motion.h3
          className="font-bold text-2xl leading-tight tracking-tight text-black mt-10 mb-8"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CONTACT FOR KID MODEL
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
