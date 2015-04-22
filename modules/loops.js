'use strict';
module.exports = loopModule();

function loopModule(){
  var numbTimes = 7;
  return {
    byTheBook: x
  };

  function x(){
    var output = '#';
    for(var i = 0; i < numbTimes; i+=1){
      console.log(output);
      output +='#';
    }
  }
}
