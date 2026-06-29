"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = () => {
    toast.success("Signed out successfully. Namaste!");
    router.push("/login");
  };

  const handleTrackOrder = (orderId) => {
    toast.success(`Tracking details for ${orderId} sent to your phone!`);
  };

  const handleReorder = (orderName) => {
    toast.success(`Added items from ${orderName} to your basket!`);
  };

  return (
    <main className="flex-grow pt-32 pb-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="md:col-span-3 space-y-4">
          <div className="bg-surface-container-lowest rounded-[24px] p-6 space-y-6 sticky top-32 border border-outline-variant/10 shadow-sm">
            {/* User Profile Snapshot */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary-container overflow-hidden">
                <PremiumImage
                  src="/img/my_account_farmers.png"
                  alt="Rahul's profile picture"
                  icon="person"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold text-on-surface">Namaste, Rahul</h2>
                <p className="text-xs text-on-surface-variant">HimShakti Member</p>
              </div>
            </div>
            {/* Navigation Links */}
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-surface-container text-primary font-bold text-sm transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span>Overview</span>
              </Link>
              <Link
                href="/dashboard/orders"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span>Order History</span>
              </Link>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast("Addresses management is under construction."); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                <span>Addresses</span>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast("Account Settings are under construction."); }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all font-semibold text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">settings</span>
                <span>Account Settings</span>
              </a>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-error hover:bg-error-container/20 transition-all font-semibold text-sm w-full mt-8 cursor-pointer text-left"
              >
                <span className="material-symbols-outlined text-[20px]">logout</span>
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <div className="md:col-span-9 space-y-8">
          
          {/* Welcome Header */}
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface font-sans">Dashboard</h1>
            <p className="text-sm text-on-surface-variant mt-2">
              Welcome back! Here&apos;s an overview of your HimShakti account.
            </p>
          </div>

          {/* Welcome & Summary Cards (Bento Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metric Card 1: Total Orders */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[24px] p-8 flex items-center justify-between hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-shadow group cursor-pointer">
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                  Total Orders
                </p>
                <h3 className="text-3xl font-extrabold text-on-surface font-sans">12</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
            </div>
            {/* Metric Card 2: Loyalty Points */}
            <div className="bg-primary rounded-[24px] p-8 flex items-center justify-between hover:shadow-[0px_10px_30px_rgba(15,23,42,0.15)] transition-shadow relative overflow-hidden text-on-primary">
              {/* Decorative background circle */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary-container rounded-full opacity-50"></div>
              <div className="relative z-10">
                <p className="text-xs font-bold text-on-primary/80 uppercase tracking-wider mb-2">
                  Loyalty Points
                </p>
                <h3 className="text-3xl font-extrabold text-on-primary flex items-end space-x-2 font-sans">
                  <span>450</span>
                  <span className="text-sm font-semibold text-on-primary/80 mb-1">pts</span>
                </h3>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center text-on-primary backdrop-blur-sm">
                <span className="material-symbols-outlined">stars</span>
              </div>
            </div>
          </div>

          {/* Recent Orders Section */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-[24px] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-on-surface font-sans">Recent Orders</h3>
              <Link href="/dashboard/orders" className="text-sm font-semibold text-primary hover:underline">
                View All
              </Link>
            </div>
            {/* Order List */}
            <div className="space-y-6">
              {/* Order Item 1 */}
              <div className="border border-outline-variant/30 rounded-[16px] p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-shadow bg-surface-bright">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-low overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/himalayan_pantry_goods.png"
                      alt="Order package"
                      icon="inventory"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Order #HS-8472</p>
                    <p className="text-sm text-on-surface-variant">Barnyard Millet, Red Rice + 1 more</p>
                    <p className="text-xs text-outline mt-2 font-semibold">Placed on Oct 24, 2023</p>
                  </div>
                </div>
                <div className="flex flex-col items-end w-full md:w-auto">
                  <span className="px-3 py-1 bg-surface-container-highest text-primary text-xs font-bold rounded-full mb-3 inline-block uppercase">
                    Processing
                  </span>
                  <button
                    onClick={() => handleTrackOrder("HS-8472")}
                    className="px-4 py-2 border border-outline-variant/50 rounded-[16px] text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors w-full md:w-auto text-center cursor-pointer"
                  >
                    Track Order
                  </button>
                </div>
              </div>
              {/* Order Item 2 */}
              <div className="border border-outline-variant/30 rounded-[16px] p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-shadow bg-surface-bright">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-lg bg-surface-container-low overflow-hidden flex-shrink-0">
                    <PremiumImage
                      src="/img/barnyard_millet.png"
                      alt="Artisan pickle jar"
                      icon="soup_kitchen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Order #HS-8105</p>
                    <p className="text-sm text-on-surface-variant">Traditional Mixed Pickle</p>
                    <p className="text-xs text-outline mt-2 font-semibold">Placed on Sep 12, 2023</p>
                  </div>
                </div>
                <div className="flex flex-col items-end w-full md:w-auto">
                  <span className="px-3 py-1 bg-[#E2E8F0] text-on-surface-variant text-xs font-bold rounded-full mb-3 inline-block uppercase">
                    Delivered
                  </span>
                  <button
                    onClick={() => handleReorder("Order #HS-8105")}
                    className="px-4 py-2 border border-outline-variant/50 rounded-[16px] text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors w-full md:w-auto text-center cursor-pointer"
                  >
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
