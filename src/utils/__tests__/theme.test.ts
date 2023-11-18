import { THEMES_ENUM } from "../constants";
import { changeThemeDependingOnTime } from "../theme";

describe("theme tests", () => {
  it("should return light when hour is 8", () => {
    const expected = THEMES_ENUM.LIGHT;
    const actual = changeThemeDependingOnTime(8);
    expect(actual).toStrictEqual(expected);
  });

  it("should return light when hour is 12", () => {
    const expected = THEMES_ENUM.LIGHT;
    const actual = changeThemeDependingOnTime(12);
    expect(actual).toStrictEqual(expected);
  });

  it("should return light when hour is 17", () => {
    const expected = THEMES_ENUM.LIGHT;
    const actual = changeThemeDependingOnTime(17);
    expect(actual).toStrictEqual(expected);
  });

  it("should return dark when hour is 18", () => {
    const expected = THEMES_ENUM.DARK;
    const actual = changeThemeDependingOnTime(18);
    expect(actual).toStrictEqual(expected);
  });

  it("should return dark when hour is 24", () => {
    const expected = THEMES_ENUM.DARK;
    const actual = changeThemeDependingOnTime(24);
    expect(actual).toStrictEqual(expected);
  });
});
