"use strict";

const raze = require( "./raze.js" );

console.log( raze( [ 1, 2, 3 ] ) );
console.log( raze( [ { "name": "simple" } ] ) );
console.log( raze( [ ] ) );
console.log( raze( [ { } ] ) );
console.log( raze( ) );
