var express = require('express') // llamamos a Express
var app = express()

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/cervezas', (req, res) => {
  res.send('Cerveza guardada');
});

app.delete('/cervezas', (req, res) => {
  res.send('Cerveza borrada');
});

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
