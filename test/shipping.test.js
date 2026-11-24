const { test } = require('node:test');
const assert = require('node:assert');
const { fee } = require('../src/shipping');

test('1 kg costs 200', () => assert.strictEqual(fee(1), 200));
test('5 kg costs 350', () => assert.strictEqual(fee(5), 350));
test('5.5 kg costs 800', () => assert.strictEqual(fee(5.5), 800));
test('21 kg costs 1500', () => assert.strictEqual(fee(21), 1500));
test('zero or negative weight is rejected', () => {
  assert.throws(() => fee(0), RangeError);
  assert.throws(() => fee(-2), RangeError);
});
