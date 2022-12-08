#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

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
  }
  // show weather
};

initCLI();
