#!/usr/bin/env node

// const { Command } = require('commander'); // include commander in git clone of commander repo
import { Command } from 'commander';
import runDiffData from '../src/genDiffData.js';

const program = new Command();
program.version('0.0.1');
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  // .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(runDiffData(filepath1, filepath2));
  });
program.parse(process.argv);

// fs.readFile('./filepath.json');
// fs.open('./filepath.json');
// console.log(fs.readFileSync('filepath1.json'));
// console.log(JSON.parse(fs.readFileSync('filepath1.json', 'utf8')));
