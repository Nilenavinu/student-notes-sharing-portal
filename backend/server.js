const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const protect = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");
const path = require("path");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Student Notes Sharing Portal Backend Running 🚀");
});

// Protected Route
app.get("/api/profile", protect, (req, res) => {
    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});