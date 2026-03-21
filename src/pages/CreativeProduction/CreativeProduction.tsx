import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MobileSplash from "../../components/MobileSplash";

const logos = [
  {
    name: "Uniqlo",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329907/unizlo_xatypm.png",
  },
  {
    name: "ESMOD",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329906/esmod_jcn3w9.png",
  },
  {
    name: "Eiger",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329906/euger_wrs6iy.png",
  },
  {
    name: "Batik",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329906/batik_atdoao.png",
  },
  {
    name: "Erlangga",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329906/erlangga_yifuia.png",
  },
  {
    name: "Matahari",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329906/matahari_zuggba.png",
  },
  {
    name: "Cumi",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/cumi_qc5lyc.png",
  },
  {
    name: "Exit Kids",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/exitkids_ob5jgp.png",
  },
  {
    name: "Citimex",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/citimex_ttd2nc.png",
  },
  {
    name: "Giordano",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/giordano_tomcut.png",
  },
  {
    name: "Adelle",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/adelle_do2aiu.png",
  },
  {
    name: "Babyshop",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773329905/babysho_atkh3u.png",
  },
];

const marqueeLogos = [...logos, ...logos];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function LogoMarquee() {
  const [paused, setPaused] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex items-center"
        style={{ gap: isMobile ? 50 : 150 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: isMobile ? 7 : 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          ...(paused ? { playState: "paused" } : {}),
        }}
      >
        {marqueeLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center cursor-pointer"
            style={{ height: isMobile ? 20 : 40 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-auto object-contain transition-opacity duration-300"
              style={{ maxWidth: isMobile ? 72 : 160 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="w-full flex justify-start"
      style={{ maxWidth: "80rem", margin: "0 auto 1rem auto" }}
    >
      <div style={{ maxWidth: "28rem" }}>
        <motion.h2
          className="md:text-6xl text-xl font-normal leading-[1] tracking-tight text-black uppercase mb-2 md:mb-6 whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-[10px] md:text-sm font-normal leading-snug tracking-tight text-black text-justify mb-1 md:mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

// Responsive image: on mobile renders equal-width (33.33%), on desktop uses original width
function RImg({
  src,
  dw, // desktop width e.g. "26%"
  index = 0,
  hideOnMobile = false,
}: {
  src: string;
  dw: string;
  index?: number;
  hideOnMobile?: boolean;
}) {
  const isMobile = useIsMobile();
  if (isMobile && hideOnMobile) return null;

  return (
    <motion.img
      src={src}
      style={{
        width: isMobile ? "33.33%" : dw,
        height: "auto",
        display: "block",
        flexShrink: 0,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ scale: 1.02 }}
      alt=""
    />
  );
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod";

// Shared section spacing: tight on mobile, generous on desktop
const sectionCls =
  "w-full flex flex-col px-4 md:px-8 items-center pt-14 md:pt-48";
const rowStyle = { maxWidth: "80rem", gap: 6 } as React.CSSProperties;
const rowStyleMd = { maxWidth: "80rem", gap: 12 } as React.CSSProperties;

function GridRow({
  children,
  justify = "center",
}: {
  children: React.ReactNode;
  justify?: "center" | "start";
}) {
  const isMobile = useIsMobile();
  return (
    <div
      className="w-full flex items-start"
      style={{
        ...(isMobile ? rowStyle : rowStyleMd),
        justifyContent: justify === "center" ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
}

export default function CreativeProduction() {
  const [splashDone, setSplashDone] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!splashDone && (
        <MobileSplash
          onDismiss={() => setSplashDone(true)}
          imageUrl="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673672/JACK3085_s4gzty.jpg"
          title={"CREATIVE\nPRODUCTION"}
        />
      )}{" "}
      <section className="bg-white min-h-screen flex flex-col overflow-x-hidden">
        {/* Hero Title */}
        <div className="flex-1 flex items-center justify-center px-8 pt-36 md:pt-44 pb-8 md:pb-20">
          <motion.h1
            className="text-black font-bold uppercase text-center"
            style={{
              fontSize: "clamp(38px, 12vw, 100px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            CREATIVE
            <br />
            PRODUCTION
          </motion.h1>
        </div>

        {/* Marquee Strip */}
        <motion.div
          className="w-full py-5 md:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <LogoMarquee />
        </motion.div>

        {/* View All */}
        {/* <motion.div
        className="flex justify-center pt-10 md:pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.button
          className="font-bold text-black tracking-widest uppercase text-xs md:text-lg"
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.2 }}
        >
          VIEW ALL
        </motion.button>
      </motion.div> */}

        {/* Photo Grids */}
        <div className="w-full flex flex-col overflow-x-hidden">
          {/* Adelle Jewerly */}
          <div className={sectionCls}>
            <SectionHeader title="Adelle Jewerly" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405111/pink-1_me02wd.png"
                dw="26%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405111/pink-2_eqnv2j.png"
                dw="23%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405153/pink3_mnndju.png"
                dw="26%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405183/pink-4_niilnk.png"
                dw="25%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* BYD */}
          <div className={sectionCls}>
            <SectionHeader title="BYD" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
                dw="24%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405995/byd-2_gkj0ei.png"
                dw="24%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405996/byd-3_r8uxfc.png"
                dw="26%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405998/byd-4_ekrtjq.png"
                dw="26%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* Exitkids */}
          <div className={sectionCls}>
            <SectionHeader title="Exitkids" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406139/cookie-1_c3oedr.png"
                dw="24%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406135/cookie-4_z45ab6.png"
                dw="26%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406137/cookie-3_k8vrbt.png"
                dw="25%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406138/cookie-2_ryzzse.png"
                dw="25%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* Babyshop */}
          <div className={sectionCls}>
            <SectionHeader title="Babyshop" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406371/krem-1_wqxnry.png"
                dw="25%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406374/krem-2_gkoydl.png"
                dw="25%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406377/krem-3_zqtzwu.png"
                dw="25%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406379/krem-4_hpbyhl.png"
                dw="25%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* Citimex — 3 photos only, all show on mobile */}
          <div className={sectionCls}>
            <SectionHeader title="Citimex" description={LOREM} />
            <GridRow justify="start">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406518/citimex-1_hgyhcw.png"
                dw="25%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406521/citimex-2_xrppxc.png"
                dw="27%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406523/citimex-3_tncxbu.png"
                dw="25%"
              />
            </GridRow>
          </div>

          {/* Giordano */}
          <div className={sectionCls}>
            <SectionHeader title="Giordano" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406648/fam-1_pfnh3b.png"
                dw="23%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406650/fam-2_fyb8il.png"
                dw="28%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406653/fam-3_gmoiwg.png"
                dw="24%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406655/fam-4_w8c2qe.png"
                dw="25%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* Cumi Baby & Kids */}
          <div className={sectionCls}>
            <SectionHeader title="Cumi Baby & Kids" description={LOREM} />
            <GridRow justify="center">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406762/cumi1_hc1m3o.png"
                dw="26%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406764/cumi-2_kuw206.png"
                dw="21%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406770/cumi-3_k8csof.png"
                dw="26%"
              />
              <RImg
                index={3}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406768/cumi-4_yiyinx.png"
                dw="27%"
                hideOnMobile
              />
            </GridRow>
          </div>

          {/* Erlangga — 3 photos only */}
          <div className={sectionCls}>
            <SectionHeader title="Erlangga" description={LOREM} />
            <GridRow justify="start">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406849/erlangga1_nhicce.png"
                dw="25%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406851/erlangga2_zdkcyo.png"
                dw="25%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406853/erlangga3_tvazkn.png"
                dw="25%"
              />
            </GridRow>
          </div>

          {/* One — 3 photos only */}
          <div className={sectionCls}>
            <SectionHeader title="One" description={LOREM} />
            <GridRow justify="start">
              <RImg
                index={0}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406925/one-1_duwcte.png"
                dw="27%"
              />
              <RImg
                index={1}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406937/one-2_qlmueb.png"
                dw="27%"
              />
              <RImg
                index={2}
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406940/one-3_l4ehns.png"
                dw="27%"
              />
            </GridRow>
          </div>

          {/* Back Button */}
          <div className="w-full px-4 md:px-10 py-14 md:py-24">
            <motion.button
              onClick={() => navigate(-1)}
              className="flex items-center gap-4 md:gap-6"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                className="text-black text-lg md:text-2xl tracking-tight"
                variants={{ rest: { x: 0 }, hover: { x: 40 } }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Back
              </motion.span>
              <svg
                width="120"
                height="22"
                viewBox="0 0 260 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[172px] md:h-[28px]"
              >
                <motion.g
                  variants={{ rest: { x: 0 }, hover: { x: 40 } }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <polyline
                    points="24,6 8,20 24,34"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>
                <motion.line
                  x1="8"
                  y1="20"
                  x2="240"
                  y2="20"
                  stroke="black"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  variants={{ rest: { x1: 8 }, hover: { x1: 48 } }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
