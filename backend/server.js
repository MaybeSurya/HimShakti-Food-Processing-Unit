/**
 * HimShakti D2C Portal - Express Backend Server
 * Week 4 Internship Task
 *
 * REST API for the HimShakti food processing portal.
 * Runs on PORT 5000 by default (configurable via .env).
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─────────────────────────────────────────────
//  Middleware
// ─────────────────────────────────────────────

app.use(
  cors({
    // Allow any localhost origin in development (handles port 3000, 3001, etc.)
    origin: /^http:\/\/localhost(:\d+)?$/,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight for all routes
app.options("*", cors());

app.use(express.json());

// ─────────────────────────────────────────────
//  In-Memory Mock Database
// ─────────────────────────────────────────────

let products = [
  {
    id: "barnyard-millet",
    name: "Himalayan Barnyard Millet (Jhangora)",
    fullName: "Himalayan Barnyard Millet (Jhangora)",
    category: "millets",
    price: 180,
    originalPrice: 220,
    unit: "500g",
    description:
      "Sourced directly from the high-altitude clusters of Uttarakhand, our Barnyard Millet (Jhangora) is a nutrient-dense, gluten-free ancient grain. Cultivated using traditional, pesticide-free methods to preserve its purity and natural goodness.",
    inStock: true,
    badge: "Organic",
    badges: ["Uttarakhand", "Organic"],
    location: "Uttarakhand",
    organic: true,
    pesticideFree: true,
    image: "/img/barnyard_millet.png",
    mainImage: "/img/barnyard_millet.png",
    thumbnails: [
      { src: "/img/wild_linga_pickle.png", alt: "Millet in hands", isVideo: false },
      { src: "/img/our_story_terraces.png", alt: "Cooked millet", isVideo: false },
      { src: "/img/himalayan_dawn.png", alt: "Harvesting millet video", isVideo: true },
    ],
    icon: "eco",
    features: [
      { title: "Pesticide Free", desc: "Naturally grown without chemicals.", icon: "eco" },
      { title: "Gluten Free", desc: "Safe for celiac diets.", icon: "favorite" },
    ],
    sourcingTitle: "Traditional Sourcing",
    sourcingDesc:
      "Our Barnyard Millet is nurtured by the women farmers of Himalayan villages. They employ generations-old techniques, relying on rain-fed agriculture and natural composting. This not only ensures a superior, pure grain but also empowers local communities and sustains the fragile mountain ecosystem.",
    sourcingPoints: [
      "Empowering women farmer collectives.",
      "Sustainable, rain-fed agricultural practices.",
      "Preserving traditional Himalayan seed varieties.",
    ],
    sourcingImage: "/img/my_account_farmers.png",
  },
  {
    id: "fresh-buransh-juice",
    name: "Fresh Buransh (Rhododendron) Juice",
    fullName: "Buransh (Rhododendron) Wild Squash",
    category: "juices",
    price: 320,
    originalPrice: 380,
    unit: "750ml",
    description:
      "Brewed from hand-collected red Rhododendron flowers of the Himalayan heights. A vibrant, floral juice loaded with antioxidants and excellent for heart health.",
    inStock: true,
    badge: "Wild Harvest",
    badges: ["Uttarakhand", "Wild Harvest"],
    location: "Uttarakhand",
    organic: true,
    pesticideFree: true,
    image: "/img/buransh_squash.png",
    mainImage: "/img/buransh_squash.png",
    thumbnails: [
      { src: "/img/himalayan_pantry_goods.png", alt: "Red flowers", isVideo: false },
      { src: "/img/barnyard_millet.png", alt: "Bottle macro", isVideo: false },
      { src: "/img/our_story_terraces.png", alt: "Flowering valley video", isVideo: true },
    ],
    icon: "local_bar",
    features: [
      { title: "Heart Health", desc: "Naturally rich in flavonoids.", icon: "favorite" },
      { title: "Pure Flower Juice", desc: "No artificial dyes or chemical syrups.", icon: "local_bar" },
    ],
    sourcingTitle: "High-Altitude Blooms",
    sourcingDesc:
      "Rhododendron flowers bloom in early spring at altitudes above 6,000 feet. Local villagers harvest the fresh petals at dawn. The petals are processed inside our community processing unit to extract the premium juice without destroying active enzymes.",
    sourcingPoints: [
      "Spring-harvested red Rhododendron petals.",
      "Chilled extraction keeps enzymes active.",
      "Bypasses distributors to reward petal-gatherers directly.",
    ],
    sourcingImage: "/img/my_account_farmers.png",
  },
  {
    id: "pahari-garlic-pickle",
    name: "Pahari Garlic Pickle",
    fullName: "Pahari Single-Clove Garlic Pickle",
    category: "pickles",
    price: 220,
    originalPrice: 260,
    unit: "250g",
    description:
      "Made with pungent Himalayan single-clove garlic, slow-pickled in wood-pressed mustard oil and hand-ground mountain spices. A sharp, fiery condiment with deep umami notes.",
    inStock: true,
    badge: "Traditional",
    badges: ["Uttarakhand", "Traditional"],
    location: "Uttarakhand",
    organic: false,
    pesticideFree: true,
    image: "/img/wild_linga_pickle.png",
    mainImage: "/img/wild_linga_pickle.png",
    thumbnails: [
      { src: "/img/himalayan_dawn.png", alt: "Spices mix", isVideo: false },
      { src: "/img/himalayan_pantry_goods.png", alt: "Jar details", isVideo: false },
      { src: "/img/buransh_squash.png", alt: "Preparing pickle video", isVideo: true },
    ],
    icon: "soup_kitchen",
    features: [
      { title: "Artisan Recipe", desc: "Crafted in small farm batches.", icon: "soup_kitchen" },
      { title: "Pesticide Free", desc: "Single-clove mountain garlic.", icon: "health_and_safety" },
    ],
    sourcingTitle: "Wild Forest Harvest",
    sourcingDesc:
      "The single-clove garlic is cultivated on high-altitude terraced fields using organic manure. Each jar is hand-packed and slow-pickled for 21 days in wood-pressed mustard oil with hand-ground spice blends sourced locally.",
    sourcingPoints: [
      "Sourced from organic high-altitude farms.",
      "21-day traditional pickling process.",
      "100% natural, preservative-free recipe.",
    ],
    sourcingImage: "/img/our_story_terraces.png",
  },
  {
    id: "finger-millet",
    name: "Himalayan Finger Millet (Mandua)",
    fullName: "Himalayan Finger Millet (Ragi / Mandua)",
    category: "millets",
    price: 160,
    originalPrice: 190,
    unit: "500g",
    description:
      "Traditionally stone-ground Finger Millet flour (Mandua). Extremely rich in calcium, dietary fibers, and amino acids. Perfect for rotis, porridge, and healthy pancakes.",
    inStock: false,
    badge: "Stone Ground",
    badges: ["Uttarakhand", "Stone Ground"],
    location: "Uttarakhand",
    organic: true,
    pesticideFree: true,
    image: "/img/finger_millet_grains.png",
    mainImage: "/img/finger_millet_grains.png",
    thumbnails: [
      { src: "/img/barnyard_millet.png", alt: "Ragi grain", isVideo: false },
      { src: "/img/himalayan_pantry_goods.png", alt: "Flour package", isVideo: false },
      { src: "/img/our_story_terraces.png", alt: "Milling process video", isVideo: true },
    ],
    icon: "grain",
    features: [
      { title: "Stone Ground", desc: "Milled slowly to preserve nutrients.", icon: "grain" },
      { title: "Calcium Rich", desc: "10x more calcium than wheat or rice.", icon: "fitness_center" },
    ],
    sourcingTitle: "Terraced Hill Farms",
    sourcingDesc:
      "Cultivated on narrow terraced farms using snow-melt water and organic composting. Milled using traditional watermills (Gharats) that run at cold temperatures, preserving the grain's starch structure and aroma.",
    sourcingPoints: [
      "Rain-fed terrace farming methods.",
      "Stone ground at local watermills (Gharats).",
      "Fair-price direct contract with village farmers.",
    ],
    sourcingImage: "/img/my_account_farmers.png",
  },
];

// ─────────────────────────────────────────────
//  Helper
// ─────────────────────────────────────────────

const findProductById = (id) => products.find((p) => p.id === id);

// ─────────────────────────────────────────────
//  Routes
// ─────────────────────────────────────────────

// Root health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🌿 HimShakti D2C Backend is running!",
    version: "1.0.0",
  });
});

/**
 * GET /api/products
 * List all products.
 */
