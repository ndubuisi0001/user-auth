const express = require ("express");
const mongoose = require ("mongoose");
require ("dotenv").config();
const app = express();
app.use(express.json());
const PORT =process.env.PORT || 3000;
app.get ( "/api/health", ( req, res)=> { res.json ({ success: true, message: "API is running"});});
app.listen(PORT, ()=> {console.log ("server running on port 3000:");});