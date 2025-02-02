"use client";
import PortfolioIconImage from "@/public/assets/icons/image.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="lg:fixed lg:w-1/5 lg:h-screen p-4 border border-primary rounded-lg text-center">
      <div className="flex justify-between items-center lg:block">
        <div className="text-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <Image
              src={PortfolioIconImage}
              alt="Portfolio Logo"
              width={100}
              height={100}
              className="mx-auto mt-10"
              priority
            />
          ) : (
            <>
              <Image
                src={PortfolioIconImage}
                alt="Portfolio Logo"
                width={100}
                height={100}
                className="mx-auto mt-10"
                priority
              />
              <h3 className="mt-4">Hi, I&apos;m</h3>
              <h1 className="text-3xl font-bold">Saulo</h1>
              <h2 className="text-xl">Full-Stack Developer</h2>
            </>
          )}
        </div>
        <button
          className="lg:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <nav
        className={`mt-8 space-y-4 ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        {[
          { href: "/", text: "Home" },
          { href: "/about", text: "About Me" },
          { href: "/skills", text: "Skills" },
          { href: "/experiences", text: "Experiences" },
          { href: "/projects", text: "Projects" },
          { href: "/contact", text: "Contact" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block hover:opacity-70 transition-all duration-300 ease-in-out"
          >
            <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
              <h2>{link.text}</h2>
            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
}
