const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
        const parseURL = url.parse(req.url, true);

        if (parseURL.pathname === '/index') {
		fs.readFile('index.html', (err, html) => {
			if (err) {
				res.send(500, {error: err});
			}
                	res.writeHead(200, {'Content-type':'text/html'});
			res.write(html);
			return res.end();
		});
	} else {
                res.writeHead(404, {'Content-type':'text/plain'});
                return res.end();
	}
}).listen(3000);
