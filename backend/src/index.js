const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());


app.use(cors());
//app.use(cors({origin:'www.meuapp.com'}));

//diz que nosso app enviara requisicoes em formato json no nosso app
app.use(express.json());

//apos a express.json
app.use(routes);

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});





/**
 *  configurar banco de dados podemos usar duas abordagens:
 *  Driver: select * from Users
 *  QueryBuilder: table('users').select('*').where()
 * USAREMOS O KNEX QUERYBUILDER  
 * $ npm install knex --save
 * $ npm install pg
 */

app.listen(3333);

