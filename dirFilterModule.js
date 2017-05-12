module.exports = function (dir, extInput, extFilter) {
    var fs = require('fs');

    fs.readdir(dir, 'utf8', extFilter);
}
