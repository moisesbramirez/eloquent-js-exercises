'use strict';

module.exports = rangeModule();
function rangeModule(){
  return{
    range:x,
    sum:y
  }
  function x(start, end, step){
    var result = [];
    if(start<end){
      while(start <= end){
        result.push(start);
        start += Math.abs(step)||1;
      }
    }
    else{
      while(start >= end){
        result.push(start);
        start -= Math.abs(step)||1;
      }
    }
    return result;
  }
  function y(arrayOfNumbers){
    if(arrayOfNumbers.length === 1){
      return arrayOfNumbers[0];
    }
    else{
      arrayOfNumbers[0] += arrayOfNumbers.pop();
      return y(arrayOfNumbers);
    }
  }
}