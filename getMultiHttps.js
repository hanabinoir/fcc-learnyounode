var http = require('http');
var bl = require('bl');
var urls = [];
var responses = [];
var count = 0;

for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}


for (var i = 0; i < urls.length; i++) {
    getHttp(i);
}

function getHttp(index) {
    http.get(urls[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            responses[index] = data.toString();
            count++;

            if (count == urls.length) {
                for (var i = 0; i < count; i++) {
                    console.log(responses[i]);
                }
            }
        }));
    });
}
