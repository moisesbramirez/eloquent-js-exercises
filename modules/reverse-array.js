'use strict';
module.exports = reverseArrayModule();
function reverseArrayModule(){
  return{
    reverseArray:x,
    reverseArrayInPlace:y
  }
  function x(array){
    var result = [];
    var iterator = array.length;
    while(iterator--){
      result.push(array[iterator]);
    }
    return result;
  }
  function y(array){
    if(array.length === 1){
      return array;
    }
    else{
      var temp = array.pop();
      y(array);
      array.unshift(temp);
    }
  }
}