import { motion, useAnimation } from "framer-motion";

const contactItems = [
  { label: "GMAIL", href: "#" },
  { label: "PHONE NUMBER", href: "#" },
  { label: "INSTAGRAM ACADEMY", href: "#" },
  { label: "INSTAGRAM MANAGEMENT", href: "#" },
];

const locationItems = [{ label: "STUDIO LOCATION", href: "#" }];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-2 md:gap-4 w-full font-bold text-white text-sm md:text-xl tracking-tight uppercase"
      whileHover={{ opacity: 0.6 }}
      transition={{ duration: 0.2 }}
    >
      <span>{label}</span>
      <span className="text-sm md:text-xl font-light">+</span>
    </motion.a>
  );
}

function ScrollArrow({ onClick }: { onClick: () => void }) {
  const lineControls = useAnimation();
  const arrowControls = useAnimation();

  const handleHoverStart = () => {
    lineControls.start({
      scaleY: 0.65,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
    arrowControls.start({
      y: 27,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
  };

  const handleHoverEnd = () => {
    lineControls.start({
      scaleY: 1,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
    arrowControls.start({
      y: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    });
  };

  return (
    <motion.button
      onClick={onClick}
      className="cursor-pointer flex flex-col items-center"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ width: 20, height: 90 }}
    >
      <svg
        width="20"
        height="90"
        viewBox="0 0 40 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
      >
        <motion.g animate={arrowControls}>
          <polyline
            points="2,30 20,8 38,30"
            fill="none"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        <motion.line
          x1="20"
          y1="180"
          x2="20"
          y2="8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={lineControls}
          style={{ transformOrigin: "20px 180px" }}
        />
      </svg>
      <svg
        width="28"
        height="126"
        viewBox="0 0 40 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <motion.g animate={arrowControls}>
          <polyline
            points="2,30 20,8 38,30"
            fill="none"
            stroke="white"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        <motion.line
          x1="20"
          y1="180"
          x2="20"
          y2="8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={lineControls}
          style={{ transformOrigin: "20px 180px" }}
        />
      </svg>
    </motion.button>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black w-full text-white">
      <div className="max-w-[1920px] mx-auto w-full px-5 md:px-12 py-8 md:py-14 flex flex-col justify-between min-h-[50vh] md:min-h-[70vh]">
        <div className="grid grid-cols-3 gap-6 md:gap-24">
          {/* CONTACT */}
          <div className="flex flex-col pt-5 md:pt-10">
            <div className="border-t border-white/40 w-full mb-3 md:mb-6" />
            <span className="text-sm md:text-2xl tracking-tight mb-8 md:mb-20">
              CONTACT
            </span>
            <div className="flex flex-col gap-5 md:gap-16">
              {contactItems.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col pt-5 md:pt-10">
            <div className="border-t border-white/40 w-full mb-3 md:mb-6" />
            <span className="text-sm md:text-2xl tracking-tight mb-8 md:mb-20">
              LOCATION
            </span>
            <div className="flex flex-col gap-5 md:gap-16">
              {locationItems.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </div>
          </div>

          {/* ARROW */}
          <div className="flex flex-col justify-between items-end pt-5 md:pt-10">
            <ScrollArrow onClick={scrollToTop} />
            <div className="flex justify-end">
              <p className="text-[8px] md:text-lg tracking-tight text-left leading-tight max-w-2xl text-white/80">
                THIS WEBSITE NOT ENDORSE OR
                <br />
                APPROVED BY, NOT IN ANY WAY
                <br />
                AFFILIATED WITH.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
