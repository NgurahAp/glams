// src/components/Navbar.tsx
import { motion, type Variants } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "CONTACT", path: "#" },
  { label: "LOCATION", path: "#" },
  { label: "ABOUT US", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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
      className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-10 py-14"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left - Hamburger */}
      <div className="flex items-start">
        {isHome ? (
          <button className="cursor-pointer">
            <svg
              width="64"
              height="24"
              viewBox="0 0 64 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="4"
                x2="64"
                y2="4"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="20"
                x2="64"
                y2="20"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => navigate(-1)} className="cursor-pointer">
            <motion.img
              src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037474/navbar-back_mhlczv.png"
              alt="Back"
              className="h-16 w-auto"
              style={{ transformOrigin: "left center" }}
              whileHover={{ scale: 0.85, opacity: 0.6, x: -6, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </button>
        )}
      </div>

      {/* Center - Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 ">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbhx39mmm/image/upload/v1773037487/logo_ikbz71.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Right - Nav Links */}
      <div className="flex flex-col items-start gap-6">
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
                className="text-white text-2xl font-light cursor-pointer tracking-tight relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />{" "}
              </a>
            ) : (
              <Link
                to={link.path}
                className="text-white text-2xl font-light cursor-pointer tracking-tight relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />{" "}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
