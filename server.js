var http = require("http");
var PORT = 7000; //C9 gives us 8080-8082
var PORTTWO = 7050;

function handleRequest(request, response) {
    response.end("Hello World! from 7000");
}

function handleRequestTwo(request, response) {
    response.end("Hello World! from 7050");
}

var server = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequestTwo);


server.listen(PORT, function() {
    console.log("Server listening on " + PORT);
});

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on " + PORTTWO);
});