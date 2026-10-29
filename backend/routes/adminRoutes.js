const express = require("express");
const {protect, adminOnly} = require ("../middleware/authMiddleware");
const User = require ("../models/User");
const router = express.Router();
router.get("/users", protect, adminOnly, async (req, res)=> {
    try {const users = await
        User.find().select("-password");
        res.json({success:true, count: users.length, users});
    }catch (error){res.status(500).json({success:false, message:"failed to fetch users"});}});
    module.exports = router;