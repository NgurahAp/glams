import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileSplash from "../../components/MobileSplash";

const models = [
  {
    id: "baby",
    layoutId: "baby-agency-image",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024788/baby-photo-2_pnov6k.png",
    alt: "Baby Model",
    path: "/baby-agency",
  },
  {
    id: "kid",
    layoutId: "kid-agency-image",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-2_cq5okb.png",
    alt: "Kid Model",
    path: "/kid-agency",
  },
  {
    id: "adult",
    layoutId: "adult-agency-image",
    src: "https://res.cloudinary.com/dbhx39mmm/image/upload/v1773024790/kid-photo-3_xnb3t0.png",
    alt: "Adult Model",
    path: "/adult-agency",
  },
];

export default function AgencyModel() {
  const [splashDone, setSplashDone] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!splashDone && (
        <MobileSplash
          onDismiss={() => setSplashDone(true)}
          imageUrl="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673674/JACK3019_hb48xv.jpg"
          title={"GLAMS\nAGENCY"}
        />
      )}
      <section className="md:h-screen bg-white flex flex-col justify-end pb-4 pt-24 md:pt-0">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          {/* Title */}
          <motion.div
            className="mb-4 md:mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-sm md:text-lg tracking-tight font-medium mb-2">
              GLAMS AGENCY MODEL
            </h2>
            <div className="h-[1px] bg-black" />
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-0 md:gap-x-4 justify-center items-center mx-auto">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <motion.div
                  layoutId={model.layoutId}
                  onClick={() => navigate(model.path)}
                  className="group w-full overflow-hidden cursor-pointer md:h-[460px]"
                >
                  <img
                    src={model.src}
                    alt={model.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
