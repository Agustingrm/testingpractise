const caesarCipher = require("./caesarCipher");

test("Word Caesar Cipher", () => expect(caesarCipher("hello", 2)).toBe("jgnnq"));

test("Capitalize Word Caesar Cipher", () => expect(caesarCipher("Argentina", 15)).toBe("Pgvtcixcp"));

test("Capitalize Phrase Caesar Cipher", () => expect(caesarCipher("Hello Vietnam", 8)).toBe("Pmttw(Dqmbviu"));
