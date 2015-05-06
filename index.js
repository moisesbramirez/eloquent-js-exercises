'use strict';
var mod1 = require('flattening');

var testArr = [
  [8,0,5,8,2,2,3,6,8,1],
  ['the','force','is','strong','in','this','one'],
  ['one','ring','to','rule','them','all']
];

// console.log(mod1.flattenArrs(testArr));

var ancestors = JSON.parse( require('ancestry') );
var mod2 = require('age-diff');
console.log(mod2.meanMomWhenChildAge(ancestors));