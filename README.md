# 🏔️ HimShakti Food Processing Unit - D2C Web Portal

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A Direct-to-Consumer (D2C) e-commerce web portal built for **HimShakti Food Processing Unit**, a startup based in the rural industrial clusters near Haldwani, Uttarakhand. This project features a Next.js frontend integrated with an Express.js REST API backend.

---

## 🎯 Project Mission

HimShakti specializes in value addition—turning raw Himalayan millets, fresh fruits, and traditional recipes into packaged snacks, juices, and pickles.

This platform aims to solve the primary constraint of the business: **full dependence on predatory distributor margins**. By providing a direct online storefront, HimShakti can sell authentic, locally processed goods directly to consumers across India.

---

## ✨ Key Features

* **Minimalistic E-Commerce UI**
  A clean, Dribbble-inspired design system focusing on earthy tones (forest greens and crisp whites) to build trust and highlight organic products.

* **REST API Powered Catalog**
  Dynamic product listing (`/shop`) and detail (`/products/[id]`) pages populated by an Express.js backend API.

* **User Dashboard**
  A dedicated space for consumers to track past orders and manage account details.

* **AI-Assisted Recipe Generator**
  A unique feature allowing users to input the HimShakti ingredients they own (e.g., Barnyard Millet, Pahari Garlic Pickle) to generate smart, localized recipe suggestions.

* **Dark / Light Mode**
  Fully persistent theme toggle ensuring a premium user experience across all devices.

* **Fully Responsive Design**
  Optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

| Category      | Technology                        |
| ------------- | --------------------------------- |
| Frontend      | Next.js 16+ (App Router)          |
| Backend       | Node.js / Express.js              |
| Styling       | Tailwind CSS v4                   |
| Icons         | Google Material Symbols           |
| Notifications | react-hot-toast                   |
| API Clients   | Custom Fetch Integration          |

---

## 🚀 Running Locally

Follow these steps to run both the frontend and backend servers.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MaybeSurya/HimShakti-Food-Processing-Unit.git
cd HimShakti-Food-Processing-Unit
```

### 2️⃣ Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd himshakti-d2c/backend
   ```
2. Create your `.env` configuration:
   ```bash
   cp .env.example .env
   ```
   *(Ensure it contains `PORT=5000`)*
3. Install backend packages:
   ```bash
   npm install
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend will run on: `http://localhost:5000`

### 3️⃣ Frontend Setup

1. Open a new terminal and navigate to the project root:
   ```bash
   cd himshakti-d2c
   ```
2. Install frontend packages:
   ```bash
   npm install
   ```
3. Run the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend app will run on: `http://localhost:3000`

---

## 🔌 API Documentation (Week 4 Deliverable)

The backend exposes a clean REST API to manage the product catalog.

### Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Retrieve all products (supports category & price filters) |
| `GET` | `/api/products/search?q=millet` | Search products by name or description |
| `GET` | `/api/products/:id` | Retrieve full details of a single product |
| `POST` | `/api/products` | Add a new product (requires name, category, price, description) |
| `PUT` | `/api/products/:id` | Update an existing product's fields |
| `DELETE` | `/api/products/:id` | Remove a product from the database |

### Postman Collection
An export of the API collection is available in the root folder:
* **`W4_APICollection_SuryaPrakash.json`** - Import this into Postman or Insomnia to test endpoints.

---

## 📁 Project Structure

```text
HimShakti/
│
├── himshakti-d2c/                 # Next.js Frontend
│   ├── app/                       # App Router Pages
│   │   ├── shop/                  # Shop Catalog Page (Dynamic)
│   │   ├── products/[id]/         # Product Detail Page (Dynamic)
│   │   ├── dashboard/             # User Dashboard Page
│   │   ├── recipe-generator/      # AI Recipe Builder Page
│   │   └── ...
│   ├── components/                # Layout & Shared UI Components
│   ├── public/                    # Static Assets (Images in /img/)
│   └── package.json
│
├── backend/                       # Express Backend REST API
│   ├── server.js                  # Main server entry & logic
│   ├── .env                       # Environment config (ignored)
│   ├── .env.example               # Reference config template
│   └── package.json
│
└── W4_APICollection_SuryaPrakash.json   # Postman Collection Import
```

---

## 🌱 Business Impact

The platform empowers rural food-processing entrepreneurs by:

* Reducing dependence on distributors
* Increasing direct consumer reach
* Improving profit margins
* Promoting Himalayan and local products
* Supporting sustainable rural entrepreneurship

---

## 👨‍💻 Developer

Developed as part of the **AI-Assisted Full Stack Web Development Internship** at **TBI-GEU**.

**Developer:** Surya Prakash

---

## 📄 License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

© 2026 Surya Prakash. All rights reserved.
