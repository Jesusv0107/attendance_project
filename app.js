const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log(`Connected to MongoDB Database`)})
.catch((err) => {console.log(`Error Connected to MongoDB Database: ${err}`)});

//view engines
app.set('view engine', 'ejs');
app.set('views' , './views');


//Middelewares
app.use(express.static('public'));

app.use((err, res , req, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
    next();
});

//start server
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);

});