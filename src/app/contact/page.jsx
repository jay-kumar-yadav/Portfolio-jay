"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919097088427";
const DEFAULT_MESSAGE = "Hi! I came across your portfolio and would like to connect.";

const ContactPage = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const titleText = "Let's Connect";
  const subtitleText = "Reach out on WhatsApp—I'd love to hear from you!";

  return (
    <motion.div
      className="relative h-full overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#25D366]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-[#25D366]/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-12 text-center max-w-2xl">
        {/* Title - Staggered letter animation */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 12 },
                  },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {subtitleText}
        </motion.p>

        {/* WhatsApp CTA Card */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:shadow-[0_0_60px_-10px_rgba(37,211,102,0.6)] transition-shadow duration-500 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            style={{ width: "50%" }}
          />

          {/* Pulsing ring behind icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
          >
            <motion.div
              className="absolute w-24 h-24 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.5, 0, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-24 h-24 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.5, 0, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* WhatsApp Icon */}
          <motion.div
            className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.div>

          {/* Button text */}
          <div className="flex flex-col gap-1">
            <motion.span
              className="text-2xl sm:text-3xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              WhatsApp Me
            </motion.span>
            <span className="text-white/80 text-sm">Tap to start a conversation</span>
          </div>

          {/* Arrow indicator */}
          <motion.span
            className="text-2xl"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>

      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-[#25D366]/40"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="absolute top-32 right-16 w-2 h-2 rounded-full bg-[#25D366]/30"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-[#128C7E]/40"
        animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
      />
    </motion.div>
  );
};

export default ContactPage;
