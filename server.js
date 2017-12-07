var http = require("http");
var PORT = 7000; //C9 gives us 8080-8082

function handleRequest(request, response) {
    response.end("Hello World!");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on " + PORT);
});
