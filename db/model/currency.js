const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:OrAb.sqlite");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('currency', {
        id: { type: Sequelize.INTEGER, primaryKey: true }, // primary key
        code: DataTypes.TEXT, // 3 or 4 letter short code, e.g. USD or BTC
        name: DataTypes.TEXT, // currency name, e.g. "US Dollar" or "Bitcoin"
        symbol: DataTypes.TEXT, // UTF-8 symbol for the currency, e.g. $ or Ƀ
        isFiat: DataTypes.BOOLEAN, // true/false 
    })
}


