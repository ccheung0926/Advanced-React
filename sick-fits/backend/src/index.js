require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// user express middle to handle cookies
// use express middleware to populate current user

server.start({
    cors: {
        credential: true,
        origin: process.env.FRONTEND_URL,
    },
}, deets => {
    console.log(`Server is now running on port https://localhost:${deets.port}`);
});