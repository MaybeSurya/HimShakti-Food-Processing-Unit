"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    const loginPromise = new Promise((resolve) => setTimeout(resolve, 1500));

    toast.promise(loginPromise, {
      loading: "Signing you in...",
      success: () => {
        setIsLoading(false);
        router.push("/dashboard");
        return "Welcome back to the mountains!";
      },
      error: "Could not log in. Please try again.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 text-on-surface font-body-md antialiased bg-background">
      {/* Main Canvas */}
      <main className="w-full max-w-md mx-auto">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight font-sans">
            HimShakti
          </h1>
          <p className="text-sm text-on-surface-variant mt-2">
            Welcome back to the mountains.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#FAF7F2] dark:bg-surface-container-low rounded-[24px] p-8 md:p-10 shadow-sm border border-outline-variant/10 relative overflow-hidden">
          {/* Subtle decorative organic shape in background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-semibold text-on-surface mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  mail
                </span>
                <input
                  className="input-organic w-full pl-12 pr-4 py-3 rounded-xl text-sm text-on-surface placeholder:text-outline/60"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="block text-sm font-semibold text-on-surface"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-xs font-semibold text-primary hover:text-primary-container transition-colors cursor-pointer"
                  onClick={() => toast("Reset link sent if account exists (mock).")}
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  lock
                </span>
                <input
                  className="input-organic w-full pl-12 pr-4 py-3 rounded-xl text-sm text-on-surface placeholder:text-outline/60"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4">
              <button
                className="w-full py-4 bg-primary text-on-primary rounded-[16px] text-sm font-semibold hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 transform hover:scale-[0.99] flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </form>

          {/* Toggle Signup */}
          <div className="mt-8 text-center">
            <p className="text-sm text-on-surface-variant">
              Don&apos;t have an account?
              <a
                className="text-sm font-semibold text-primary hover:text-primary-container transition-colors ml-1 cursor-pointer"
                onClick={() => toast("Signup modal/flow is under construction.")}
              >
                Create one
              </a>
            </p>
          </div>
        </div>

        {/* Organic Image Mask below card for visual balance */}
        <div className="mt-12 w-full h-32 rounded-[40px_10px_40px_10px] overflow-hidden opacity-60">
          <img
            className="w-full h-full object-cover"
            alt="Scenic Himalayan range at dawn"
            src="/img/himalayan_dawn.png"
          />
        </div>
      </main>
    </div>
  );
}
