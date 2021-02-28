// Demo server

var finalhandler = require("finalhandler");
var http = require("http");
var serveIndex = require("./index.js");
//var serveIndex = require('serve-index')
var serveStatic = require("serve-static");
var index = serveIndex(".", { icons: true });
var serve = serveStatic(".");
var server = http.createServer(function onRequest(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, function onNext(err) {
    if (err) return done(err);
    index(req, res, done);
  });
});
server.listen(3000);
