
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import policyRoutes from './routes/policyRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import simulationRoutes from './routes/simulationRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/simulation', simulationRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('PolicyPulse API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
