"use client";

import { useState, use, useMemo } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";

// Product catalog database
const PRODUCT_DATA = {
  "barnyard-millet": {
    title: "Barnyard Millet",
    fullName: "Himalayan Barnyard Millet (Jhangora)",
    description: "Sourced directly from the high-altitude clusters of Uttarakhand, our Barnyard Millet (Jhangora) is a nutrient-dense, gluten-free ancient grain. Cultivated using traditional, pesticide-free methods to preserve its purity and natural goodness.",
    price: 180,
    originalPrice: 220,
    unit: "500g",
    badges: ["Uttarakhand", "Organic"],
    features: [
      { title: "Pesticide Free", desc: "Naturally grown without chemicals.", icon: "eco" },
      { title: "Gluten Free", desc: "Safe for celiac diets.", icon: "favorite" }
    ],
    sourcingTitle: "Traditional Sourcing",
    sourcingDesc: "Our Barnyard Millet is nurtured by the women farmers of Himalayan villages. They employ generations-old techniques, relying on rain-fed agriculture and natural composting. This not only ensures a superior, pure grain but also empowers local communities and sustains the fragile mountain ecosystem.",
    sourcingPoints: [
      "Empowering women farmer collectives.",
      "Sustainable, rain-fed agricultural practices.",
      "Preserving traditional Himalayan seed varieties."
    ],
    mainImage: "/screenshots/07-product-details.png",
    thumbnails: [
      { src: "/screenshots/01-ai-recipe-generator.png", alt: "Millet in hands", isVideo: false },
      { src: "/screenshots/03-checkout.png", alt: "Cooked millet", isVideo: false },
      { src: "/screenshots/04-our-story.png", alt: "Harvesting millet video", isVideo: true }
    ],
    icon: "eco",
    sourcingImage: "/screenshots/02-my-account.png",
  },
  "wild-linga-pickle": {
    title: "Wild Linga Pickle",
    fullName: "Wild Linga (Fiddlehead Fern) Pickle",
    description: "Handpicked wild fiddlehead ferns (Linga) pickled using cold-pressed mustard oil and hand-ground Himalayan spices. A traditional, tangy mountain delicacy rich in iron and antioxidants.",
    price: 250,
    originalPrice: 290,
    unit: "250g",
    badges: ["Uttarakhand", "Traditional"],
    features: [
      { title: "Artisan Recipe", desc: "Crafted in small farm batches.", icon: "soup_kitchen" },
      { title: "Rich Iron", desc: "High nutritional value fern.", icon: "health_and_safety" }
    ],
    sourcingTitle: "Wild Forest Harvest",
    sourcingDesc: "The Linga ferns are hand-gathered from wild streams and deep forests by local self-help groups. They are washed, solar-dried, and seasoned using raw spice blends and local wood-pressed oils. Every jar supports mountain forest conservation and forest-dwellers.",
    sourcingPoints: [
      "Gathered ethically from wild Himalayan streams.",
      "Traditional fermentation and oil preservation.",
      "100% natural, preservative-free recipe."
    ],
    mainImage: "/screenshots/01-ai-recipe-generator.png",
    thumbnails: [
      { src: "/screenshots/05-login-signup.png", alt: "Spices mix", isVideo: false },
      { src: "/screenshots/07-product-details.png", alt: "Jar details", isVideo: false },
      { src: "/screenshots/08-shop-all-products.png", alt: "Preparing pickle video", isVideo: true }
    ],
    icon: "soup_kitchen",
    sourcingImage: "/screenshots/07-product-details.png",
  },
  "buransh-squash": {
    title: "Buransh Squash",
    fullName: "Buransh (Rhododendron) Wild Squash",
    description: "Brewed from hand-collected red Rhododendron flowers of the Himalayan heights. A vibrant, floral squash loaded with antioxidants, excellent for heart health and cooling down.",
    price: 320,
    originalPrice: 380,
    unit: "750ml",
    badges: ["Uttarakhand", "Wild Harvest"],
    features: [
      { title: "Heart Health", desc: "Naturally rich in flavonoids.", icon: "favorite" },
      { title: "Pure Flower juice", desc: "No artificial dyes or chemical syrups.", icon: "local_bar" }
    ],
    sourcingTitle: "High-Altitude Blooms",
    sourcingDesc: "Rhododendron flowers bloom in early spring at altitudes above 6,000 feet. Local villagers harvest the fresh petals at dawn. The petals are processed inside our community processing unit to extract the premium juice without destroying active enzymes.",
    sourcingPoints: [
      "Spring-harvested red Rhododendron petals.",
      "Chilled extraction keeps enzymes active.",
      "Bypasses distributors to reward petal-gatherers directly."
    ],
    mainImage: "/screenshots/03-checkout.png",
    thumbnails: [
      { src: "/screenshots/08-shop-all-products.png", alt: "Red flowers", isVideo: false },
      { src: "/screenshots/01-ai-recipe-generator.png", alt: "Bottle macro", isVideo: false },
      { src: "/screenshots/04-our-story.png", alt: "Flowering valley video", isVideo: true }
    ],
    icon: "local_bar",
    sourcingImage: "/screenshots/02-my-account.png",
  },
  "finger-millet": {
    title: "Finger Millet",
    fullName: "Himalayan Finger Millet (Ragi / Mandua)",
    description: "Traditionally grown stone-ground Finger Millet flour (Mandua). Extremely rich in calcium, dietary fibers, and amino acids, perfect for making rotis, porridge, and healthy pancakes.",
    price: 160,
    originalPrice: 190,
    unit: "500g",
    badges: ["Uttarakhand", "Stone Ground"],
    features: [
      { title: "Stone Ground", desc: "Milled slowly to preserve nutrients.", icon: "grain" },
      { title: "Calcium Rich", desc: "10x more calcium than wheat or rice.", icon: "fitness_center" }
    ],
    sourcingTitle: "Terraced Hill Farms",
    sourcingDesc: "Cultivated on narrow terraced farms using snow-melt water and organic composting. Milled using traditional watermills (Gharats) that run at cold temperatures, preserving the grain's starch structure and aroma.",
    sourcingPoints: [
      "Rain-fed terrace farming methods.",
      "Stone ground at local watermills (Gharats).",
      "Fair-price direct contract with village farmers."
    ],
    mainImage: "/screenshots/04-our-story.png",
    thumbnails: [
      { src: "/screenshots/07-product-details.png", alt: "Ragi grain", isVideo: false },
      { src: "/screenshots/03-checkout.png", alt: "Flour package", isVideo: false },
      { src: "/screenshots/01-ai-recipe-generator.png", alt: "Milling process video", isVideo: true }
    ],
    icon: "grain",
    sourcingImage: "/screenshots/02-my-account.png",
  }
};

