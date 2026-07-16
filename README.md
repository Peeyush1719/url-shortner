<h1 align="center">🔗 MERN URL Shortener</h1>

<p align="center">
A modern URL Shortener built using the MERN stack that converts long URLs into short, shareable links. The application also generates QR codes for every shortened URL and supports one-click copying.
</p>

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://url-shortner-tau-three.vercel.app
- **Backend (Render):** https://url-shortner-2-mx5d.onrender.com

---

## ✨ Features

- 🔗 Convert long URLs into short URLs
- 🚀 Instant redirection to original websites
- 📱 Generate QR Code for every shortened URL
- 📋 One-click Copy Short URL
- ✅ URL validation
- 📊 Track click count
- 🌐 Fully deployed using Vercel and Render
- 💾 MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- DaisyUI
- Tailwind CSS
- QRCode.react

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID
- CORS
- dotenv

### Deployment
- Vercel
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```text
url-shortner/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Peeyush1719/url-shortner.git

cd url-shortner
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Run Backend

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run Frontend

```bash
npm run dev
```

---

## 📌 API Endpoints

### Shorten URL

```http
POST /shorten
```

Request

```json
{
  "originalUrl": "https://example.com"
}
```

Response

```json
{
  "shortId": "PACZBqq",
  "shortUrl": "https://your-domain/PACZBqq"
}
```

---

### Redirect

```http
GET /:shortId
```

Redirects the user to the original URL.

---

## 📷 QR Code

Every shortened URL automatically generates:

- QR Code
- Download QR Code
- Copy Link

---

## 🌟 Future Improvements

- User Authentication
- Custom Short URLs
- Link Expiration
- Analytics Dashboard
- User History
- Password Protected Links
- Admin Dashboard

---

## 👨‍💻 Author

**Peeyush**

GitHub: https://github.com/Peeyush1719

LinkedIn: https://www.linkedin.com/in/peeyush1719

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
