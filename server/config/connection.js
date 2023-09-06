const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
mongodb+srv://kshirvanyan2000:Shivisl555@cluster0.4l6eu8r.mongodb.net/?retryWrites=true&w=majority