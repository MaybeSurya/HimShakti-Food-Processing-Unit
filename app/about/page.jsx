import Link from "next/link";

export const metadata = {
  title: "About Us | HimShakti Himalayan Foods",
  description:
    "We bypass the middlemen to bring you the purest Himalayan produce. Empowering rural farmers while ensuring you get the freshest, unadulterated flavors of the mountains.",
};

export default function AboutPage() {
  return (
    <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Our Roots
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight font-sans tracking-tight">
              From the Heart of Uttarakhand, Direct to Your Table.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              We bypass the middlemen to bring you the purest Himalayan produce. Empowering rural farmers while ensuring you get the freshest, unadulterated flavors of the mountains.
            </p>
            <div className="pt-4">
              <Link href="/shop">
                <button className="bg-primary text-on-primary text-sm font-semibold px-8 py-4 rounded-[16px] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 cursor-pointer">
                  Discover Our Produce
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover"
                alt="A beautiful valley in Uttarakhand with terraced fields"
                src="/img/our_story_terraces.png"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
            </div>
            {/* Decorative background blur */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution Bento Grid */}
      <section className="bg-secondary-container/10 rounded-[32px] p-8 sm:p-12 md:p-16 mb-20">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary mb-4 font-sans">
            Why We Started
          </h2>
          <p className="text-base text-on-surface-variant">
            The traditional supply chain leaves farmers underpaid and consumers with stale, compromised goods. We are changing that.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Old Way */}
          <div className="bg-surface rounded-[24px] p-8 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 group flex flex-col items-start border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">trending_down</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 font-sans">
              The Old Way
            </h3>
            <p className="text-sm text-on-surface-variant mb-6 flex-grow leading-relaxed">
              Multiple distributors and middlemen squeeze margins, leaving local farmers with pennies and consumers paying a premium for older products.
            </p>
            <div className="w-full h-32 bg-surface-container-lowest rounded-xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
                alt="Coins and manual exchange"
                src="/img/himalayan_pantry_goods.png"
              />
            </div>
          </div>

          {/* Card 2: The HimShakti Way (Direct Sourcing) */}
          <div className="bg-primary rounded-[24px] p-8 hover:shadow-[0px_10px_30px_rgba(15,23,42,0.15)] transition-all duration-300 md:col-span-2 relative overflow-hidden flex flex-col justify-center text-on-primary">
            <div className="relative z-10 md:w-2/3 space-y-4">
              <span className="inline-block bg-on-primary/20 text-on-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                The HimShakti Way
              </span>
              <h3 className="text-2xl font-bold text-on-primary font-sans">
                Direct Sourcing
              </h3>
              <p className="text-base text-on-primary/95 leading-relaxed">
                We work directly with farming clusters across Uttarakhand. By removing the middlemen, farmers earn a fairer wage, and you receive the freshest produce—clean, pure, and full of natural vitality.
              </p>
            </div>
            {/* Farmer mask image */}
            <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block organic-mask-1 overflow-hidden opacity-95 translate-x-12">
              <img
                className="w-full h-full object-cover"
                alt="A proud Uttarakhand farmer"
                src="/img/my_account_farmers.png"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
