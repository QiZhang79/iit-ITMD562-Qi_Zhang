var arr = [3,5,6,8,9,21,44,19,87,103,55];

var largestArray = [];
var max = Math.max.apply(null, arr);
largestArray.push(max);
arr.splice(arr.indexOf(max), 1);

var secondMax = function (numArray) {     
    arr.splice(numArray.indexOf(max), 1); 
    return Math.max.apply(null, numArray); 
};
var max2 = secondMax(arr);
largestArray.push(max2);

var thirdMax = function (numArray) {     
    arr.splice(numArray.indexOf(max), 1); 
    return Math.max.apply(null, numArray); 
};
var max3 = secondMax(arr);
largestArray.push(max3);

console.log(max, max2, max3);

/*Thoughts:
I think I need to use a loop instead... But I couldn't figure it out right now.
(sign...)
*/