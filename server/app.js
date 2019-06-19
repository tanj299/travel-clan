const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
//const database = require('./models');
const userRoute = require('./api/user');
const indexRoute = require('./api/index');
const tripRoute = require('./api/trip');

const database = require('./config/database');

const io = require('socket.io')();
// handle sockets
require('./socket/index')(io);



database
.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))
    database.sync({force: true}) 
    

const app = express();
//??
// logging middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '../client', 'public')));
// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('INDEX'));

app.use('/api', userRoute )
app.use('/api', indexRoute)
app.use('/api', tripRoute )

const PORT = 8080;

//start server
app.listen(PORT, console.log(`Server started on port ${PORT}`))