export default function ProductDetailPage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  // Retrieve product data or fallback to barnyard-millet
  const product = useMemo(() => {
    return PRODUCT_DATA[id] || PRODUCT_DATA["barnyard-millet"];
  }, [id]);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.mainImage);

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} x ${product.title} to your cart!`);
  };

  return (
    <main className="flex-grow pb-24 pt-32">
      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Image Gallery */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="w-full h-[500px] rounded-[24px] overflow-hidden bg-secondary-container">
            <PremiumImage
              src={activeImage}
              alt={product.title}
              icon={product.icon}
              className="w-full h-full object-cover transition-all"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Primary/Main Thumbnail */}
            <div
              onClick={() => setActiveImage(product.mainImage)}
              className={`h-24 sm:h-28 rounded-[24px] overflow-hidden bg-surface-container cursor-pointer transition-opacity border-2 ${
                activeImage === product.mainImage ? "border-primary opacity-100" : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <PremiumImage
                src={product.mainImage}
                alt="Main product view"
                icon={product.icon}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gallery Thumbnails */}
            {product.thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => {
                  if (thumb.isVideo) {
                    toast("Playing preview video... (mock)");
                  } else {
                    setActiveImage(thumb.src);
                  }
                }}
                className={`h-24 sm:h-28 rounded-[24px] overflow-hidden bg-surface-container cursor-pointer transition-opacity border-2 relative ${
                  activeImage === thumb.src ? "border-primary opacity-100" : "border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                <PremiumImage
                  src={thumb.src}
                  alt={thumb.alt}
                  icon={product.icon}
                  className="w-full h-full object-cover"
                />
                {thumb.isVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <div className="flex gap-2 mb-4">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface mb-4 font-sans tracking-tight leading-tight">
            {product.title}
          </h1>
          <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-end gap-4 mb-8">
            <span className="text-3xl font-extrabold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-outline line-through mb-1">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-sm text-on-surface-variant font-semibold mb-1">/ {product.unit}</span>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-outline-variant rounded-[16px] bg-surface-container-lowest h-12 w-32">
              <button
                onClick={decrementQty}
                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="w-12 text-center text-sm font-bold text-on-surface select-none">
                {quantity}
              </span>
              <button
                onClick={incrementQty}
                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex-grow bg-primary text-on-primary h-12 rounded-[16px] text-sm font-semibold hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              Add to Cart
            </button>
          </div>

          {/* Bento Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            {product.features.map((f, i) => (
              <div key={i} className="bg-secondary-container rounded-[24px] p-6 flex flex-col justify-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                  {f.icon}
                </span>
                <h3 className="text-sm font-bold text-on-surface mb-1 font-sans">
                  {f.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface mb-6 font-sans">
              {product.sourcingTitle}
            </h2>
            <p className="text-base text-on-surface-variant mb-6 leading-relaxed">
              {product.sourcingDesc}
            </p>
            <ul className="space-y-4">
              {product.sourcingPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm text-on-surface-variant">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 h-[500px] organic-mask bg-surface-container overflow-hidden">
            <PremiumImage
              src={product.sourcingImage}
              alt="Himalayan farm origins"
              icon="agriculture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
