var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, str) {
    var strList = str.split('\n');
    var count = 0;

    while (count < strList.length) {
        count ++;
    }

    console.log((count - 1));
});
