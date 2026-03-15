import { motion } from "framer-motion";

export default function EventOrganizer() {
  return (
    <section className="bg-white overflow-x-hidden">
      {/* Hero Title */}
      <div className="w-full max-w-7xl mx-auto px-8 pt-[30vh] pb-12 flex items-center">
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

      {/* GLAMS MANAGEMENT — title kiri, teks kanan */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-16">
        <motion.div
          className="flex items-start gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-1/2">
            <motion.h2
              className="text-black font-bold uppercase text-4xl leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              GLAMS MANAGEMENT
            </motion.h2>
          </div>
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-black text-xl leading-relaxed text-justify">
              With extensive and in-depth experience in event management,
              supported by a comprehensive spectrum of professional performance
              talents, we deliver integrated solutions for a wide range of event
              needs. From strategic planning and creative concept curation to
              precise execution, we provide end-to-end support for various types
              of events, including brand activations, product showcases, fashion
              presentations, and exclusive runway productions. Every detail is
              meticulously managed to ensure a refined, impactful event
              experience that aligns seamlessly with each brand's identity.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* SECTION 1: Part of a Larger Talent — kiri */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ width: "100%", overflow: "hidden" }}
            className="mb-6"
          >
            <video
              src="https://res.cloudinary.com/dbhx39mmm/video/upload/v1773555723/event-1_hnanoi.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.h2
            className="text-black font-bold text-2xl leading-snug tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Part of a Larger Talent & Entertainment Ecosystem
          </motion.h2>
          <motion.p
            className="text-black text-base leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Glams develops and executes mall events and brand activation
            programs as part of an integrated creative ecosystem. With
            experience collaborating with shopping malls across Jakarta, we
            design initiatives that support traffic growth, audience engagement,
            and brand visibility in a structured and measurable way.
          </motion.p>
        </div>
      </div>

      {/* SECTION 2: Event Execution — kanan */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="w-1/2 ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ width: "100%", overflow: "hidden" }}
            className="mb-6"
          >
            <video
              src="https://res.cloudinary.com/dbhx39mmm/video/upload/v1773556048/event-2_cevayh.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.h2
            className="text-black font-bold text-2xl leading-snug tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Event Execution Backed by a Structured System
          </motion.h2>
          <motion.p
            className="text-black text-base leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Our event division operates with a coordinated production system —
            including production crews, runners, documentation teams, technical
            support, and on-ground coordinators. This structure allows us to
            manage programs efficiently while maintaining professional standards
            from planning to final execution.
          </motion.p>
        </div>
      </div>

      {/* SECTION 3: — kiri */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ width: "100%", overflow: "hidden" }}
            className="mb-6"
          >
            <video
              src="https://res.cloudinary.com/dbhx39mmm/video/upload/v1773556191/event-3_jjbqiz.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.h2
            className="text-black font-bold text-2xl leading-snug tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Event Execution Backed by a Structured System
          </motion.h2>
          <motion.p
            className="text-black text-base leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Our event division operates with a coordinated production system —
            including production crews, runners, documentation teams, technical
            support, and on-ground coordinators. This structure allows us to
            manage programs efficiently while maintaining professional standards
            from planning to final execution.
          </motion.p>
        </div>
      </div>

      {/* SECTION 4: Strengthened by Our Talent Network — full width, 2 video berdampingan, teks tengah */}
      <div className="w-full max-w-7xl mx-auto px-8 pb-16">
        {/* 2 video berdampingan */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            "https://res.cloudinary.com/dbhx39mmm/video/upload/v1773556319/event-5_nozs2a.mp4",
            "https://res.cloudinary.com/dbhx39mmm/video/upload/v1773556333/event-4_lpm0s0.mp4",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ width: "100%", overflow: "hidden" }}
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Teks di tengah */}
        <div className="max-w-3xl mx-auto text-left">
          <motion.h2
            className="text-black font-bold text-2xl leading-snug tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Strengthened by Our Talent Network
          </motion.h2>
          <motion.p
            className="text-black text-base leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            What differentiates Glams is our direct integration with our talent
            agency and academy. Because we manage and develop talents
            internally, we are able to curate performances that align with brand
            positioning and campaign objectives. From product launches and
            campaign activations to mall entertainment programs, every
            performance is coordinated within one unified management system.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
