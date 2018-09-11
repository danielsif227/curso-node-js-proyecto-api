const express = require('express') // llamamos a Express
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes') // coje el index.js de dentro de la carpeta
const port = process.env.PORT || 8080 // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Mundo!' })
})

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
