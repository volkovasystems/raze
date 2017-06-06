
const assert = require( "assert" );
const raze = require( "./raze.js" );

assert.deepEqual( raze( ), [ ], "should have empty array" );

assert.deepEqual( raze( null ), [ ], "should have empty array" );

assert.deepEqual( raze( undefined ), [ ], "should have empty array" );

assert.deepEqual( raze( NaN ), [ ], "should have empty array" );

assert.deepEqual( raze( Infinity ), [ ], "should have empty array" );

assert.deepEqual( raze( false ), [ ], "should have empty array" );

assert.deepEqual( raze( true ), [ ], "should have empty array" );

assert.deepEqual( raze( "hello world" ), [ ], "should have empty array" );

assert.deepEqual( raze( 123 ), [ ], "should have empty array" );

assert.deepEqual( raze( [ ] ), [ ], "should have empty array" );

assert.deepEqual( raze( { } ), [ ], "should have empty array" );

assert.deepEqual( raze( { "name": "simple" } ), [ ], "should have empty array" );

assert.deepEqual( raze( Symbol.for( "hello" ) ), [ ], "should have empty array" );

assert.deepEqual( raze( Object ), [ ], "should have empty array" );

assert.deepEqual( raze( Object.protype ), [ ], "should have empty array" );

assert.deepEqual( raze( function hello( ){ } ), [ ], "should have empty array" );

assert.deepEqual( raze( [ 1, 2, 3 ] ), [ 1, 2, 3 ], "should be equal" );

assert.deepEqual( raze( [ { "name": "simple" } ] ), [ { "name": "simple" } ], "should be equal" );

console.log( "ok" );
