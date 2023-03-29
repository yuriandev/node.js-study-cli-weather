#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token has not sent');
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
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
  getWeather('Moscow');
  // show weather
};

initCLI();
