#!/usr/bin/env node

var program = require('commander');
console.log("testing");

program
  .option('-id, --instanceId', 'instanceId')
  .parse(process.argv);

var pkgs = program.args;

if (!pkgs.length) {
  console.error('packages required');
  process.exit(1);
}

console.log("test");
if (program.force) console.log('  force: install');
pkgs.forEach(function(pkg){
  console.log('  install : %s', pkg);
});
console.log("test2");