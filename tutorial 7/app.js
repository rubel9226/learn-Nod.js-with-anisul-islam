const express = require('express');
const app = express();


// Query Parameter 
// app.get('/', (req, res) => {
//     const {id, name} = req.query

//     // res.send(`<h1> I am Server Js  ${id} and name: ${name}</h1>`);
//     res.send(`<h1>you id: ${id} and name: ${name} </h1>`)
// });


// Route Parameter 
app.get('/userId/:id/userName/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    // res.send(`<h1> I am Server Js  ${id} and name: ${name}</h1>`);
    res.send(`<h1>you id: ${id} and name: ${name} </h1>`)
});


// headers Parameter 
app.get('/', (req, res) => {
    const id = req.header('id');
    const name = req.header('name');

    // res.send(`<h1> I am Server Js  ${id} and name: ${name}</h1>`);
    res.send(`<h1>you id: ${id} and name: ${name} </h1>`)
});





module.exports = app;