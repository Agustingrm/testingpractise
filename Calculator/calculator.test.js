const calculator = module.require("./calculator");

test("add", () => expect(calculator.add(1, 2)).toBe(3));
test("sub", () => expect(calculator.sub(5, 2)).toBe(3));
test("mul", () => expect(calculator.mul(3, 4)).toBe(12));
test("div", () => expect(calculator.div(8, 2)).toBe(4));
