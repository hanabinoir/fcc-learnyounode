var dirFilter = require('./dirFilterModule.js');
var dir = process.argv[2];
var extInput = process.argv[3];

var showFilterResults = function (err, list) {
    if (err) {
        console.log(err);
    }

    list.forEach(function(file) {
        console.log(file);
    });
}

dirFilter(dir, extInput, showFilterResults);
