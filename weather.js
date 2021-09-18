#!/usr/bin/env node
const yargs = require('yargs/yargs');
const http = require('http');
const { hideBin } = require('yargs/helpers');

const weatherAPIKey = process.env.weatherAPIKey;


const argv = yargs(hideBin(process.argv))
.check((argv) => {
  if (argv._.length > 0) {
    return true
    } else {
      throw new Error("Необходимо указать город")
  }
})
.argv;

const town = argv._[0];

const url = `http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${town}`;


http.get(url, (res) => {
  const statusCode = res.statusCode;

  if (statusCode !== 200) {
    console.error(`Status Code: ${statusCode}`);
    return;    
  }

  res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      let parsedData = JSON.parse(rawData);
      console.log(parsedData);
      });
  }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
  });