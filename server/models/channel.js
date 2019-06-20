const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = db.define('channel', {
  name: Sequelize.STRING
});