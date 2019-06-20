//backend

const express = require('express');
const morgan = require('morgan'); //logging middleware
const bodyParser = require('body-parser');
const path = require('path');
//const database = require('./models');
const userRoute = require('./api/user');
const indexRoute = require('./api/index'); //api for channel and messages
const tripRoute = require('./api/trip');

const database = require('./config/database');
const app = express();
const server = app.listen(8080, console.log(`Server started on port 3000`))
const io = require('socket.io')(server); 
// handle sockets
require('./socket/index')(io);



database
.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))
    database.sync() 
    // {force: true}
    



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
