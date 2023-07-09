const fs = require('fs');
fs.unlink('./Ass02/nodejs_architecture.txt', function(err){
    if(err){
        throw err;
    }
    console.log("File Deleted")
});