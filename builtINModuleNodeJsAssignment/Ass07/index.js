const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('<h1>I Am Happy To Learn Full Stack Development From PW Skills !</h1>');
    }
    
    res.end();
});
server.listen(5002);
console.log('Local server is running');