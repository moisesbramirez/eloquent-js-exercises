'use strict';
var Vector = require('vector');


console.log('A Vector Type:\n',new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


var TextCell = require('text-cell.js'),
    StretchCell = require('stretch-cell.js');

var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log('\n\nAnother Cell:\n',sc.minWidth() );
// → 3
console.log(sc.minHeight() );
// → 2
console.log(sc.draw(3, 2) );
// → ["abc", "   "]

