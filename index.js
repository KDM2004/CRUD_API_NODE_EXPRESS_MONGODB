// index.js (ESM)

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import path from 'path'; // Import path module

import userRoutes from './routes/users.js';

const __filename = fileURLToPath(import.meta.url); // Equivalent to __filename in ESM
const __dirname = path.dirname(__filename); // Equivalent to __dirname in ESM

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

app.use('/users', userRoutes);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const CONNECTION_URL = 'mongodb://localhost:27017';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));

mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err.message}`);
});
