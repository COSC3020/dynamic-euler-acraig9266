const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(e(10) === 2.7182818011463845);
assert(e(1) === 1);
assert(e(2) === 2);
assert(e(3) === 2.6666666666666665);
assert(e(7) === 2.7182539682539684); 
assert(e(20) === 2.7182818284590455);
