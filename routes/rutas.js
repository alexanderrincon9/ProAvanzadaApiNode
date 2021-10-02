

const {Router}=require('express')

// una variable que personaliza mis rutas
const rutas=Router()

//rutas del api
rutas.get('/avanzada/v1/juagadores', function (req, res) {
    res.send('peticion de tipo GET (para buscar todos los jugadores)')
})

rutas.get('/avanzada/v1/juagadores/id', function (req, res) {
    res.send('peticion de tipo GET (para buscar un jugador)')
})

rutas.post('/avanzada/v1/juagadores', function (req, res) {
    res.send('peticion de tipo POST (para insertar)')
  })

rutas.put('/avanzada/v1/juagadores/id', function (req, res) {
    res.send('peticion de tipo PUT (para modificar)')
  })

  
rutas.delete('/avanzada/v1/juagadores/id', function (req, res) {
    res.send('peticion de tipo DELETE (para eliminar)')
  })

  module.exports=rutas