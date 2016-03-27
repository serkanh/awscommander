#!/usr/bin/env node

var program = require('commander');


program
  .option('-id, --instanceId', 'instanceId')
  .action(function(cmd,params){
     switch(cmd){
         case "getInstanceId":
            console.log("getInstanceId called with"+params)
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
