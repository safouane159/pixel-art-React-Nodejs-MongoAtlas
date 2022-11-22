const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()
const {User} = require('../Schemas');



router.post("/user",async (req,res) => {

    console.log("POST Request to /user");

});