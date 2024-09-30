const bd = require('../conexion/db');

const videojuegosController = {

    traerVideojuegos(req,res){

        bd.query('SELECT * FROM videojuegos ORDER BY id_videojuegos DESC LIMIT 3',(err,results)=>{

            if (err) {
                console.log(err);
                
            }

            res.json(results).status(200);
            

        })

    }, 
    
    traeMisVideojuegos(req,res){

        let usuario = req.params.usuario;
        
        bd.query('SELECT * FROM videojuegos WHERE usuario_escritor = ?',[usuario],(err,resultados)=>{

            if (err) {
                res.json({error: 'Error en la consulta'}).status(500)
            }

            res.json(resultados).status(200);
            

        })
    },
    
    crearVideojuego(req,res){

        let usuario = req.body.usuario_escritor;
        let review = req.body.review;
        let nombre = req.body.nombre;
        let puntuacion = req.body.puntuacion;
        

        // let {usuario_escritor, review, nombre, puntuacion } = req.body

        bd.query('INSERT INTO videojuegos(nombre,review,puntuacion,usuario_escritor) VALUES (?,?,?,?)'
            ,[nombre,review,puntuacion,usuario],(err,resultados)=>{
                
                if (err) {
                    res.json({error: 'Error en la insercion'}).status(500)
                }

                res.json({insercion: 'Okay'}).status(200)
                
            })

    },

    buscarVideojuego(req,res){

       let {id} = req.params;
        
        bd.query('SELECT * FROM videojuegos WHERE id_videojuegos = ?',[id],(err,resultados)=>{


            if (err) {
                res.json({error:'Error en la consulta'}).status(500)
            }
            
            res.json(resultados[0]).status(200)
            

        })

    }, 


    editarVideojuegos(req,res){

        let id = req.body.id_videojuegos;
        let {nombre,review,puntuacion} = req.body;

        bd.query('UPDATE videojuegos SET nombre = ?,puntuacion = ?,review = ? WHERE id_videojuegos = ?',
            [nombre,puntuacion,review,id],(err,resultado)=>{

                if (err) {
                    res.json({error:'Error en la consulta'}).status(500)
                }

                res.json({mensaje: 'Okay'}).status(200)
                
            })
        
    },

    eliminarVideojuegos(req,res){
        
        let id = req.params.id;

        bd.query('DELETE FROM videojuegos WHERE id_videojuegos = ?',[id],(error,resultados)=>{

            res.json({borrado:'Okay'}).satus(200);
            

        })

    },

    traeteTodas(req,res){

        console.log('Holas');
        
        bd.query('SELECT * FROM videojuegos',(err,resultados)=>{

           res.json(resultados).status(200)
            
        })
    }, 
    
    filtrado(req,res){

        let valor = req.params.puntuacion;
        
        bd.query('SELECT * FROM videojuegos WHERE puntuacion >= ?',[valor],(err,resultado)=>{

            res.json(resultado).status(200);
            

        })

    }

}

module.exports = videojuegosController;