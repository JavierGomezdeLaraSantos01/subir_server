const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');

require('dotenv').config()

const usuarios = require('./router/usuariosRouter');
const videojuegos = require('./router/videojuegosRouter');

const logger = bunyan.createLogger({name: 'Servidor'});

const app = express();

app.use(cors());

app.use(express.json())

app.use('/usuarios',usuarios);
app.use('/videojuegos',videojuegos);



app.listen(process.env.PUERTO,()=>{
    logger.info('Servidor levantado');
})