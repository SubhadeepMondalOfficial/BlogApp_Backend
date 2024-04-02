const express = require('express')
const app = express();

//require dotenv npm package
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json())

//import route for BlogApp
const blogAppRoute = require('./routes/blogAppRoute');

//mount/prefix the BlogApp API routes
app.use("/api/v1", blogAppRoute);

// liseten app
app.listen(PORT, () => {
    console.log(`Server is running successfully at ${PORT}`);
})

// require database file and call it
const dbConnect = require('./config/database')
dbConnect()

//default route
app.get('/', (req, res) => {
    res.send('<h1>You are landed in HOME PAGE</h1>')
})
