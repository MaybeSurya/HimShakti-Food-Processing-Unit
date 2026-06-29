"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";

export default function OrderHistoryPage() {
  const router = useRouter();

  const handleSignOut = () => {
    toast.success("Signed out successfully. Namaste!");
    router.push("/login");
  };

  const handleTrackOrder = (orderId) => {
    toast.success(`Tracking details for order ${orderId} sent to your email.`);
  };

  const handleBuyAgain = (orderId) => {
    toast.success(`Re-added items from order ${orderId} to your cart.`);
  };

  const handleViewDetails = (orderId) => {
    toast.success(`Showing details for order ${orderId} (mock).`);
  };

  return (
    <main className="flex-grow pt-32 pb-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar (Dashboard Navigation) */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-6 space-y-2 sticky top-32 border border-outline-variant/10 shadow-sm">
            <h2 className="text-lg font-bold text-on-surface mb-6 font-sans">My Account</h2>
            <nav className="flex flex-col space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-semibold text-sm"
              >
                <span className="material-symbols-outlined mr-3 text-[20px]">person</span>
                <span>Profile Details</span>
              </Link>
              {/* Active State for Order History */}
              <Link
                href="/dashboard/orders"
                className="flex items-center px-4 py-3 rounded-xl bg-primary text-on-primary transition-colors shadow-sm font-bold text-sm"
              >
                <span className="material-symbols-outlined mr-3 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  receipt_long
                </span>
                <span>Order History</span>
              </Link>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast("Wishlist is under construction."); }}
                className="flex items-center px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-semibold text-sm"
              >
                <span className="material-symbols-outlined mr-3 text-[20px]">favorite</span>
                <span>Wishlist</span>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast("Addresses management is under construction."); }}
                className="flex items-center px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors font-semibold text-sm"
              >
                <span className="material-symbols-outlined mr-3 text-[20px]">location_on</span>
                <span>Addresses</span>
              </a>
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-3 rounded-xl text-error hover:bg-error-container/20 hover:text-error transition-colors mt-8 font-semibold text-sm w-full cursor-pointer text-left"
              >
                <span className="material-symbols-outlined mr-3 text-[20px]">logout</span>
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Order History Content */}
        <div className="flex-grow space-y-8">
          <header>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface mb-2 font-sans tracking-tight">
              Order History
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Review your past Himalayan harvests and their journey to you.
            </p>
          </header>

          {/* Order Cards Container */}
          <div className="space-y-6">
            
            {/* Order Item 1 */}
            <article className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-6 md:p-8 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 border border-outline-variant/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-6 mb-6">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Order #HS-84920
                  </p>
                  <p className="text-sm text-on-surface leading-normal">
                    Placed on <span className="font-semibold">October 12, 2024</span>
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                  <div className="text-left md:text-right">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Total
                    </p>
                    <p className="text-lg font-bold text-primary">₹1,240</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F4EA] dark:bg-green-950/40 text-green-800 dark:text-green-200 text-xs font-bold uppercase">
                    Delivered
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex -space-x-4 overflow-hidden">
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-white overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/buransh_squash.png"
                      alt="Organic Himalayan Pink Salt"
                      icon="eco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-white overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/himalayan_pantry_goods.png"
                      alt="Organic Himalayan Honey"
                      icon="eco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-surface-container-low flex items-center justify-center flex-shrink-0 text-on-surface-variant text-xs font-bold">
                    +1
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleTrackOrder("HS-84920")}
                    className="px-6 py-2.5 rounded-[16px] bg-[#FAF7F2] dark:bg-surface-container-low border border-[#E2E8F0] dark:border-outline-variant/30 text-primary text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    Track Order
                  </button>
                  <button
                    onClick={() => handleViewDetails("HS-84920")}
                    className="px-6 py-2.5 rounded-[16px] bg-[#FAF7F2] dark:bg-surface-container-low border border-[#E2E8F0] dark:border-outline-variant/30 text-primary text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>

            {/* Order Item 2 */}
            <article className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-6 md:p-8 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 border border-outline-variant/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-6 mb-6">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Order #HS-83105
                  </p>
                  <p className="text-sm text-on-surface leading-normal">
                    Placed on <span className="font-semibold">September 28, 2024</span>
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                  <div className="text-left md:text-right">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Total
                    </p>
                    <p className="text-lg font-bold text-primary">₹850</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F4EA] dark:bg-green-950/40 text-green-800 dark:text-green-200 text-xs font-bold uppercase">
                    Delivered
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex -space-x-4 overflow-hidden">
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-white overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/himalayan_dawn.png"
                      alt="Artisan vegetable pickle"
                      icon="soup_kitchen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleBuyAgain("HS-83105")}
                    className="px-6 py-2.5 rounded-[16px] bg-primary text-on-primary text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Buy Again
                  </button>
                  <button
                    onClick={() => handleViewDetails("HS-83105")}
                    className="px-6 py-2.5 rounded-[16px] bg-[#FAF7F2] dark:bg-surface-container-low border border-[#E2E8F0] dark:border-outline-variant/30 text-primary text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>

            {/* Order Item 3 */}
            <article className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-6 md:p-8 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 opacity-75 border border-outline-variant/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant/30 pb-6 mb-6">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Order #HS-79022
                  </p>
                  <p className="text-sm text-on-surface leading-normal">
                    Placed on <span className="font-semibold">August 05, 2024</span>
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                  <div className="text-left md:text-right">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                      Total
                    </p>
                    <p className="text-lg font-bold text-primary">₹2,100</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase">
                    Cancelled
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex -space-x-4 overflow-hidden">
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-white overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/wild_linga_pickle.png"
                      alt="Organic Himalayan Grains bag"
                      icon="grain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 rounded-lg border-2 border-surface bg-white overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/finger_millet_grains.png"
                      alt="Chilled juice bottle"
                      icon="local_bar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleViewDetails("HS-79022")}
                    className="px-6 py-2.5 rounded-[16px] bg-[#FAF7F2] dark:bg-surface-container-low border border-[#E2E8F0] dark:border-outline-variant/30 text-primary text-xs font-bold hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>

          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 pt-8">
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary text-xs font-bold">
              1
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] text-on-surface-variant hover:bg-surface-container-low transition-colors text-xs font-bold cursor-pointer">
              2
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] text-on-surface-variant hover:bg-surface-container-low transition-colors text-xs font-bold cursor-pointer">
              3
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E2E8F0] text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}
