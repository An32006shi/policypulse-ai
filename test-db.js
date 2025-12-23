const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/policypulse_ai';

async function testConnection() {
    try {
        console.log('Connecting to Mongo...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected!');
        process.exit(0);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
}

testConnection();
