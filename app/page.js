"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import Hero from "@/components/Hero";
import PremiumImage from "@/components/ui/PremiumImage";

const FEATURED_PRODUCTS = [
  {
    id: "barnyard-millet",
    title: "Himalayan Barnyard Millet",
    description: "Organically grown Jhangora from high-altitude terraced farms of Uttarakhand. Rich in fibre, iron, and minerals.",
    price: "₹180",
    unit: "500g",
    badge: "Organic",
    image: "/img/barnyard_millet.png",
    icon: "eco",
  },
  {
    id: "wild-linga-pickle",
    title: "Wild Linga Pickle",
    description: "Traditional recipe using wild-gathered Fiddlehead Ferns, cold-pressed mustard oil, and hand-ground mountain spices.",
    price: "₹250",
    unit: "250g",
    badge: "Traditional",
    image: "/img/wild_linga_pickle.png",
    icon: "soup_kitchen",
  },
  {
    id: "buransh-squash",
    title: "Chilled Buransh Squash",
    description: "Brewed from hand-collected red Rhododendron flowers of spring. Floral, cooling, and rich in natural flavonoids.",
    price: "₹320",
    unit: "750ml",
    badge: "Wild Harvest",
    image: "/img/buransh_squash.png",
    icon: "local_bar",
  },
];

export default function Home() {
  const handleAddToCart = (e, productTitle) => {
    e.preventDefault();
    toast.success(`Added ${productTitle} to your basket!`);
  };

  return (
    <>
      <Hero />

      {/* Trust Factors Bento Grid */}
      <section className="py-20 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              The HimShakti Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
              Straight from the Terraces to Your Home
            </h2>
            <p className="mt-3 text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              We operate an artisan processing unit in Uttarakhand to bring raw agricultural treasures directly to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-[24px] border border-outline-variant/10 shadow-sm hover:diffuse-shadow-hover transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                agriculture
              </span>
              <h3 className="text-lg font-bold text-on-surface mb-2 font-sans">Empowering Hill Farmers</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                By purchasing from us, you ensure Uttarakhand farmers receive fair rates, bypassing urban middlemen.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[24px] border border-outline-variant/10 shadow-sm hover:diffuse-shadow-hover transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <h3 className="text-lg font-bold text-on-surface mb-2 font-sans">Pesticide Free & Organic</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our grains are rain-fed and grown with traditional organic manure, retaining complete trace minerals.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[24px] border border-outline-variant/10 shadow-sm hover:diffuse-shadow-hover transition-all duration-300">
              <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_shipping
              </span>
              <h3 className="text-lg font-bold text-on-surface mb-2 font-sans">Direct Safe Sourcing</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Packaged at source and shipped directly from our unit, ensuring complete traceability and freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
              Featured Harvests
            </h2>
            <p className="mt-3 text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Handpicked, processed at source, and delivered pure to your doorstep.
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-4 border border-outline-variant/5 shadow-sm hover:diffuse-shadow transition-shadow duration-300"
              >
                {/* Image Wrapper */}
                <Link
                  href={`/products/${product.id}`}
                  className="relative w-full aspect-square mb-6 overflow-hidden rounded-[20px] bg-white block"
                >
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

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-on-surface hover:text-primary mb-2 font-sans">
                    <Link href={`/products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-extrabold text-primary">
                      {product.price}{" "}
                      <span className="text-xs font-normal text-on-surface-variant">
                        / {product.unit}
                      </span>
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(e, product.title)}
                      className="bg-primary text-on-primary text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <button className="bg-surface text-primary border border-primary/20 rounded-[16px] px-8 py-3.5 text-sm font-semibold hover:bg-surface-container-low transition-colors cursor-pointer">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Recipe Generator Callout Section */}
      <section className="py-20 bg-secondary-container/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Interactive Kitchen
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans leading-tight">
                Not sure how to cook Himalayan grains? Let our AI Chef assist you.
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
                Just enter whatever ingredients are in your pantry, select your preferences, and our AI Recipe Generator will instantly suggest traditional mountain recipes or quick-prep snacks!
              </p>
              <div className="pt-2">
                <Link href="/recipe-generator">
                  <button className="bg-primary text-on-primary text-sm font-semibold px-8 py-4 rounded-[16px] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all cursor-pointer flex items-center gap-2">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Try AI Recipe Generator
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-white shadow-sm border border-outline-variant/10">
                <PremiumImage
                  src="/img/himalayan_pantry_goods.png"
                  alt="AI Recipe Generator Interface"
                  icon="auto_awesome"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-container rounded-full mix-blend-multiply opacity-40 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
