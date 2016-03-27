#!/usr/bin/env node

var program = require('commander');
var AWS = require('aws-sdk');

//TODO move settings to config file
var ec2 = new AWS.EC2({region: 'us-east-1'});

program
  .action(function(cmd){
     switch(cmd){
         case "getInstanceId":            
            console.log("getInstanceId called with "+program.args[1])
            break;
         case "listAllInstances":
            // create the AWS.Request object
            var request = ec2.describeInstances(function(error, data) {
                if (error) {
                    console.log(error); // an error occurred
                } else {
                    console.log(data); // request succeeded
                }
            });        
            break;          
     }
  })
  
program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ getInstanceId <id>');
    console.log('    $ listAllInstances');
    console.log('');
});

program.parse(process.argv);
  

if(process.argv.length <= 2){
  program.help();  
};
