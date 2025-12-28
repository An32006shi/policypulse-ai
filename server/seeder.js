
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Policy from './models/Policy.js';
import Feedback from './models/Feedback.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Policy.deleteMany();
        await Feedback.deleteMany();

        const createdUsers = await User.insertMany([
            { name: 'Admin User', email: 'admin@example.com', password: 'password123', role: 'admin' },
            { name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'citizen' },
            { name: 'Jane Smith', email: 'jane@example.com', password: 'password123', role: 'citizen' },
        ]);

        const adminUser = createdUsers[0]._id;

        await Policy.insertMany([
            {
                title: "Digital India Education Initiative 2024",
                summary: "Proposal to provide free tablets and internet connectivity to all government school students.",
                category: "Education",
                department: "Ministry of Education",
                status: "active",
                deadline: new Date('2025-03-15')
            },
            {
                title: "Green Energy Transition Act",
                summary: "Mandating 40% renewable energy usage for all industries by 2030.",
                category: "Environment",
                department: "Ministry of Environment",
                status: "proposed",
                deadline: new Date('2025-04-30')
            },
            {
                title: "Universal Healthcare Expansion",
                summary: "Expanding Ayushman Bharat coverage to include mental health services.",
                category: "Healthcare",
                department: "Ministry of Health",
                status: "active",
                deadline: new Date('2025-02-28')
            }
        ]);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
