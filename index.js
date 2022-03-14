"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.get('/', function (_req, _res) {
    _res.send('GoLinks API server is working!');
});
app.listen(port, function () { return console.log("GoLinks API listening at http://localhost:".concat(port)); });
