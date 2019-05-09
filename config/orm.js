var connection = require("../config/connection");

var orm = {
    selectAll: function (table, cb) {
        var dbQuery = "SELECT * FROM "
            + table + " ; ";

        connection.query(dbQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    
    insertOne: function(table, cols, vals, cb) {  
        var dbQuery = "INSERT INTO" + table + " (" + cols.toString() + ") " + "VALUES(" + createQmarks(vals.length) + ") "
        console.log (dbQuery);

        // connection.query(dbQuery, vals. function (err, res) {
        //     if (err) {
        //         throw err;
        //     },
        //     cb(res);
        // });                     
        }
       };


app.post("/burgers", function (req, res) {
    res.render("all", { burgers: burgers });
});

// Select all
app.get("/burgers/:name", function (req, res) {
    var type = burgers.find(function (burger) {
        return burger.name === req.params.name;
    })
    res.render("single", type);
});
app.put();


module.exports = exports(connection);