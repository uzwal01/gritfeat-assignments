# E-Commerce API (MongoDB + Node.js + TypeScript)

This is a feature-rich e-commerce REST API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Mongoose)**.  
It supports full CRUD for users, products, and orders, along with advanced filtering, reporting, and nested document manipulation.

> [GitHub Repo](https://github.com/uzwal01/gritfeat-assignments/tree/main/21-MongoDB-Assignment-3/ecommerce-api)

---

## Project Folder Structure

```
ecommerce-api/
├── src/
│ ├── config/ # MongoDB connection
│ │ └── db.ts
│ ├── controllers/ # Logic for each route
│ │ ├── userController.ts
│ │ ├── productController.ts
│ │ ├── orderController.ts
│ │ └── reportController.ts
│ ├── models/ # Mongoose schemas & TypeScript interfaces
│ │ ├── User.ts
│ │ ├── Product.ts
│ │ └── Order.ts
│ ├── routes/ # Route definitions
│ │ ├── userRoutes.ts
│ │ ├── productRoutes.ts
│ │ ├── orderRoutes.ts
│ │ └── reportRoutes.ts
│ └── index.ts # App entry point
├── package.json
├── tsconfig.json
├── .env
└── README.md 

```

---

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/uzwal01/gritfeat-assignments.git
cd 21-MongoDB-Assignment-3/ecommerce-api

```

2. **Install dependencies:**

```bash
npm install

```

3. **Set environment variables:**

```bash
PORT=5000
MONGODB_URI = mongodb://localhost:27017/ecommerce_db

```

4. **Start the development server:**

```bash
npm run start:dev

```

---

## Tech Stack

- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- REST API architecture

---

## API Endpoints Overview

1. **Set A: User Management**

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| POST   | `/users`     | Create a new user                           |
| GET    | `/users`     | List/search users with filters & pagination |
| GET    | `/users/:id` | Get user by ID                              |
| PATCH  | `/users/:id` | Update user (except username/email)         |
| DELETE | `/users/:id` | Delete a user                               |


2. **Set B: Product Catalog**

| Method | Endpoint                                 | Description              |
| ------ | ---------------------------------------- | ------------------------ |
| POST   | `/products`                              | Create a new product     |
| GET    | `/products`                              | Filter/search products   |
| PATCH  | `/products/:id`                          | Update product details   |
| DELETE | `/products/:id`                          | Delete a product         |
| POST   | `/products/:id/reviews`                  | Add a product review     |
| PATCH  | `/products/:productId/reviews/:reviewId` | Update a specific review |
| DELETE | `/products/:productId/reviews/:reviewId` | Delete a specific review |


3. **Set C: Order Management**

| Method | Endpoint                | Description                               |
| ------ | ----------------------- | ----------------------------------------- |
| POST   | `/orders`               | Place a new order                         |
| GET    | `/orders`               | List all orders (optional status filter)  |
| GET    | `/users/:userId/orders` | Get all orders by customer ID             |
| PATCH  | `/orders/:orderId`      | Update order status (completed/cancelled) |


4. **Set D: Reports & Analytics**

| Method | Endpoint                 | Description                           |
| ------ | ------------------------ | ------------------------------------- |
| GET    | `/reports/revenue`       | Total revenue from completed orders   |
| GET    | `/reports/top-products`  | List top-selling products by quantity |
| GET    | `/reports/monthly-sales` | Group sales totals by month & year    |


---

## Example API Usage

**Add a Product Review:**

```http
POST /products/:id/reviews
Content-Type: application/json

{
  "user": "Alex",
  "rating": 5,
  "comment": "Amazing product!"
}


```

**Place an Order:**

```http
POST /orders
{
  "customer_id": "USER_ID",
  "items": [
    { "product_id": "PROD_ID", "quantity": 2 }
  ]
}

```

---