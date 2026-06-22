"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";

// Product catalog
const INITIAL_PRODUCTS = [
  {
    id: "barnyard-millet",
    title: "Himalayan Barnyard Millet",
    category: "millets",
    categoryLabel: "Millets & Grains",
    price: 180,
    unit: "500g",
    badge: "Organic",
    location: "Uttarakhand",
    image: "/screenshots/07-product-details.png",
    icon: "eco",
    organic: true,
    pesticideFree: true,
  },
  {
    id: "wild-linga-pickle",
    title: "Wild Linga Pickle",
    category: "pickles",
    categoryLabel: "Traditional Pickles",
    price: 250,
    unit: "250g",
    badge: "Traditional",
    location: "Uttarakhand",
    image: "/screenshots/01-ai-recipe-generator.png",
    icon: "soup_kitchen",
    organic: false,
    pesticideFree: true,
  },
  {
    id: "buransh-squash",
    title: "Buransh Squash",
    category: "juices",
    categoryLabel: "Organic Juices",
    price: 320,
    unit: "750ml",
    badge: "Wild Harvest",
    location: "Uttarakhand",
    image: "/screenshots/03-checkout.png",
    icon: "local_bar",
    organic: true,
    pesticideFree: true,
  },
  {
    id: "finger-millet",
    title: "Himalayan Finger Millet",
    category: "millets",
    categoryLabel: "Millets & Grains",
    price: 160,
    unit: "500g",
    badge: "Organic",
    location: "Uttarakhand",
    image: "/screenshots/04-our-story.png",
    icon: "grain",
    organic: true,
    pesticideFree: true,
  },
];

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState({
    all: true,
    millets: false,
    pickles: false,
    juices: false,
  });

  const [priceRange, setPriceRange] = useState(1000);
  const [certifications, setCertifications] = useState({
    organic: false,
    pesticideFree: false,
  });
  const [sortBy, setSortBy] = useState("Recommended");

  const handleCategoryChange = (key) => {
    if (key === "all") {
      setSelectedCategories({
        all: true,
        millets: false,
        pickles: false,
        juices: false,
      });
    } else {
      setSelectedCategories((prev) => {
        const next = { ...prev, all: false, [key]: !prev[key] };
        // If all sub-categories are false, reset to "all"
        const anySelected = next.millets || next.pickles || next.juices;
        if (!anySelected) {
          return { all: true, millets: false, pickles: false, juices: false };
        }
        return next;
      });
    }
  };

  const handleCertChange = (key) => {
    setCertifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAddToCart = (product) => {
    toast.success(`Added ${product.title} to your basket!`);
  };

  // Filtered and sorted products
  const processedProducts = useMemo(() => {
    let result = [...INITIAL_PRODUCTS];

    // Category Filter
    if (!selectedCategories.all) {
      result = result.filter((p) => selectedCategories[p.category]);
    }

    // Price Filter
    result = result.filter((p) => p.price <= priceRange);

    // Certifications Filter
    if (certifications.organic) {
      result = result.filter((p) => p.organic);
    }
    if (certifications.pesticideFree) {
      result = result.filter((p) => p.pesticideFree);
    }

    // Sorting
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Newest Arrivals") {
      // Mock newest by alphabetical
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategories, priceRange, certifications, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Header Section */}
      <header className="md:col-span-12 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary mb-4 font-sans tracking-tight">
            Pure Himalayan Harvest
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Discover our curated selection of organic millets, traditional pickles, and revitalizing juices, all sourced directly from the high-altitude farms of Uttarakhand.
          </p>
        </div>
        {/* Sorting */}
        <div className="w-full md:w-auto relative">
          <label className="sr-only" htmlFor="sort">
            Sort By
          </label>
          <select
            className="appearance-none w-full md:w-64 bg-surface text-on-surface text-sm font-semibold border border-outline-variant rounded-full px-6 py-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer hover:bg-surface-container-low transition-colors"
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
            expand_more
          </span>
        </div>
      </header>

      {/* Sidebar Filters */}
      <aside className="md:col-span-3 space-y-10 hidden md:block">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 font-sans">
            Categories
          </h3>
          <ul className="space-y-4">
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={selectedCategories.all}
                  onChange={() => handleCategoryChange("all")}
                />
                <span className={`text-sm ${selectedCategories.all ? "text-primary font-semibold" : "text-on-surface"} group-hover:text-primary transition-colors`}>
                  All Products
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={selectedCategories.millets}
                  onChange={() => handleCategoryChange("millets")}
                />
                <span className={`text-sm ${selectedCategories.millets ? "text-primary font-semibold" : "text-on-surface-variant"} group-hover:text-primary transition-colors`}>
                  Millets &amp; Grains
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={selectedCategories.pickles}
                  onChange={() => handleCategoryChange("pickles")}
                />
                <span className={`text-sm ${selectedCategories.pickles ? "text-primary font-semibold" : "text-on-surface-variant"} group-hover:text-primary transition-colors`}>
                  Traditional Pickles
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={selectedCategories.juices}
                  onChange={() => handleCategoryChange("juices")}
                />
                <span className={`text-sm ${selectedCategories.juices ? "text-primary font-semibold" : "text-on-surface-variant"} group-hover:text-primary transition-colors`}>
                  Organic Juices
                </span>
              </label>
            </li>
          </ul>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 font-sans">
            Price Range
          </h3>
          <input
            type="range"
            className="w-full accent-primary cursor-pointer"
            max="1000"
            min="100"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="flex justify-between mt-2 text-xs text-on-surface-variant font-semibold">
            <span>₹100</span>
            <span className="text-primary bg-primary-fixed/30 px-2 py-0.5 rounded">Max: ₹{priceRange}</span>
            <span>₹1000+</span>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 font-sans">
            Certifications
          </h3>
          <ul className="space-y-4">
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={certifications.organic}
                  onChange={() => handleCertChange("organic")}
                />
                <span className={`text-sm ${certifications.organic ? "text-primary font-semibold" : "text-on-surface-variant"} group-hover:text-primary transition-colors`}>
                  Certified Organic
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary cursor-pointer"
                  checked={certifications.pesticideFree}
                  onChange={() => handleCertChange("pesticideFree")}
                />
                <span className={`text-sm ${certifications.pesticideFree ? "text-primary font-semibold" : "text-on-surface-variant"} group-hover:text-primary transition-colors`}>
                  Pesticide Free
                </span>
              </label>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="md:col-span-9">
        {processedProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">
              search_off
            </span>
            <p className="text-lg font-semibold text-primary">No products found matching filters</p>
            <button
              onClick={() => {
                setSelectedCategories({ all: true, millets: false, pickles: false, juices: false });
                setPriceRange(1000);
                setCertifications({ organic: false, pesticideFree: false });
              }}
              className="mt-4 bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedProducts.map((product, idx) => (
              <article
                key={product.id}
                className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-4 flex flex-col group hover:diffuse-shadow transition-shadow duration-300 border border-outline-variant/5"
              >
                <Link href={`/products/${product.id}`} className="relative w-full aspect-square mb-6 overflow-hidden rounded-[20px] bg-white block">
                  <PremiumImage
                    src={product.image}
                    alt={product.title}
                    icon={product.icon}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-[20px]"
                  />
                  <span className="absolute top-4 left-4 bg-surface text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </Link>
                <div className="flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-on-surface-variant mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>{" "}
                    {product.location}
                  </span>
                  <Link href={`/products/${product.id}`}>
                    <h2 className="text-lg font-bold text-on-surface hover:text-primary mb-2 font-sans line-clamp-1">
                      {product.title}
                    </h2>
                  </Link>
                  <p className="text-primary font-extrabold text-lg mb-6 mt-auto">
                    ₹{product.price}{" "}
                    <span className="text-xs font-normal text-on-surface-variant">
                      / {product.unit}
                    </span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-surface text-primary border border-primary/20 rounded-xl py-3 text-sm font-semibold hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
