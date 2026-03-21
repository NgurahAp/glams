import { motion } from "framer-motion";
import MobileSplash from "../../components/MobileSplash";
import { useState } from "react";

export default function EventOrganizer() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && (
        <MobileSplash
          onDismiss={() => setSplashDone(true)}
          imageUrl="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773673672/JACK3586_zzvnux.jpg"
          title={"EVENT\nORGANIZER"}
        />
      )}{" "}
      <section className="bg-white overflow-x-hidden">
        {/* Hero Title */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-[20vh] md:pt-[30vh] pb-8 md:pb-12 flex items-center">
          <motion.h1
            className="text-black font-bold uppercase text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            EVENT
            <br />
            ORGANIZER
          </motion.h1>
        </div>

        {/* GLAMS MANAGEMENT */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-4 md:gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="w-full md:w-1/2">
              <motion.h2
                className="text-black font-bold uppercase text-2xl md:text-4xl leading-tight tracking-tight"
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
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-black text-sm md:text-xl leading-relaxed text-left">
                With extensive and in-depth experience in event management,
                supported by a comprehensive spectrum of professional
                performance talents, we deliver integrated solutions for a wide
                range of event needs. From strategic planning and creative
                concept curation to precise execution, we provide end-to-end
                support for various types of events, including brand
                activations, product showcases, fashion presentations, and
                exclusive runway productions. Every detail is meticulously
                managed to ensure a refined, impactful event experience that
                aligns seamlessly with each brand's identity.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* SECTION 1: kiri */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16">
          {/* video: 70% mobile, 50% desktop, kiri */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[70%] md:w-1/2 overflow-hidden mb-4 md:mb-6"
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
          {/* teks: full width, text-left */}
          <motion.h2
            className="text-black font-bold text-base md:text-2xl leading-snug tracking-tight mb-2 md:mb-4 text-left"
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
            className="text-black text-xs md:text-base leading-relaxed text-left"
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

        {/* SECTION 2: kanan */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16">
          {/* video: 70% mobile ml-auto, 50% desktop ml-auto, kanan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[70%] md:w-1/2 overflow-hidden mb-4 md:mb-6 ml-auto"
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
          {/* teks: full width, text-right */}
          <motion.h2
            className="text-black font-bold text-base md:text-2xl leading-snug tracking-tight mb-2 md:mb-4 text-right"
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
            className="text-black text-xs md:text-base leading-relaxed text-right"
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

        {/* SECTION 3: kiri */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[70%] md:w-1/2 overflow-hidden mb-4 md:mb-6"
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
            className="text-black font-bold text-base md:text-2xl leading-snug tracking-tight mb-2 md:mb-4 text-left"
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
            className="text-black text-xs md:text-base leading-relaxed text-left"
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

        {/* SECTION 4: 2 video + teks */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-16">
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
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
                className="w-full overflow-hidden"
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

          <motion.h2
            className="text-black font-bold text-base md:text-2xl leading-snug tracking-tight mb-2 md:mb-4 text-left"
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
            className="text-black text-xs md:text-base leading-relaxed text-left"
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
      </section>
    </>
  );
}
