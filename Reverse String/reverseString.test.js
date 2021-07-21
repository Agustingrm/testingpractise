const reverseString = require("./reverseString");

test("Reverse Word", () => expect(reverseString("hello")).toBe("olleh"));

test("Reverse Phrase", () => expect(reverseString("Good Morning Vietnam")).toBe("manteiV gninroM dooG"));
