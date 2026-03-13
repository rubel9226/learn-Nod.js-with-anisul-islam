const app = require('./app');
PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running: http://localhost:${PORT}`);
});