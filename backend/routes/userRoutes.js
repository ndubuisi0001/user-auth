const express = require ("express");
const {protect} = require ("../middleware/authMiddleware");
const User = require ("../models/User");
const router = express.Router();
router.get("/me", protect, async (req, res)=> {
    try{const user = await User.findById(req.user.id).select ("-passsword");
        if (!user){return res.status(404).json({success:false, message:"User not found"});
    }
    res.json ({success:true, user});
}catch (error){res.status(500).json({success:false, message:"failed to fetch profile"});
}
    });
    module.exports = router;