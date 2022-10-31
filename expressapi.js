import express, { json } from "express";
import fs from "fs";
import { request } from "http";
import { resolve } from "path";
const app = express();
app.use(express.json());




app.get('/users',(req, res)=> {
    fs.readFile('./users.json',{encoding:"utf-8"},(err,data)=>{
        if (!err){
            res.send(JSON.parse(data));
        } else {
            res.send(err);
        }
    })
});

app.get('/users',(req, res)=> {
    fs.readFile('./users.json',{encoding:"utf-8"},(err,data)=>{

        if (!err){
            res.send(JSON.parse(data));
        } else {
            res.send(err);
        }
    })
});
////






app.get('/users/:id',(req, res)=> {
    fs.readFile('./users.json',{encoding:"utf-8"},(err,data)=>{
        const users = JSON.parse(data);
        const user = users.filter((user)=> user.id == req.params.id);
        if (user.length) {
            res.send(user);
        } else {
            res.send('eror not found',404);
        }

    });
});
app.post('/users',(req,res)=>{
    let users =JSON.parse(fs.readFileSync('./users.json',{encoding:'utf-8'}));
    const id =users[users.length -1].id +1;
    const user = {id,...req.body}
    users.push(user);
    fs.writeFileSync('./users.json',JSON.stringify(users));
    res.send(users,201);
});

app.put('/users/:id',(req,res)=>{

    let users = JSON.parse(
        fs.readFileSync('./users.json',{encoding: 'utf8'})
        );
   users= users.map((user) => {
        if (user.id == req.params.id) {
            user = {...req.body, id: user.id};
         return user;   
    }
    return user;
});
    fs.writeFileSync('./users.json',JSON.stringify(users));
    res.send(req.body);
}); 


app.delete('/users/:id',(req,res)=>{
    let users = JSON.parse(fs.readFileSync('./users.json',{encoding: 'utf8'})
    );
    const user = JSON.stringify(users.filter((user)=> user.id == req.params.id)) ;
    res.send(`${user}, sucssesfel deleted`);
    users = users.filter((user) => user.id != req.params.id);
    fs.writeFileSync('./users.json',JSON.stringify(users));
});







///

app.get('/products/:id',(req, res)=> {
    fs.readFile('./products.json',{encoding:"utf-8"},(err,data)=>{
        const products = JSON.parse(data);
        const product = products.filter((product)=> product.id == req.params.id);
        if (product.length) {
            res.send(product);
        } else {
            res.send('eror not found',404);
        }

    });
});
app.post('/products',(req,res)=>{
    let products =JSON.parse(fs.readFileSync('./products.json',{encoding:'utf-8'}));
    const id =products[products.length -1].id +1;
    const product = {id,...req.body}
    products.push(product);
    fs.writeFileSync('./products.json',JSON.stringify(products));
    res.send(product,201);
});

app.put('/products/:id',(req,res)=>{

    let products = JSON.parse(
        fs.readFileSync('./products.json',{encoding: 'utf8'})
        );
   products= products.map((product) => {
        if (product.id == req.params.id) {
            product = {...req.body, id: product.id};
         return product;   
    }
    return product;
});
    fs.writeFileSync('./products.json',JSON.stringify(products));
    res.send(req.body);
}); 


app.delete('/products/:id',(req,res)=>{
    let products = JSON.parse(fs.readFileSync('./products.json',{encoding: 'utf8'})
    );
    const product = JSON.stringify(products.filter((product)=> product.id == req.params.id)) ;
    res.send(`${product}, sucssesfel deleted`);
    products = products.filter((product) => product.id != req.params.id);
    fs.writeFileSync('./products.json',JSON.stringify(products));
});

app.listen(7001);   

