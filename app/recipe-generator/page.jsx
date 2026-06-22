"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import PremiumImage from "@/components/ui/PremiumImage";

// Pre-defined recipes for mock generation
const MOCK_RECIPES = [
  {
    title: "Garlic Pickle Millet Pilaf",
    description: "A hearty, warming dish utilizing Barnyard Millet infused with the bold, tangy notes of HimShakti Garlic Pickle. Perfect for a quick, nourishing meal.",
    time: "25 mins",
    difficulty: "Easy",
    image: "/screenshots/01-ai-recipe-generator.png",
    icon: "rice_bowl",
    ingredients: ["Barnyard Millet", "HimShakti Garlic Pickle", "Onions", "Olive oil", "Coriander"],
    instructions: [
      "Wash and soak the Barnyard Millet for 15 minutes, then drain.",
      "Heat olive oil in a pan, sauté finely chopped onions until translucent.",
      "Add the millet and toast lightly for 2 minutes.",
      "Add double the water volume and cook until fluffy (approx 12-15 mins).",
      "Stir in 1-2 tablespoons of HimShakti Garlic Pickle and garnish with fresh coriander."
    ]
  },
  {
    title: "Himalayan Spiced Veggie Bowl",
    description: "Roasted seasonal vegetables tossed with olive oil and a hint of pickle zest, served over a bed of fluffy millet. A clean, balanced dinner option.",
    time: "40 mins",
    difficulty: "Medium",
    image: "/screenshots/03-checkout.png",
    icon: "restaurant",
    ingredients: ["Millet Grains", "Seasonal Veggies (Carrots, Broccoli)", "HimShakti Spices", "Olive oil"],
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Toss chopped seasonal vegetables with olive oil, salt, and HimShakti spices.",
      "Spread on a baking sheet and roast for 25-30 minutes until edges are caramelized.",
      "Boil the millet in salted water until cooked, then drain.",
      "Serve the roasted vegetables over the warm millet bed."
    ]
  }
];

