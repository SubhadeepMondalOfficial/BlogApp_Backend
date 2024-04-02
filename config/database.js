//require mongoose after install to connect with MongoDB
const mongoose = require('mongoose');

//require dotenv package to to connect .env file with mongoose and to access .env file data in process.env object
require('dotenv').config();

//connect mongoose with MongoDB by using .env file url
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database Connection is Successful'))
        .catch( (error) => {
            console.log('Failed to Connect with Databse');
            console.error(error.message);
            process.exit(1)
        })
}

module.exports = dbConnect;

