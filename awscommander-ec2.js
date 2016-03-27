#!/usr/bin/env node

var program = require('commander');


program
  .action(function(cmd){
     switch(cmd){
         case "getInstanceId":            
            console.log("getInstanceId called with "+program.args[1])
            break;
         case "listAllInstances":
            console.log("getInstanceId called")
            break;          
     }
  })
  
program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ custom-help --help');
    console.log('    $ custom-help -h');
    console.log('');
});

program.parse(process.argv);
  

if(process.argv.length <= 2){
  program.help();  
};
