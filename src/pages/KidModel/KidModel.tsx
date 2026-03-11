import { motion } from "framer-motion";

export default function KidModel() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dbhx39mmm/image/upload/v1773026363/kid-hero_mwfa37.png)`,
          }}
          initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>

      {/* Content Section */}
      <div className="bg-white w-full px-16 py-48">
        <div className="flex">
          {/* Left - Title */}
          <div className="w-[40%] relative pt-14">
            <motion.span
              className="font-bold leading-none tracking-tight text-black block"
              style={{ fontSize: "98px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              KID
            </motion.span>
          </div>

          {/* Right - Content */}
          <div className="w-[60%] flex flex-col gap-11 pt-14">
            <h2
              className="font-bold leading-tight tracking-tight text-black"
              style={{ fontSize: "40px" }}
            >
              KID MODEL
            </h2>
            <p
              className="font-normal leading-tight text-black pb-8"
              style={{ fontSize: "28px" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
