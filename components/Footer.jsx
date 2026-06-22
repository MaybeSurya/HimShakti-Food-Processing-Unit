"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Site footer for HimShakti D2C portal.
 * Matches Stitch style and conditionally hides itself on transactional routes.
 */
export default function Footer() {
  const pathname = usePathname();

  // Suppress footer on transactional/checkout pages as per Stitch guidelines
  if (pathname === "/checkout" || pathname === "/login") {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20">
      {/* Infinite Announcement Marquee */}
      <div className="w-full overflow-hidden bg-primary text-on-primary py-4 select-none border-y border-outline-variant/10 shadow-inner">
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          <div className="flex shrink-0 justify-around min-w-full gap-16 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span>🏔️ Pure Himalayan Sourcing</span>
            <span>🌾 10% Off first harvest box: <span className="underline decoration-2">HIMSHAKTI10</span></span>
            <span>🚚 Free PAN India shipping above ₹500</span>
            <span>🍃 Pesticide-Free & Organic Manure manure</span>
            <span>👩‍🌾 Empowering women farmer collectives</span>
          </div>
          <div className="flex shrink-0 justify-around min-w-full gap-16 text-xs sm:text-sm font-bold uppercase tracking-wider" aria-hidden="true">
            <span>🏔️ Pure Himalayan Sourcing</span>
            <span>🌾 10% Off first harvest box: <span className="underline decoration-2">HIMSHAKTI10</span></span>
            <span>🚚 Free PAN India shipping above ₹500</span>
            <span>🍃 Pesticide-Free & Organic Manure manure</span>
            <span>👩‍🌾 Empowering women farmer collectives</span>
          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="w-full pt-16 pb-8 bg-secondary-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-xl font-extrabold text-primary">HimShakti</span>
          <p className="text-sm text-on-surface-variant max-w-xs">
            Bringing the pure essence of the Himalayas to your table.
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-sm font-bold text-primary mb-2">Explore</h4>
          <Link href="/about" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            Our Story
          </Link>
          <Link href="/shop" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            Shop All
          </Link>
          <Link href="/recipe-generator" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            AI Recipe Generator
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-sm font-bold text-primary mb-2">Legal</h4>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary hover:underline transition-all">
            Shipping Policy
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-sm font-bold text-primary">Stay Connected</h4>
          <div className="w-full relative max-w-xs" suppressHydrationWarning={true}>
            <input
              type="email"
              suppressHydrationWarning={true}
              className="w-full bg-surface text-on-surface text-xs border border-outline-variant rounded-full px-4 py-2 pr-12 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Email address"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant">
        <p>&copy; {currentYear} HimShakti Himalayan Foods. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}

