#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const MS_IN_DAY = 86400000

const argv = yargs(hideBin(process.argv))
.check((argv) => {
  if (argv._.length > 0) {
    return true
    } else {
      throw new Error("Необходимо указать аргумент")
  }
})
.argv;


const arg = argv._[0];
const {year, y, month, m, date, d} = argv;

if (arg === 'current') {

  if (year || y) {
    console.log(new Date().getFullYear());
  } else if (month || m) {
    console.log(new Date().getMonth() + 1);
  } else if (date || d) {
    console.log(new Date().getDate())
  } else {
    console.log(new Date());
  }
}

if (arg === 'add') {
  if (date || d)  {
    const currentDateMs = new Date().getTime();
    console.log(new Date(currentDateMs + MS_IN_DAY * (date || d)));
  }
  if (month || m) {
    const newMonth = new Date().getMonth() + (month || m);
    const date = new Date();
    date.setMonth(newMonth);
    console.log(date)
  }
}

  if (arg === 'sub') {
    if (date || d)  {
      const currentDateMs = new Date().getTime();
      console.log(new Date(currentDateMs - MS_IN_DAY * (date || d)));
    }
    if (month || m) {
      const newMonth = new Date().getMonth() - (month || m);
      const date = new Date();
      date.setMonth(newMonth);
      console.log(date)
    }

}


