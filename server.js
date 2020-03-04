const express = require('express')
const path = require('path')
const servefavicon = require('serve-favicon')
const logger = require('morgan')

const app = express();

//configs
require('dotenv').config()
require('./config/database')


// Middleware
app.use(logger('dev'));
app.use(express.json());

app.use(servefavicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Routes - serving up files
app.use('/api/users', require('./routes/api/users'))
app.use('/api', require('./routes/api/salon'))
app.use('/api/salon', require('./routes/api/reviews'))
app.use('/api/salon', require('./routes/api/schedule'))

app.get('*/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})




//App Listening 
const Port = process.env.PORT || 3001;

app.listen(Port, () => {
  console.log(`Express app listening on port ${Port}`)
});