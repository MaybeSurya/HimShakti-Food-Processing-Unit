"use client";

/**
 * @typedef {'primary' | 'secondary' | 'outline'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 */

/**
 * Reusable Button component for HimShakti D2C portal.
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - Visual style variant.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {() => void} [props.onClick] - Click handler.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - HTML button type.
 * @param {React.ReactNode} props.children - Button content.
 * @returns {JSX.Element}
 */
export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  children,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-primary text-on-primary hover:opacity-90 focus:ring-primary shadow-lg shadow-primary/10",
    secondary:
      "bg-secondary text-on-secondary hover:opacity-90 focus:ring-secondary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary focus:ring-primary",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-7 py-3.5 text-lg gap-2.5",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
