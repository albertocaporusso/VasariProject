//Per avviare app.js digita nel terminal : npm run devStart
//Prima di avviare, avvia per sicurezza in un altro terminal il server mongodb con il comando mongod
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

//Connessione al db VASARI
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Db'))

app.use(express.static('public'))
app.use(express.json())
app.use(cors({origin : 'http://localhost:3001'}))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const schedeVasariRouter = require ('./routes/schedeVasari')
const schedeGpmRouter = require ('./routes/schedeGpm')
const schedeOARouter = require('./routes/schedeOA')
const schedeRARouter = require('./routes/schedeRA')
const schedeARouter = require('./routes/schedeA')
app.use('/schedeVasari', schedeVasariRouter)
app.use('/schedeGpm', schedeGpmRouter)
app.use('/schedeOA', schedeOARouter)
app.use('/schedeRA', schedeRARouter)
app.use('/schedeA', schedeARouter)

app.listen(3000, () => console.log('Server started'))