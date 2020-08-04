var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// Use api-routes.js
// var routes = require("./routes/html-routes.js");
// app.use(routes);

app.get("/",function(req,res){
    res.render("home");
})

app.get("/projects",function(req,res){
    res.render("portfolio");
})

app.get("/contact",function(req,res){
    res.render("contact");
})



app.listen(PORT, function() {
    console.log("App listening on PORT " + "http://localhost:" + PORT);
});