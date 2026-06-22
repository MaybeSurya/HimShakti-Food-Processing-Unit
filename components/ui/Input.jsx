"use client";

import { useId } from "react";

/**
 * Reusable Input component for HimShakti D2C portal.
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text displayed above the input.
 * @param {string} [props.placeholder] - Placeholder text for the input.
 * @param {string} [props.type='text'] - HTML input type (text, email, password, etc.).
 * @param {string} [props.value] - Controlled input value.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler.
 * @param {string} [props.error] - Error message to display below the input.
 * @param {string} [props.name] - Input name attribute.
 * @param {boolean} [props.required=false] - Whether the input is required.
 * @param {string} [props.className] - Additional CSS classes for the wrapper.
 * @returns {JSX.Element}
 */
export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  name,
  required = false,
  className = "",
  ...rest
}) {
  const generatedId = useId();
  const inputId = name || generatedId;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full rounded-xl border px-4 py-2.5 text-base
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-gray-100
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-1
          ${
            error
              ? "border-red-400 focus:ring-red-400 dark:border-red-500"
              : "border-gray-300 dark:border-gray-700 focus:ring-green-500 focus:border-green-500"
          }
        `}
        {...rest}
      />
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
