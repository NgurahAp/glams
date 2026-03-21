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

const TOTAL = allPhotos.length;
const RENDER_COUNT = 9;

// sisanya sama persis kayak yang tadi gue kirim (responsive carousel, dll)

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

function PhotoCarousel() {
  const currentRef = useRef(0);
  const [renderCurrent, setRenderCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const [cardWidth, setCardWidth] = useState(400);

  // ✅ RESPONSIVE WIDTH (SAMA KAYAK BABY)
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
  const CARD_GAP = isMobile ? 6 : 20;
  const CARD_STEP = cardWidth + CARD_GAP;
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

      {/* ✅ CONTROLS DISAMAIN */}
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-4 flex-1 md:flex-none md:w-72">
          <button
            onClick={goPrev}
            className="flex items-center justify-center p-1 group/btn"
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
            className="flex items-center justify-center p-1 group/btn"
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

        <span className="ml-auto text-sm text-black opacity-35 tracking-wider">
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
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Title */}
        <motion.div
          className="mb-6 mt-28 md:mt-40"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-sm md:text-lg tracking-tight font-medium mb-2">
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

        {/* Hero */}
        <div className="flex justify-center pb-8 md:py-24">
          <div className="flex flex-col items-center w-full md:w-[460px]">
            <motion.div
              layoutId="kid-agency-image"
              className="w-full overflow-hidden group"
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition"
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

        <PhotoCarousel />

        {/* Contact */}
        <motion.h3
          className="font-bold text-lg md:text-2xl mt-10 mb-4 md:mb-8"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
        >
          CONTACT FOR KID MODEL
        </motion.h3>

        <motion.p
          className="text-sm md:text-2xl mb-10 md:mb-16"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
        >
          PHONE NUMBER : +62 852-8382-4639
          <br />
          GMAIL : glams.management@gmail.com
        </motion.p>
      </div>
    </section>
  );
}
