// src/components/Navbar.tsx
import { motion, type Variants } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "CONTACT", path: "#" },
  {
    label: "LOCATION",
    path: "https://www.google.com/maps/place/GLAMS+Academy+%26+Management+Lippo+Mall+Puri/@-6.1872816,106.7393835,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f5a5c615f901:0x61f530a795f6a371!8m2!3d-6.1872816!4d106.7393835!16s%2Fg%2F11mxsxhlj0!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D",
    external: true,
  },
  { label: "ABOUT US", path: "/about" },
];

const darkBgRoutes = [
  "/",
  "/about",
  "/photoshoot",
  "/baby-model",
  "/kid-model",
  "/adult-model",
];

const cleanRoutes = ["/event"];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isDark = darkBgRoutes.includes(location.pathname);
  const isClean = cleanRoutes.includes(location.pathname);

  const textColor = isDark ? "text-white" : "text-black";
  const underlineBg = isDark ? "bg-white" : "bg-black";

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.15 * i + 0.6,
        ease: [0.15, 0.1, 0.15, 1],
      },
    }),
    hover: {
      opacity: 0.6,
    },
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 right-0 z-50 py-4 md:py-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-4 md:px-8 flex items-start justify-between">
        {/* Left - Back button (non-home) OR Logo (mobile home only) */}
        <div className="flex items-start">
          {!isClean &&
            (isHome ? (
              /* Mobile: logo di kiri | Desktop: kosong (logo tetap di center) */
              <Link to="/" className="md:hidden">
                <img
                  src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
                  alt="Logo"
                  className={`h-6 w-auto ${!isDark ? "invert" : ""}`}
                />
              </Link>
            ) : (
              <button onClick={() => navigate(-1)} className="cursor-pointer">
                <motion.img
                  src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037474/navbar-back_mhlczv.png"
                  alt="Back"
                  className={`h-7 md:h-10 w-auto ${!isDark ? "invert" : ""}`}
                  style={{ transformOrigin: "left center" }}
                  whileHover={{ scale: 0.85, opacity: 0.6, x: -6, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </button>
            ))}
        </div>

        {/* Center - Logo (semua halaman di desktop, non-home di mobile) */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 ${isHome ? "hidden md:block" : "block"}`}
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
              alt="Logo"
              className={`h-6 md:h-8 w-auto ${!isDark ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* Right - Nav Links */}
        {!isClean && (
          <div className="flex flex-col items-start gap-0.5 md:gap-3">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {link.path === "#" ? (
                  <a
                    href={link.path}
                    className={`${textColor} text-[10px] leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 ${underlineBg} transition-all duration-300 ease-out group-hover:w-full`}
                    />
                  </a>
                ) : (link as any).external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} text-[10px] leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 ${underlineBg} transition-all duration-300 ease-out group-hover:w-full`}
                    />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`${textColor} text-[10px] leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 ${underlineBg} transition-all duration-300 ease-out group-hover:w-full`}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
