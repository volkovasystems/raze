
const assert = require( "assert" );
const raze = require( "./raze.js" );

assert.ok( raze( ) );

assert.ok( raze( null ) );

assert.ok( raze( undefined ) );

assert.ok( raze( false ) );

assert.ok( raze( true ) );

assert.ok( raze( "hello world" ) );

assert.ok( raze( [ 1, 2, 3 ] ) );

assert.ok( raze( [ ] ) );

console.log( "ok" );
