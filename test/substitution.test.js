// Write your tests here!
const { expect, assert } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    describe("error handling",() =>{
        it("should return false if alphabet parameter is too long", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev!");
            expect(actual).to.be.false;
        });
        it("should return false if alphabet parameter is too short", () => {
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });
        it("should return false if chars in alphabet are not unique", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
        });
        it("should return false if alphabet has a space character in it", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzib v");
            expect(actual).to.be.false;
        });
        it("should return false if alphabet argument is missing", () => {
            const actual = substitution("message");
            expect(actual).to.be.false;
        });
    });
    describe("encoding",() =>{
        it("should encode message correctly", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        });
        it("should work with different substitution alphabets that include special characters", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding",() =>{
        it("should decode message correctly", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        it("should work with different substitution alphabets that include special characters", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "you are an excellent spy";
            expect(actual).to.equal(expected);
        });
    });
});