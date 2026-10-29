const express = require ("express");
const mongoose = require ("mongoose");
const crypto = require("crypto");
const authRoutes = require("./routes/authRoutes");
require ("dotenv").config();
console.log("JWT secret loaded:", !! process.env.JWT_SECRET);
const userRoutes = require ("./routes/userRoutes");
const adminRoutes = require ("./routes/adminRoutes");
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
const PORT =process.env.PORT || 3000;
app.get ( "/api/health", ( req, res)=> { res.json ({ success: true, message: "API is running"});});
async function startServer(){try { await mongoose.connect(process.env.MONGODB_URI); console.log ("MongoDB connected successfully");
app.listen(PORT, ()=> {console.log ("server running on port 3000:");});
}catch (error){console.error("MongoDB connection failed:", error.message);}}
startServer();