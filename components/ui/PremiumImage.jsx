"use client";

import { useState } from "react";

/**
 * A premium image component that falls back to a beautiful CSS gradient placeholder
 * with an icon if the image file fails to load.
 *
 * @param {string} src - Image source URL.
 * @param {string} alt - Image descriptive alt text.
 * @param {string} className - Styling classes.
 * @param {string} icon - Material Symbols icon name for the fallback state.
 */
export default function PremiumImage({ src, alt, className = "", icon = "eco" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full min-h-[150px] bg-gradient-to-br from-green-800 to-emerald-950 text-white flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <span className="material-symbols-outlined text-4xl text-primary-fixed mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
        <span className="text-xs font-semibold text-on-primary-container px-2.5 py-1 bg-white/10 rounded-full max-w-[90%] truncate">
          {alt || "HimShakti Product"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
