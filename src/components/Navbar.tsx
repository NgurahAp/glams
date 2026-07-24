// src/components/Navbar.tsx
import { motion, type Variants } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CONTACT_SECTION_ID,
  STUDIO_LOCATION_URL,
} from "../constants/contact";

const navLinks = [
  {
    label: "CONTACT",
    path: `#${CONTACT_SECTION_ID}`,
    external: false,
  },
  {
    label: "LOCATION",
    path: STUDIO_LOCATION_URL,
    external: true,
  },
  { label: "ABOUT US", path: "/about", external: false },
];

const darkBgRoutes = [
  "/",
  "/about",
  "/photoshoot",
  "/agency-model",
  "/baby-model",
  "/kid-model",
  "/adult-model",
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isDark = darkBgRoutes.includes(location.pathname);

  const textColor = isDark ? "text-white" : "text-black";
  const underlineBg = isDark ? "bg-white" : "bg-black";

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document
      .getElementById(CONTACT_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
      className="absolute top-0 left-0 right-0 z-50 py-[1.125rem] md:py-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-4 md:px-8 flex items-start justify-between">
        {/* Left - Back button (non-home) OR Logo (mobile home only) */}
        <div className="flex items-start">
          {isHome ? (
            /* Mobile: logo di kiri | Desktop: kosong (logo tetap di center) */
            <Link to="/" className="md:hidden">
              <img
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
                alt="Logo"
                className={`h-7 w-auto ${!isDark ? "invert" : ""}`}
              />
            </Link>
          ) : (
            <button onClick={() => navigate(-1)} className="cursor-pointer">
              <motion.img
                src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037474/navbar-back_mhlczv.png"
                alt="Back"
                className={`h-8 md:h-10 w-auto ${!isDark ? "invert" : ""}`}
                style={{ transformOrigin: "left center" }}
                whileHover={{ scale: 0.85, opacity: 0.6, x: -6, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </button>
          )}
        </div>

        {/* Center - Logo (semua halaman di desktop, non-home di mobile) */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 ${isHome ? "hidden md:block" : "block"}`}
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
              alt="Logo"
              className={`h-7 md:h-8 w-auto ${!isDark ? "invert" : ""}`}
            />
          </Link>
        </div>

        {/* Right - Nav Links */}
        <div className="flex flex-col items-start gap-1 md:gap-3">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
                {link.path === `#${CONTACT_SECTION_ID}` ? (
                  <a
                    href={link.path}
                    onClick={handleContactClick}
                    className={`${textColor} text-xs leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 ${underlineBg} transition-all duration-300 ease-out group-hover:w-full`}
                    />
                  </a>
                ) : link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} text-xs leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 ${underlineBg} transition-all duration-300 ease-out group-hover:w-full`}
                    />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className={`${textColor} text-xs leading-tight md:text-base font-light cursor-pointer tracking-tight relative group`}
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
      </div>
    </motion.nav>
  );
}
