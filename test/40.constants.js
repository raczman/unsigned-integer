var expect = require('chai').expect;
var Integer = require('../.');

describe('Constants', function () {
	specify('Integer.MAX_VALUE', function () {
		expect(Integer.isInstance(Integer.MAX_VALUE)).to.be.true;
		expect(String(Integer.MAX_VALUE)).to.equal('9223372036854775807');
		expect(Integer.MAX_VALUE.toString()).to.equal('9223372036854775807');
		expect(Integer.MAX_VALUE.toString(2)).to.equal('111111111111111111111111111111111111111111111111111111111111111');
		expect(Integer.MAX_VALUE.toString(36)).to.equal('1y2p0ij32e8e7');
		expect(function () {Number(Integer.MAX_VALUE);}).to.throw(RangeError);
		expect(function () {Integer.MAX_VALUE.toNumber();}).to.throw(RangeError);
		expect(Integer.MAX_VALUE.toNumberUnsafe()).to.equal(9223372036854776000);
		expect(Integer.MAX_VALUE.low).to.equal(-1);
		expect(Integer.MAX_VALUE.high).to.equal(0x7fffffff);
		expect(Integer.MAX_VALUE.bitSizeAbs()).to.equal(63);
		expect(Integer.MAX_VALUE.isZero()).to.be.false;
		expect(Integer.MAX_VALUE.isSafe()).to.be.false;
	});
	specify('Integer.MIN_VALUE', function () {
		expect(Integer.isInstance(Integer.MIN_VALUE)).to.be.true;
		expect(String(Integer.MIN_VALUE)).to.equal('9223372036854775808');
		expect(Integer.MIN_VALUE.toString()).to.equal('9223372036854775808');
		expect(Integer.MIN_VALUE.toString(2)).to.equal('1000000000000000000000000000000000000000000000000000000000000000');
		expect(Integer.MIN_VALUE.toString(36)).to.equal('1y2p0ij32e8e8');
		expect(function () {Number(Integer.MIN_VALUE);}).to.throw(RangeError);
		expect(function () {Integer.MIN_VALUE.toNumber();}).to.throw(RangeError);
		expect(Integer.MIN_VALUE.toNumberUnsafe()).to.equal(9223372036854776000);
		expect(Integer.MIN_VALUE.low).to.equal(0);
		expect(Integer.MIN_VALUE.high).to.equal(-0x80000000);
		expect(Integer.MIN_VALUE.bitSizeAbs()).to.equal(64);
		expect(Integer.MIN_VALUE.isZero()).to.be.false;
		expect(Integer.MIN_VALUE.isSafe()).to.be.false;
	});
	specify('Integer.ZERO', function () {
		expect(Integer.isInstance(Integer.ZERO)).to.be.true;
		expect(String(Integer.ZERO)).to.equal('0');
		expect(Integer.ZERO.toString()).to.equal('0');
		expect(Integer.ZERO.toString(2)).to.equal('0');
		expect(Integer.ZERO.toString(36)).to.equal('0');
		expect(Number(Integer.ZERO)).to.equal(0);
		expect(Integer.ZERO.toNumber()).to.equal(0);
		expect(Integer.ZERO.toNumberUnsafe()).to.equal(0);
		expect(Integer.ZERO.low).to.equal(0);
		expect(Integer.ZERO.high).to.equal(0);
		expect(Integer.ZERO.bitSizeAbs()).to.equal(1);
		expect(Integer.ZERO.isZero()).to.be.true;
		expect(Integer.ZERO.isSafe()).to.be.true;
	});
	specify('Integer.ONE', function () {
		expect(Integer.isInstance(Integer.ONE)).to.be.true;
		expect(String(Integer.ONE)).to.equal('1');
		expect(Integer.ONE.toString()).to.equal('1');
		expect(Integer.ONE.toString(2)).to.equal('1');
		expect(Integer.ONE.toString(36)).to.equal('1');
		expect(Number(Integer.ONE)).to.equal(1);
		expect(Integer.ONE.toNumber()).to.equal(1);
		expect(Integer.ONE.toNumberUnsafe()).to.equal(1);
		expect(Integer.ONE.low).to.equal(1);
		expect(Integer.ONE.high).to.equal(0);
		expect(Integer.ONE.bitSizeAbs()).to.equal(1);
		expect(Integer.ONE.isZero()).to.be.false;
		expect(Integer.ONE.isSafe()).to.be.true;
	});
	specify('Integer.NEG_ONE', function () {
		expect(Integer.isInstance(Integer.NEG_ONE)).to.be.true;
		expect(String(Integer.NEG_ONE)).to.equal('18446744073709551615');
		expect(Integer.NEG_ONE.toString()).to.equal('18446744073709551615');
		expect(Integer.NEG_ONE.toString(2)).to.equal('1111111111111111111111111111111111111111111111111111111111111111');
		expect(Integer.NEG_ONE.toString(36)).to.equal('3w5e11264sgsf');

		expect(Integer.NEG_ONE.low).to.equal(-1);
		expect(Integer.NEG_ONE.high).to.equal(-1);
		expect(Integer.NEG_ONE.bitSizeAbs()).to.equal(64);
		expect(Integer.NEG_ONE.isZero()).to.be.false;
		expect(Integer.NEG_ONE.isSafe()).to.be.false;
	});
});
