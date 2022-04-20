const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());

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
    res.send(users);
} ) 




app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id= parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.listen(port, ()=>{
    console.log('Listening to port', port);
})