# User Management App

A full-stack web application for user registration, login, and dashboard management. This project demonstrates user authentication, protected routes, and user data management using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- User registration and login with JWT authentication
- Protected dashboard displaying user information
- Responsive and modern UI with React and Tailwind CSS
- RESTful API with Express and MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn
- MongoDB (local or cloud instance)

---

## Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
4. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:5000`.

---

## Frontend Setup

1. **Navigate to the frontend folder:**
   ```sh
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the frontend development server:**
   ```sh
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` by default.

---

## Usage

- Register a new user via the Register page.
- Login with your credentials.
- Access the protected dashboard to view user information.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT

---

## License

This project is open source and available under the [MIT License](LICENSE).
