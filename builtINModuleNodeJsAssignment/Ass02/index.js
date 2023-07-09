const fs = require('fs');

let node_info = "Node.js is a platform that utilizes javascript and is primarily employed for developing web applications that are hightly focusedon input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using google Chrome's V8 Javascript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet";

fs.writeFile('Ass02/nodejs_architecture.txt', node_info , function(err) {
    if(err) throw err;
    console.log("file is created");
} )