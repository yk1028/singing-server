"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
