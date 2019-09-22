var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT=6060;

http.createServer(function(request, response) {
	if (request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
		return;
	}
	var q = url.parse(request.url, true);
	var filename = "./sources" + q.pathname;
	fs.readFile(filename, function (err, html) {
		if (err) throw err;  
		response.writeHeader(200, {"Content-Type": "text/html"});  
		response.write(html);  
		response.end();  
	});
}).listen(PORT);