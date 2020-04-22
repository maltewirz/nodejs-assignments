const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
    console.log('server is listening');
});