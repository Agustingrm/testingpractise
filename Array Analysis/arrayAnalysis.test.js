const arrayAnalysis = require("./arrayAnalysis");

test("Analysis 1", () =>
  expect(arrayAnalysis([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  }));

test("Analysis 2", () =>
  expect(arrayAnalysis([0, 0, 0, 0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 7,
  }));

test("Analysis 1", () =>
  expect(arrayAnalysis([10])).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1,
  }));
