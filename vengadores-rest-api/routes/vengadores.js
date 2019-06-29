const crudVengadores = (app) => {



const Vengador = require('../models/vengadores.js');



//FUNCIONES DE ENDPOINTS

 //FUNCIONES DE ENDPOINTS
    //GET - Devuelve todas los vengadores en la base
    findAllVengadores = (req, res) => {
        Vengador.find((err, vengadores) => {
            if(!err){
                res.send(vengadores);
                console.log('GET /vengadores')
            }else{
                console.log('ERROR: ' + err);
            }
        });
};



//POST - Insert a new Vengador in the DB

addVengador = function(req, res) {

console.log('POST');

console.log(req.body);



var vengador = new Vengador({

id: req.body.id,
personaje: req.body.personaje,
raza: req.body.raza,
mundo: req.body.mundo,
img: req.body.img,
peliculas: req.body.peliculas,

});



vengador.save(function(err) {

if(!err) {

console.log('Created');

} else {

console.log('ERROR: ' + err);

}

});


res.send(vengador);

};



//Rutas de la API, asociadas a una función

app.get('/vengador', findAllVengadores);

app.post('/vengador', addVengador);

}



module.exports = crudVengadores;