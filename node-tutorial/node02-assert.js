/**
 * https://nodejs.org/docs/latest/api/assert.html
 */
//const assert = require('node:assert').strict;
const assert = require('node:assert/strict');
const { Console } = require('node:console');

let as = assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
Console.info('as' + as);

// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]