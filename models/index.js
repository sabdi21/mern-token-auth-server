//Require needed packages
let express = require('express')
let cors = require('cors')

//instantiate app
let app = express()

//set-up middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '30mb' }))


app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 4000)