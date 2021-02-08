#!/usr/bin/env node

// const { Command } = require('commander'); // include commander in git clone of commander repo
import { Command } from 'commander';

const program = new Command();
program.version('0.0.1');

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  // .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format');

// program.addHelpText('before', `
// Example call:
// $ custom-help --help`);

program.parse(process.argv);
