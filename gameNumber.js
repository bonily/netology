#!/usr/bin/env node
const readline = require('readline');
const hiddenNumber = Math.floor(Math.random() * 101);
console.log('Загадано число от 0 до 100');
const input = readline.createInterface(process.stdin);
input.on('line', (data) => {
  switch (true) {
    case (+data > hiddenNumber):
      console.log('Меньше');
      return;
    case (+data < hiddenNumber):
      console.log('Больше');
      return;
    case (+data === hiddenNumber): 
      console.log(`Отгадано число ${hiddenNumber}`);
      process.exit(-1)
  }

});