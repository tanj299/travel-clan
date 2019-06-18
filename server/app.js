const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./models');
const userRoute = require('./api/user');

const app = express();
database.sequelize.sync({force: true})

app.get('/', (req, res) => res.send('INDEX'));

app.use('/api', userRoute )

const PORT = 8080;

//start server
app.listen(PORT, console.log(`Server started on port ${PORT}`))