import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import MobileSplash from "../../components/MobileSplash";

const IMAGE_URL =
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773485712/academy_herp_ltporv.jpg";

const CURRICULUM_IMG_URL =
  "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773488816/curriculum_ds3lwl.jpg";

const curriculum = [
  {
    title: "CATWALK CLASS",
    image:
      "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773489506/cat-walk_pnkawz.png",
    description1:
      "We help students discover their strengths and grow with confidence.",
    description2:
      "Through simple exercises, they learn to understand their personality, communicate better, and build a positive presence.",
    tags: [
      {
        label: "Catwalk Kids",
        link: "https://www.instagram.com/reels/DI1II52SCKP/",
      },
      {
        label: "Catwalk Teens",
        link: "https://www.instagram.com/reels/DI2mj4YSm4s/",
      },
    ],
  },
  {
    title: "PERSONALITY\nDEVELOPMENT\nCLASS",
    image:
      "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773504962/personal_development_m4qymy.png",
    description1:
      "We help students discover their strengths and grow with confidence.",
    description2:
      "Through simple exercises, they learn to understand their personality, communicate better, and build a positive presence.",
    tags: [
      {
        label: "Public Speaking",
        link: "https://www.instagram.com/reels/DLsO1GSyf7N/",
      },
      { label: "Hairdo", link: "https://www.instagram.com/reels/DI_LdhbyQJm/" },
    ],
  },
  {
    title: "POSE AND\nPHOTOSHOOT\nCLASS",
    image:
      "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773505713/pose_photoshoot_ezjpzo.png",
    description1:
      "We teach students to express themselves confidently in front of the camera through simple, fun posing exercises.",
    description2:
      "They learn angles, expressions, and how to feel comfortable during photoshoots—building natural posing skills, creative expression, and camera confidence.",
    tags: [
      {
        label: "The Second Act",
        link: "https://www.instagram.com/reels/DUssy2BEoPR/",
      },
      {
        label: "Tangled",
        link: "https://www.instagram.com/reels/DROfIVfkqa6/",
      },
    ],
  },
  {
    title: "REAL STAGE\nFASHION",
    image:
      "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773505757/real_stage_vnn3vw.png",
    description1:
      "For the final assignment, we help students feel confident on the runway through simple, supportive techniques.",
    description2:
      "They learn stage presence, timing, and poise to deliver a polished, confident performance.",
    tags: [
      { label: "ESMOD", link: "https://www.instagram.com/reels/DSEjqrnkt2D/" },
      {
        label: "RUNWAY GLOW",
        link: "https://www.instagram.com/reels/DO4-0ZAkeu-//",
      },
    ],
  },
  {
    title: "ACTING\nCLASS",
    image:
      "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773505920/acting_wfnmfi.png",
    description1:
      "We help students express themselves through fun, easy acting exercises.",
    description2:
      "They learn to use their voice, expressions, and movements to tell a story—acting out simple scenes, showing emotions confidently, and performing creatively.",
    tags: [
      { label: "Acting", link: "https://www.instagram.com/reels/DLWsGb-yMwn/" },
    ],
  },
];

