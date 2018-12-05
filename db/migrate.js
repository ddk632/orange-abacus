// Migrate
"use strict";
const fs = require("fs");
const path = require("path");
const Umzug = require("umzug");

// Local vars
const args = process.argv.slice(2)

// Setup Umzug
let umzug = new Umzug({
    storage: 'sequelize',
    logging: function (name, migration) {
        console.log(`${name} ${migration}`);
    },
    migrations: {
        path: "./db/migrations",
        pattern: /\.js$/
    },
    upName: "up",
    downName: "down"
});

// Execute migration
switch(args[0]) {
    case "up": {
        umzug.up();
        break;
    }
    case "down": {
        umzug.down();
        break;
    }
    default: {
        console.log('Usage: /[path]/OrangeAbabus $ node db/migrate [up|down]')
    }
}
