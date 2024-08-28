const fs = require('fs');
const mongoose = require('mongoose');
const student = require('../models/studentRecord');
const { resolve } = require('path');

//load students data from JSON file
async function loadStudentData(){

    fs.readFile('students.json', 'utf-8' , (err, data) => {
        resolve(JSON.parse(data));
    });
}