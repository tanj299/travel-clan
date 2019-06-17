const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Sequelize = require('sequelize');
const db = new Sequelize('travelClan', 'postgres', 'password123',{
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});


db.authenticate()
    .then(()=>console.log("DB connected"))
    .catch(err => console.log('Error is: '+ err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`))