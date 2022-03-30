const Sequelize = require('sequelize');

const sequelize = new Sequelize('landing.sqlite', 'user', 'pass', {
    dialect : "sqlite", 
    host : "./names.sqlite"
})

module.exports = sequelize;