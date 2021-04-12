const fs = require('fs')
const hostname = '127.0.0.1';
const port = 3001;
const http = require('http');
const path = require('path');

const server = http.createServer((req,res)=>{
    let url = req.url;
    res.setHeader('content-type', 'text/html');

    if(url === '/' || url === '/home'){
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            console.log(data)
            res.end(data);
        });
    }
    else if(url === '/about'){
        fs.readFile(path.join(__dirname,'about.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname,'contact.html'),'utf-8',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }

    
  });
  
  server.listen(port,hostname, ()=>{
      console.log(`Server is running at http://${hostname}:${port}/`);
  });