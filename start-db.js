const { MongoMemoryServer } = require('mongodb-memory-server');
const fs = require('fs');
const path = require('path');

async function startDB() {
    const dbPath = path.join(__dirname, 'data', 'db');
    if (!fs.existsSync(dbPath)) {
        fs.mkdirSync(dbPath, { recursive: true });
    }

    console.log('Starting Portable MongoDB (mongodb-memory-server)...');
    console.log('Use this if you do not have a system-wide MongoDB installed.');

    try {
        const mongod = await MongoMemoryServer.create({
            instance: {
                port: 27017, // Try default port first
                dbPath: dbPath,
                storageEngine: 'wiredTiger'
            }
        });

        const uri = mongod.getUri();
        console.log('---------------------------------------------------');
        console.log(`✅ MongoDB Started Successfully!`);
        console.log(`URI: ${uri}`);
        console.log('---------------------------------------------------');
        console.log('Keep this terminal OPEN to keep the database running.');
        console.log('You can now run "npx ts-node scripts/seed.ts" in another terminal.');

        // Handle shutdown
        const cleanup = async () => {
            console.log('Stopping MongoDB...');
            await mongod.stop();
            process.exit(0);
        };

        process.on('SIGTERM', cleanup);
        process.on('SIGINT', cleanup);

    } catch (err) {
        console.error('Failed to start MongoDB:', err);
        if (err.code === 'EADDRINUSE') {
            console.log('⚠️  Port 27017 is busy. MongoDB might already be running!');
            console.log('You can probably proceed with running the app/seed script.');
        }
    }
}

startDB();
