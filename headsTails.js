#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');


const argv = yargs(hideBin(process.argv))
  .check((argv) => {
    if (argv._.length > 0) {
      return true
      } else {
        throw new Error("Укажите путь до лог файла");
    }
  })
  .argv;

const arg = argv._[0];
const file = path.join(__dirname, arg)

const MIN = 1;
const MAX = 2;
const hiddenNumber = Math.ceil(Math.random() * 2);

console.log('Загадано число от 1 до 2');
const input = readline.createInterface(process.stdin);

let log = '';

input.on('line', (data) => {
  switch (true) {
    case (+data > MAX || +data < MIN):
      console.log('Введите число в  диапазоне от 1 до 2');
      return;
    default:

      const currentResult = +data === hiddenNumber ? '0' : '1';
      log = log + currentResult // string;
    ;
  }
});

process.on('SIGINT', () => {
    fs.writeFileSync(file, log, err => {
      if (err) throw new Error(err)
    });
  process.exit();
});