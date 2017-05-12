var inputs = process.argv;
var nums = [];
var sum = 0;

for (var i = 2; i < inputs.length; i++) {
    nums.push(inputs[i]);
}

for (var i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
}

console.log(sum);
