const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:OrAb.sqlite");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('crypto_exchange', {
        id: { type: Sequelize.INTEGER, primaryKey: true }, // primary key
        name: DataTypes.TEXT, // text
    })
}



