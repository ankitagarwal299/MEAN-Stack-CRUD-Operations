const express = require('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const {mongoose} = require ('./db.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

// app.get('*', function(req, res) {
//   res.sendFile('C:\Projects\NodeJS\AngularApp\dist\AngularApp\index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });

app.listen(3000, ()=>{
  console.log('Server started at port : 3000');
});

// importing database controllers
var employeeController = require('./controllers/employeeController.js');

//middleware function
app.use('/employees', employeeController);

