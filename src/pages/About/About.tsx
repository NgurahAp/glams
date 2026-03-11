import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

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

const sections = [
  {
    id: "about",
    title: "ABOUT",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: "vision",
    title: "VISION",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: "mission",
    title: "MISSION",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
];

function SectionRow({
  title,
  body,
}: {
  title: string;
  body: string;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex py-16">
        <div className="flex flex-col gap-11">
          <h2
            className="font-bold leading-tight tracking-tight text-black"
            style={{ fontSize: "40px" }}
          >
            {title}
          </h2>
          <p
            className="font-normal leading-tight text-black pb-8"
            style={{ fontSize: "28px" }}
          >
            {body}
          </p>
        </div>
      </div>
      <div className="w-full border-t border-black pb-24" />
    </motion.div>
  );
}

export default function About({ image }: AboutProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="absolute bottom-10 left-10 flex flex-col items-start z-10 ">
          <motion.p
            className="text-white font-normal text-[28px] leading-tight tracking-tight max-w-6xl mt-4 cursor-default"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white w-full">
        <div className="max-w-[1920px] mx-auto w-full px-16 py-48">
          <div className="flex">
            {/* Left - Sticky GLAMS */}
            <div className="w-[40%] relative pt-14">
              <motion.span
                className="font-bold leading-none tracking-tight text-black block"
                style={{ fontSize: "98px" }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                GLAMS
              </motion.span>
            </div>

            {/* Right - Sections */}
            <div className="w-[60%] flex flex-col">
              {sections.map((section, i) => (
                <SectionRow
                  key={section.id}
                  title={section.title}
                  body={section.body}
                  isLast={i === sections.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/about-bottom_jl32sn.png)`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}
