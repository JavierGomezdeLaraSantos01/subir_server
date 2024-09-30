const express = require('express');
const videojuegosController = require('../controller/videojuegosController')

const router = express.Router();

router.get('/',videojuegosController.traerVideojuegos)

router.get('/:usuario',videojuegosController.traeMisVideojuegos)

router.get('/queVideojuego/:id',videojuegosController.buscarVideojuego)

router.get('/todas/todasResenas',videojuegosController.traeteTodas)

router.get('/filtrar/:puntuacion',videojuegosController.filtrado)

router.post('/',videojuegosController.crearVideojuego)


router.put('/',videojuegosController.editarVideojuegos);



router.delete('/:id',videojuegosController.eliminarVideojuegos);



module.exports = router;