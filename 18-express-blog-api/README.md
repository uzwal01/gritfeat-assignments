# Blog API (Express + TypeScript + MongoDB)

A **role-based Blog Platform API** built with **Node.js, Express, TypeScript, and MongoDB**.  
Features **JWT authentication**, **bcrypt password hashing**, **Zod validation**, and **role-based access control (RBAC)**.

---

## Features

- **Authentication** (Register/Login with JWT)
- **Authorization** (Role-based: `admin`, `blogger`)
- **User Model** with hashed passwords (`bcrypt`)
- **Post Model** with `author`, `createdBy`, `updatedBy`
- **Validation** using [Zod](https://zod.dev/)
- **RBAC**: 
  - Admin can create/read/update/delete any post
  - Blogger can only manage their own posts
- **Error handling** with proper HTTP status codes
- **Clean architecture**: routes → controllers → services → repositories → models

---


---

## Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **MongoDB** + **Mongoose**
- **JWT** (`jsonwebtoken`)
- **bcryptjs**
- **Zod**
- Dev Tools: `nodemon`, `eslint`, Postman for testing

---

## Installation

```bash
# clone repo
git clone https://github.com/uzwal01/gritfeat-assignments/tree/main/18-express-blog-api

```

### install dependencies
```bash
npm install
```

### run dev server
```bash
npm run start:dev
```

---

### Environment Variables

Create a `.env` file in root:
```env
PORT = 8080
MONGO_URI = mongodb://localhost:27017/blogDB
JWT_SECRET = SuperSecretKey123!@#_BlogPlatform2025_XYZ

```

---

## User Roles

- **Admin** → can manage all posts (create/read/update/delete any)
- **Blogger** → can only manage their own posts

---

## API Endpoints

- **Auth**

| Method | Endpoint                | Auth | Role | Description                                                        |
| ------ | ----------------------- | ---- | ---- | ------------------------------------------------------------------ |
| POST   | `/api/v1/auth/register` | NO    | -    | Register new user (default role = admin, adjust in DB for blogger) |
| POST   | `/api/v1/auth/login`    | NO    | -    | Login, returns JWT                                                 |


- **Posts**

| Method | Endpoint            | Auth | Role(s)        | Description                                       |
| ------ | ------------------- | ---- | -------------- | ------------------------------------------------- |
| POST   | `/api/v1/posts`     | YES    | admin, blogger | Create post (author = current user)               |
| GET    | `/api/v1/posts`     | YES    | admin, blogger | Get all posts (admin = all, blogger = own only)   |
| GET    | `/api/v1/posts/:id` | YES    | admin, blogger | Get single post (admin = any, blogger = own only) |
| PATCH  | `/api/v1/posts/:id` | YES    | admin, blogger | Update post (admin = any, blogger = own only)     |
| DELETE | `/api/v1/posts/:id` | YES    | admin, blogger | Delete post (admin = any, blogger = own only)     |


---

## Authentication & Authorization Flow

1. Register or login → receive JWT
2. Send JWT in headers:

```makefile
Authorization: Bearer <token>
```

3. auth middleware validates token, attaches req.user
4. role middleware checks if user has required role
5. Service layer ensures bloggers can only access their own posts


---