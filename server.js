// server.js
const express = require('express');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Get MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/docker-test1';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/items', itemsRouter);

// Start the server
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));