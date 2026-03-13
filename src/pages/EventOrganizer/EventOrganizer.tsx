import { motion } from "framer-motion";

export default function EventOrganizer() {
  return (
    <section className="bg-white overflow-x-hidden">
      {/* Hero Title */}
      <div className="w-full max-w-7xl mx-auto px-8 min-h-screen flex items-center">
        <motion.h1
          className="text-black font-bold uppercase text-9xl leading-none tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          EVENT
          <br />
          ORGANIZER
        </motion.h1>
      </div>

      {/* Image + Text — kiri */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-32">
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
            alt=""
            className="w-full h-auto block"
          />
          <motion.p
            className="mt-4 text-black text-2xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod
          </motion.p>
        </motion.div>
      </div>

      {/* Image + Text — kanan */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-32 flex justify-end">
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
            alt=""
            className="w-full h-auto block"
          />
          <motion.p
            className="mt-4 text-black text-2xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod
          </motion.p>
        </motion.div>
      </div>

      {/* 2 Images + 1 Text — 70% total */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-32">
        <motion.div
          className="flex flex-col gap-4"
          style={{ width: "70%" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-start gap-3">
            <motion.img
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
              alt=""
              className="h-auto block"
              style={{ width: "50%" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.img
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773405993/byd-1_qjfiyz.png"
              alt=""
              className="h-auto block"
              style={{ width: "50%" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>
          <motion.p
            className="text-black text-2xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
