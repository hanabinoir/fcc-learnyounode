var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strList = str.split('\n');
var count = 0;

while (count < strList.length) {
    count ++;
}

console.log((count - 1));
