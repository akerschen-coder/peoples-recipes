const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/grandmassecrets', {

});

module.exports = mongoose.connection;