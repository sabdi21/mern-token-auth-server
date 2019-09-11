let router = require('express').Router()
let jwt = require('jsonwebtoken')
let db = require('../models')
require('dotenv').config()

router.post('/login', (req, res) => {
    res.send('STUB - post /auth/login')
})

router.post('/signup', (req, res) => {
    db.User.findOne({ email: req.body.email })
    .then(user => {
        // if user exist, do not let them create a duplicate account
        if(user) {
            return res.status(409).send({ message: 'Email address in use' })
        }

        //Good - they dont exist yet
        db.User.create(req.body)
        .then(newUser => {
            //we can assign them a token, lets make them a shiny new token!
            let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, { 
                expiresIn: 60 * 60  * 8 //(in seconds = 1 hr)
            })
            res.send({ token })
        })
        .catch(err => {
            console.log('Error when creating new user', err)
            res.status(500).send({ message: 'Error creating user' })
        })
    })
    .catch(err => {
        console.log('Error in POST /auth/signup', err)
        res.status(503).send({ message: 'Something wrong, prob DB related, or you made a typo' })
    })
  
})

//NOTE: User should be logged in to access this route (route should be protected)
router.get('/current/user', (req, res) => {
    res.send('STUB - Current User Data')
})


module.exports = router