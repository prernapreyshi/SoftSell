import { motion } from "framer-motion";
import { HiOutlineUpload, HiOutlineChartBar, HiOutlineCurrencyDollar } from "react-icons/hi";

const steps = [
  {
    icon: HiOutlineUpload,
    title: "Upload License",
    desc: "Submit your unused license details in seconds."
  },
  {
    icon: HiOutlineChartBar,
    title: "Get Valuation",
    desc: "Receive a market-based quote within 24 hours."
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Get Paid",
    desc: "Approve the offer and get money wired instantly."
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        How It Works
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 shadow"
          >
            <Icon className="w-10 h-10 mb-4 text-primary dark:text-accent" />
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}