var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response) {
    response.pipe(concatStream(function (data) {
        var str = data.toString();
        console.log(str.length);
        console.log(str);
    }));
});
