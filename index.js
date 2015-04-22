'use strict';
var myLoops = require('./modules/loops');
var myFizzBuzz = require('./modules/fizzbuzz');
var myBoard = require('./modules/chessboard');

/*
  loop that calls console.log() to output
  #
  ##
  ###
  ####
  #####
*/
// myLoops.byTheBook();

/*
  loop for 1 - 100 prints 'Fizz' if x%3 == 0 or 
  'Buzz' if x%5 == 0
*/
// myFizzBuzz.byTheBook();

/*
  loop for 1 - 100 prints 'Fizz' if x%3 == 0 or 
  'Buzz' if x%5 == 0 or 
  'FizzBuzz' if x%5 && x%3 == 0;
*/
// myFizzBuzz.byTheBookPartTwo();

/*
  create a string the resembles 8x8 chess board 
  of 'X' and '0'
  X0X0X0X0
  0X0X0X0X
  X0X0X0X0
  0X0X0X0X
  X0X0X0X0
  0X0X0X0X
  X0X0X0X0
  0X0X0X0X
*/
// console.log(myBoard.createBoard());

/*
  create a board of custom size 
  X0X
  0X0
  X0X
*/
// console.log(myBoard.createBoard(3));

/*
  create a board of custom width and height 
  X0X0X0X
  0X0X0X0
  X0X0X0X
*/
console.log(myBoard.createBoard(7,3));