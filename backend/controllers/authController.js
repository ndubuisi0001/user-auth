const user = require("../models/User");
const bcrypt = require("bcrypt");
const registerUser = async (req, res)=>{try {const{name, email, password} = req.body;
if (!name||!email||!password) {return res.status(404).json({success:false, message:"Name, email and password are required"});}
const existingUser= await User.findOne({email});
if (existingUser){return res.status(409).json({success:false, message:"Email already exists"});} 
const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({name, email, password:hashedPassword});
res.status(201).json({success:true, message:"user registered successfully", user:{id:user_id, name:user.name, email: user.email}});
}catch (error){res.status(500).json({success:false, message:"Registration faileds"});}};
module.exports={RegisterUser};