'use strict';

module.exports = countBs;

function countBs(string){
  return countChar(string,'B');
}

function countChar(string,character){
  var counter = 0, iterator = string.length;
   while(iterator--){
    if( string.charAt(iterator) === character ){
      counter++;
    }
  }
  return counter;
}