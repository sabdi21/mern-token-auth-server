//Require needed packages
let express = require('express')
let cors = require('cors')
let morgan = require('morgan')
// let rowdylogger = require('rowdy-logger')

//instantiate app
let app = express()

//set-up middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '30mb' }))

//Routes
app.use('/auth', require('./controllers/auth'))

app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 9000)