require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courseRoutes'); // Import course routes

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Enable CORS for your frontend
app.use(cors({
    origin: process.env.CLIENT_URL, // Allow your frontend URL
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// Middleware to parse JSON requests
app.use(express.json());

// Establish database connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((e) => console.error('MongoDB connection error:', e));

// Routes configuration
app.use("/auth", authRoutes);
app.use("/api/courses", courseRoutes); // Correctly set up course routes
// Create a database connection
mongoose.connect(MONGO_URI, )
.then(() => {
    console.log('MongoDB Connected');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Generic error handler for server-side errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
