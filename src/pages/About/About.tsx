import { motion, type Variants } from "framer-motion";

interface AboutProps {
  image: string;
}

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function Divider() {
  return <div className="w-full border-t border-black pb-8 md:pb-16" />;
}

export default function About({ image }: AboutProps) {
  return (
    <>
      {/* HERO */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 flex flex-col items-start z-10">
          <motion.p
            className="text-white font-normal text-sm md:text-xl leading-tight tracking-tight max-w-xs md:max-w-3xl mt-4"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Glams represents an exclusive selection of professional models,
            curated and developed through elite training and refined industry
            standards. Each talent is cultivated with precision, confidence, and
            timeless elegance—embodying strong character, refined presence, and
            creative expression.
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full md:w-[40%] pt-0 md:pt-14 mb-6 md:mb-0">
              <motion.span
                className="font-bold leading-none text-4xl md:text-6xl tracking-tight text-black block"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                GLAMS
              </motion.span>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-[60%] flex flex-col">
              {/* ABOUT */}
              <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight text-black">
                  ABOUT
                </h2>

                <div className="flex flex-col gap-4 md:gap-6 text-sm md:text-lg leading-tight text-black">
                  <p>GLAMS Models Management</p>

                  <p>
                    Established in 2007, GLAMS Models Management is a leading
                    modeling academy and talent agency dedicated to shaping the
                    next generation of fashion and commercial talents.
                  </p>

                  <p>
                    With an integrated creative structure, GLAMS combines
                    education, talent representation, production, and event
                    execution to deliver exceptional standards in the fashion
                    and entertainment industry.
                  </p>

                  <p>
                    Glams models management is one of the pioneers in kids'
                    modelling education, with a strong focus on nurturing
                    character, personality, and confidence from an early age.
                    Using modeling as a learning medium, glams guides children
                    to build strong self-esteem, express their potential, and
                    shine through their own unique individuality.
                  </p>

                  <p>
                    Beyond talent development, glams provide end-to-end fashion
                    services tailored to a wide range of projects, from model
                    and talent sourcing spanning infants to seniors, to full
                    production, event support, and brand activation. Backed by
                    an experienced professional team, glams ensures a seamless,
                    curated experience from the initial brief to the final
                    deliverable.
                  </p>
                </div>
              </div>

              <Divider />

              {/* OUR VISION */}
              <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight text-black">
                  OUR VISION
                </h2>

                <p className="text-sm md:text-lg leading-tight text-black">
                  To become a premier modeling school and agency in Indonesia,
                  recognized for developing confident, distinctive, and globally
                  competitive talents while delivering high-quality creative
                  solutions for brands and industry partners.
                </p>
              </div>

              <Divider />

              {/* OUR DIVISIONS */}
              <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight text-black">
                  OUR DIVISIONS
                </h2>

                <div className="flex flex-col gap-3 md:gap-4 text-sm md:text-lg leading-tight text-black">
                  <p>
                    GLAMS Academy – Professional modeling and talent development
                    programs.
                  </p>
                  <p>
                    GLAMS Agency – Representation for kids, teens, and adults.
                  </p>
                  <p>
                    Photography & Video Production – Professional portfolio
                    development.
                  </p>
                  <p>
                    Creative Production – Brand campaigns and commercial
                    content.
                  </p>
                  <p>
                    Event Coordination – Commercial fashion shows and brand
                    activations.
                  </p>
                </div>
              </div>

              <Divider />

              {/* PATHWAY */}
              <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight text-black">
                  PATHWAY TO BECOME A GLAMS MODEL
                </h2>

                <p className="text-sm md:text-lg leading-tight text-black">
                  We specialize in discovering and developing new faces.
                  Experience is not required — We aim potential model with
                  character and commitment and willingness to follow guideline
                  from us as talents will receive professional training and
                  portfolio development under GLAMS guidance.
                </p>
              </div>

              <Divider />

              {/* WORK FIELD */}
              <div className="py-8 md:py-12 flex flex-col gap-6 md:gap-8">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight text-black">
                  WORK FIELD
                </h2>

                <p className="text-sm md:text-lg leading-tight text-black">
                  GLAMS works with local and international clients across:{" "}
                  <br /> Photoshoots – Video shoots – TVC – Commercial
                  advertising – Digital campaigns – Fashion events
                </p>
              </div>

              <Divider />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </div>
    </>
  );
}
