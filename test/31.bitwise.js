var expect = require('chai').expect;
var Integer = require('../.');

function equal(a, b) {
	expect(a).to.be.an.instanceof(Integer);
	expect(a.toString()).to.equal(b);
}

describe('Bitwise operations', function () {
	specify('Integer#and()', function () {
		equal(Integer(0).and(Integer(4)), '0');
		equal(Integer(5382).and('1588'), '1028');
	});
	specify('Integer#or()', function () {
		equal(Integer(0).or(Integer(4)), '4');
		equal(Integer(5382).or('1588'), '5942');
	});
	specify('Integer#xor()', function () {
		equal(Integer(0).xor(Integer(4)), '4');
		equal(Integer(5382).xor('1588'), '4914');
	});
	specify('Integer#not()', function () {
		equal(Integer(0).not(), '18446744073709551615');
		equal(Integer(5382).not(), '18446744073709546233');
	});
	specify('Integer#shiftLeft()', function () {
		equal(Integer(0).shiftLeft(4), '0');
		equal(Integer(3).shiftLeft(1588), '13510798882111488');
	});
	specify('Integer#shiftRight()', function () {
		equal(Integer(0).shiftRight(4), '0');
		equal(Integer(3452342).shiftRight(706), '863085');
		equal(Integer(-1).shiftRight(7), '144115188075855871');
		equal(Integer('9223372036854775807').shiftRight(5), '288230376151711743');
	});
	describe('should throw when an invalid argument is provided', function () {
		var count = 0;
		['and', 'or', 'xor'].forEach(function (method) {
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
		expect(count).to.equal(3);

		['shiftLeft', 'shiftRight'].forEach(function (method) {
			specify('Integer#' + method + '()', function () {
				var int = Integer(1);
				expect(function () {int[method]();}).to.throw(TypeError);
				expect(function () {int[method](undefined);}).to.throw(TypeError);
				expect(function () {int[method](null);}).to.throw(TypeError);
				expect(function () {int[method]('1');}).to.throw(TypeError);
				expect(function () {int[method](new Number(1));}).to.throw(TypeError);
				expect(function () {int[method]([]);}).to.throw(TypeError);
				expect(function () {int[method](Integer(1));}).to.throw(TypeError);
				expect(function () {int[method](-1);}).to.throw(TypeError);
				expect(function () {int[method](0x100000000);}).to.throw(TypeError);
			});
			count += 1;
		});
		expect(count).to.equal(5);
	});
});
