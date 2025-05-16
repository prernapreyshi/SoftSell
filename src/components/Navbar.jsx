import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ dark, setDark }) {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-lg dark:bg-gray-900/80"
    >
      <a href="#" className="text-xl font-bold tracking-tight text-primary dark:text-accent">SoftSell</a>
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-105 transition"
        aria-label="Toggle Dark Mode"
      >
        {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </motion.nav>
  );
}