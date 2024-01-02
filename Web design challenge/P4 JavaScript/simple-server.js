const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1 style="text-align:center">hello</h1>');
    res.end();
})
server.listen(6060);



//console.log(server.listen)
