
// importo o traigo express para mi codigo (para poderlo usar)
const express = require('express')

//traer, importar la conexion
const {conectarBD}=require('../database/conexion.js')

//traer las rutas
const rutas=require('../routes/rutas.js')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.despertarBD()
        this.enrutarPeticion()

    }
    encederServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido..."+process.env.PUERTO)
        })        

    }

    enrutarPeticion(){   
        
        this.app.use('/',rutas)

    }

    despertarBD(){ 

    conectarBD()  

    }
}

module.exports=ServidorModelo