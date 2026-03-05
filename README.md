PolicyPulse – Policy Simulation & Citizen Feedback Platform

PolicyPulse is a full-stack policy-tech platform designed to simulate public reactions to government policies before implementation. It enables citizens to provide feedback, vote on policies, and share concerns while providing administrators with insights and analytics.

The platform helps decision-makers analyze public sentiment, predict outcomes, and make data-driven policy improvements.

🚀 Key Features

Policy Simulation Engine – Simulate policy outcomes using parameter-driven inputs.

Citizen Feedback System – Citizens can vote, comment, and submit complaints about policies.

Role-Based Authentication – Secure login system with JWT authentication for Citizen and Admin roles.

Admin Dashboard – Provides analytics, insights, and monitoring of policy responses.

Interactive Data Visualization – Visual representation of public responses to policies.

Secure Backend APIs – Built with authentication, protected routes, and data validation.

🛠️ Tech Stack

Frontend

React.js

HTML5 / CSS3

JavaScript

Backend

Node.js

Express.js

Database

MongoDB

Authentication

JSON Web Token (JWT)

📂 Project Structure
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
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/An32006shi/policypulse-ai.git
cd policypulse-ai
2️⃣ Backend Setup
cd backend
npm install

Create a .env file

MONGODB_URI=mongodb://127.0.0.1:27017/policypulse_ai
JWT_SECRET=secret
PORT=5000

Run backend server

npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs on

http://localhost:3000

Backend runs on

http://localhost:5000
📊 Example Use Case

Admin creates a new government policy.

Citizens view the policy and provide feedback.

Users vote and comment on policy decisions.

Admin dashboard aggregates responses and analytics.

👩‍💻 Author

Anshika Gupta

GitHub:
https://github.com/An32006shi

⭐ Future Improvements

AI-based sentiment analysis of citizen feedback

Policy outcome prediction models

Advanced analytics dashboard

Deployment with Docker and cloud infrastructure
