"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, y: 6 },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, y: -6 },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
    },
    opened: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24 mt-3 mb-2 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg shadow-black/5">
        <div className="h-16 flex items-center justify-between px-4 sm:px-6 md:px-8">
          {/* LINKS - Desktop */}
          <div className="hidden md:flex items-center gap-1 w-1/3">
            {links.map((link) => (
              <NavLink link={link} key={link.title} />
            ))}
          </div>

          {/* LOGO - Center on desktop, left on mobile */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start lg:justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2"
            >
              <span className="text-lg font-bold tracking-tight">
                <span className="text-black">Jay Kumar</span>
                <span className="text-gray-500 group-hover:text-black transition-colors"> Yadav</span>
              </span>
            </Link>
          </div>

          {/* SOCIAL ICONS - Desktop */}
          <div className="hidden md:flex items-center justify-end gap-2 w-1/3">
            {["/github.png", "/dribbble.png", "/instagram.png", "/facebook.png", "/pinterest.png", "/linkedin.png"].map((src) => (
              <Link
                key={src}
                href="/"
                className="p-2 rounded-lg bg-gray-100/80 hover:bg-black hover:scale-110 transition-all duration-300 group"
              >
                <Image
                  src={src}
                  alt=""
                  width={22}
                  height={22}
                  className="grayscale group-hover:grayscale-0 group-hover:invert"
                />
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 transition-colors z-50 relative"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <motion.span
                variants={topVariants}
                animate={open ? "opened" : "closed"}
                className="w-5 h-0.5 bg-gray-800 rounded-full origin-center"
              />
              <motion.span
                variants={centerVariants}
                animate={open ? "opened" : "closed"}
                className="w-5 h-0.5 bg-gray-800 rounded-full origin-center"
              />
              <motion.span
                variants={bottomVariants}
                animate={open ? "opened" : "closed"}
                className="w-5 h-0.5 bg-gray-800 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Full screen overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="exit"
              className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white z-40"
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
              {links.map((link) => (
                <motion.div key={link.title} variants={linkVariants}>
                  <Link
                    href={link.url}
                    className="text-3xl sm:text-4xl font-semibold hover:text-white/90 transition-colors block py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-4 mt-8">
                {["/github.png", "/linkedin.png", "/instagram.png", "/facebook.png"].map((src) => (
                  <Link
                    key={src}
                    href="/"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Image src={src} alt="" width={28} height={28} className="invert" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
