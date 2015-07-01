'use strict';
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var flatten = require('flattening');
console.log('Flattening:\n',flatten (arrays));
// → [1, 2, 3, 4, 5, 6]


var ancestors = JSON.parse( require('ancestry') );
// Your code here.
var motherChildAgeDiff = require('age-diff');
console.log('\n\nMother-Child Age Difference:\n', motherChildAgeDiff(ancestors));
// → 31.2


// Your code here.
var averageAgePerCentury = require('age-per-centry');
console.log('\n\nHistorical Life Expectancy:\n', averageAgePerCentury(ancestors));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94 

// Your code here.
var every = require('every'),
    some = require('some');
console.log('\n\nEvery And Then Some:\n',every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false