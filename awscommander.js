#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .command('ec2 [cmd] [params...]', 'install one or more packages')
  .command('search [query]', 'search with optional query')
  .command('list', 'list packages installed')
  .command('publish', 'publish the package')
  .parse(process.argv);





    
