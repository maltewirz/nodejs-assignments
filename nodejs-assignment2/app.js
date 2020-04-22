const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('Middleware always running');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Second Middleware');
    res.send('User Page');
});

app.use('/', (req, res, next) => {
    console.log('Second Middleware');
    res.send('Express Server Page');
});

app.listen(3000, () => {
    console.log('Server listening');
});