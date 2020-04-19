import getMultiplesOfNumber from "./getMultiplesOfNumber";

describe("getMultiplesOfNumber", () => {
  it("should return the multiples of a number provided", () => {
    const result = getMultiplesOfNumber(4);

    expect(result).toEqual([1, 2]);
  });

  it("should return an empty array if selected number is not passed in", () => {
    const result = getMultiplesOfNumber();

    expect(result).toEqual([]);
  });
});
