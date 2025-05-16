import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const MOCK_QA = {
  "how do i sell my license?":
    "You can sell your license easily by listing it on our marketplace. We handle secure transactions and escrow for your protection.",
  "what payment methods do you accept?":
    "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
  "how fast can i get paid?":
    "Payments are processed within 3 business days after sale completion.",
};

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about selling your license." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const key = userMsg.toLowerCase();
      const answer =
        MOCK_QA[key] ||
        "Sorry, I don't have an answer to that right now. Please try asking something else or contact us directly!";
      setMessages((msgs) => [...msgs, { from: "bot", text: answer }]);
      setLoading(false);
    }, 1000);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with us"
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition"
      >
        💬
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 max-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col"
          >
            <header className="bg-primary text-white px-4 py-3 rounded-t-xl font-semibold">
              SoftSell Chat
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="float-right text-white hover:text-gray-300"
              >
                ×
              </button>
            </header>

            <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-3">
              {messages.map(({ from, text }, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] p-2 rounded-md ${
                    from === "bot"
                      ? "bg-gray-200 dark:bg-gray-700 self-start"
                      : "bg-primary text-white self-end"
                  }`}
                >
                  {text}
                </div>
              ))}
              {loading && (
                <div className="max-w-[80%] p-2 rounded-md bg-gray-200 dark:bg-gray-700 self-start animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="p-3 border-t border-gray-300 dark:border-gray-700 flex gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask a question..."
                className="flex-1 resize-none rounded-md border border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={1}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-primary text-white px-4 rounded-md disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ContactPage() {
  const initial = {
    name: "",
    email: "",
    company: "",
    type: "Subscription",
    message: "",
  };
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      alert("Please fill all required fields correctly.");
      return;
    }

    setSubmitted(true);
    setForm(initial);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section
        id="contact"
        className="px-6 py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white"
        >
          Let’s Talk
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-2xl mx-auto space-y-6 bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-xl"
        >
          {["name", "email", "company", "message"].map((field) => (
            <motion.div
              key={field}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-4"
            >
              <label
                htmlFor={field}
                className="w-28 text-gray-700 dark:text-gray-300 font-medium capitalize"
              >
                {field}
                {field !== "company" && "*"}
              </label>

              {field !== "message" ? (
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={onChange}
                  required={field !== "company"}
                  placeholder={`Enter your ${field}`}
                  className="flex-grow rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <textarea
                  id={field}
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Enter your message"
                  required
                  className="flex-grow rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              )}
            </motion.div>
          ))}

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4"
          >
            <label
              htmlFor="type"
              className="w-28 text-gray-700 dark:text-gray-300 font-medium capitalize"
            >
              Subscription
            </label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={onChange}
              className="flex-grow rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Subscription</option>
              <option>Perpetual</option>
              <option>Enterprise</option>
            </select>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mt-4 text-sm font-medium"
            >
              <CheckCircle className="w-5 h-5" />
              Thanks, we’ll be in touch shortly!
            </motion.div>
          )}
        </motion.form>
      </section>

      <ChatWidget />
    </>
  );
}
