const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));

const {routes} = require('./routes/admin');

app.use(routes);

app.listen(3000, () =>{
    console.log('Server is listening');
});
