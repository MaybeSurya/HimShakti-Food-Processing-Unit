import Button from "./ui/Button";

/**
 * Reusable product card component for HimShakti D2C portal.
 *
 * @param {Object} props
 * @param {string} props.title - Product name.
 * @param {string} props.description - Short product description.
 * @param {string} [props.image] - Image URL (renders a colored placeholder if omitted).
 * @param {string} [props.price] - Product price display string.
 * @param {string} [props.badge] - Optional badge label (e.g., "New", "Best Seller").
 * @param {string} [props.actionText='Add to Cart'] - CTA button text.
 * @param {() => void} [props.onAction] - CTA button handler.
 * @returns {JSX.Element}
 */
export default function Card({
  title,
  description,
  image,
  price,
  badge,
  actionText = "Add to Cart",
  onAction,
}) {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-green-600/5 transition-all duration-300 overflow-hidden">
      {/* Image / Placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-gray-900">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <svg
              className="w-16 h-16 text-green-300 dark:text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-500 text-white text-xs font-bold shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-1">
          {price && (
            <span className="text-lg font-bold text-green-600 dark:text-green-400">
              {price}
            </span>
          )}
          <Button
            variant="primary"
            size="sm"
            onClick={onAction}
            className={price ? "" : "w-full"}
          >
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
}
