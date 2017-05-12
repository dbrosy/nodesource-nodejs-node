var static = require('node-static');

var publicfiles = new (static.Server)('./public');

require('http').createServer(function (request, response) {

	request.addListener('end', function () {
		publicfiles.serve(request, response);
	});

}).listen(8090);

console.log('Navigate to http://localhost:8090/.');
