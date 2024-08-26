const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AttendanceManager = require('../models/attendanceManager.js');
require('dotenv').config();

exports.register = async (req, res) => {
    const {email, password, confirmPassword } = req.body;



    try{
        const existingUser = await AttendanceManager.findOne ({email});

        if(existingUser){
            return res.status(400).send('Username already exists. Please try again. ');

        }
        if(password !== confirmPassword){
            return res.status(400).send('Password do not match');

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new AttendanceManager({
            email,
            password: hashPassword

        });

        await newUser.save();

    res.redirect('/login');

    }catch(error){

    }
} 










