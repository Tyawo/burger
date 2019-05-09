var orm = require("./config/orm.js");

var bodyParser = require("body-parser"); 

var exphbs = require("express-handlebars");

var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


// select all burgers
orm.selectAll(function(burgers, err) {
    if (err) {
        return res.status(501).json({
            message: "database error"
        });
    }
res.render("index");
});
// Insert one

// orm.insertOne()
// // update one
// orm.updateOne()