let router = require('express').Router()

router.post('/login', (req, res) => {
    res.send('STUB - post /auth/login')
})

router.post('/signup', (req, res) => {
    res.send('STUB - post /auth/signup')
})

//NOTE: User should be logged in to access this route (route should be protected)
router.get('/current/user', (req, res) => {
    
    res.send('STUB - Current User Data')
})


module.exports = router