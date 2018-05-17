const express = require("express");
const app = express();
const port = 55235;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/mangaRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Manga provider API started on: " + port);
