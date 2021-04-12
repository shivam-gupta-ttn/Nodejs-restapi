const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3000;
const http = require('http');
const url = require('url');


const data = fs.readFileSync('./users.json')
let users = JSON.parse(data);

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    // console.log(queryObject);
    const baseURL = req.url.substring(0, req.url.indexOf('?'));

    if (req.url === "/") {
        res.write('Go to /users')
        res.end();
    } else if (req.url === "/users" && req.method== 'GET' ) {
        
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(baseURL == '/users' && req.method == 'GET'){
        
        let user = [];
        users.find(item => {
            if(item.username.includes(queryObject.username)){
                user.push(item);
            }

        })
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(user));
        res.end();
       
    } 
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});