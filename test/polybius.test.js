// Write your tests here!
const { expect, assert } = require("chai");
const polybius = require("../src/polybius").polybius;

describe("polybius()",() => {
    describe("encoding", () => {
        it("should return a string", () => {
            const actual = polybius("message");
            assert.isString(actual);
        });
        it("should return the correct encoded message", () => {
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
        it("should translate bot i and j to 42", () => {
            const actual = polybius("i j");
            const expected = "42 42";
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const actual = polybius("the quick brown fox jumps over the lazy dog");
            const expected = "443251 1454423152 2124432533 124335 4254235334 43155124 443251 13115545 414322";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should return the correct decoded message", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });
        it("should translate 42 into (i/j)", () => {
            const actual = polybius("42",false);
            const expected = "(i/j)";
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const actual = polybius("443251 1454423152 2124432533 124335 4254235334 43155124 443251 13115545 414322", false);
            const expected = "the qu(i/j)ck brown fox (i/j)umps over the lazy dog";
            expect(actual).to.equal(expected);
        });
        it("should return false if lenght message to be decoded is odd", () => {
            const actual = polybius("23 4576234563781", false);
            expect(actual).to.be.false;
        });
    });
});