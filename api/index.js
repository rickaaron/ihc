require('./config');

var path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);

var jwt = require('express-jwt');
var morgan = require('morgan');

const api_public = require('./routes/public');
const api_user = require('./routes/user'); 

//Middle
app.use(express.json()); // to support JSON-encoded bodies
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', '*');
  res.append('Access-Control-Allow-Headers', 'Content-Type, authorization');
  next();
});
 
//Public 
 
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));


app.set('views', path.join(__dirname, 'application/views'));
app.set('view engine', 'ejs');
//Routes

app.use('/api', api_public);
app.use('/api/user', jwt({
  secret: process.env.jwt_secret
}), api_user);


// let mipa = path.join(__dirname, '../dist/index.html');


app.get('/', function (req, res) {
  // let mipa = path.join(__dirname, '../dist/index.html');
  // console.log(mipa);
  res.json( 'Boenvenido al servidor' );
});


app.use(function (err, req, res, next) {
  console.log( '--Error token' , err);
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid-Token');
  }

});


app.get('/*', function (req, res) { 
  res.sendFile(mipa);
});

server.listen(process.env.api_port, function (err) {
  if (err) return console.log(err);
  console.log("Servidor corriendo en http://localhost:" + process.env.api_port);
});
