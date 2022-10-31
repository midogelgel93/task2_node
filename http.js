// const http = require ('http');
import http from 'http';
import fs from 'fs';
// import { json } from 'stream/consumers';
const server=http.createServer((req,res)=>{

  
  if (req.url == '/users') {
    const users= fs.readFileSync('./users.json')
    res.end(users);
  } else if (req.url == '/products'){
    const products= fs.readFileSync('./products.json')
    res.end(products);
  } else {
    res.end("404 not found",404)
  }
    res.write("mohamed");
    res.write("galal");
  res.end(JSON.stringify([1,2,3,4,5]));
});

server.listen(7000);



