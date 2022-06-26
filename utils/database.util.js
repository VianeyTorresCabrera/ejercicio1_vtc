const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'vica19ta',
    port: 5432,
    database:'check'
});

module.exports = { db, DataTypes };