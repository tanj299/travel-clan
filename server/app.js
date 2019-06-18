const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./models')

const app = express();
database.sequelize.sync({force: true})

app.get('/', (req, res) => res.send('INDEX'));

const PORT = 8080;

//start server
app.listen(PORT, console.log(`Server started on port ${PORT}`))