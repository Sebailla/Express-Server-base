import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import viewsRouter from './routers/views.router.js'

//?------------------------------
//?        Express server
//?------------------------------

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Config /public
app.use(express.static(__dirname + '/public'))

// Corremos Server
const httpServer = app.listen(8080, () => { console.log('Server run on localhost:8080/ ....') })

//?------------------------------
//?            Socket
//?------------------------------

const io = new Server(httpServer)

// Socket
io.on('connection', (socket)=>{
  console.log('New Connection')
})

//?----------------------------------------------
//?     Configuración de vistas de handlebars
//?----------------------------------------------

// Inicializamos motor
app.engine('handlebars', handlebars.engine())

// Path de vistas
app.set('views', __dirname + '/views')

//Indicamos motor a usar
app.set('view engine', 'handlebars')

//?------------------------------
//?            Routers
//?------------------------------

app.use('/', viewsRouter)

//?-------------------------------------------