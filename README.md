# 🚀 PolicyPulse – Policy Simulation & Citizen Feedback Platform

PolicyPulse is a **full-stack policy-tech platform** designed to simulate public responses to government policies before their implementation. The platform enables citizens to share feedback, vote on policies, and raise concerns while providing administrators with valuable insights and analytics.

The goal of PolicyPulse is to help policymakers **analyze public sentiment, understand citizen perspectives, and make data-driven decisions**.

---

## ✨ Key Features

- **Policy Simulation Engine**  
  Allows simulation of policies using parameter-driven inputs to analyze possible outcomes.

- **Citizen Feedback System**  
  Citizens can vote, comment, and submit complaints regarding government policies.

- **Role-Based Authentication**  
  Secure login system using **JWT authentication** for both **Citizen and Admin roles**.

- **Admin Dashboard**  
  Provides analytics, policy insights, and monitoring tools for administrators.

- **Interactive Data Visualization**  
  Displays policy responses and engagement data using visual charts.

- **Secure Backend APIs**  
  Built with authentication, protected routes, and secure data handling.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JSON Web Token (JWT)

---

## 📂 Project Structure

```
policypulse-ai/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/An32006shi/policypulse-ai.git
cd policypulse-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file inside the backend folder:

```
MONGODB_URI=mongodb://127.0.0.1:27017/policypulse_ai
JWT_SECRET=secret
PORT=5000
```

Run the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

Backend runs on:

```
http://localhost:5000
```

---

## 📊 Example Workflow

1. Admin creates or uploads a government policy.
2. Citizens can view the policy details.
3. Users provide feedback through voting and comments.
4. Admin dashboard aggregates responses and shows analytics.

---

## 👩‍💻 Author

**Anshika Gupta**

GitHub:  
https://github.com/An32006shi

---

## ⭐ Future Improvements

- AI-based sentiment analysis for citizen feedback  
- Policy impact prediction using machine learning  
- Advanced analytics dashboard  
- Cloud deployment with Docker and CI/CD
