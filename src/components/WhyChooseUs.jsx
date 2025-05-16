import { motion } from "framer-motion";
import { FaClock, FaLock, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const reasons = [
  { icon: FaClock, title: "Fast Turnaround", desc: "Sell within days, not weeks." },
  { icon: FaLock, title: "Secure Transactions", desc: "Industry‑leading escrow & privacy." },
  { icon: FaDollarSign, title: "Top Market Rates", desc: "Maximize the value of your assets." },
  { icon: FaThumbsUp, title: "Trusted by 500+", desc: "We’re the choice for global enterprises." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose Us
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {reasons.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow"
          >
            <Icon className="w-8 h-8 mb-4 text-primary dark:text-accent" />
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}