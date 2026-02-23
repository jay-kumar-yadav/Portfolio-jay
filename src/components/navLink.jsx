"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.url;

  return (
    <Link href={link.url} className="relative px-4 py-2 font-medium overflow-hidden">
      {isActive && (
        <motion.span
          layoutId="navbar-active"
          className="absolute inset-0 bg-black rounded-lg -z-10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className={`relative z-0 transition-colors ${isActive ? "text-white" : "text-gray-700 hover:text-black"}`}>
        {link.title}
      </span>
    </Link>
  );
};

export default NavLink;