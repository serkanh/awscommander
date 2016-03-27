#!/usr/bin/env node

var program = require('commander');
var AWS = require('aws-sdk');

var ec2 = new AWS.EC2({region: 'us-east-2'});

program
  .action(function(cmd){
     switch(cmd){
         case "getInstanceId":            
            console.log("getInstanceId called with "+program.args[1])
            // create the AWS.Request object
            var request = ec2.describeInstances(function(error, data) {
                if (error) {
                    console.log(error); // an error occurred
                } else {
                    console.log(data); // request succeeded
                }
            });          
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
