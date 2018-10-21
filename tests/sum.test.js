import sum from './../scripts/sum';

// const sum = require('./../scripts/sum.js');
// import test from 'jest';

describe("sum function testing", () => {
	test('adds 1 + 2 to equal 3', () => {
	  expect(sum(1, 2)).toBe(3);
	});
});
describe("testing", () => {
	test('adds 1 + 2 to equal 3', () => {
	  expect(sum(1, 2)).toBe(3);
	});
});