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
const file = path.join(__dirname, arg);

const OK_RESULT = '0';
const BAD_RESULT = '1';

fs.readFile(file,
  'utf-8',
  (err, data) => {
    if (err) throw new Error(err)
    const results = data.split('');
    const okCount = results.filter(result => result === OK_RESULT).length;
    const badCount = results.filter(result => result === BAD_RESULT).length;

    console.log('Общее количество партий', results.length);
    console.log('Выигранные партии', okCount);
    console.log('Проигранные партии', badCount);
    console.log(`ВЫигранно ${Math.round(okCount/results.length*100)}% партий`)

    console.log('Ok');
  });