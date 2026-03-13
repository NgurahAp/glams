import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

function LogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex items-center"
        style={{ gap: 150 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          ...(paused ? { playState: "paused" } : {}),
        }}
      >
        {marqueeLogos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center cursor-pointer group"
            style={{ height: 40 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-auto object-contain transition-opacity duration-300"
              style={{ maxWidth: 160 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function FadeImg({
  src,
  style,
  index = 0,
}: {
  src: string;
  style: React.CSSProperties;
  index?: number;
}) {
  return (
    <motion.img
      src={src}
      style={style}
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

export default function CreativeProduction() {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Hero Title */}
      <div className="flex-1 flex items-center justify-center px-8 pt-28 pb-20">
        <motion.h1
          className="text-black font-bold uppercase text-center"
          style={{
            fontSize: "clamp(72px, 12vw, 100px)",
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
        className="w-full py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <LogoMarquee />
      </motion.div>

      {/* View All */}
      <motion.div
        className="flex justify-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.button
          className="font-bold text-black tracking-widest uppercase text-lg"
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.2 }}
        >
          VIEW ALL
        </motion.button>
      </motion.div>

      {/* Photo Grids */}
      <div
        className="w-full flex flex-col overflow-x-hidden"
        style={{ gap: 64 }}
      >
        {/* pink */}
        <div className="w-full px-8 flex justify-center">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405111/pink-1_me02wd.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405111/pink-2_eqnv2j.png"
              style={{ width: "23%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405153/pink3_mnndju.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405183/pink-4_niilnk.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* byd */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
              style={{ width: "24%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405995/byd-2_gkj0ei.png"
              style={{ width: "24%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405996/byd-3_r8uxfc.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405998/byd-4_ekrtjq.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* cookie */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406139/cookie-1_c3oedr.png"
              style={{ width: "24%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406135/cookie-4_z45ab6.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406137/cookie-3_k8vrbt.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406138/cookie-2_ryzzse.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* krem */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406371/krem-1_wqxnry.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406374/krem-2_gkoydl.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406377/krem-3_zqtzwu.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406379/krem-4_hpbyhl.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* citimex */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406518/citimex-1_hgyhcw.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406521/citimex-2_xrppxc.png"
              style={{ width: "27%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406523/citimex-3_tncxbu.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* fam */}
        <div className="w-full px-8 flex justify-center pt-49">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406648/fam-1_pfnh3b.png"
              style={{ width: "23%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406650/fam-2_fyb8il.png"
              style={{ width: "28%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406653/fam-3_gmoiwg.png"
              style={{ width: "24%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406655/fam-4_w8c2qe.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* cumi */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start justify-center"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406762/cumi1_hc1m3o.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406764/cumi-2_kuw206.png"
              style={{ width: "21%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406770/cumi-3_k8csof.png"
              style={{ width: "26%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={3}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406768/cumi-4_yiyinx.png"
              style={{ width: "27%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* erlangga */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406849/erlangga1_nhicce.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406851/erlangga2_zdkcyo.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406853/erlangga3_tvazkn.png"
              style={{ width: "25%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* one */}
        <div className="w-full px-8 flex justify-center pt-48">
          <div
            className="w-full flex items-start"
            style={{ maxWidth: "80rem", gap: 12 }}
          >
            <FadeImg
              index={0}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406925/one-1_duwcte.png"
              style={{ width: "27%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={1}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406937/one-2_qlmueb.png"
              style={{ width: "27%", height: "auto", display: "block" }}
            />
            <FadeImg
              index={2}
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773406940/one-3_l4ehns.png"
              style={{ width: "27%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="w-full px-10 py-24">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-6"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="text-black text-2xl tracking-tight"
              variants={{
                rest: { x: 0 },
                hover: { x: 40 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Back
            </motion.span>

            <svg
              width="172"
              height="28"
              viewBox="0 0 260 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.g
                variants={{
                  rest: { x: 0 },
                  hover: { x: 40 },
                }}
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
                variants={{
                  rest: { x1: 8 },
                  hover: { x1: 48 },
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
