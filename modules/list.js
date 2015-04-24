'use strict';
module.exports = listModule();

function listModule(){
  return{
    arrayToList:x,
    listToArray:y,
    prepend:a, 
    nth:bRecursive
  };
  function x(array){
    if(array.length === 0){
      return null;
    }
    var list = {}
    list['value'] = array.shift();
    list['rest'] = x(array);
    return list;
  }
  function y(list){
    return digger(list,[]);
    function digger(restOfList, array){
      array.push(restOfList.value);
      if(restOfList.rest){
        digger(restOfList.rest, array);
      }
      return array;
    }
  }
  function a(element, list){
    var result = {};
    result['value'] = element;
    result['rest'] = list;
    return result;
  }
  function b(list, position){
    var result = list;
    while(--position && result.rest !== null){
      result = result.rest;
    }
    return (position)?undefined:result;
  }
  function bRecursive(list, position){
    if(--position && list.rest !== null){
      return bRecursive(list.rest, position);
    }
    return (position)?undefined:list;
  }
}