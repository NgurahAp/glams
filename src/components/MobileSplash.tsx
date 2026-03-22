// src/components/MobileSplash.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const mobileNavLinks = [
  { label: "CONTACT", path: "#" },
  {
    label: "LOCATION",
    path: "https://www.google.com/maps/place/GLAMS+Academy+%26+Management+Lippo+Mall+Puri/@-6.1872816,106.7393835,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5a5c615f901:0x61f530a795f6a371!8m2!3d-6.1872816!4d106.7393835!16s%2Fg%2F11mxsxhlj0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
    external: true,
  },
  { label: "ABOUT US", path: "/about" },
];

interface MobileSplashProps {
  onDismiss: () => void;
  imageUrl: string;
  title: string;
}

export default function MobileSplash({
  onDismiss,
  imageUrl,
  title,
}: MobileSplashProps) {
  const [dismissed, setDismissed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleTap = () => {
    if (dismissed) return;
    setDismissed(true);
    setTimeout(onDismiss, 700);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dismissed) return;
    const touchEnd = e.touches[0].clientY;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 30) {
      setDismissed(true);
      setTimeout(onDismiss, 700);
    }
  };

  useEffect(() => {
    if (!dismissed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [dismissed]);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          className="fixed inset-0 h-screen w-full z-[100] md:hidden cursor-pointer overflow-hidden"
          initial={{ transform: "translateY(0%)" }} // ← pakai transform, bukan y
          exit={{ transform: "translateY(-100%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{
            willChange: "transform", // ← hint ke browser untuk GPU
            backfaceVisibility: "hidden", // ← cegah flicker
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Touch overlay */}
          <div
            className="absolute inset-0 z-50"
            onClick={handleTap}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ touchAction: "none" }}
          />

          {/* Background Image — pakai transform3d agar masuk GPU layer */}
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ transform: "translateZ(0)" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
            {/* Navbar */}
            <motion.div
              className="flex items-start justify-between px-4 py-8 pointer-events-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
                  alt="Logo"
                  className="h-6 w-auto"
                />
              </Link>

              <div className="flex flex-col items-end gap-2">
                {mobileNavLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 * i + 0.5,
                      duration: 0.5,
                      ease: [0.15, 0.1, 0.15, 1],
                    }}
                  >
                    {link.path === "#" ? (
                      <a
                        href={link.path}
                        className="text-white text-[10px] font-light tracking-tight"
                      >
                        {link.label}
                      </a>
                    ) : (link as any).external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-[10px] font-light tracking-tight"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white text-[10px] font-light tracking-tight"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom */}
            <motion.div
              className="flex flex-col items-center gap-0 pb-20 px-5 pointer-events-none"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="w-full">
                <p className="text-white text-sm font-light italic tracking-tighter uppercase">
                  CLICK FOR MORE
                </p>
                <h1 className="text-white text-5xl leading-[0.9] font-medium tracking-tight uppercase whitespace-pre-line">
                  {title}
                </h1>
              </div>

              <motion.div
                className="flex flex-col items-center pt-20 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <img
                  src="/SCROLL.png"
                  alt="Scroll"
                  className="w-14 h-14 object-contain"
                />
              </motion.div>
              <p className="text-white text-xs font-light italic tracking-tighter uppercase">
                SCROLL
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
