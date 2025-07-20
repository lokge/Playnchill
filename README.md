# 🎮 Playnchill

Welcome to **Playnchill** — a sleek and modern React-based eCommerce platform for browsing, reviewing, and purchasing digital video games.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/json--server-Mock%20API-brightgreen" />
  <img src="https://img.shields.io/badge/-SCSS-black?style=flat-square&logo=SASS" />
</p>

---

## 🧩 Features

- 🔎 Search for games by title
- 🛍️ Add/remove items to cart
- 🛍️ Buying and saving products in localStorage
- 👤 User authentication (login/register)

---

## 📂 Project Structure

```
Playnchill/
├── public/                # HTML template & static files
├── src/
│   ├── assets/            # Images & icons
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-based pages (Home, Cart, Product, etc.)
│   ├── styles/            # SCSS styles
│   ├── utils/             # API (Axios), context, helpers
│   ├── App.jsx
│   └── main.jsx
├── db.json                # Fake backend data for json-server
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/lokge/Playnchill.git
cd Playnchill
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the project

```bash
# Start both frontend and backend using concurrently
npm run dev

# If you want to start only the backend server
npm run server

# If you want to start only the React frontend without the backend
npm run start
```

App runs on: [http://localhost:3000/](http://localhost:3000/)

---

## 🧪 Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React                  |
| Routing     | React Router DOM       |
| State Mgmt  | Context API            |
| API Calls   | Axios                  |
| UI Plugins  | Fancybox, Swiper, React Icons |
| Backend     | json-server (mock API) |

## 🤝 Contribution

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Open a Pull Request ✅

---

## 🧑‍💻 Author

**Erkin Dzhamanbaev**  
GitHub: [@lokge](https://github.com/lokge)

---

## 📝 License

This project is licensed under the **MIT License**.

---

> _Built with ❤️ using React_
