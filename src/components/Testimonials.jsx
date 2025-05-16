import { motion } from "framer-motion";

const reviews = [
  {
    quote: "SoftSell turned our shelved licenses into a new revenue stream in under a week. Highly recommend!",
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp"
  },
  {
    quote: "We recovered 40% of original costs on unused software. The process was seamless and secure.",
    name: "John Smith",
    role: "CFO",
    company: "FinFlow"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 bg-primary/5 dark:bg-primary/10 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Customer Testimonials
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {reviews.map(({ quote, name, role, company }, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-6 rounded-xl shadow bg-white dark:bg-gray-800"
          >
            <p className="text-lg mb-4">“{quote}”</p>
            <footer className="text-sm text-gray-600 dark:text-gray-400">
              — {name}, {role}, {company}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}