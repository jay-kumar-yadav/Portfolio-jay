"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const PORTFOLIO_RESPONSES = {
  default: "I'm Jay's portfolio assistant! Ask me about his skills, experience, projects, or how to contact him. Try: 'What are your skills?' or 'Tell me about your experience'.",
  skills: "Jay specializes in the MERN stack: React.js, Next.js, Node.js, MongoDB. He also works with TypeScript, Tailwind CSS, Framer Motion, PostgreSQL, Nest.js, Express.js, and Three.js. Check the About page for the full list!",
  experience: "Jay is a Full-Stack Developer. He's currently at Valaxia LLP (2025-Present) and previously interned at ExclCloud (2024-2025). He also does freelance work. Visit the About page for his full experience timeline.",
  contact: "You can reach Jay via the Contact page form for email, or tap the green WhatsApp button to chat directly! He'd love to hear from you.",
  projects: "Head to the Portfolio page to see Jay's projects. He builds scalable web applications with React, Next.js, and real-time features.",
  hire: "Jay is open to opportunities! Use the Contact form or WhatsApp to discuss your project or role. He's passionate about contributing to innovative software solutions.",
  who: "Jay Kumar Yadav is a Full-Stack Developer who crafts digital experiences with React, Next.js, and Node.js. Check out the About page to learn more!",
  hello: "Hi! 👋 I'm here to help you learn about Jay's portfolio. What would you like to know?",
  thanks: "You're welcome! Feel free to ask anything else or reach out directly via the Contact page or WhatsApp.",
};

const getResponse = (message) => {
  const lower = message.toLowerCase().trim();

  if (/hello|hi|hey|hola/.test(lower)) return PORTFOLIO_RESPONSES.hello;
  if (/thank|thanks|thx/.test(lower)) return PORTFOLIO_RESPONSES.thanks;
  if (/skill|tech|technology|stack|programming/.test(lower)) return PORTFOLIO_RESPONSES.skills;
  if (/experience|work|job|company|career/.test(lower)) return PORTFOLIO_RESPONSES.experience;
  if (/contact|reach|email|how to get in touch/.test(lower)) return PORTFOLIO_RESPONSES.contact;
  if (/project|portfolio|work sample/.test(lower)) return PORTFOLIO_RESPONSES.projects;
  if (/hire|opportunit|job offer|collaborat/.test(lower)) return PORTFOLIO_RESPONSES.hire;
  if (/who|about|tell me about/.test(lower)) return PORTFOLIO_RESPONSES.who;

  return PORTFOLIO_RESPONSES.default;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Jay's AI assistant. Ask me anything about his skills, experience, or how to get in touch! 🚀" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = (e) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53z"
                clipRule="evenodd"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017 21v-3.955a48.32 48.32 0 01-2.152-.214C2.995 16.58 1.5 14.717 1.5 12.863V8.841c0-1.946 1.37-3.68 3.348-3.97z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-700 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017 21v-3.955a48.32 48.32 0 01-2.152-.214C2.995 16.58 1.5 14.717 1.5 12.863V8.841c0-1.946 1.37-3.68 3.348-3.97z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white">Jay&apos;s AI Assistant</p>
                <p className="text-xs text-white/80">Ask about skills, experience & more</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-violet-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 shadow-sm ring-1 ring-black/5 rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="border-t border-gray-200 p-3 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-violet-600 px-4 py-2.5 text-white transition-colors hover:bg-violet-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
