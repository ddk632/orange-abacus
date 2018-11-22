# OrangeAbacus

# A fun ES6 JavaScript node.js project for tracking/recording crypto transactions, trades, and portfolio status.
Why yet another one of these? 
I like to track my USD which I have allocated to trading in addition to crypto portfolio, and also have better control of grouping of transactions to follow/track success of specific trades.

There are great products out there such as Blockfolio and Cointracker, but I am not a fan of how Blockfolio tracks groups of transactions (at least it does) and neither of these track your USD 'holding' funds.

By that I mean, let's say I wire $X to my favorite exchange which I plan to use for trading. I have not bought any crypto yet, however those funds are not in my bank account (or in my mattress, etc.) and yet are still being held on my behalf in fiat. That's my trading capital. I want to track that -- how much have I invested in fiat, how much do I have available for trading, etc. 

Since I have not seen such a feature, I've been doing this in what has become a slightly unwieldy google sheet, and this project is taking the stuff I've already got in my google sheet and putting it into an npm package and open source it for anyone to use.

Benefit also since it runs on node.js, you can run it yourself and own your transaction data.

This will update as the scope evolves

# MVP
- basic project infrastructure as npm package
- API and client (all JS) for 
(a) manual entry of transactions, 
(b) calls to retrieve prices based on date, 
(c) portfolio value calculations, 
(d) display UI for portfolio values and transactions
(e) some sort of persistent storage for transaction data

