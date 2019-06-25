var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var Sequelize = require('sequelize');

//connection to the MySQL database
var connection = require('./config/connection.js');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({  extended: false  }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({  defaultLayout: 'main'  }));
app.set('view engine', 'handlebars');

// set userroute to 'controller.js'  --  need to update if set as something else
var userRoutes = require('./controllers/controller.js');

app.use('/', userRoutes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Listening on PORT ' + port);
});