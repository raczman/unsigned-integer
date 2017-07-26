var expect = require('chai').expect;
var Integer = require('../.');

function equal(a, b) {
	expect(a).to.be.an.instanceof(Integer);
	expect(a.toString()).to.equal(b);
}

describe('Arithmetic operations', function () {
	specify('Integer#add()', function () {
		equal(Integer(21).add('400'), '421');
	});
	specify('Integer#subtract()', function () {
		equal(Integer(21).subtract('1'), '20');
		equal(Integer('9223372036854775807').subtract(1), '9223372036854775806');
	});
	specify('Integer#multiply()', function () {
		equal(Integer(21).multiply('400'), '8400');
		equal(Integer('4611686018427387903').multiply(2), '9223372036854775806');
	});
	specify('Integer#divide()', function () {
		equal(Integer(400).divide('21'), '19');
		equal(Integer('9223372036854775807').divide(2), '4611686018427387903');
	});
	specify('Integer#modulo()', function () {
		equal(Integer(400).modulo('22'), '4');
		equal(Integer('9223372036854775807').modulo(481908120), '68418967');
	});
	describe('should throw when overflow would occur', function () {
		specify('Integer#add()', function () {
			var big = Integer('18446744073709551615');
			expect(function () {big.add(1);}).to.throw(RangeError);
		});
		specify('Integer#subtract()', function () {
			expect(function () {Integer(0).subtract(100)}).to.throw(RangeError);
		});
		specify('Integer#multiply()', function () {
			var big = Integer('18446744073709551615');
			var bigger = Integer('4611686018427387905');
			expect(function () {big.multiply(2);}).to.throw(RangeError);
			expect(function () {bigger.multiply(-2);}).to.throw(RangeError);
		});
		specify('Integer#divide()', function () {
			var normal = Integer(123);
			expect(function () {normal.divide(0);}).to.throw(RangeError);
			expect(function () {normal.divide(Number.MAX_VALUE);}).to.throw(RangeError);
		});
		specify('Integer#modulo()', function () {
			var normal = Integer(123);
			expect(function () {normal.modulo(0);}).to.throw(RangeError);
		});
	});
	describe('should throw when an invalid argument is provided', function () {
		var count = 0;
		['add', 'subtract', 'multiply', 'divide', 'modulo'].forEach(function (method) {
			specify('Integer#' + method + '()', function () {
				var int = Integer(1);
				expect(function () {int[method]();}).to.throw(TypeError);
				expect(function () {int[method](undefined);}).to.throw(TypeError);
				expect(function () {int[method](null);}).to.throw(TypeError);
				expect(function () {int[method](new String('1'));}).to.throw(TypeError);
				expect(function () {int[method](new Number(1));}).to.throw(TypeError);
				expect(function () {int[method]([]);}).to.throw(TypeError);
				expect(function () {int[method]({low: 1, high: 0});}).to.throw(TypeError);
				expect(function () {int[method](Object.create(Integer(1)));}).to.throw(TypeError);
				expect(function () {int[method](Object.create(Integer.prototype));}).to.throw(TypeError);
			});
			count += 1;
		});
		expect(count).to.equal(5);
	});
});
