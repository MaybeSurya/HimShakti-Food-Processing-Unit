/**
 * Spinning loader component for HimShakti D2C portal.
 *
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Loader size.
 * @param {string} [props.className] - Additional CSS classes.
 * @returns {JSX.Element}
 */
export default function Loader({ size = "md", className = "" }) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div
        className={`${sizes[size]} rounded-full border-green-600 border-t-transparent animate-spin`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
