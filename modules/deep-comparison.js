'use strict';

module.exports = deepCompareModule();

function deepCompareModule(){
  return {
    deepEqual: x
  };
  function x(item1, item2){
    if(item1 === item2){
      return true;
    }
    if( item1 === null || typeof item1 !== 'object' || 
        item2 === null || typeof item2 !== 'object'){
      return false;
    }
    var propsInItem1 = 0, propsInItem2 = 0;

    for( var prop in item1){
      propsInItem1 +=1;
    }

    for( var prop in item2){
      propsInItem2 +=1;
      console.log('prop: ',prop,'\n[',prop,'] in item1: ',item1[prop],'\n[',prop,'] in item2: ',item2[prop]);
      if( !(prop in item1) || !x(item1[prop], item2[prop]) ){
        return false;
      }
    }
    return propsInItem1 === propsInItem2;
  }
}