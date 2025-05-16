import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold mb-6"
      >
        Turn Unused Software Into Revenue
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto text-lg mb-8 text-gray-600 dark:text-gray-300"
      >
        SoftSell helps businesses resell their unused software licenses quickly and securely so you can reinvest where it matters.
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        href="#contact"
        className="inline-block px-8 py-3 rounded-lg bg-primary text-white font-medium shadow-lg"
      >
        Get a Free Valuation
      </motion.a>
    </section>
  );
}