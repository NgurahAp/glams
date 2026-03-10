import { motion, useInView, type Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

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

const curriculum = [
  {
    title: "CATWALK CLASS",
    body: "Sebagai salah satu pelopor modelling anak, kami hadir untuk mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun kepribadian. Melalui modelling sebagai sarana belajar, kami membantu anak untuk membangun rasa percaya diri, mengenali potensi dirinya, dan berani tampil dengan keunikan masing-masing.",
  },
  {
    title: "PERSONALITY DEVELOPMENT CLASS",
    body: "Sebagai salah satu pelopor modelling anak, kami hadir untuk mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun kepribadian. Melalui modelling sebagai sarana belajar, kami membantu anak untuk membangun rasa percaya diri, mengenali potensi dirinya, dan berani tampil dengan keunikan masing-masing.",
  },
  {
    title: "POSE AND PHOTOSHOOT CLASS",
    body: "Sebagai salah satu pelopor modelling anak, kami hadir untuk mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun kepribadian. Melalui modelling sebagai sarana belajar, kami membantu anak untuk membangun rasa percaya diri, mengenali potensi dirinya, dan berani tampil dengan keunikan masing-masing.",
  },
  {
    title: "REAL STAGE FASHION",
    body: "Sebagai salah satu pelopor modelling anak, kami hadir untuk mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun kepribadian. Melalui modelling sebagai sarana belajar, kami membantu anak untuk membangun rasa percaya diri, mengenali potensi dirinya, dan berani tampil dengan keunikan masing-masing.",
  },
  {
    title: "ACTING CLASS",
    body: "Sebagai salah satu pelopor modelling anak, kami hadir untuk mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun kepribadian. Melalui modelling sebagai sarana belajar, kami membantu anak untuk membangun rasa percaya diri, mengenali potensi dirinya, dan berani tampil dengan keunikan masing-masing.",
  },
];

function CurriculumRow({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex py-28 "
    >
      {/* Left Title */}
      <div className="w-[40%] pr-10">
        <motion.h3
          className="font-bold leading-tight tracking-tight text-black pt-8 max-w-96"
          style={{ fontSize: "28px" }}
          variants={paragraphVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {title}
        </motion.h3>
      </div>

      {/* Right Content */}
      <div className="w-[60%]">
        <motion.div
          className="w-full border-t border-black mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="font-normal leading-tight tracking-tight text-black "
          style={{ fontSize: "28px" }}
          variants={paragraphVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {body}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function GlamsAcademy() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/model-hero_jvd8j8.png)",
          }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full px-16 py-16">
        <div className="flex">
          {/* Left Title */}
          <motion.div
            className="w-[40%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <h2
              className="font-bold leading-tight tracking-tight text-black"
              style={{ fontSize: "32px" }}
            >
              GLAMS ACADEMY
            </h2>
          </motion.div>

          {/* Right Description */}
          <motion.div
            className="w-[60%]"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p
              className="font-normal leading-tight tracking-tight text-black "
              style={{ fontSize: "28px" }}
            >
              Sebagai salah satu pelopor modelling anak, kami hadir untuk
              mendampingi tumbuh kembang anak. Baik dari sisi karakter maupun
              kepribadian. Melalui modelling sebagai sarana belajar, kami
              membantu anak untuk membangun rasa percaya diri, mengenali potensi
              dirinya, dan berani tampil dengan keunikan masing-masing.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full border-t border-black my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Curriculum Title */}
        <motion.h2
          className="font-bold leading-tight tracking-tight text-black mb-40"
          style={{ fontSize: "32px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          CLASS CURRICULUM
        </motion.h2>

        {/* Curriculum List */}
        {curriculum.map((item, index) => (
          <CurriculumRow
            key={index}
            title={item.title}
            body={item.body}
            index={index}
          />
        ))}

        <div className="w-full px-16 py-32">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-6"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Text */}
            <motion.span
              className="text-black tracking-tight"
              style={{ fontSize: "45px" }}
              variants={{
                rest: { x: 0 },
                hover: { x: 40 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Back
            </motion.span>

            <svg
              width="260"
              height="40"
              viewBox="0 0 260 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Arrow Head */}
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

              {/* Horizontal Line */}
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
    </>
  );
}
