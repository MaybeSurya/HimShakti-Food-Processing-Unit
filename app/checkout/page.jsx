"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import PremiumImage from "@/components/ui/PremiumImage";

// Initial checkout cart list
const INITIAL_CART = [
  {
    id: "honey",
    title: "Organic Himalayan Honey",
    price: 450,
    qty: 1,
    unit: "500g",
    image: "/screenshots/03-checkout.png",
    icon: "eco",
  },
  {
    id: "barnyard-millet",
    title: "Barnyard Millet",
    price: 150, // ₹150 x 2 = ₹300 total
    qty: 2,
    unit: "1kg",
    image: "/screenshots/08-shop-all-products.png",
    icon: "eco",
  },
  {
    id: "pickle",
    title: "Himalayan Mixed Pickle",
    price: 180,
    qty: 1,
    unit: "250g",
    image: "/screenshots/05-login-signup.png",
    icon: "soup_kitchen",
  },
];

export default function CheckoutPage() {
  const router = useRouter();

  // Form states
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Uttarakhand");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  
  // Payment state
  const [paymentMethod, setPaymentMethod] = useState("card"); // card, upi, cod
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [secCode, setSecCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  // Discount code states
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  // Totals calculations
  const subtotal = INITIAL_CART.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal - discountAmount;

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === "HIMSHAKTI10") {
      if (discountApplied) {
        toast.error("Discount already applied!");
        return;
      }
      const saving = Math.round(subtotal * 0.1);
      setDiscountAmount(saving);
      setDiscountApplied(true);
      toast.success("Promo code 'HIMSHAKTI10' applied! 10% off.");
    } else {
      toast.error("Invalid coupon code. Try 'HIMSHAKTI10'!");
    }
  };

  const handleCompletePurchase = (e) => {
    e.preventDefault();
    
    // Check main validation
    if (!email || !firstName || !lastName || !address || !city || !pinCode || !phone) {
      toast.error("Please fill in all shipping details.");
      return;
    }

    if (paymentMethod === "card" && (!cardNumber || !expDate || !secCode || !nameOnCard)) {
      toast.error("Please complete your credit card details.");
      return;
    }

    setIsLoading(true);
    const purchasePromise = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(purchasePromise, {
      loading: "Securing transaction and placing order...",
      success: () => {
        setIsLoading(false);
        router.push("/dashboard/orders");
        return "Purchase complete! Namaste.";
      },
      error: "Transaction failed. Please try again.",
    });
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Transactional Header */}
      <header className="w-full bg-surface-container-lowest border-b border-surface-dim py-4 px-6 flex justify-between items-center fixed top-0 z-50">
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight font-sans">
          HimShakti
        </Link>
        <Link href="/shop" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          Back to Shop
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface mb-2 font-sans tracking-tight">
            Checkout
          </h1>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Complete your order securely.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative items-start">
          
          {/* Left Column: Forms */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            
            {/* Contact Information */}
            <section className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 border border-outline-variant/10 shadow-sm">
              <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2 font-sans">
                <span className="material-symbols-outlined text-primary">contact_mail</span>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface input-focus-ring outline-none"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                    id="offers"
                    type="checkbox"
                    disabled={isLoading}
                  />
                  <label className="text-sm text-on-surface-variant cursor-pointer select-none" htmlFor="offers">
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 border border-outline-variant/10 shadow-sm">
              <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2 font-sans">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="country">
                    Country/Region
                  </label>
                  <select
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="country"
                    disabled={isLoading}
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="address"
                    placeholder="House number and street name"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="apartment">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="apartment"
                    type="text"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="state">
                    State
                  </label>
                  <select
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    disabled={isLoading}
                  >
                    <option>Uttarakhand</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="pin">
                    PIN Code
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="pin"
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 border border-outline-variant/10 shadow-sm">
              <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2 font-sans">
                <span className="material-symbols-outlined text-primary">credit_card</span>
                Payment
              </h2>
              <p className="text-sm text-on-surface-variant mb-4">All transactions are secure and encrypted.</p>
              
              <div className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
                {/* Credit Card Option */}
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 border-b border-outline-variant flex items-center justify-between cursor-pointer transition-colors ${
                    paymentMethod === "card" ? "bg-surface-container-low" : "hover:bg-surface-container-low/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="pay_card"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                      disabled={isLoading}
                    />
                    <label className="text-sm font-semibold text-on-surface cursor-pointer select-none" htmlFor="pay_card">
                      Credit Card
                    </label>
                  </div>
                  <span className="material-symbols-outlined text-outline">credit_score</span>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === "card" && (
                  <div className="p-4 bg-surface-container-lowest grid grid-cols-2 gap-4 animate-[fadeIn_200ms_ease-out]">
                    <div className="col-span-2">
                      <label className="sr-only" htmlFor="cardNumber">Card Number</label>
                      <div className="relative">
                        <input
                          className="w-full border border-outline-variant rounded-lg p-3 pl-10 text-sm bg-surface-container-lowest text-on-surface outline-none"
                          id="cardNumber"
                          placeholder="Card number"
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          disabled={isLoading}
                        />
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
                          lock
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="sr-only" htmlFor="expDate">Expiration Date (MM / YY)</label>
                      <input
                        className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                        id="expDate"
                        placeholder="Expiration date (MM / YY)"
                        type="text"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="sr-only" htmlFor="secCode">Security Code (CVV)</label>
                      <div className="relative">
                        <input
                          className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                          id="secCode"
                          placeholder="Security code"
                          type="text"
                          value={secCode}
                          onChange={(e) => setSecCode(e.target.value)}
                          disabled={isLoading}
                        />
                        <span
                          className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant cursor-pointer"
                          onClick={() => toast("3-digit CVV number on the back of your card.")}
                        >
                          help
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="sr-only" htmlFor="nameOnCard">Name on Card</label>
                      <input
                        className="w-full border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                        id="nameOnCard"
                        placeholder="Name on card"
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                )}

                {/* UPI Option */}
                <div
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-4 border-b border-outline-variant flex items-center gap-3 cursor-pointer transition-colors ${
                    paymentMethod === "upi" ? "bg-surface-container-low" : "hover:bg-surface-container-low/50"
                  }`}
                >
                  <input
                    type="radio"
                    id="pay_upi"
                    name="payment"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                    disabled={isLoading}
                  />
                  <label className="text-sm font-semibold text-on-surface cursor-pointer w-full select-none" htmlFor="pay_upi">
                    UPI / Wallets
                  </label>
                </div>

                {/* COD Option */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${
                    paymentMethod === "cod" ? "bg-surface-container-low" : "hover:bg-surface-container-low/50"
                  }`}
                >
                  <input
                    type="radio"
                    id="pay_cod"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                    disabled={isLoading}
                  />
                  <label className="text-sm font-semibold text-on-surface cursor-pointer w-full select-none" htmlFor="pay_cod">
                    Cash on Delivery (COD)
                  </label>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
            <section className="bg-secondary-container rounded-[24px] p-6 md:p-8 border border-outline-variant/10 shadow-sm">
              <h2 className="text-xl font-bold text-on-surface mb-6 font-sans">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-6 mb-6 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {INITIAL_CART.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-[16px] overflow-hidden bg-surface-container-highest">
                      <PremiumImage
                        src={item.image}
                        alt={item.title}
                        icon={item.icon}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-bold text-on-surface line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-on-surface-variant">{item.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-on-surface">₹{item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="flex gap-2 mb-6 pt-6 border-t border-outline-variant/30">
                <input
                  className="flex-grow border border-outline-variant rounded-lg p-3 text-sm bg-surface-container-lowest text-on-surface outline-none"
                  placeholder="Discount code (try HIMSHAKTI10)"
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  onClick={handleApplyDiscount}
                  className="bg-surface-container-high text-on-surface px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-outline-variant/40 transition-colors cursor-pointer"
                  disabled={isLoading}
                >
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-6 border-t border-outline-variant/30 text-sm text-on-surface">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-primary font-bold">
                    <span>Discount (10%)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="font-semibold text-primary">Free</span>
                </div>
                
                <div className="flex justify-between items-end pt-4 border-t border-outline-variant/10">
                  <span className="text-lg font-bold text-on-surface font-sans">Total</span>
                  <div className="text-right">
                    <span className="text-xs text-on-surface-variant mr-2">INR</span>
                    <span className="text-2xl font-extrabold text-primary font-sans">₹{total}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={handleCompletePurchase}
                  className="w-full bg-primary text-on-primary rounded-[16px] py-4 px-6 text-sm font-bold hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  disabled={isLoading}
                >
                  <span className="material-symbols-outlined text-sm">lock</span>
                  {isLoading ? "Placing Order..." : "Complete Purchase"}
                </button>
              </div>
            </section>
          </div>

        </div>
      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #bec9c2;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
