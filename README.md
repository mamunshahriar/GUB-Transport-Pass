# GUB Transport Pass

A complete digital transport pass management platform for **Green University of Bangladesh (GUB)**.

## Project Info
- **Course:** Design Project II (CSE 320)
- **Section:** 232 D1
- **Students:** Md. Mamun Shahriar (232002008), Sanjida Salam Joyonti (232002215), Md. Rakin Afsar (202002052)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (CRA), CSS-in-JS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |

---

## Features

- **Landing Page** — Hero section, feature grid, campus route map
- **Auth Page** — Student registration + login (student/admin)
- **Student Dashboard** — Digital pass (flip front/back), status banner, complaint portal
- **Admin Dashboard** — Stats grid, student table with search + approve actions
- **Status Page** — Application status view with pass card link

---

## Setup Instructions

### Prerequisites
- Node.js >= 16
- MongoDB (local or Atlas)

### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

App runs at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend API).

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Student registration |
| POST | `/api/auth/login` | Login (student/admin) |
| POST | `/api/student/pass/apply` | Apply for transport pass |
| GET | `/api/student/pass/status` | Get pass status |
| POST | `/api/student/complaints` | Submit complaint |
| POST | `/api/student/pass/verify-qr` | QR verification (officer) |
| GET | `/api/admin/dashboard/stats` | Admin stats |
| GET | `/api/admin/students` | Student list (paginated) |
| PUT | `/api/admin/pass/verify/:id` | Approve/reject pass |

---

## Color Palette

- **Primary Green:** `#006A4E`
- **Background:** `#FAFAFA` / `#f0faf5`
- **Accent Orange:** `#FF9F1C`
- **Admin Dark:** `#1a2744`

---

## Folder Structure

```
gub-transport-pass/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── passController.js
│   │   └── adminController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Pass.js
│   │   └── Route.js
│   ├── middlewares/authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── apiRoutes.js
│   │   └── adminRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   ├── StudentDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── StatusPage.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
└── README.md
```

---

*Green University of Bangladesh • Transport Management System © 2025*
