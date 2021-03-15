const connection = require('./connection')
const mongoose = require('mongoose')
const connectionString = connection.mongo.connectionString
if(!connectionString) {
	console.error('MongoDB connection string missing!')
	process.exit(1)
}
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

