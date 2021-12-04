#!/usr/bin/env node
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")

function getDays() {
    return fs.readdirSync("./problems").map((d) => d.substring(3));
}
function getPartChoicesForDay({ day }) {
    return fs.readdirSync(`./problems/day${day}`)
        .filter(f => path.extname(f) === '.js')
        .filter(f => f.startsWith("part"))
        .map(f => path.basename(f, path.extname(f)).substring(4));
}
function executeProblem({ day, part }) {
    return require(`./problems/day${day}/part${part}`);
}

inquirer.prompt([
    { name: "day", type: "list", message: "Which day?", choices: getDays },
    { name: "part", type: "list", message: "Which part?", choices: getPartChoicesForDay }
]).then(executeProblem)
