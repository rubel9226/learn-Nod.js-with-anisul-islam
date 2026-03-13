const express = require('express');
const app = express();

const router = require('./routs/user.routs');
app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('i am home page')
// });

app.get('/', (req, res) => {
    // const id = req.query.id;
    // const age = req.query.age;
    // const name = req.query.name;
    const {id, name, age} = req.query;
    res.send(`<h1>Student name: ${name} & age: ${age} id is: ${id} </h1>`);
});

app.get('/login', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname+'/view/index.html');
});


app.get((req, res) => {
    res.send('<h1>404 Error route</h1>')
})


module.exports = app;