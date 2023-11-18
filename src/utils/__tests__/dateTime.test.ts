import {
  getDayOfYear,
  getDisplayTimeZone,
  getTimeInDisplayFormat,
  getWeekOfYear,
} from "../dateTime";

describe("dateTime util tests", () => {
  it("tests time display function", () => {
    const actual = getTimeInDisplayFormat(new Date("11/09/2023 09:15:45"));
    const expected = "09:15";
    expect(actual).toStrictEqual(expected);
  });

  it("tests time display function 2", () => {
    const actual = getTimeInDisplayFormat(new Date("11/09/2023 23:59:59"));
    const expected = "23:59";
    expect(actual).toStrictEqual(expected);
  });

  it("tests time display function 3", () => {
    const actual = getTimeInDisplayFormat(new Date("12/12/2023 00:00:00"));
    const expected = "00:00";
    expect(actual).toStrictEqual(expected);
  });

  it("tests getDisplayTimeZone", () => {
    const actual = getDisplayTimeZone(new Date("11/09/2023 09:15:45"));
    const expected = "IST";
    expect(actual).toStrictEqual(expected);
  });

  it("tests getDisplayTimeZone 2", () => {
    const actual = getDisplayTimeZone();
    const expected = "IST";
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getDayOfYear 1", () => {
    const expected = 2;
    const actual = getDayOfYear(new Date(2016, 0, 2), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getDayOfYear 2", () => {
    const expected = 33;
    const actual = getDayOfYear(new Date(2016, 1, 2), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getDayOfYear 3", () => {
    const expected = 30;
    const actual = getDayOfYear(new Date(2016, 0, 30), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getDayOfYear 4", () => {
    const expected = 314;
    const actual = getDayOfYear(new Date(2016, 10, 9), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getDayOfYear 5", () => {
    const expected = 1401;
    const actual = getDayOfYear(new Date(2019, 10, 1), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getWeekOfYear 1", () => {
    const expected = 0;
    const actual = getWeekOfYear(new Date(2016, 0, 1), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getWeekOfYear 2", () => {
    const expected = 1;
    const actual = getWeekOfYear(new Date(2016, 0, 8), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getWeekOfYear 3", () => {
    const expected = 52;
    const actual = getWeekOfYear(new Date(2016, 11, 31), 2016);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getWeekOfYear 4", () => {
    const expected = 52;
    const actual = getWeekOfYear(new Date(2017, 11, 31), 2017);
    expect(actual).toStrictEqual(expected);
  });

  it("tests for getWeekOfYear 5", () => {
    const expected = 44;
    const actual = getWeekOfYear(new Date(2017, 10, 9), 2017);
    expect(actual).toStrictEqual(expected);
  });
});
