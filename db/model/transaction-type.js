const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:OrAb.sqlite");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transaction_type', {
        id: { type: Sequelize.INTEGER, primaryKey: true }, // primary key
        name: DataTypes.TEXT, // "DEPOSIT" | "BUY" etc.
        description: DataTypes.TEXT // "A bank deposit to a crypto exchange"
    })
}


