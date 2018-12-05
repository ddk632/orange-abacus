const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:OrAb.sqlite");

const Currency = sequelize.import("./model/currency");
const TransactionType = sequelize.import("./model/transaction-type");
const CryptoExchange = sequelize.import("./model/crypto-exchange");
const CryptoTransaction = sequelize.import("./model/crypto-transaction")

CryptoTransaction.sync();

Currency.sync({force: true}).then(() => 
    Currency.bulkCreate([
        { code: "USD", name: "US Dollar", symbol: "$", isFiat: true },
        { code: "BTC", name: "Bitcoin", symbol: "Ƀ", isFiat: false }
    ])
);

TransactionType.sync({force: true}).then(() =>
    TransactionType.bulkCreate([
        { name: "Deposit", description: "Add fiat from external source such as bank account to trading capital" },
        { name: "Withdraw", description: "Remove fiat from trading capital to external source such as bank account" },
        { name: "Buy", description: "Expend fiat for crypto" },
        { name: "Sell", description: "Expend crypto for fiat" },
        { name: "Trade", description: "Expend crypto for different crypto" },
        { name: "Education", description: "Expend crypto for educational purposes (not a trade)" },
        { name: "Gift", description: "Expend or receive crypto as a gift (does not affect trading capital)" },
        { name: "Transfer", description: "Move crypto between wallets, generally only expends transaction fees" },
        { name: "Hole", description: "Accidentally sent crypto to an unrecoverable destination (incorrect address, etc)" },
        { name: "Fork", description: "Acquire crypto as a result of a hard fork" },
        { name: "AirDrop", description: "Acquire crypto as a result of an air drop" },
    ])
);

CryptoExchange.sync({force: true}).then(() =>
    CryptoExchange.bulkCreate([
       { name: "Coinbase" },
       { name: "CoinbasePro" },
       { name: "Poloniex" },
       { name: "ShapeShift" },
       { name: "EtherDelta" },
    ])
);
