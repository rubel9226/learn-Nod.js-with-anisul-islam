const express = require('express');
const app = express();

const userRouter = require('./routes/users.route');
app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
    // res.status(200).json({
    //     "name" : "Rubel Hossen",
    //     message : 'Hi I am Resister Page, and I am also love Liyana',
    //     statuscode: 200
    // });
    // res.redirect('login');

    res.statusCode = 200;
    res.sendFile(__dirname+'/views/register.html')
});

app.use("/login", (req, res) => {
    // res.send('Hi ai am login page');
    // res.redirect('register')

    // res.cookie('Name', 'rubel');
    // res.cookie('age', '21');
    res.clearCookie('Name')
    res.append('id', '130000')
    res.end();
});


app.use('/', (req, res) => {
    // res.send('<h1>Hello World!, I will try to do big</h1>');
    // res.end();
    res.statusCode = 200;
    res.sendFile(__dirname+'/views/index.html')
});

app.use((req, res) => {
    res.send('<h1>404 Error route</h1>')
})







app.post('/', (req, res) => {
    res.send('<h1>Hello World!, I am Post</h1>');
    res.end();
});

app.put('/', (req, res) => {
    res.send('<h1>Hello World!, I am Put</h1>');
    res.end();
});

app.delete('/', (req, res) => {
    res.send('<h1>Hello World!, I am delete</h1>');
    res.end();
});

app.patch('/', (req, res) => {
    res.send('<h1>Hello World!, I am patch</h1>');
    res.end();
});


module.exports = app;