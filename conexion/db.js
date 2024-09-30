const mysql = require('mysql2')

const bunyan = require('bunyan')

const logBD = bunyan.createLogger({name:'Log de la BD'});

const conexion = mysql.createConnection({
    host: process.env.HOST_BD,
    user: process.env.USUARIO_BD,
    password: process.env.CONTRA_BD,
    database: process.env.BASE_BD,
    port:process.env.PUERT_DB
});

conexion.connect ( err => {

    if (err) {
        logBD.error(err)
    }

    logBD.info('Conectado satisfactoriamente')

})


module.exports = conexion 
