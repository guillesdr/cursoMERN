const express = require('express');
const cors = require('cors');
const app = express();


//setting
//CONFIGURACION DEL SERVIDOR
app.set('port', process.env.PORT || 4000);
//app.set('appName', 'api');
const appName = '/api';

//middlewares
//FUNCIONES QUE SE EJECUTAN ANTES QUE SE LLEGUEN A LAS RUTAS O URL
//cors hace que 2 servidores intercambien datos entre ellos
app.use(cors());
app.use(express.json());

//routes
//url que la app react va a poder visitar
//pruebas
//app.get(appName + '/users', (req, res) => res.send('Users Routes'));
//app.get(appName + '/notes', (req, res) => res.send('Notes Routes'));

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;
