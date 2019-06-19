const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const database = require('./models');
const userRoute = require('./api/user');
const tripRoute = require('./api/trip');

const database = require('./config/database');

database
.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))
    //database.sync({force: true}) 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('INDEX'));

app.use('/api', userRoute )
app.use('/api', tripRoute )

const PORT = 8080;

//start server
app.listen(PORT, console.log(`Server started on port ${PORT}`))