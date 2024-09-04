const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const app = express();

const Routes = require('./routes/Routes');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));


app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'gnosis'

}))

app.use(session({
    secret: 'nose',
    resave: false,
    saveUninitialized: false
}))

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

//routes
app.use('/', Routes);

app.listen(app.get('port'), () => {
    console.log('Funcionando');
})