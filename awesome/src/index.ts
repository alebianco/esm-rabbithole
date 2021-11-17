import assert from 'assert';

import foo from "foo";

// https://sokra.github.io/interop-test/
// https://github.com/johnloy/esm-commonjs-interop-manual#prefer-named-exports

console.log(foo);
assert(typeof foo === 'string' && foo === 'foo');