// init variables, set up our serve environment 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const routes = require('./routes/quiz')

// store our secret shit with dotenv
// require('dotenv').config()

// DEV ENV
const mongoURI = 'mongodb://localhost/quiz';
	
	// PROD ENV 
	// const mongoURI = process.env.MONGO_PROD_URI;

const quiz = require('./models/quiz');

// tell express to use json()

app.use(express.json());
app.use(cors());

// position of this matter 
app.use('/', routes);

// connecting to mongodb from your application
mongoose.connect(mongoURI, { useNewUrlParser: true })
	.then(console.log('connected to mongodb'));

// make server listen on pork 3000
app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
})