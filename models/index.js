let mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/mern-sei-26', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

module.exports.User = require('./user')