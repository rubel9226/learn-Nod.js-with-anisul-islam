const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle', (req, res) => {
    const {base, height} = req.body;
    const result = base * height;
    res.send(`Aria of Triangle is: ${result}`);
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
});
app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const result = Math.PI * radius * radius;
    res.send(`Aria of Triangle is: ${result}`);
});



app.listen(PORT, (req, res) => {
    console.log(`Server is running: http://localhost:${PORT}`);
});