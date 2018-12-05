const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:OrAb.sqlite");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('crypto_transaction', {
        id: { type: Sequelize.INTEGER, primaryKey: true }, // primary key
        transactionDate: DataTypes.DATE, // date
        transactionType: DataTypes.INTEGER, // transactionType fk
        cryptoExchange: DataTypes.INTEGER, // cryptoExchange fk
        currencyAcquired: DataTypes.INTEGER, // currency fk
        acquiredAmount: DataTypes.FLOAT, // float
        currencyRemitted: DataTypes.INTEGER, // currency fk
        remittedAmount: DataTypes.FLOAT, // float
        rate: DataTypes.FLOAT, // remittedAmount / acquiredAmount = rate
        feeCurrency: DataTypes.INTEGER, // Fee Currency Paid in, currency fk
        feeAmount: DataTypes.FLOAT, // actual fee amount
        feeRateUsd: DataTypes.FLOAT, // Fee Rate USD calculated for cryptos based on transaction date/exchange rate for USD at time of transaction	
        feeTotalUsd: DataTypes.FLOAT, // feeAmount * feeRateUsd = feeTotalUsd
        rateUsd: DataTypes.FLOAT, // conversion of rate of currency at time of transaction based on acquired value in US dollars
        valueUsd: DataTypes.FLOAT, // (acquiredAmount * rateUsd) - feeAmountUsd = valueUsd
        balanceAvailableUsd: DataTypes.FLOAT // balance of previous timestamped transaction + SUMIF(transactionType,"Deposit"|"Sell",valueUsd) - SUMIF(transactionType, "Withdraw"|"Buy", valueUsd) - SUMIF("feeCurrency"="USD", feeAmount)
    })
}


