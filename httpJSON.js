var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {

    if (req.method != 'GET') {
        return res.end('Please use GET method for JSON');
    }

    var urlProps = url.parse(req.url, true);
    var urlPath = urlProps.pathname;
    var date = new Date(urlProps.query.iso);

    if (urlPath == '/api/parsetime') {
        date = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    } else if (urlPath == '/api/unixtime') {
        date = {
            "unixtime": date.getTime()
        }
    }

    if (date) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(date));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(process.argv[2]);