function CurriculumCard({
  title,
  image,
  description1,
  description2,
  tags,
  index,
}: {
  title: string;
  image: string;
  description1: string;
  description2: string;
  tags: { label: string; link: string }[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center w-full py-8 ${
        isReversed ? "flex-row-reverse" : "flex-row"
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Image */}
      <div
        className={`w-[50%] relative overflow-hidden flex ${
          isReversed ? "justify-start" : "justify-end"
        }`}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-[80%] h-auto object-cover object-top rounded-sm"
          initial={{ scale: 1.05 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Content */}
      <div
        className={`w-[50%] flex flex-col items-start justify-center ${
          isReversed ? "pl-[10%] pr-8" : "pl-8 pr-[10%]"
        }`}
      >
        {/* Title */}
        <motion.h2
          className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1] tracking-tight text-black uppercase mb-6 whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm font-normal leading-snug tracking-tight text-black text-justify mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {description1}
        </motion.p>

        <motion.p
          className="text-sm font-normal leading-snug tracking-tight text-black text-justify mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {description2}
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => window.open(tag.link, "_blank")}
              className="border border-black rounded-full px-5 py-1.5 text-xs tracking-wide text-black w-fit hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {tag.label}
            </button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function GlamsAcademyHero() {
  const [splashDone, setSplashDone] = useState(false);

  const curriculumRef = useRef(null);
  const curriculumInView = useInView(curriculumRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <>
      {!splashDone && (
        <MobileSplash
          onDismiss={() => setSplashDone(true)}
          imageUrl="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673670/JACK3233_vj3slo.jpg"
          title={"GLAMS\nACADEMY"}
        />
      )}
      <div className="bg-white flex flex-col items-center px-12 py-24 max-w-7xl mx-auto w-full">
        {/* ── Hero Section ── */}
        <div className="flex items-center justify-center overflow-hidden w-full">
          {/* Left — Image */}
          <motion.div
            className="w-[50%] relative overflow-hidden flex justify-end rounded-sm"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.img
              src={IMAGE_URL}
              alt="Glams Academy"
              className="w-[80%] h-auto object-cover object-top"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.div>

          {/* Right — Content */}
          <div className="w-[50%] flex flex-col items-start justify-center px-8">
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[0.92] tracking-tight text-black uppercase"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                GLAMS
                <br />
                ACADEMY
              </motion.h1>
            </div>

            <motion.p
              className="text-lg font-semibold tracking-tight text-black uppercase mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              CATWALK, ACTING, PUBLIC SPEAKING, DANCE
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/message/FSA37HDUPBF2D1?autoload=1&app_absent=0",
                    "_blank",
                  )
                }
                className="border border-black rounded-full px-7 py-2.5 font-semibold tracking-[0.22em] uppercase text-black bg-[#f5f3e8] hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                JOIN GLAMS ACADEMY
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* ── Description ── */}
        <motion.p
          className="text-lg font-normal leading-snug tracking-tight py-10 text-justify px-24 text-black"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          As one of the pioneers in kids' modelling education, we focus on
          nurturing children's growth both in character and personality. Through
          modelling as our learning medium, we help shape the next generation to
          build confidence, develop strong self-esteem, and shine in their own
          unique way. We believe every child has a unique spark, and that
          confidence grows when they are guided, supported, and gently
          encouraged along the way.
        </motion.p>

        {/* ── Class Curriculum Section ── */}
        <div ref={curriculumRef} className="w-full px-12">
          {/* Full-width image */}
          <motion.div
            className="w-full overflow-hidden flex justify-center rounded-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.img
              src={CURRICULUM_IMG_URL}
              alt="Class Curriculum"
              className="w-[90%] h-auto object-cover"
              initial={{ scale: 1.05 }}
              animate={curriculumInView ? { scale: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.div>

          {/* Title below image */}
          <motion.h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium tracking-tight text-black uppercase text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            CLASS CURRICULUM
          </motion.h2>
        </div>

        {/* ── Curriculum Cards ── */}
        <div className="w-full px-12 mt-8">
          {curriculum.map((item, index) => (
            <CurriculumCard
              key={index}
              index={index}
              title={item.title}
              image={item.image}
              description1={item.description1}
              description2={item.description2}
              tags={item.tags}
            />
          ))}
        </div>

        {/* ── Basic Fundamental Class Section ── */}
        <BasicFundamentalSection />

        {/* ── What Next Section ── */}
        <WhatNextSection />

        {/* ── Class Schedule Section ── */}
        <ClassScheduleSection />

        {/* ── FAQ Section ── */}
        <FAQSection />
      </div>
    </>
  );
}

function BasicFundamentalSection() {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="w-full px-12 mt-24">
      {/* Full-width image */}
      <motion.div
        className="w-full overflow-hidden flex justify-center rounded-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.img
          src={CURRICULUM_IMG_URL}
          alt="Basic Fundamental Class"
          className="w-[100%] h-auto object-cover"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.div>

      {/* Title below image */}
      <motion.h2
        className="text-6xl font-semibold tracking-tight text-black uppercase text-left py-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        BASIC FUNDAMENTAL CLASS
      </motion.h2>

      {/* ── Modeling Class ── */}
      <div>
        <motion.h3
          className="text-3xl font-semibold text-black uppercase text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Modeling Class
        </motion.h3>
        <motion.div
          className="w-full mt-2 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <p className="text-2xl font-normal tracking-tight text-black">
            Catwalk, Stage Choreography, fashion dance, Parade formation
          </p>
        </motion.div>
        {/* 3-image grid */}
        <div className="grid grid-cols-3 gap-x-4">
          {[
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
              alt: "Baby Model",
            },
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
              alt: "Kid Model",
            },
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
              alt: "Adult Model",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.18,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ width: "100%", height: 460, overflow: "hidden" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Pose & Photoshoot Class ── */}
      <div className="mt-12">
        <motion.h3
          className="text-3xl font-semibold text-black uppercase text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Pose & Photoshoot Class
        </motion.h3>
        <motion.div
          className="w-full mt-2 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <p className="text-2xl font-normal tracking-tight text-black">
            Posing techniques, Expression coaching, Angle understanding,
            Portfolio-building photoshoot
          </p>
        </motion.div>
        {/* 3-image grid */}
        <div className="grid grid-cols-3 gap-x-4">
          {[
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
              alt: "Pose Model 1",
            },
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
              alt: "Pose Model 2",
            },
            {
              src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
              alt: "Pose Model 3",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.18,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ width: "100%", height: 460, overflow: "hidden" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Personality Development Class ── */}
      <div className="mt-12">
        <motion.h3
          className="text-3xl font-semibold text-black uppercase text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Personality Development
        </motion.h3>
        <motion.div
          className="w-full mt-2 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <p className="text-2xl font-normal tracking-tight text-black">
            Table manner, Confidence building, Social etiquette,
            Self-presentation
          </p>
        </motion.div>
        {/* 3-video grid */}
        <div className="grid grid-cols-3 gap-x-4">
          {[
            "https://res.cloudinary.com/dbhx39mmm/video/upload/v1773511744/Web-Motion-2_revisi_wljpbg.mp4",
            "https://res.cloudinary.com/dbhx39mmm/video/upload/v1773511749/Motion-1_revisi_gsmsbx.mp4",
            "https://res.cloudinary.com/dbhx39mmm/video/upload/v1773511788/Motion-web-3_fqudzv.mp4",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.18,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ width: "100%", height: 460, overflow: "hidden" }}
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatNextSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full px-12 mt-24">
      <div className="flex items-center w-full">
        {/* Left — Text */}
        <div className="w-[50%] flex flex-col justify-center pr-16">
          <motion.h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-black uppercase mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            WHAT NEXT?
          </motion.h2>

          <motion.p
            className="text-sm font-normal leading-snug tracking-tight text-black text-justify mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            After building their foundation in modelling and acting, we guide
            students into a deeper, more personal journey through advanced
            classes and agency support helping them grow, refine their skills,
            and explore real opportunities.
          </motion.p>

          <motion.p
            className="text-sm font-normal leading-snug tracking-tight text-black text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            We provide guidance and suggestions tailored to each student's
            strengths. At this stage, we help direct them toward the path that
            suits them best whether they shine in acting with strong speaking
            skills, have a natural stage presence for runway modelling, or feel
            confident speaking in front of the camera as future presenters or
            content creators.
          </motion.p>
        </div>

        {/* Right — Image */}
        <motion.div
          className="w-[50%] overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.img
            src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png"
            alt="What Next"
            className="w-full h-auto object-cover object-top"
            initial={{ scale: 1.05 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </motion.div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What age can join?",
    answer:
      "Our program is open to children aged 4–17 years old. We group students by age to ensure the learning pace and activities are suitable for each stage of development.",
  },
  {
    question: "Does my child need experience?",
    answer:
      "No experience is required. We teach beginners to advanced-level students.",
  },
  {
    question: "What will they learn?",
    answer:
      "Students will learn catwalk techniques, personality development, posing and photoshoot skills, acting, public speaking, and real stage performance — all in a fun and supportive environment.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program runs for several months with weekly sessions. Duration may vary depending on the class level and schedule chosen.",
  },
  {
    question: "What about the fees?",
    answer:
      "Program fees vary by class type and level. Please contact us directly or visit the registration page for the latest pricing details.",
  },
  {
    question: "What should they wear?",
    answer:
      "Students should wear comfortable clothes that allow easy movement. For specific classes like catwalk or stage performance, guidance will be provided by the instructor.",
  },
  {
    question: "Are there real shows and photoshoots?",
    answer:
      "Yes! As part of the curriculum, students participate in real runway shows and professional photoshoots to build confidence and create portfolio-worthy memories.",
  },
  {
    question: "How to register?",
    answer:
      "You can register directly through the Join Glams Academy button on this page, or contact our team via WhatsApp or social media for more information.",
  },
];

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <button
        className="w-full flex items-center gap-4 py-5 text-left group"
        onClick={onToggle}
      >
        <motion.span
          className="text-black text-xl flex-shrink-0 leading-none"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          +
        </motion.span>
        <span className="text-base font-normal tracking-tight text-black">
          {question}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-sm font-normal leading-relaxed tracking-tight text-black pb-5 pl-9">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div ref={ref} className="w-full px-12 mt-24 mb-12">
      <motion.h2
        className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-black uppercase mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        FAQ
      </motion.h2>

      <div className="border-t border-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

function ClassScheduleSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full px-12 mt-24">
      <motion.h2
        className="text-[clamp(3rem,7vw,6rem)] font-medium tracking-tight text-black uppercase text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        CLASS SCHEDULE
      </motion.h2>

      <motion.div
        className="flex justify-center gap-32"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-lg font-bold tracking-tight text-black uppercase">
          KIDS 10.30-12.00
        </span>
        <span className="text-lg font-bold tracking-tight text-black uppercase">
          TEEN 13.30-15.00
        </span>
      </motion.div>
    </div>
  );
}
