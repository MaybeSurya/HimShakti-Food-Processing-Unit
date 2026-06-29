const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  isVideo: { type: Boolean, default: false }
}, { _id: false });

const featureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      sparse: true // Allows uniqueness while allowing nulls or missing values
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    fullName: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    originalPrice: {
      type: Number
    },
    unit: {
      type: String,
      default: "500g"
    },
    description: {
      type: String
    },
    inStock: {
      type: Boolean,
      default: true
    },
    badge: {
      type: String
    },
    badges: {
      type: [String],
      default: []
    },
    location: {
      type: String,
      default: "Uttarakhand"
    },
    organic: {
      type: Boolean,
      default: false
    },
    pesticideFree: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    },
    mainImage: {
      type: String
    },
    thumbnails: {
      type: [thumbnailSchema],
      default: []
    },
    icon: {
      type: String,
      default: "eco"
    },
    features: {
      type: [featureSchema],
      default: []
    },
    sourcingTitle: {
      type: String
    },
    sourcingDesc: {
      type: String
    },
    sourcingPoints: {
      type: [String],
      default: []
    },
    sourcingImage: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);
