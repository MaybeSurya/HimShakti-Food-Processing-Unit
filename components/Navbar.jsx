"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";

/**
 * Responsive navigation bar for HimShakti D2C portal.
 * Matches Stitch style and conditionally hides itself on transactional routes.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Suppress top nav bar on transactional/checkout pages as per Stitch guidelines
  if (pathname === "/checkout" || pathname === "/login") {
    return null;
  }

  const navLinks = [
    { href: "/about", label: "Our Story" },
    { href: "/shop", label: "Shop" },
    { href: "/recipe-generator", label: "AI Recipe" },
    { href: "/dashboard", label: "My Account" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/10 shadow-sm transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-primary tracking-tight">
            HimShakti
          </span>
          <span className="hidden sm:inline text-xs font-medium text-on-surface-variant mt-1">
            Food Processing
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary border-b-2 border-primary rounded-none pb-1"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Link href="/checkout">
              <button aria-label="Shopping Cart" className="p-2 hover:bg-surface-container-low rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined">shopping_basket</span>
              </button>
            </Link>
            <Link href="/dashboard">
              <button aria-label="Account" className="p-2 hover:bg-surface-container-low rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
          <Link href="/shop" className="hidden md:inline-block">
            <button className="bg-primary text-on-primary text-sm font-semibold px-6 py-2.5 rounded-[16px] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all">
              Shop Now
            </button>
          </Link>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant/10 bg-surface animate-[slideDown_200ms_ease-out]">
          <div className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-outline-variant/10">
              <Link href="/shop" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-primary text-on-primary text-sm font-semibold py-2.5 rounded-[16px]">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

