#!/usr/bin/env node
'use strict';

const { existsSync } = require("fs")
const yargs = require("yargs")

const options = yargs.usage("Usage -d <number> -p <number>")
    .option("d", { alias: "day", describe: "Advent Day", type: "number", demandOption: true })
    .option("p", { alias: "part", describe: "Problem part", type: "number", demandOption: true })
    .argv

if (existsSync(`./problems/day${options.day}/part${options.part}.js`)) {
    require(`./problems/day${options.day}/part${options.part}`)
}