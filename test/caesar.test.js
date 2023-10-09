// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar()", () => {
    it("returns false if shift value is 0", () => {
        const actual = caesar("message", 0);
        expect(actual).to.be.false;
    });
    it("returns false if shift is missing", () => {
        const actual = caesar("message");
        expect(actual).to.be.false;
    });
    it("returns false if shift value is greater than 25", () => {
        const actual = caesar("message", 26);
        expect(actual).to.be.false;
    });
    it("returns false if shift value is less than -25", () => {
        const actual = caesar("message", -26);
        expect(actual).to.be.false;
    });

    describe("encoding", () => {
        it("ignores capital letters", () => {
            const actual = caesar("Capital LeTTers", 3);
            const expected = "fdslwdo ohwwhuv";
            expect(actual).to.equal(expected);
        });

        it("should return correct message when a possitive shift value is given", () => {
            const actual = caesar("thinkful", 3);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });

        it("should return correct message when a negative shift value is given", () => {
            const actual = caesar("thinkful", -3);
            const expected = "qefkhcri";
            expect(actual).to.equal(expected);
        });

        it("should handle shifts that go past the end of the alphabet", () => {
            const actual = caesar("buzzy bee",5);
            const expected = "gzeed gjj";
            expect(actual).to.equal(expected);
        });

        it("should handle shifts that go beyond the begining of the alphabet", () => {
            const actual = caesar("a secret message",-7);
            const expected = "t lxvkxm fxlltzx";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and nonalphabetic symbols", () => {
            const actual = caesar("with...em, symbols?!",5);
            const expected = "bnym...jr, xdrgtqx?!";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        it("ignores capital letters", () => {
            const actual = caesar("fdsLwdo ohWWhuv", 3, false);
            const expected = "capital letters";
            expect(actual).to.equal(expected);
        });

        it("should return correct message when a possitive shift value is given", () => {
            const actual = caesar("wklqnixo", 3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should return correct message when a negative shift value is given", () => {
            const actual = caesar("qefkhcri", -3, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
        
        it("should handle shifts that go beyond the start of the alphabet", () => {
            const actual = caesar("t lxvkxm fxlltzx", -7, false);
            const expected = "a secret message";
            expect(actual).to.equal(expected);
        });

        it("should handle shifts that go past the end of the alphabet", () => {
            const actual = caesar("gzeed gjj", 5, false);
            const expected = "buzzy bee";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and nonalphabetic symbols", () => {
            const actual = caesar("bnym...jr, xdrgtqx?!", 5, false);
            const expected = "with...em, symbols?!";
            expect(actual).to.equal(expected);
        });
    });
});