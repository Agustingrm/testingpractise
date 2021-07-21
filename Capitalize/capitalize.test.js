const capitalize = require("./capitalize");

test("Capitalize Word", () => expect(capitalize("test")).toBe("Test"));

test("Capitalize Phrase", () => expect(capitalize("is this working?")).toBe("Is this working?"));
