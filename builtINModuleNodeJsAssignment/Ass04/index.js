const fs = require('fs');
let node_adv = "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client request without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes develpement process easier."
fs.appendFile('./Ass02/nodejs_architecture.txt',node_adv, function(err){
    if(err){
        throw err;
    }
    console.log("File is updated")
});
fs.readFile('./Ass02/nodejs_architecture.txt', function(error, data){
    if(error){
        console.log('Error :', error);
    }
    console.log('Data :', data.toString());
});