const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>I am a get request at home tomay putkii mari</h1>');
    res.end();
});

app.post('/', (req, res) => {
    res.send('<h1>I am a post request at home route</h1>');
    res.end();
});

app.put('/', (req, res) => {
    res.send('<h1>I am a put request at home route</h1>');
    res.end();
});

app.delete('/', (req, res) => {
    res.send('<h1>I am a delete request at home route</h1>');
    res.end();
});




module.exports = app;