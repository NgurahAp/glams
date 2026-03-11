import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function KidAgency() {
  const model = {
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model",
    path: "/kid-model",
  };

  return (
    <section className="bg-white flex flex-col justify-end pb-4">
      <div className="max-w-[1920px] mx-auto w-full px-12">
        <motion.div
          className="mb-10 mt-72"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[25px] tracking-tight font-medium mb-2">
            GLAMS AGENCY KID MODEL
          </h2>
          <motion.div
            className="h-[1px] bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="flex justify-center pt-28">
          <Link to={model.path}>
            <motion.div
              layoutId="kid-agency-image"
              style={{ width: 590, height: 700, overflow: "hidden" }}
              transition={{
                layout: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="group"
            >
              <img
                src={model.src}
                alt={model.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}