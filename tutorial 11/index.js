const express = require('express');
const app = express();
PORT = 3000;


app.get("/", (req, res) => {
    res.send(`<h2> I am home page</h2>`);
})

// app.get("/products/:id", (req, res, next) => {
//     if(!isNaN(req.params.id)){
//         res.send(`<h1> ID is : ${req.params.id}`);
//         return;
//     }
//     next();
// })


app.get('/products/:value', (req, res, next) => {
    const value = req.params.value;
    if(/^[0-9]+$/.test(value)){
        return res.send(`<h1> ID is = ${value}</h1>`);
    }
    
    if(/^[a-zA-Z]+$/.test(value)){
        return res.send(`<h1> ID is = ${value}</h1>`);
    }
    next();
})


app.use((req, res) => {
    res.status(404).send({
        message: 'Not a valid route'
    });
});

app.use((req, res) => {
    res.status(404).send({
        message: 'not a valid route'
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running http://localhost:${PORT}`)
})