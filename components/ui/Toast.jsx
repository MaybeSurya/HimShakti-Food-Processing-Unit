"use client";

import { Toaster as HotToaster } from "react-hot-toast";
import toast from "react-hot-toast";

export { default as toast } from "react-hot-toast";

/**
 * Convenience wrapper around react-hot-toast for uniform notifications.
 *
 * @param {string} message - The message to display.
 * @param {'success' | 'error' | 'info'} [type='info'] - The toast type.
 */
export function showToast(message, type = "info") {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
}

/**
 * Pre-configured Toaster wrapper for HimShakti D2C portal.
 * Place this component once in the root layout.
 *
 * @param {Object} [props] - Additional props forwarded to react-hot-toast's Toaster.
 * @returns {JSX.Element}
 */
export function Toaster(props) {
  return (
    <HotToaster
      position="top-right"
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "12px",
          padding: "14px 18px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        },
        success: {
          iconTheme: {
            primary: "#16a34a",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
      {...props}
    />
  );
}
