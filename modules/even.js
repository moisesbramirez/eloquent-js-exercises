'use strict';

module.exports = isEven;

function isEven(number){
  if(number === 0){
    return true;
  }
  else if(Math.abs(number) === 1){
    return false ;
  }
  else{
    return isEven(Math.abs(number)-2);
  }
};