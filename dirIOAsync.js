var fs = require('fs');
var path = require('path');
var extInput = '.' + process.argv[3];

fs.readdir(process.argv[2], 'utf8', function (err, list) {
    list.forEach(function (file) {
        var ext = path.extname(file);

        if (ext == extInput) {
            console.log(file);
        }
    })
});
