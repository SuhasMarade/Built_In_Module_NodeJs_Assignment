const fs = require('fs');
const pa = require('path');

fs.readFile('d:/builtINModuleNodeJsAssignment/Ass02/nodejs_architecture.txt',function(err, data){
    if(err){
        console.log('Error', err);
        return err;
    }
    console.log('Data :', data.toString());
    return data;
});
