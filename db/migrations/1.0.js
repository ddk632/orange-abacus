// Migrations 1.0
"use strict";
const Promise = require("bluebird");
const sqlite3 = require("sqlite3");
const path = require('path');

module.exports = {
    up: function () {
        return new Promise(function (resolve, reject) {
            console.log('Migrating: Up');
            /* Here we write our migration function */
            let db = new sqlite3.Database('./OrAb.db');
            //   enabling foreign key constraints on sqlite db
            db.run(`PRAGMA foreign_keys = ON`);
            
            // let sql = fv.get('trade_transaction', 'table');
            // console.log(sql);

            // db.serialize(function () {
            //     db.run(sql);
            // });
            db.close();
        });
    },

    down: function () {
        return new Promise(function (resolve, reject) {
            /* This runs if we decide to rollback. In that case we must revert the `up` function and bring our database to it's initial state */
            console.log('Migrating: Down');
            let db = new sqlite3.Database("./OrAb.db");
            // db.serialize(function () {
            //     db.run(`DROP TABLE IF EXISTS trade_transaction`);
            // });
            db.close();
        });
    }
};