# 🧑‍💻 CarRental-Website

A modern car rental web application built with **React** and **Firebase**. It features secure user authentication, a dynamic home page with car listings and featured sections, full CRUD operations for managing rental bookings, protected routes for authorized users, dark/light theme toggling, and smooth animations using **Lottie** and **React Awesome Reveal**.

🔗 **Live Demo:** [https://assignment-11-7999f.web.app/](https://assignment-11-7999f.web.app/)

---

## 🚀 Features

- 🔐 **User Authentication**
  - Email/Password login
  - Google OAuth login
  - Firebase Authentication

- 🏠 **Dynamic Home Page**
  - Hero slider with featured images
  - Featured tasks and extra sections

- 🗂️ **Task Management**
  - Full CRUD: Create, Read, Update, Delete tasks
  - Firebase Firestore as backend

- 🔒 **Protected Routes**
  - Only accessible after login
  - Route guarding with React Router

- 🌓 **Dark/Light Mode**
  - Toggle theme using Context API

- ✨ **Animated UI**
  - Smooth transitions with Lottie
  - Scroll-based animations with React Awesome Reveal

---

## 🛠 Tech Stack

| Category       | Technologies                         |
|----------------|--------------------------------------|
| Frontend       | React, React Router, Firebase Auth   |
| Backend        | Firebase Firestore                   |
| Styling        | CSS / Tailwind / Custom Components   |
| Animations     | Lottie, React Awesome Reveal         |
| Deployment     | Firebase Hosting                     |

---

## 📁 Folder Structure

├── public/
├── src/
│ ├── assets/ # Images, Lottie animations, etc.
│ ├── components/ # Reusable components
│ ├── contexts/ # Theme and auth context providers
│ ├── hooks/ # Custom hooks (e.g., useAuth)
│ ├── pages/ # Route-based pages
│ ├── services/ # Firebase config and API logic
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── .env.local # Firebase environment variables
├── README.md
└── package.json


---

## 📦 Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm or Yarn

### Steps

 **Clone the repository**
   ```bash
   git clone https://github.com/Repon-Hasan/Carzone_Frontend
   cd Carzone_Frontend

   Set up Firebase
   
###
Go to Firebase Console

Create a new project

Enable:

Authentication → Email/Password + Google

Cloud Firestore

Add a web app and get Firebase config


Create .env.local file
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


Run the development server

bash

npm run dev
# or
yarn dev

🌐 Deployment
This app is deployed using Firebase Hosting.

Deploying
bash
npm run build
firebase login
firebase init
firebase deploy

👤 **Author**

**Repon Hasan**  
GitHub: [@Repon-Hasan](https://github.com/Repon-Hasan)

