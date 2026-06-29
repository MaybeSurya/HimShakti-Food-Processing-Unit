"use client";

import { useState, use, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";
import Loader from "@/components/ui/Loader";
import { showToast } from "@/components/ui/Toast";

const API_URL = "http://localhost:5000/api/products";

export default function ProductDetailPage({ params }) {
  const { id } = use(params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(null);

  // ── Fetch product from Express backend ──────────────
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }
        const json = await res.json();
        const data = json.data;
        setProduct(data);
        setActiveImage(data.mainImage || data.image);
      } catch (err) {
        console.error("[ProductDetailPage] Failed to fetch product:", err);
        showToast(
          "Could not load product. Please ensure the backend server is running on port 5000.",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const incrementQty = () => setQuantity((q) => q + 1);
  const decrementQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;
    toast.success(`Added ${quantity} x ${product.name || product.title} to your cart!`);
  };

  // ── Loading state ────────────────────────────────────
  if (loading) {
    return (
      <main className="flex-grow pb-24 pt-32 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-6">
          <Loader size="lg" />
          <p className="text-on-surface-variant font-semibold text-sm animate-pulse">
            Loading product details…
          </p>
        </div>
      </main>
    );
  }

  // ── Not found state ──────────────────────────────────
  if (!product) {
    return (
      <main className="flex-grow pb-24 pt-32 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">
            search_off
          </span>
          <h1 className="text-2xl font-bold text-on-surface mb-2">Product Not Found</h1>
          <p className="text-on-surface-variant mb-6">
            This product doesn't exist or could not be loaded.
          </p>
          <Link
            href="/shop"
            className="bg-primary text-on-primary px-6 py-3 rounded-xl text-sm font-semibold"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const displayImage = activeImage || product.mainImage || product.image;
  const badges = product.badges || (product.badge ? [product.badge] : []);
  const thumbnails = product.thumbnails || [];
  const features = product.features || [];
  const sourcingPoints = product.sourcingPoints || [];

  return (
    <main className="flex-grow pb-24 pt-32">
      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Image Gallery */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="w-full h-[500px] rounded-[24px] overflow-hidden bg-secondary-container">
            <PremiumImage
              src={displayImage}
              alt={product.name || product.title}
              icon={product.icon}
              className="w-full h-full object-cover transition-all"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Primary/Main Thumbnail */}
            <div
              onClick={() => setActiveImage(product.mainImage || product.image)}
              className={`h-24 sm:h-28 rounded-[24px] overflow-hidden bg-surface-container cursor-pointer transition-opacity border-2 ${
                displayImage === (product.mainImage || product.image)
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-75 hover:opacity-100"
              }`}
            >
              <PremiumImage
                src={product.mainImage || product.image}
                alt="Main product view"
                icon={product.icon}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gallery Thumbnails */}
            {thumbnails.map((thumb, index) => (
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
                  displayImage === thumb.src
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-75 hover:opacity-100"
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
          <div className="flex gap-2 mb-4 flex-wrap">
            {badges.map((b) => (
              <span
                key={b}
                className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface mb-4 font-sans tracking-tight leading-tight">
            {product.name || product.title}
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

          {/* Out of Stock Banner */}
          {!product.inStock && (
            <div className="mb-6 bg-error/10 text-error border border-error/20 rounded-[16px] px-5 py-3 text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-base">inventory_2</span>
              Currently Out of Stock
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-outline-variant rounded-[16px] bg-surface-container-lowest h-12 w-32">
              <button
                onClick={decrementQty}
                disabled={!product.inStock}
                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer disabled:opacity-40"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="w-12 text-center text-sm font-bold text-on-surface select-none">
                {quantity}
              </span>
              <button
                onClick={incrementQty}
                disabled={!product.inStock}
                className="w-10 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer disabled:opacity-40"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-grow bg-primary text-on-primary h-12 rounded-[16px] text-sm font-semibold hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {product.inStock ? "Add to Cart" : "Unavailable"}
            </button>
          </div>

          {/* Bento Info Grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
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
          )}
        </div>
      </section>

      {/* Sourcing Story Section */}
      {product.sourcingTitle && (
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
                {sourcingPoints.map((pt, i) => (
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
      )}
    </main>
  );
}
