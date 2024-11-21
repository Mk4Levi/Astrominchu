"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import appLogo from "./logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[var(--background)] sticky top-0 z-50 shadow-2xl border-b border-[var(--accent-primary)]">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Next.js Image component */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={appLogo}
              alt="Vicious Warfare Logo"
              width={50}
              height={50}
              className="rounded-full border-2 border-[var(--accent-secondary)]"
            />
            <span className="font-bold text-xl tracking-wider uppercase hidden sm:block text-[var(--foreground)]">
              AstroMinchu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  uppercase tracking-wider text-sm
                  transition-all duration-300 ease-in-out
                  hover:text-[var(--accent-secondary)]
                  ${
                    isActive(link.href)
                      ? "text-[var(--accent-secondary)] font-bold"
                      : "text-[var(--foreground)]"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-[var(--accent-primary)] transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-[var(--foreground)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--background)] shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  block px-4 py-3 
                  border-b border-[var(--accent-primary)]
                  uppercase tracking-wider
                  transition-colors duration-300
                  ${
                    isActive(link.href)
                      ? "text-[var(--accent-secondary)] bg-[var(--accent-primary)]"
                      : "text-[var(--foreground)] hover:bg-[var(--accent-primary)]"
                  }
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
