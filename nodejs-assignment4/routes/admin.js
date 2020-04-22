const express = require('express');
const router = express.Router();

let users = [];

router.get('/users', (req, res, next) => {
    res.render('users', {
        users: users,
        path: '/users'
    });
});

router.post('/users', (req, res, next) => {
    users.push(req.body.user);
    res.redirect('/users');
});

router.get('/', (req, res, next) => {
    res.render('home', {
        path: '/'
    });
});

exports.routes = router;