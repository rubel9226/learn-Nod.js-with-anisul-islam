const express = require('express');
const app = express();
PORT = 3001;
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ Extended: false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({ Extended: false}));
app.use(express.json());

app.get('/register', (req,res) => {
    res.sendFile(__dirname + "/views/register.html");
})


app.post("/register", (req, res) => {
    const {fullName, age} = req.body;
    // const age = req.body.age;
    res.send(`<h2> Your name is ${fullName} and Your age is ${age}`)
});



app.listen(PORT, (req, res) => {
    console.log(`Server is running: http://localhost:${PORT}`);
});