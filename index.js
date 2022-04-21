const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

app.get('/', (req, res )=>{
    res.send('I am code Node !!, iam new code')
});

const users = [
    {id:1, name:'Jodo', email:'jodu@gamil.com', phone:'017202222'}, 
    {id:2, name:'Modus', email:'Modhu@gamil.com', phone: '01720333'},
    {id:3, name:'Ram', email:'ram@gamil.com', phone: '017204444'},
    {id:4, name:'Rama', email:'ram@gamil.com', phone: '017205555'},
    {id:5, name:'Sam', email:'ram@gamil.com', phone: '0172057888'},
    {id:6, name:'Samu', email:'ram@gamil.com', phone: '017205777'},

]

app.get('/users',(req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    console.log('query', req.query);
   
} ) 




app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id= parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user',(req, res) =>{
    console.log('request', req.body);
    const user =req.body;
    user.id = user.length + 1;
    users.push(user);
    res.send(user);
})



app.listen(port, ()=>{
    console.log('Listening to port', port);
})