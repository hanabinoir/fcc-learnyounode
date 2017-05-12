module.exports = function (dir, extInput, showFilterResults) {
    var fs = require('fs');
    var path = require('path');

    extInput = '.' + extInput;

    fs.readdir(dir, 'utf8', function (err, list) {
        if (err) {
            return showFilterResults(err);
        }

        var filtered = list.filter(function (file) {
            var ext = path.extname(file);
            if (ext == extInput) {
                return file;
            }
        });
        return showFilterResults(null, filtered)
    });
}
