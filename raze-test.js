
const assert = require( "assert" );
const raze = require( "./raze.js" );

assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ], "should be equal" );

assert.equal( raze( arguments ).length != 0, true, "should be true" );

assert.deepEqual( raze( ), [ ], "should be empty array" );

assert.deepEqual( raze( NaN ), [ ], "should be empty array" );

assert.deepEqual( raze( Infinity ), [ ], "should be empty array" );

assert.deepEqual( raze( true ), [ ], "should be empty array" );

assert.deepEqual( raze( [ ] ), [ ], "should be empty array" );

assert.deepEqual( raze( { } ), [ ], "should be empty array" );

assert.deepEqual( raze( Symbol.for( "hello" ) ), [ ], "should be empty array" );

assert.deepEqual( raze( Object ), [ ], "should be empty array" );

assert.deepEqual( raze( function Hello( ){ } ), [ ], "should be empty array" );

console.log( "ok" );
