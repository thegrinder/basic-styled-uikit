#!/usr/bin/env node

const main = require('./cli/main');

main(process.argv.slice(2)).catch(error => console.log(error));
