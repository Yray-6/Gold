"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    name: "Invest in Tomorrow, Today",
    href: "/",
  },
  {
    name: "The Case for Gold",
    href: "/case",
  },
  {
    name: "Buying Gold Safely",
    href: "/buying",
  },
];

const NavLink = ({ name, href, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} className="relative inline-block text-[15px] py-3">
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className={clsx("relative z-10 pb-4", {
            "font-semibold border-b border-black": isActive,
          })}
        >
          {name}
        </span>
        <motion.div
          initial={{ width: 0, left: "50%" }}
          animate={
            isHovered ? { width: "100%", left: 0 } : { width: 0, left: "50%" }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 h-[2px] bg-black"
        />
      </div>
    </Link>
  );
};

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5">
      {links.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          href={link.href}
          isActive={pathname === link.href}
        />
      ))}
      <a href="#" className="text-[17px] py-3 font-light">
        EN | DE
      </a>
      <button className=" bg-gradient-to-r from-gradf to-gradt py-1 px-7 text-[15px] rounded font-semibold text-black">
        <Link href="/login">Login/Signup</Link>
      </button>
    </div>
  );
}
