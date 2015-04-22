'use strict';

module.exports = chessBoardModule();

function chessBoardModule(){
  return {
    createBoard:x
  }
  function x(width, height){
    var SIZE= width||8;
    var result = '';
    for(var i = 0; i < (height||SIZE); i +=1){
      for(var j = 0; j < SIZE; j+=1){
        if(i%2 === 0){
          (j%2===0)?result+='X':result+='0';
        }
        else {
          (j%2===0)?result+='0':result+='X';
        }
      }
      if( i !== (height||SIZE)-1){
        result +='\n'; 
      }
    }
    return result;
  }
}