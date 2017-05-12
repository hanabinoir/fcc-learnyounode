var dirFilter = require('./dirFilterModule.js');
var path = require('path');
var dir = process.argv[2];
var extInput = '.' + process.argv[3];

dirFilter(dir, extInput, extFilter);

function extFilter(err, list) {
    // var filteredList = [];

    if (err) {
        console.error(err);
    }

    list.forEach(function (file) {
        var ext = path.extname(file);

        if (ext == extInput) {
            // filteredList.push(file);
            console.log(file);
        }
    });
    // return filteredList;
}
