const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const database = require('./models');
const userRoute = require('./api/user');

const database = require('./config/database');

database
.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))
    database.sync({force: true}) 

    const app = express();

app.get('/', (req, res) => res.send('INDEX'));

app.use('/api', userRoute )

const PORT = 8080;

//start server
app.listen(PORT, console.log(`Server started on port ${PORT}`))