![Wandria Travel Preview](https://github.com/neuro-tx/wandira-travel/blob/main/client/public/assets/images/preview.png?raw=true)

Wandria is a modern travel and trip management web application...


# ✈️ Wandria Travel

**Wandria** is a full-stack travel and trip management web application that allows users to explore, book, and manage memorable travel experiences. Built with performance and usability in mind, it provides an engaging user interface and powerful admin tools to streamline travel operations.

---

## 🌟 Demo

> 🔗 [Live Demo](https://wandira-travel.vercel.app/)  
> 📂 [Frontend Repo](https://github.com/neuro-tx/wandira-travel/tree/main/client)  
> 🔧 [Backend Repo](https://github.com/neuro-tx/wandria-server)

---

## 🌍 Features

- 🧳 **AI-powered trip itinerary generator** – generate trips with ai
- 🧳 **Trip Discovery** – Browse curated trip offers with location, pricing, and dates.
- 👥 **Authentication & Authorization** – Secure login with role-based access (User/Admin).
- 📅 **Booking System** – Users can book trips, view status, and cancel when needed.
- 📊 **Admin Dashboard** – Manage trips, users, and bookings with status analytics.
- 🔐 **Protected Routes** – Guarded routes for admin and user access using JWT.

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **unsplash API**
- **CORS & dotenv**

### Tools & Others
- **Git & GitHub**
- **Postman**
- **imageKit (for image uploads)**
- **Vercel / Railway / Render** for hosting

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/neuro-tx/wandira-travel.git
cd wandira-travel
```
### 2. Set Up the Backend
```bash
cd server
npm install
npm run start
```
### 3. Set Up the Frontend
```bash
cd ../client
npm install
npm run dev
```
**Set Up Environment Variables**

Create a new file named `.env` in Server folder and add the following content:
```env
PORT=5100
NODE_ENV="devolpment" || "production

MONGO_URL= "YOUR MONGO URL"

JWT_ACCESS_TOKEN
JWT_REFRESH_TOKEN
ACCESS_JWT_EXPIRES_IN
REFRESH_JWT_EXPIRES_IN

# imageKit Keys
IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL

# GOOGLE GENRATIVE AI KEY
GENRATE_KEY

# UNSPLASH IMAGES KEYS
UNSPLASH_ACCESS_KEY
```
**Running the Project**
```bash
cd client
npm run dev
```
