#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    saveKeyValue('token', token);
    printSuccess('Token has saved');
  } catch (error) {
    printError(error.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    // show help
    printHelp();
  }
  if (args.s) {
    // save a city
  }
  if (args.t) {
    // save token
    return saveToken(args.t);
  }
  // show weather
};

initCLI();
