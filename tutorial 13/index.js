const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const myMiddleWare = (req, res, next) => {
    console.log('Middle ware function');

    req.currentTime = new Date(Date.now());
    next();
}
app.use(myMiddleWare);


app.get("/", myMiddleWare, (req, res) => {
    console.log('I am home. ' + req.currentTime);
    res.send('hi all');
})

app.get("/about", (req, res) => {
    console.log('I am About. ' + req.currentTime);
    res.send('hi all, I am about');
});








app.listen(PORT, () =>{
    
    console.log(`Server is running at http://localhost:${PORT}`);
})