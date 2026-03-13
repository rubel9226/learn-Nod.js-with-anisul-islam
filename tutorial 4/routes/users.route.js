const express = require('express');
const router = express.Router();



router.get('/register', (req, res) => {
    res.send('<h1>Hello World!, I register</h1>');
    res.end();
});


router.get('/dashboard', (req, res) => {
    res.send('<h1>Hello World!, I am dashboard</h1>');
    res.end();
});








router.post('/', (req, res) => {
    res.send('<h1>Hello World!, I am Post</h1>');
    res.end();
});

router.put('/', (req, res) => {
    res.send('<h1>Hello World!, I am Put</h1>');
    res.end();
});

router.delete('/', (req, res) => {
    res.send('<h1>Hello World!, I am delete</h1>');
    res.end();
});

router.patch('/', (req, res) => {
    res.send('<h1>Hello World!, I am patch</h1>');
    res.end();
});



module.exports = router;