export default function RecipeGeneratorPage() {
  const [ingredients, setIngredients] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState(MOCK_RECIPES);
  const [activeTags, setActiveTags] = useState({
    vegan: true,
    glutenFree: true,
    quickPrep: false
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!ingredients.trim()) {
      toast.error("Please tell us what is in your pantry first!");
      return;
    }

    setIsLoading(true);
    setSelectedRecipe(null);
    toast.success("Consulting our Himalayan kitchen...");

    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Add custom dynamically flavored recipe if they typed something specific
      let generated = [...MOCK_RECIPES];
      if (ingredients.toLowerCase().includes("buransh") || ingredients.toLowerCase().includes("juice")) {
        generated.unshift({
          title: "Buransh Chilled Mocktail",
          description: "A refreshing cooler combining the floral notes of HimShakti Buransh Squash with fresh mint and a splash of lime.",
          time: "5 mins",
          difficulty: "Easy",
          image: "/screenshots/03-checkout.png",
          icon: "local_bar",
          ingredients: ["HimShakti Buransh Squash", "Chilled water or Soda", "Lime juice", "Mint leaves"],
          instructions: [
            "Add 3 tablespoons of Buransh Squash to a serving glass.",
            "Squeeze in half a lime and muddle fresh mint leaves.",
            "Top with ice cubes and chilled sparkling water or soda.",
            "Stir gently and serve garnished with a slice of lime."
          ]
        });
      }

      setRecipes(generated);
      toast.success("Recipes crafted!");
    }, 2500);
  };

  const toggleTag = (tag) => {
    setActiveTags(prev => ({ ...prev, [tag]: !prev[tag] }));
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-6 font-sans tracking-tight">
          AI Recipe Generator
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Discover culinary inspiration rooted in Himalayan purity. Enter the ingredients you have on hand, and let our AI craft a bespoke recipe blending tradition with your pantry.
        </p>
      </section>

      {/* Input Section */}
      <section className="max-w-4xl mx-auto bg-surface-container-low rounded-[24px] p-8 md:p-12 mb-16 diffuse-shadow-hover transition-all duration-300 border border-outline-variant/10">
        <form onSubmit={handleGenerate} className="flex flex-col gap-6">
          <label className="text-xl font-bold text-primary font-sans" htmlFor="ingredients-input">
            What&apos;s in your pantry?
          </label>
          <div className="relative">
            <textarea
              className="w-full bg-surface text-on-surface border border-outline-variant focus:border-primary focus:border-2 rounded-xl p-4 text-base resize-none transition-all outline-none"
              id="ingredients-input"
              placeholder="E.g., Barnyard Millet, HimShakti Garlic Pickle, onions, olive oil..."
              rows={4}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => toggleTag("vegan")}
                className={`text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTags.vegan ? "bg-primary text-on-primary" : "bg-primary-fixed text-on-primary-fixed"
                }`}
              >
                Vegan
              </button>
              <button
                type="button"
                onClick={() => toggleTag("glutenFree")}
                className={`text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTags.glutenFree ? "bg-primary text-on-primary" : "bg-primary-fixed text-on-primary-fixed"
                }`}
              >
                Gluten-Free
              </button>
              <button
                type="button"
                onClick={() => toggleTag("quickPrep")}
                className={`text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTags.quickPrep ? "bg-primary text-on-primary" : "bg-primary-fixed text-on-primary-fixed"
                }`}
              >
                Quick Prep
              </button>
            </div>
            <button
              type="submit"
              className="bg-primary text-on-primary px-8 py-3 rounded-[16px] text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
              id="generate-btn"
              disabled={isLoading}
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              {isLoading ? "Generating..." : "Generate Recipes"}
            </button>
          </div>
        </form>
      </section>

      {/* Loading State / Skeletons */}
      {isLoading && (
        <section className="max-w-4xl mx-auto mb-16" id="loading-state">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-primary flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin">sync</span>
              Crafting Himalayan recipes...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skeleton Card 1 */}
            <div className="bg-secondary-container rounded-[24px] overflow-hidden">
              <div className="h-48 bg-surface-dim relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="h-4 w-full bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="h-4 w-5/6 bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-surface-dim rounded-full relative overflow-hidden"><div className="absolute inset-0 shimmer"></div></div>
                  <div className="h-6 w-16 bg-surface-dim rounded-full relative overflow-hidden"><div className="absolute inset-0 shimmer"></div></div>
                </div>
              </div>
            </div>
            {/* Skeleton Card 2 */}
            <div className="bg-secondary-container rounded-[24px] overflow-hidden hidden md:block">
              <div className="h-48 bg-surface-dim relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="h-4 w-full bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="h-4 w-5/6 bg-surface-dim relative overflow-hidden rounded"><div className="absolute inset-0 shimmer"></div></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-surface-dim rounded-full relative overflow-hidden"><div className="absolute inset-0 shimmer"></div></div>
                  <div className="h-6 w-16 bg-surface-dim rounded-full relative overflow-hidden"><div className="absolute inset-0 shimmer"></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {!isLoading && recipes.length > 0 && (
        <section className="max-w-5xl mx-auto" id="results-section">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center font-sans">
            Curated Suggestions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map((recipe, idx) => (
              <div
                key={recipe.title}
                onClick={() => setSelectedRecipe(recipe)}
                className="bg-secondary-container rounded-[24px] overflow-hidden diffuse-shadow-hover transition-all duration-300 flex flex-col cursor-pointer group border border-outline-variant/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <PremiumImage
                    src={recipe.image}
                    alt={recipe.title}
                    icon={recipe.icon}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2 font-sans">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {recipe.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-surface text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 border border-outline-variant/35">
                        <span className="material-symbols-outlined text-[16px]">timer</span> {recipe.time}
                      </span>
                      <span className="bg-surface text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 border border-outline-variant/35">
                        <span className="material-symbols-outlined text-[16px]">local_fire_department</span> {recipe.difficulty}
                      </span>
                    </div>
                    <button className="w-full bg-surface text-primary border border-outline-variant/50 px-4 py-2.5 rounded-[16px] text-sm font-semibold hover:bg-surface-container-low transition-colors text-center cursor-pointer">
                      View Full Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dynamic Recipe Details Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]">
          <div className="bg-surface rounded-[24px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative diffuse-shadow animate-[scaleIn_250ms_ease-out]">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-full p-2 transition-all cursor-pointer flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="text-2xl font-bold text-primary mb-4 font-sans pr-8">
              {selectedRecipe.title}
            </h3>
            <div className="h-60 rounded-xl overflow-hidden mb-6">
              <PremiumImage
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                icon={selectedRecipe.icon}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-on-surface">
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">Ingredients</h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-on-surface-variant">
                  {selectedRecipe.ingredients.map((ing) => (
                    <li key={ing}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">Instructions</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-on-surface-variant leading-relaxed">
                  {selectedRecipe.instructions.map((step, i) => (
                    <li key={i} className="pl-1 align-top">
                      <span className="font-normal">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
