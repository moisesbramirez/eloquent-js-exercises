'use strict';

var sumRange = require('./modules/sum-range');

// console.log(sumRange.range(1,10));
// console.log( sumRange.sum( sumRange.range(1,10) ) );
// console.log(sumRange.range(1,10,2));
// console.log(sumRange.range(5,2,-1));

var revArrMod = require('./modules/reverse-array');

// var a = [1,2,3,4,5,6];
// var b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log('a before call: ',a);
// console.log('b before call: ',b);
// console.log( revArrMod.reverseArray(a));
// var c = revArrMod.reverseArrayInPlace(b);
// console.log(c);
// console.log('a after call: ',a);
// console.log('b after call: ',b);

var listMod = require('./modules/list');

// var arr = [1,2,3,4,5,6];
// var tempList = listMod.arrayToList(arr.slice(0));//clone of arr
// var prepend = listMod.prepend('nubs', tempList);

// // console.log('arr toList: ',listMod.arrayToList( arr.slice(0) ));//mutates arr so using clone of arr
// // console.log('tempList toArray: ', listMod.listToArray(tempList) );
// // console.log('prepend: ', listMod.prepend('nubs', tempList));
// console.log('PREPEND: \n',prepend);
// console.log('\n\nnth: \n', listMod.nth(prepend,1) );

var dCMod = require('./modules/deep-comparison');

var item1 = {
              here: {is: "an"}, 
              object: 2, 
              nest:{
                yeah:{
                  max:{
                    to:'the'
                  }
                }, 
                creep:'yea'
              }
            },
    item2 = {here: 1, object: 2},
    item3 = {here: {is: "an"}, object: 2},
    item4 = [1,2,3,4,5,6],
    item5 = [1,2,3,4,5],
    item6 = {
              here: {is: "an"}, 
              object: 2, 
              nest:{
                yeah:{
                  max:{
                    to:'the'
                  }
                }, 
                creep:'yea'
              }
            };
console.log(dCMod.deepEqual(item1, item6));
