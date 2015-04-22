'use strict';
module.exports = fizzBuzzModule();

function fizzBuzzModule(){
  var iterator = 1;
  var maxIterations = 100;
  return {
    byTheBook: y,
    byTheBookPartTwo: z
  };
  function y(){
    while(iterator < maxIterations){
      if(iterator % 3 === 0){
        console.log('Fizz iterator is: ',iterator);
      }
      else if(iterator % 5 === 0){
        console.log('Buzz iterator is: ',iterator);
      }
      iterator +=1;
    }
  }
  function z(){
    while(iterator < maxIterations){
      if(iterator % 3 === 0 && iterator % 5 === 0){
        console.log('FizzBuzz iterator is: ',iterator);
      }
      else if(iterator % 3 === 0){
        console.log('Fizz iterator is: ',iterator);
      }
      else if(iterator % 5 === 0){
        console.log('Buzz iterator is: ',iterator);
      }
      iterator +=1;
    }
  }
}