app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * GET /api/products/search?q=...
 * Search products by name or category.
 * MUST be placed before /:id route to avoid conflict.
 */
app.get("/api/products/search", (req, res) => {
  const query = req.query.q;

  if (!query || query.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Search query parameter 'q' is required.",
    });
  }

  const lowerQuery = query.toLowerCase();
  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );

  res.status(200).json({
    success: true,
    count: results.length,
    query,
    data: results,
  });
});

/**
 * GET /api/products/:id
 * Get a single product by ID.
 */
app.get("/api/products/:id", (req, res) => {
  const product = findProductById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with id '${req.params.id}' not found.`,
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

/**
 * POST /api/products
 * Create a new product.
 * Required body fields: id, name, category, price, description, inStock
 */
app.post("/api/products", (req, res) => {
  const { id, name, category, price, description, inStock } = req.body;

  // Validate required fields
  if (!id || !name || !category || price === undefined || !description || inStock === undefined) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: id, name, category, price, description, inStock.",
    });
  }

  // Check for duplicate ID
  if (findProductById(id)) {
    return res.status(400).json({
      success: false,
      message: `A product with id '${id}' already exists.`,
    });
  }

  const newProduct = {
    id,
    name,
    category,
    price: Number(price),
    description,
    inStock: Boolean(inStock),
    unit: req.body.unit || "500g",
    badge: req.body.badge || null,
    location: req.body.location || "Uttarakhand",
    organic: req.body.organic || false,
    pesticideFree: req.body.pesticideFree || false,
    image: req.body.image || null,
    icon: req.body.icon || "eco",
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product created successfully.",
    data: newProduct,
  });
});

/**
 * PUT /api/products/:id
 * Update an existing product.
 */
app.put("/api/products/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Product with id '${req.params.id}' not found.`,
    });
  }

  // Merge existing product with update payload (spread keeps un-touched fields)
  const updatedProduct = {
    ...products[index],
    ...req.body,
    id: products[index].id, // Protect ID from being changed
  };

  products[index] = updatedProduct;

  res.status(200).json({
    success: true,
    message: "Product updated successfully.",
    data: updatedProduct,
  });
});

/**
 * DELETE /api/products/:id
 * Delete a product by ID.
 */
app.delete("/api/products/:id", (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Product with id '${req.params.id}' not found.`,
    });
  }

  products.splice(index, 1);

  res.status(204).send(); // 204 No Content — success, no body
});

// ─────────────────────────────────────────────
//  404 Handler (unknown routes)
// ─────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route '${req.method} ${req.originalUrl}' not found.`,
  });
});

// ─────────────────────────────────────────────
//  Global Error Handling Middleware
// ─────────────────────────────────────────────

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error("[Error]", err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error. Please try again later.",
  });
});

// ─────────────────────────────────────────────
//  Start Server
// ─────────────────────────────────────────────

const server = app.listen(PORT, () => {
  console.log(`\n🌿 HimShakti Backend running at http://localhost:${PORT}`);
  console.log(`📦 Products API    → http://localhost:${PORT}/api/products`);
  console.log(`🔍 Search API      → http://localhost:${PORT}/api/products/search?q=millet`);
  console.log(`\nPress Ctrl+C to stop.\n`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Kill the process using it or change PORT in .env\n`);
  } else {
    console.error("[Server Error]", err);
  }
  process.exit(1);
});

