import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const navigate = useNavigate();

  return (
    <section className="h-screen bg-white flex flex-col justify-end pb-4">
      <div className="max-w-[1920px] mx-auto w-full px-12">
        {/* Title */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[25px] tracking-tight font-medium mb-2">
            GLAMS AGENCY MODEL
          </h2>
          <div className="h-[1px] bg-black" />
        </motion.div>

        {/* Images — outer div animates entrance, inner layoutId stays clean */}
        <div className="grid grid-cols-3 gap-8 justify-center items-center mx-auto">
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
                className="group"
                style={{
                  width: 590,
                  height: 700,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
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
  );
}
