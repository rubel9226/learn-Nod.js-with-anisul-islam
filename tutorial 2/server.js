// Node js using and create server work is start
// const http = require('http');
// const PORT = 3000;

// const myServer = http.createServer((req, res) => {
//     res.end('<h1>Amar shonar bangla ami tomay valobashi</h1>');
// })

// myServer.listen(PORT, () => {
//     console.log(`Server is running http://localhost:${PORT}`);
// });
// Node js using and create server work is end

const app = require('./app');
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Create server Link: http://localhost:${PORT}`);
})





